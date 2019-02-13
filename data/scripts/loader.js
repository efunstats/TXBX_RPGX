function loadFile(path, id, callback) {
    requests++;
    var sceneFile = new XMLHttpRequest();
    sceneFile.open("GET", path, true);
    sceneFile.overrideMimeType("text/plain");
    // sceneFile.onreadystatechange = function() {
    //     if (sceneFile.readyState === 4) {
    //         if (sceneFile.status === 200 || sceneFile.status === 0) {
    //             callback(id, sceneFile.responseText);
    //         }
    //     }
    // }
    sceneFile.onload = function() {
        callback(id, sceneFile.responseText);
        requests--;
        checkRequests();
    }
    sceneFile.onerror = function() {
        console.log("Missing scene: " + id);
        requests--;
        checkRequests();
    }
    sceneFile.send(null);
}

function parseSceneScript(id, data) {
    let lines = data.split("\r\n");
    //Add Scene parts to sceneArray
    var sceneArray = [];
    let scenePart = [];
    for (line of lines) {
        if (line.startsWith("//")) {
            //Ignore comments
        } else {
            sceneArray.push(line)
        }
    }
    if(sceneData[id].script){
        sceneData[id].engScript = sceneArray;
    } else {
        sceneData[id].script = sceneArray;
    }
}

function parseImgData(id, data) {
    sceneData[id].imgData = JSON.parse(data).pairList;
}

function createMenu(){
    menuSceneImgs = [];
    for(scene in sceneData){
        let img = new Image()
        img.src = "./scenes/" + scene + "/" + sceneData[scene].imgData[0].parent + ".png"
        menuSceneImgs.push(img);
    }
}

function mergeSceneData(){
    // We're adding certain things as arrays just to make it easier when filtering.
    // I don't do javascript and never knew assigning an object to a variable was
    // just a reference to it rather than a copy so I had to stringify -> JSON it
    // because I couldn't remember how it worked and didn't feel like making it
    // work a different way.
    for(key in sceneMeta){
        let sceneTags = JSON.parse(JSON.stringify(sceneMeta[key].sceneTags));
        let sceneChar = JSON.parse(JSON.stringify(sceneMeta[key].characterID));
        let sceneArtist = JSON.parse(JSON.stringify(sceneMeta[key].artistOverwrite));
        let charArtist = [];
        let charNames = [];
        let charOriginal;
        let charForm = [];

        if(isArray(sceneChar)){
            let allCharTags = [];
            let charArtists = [];
            let charForms = [];
            charOriginal = false;
            for(char in sceneChar){
                let charForm = JSON.parse(JSON.stringify(sceneMeta[key].characterForm[char]));
                let charTags = JSON.parse(JSON.stringify(characterMeta[sceneChar[char]].tags.base));
                let charGender = JSON.parse(JSON.stringify(characterMeta[sceneChar[char]].gender));
                let sceneIgnoredTags = JSON.parse(JSON.stringify(sceneMeta[key].ignoredCharacterTags[char]));
                // Merge the base tags with the character form tags
                charTags.push.apply(charTags, characterMeta[sceneChar[char]].tags[charForm]);
                charTags = ignoreTags(sceneIgnoredTags, charTags);
                allCharTags.push.apply(allCharTags, charTags);

                charArtists.push.apply(charArtists, characterMeta[sceneChar[char]].artist);
                charForms.push(charForm);
                charNames.push.apply(charNames, characterMeta[sceneChar[char]].name);

                if(!charOriginal){
                    if(characterMeta[sceneChar[char]].originalCharacter){
                        charOriginal = true;
                    }
                }

                sceneTags[charGender].push.apply(sceneTags[charGender], allCharTags);
                sceneTags[charGender].sort();
                sceneTags[charGender] = removeDupeTags(sceneTags[charGender]);
            }

            if(sceneArtist != ""){
                charArtists = sceneArtist;
            } else {
                charArtists.sort();
                charArtists = removeDupeTags(charArtists);
            }

            charArtist = charArtists;
            charForm = charForms
        } else {
            let charaForm = JSON.parse(JSON.stringify(sceneMeta[key].characterForm));
            let charTags = JSON.parse(JSON.stringify(characterMeta[sceneChar].tags.base));
            let charaArtist = JSON.parse(JSON.stringify(characterMeta[sceneChar].artist));
            let charGender = JSON.parse(JSON.stringify(characterMeta[sceneChar].gender));
            let sceneIgnoredTags = JSON.parse(JSON.stringify(sceneMeta[key].ignoredCharacterTags));
            charOriginal = JSON.parse(JSON.stringify(characterMeta[sceneChar].originalCharacter));
            charTags.push.apply(charTags, characterMeta[sceneChar].tags[charaForm]);
            charTags = ignoreTags(sceneIgnoredTags, charTags);

            if(sceneArtist != ""){
                charArtist = sceneArtist;
            } else {
                charArtist = charaArtist;
            }

            sceneTags[charGender].push.apply(sceneTags[charGender], charTags);
            sceneTags[charGender].sort();
            sceneTags[charGender] = removeDupeTags(sceneTags[charGender]);
            charNames = characterMeta[sceneChar].name;
            charForm = [charaForm];
        }
        sceneData[key].favorite = false;
        if(prefs.favorites.indexOf(key) > -1){
            sceneData[key].favorite = true;
        }

        sceneData[key].tags = sceneTags;
        sceneData[key].artist = charArtist;
        sceneData[key].characterNames = charNames;
        sceneData[key].originalCharacter = charOriginal;
        sceneData[key].characterForms = charForm;

    }
}

function ignoreTags(ignoredTags, charTags){
    charTags.sort();
    charTags = removeDupeTags(charTags);
    for(tag of ignoredTags){
        if(charTags.indexOf(tag) > -1){
            charTags.splice(charTags.indexOf(tag), 1);
        }
    }
    return charTags;
}