function initSearch(){
	document.getElementsByName("sceneSearch")[0].addEventListener("click", function(){
		runSearch();
	}, true);
	document.getElementsByName("filterReset")[0].addEventListener("click", function(){
		sceneList = Object.keys(sceneData);
		constructSceneSelect();
		searchMenu.style.display = "none";
	}, true);
	document.getElementsByName("searchCancel")[0].addEventListener("click", function(){
		searchMenu.style.display = "none";
	}, true);
}

function runSearch(){
	let searchResults = Object.keys(sceneData);
	let searchName = document.getElementsByName("charName")[0].value;
	let searchArtist = document.getElementsByName("sceneArtist")[0].value;
	let searchFemaleTags = document.getElementsByName("femaleTags")[0].value;
	let searchAllFemaleTags = document.getElementsByName("femaleTagsAll")[0].checked;
	let searchMaleTags = document.getElementsByName("maleTags")[0].value;
	let searchAllMaleTags = document.getElementsByName("maleTagsAll")[0].checked;
	let searchMiscTags = document.getElementsByName("miscTags")[0].value;
	let searchAllMiscTags = document.getElementsByName("miscTagsAll")[0].checked;
	let searchOrig = document.getElementsByName("charOrig")[0].checked;
	let searchMain = document.getElementsByName("charMain")[0].checked
	let searchFav = document.getElementsByName("sceneFav")[0].checked;
	let searchEng = document.getElementsByName("sceneEng")[0].checked;

	if(searchEng){
		let filtered = [];
		for(scene of searchResults){
			if(sceneData[scene].engScript){
				filtered.push(scene);
			}
		}
		searchResults = filtered;
	}
	if(searchFav){
		let filtered = [];
		for(scene of searchResults){
			if(sceneData[scene].favorite){
				filtered.push(scene);
			}
		}
		searchResults = filtered;
	}
	if(searchMain){
		let filtered = [];
		for(scene of searchResults){
			if(!sceneData[scene].originalCharacter){
				filtered.push(scene);
			}
		}
		searchResults = filtered;
	} else if(searchOrig){
		let filtered = [];
		for(scene of searchResults){
			if(sceneData[scene].originalCharacter){
				filtered.push(scene);
			}
		}
		searchResults = filtered;
	}
	if(searchName != ""){
		searchResults = searchSceneArrays(searchName, searchResults, "characterNames");
	}
	if(searchArtist != ""){
		searchResults = searchSceneArrays(searchArtist, searchResults, "artist");
	}
	if(searchFemaleTags != ""){
		searchResults = searchSceneTags(searchFemaleTags, searchResults, "female", searchAllFemaleTags);
	}
	if(searchMaleTags != ""){
		searchResults = searchSceneTags(searchMaleTags, searchResults, "male", searchAllMaleTags);
	}
	if(searchMiscTags != ""){
		searchResults = searchSceneTags(searchMiscTags, searchResults, "misc", searchAllMiscTags);
	}
	if(searchResults.length > 0){
		document.getElementById("search-error").style.display = "none";
		sceneList = searchResults;
		sceneSelectPage = 0;
		searchMenu.style.display = "none";
		constructSceneSelect();
	} else {
		document.getElementById("search-error").style.display = "inherit";
	}
}

function searchSceneArrays(input, scenes, searching){
	let inputSplit = input.split(",");
	let results = [];
	for(scene of scenes){
		let nameFound = false;
		for(value of inputSplit){
			if(nameFound){
				break;
			}
			for(search of sceneData[scene][searching]){
				if(value.toLowerCase().replace(/ /g, "") == search.toLowerCase().replace(/ /g, "")){
					nameFound = true;
					results.push(scene)
					break;
				}
			}
		}
	}
	return results;
}

function searchSceneTags(input, scenes, section, all){
	let inputSplit = input.split(",");
	let results = [];
	for(scene of scenes){
		let tagsFound = [];
		for(value of inputSplit){
			if(!all && tagsFound.length > 0){
				break;
			} else if (all && tagsFound.length == inputSplit.length){
				break;
			}
			for(tag of sceneData[scene].tags[section]){
				if(value.toLowerCase().replace(/ /g, "") == tag.toLowerCase().replace(/ /g, "")){
					tagsFound.push(tag);
					break;
				}
			}
		}
		if(all && tagsFound.length == inputSplit.length){
			results.push(scene);
		} else if(!all && tagsFound.length > 0){
			results.push(scene);
		}
	}
	return results;
}