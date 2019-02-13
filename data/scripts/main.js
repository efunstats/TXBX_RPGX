var requests = 0;
var sceneData = {};
var currentView = 1;
var prevView;
var animationSheet = "";
var viewer;
var cgWrapper;
var contents;
var contentHeightToggled = false;
var sceneList = [];
var engScriptsLoaded = false;
var allowCookies = checkCookie();

window.onload = function() {
	let permPreloadUI = ["arrow_left_icon", "arrow_right_icon", "checkbox", "checkbox_checked", "Home_bg6", "menu_close_button", "menu_option_off", "menu_option_on", "off_button_active", "off_button_inactive", "on_button_active", "on_button_inactive", "pc_game_frm", "pc_game_frm_big", "Scene_name_base1", "Scene_text_base1", "Scene_text_icon_edn1", "slider_handle", "submenu"];
	for(let img of permPreloadUI){
		preloadImage("./data/ui/" + img + ".png", true);
	}
	viewer = document.getElementById("scene-viewer");
	sceneSelect = document.getElementById("scene-select");
	cgWrapper = document.getElementById("cg-wrapper");
	searchMenu = document.getElementById("search");
	controlsMenu = document.getElementById("controls");
	pageNumber = document.getElementById("page-number");
	contents = document.getElementById("content");
	contents.addEventListener("transitionend", function(){
		if(prefs.textBoxUnder){
			contents.style.backgroundImage = "url('./data/ui/pc_game_frm_big.png')";
		}else{
			contents.style.backgroundImage = "url('./data/ui/pc_game_frm.png')";
		}
	}, true);
	viewer.addEventListener("transitionend", function(){
		if(viewer.style.opacity > 0){
			startScene(currentScene);
		} else {
			viewer.style.zIndex = "0";
		}
	}, true);
	killChildren(viewer);
	initPreferences();
	initFiles();
	getAnimationSheet();
	initUserInput();
	mergeSceneData();
	initSearch();
}

function Scene(id, sceneData, parents, children, audio) {
	this.id = id;
	this.sceneData = sceneData;
	this.parents = parents;
	this.children = children;
	this.audio = audio;
}

function initFiles() {
	//Loader.js loads all the scripts in to scenesData.
	for (dir of dirs) {
		sceneData[dir] = {};
		let scriptPath = "./scenes/" + dir + "/script.txt";
		let imgPath = "./scenes/" + dir + "/img.txt";
		loadFile(scriptPath, dir, parseSceneScript);
		loadFile(imgPath, dir, parseImgData);
	}
}

function initEngScripts(){
	for(dir of engDirs){
		let scriptPath = "./scenes/" + dir + "/engscript.txt";
		loadFile(scriptPath, dir, parseSceneScript);
	}
}

function getAudioFiles(data){
	let voiceFiles = [];
	let BGMFiles = [];
	let SEFiles = [];
	for(part of data){
		for(command of part){
			switch(command.substr(1, command.lastIndexOf(">") -1)){
				case "VOICE_PLAY":
					voiceFiles.push(command.substr(command.lastIndexOf(">") +1));
				break;
				case "BGM_PLAY":
					BGMFiles.push(command.substr(command.lastIndexOf(">") +1, command.indexOf(",") - (command.lastIndexOf(">") +1)))
				break;
				case "SE_PLAY":
					SEFiles.push(command.substr(command.lastIndexOf(">") +1));
				break;
				default:
				break;
			}
		}
	}
	return [voiceFiles, BGMFiles, SEFiles];
}

function checkRequests(){
	if(requests == 0 && (engScriptsLoaded || engDirs.length < 1)){
		fillSceneList();
		constructSceneSelect();
	} else if(requests == 0 && !engScriptsLoaded){
		initEngScripts();
		engScriptsLoaded = true;
	}
}

function commandIs(command, is){
	return command.startsWith(is);
}

function getAnimationSheet(){
	for(styleSheet of document.styleSheets){
		if(styleSheet.href.split("/")[styleSheet.href.split("/").length - 1] == "animations.css"){
			animationSheet = styleSheet;
			break;
		}
	}
}

function toggleContentHeight(){
	if(contentHeightToggled){
		contents.style.height = "720px"
		contents.style.backgroundSize = "1002px 768px"
	} else {
		contents.style.height = "871px"
		contents.style.backgroundSize = "1002px 918px"
	}
	contentHeightToggled = !contentHeightToggled;
}



function killChildren(elem) {
	//AMERICA NO!
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
}

function removeDupeTags(tags) {
    return tags.filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function loadSceneSelect(){
	viewer.style.opacity = "0"
	if(prefs.textBoxUnder){
		toggleContentHeight();
	}
}

function loadSceneViewer(){
	viewer.style.zIndex = "1"
	viewer.style.opacity = "1";
	currentView = 2;
	if(prefs.textBoxUnder){
		toggleContentHeight();
	}
}

function isArray(obj) {
	if (typeof obj === "object" && obj.constructor === Array) {
		return true;
	} else {
		return false;
	}
}

function fillSceneList(){
	for(key of Object.keys(sceneData)){
		if(sceneData[key].script){
			sceneList.push(key)
		}
	}
}

function checkCookie(){
    var cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled){ 
        document.cookie = "testcookie";
        cookieEnabled = document.cookie.indexOf("testcookie")!=-1;
    }
    return cookieEnabled
}