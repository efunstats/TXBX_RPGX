var preload = {};
preload.perm = {};
preload.temp = {};

function preloadSceneResources(id){
	for(command of sceneData[id].script){
		let src;
		switch(command.substr(1, command.lastIndexOf(">") -1)){
			case "EV":
				src = constructImagePath(command.substr(command.lastIndexOf(">") +1, command.indexOf(",") - (command.lastIndexOf(">") +1)), id);
				preloadImage(src, false);
			break;
			case "ACTOR":
				src = constructImagePath(command.substr(command.indexOf(",") + 1, command.substr(command.indexOf(",") + 1).indexOf(",")), id);
				preloadImage(src, false);
			break;
			case "VOICE_PLAY":
				src = constructVoiceAudioPath(command.substr(command.lastIndexOf(">") +1), id);
				preloadAudio(src, false);
			break;
			case "BGM_PLAY":
				src = constructBGMAudioPath(command.substr(command.lastIndexOf(">") +1, command.indexOf(",") - (command.lastIndexOf(">") +1)));
				preloadAudio(src, false);
			break;
			case "SE_PLAY":
				src = constructSEAudioPath(command.substr(command.lastIndexOf(">") +1));
				preloadAudio(src, false);
			break;
			default:
			break;
		}
	}
}

function preloadImage(src, perm){
	//If the resource is already loaded, return.
	if(perm){
		if(preload.perm[src]){
			return;
		}
	} else {
		if(preload.temp[src]){
			return;
		}
	}

	let img = new Image();
	img.className = perm ? "permPreloadImage" : "tempPreloadImage";
	img.src = src;

	if(perm){
		preload.perm[src] = img;
		document.getElementById("preload-perm-elem").append(img);
	} else {
		preload.temp[src] = img;
		document.getElementById("preload-temp-elem").append(img);
	}
}

function preloadAudio(src, perm){
	//If the resource is already loaded, return.
	if(perm){
		if(preload.perm[src]){
			return;
		}
	} else {
		if(preload.temp[src]){
			return;
		}
	}

	let audio = new Audio();
	audio.src = src;

	if(perm){
		preload.perm[src] = audio;
	} else {
		preload.temp[src] = audio;
	}
}

function constructImagePath(src, id){
	return "./scenes/" + id + "/images/" + src + ".png";
}

function constructVoiceAudioPath(src, id){
	return "./scenes/" + id + "/voices/" + src + ".ogg";
}

function constructBGMAudioPath(src){
	return "./data/audio/bgm/" + src + ".ogg";
}

function constructSEAudioPath(src){
	return "./data/audio/se/" + src + ".ogg";
}

function emptyTempPreload(){
	preload.temp = {};
	killChildren(document.getElementById("preload-temp-elem"))
}