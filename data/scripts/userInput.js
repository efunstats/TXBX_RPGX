function initUserInput(){
	document.addEventListener("click", function(e){
		switch(currentView){
			case 0: //Start Page
			break;
			case 1: //Scene Select
				if(e.target.matches(".cg-container")){
					if(e.button == 0){
						currentScene = e.target.getAttribute("sceneid")
						loadSceneViewer(currentScene);
					} else if(e.button == 2){
						let sceneId = e.target.getAttribute("sceneid");
						if(sceneData[sceneId].favorite){
							prefs.favorites.splice(prefs.favorites.indexOf(sceneId), 1);
							toLocalStorage("favorites", prefs.favorites);
						} else {
							prefs.favorites.push(sceneId);
							prefs.favorites.sort();
							toLocalStorage("favorites", prefs.favorites);
						}
						sceneData[sceneId].favorite = !sceneData[sceneId].favorite;
					}
					
				}

			break;
			case 2: //Scene Viewer
			break;
			case 3: //Options
			break;
			default:
			break;
		}
	}, false);

	document.addEventListener("contextmenu", function(e){
		return false;
	}, false)

	document.addEventListener("keydown", function(e){
		switch(currentView){
			case 0: //Start Page
			break;
			case 1: //Scene Select
				switch(e.code){
					case "Enter":
						if(document.activeElement.id == "page-number"){
							if(pageNumber.value >= 1 && pageNumber.value <= (Math.floor(sceneList.length / (prefs.rows * prefs.columns)) + 1)){
								sceneSelectPage = pageNumber.value - 1;
								constructSceneSelect();
								pageNumber.blur();
							}
						}
					break;
					default:
					break;
				}
			break;
			case 2: //Scene Viewer
				switch(e.code){
					case "ControlLeft":
						progressScene()
					break;
					case "KeyA":
						toggleSceneAutoMode();
					break;
					case "Escape":
						endScene();
						currentBGM.pause();
						currentSE.pause();
						currentVoice.pause();
					break;
					case "Space":
						if(skippableAnimation || prefs.skipAnimations){
							sceneMode = 0;
							progressScene()
						}
					break;
					case "KeyH":
						hideTextBox();
						break;
					default:
					break;
				}
			break;
			case 3: //Options
			break;
			default:
			break;
		}
	}, false);

	document.addEventListener("keyup", function(e){
		switch(currentView){
			case 0: //Start Page
			break;
			case 1: //Scene Select
			break;
			case 2: //Scene Viewer
				switch(e.code){
					// case "ControlLeft":
					// 	toggleSceneSkipping();
					// break;
					default:
					break;
				}
			break;
			case 3: //Options
			break;
			default:
			break;
		}
	}, false);

	viewer.addEventListener("click", function(e){
		switch(currentView){
			case 0: //Start Page
			break;
			case 1: //Scene Select
			break;
			case 2: //Scene Viewer
				if(skippableAnimation || prefs.skipAnimations){
					sceneMode = 0;
					progressScene()
				}
			break;
			case 3: //Options
				pauseCGSearch = false;
				cgNext();
			break;
			default:
			break;
		}
	}, false);

	document.getElementById("prev-page").addEventListener("click", prevPage, false);
	document.getElementById("next-page").addEventListener("click", nextPage, false);
	pageNumber.addEventListener("click", function(){
		pageNumber.value = "";
	}, false);
	pageNumber.addEventListener("focusout", function(){
		setPageNumber();
	}, false);
	document.getElementsByName("head-controls")[0].addEventListener("click", function(){
		if(sceneMode != 0){
			sceneMode = 0;
		}
		if(currentView != 3){
			prevView = currentView;
		}
		currentView = 3;
		closeMenus();
		controlsMenu.style.display = "inherit";
	}, false);
	document.getElementsByName("head-options")[0].addEventListener("click", function(){
		if(sceneMode != 0){
			sceneMode = 0;
		}
		if(currentView != 3){
			prevView = currentView;
		}
		currentView = 3;
		closeMenus();
		optsMenu.style.display = "inherit";
	}, false);
	document.getElementsByName("head-search")[0].addEventListener("click", function(){
		if(currentView == 1){
			closeMenus();
			searchMenu.style.display = "inherit";
		}
	}, false);
	document.getElementsByName("foot-exit")[0].addEventListener("click", function(){
		if(currentView == 2){
			endScene();
			currentBGM.pause();
			currentSE.pause();
			currentVoice.pause();
		}
	}, false);
	document.getElementsByName("foot-skip")[0].addEventListener("click", function(){
		if(currentView == 2){
			toggleSceneSkipping();
		}
	}, false);
	document.getElementsByName("foot-auto")[0].addEventListener("click", function(){
		if(currentView == 2){
			toggleSceneAutoMode();
		}
	}, false);
	document.getElementsByName("controls-close")[0].addEventListener("click", function(){
		controlsMenu.style.display = "none";
		currentView = prevView;
	}, false);
}

function toggleSceneSkipping(){
	if(sceneMode != 2){
		sceneMode = 2;
		progressScene();
	} else if(sceneMode == 2){
		sceneMode = 0;
	}
}

function toggleSceneAutoMode(){
	if(sceneMode != 1){
		sceneMode = 1;
		sceneAutoMode();
	} else if (sceneMode == 1){
		sceneMode = 0;
		clearTimeout(sceneNextAuto);
	}
}

function closeMenus(){
	controlsMenu.style.display = "none";
	optsMenu.style.display = "none";
	searchMenu.style.display = "none";
}

function hideTextBox(){
	sceneTextBox.style.display = sceneTextBox.style.display != "none" ? "none" : "inherit";
}