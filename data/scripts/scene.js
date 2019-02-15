// processSceneCommand() stores commands here for runSceneCommands() to use.
var sceneCommands = [];
// processSceneCommand() sets to true so multiple commands can be added to sceneCommands
var sceneProcessingGroup = false;
// Once a PAUSE is hit this will be true and wait for user input.
var scenePaused = false;
// Set to false once text is added and true once the user progresses the scene.
var canEmptyTextBox = false;
// ID of the current scene
var currentScene = "";
// Index of the current scene
var currentSceneIndex = 0;
// 0 = Manual, 1 = Auto, 2 = Skip
var sceneMode = 0;
// Actor elements added by the ACTOR command
var actors = [];
// EFFECTS are animations but are skippable, other commands call animations such as
// ACTORS fading in, these are not and will set it to false to pause until the
// animation is finished.
var skippableAnimation = true;
// If any element is currently being animated this will be set to true so the
// script can't skip any skippable animations without user input.
var animatingElement = false;
// Elements that are currently being animated, if this has an element in it when the
// user clicks then all Elements will have their animations removed.
var animatedElements = [];
// Alternates between true and false depending on which Flash element last flashed
// Required because CSS animations can't replay the same animation straight away.
var altFlash = false;
var altParent = false;
var altBG = false;
// If BG_OUT or EV_OUT are called then this will be set to true and the next time a
// command is run all background and event images will be wiped.
// This is done so that when fading background or events nothing leaks through.
var emptyBackgrounds = false;
var emptyEVs = false;
var emptyBG = false;
// The scene index at the time a WAIT was called, if this is the same as scene index
// once a wait is finished then the next command will be run.
var waitIndex = 0;
// Variables to decide when auto mode can continue if a line is voiced.
var sceneVoiceDuration = 0;
var lastLineVoiced = false;
// When a WAIT is called this is set to true so that the script cannot run the next
// command automatically, set to false once WAIT is finished or user input.
var sceneWaiting = false;
// Currently playing audio elements.
var currentVoice, currentBGM, currentSE;
currentVoice = new Audio();
currentBGM = new Audio();
currentSE = new Audio();
// Where the Interval is stored for fading BGM.
var bgmFadeInterval;
// Timeouts for Auto and Skip
var sceneNextAuto, sceneNextSkip;
// The elements that make up the scene viewer.
var sceneBackImages, sceneBackground, sceneBackgroundAlt, sceneOverlay, sceneFlash, sceneFlashAlt, sceneBlack, sceneActors, sceneTextBox, sceneNamePlate, sceneTextBoxText, sceneTextBoxIcon;
var currentScript;

function startScene(id){
	buildSceneViewer();
	preloadSceneResources(id);
	currentSceneIndex = 0;
	currentView = 2;
	// currentVoice = new Audio();
	// currentBGM = new Audio();
	// currentSE = new Audio();
	if(prefs.engScripts){
		if(sceneData[currentScene].engScript){
			currentScript = sceneData[currentScene].engScript
		} else {
			currentScript = sceneData[currentScene].script;
		}
	} else {
		currentScript = sceneData[currentScene].script;
	}
	if(prefs.sceneStartAuto){
		sceneMode = 1;
	}
	processSceneCommand();
}

function endScene(){
	currentView = 1;
	sceneMode = 0;
	clearTimeout(sceneNextAuto);
	clearTimeout(sceneNextSkip);
	currentScene = "";
	actors = [];
	altFlash = false;
	altParent = false;
	altBG = false;
	skippableAnimation = true;
	animatingElement = false;
	currentSceneIndex = 0;
	scenePaused = false;
	sceneProcessingGroup = false;
	sceneEventCleanup();
	killChildren(viewer);
	emptyTempPreload();
	loadSceneSelect();
}

function buildSceneViewer(){
	// Event Listeners can get left behind and that can become a problem
	// so we just kill the viewer and rebuild it every time we need it.
	sceneBackImages = document.createElement("div");
	sceneBackground = document.createElement("div");
	sceneBackgroundAlt = document.createElement("div");
	sceneOverlay = document.createElement("div");
	sceneFlash = document.createElement("div");
	sceneFlashAlt = document.createElement("div");
	sceneBlack = document.createElement("div");
	sceneActors = document.createElement("div");
	sceneTextBox = document.createElement("div");
	sceneNamePlate = document.createElement("div");
	sceneTextBoxText = document.createElement("div");
	sceneTextBoxIcon = document.createElement("div");
	sceneBackImages.classList = "viewer-main-class";
	sceneBackground.classList = "viewer-main-class viewer-large-image";
	sceneBackgroundAlt.classList = "viewer-main-class viewer-large-image";
	sceneOverlay.classList = "viewer-main-class viewer-large-image";
	sceneFlash.classList = "viewer-main-class";
	sceneFlashAlt.classList = "viewer-main-class";
	sceneBlack.classList = "viewer-main-class";
	sceneActors.classList = "viewer-main-class";
	sceneTextBox.classList = "text-box scene-text";
	sceneNamePlate.classList = "name-plate";
	sceneTextBoxText.classList = "text-box-text";
	sceneTextBoxIcon.classList = "text-box-icon";
	sceneBackgroundAlt.style.zIndex = "1";
	sceneBackground.style.zIndex = "2";
	sceneActors.style.zIndex = "3";
	sceneOverlay.style.zIndex = "7";
	sceneFlashAlt.style.zIndex = "8";
	sceneFlash.style.zIndex = "9";
	sceneBlack.style.zIndex = "10";
	sceneTextBox.style.zIndex = "11";
	sceneBlack.style.backgroundColor = "black";
	sceneBlack.style.opacity = "0";
	viewer.appendChild(sceneBackImages);
	sceneBackImages.appendChild(sceneBackgroundAlt);
	sceneBackImages.appendChild(sceneBackground);
	sceneBackImages.appendChild(sceneOverlay);
	viewer.appendChild(sceneFlashAlt);
	viewer.appendChild(sceneFlash);
	viewer.appendChild(sceneBlack);
	viewer.appendChild(sceneActors);
	viewer.appendChild(sceneTextBox);
	sceneTextBox.appendChild(sceneNamePlate);
	sceneTextBox.appendChild(sceneTextBoxText);
	sceneTextBox.appendChild(sceneTextBoxIcon);
}

function sceneEventCleanup(){
	// Remove animations and empty the animated elements array
	for(element of animatedElements){
		// End the animation and call any aniamtionend event listeners
		removeAnimation(element);
	}
	animatedElements = [];

	if(canEmptyTextBox){
		sceneTextBoxText.innerHTML = "";
	}
	
	if(emptyBackgrounds){
		for (child of sceneBackImages.children){
			child.style.backgroundImage = "";
		}
		sceneBlack.style.opacity = "0";
		emptyBackgrounds = false;
	}

	
	if(emptyBG){
		if(altBG){
			sceneBackgroundAlt.style.backgroundImage = "";
		} else {
			sceneBackground.style.backgroundImage = "";
		}
		emptyBG = false;
	}
}

function processSceneCommand(){
	if(currentView != 2){
		return;
	}
	sceneEventCleanup();
	let cmd = currentScript[currentSceneIndex];
	let tag = cmd.substr(1, cmd.lastIndexOf(">") -1);
	if(tag == "GROUP"){
		sceneProcessingGroup = true;
		currentSceneIndex++;
		processSceneCommand();
	} else if(tag == "/GROUP"){
		sceneProcessingGroup = false;
		currentSceneIndex++;
		runSceneCommands();
	} else if(sceneProcessingGroup){
		sceneCommands.push(cmd);
		currentSceneIndex++;
		processSceneCommand();
	} else {
		sceneCommands.push(cmd);
		currentSceneIndex++;
		runSceneCommands();
	}
}

function progressScene(){
	if(currentView != 2){
		return;
	}
	clearTimeout(sceneNextSkip);
	clearTimeout(sceneNextAuto);
	if(lastLineVoiced && prefs.sceneCutVoice && !currentVoice.paused){
		currentVoice.pause();
	}
	scenePaused = false;
	animatingElement = false;
	sceneWaiting = false;
	skippableAnimation = true;
	lastLineVoiced = false;
	sceneVoiceDuration = 0;
	sceneTextBoxIcon.style.display = "none";
	processSceneCommand();
}

function runSceneCommands(){
	if(currentView != 2){
		return;
	}
	for(command of sceneCommands){
		let tag = command.substr(1, command.lastIndexOf(">") -1);
		let data = command.includes(">") ? command.split(">")[1] : command;
		switch(tag){
			case "ACTOR":
				let actorIdx = Number(data.split(",")[0]);
				let actor = data.split(",")[1].trim();
				let actorPos = data.split(",")[2].trim();
				let actorPos2 = data.split(",")[3].trim();
				let actorMoving = data.split(",")[4].trim();
				let actorTiming = data.split(",")[5].trim();
				let actorDur = Number(data.split(",")[6]);
				if(actorMoving == "IN"){
					if(!actors[actorIdx]){
						actors[actorIdx] = createActor(actor, currentScene, actorPos);
						sceneActors.appendChild(actors[actorIdx]);
					}
					animateElement(actors[actorIdx], actorDur, "fade-in", actorTiming);
					skippableAnimation = false;
				} else if(actorMoving == "OUT"){
					animateElement(actors[actorIdx], actorDur, "fade-out", actorTiming);
					skippableAnimation = false;
				} else if(actorMoving == "NONE"){
					actors[actorIdx].style.backgroundImage = "url('" + constructImagePath(actor, currentScene) + "')";
				} else {
					console.log("Unknown actor movement: " + actorMoving);
				}
			break;
			case "ACTOR_FRONT":
				for(let actor of actors){
					actor.style.zIndex = "2";
				}
				actors[data].style.zIndex = "3";
			break
			case "ACTOR_OUT":
				//<ACTOR_OUT>0,CENTER,linear,1000
				let actorOutIdx = Number(data.split(",")[0]);
				let actorOutPos = data.split(",")[1].trim();
				let actorOutTiming = data.split(",")[2].trim();
				let actorOutDur = Number(data.split(",")[3]);
				animateElement(actors[actorOutIdx], actorOutDur, "fade-out", actorOutTiming);
				skippableAnimation = false;
			break;
			case "BG":
				let bgImg = data.split(",")[0].trim();
				let bgMoving = data.split(",")[1].trim();
				let bgDur = Number(data.split(",")[2]);
				let bgElem = altBG ? sceneBackgroundAlt : sceneBackground;

				// 
				sceneOverlay.style.background = "";

				if(bgImg.toLowerCase() == "black"){
					sceneBackground.style.backgroundImage = "";
					sceneBackgroundAlt.style.backgroundImage = "";
					// There's nothing to actually animate so instead of
					// wasting peoples time just break;
					break;
				} else {
					bgElem.style.zIndex = "2";
					if(altBG){
						sceneBackground.style.zIndex = "1";
					} else {
						sceneBackgroundAlt.style.zIndex = "1";
					}
					altBG = !altBG
					bgElem.style.backgroundImage = "url('" + constructImagePath(bgImg, currentScene) + "')";
				}
				if(bgMoving != "NONE"){
					animateElement(bgElem, bgDur, "fade-in");
					skippableAnimation = false;
				}
			break
			case "BG_OUT":
				// for (child of document.getElementById("back-images").children){
				// 	animateElement(child, data, "fade-out");
				// }
				animateElement(sceneBlack, data, "fade-in");
				emptyBackgrounds = true;
				skippableAnimation = false;
			break;
			case "BGM_PLAY":
				//volume 0 - 1
				// <BGM_PLAY>bgm315, 1000
				//let bgmSrc = constructBGMAudioPath(data.split(",")[0].trim());
				let bgmFade = Number(data.split(",")[1].trim());
				clearInterval(bgmFadeInterval);
				currentBGM.pause();
				currentBGM = preload.temp[constructBGMAudioPath(data.split(",")[0].trim())];
				currentBGM.volume = prefs.bgmVolume / 100;
				currentBGM.play();
				if(prefs.bgmVolume > 0){
					currentBGM.volume = 0;
					currentBGM.loop = true;
					bgmFadeInterval = setInterval(function(){
						if(currentBGM.volume >= prefs.bgmVolume / 100){
							currentBGM.volume = prefs.bgmVolume / 100;
							clearInterval(bgmFadeInterval);
						} else {
							let bgmInc = Math.round(((prefs.bgmVolume / 100) / (bgmFade / 100)) * 1000) / 1000;
							// Make sure volume doesn't go over 100%
							currentBGM.volume + bgmInc > prefs.bgmVolume / 100 ? currentBGM.volume = prefs.bgmVolume / 100 : currentBGM.volume += bgmInc;
						}
					}, 100);
				}
			break;
			case "BGM_STOP":
				clearInterval(bgmFadeInterval);
				if(currentBGM.volume > 0 && !currentBGM.paused){
					bgmFadeInterval = setInterval(function(){
						if(currentBGM.volume > 0){
							let bgmDec = Math.round(((prefs.bgmVolume / 100) / (data / 100)) * 1000) / 1000;
							currentBGM.volume - bgmDec < 0 ? currentBGM.volume = 0 : currentBGM.volume -= bgmDec;
						} else {
							currentBGM.volume = 0;
							currentBGM.pause()
							clearInterval(bgmFadeInterval);
						}
					}, 100);
				} else {
					currentBGM.volume = 0;
					currentBGM.pause();
				}
			break;
			case "EFFECT_FLASH":
				let flashColor = data.split(",")[0].trim();
				let flashDur = data.split(",")[1].trim();
				let flashElem = altFlash ? sceneFlashAlt : sceneFlash;

				/*
					CSS animations need a bit of time to reset so when consecuitive
					flashes occur the second one won't play.
					To fix this we just alternate the flash element and by the time
					it's needed again it will have reset.
				*/
				flashElem.style.zIndex = "8";
				if(altFlash){
					sceneFlash.style.zIndex = "7";
				} else {
					sceneFlashAlt.style.zIndex = "7";
				}
				altFlash = !altFlash;

				flashElem.style.backgroundColor = flashColor;
				animateElement(flashElem, flashDur, "fade-out");
			break;
			case "EFFECT_QUAKE":
				let quakeAxis = data.split(",")[0].trim();
				let quakeStrength = data.split(",")[1].trim();
				let quakeDur = data.split(",")[2].trim();
				document.documentElement.style.setProperty("--quakeStrength", quakeStrength);
				if(quakeAxis == "HORIZONTAL"){
					animateElement(sceneActors, quakeDur, "quake-horizontal-actor", "steps(1)");
					animateElement(sceneBackImages, quakeDur, "quake-horizontal-scene", "steps(1)");
					skippableAnimation = false;
				} else if(quakeAxis == "VERTICAL"){
					animateElement(sceneActors, quakeDur, "quake-vertical-actor", "steps(1)");
					animateElement(sceneBackImages, quakeDur, "quake-vertical-scene", "steps(1)");
					skippableAnimation = false;
				} else if(quakeAxis == "OVERALL"){
					animateElement(sceneBackImages, quakeDur, "quake-overall-scene", "steps(1)");
					skippableAnimation = false;
				} else {
					console.log("Unknown quake axis: " + quakeAxis + " needs to be added.")
				}
			break;
			case "EV":
				let ev = data.split(",")[0].trim();
				let parentElem = altBG ? sceneBackgroundAlt : sceneBackground;
				let foundEV = false;
				// Loop through the image hierarchy to decide if the image is
				// an overlay or a parent.
				for(i in sceneData[currentScene].imgData){
					if(ev == sceneData[currentScene].imgData[i].parent){
						let evMoving = data.split(",")[1].trim();
						let evDur = Number(data.split(",")[2]);
						parentElem.style.zIndex = "2";
						if(altBG){
							sceneBackground.style.zIndex = "1";
						} else {
							sceneBackgroundAlt.style.zIndex = "1";
						}
						altBG = !altBG
						parentElem.style.backgroundImage = "url('" + constructImagePath(ev, currentScene) + "')";
						sceneOverlay.style.backgroundImage = "";
						if(evMoving == "IN"){
							animateElement(parentElem, evDur, "fade-in");
						} else if(evMoving == "OUT"){
							animateElement(parentElem, evDur, "fade-out");
						}  else {

						}
						foundEV = true;
						break;
					} else if(ev == sceneData[currentScene].imgData[i].child){
						sceneOverlay.style.backgroundImage = "url('" + constructImagePath(ev, currentScene) + "')";
						// Last min addition due to 0013_2, not tested much but
						// should be completely fine.
						if(!(parentElem.style.backgroundImage == "url(\"" + constructImagePath(sceneData[currentScene].imgData[i].parent, currentScene) + "\")")){
							console.log(parentElem.style.backgroundImage);
							console.log("url(\"" + constructImagePath(sceneData[currentScene].imgData[i].parent, currentScene) + "\")");
							parentElem.style.backgroundImage = "url('" + constructImagePath(sceneData[currentScene].imgData[i].parent, currentScene) + "')";
						}
						foundEV = true;
						break;
					} else {

					}
				}
				if(!foundEV){
				/*
					Asagi Zero scene (0138) has CGs not in hierarchy
					They also need to fade in to eachother.
					To fix this we alternate parentElement whenever an image
					isn't found in the hierarchy, this allows us to fade one
					image in to the other.
					we also set emptyBG to true so that when the next command is
					run the image we faded in from is removed from the element to
					prevent any leakage further down the line.
				*/
					// FOR SOME FUCKING REASON SOME OVERLAYS AREN'T LISTED IN
					// IMG.TXT
					if(ev.substr(0,3) == "chr"){
						sceneOverlay.style.backgroundImage = "url('" + constructImagePath(ev, currentScene) + "')";
						parentElem.style.backgroundImage = "url('" + constructImagePath(sceneData[currentScene].imgData[i].parent, currentScene) + "')";
					} else {
						let evMoving = data.split(",")[1].trim();
						let evDur = Number(data.split(",")[2]);
						parentElem.style.zIndex = "2";
						if(altBG){
							sceneBackground.style.zIndex = "1";
						} else {
							sceneBackgroundAlt.style.zIndex = "1";
						}
						altBG = !altBG
						parentElem.style.backgroundImage = "url('" + constructImagePath(ev, currentScene) + "')";
						sceneOverlay.style.backgroundImage = "";
						if(evMoving == "IN"){
							animateElement(parentElem, evDur, "fade-in");
						} else if(evMoving == "OUT"){
							animateElement(parentElem, evDur, "fade-out");
						}  else {

						}
						emptyBG = true;
					}
				}
			break;
			case "EV_OUT":
				animateElement(sceneBlack, data, "fade-in");
				emptyBackgrounds = true;
				skippableAnimation = false;
			break;
			case "NAME_PLATE":
				sceneNamePlate.innerHTML = data;
			break;
			case "PAUSE":
				scenePaused = true;
				canEmptyTextBox = true;
				if(prefs.copyText){
					let tempText = document.createElement('textarea');
					tempText.value = sceneTextBoxText.innerText;
					document.body.appendChild(tempText);
					tempText.select();
					document.execCommand('copy');
					document.body.removeChild(tempText);
				}
				if(sceneMode === 1){
					//Auto Mode
					sceneAutoMode();
				} else if (sceneMode === 2){
					//Skip Mode
					sceneNextSkip = setTimeout(function() {
						progressScene();
					}, prefs.sceneSkipDelay);
				}
				sceneTextBoxIcon.style.display = "inherit";
			break;
			case "SCENARIO_END":
				endScene();
			break;
			case "SE_PLAY":
				currentSE.pause();
				currentSE = preload.temp[constructSEAudioPath(data.trim())];
				currentSE.volume = prefs.seVolume / 100;
				currentBGM.play();
			break;
			case "TRANSITION":
				// I tried and failed to get this working, don't think the tech is
				// there yet to get this working the same way as the game.
				// Although the way it's set up to run, the BG fades in fully
				// then swaps to black and then runs the transition, looks really
				// shit tbh.
			break;
			case "UI_DISP":
				//ON, 1000
				if(prefs.textBoxUnder){

				} else {
					let uiDispMode = data.split(",")[0].trim();
					let uiDispDur = data.split(",")[1].trim();
					if(uiDispMode == "ON"){
						animateElement(sceneTextBox, uiDispDur, "fade-in");
					} else if(uiDispMode == "OFF"){
						animateElement(sceneTextBox, uiDispDur, "fade-out");
					} else{

					}
				}
			break;
			case "VOICE_PLAY":
				lastLineVoiced = true;
				currentVoice.pause();
				currentVoice = preload.temp[constructVoiceAudioPath(data.trim(), currentScene)];
				currentVoice.volume = prefs.voiceVolume / 100;
				currentVoice.play();
				sceneVoiceDuration = Math.round(currentVoice.duration * 1000);
			break;
			case "WAIT":
				waitIndex = currentSceneIndex;
				sceneWaiting = true;
				setTimeout(function() {
					if(waitIndex == currentSceneIndex){
						sceneWaiting = false;
						processSceneCommand();
					}
				}, data);
			break;
			case "": //Doesn't have a tag so most likely scene text.
				sceneTextBoxText.innerHTML += data + "<br />";
				canEmptyTextBox = false;
			break;
			default:
				console.log("<" + tag + ">" + " hasn't been added yet, please tell report it in the thread");
			break;
		}
	}
	sceneCommands = [];
	if((!scenePaused && !animatingElement && skippableAnimation && !sceneWaiting) || (sceneMode == 2 && !scenePaused)){
		processSceneCommand();
	}
}

function sceneAutoMode(){
	let sceneAutoWait;
	if(lastLineVoiced){
		// Go off the time left of the currently voiced line + auto line delay or
		// (current text / CPS) + auto line delay depending on if the user wants to
		// wait for the voiced line or not
		sceneAutoWait = prefs.sceneAutoWaitVoice ? Math.round((currentVoice.duration - currentVoice.currentTime) * 1000) + prefs.sceneAutoDelay : Math.ceil((sceneTextBoxText.innerHTML.replace(/<br>/g, "").length / prefs.sceneAutoCPS) * 1000) + prefs.sceneAutoDelay;
	} else {
		// (current text / CPS) + auto line delay
		sceneAutoWait = Math.ceil((sceneTextBoxText.innerHTML.replace(/<br>/g, "").length / prefs.sceneAutoCPS) * 1000) + prefs.sceneAutoDelay;
	}
	sceneNextAuto = setTimeout(function(){
			progressScene();
	}, sceneAutoWait);
}

function addAnimationListener(elem, index){
	// Add a single use event listener to the animated element.
	// If currentSceneIndex is equal to the index it was when it was created
	// run the next command.
	// else do nothing as the element was part of a group or the user's skipping.
	// e.g. on 0036 two Felicias fade in at the same time both will fire but only
	// one will run
	elem.addEventListener("animationend", function waitForAnimationEnd(){
		if(currentSceneIndex == index){
			removeAnimation(elem);
			animatedElements.splice(animatedElements.indexOf(elem), 1);
			skippableAnimation = true;
			animatingElement = false;
			processSceneCommand();
		}
	}, {once:true, capture:true});
}

function animateElement(elem, dur, animName, timing = "linear"){
	removeAnimation(elem);
	// elem.style.animationDuration = dur + "ms";
	// elem.style.animationTimingFunction = timing;
	// elem.style.animationName = animName;
	// elem.style.animationPlayState = "running";
	elem.style.animation = dur + "ms " + timing + " running " + animName;
	animatingElement = true;
	elem.style.cssText += applyAnimationValues(animName);
	animatedElements.push(elem);
	addAnimationListener(elem, currentSceneIndex);
}

function removeAnimation(elem){
	// CSS doesn't let you replay the same animation so we reset it like this.
	// elem.style.animationDelay = "";
	// elem.style.animationDirection = "";
	// elem.style.animationDuration = "";
	// elem.style.animationFillMode = "";
	// elem.style.animationIterationCount = "";
	// elem.style.animationName = "";
	// elem.style.animationPlayState = "";
	// elem.style.animationTimingFunction = "";
	elem.style.animation = "";
}

function applyAnimationValues(animName){
	// We're removing all animation values from the element after it has run
	// so animationFillMode won't work, instead we just get the values from
	// the stylesheet like so.
	let animRule = "";
	for(rule of animationSheet.cssRules){
		if(rule.name == animName){
			animeRule = rule;
			break;
		}
	}
	// Gets all the css values from the start of the animation.
	// return rule.cssText.split("\n0% {")[1].split("}")[0].trim();

	// Gets all the css values from the end of the animation.
	return rule.cssText.split("100% {")[1].split("}")[0].trim();
}

function createActor(src, id, pos){
	let actorContainer = document.createElement("div");
	actorContainer.classList = "actor";
	actorContainer.style.backgroundImage = "url('" + constructImagePath(src, id) + "')";
	switch(pos){
		case "LEFT":
			actorContainer.style.left = "-12.5%";
			actorContainer.style.backgroundPosition = "right";
		break;
		case "RIGHT":
			actorContainer.style.right = "-12.5%";
			actorContainer.style.backgroundPosition = "left";
		break;
		case "CENTER":
			actorContainer.style.backgroundPosition = "center";
		break;
		default:
		break;
	}
	return actorContainer;
}