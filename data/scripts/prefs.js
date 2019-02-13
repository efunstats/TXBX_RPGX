prefs = {
	columns:4,
	rows:4,
	skipAnimations: false,
	textBoxUnder: false,
	voiceVolume: 100,
	bgmVolume: 100,
	seVolume: 100,
	bgmMuted: false,
	seMuted: false,
	voiceMuted: false,
	cgViewerContinuous: true,
	cgViewerPreloadAhead: 5,
	cgViewerSlideShow: false,
	cgViewerSlideShowWait: 5000,
	sceneSkipDelay: 100,
	sceneAutoDelay: 1000,
	sceneAutoWaitVoice: true,
	sceneCutVoice: true,
	sceneAutoCPS: 12,
	sceneStartAuto: false,
	favorites: [],
	engScripts: true,
}

function initPreferences(){
	optsColumns = document.getElementsByName("select-columns")[0];
	optsRows = document.getElementsByName("select-rows")[0];
	optsEngScripts = document.getElementsByName("scene-eng")[0];
	optsSkipAnim = document.getElementsByName("scene-skip-anim")[0];
	optsTextBoxUnder = document.getElementsByName("scene-text-box-under")[0];
	optsBgmRange = document.getElementsByName("audio-bgm-range")[0];
	optsBgmNumber = document.getElementsByName("audio-bgm-number")[0];
	// optsBgmMuted = document.getElementsByName("audio-bgm-radio")[1];
	// optsBgmUnmuted = document.getElementsByName("audio-bgm-radio")[0];
	optsSeRange = document.getElementsByName("audio-se-range")[0];
	optsSeNumber = document.getElementsByName("audio-se-number")[0];
	// optsSeMuted = document.getElementsByName("audio-se-radio")[1];
	// optsSeUnmuted = document.getElementsByName("audio-bgm-radio")[0];
	optsVoiceRange = document.getElementsByName("audio-voice-range")[0];
	optsVoiceNumber = document.getElementsByName("audio-voice-number")[0];
	// optsVoiceMuted = document.getElementsByName("audio-voice-radio")[1];
	// optsVoiceUnmuted = document.getElementsByName("audio-bgm-radio")[0];
	optsAutoWaitVoice = document.getElementsByName("scene-auto-voice")[0];
	optsCutVoice = document.getElementsByName("scene-cut-voice")[0];
	optsAutoCPS = document.getElementsByName("scene-auto-cps")[0];
	optsStartAuto = document.getElementsByName("scene-start-auto")[0];
	optsSave = document.getElementById("option-save");
	optsReset = document.getElementById("option-reset");
	optsCancel = document.getElementById("option-cancel");
	optsMenu = document.getElementById("options");
	if(allowCookies){
		loadPreferences();
	}
	setOptionValues();
	addOptionEventListeners();
}

function fromLocalStorage(name){
	return JSON.parse(localStorage.getItem(name));
}

function toLocalStorage(name, value){
	localStorage.setItem(name, JSON.stringify(value));
}

function loadPreferences(){
	if(!allowCookies){
		return;
	}
	prefs.columns = localStorage.getItem("columns")!==null ? fromLocalStorage("columns") : 4;
	prefs.rows = localStorage.getItem("rows")!==null ? fromLocalStorage("rows") : 4;
	prefs.engScripts = localStorage.getItem("engScripts")!==null ? fromLocalStorage("engScripts") : false;
	prefs.skipAnimations = localStorage.getItem("skipAnimations")!==null ? fromLocalStorage("skipAnimations") : false;
	prefs.textBoxUnder = localStorage.getItem("textBoxUnder")!==null ? fromLocalStorage("textBoxUnder") : false;
	prefs.bgmVolume = localStorage.getItem("bgmVolume")!==null ? fromLocalStorage("bgmVolume") : 50;
	prefs.seVolume = localStorage.getItem("seVolume")!==null ? fromLocalStorage("seVolume") : 80;
	prefs.voiceVolume = localStorage.getItem("voiceVolume")!==null ? fromLocalStorage("voiceVolume") : 80;
	prefs.bgmMuted = localStorage.getItem("bgmMuted")!==null ? fromLocalStorage("bgmMuted") : false;
	prefs.seMuted = localStorage.getItem("seMuted")!==null ? fromLocalStorage("seMuted") : false;
	prefs.voiceMuted = localStorage.getItem("voiceMuted")!==null ? fromLocalStorage("voiceMuted") : false;
	prefs.sceneAutoWaitVoice = localStorage.getItem("sceneAutoWaitVoice")!==null ? fromLocalStorage("sceneAutoWaitVoice") : true;
	prefs.sceneCutVoice = localStorage.getItem("sceneCutVoice")!==null ? fromLocalStorage("sceneCutVoice") : false;
	prefs.sceneAutoCPS = localStorage.getItem("sceneAutoCPS")!==null ? fromLocalStorage("sceneAutoCPS") : 12;
	prefs.sceneStartAuto = localStorage.getItem("sceneStartAuto")!==null ? fromLocalStorage("sceneStartAuto") : false;
	prefs.favorites = localStorage.getItem("favorites")!==null ? fromLocalStorage("favorites") : [];
}

function setOptionValues(){
	optsBgmRange.value = prefs.bgmVolume;
	optsSeRange.value = prefs.seVolume;
	optsVoiceRange.value = prefs.voiceVolume;
	optsBgmNumber.value = prefs.bgmVolume;
	optsSeNumber.value = prefs.seVolume;
	optsVoiceNumber.value = prefs.voiceVolume;
	optsColumns.value = prefs.columns;
	optsRows.value = prefs.rows;
	optsAutoCPS.value = prefs.sceneAutoCPS;

	// if(prefs.bgmMuted){
	// 	optsBgmMuted.checked = true;
	// 	optsBgmRange.disabled = true;
	// 	optsBgmNumber.disabled = true;
	// } else {
	// 	optsBgmUnmuted.checked = true
	// 	optsBgmRange.disabled = false;
	// 	optsBgmNumber.disabled = false;
	// }
	// if(prefs.seMuted){
	// 	optsSeMuted.checked = true;
	// 	optsSeRange.disabled = true;
	// 	optsSeNumber.disabled = true;
	// } else {
	// 	optsSeUnmuted.checked = true;
	// 	optsSeRange.disabled = false;
	// 	optsSeNumber.disabled = false;
	// }
	// if(prefs.voiceMuted){
	// 	optsVoiceMuted.checked = true;
	// 	optsVoiceRange.disabled = true;
	// 	optsVoiceNumber.disabled = true;
	// } else {
	// 	optsVoiceUnmuted.checked = true;
	// 	optsVoiceRange.disabled = false;
	// 	optsVoiceNumber.disabled = false;
	// }
	if(prefs.engScripts){
		optsEngScripts.checked = true;
	} else {
		document.getElementsByName("scene-eng")[1].checked = true;
	}
	if(prefs.skipAnimations){
		optsSkipAnim.checked = true;
	} else {
		document.getElementsByName("scene-skip-anim")[1].checked = true;
	}
	if(prefs.textBoxUnder){
		optsTextBoxUnder.checked = true;
	} else {
		document.getElementsByName("scene-text-box-under")[1].checked = true;
	}
	if(prefs.sceneAutoWaitVoice){
		optsAutoWaitVoice.checked = true;
	} else {
		document.getElementsByName("scene-auto-voice")[1].checked = true;
	}
	if(prefs.sceneCutVoice){
		optsCutVoice.checked = true;
	} else {
		document.getElementsByName("scene-cut-voice")[1].checked = true;
	}
	if(prefs.sceneStartAuto){
		optsStartAuto.checked = true;
	} else {
		document.getElementsByName("scene-start-auto")[1].checked = true;
	}
}

function addOptionEventListeners(){
	optsBgmRange.addEventListener("input", function(){
		optsBgmNumber.value = optsBgmRange.value;
		currentBGM.volume = Number(optsBgmRange.value) / 100;
	},true);
	optsBgmNumber.addEventListener("input", function(){
		optsBgmRange.value = optsBgmNumber.value;
	},true);
	optsSeRange.addEventListener("input", function(){
		optsSeNumber.value = optsSeRange.value;
		currentSE.volume = Number(optsSeRange.value) / 100;
	},true);
	optsSeNumber.addEventListener("input", function(){
		optsSeRange.value = optsSeNumber.value;
	},true);
	optsVoiceRange.addEventListener("input", function(){
		optsVoiceNumber.value = optsVoiceRange.value;
		currentVoice.volume = Number(optsVoiceRange.value) / 100;
	},true);
	optsVoiceNumber.addEventListener("input", function(){
		optsVoiceRange.value = optsVoiceNumber.value;
	},true);
	optsBgmRange.addEventListener("change", function(){
		if(optsBgmRange.value > 100){
			optsBgmRange.value = 100;
		} else if(optsBgmRange.value < 0){
			optsBgmRange.value = 0;
		}
		optsBgmNumber.value = optsBgmRange.value;
	},true);
	optsBgmNumber.addEventListener("change", function(){
		if(optsBgmNumber.value > 100){
			optsBgmNumber.value = 100;
		} else if(optsBgmNumber.value < 0){
			optsBgmNumber.value = 0;
		}
		optsBgmRange.value = optsBgmNumber.value;
	},true);
	optsSeRange.addEventListener("change", function(){
		if(optsSeRange.value > 100){
			optsSeRange.value = 100;
		} else if(optsSeRange.value < 0){
			optsSeRange.value = 0;
		}
		optsSeNumber.value = optsSeRange.value;
	},true);
	optsSeNumber.addEventListener("change", function(){
		if(optsSeNumber.value > 100){
			optsSeNumber.value = 100;
		} else if(optsSeNumber.value < 0){
			optsSeNumber.value = 0;
		}
		optsSeRange.value = optsSeNumber.value;
	},true);
		optsVoiceRange.addEventListener("change", function(){
		if(optsVoiceRange.value > 100){
			optsVoiceRange.value = 100;
		} else if(optsVoiceRange.value < 0){
			optsVoiceRange.value = 0;
		}
		optsVoiceNumber.value = optsVoiceRange.value;
	},true);
	optsVoiceNumber.addEventListener("change", function(){
		if(optsVoiceNumber.value > 100){
			optsVoiceNumber.value = 100;
		} else if(optsVoiceNumber.value < 0){
			optsVoiceNumber.value = 0;
		}
		optsVoiceRange.value = optsVoiceNumber.value;
	},true);
	optsSave.addEventListener("click", function(){
		checkChanges();
		savePreferences();
		optsMenu.style.display = "none";
		currentView = prevView;
	}, true);
	optsReset.addEventListener("click", defaultPreferences, true);
	optsCancel.addEventListener("click", function(){
		currentBGM.volume = prefs.bgmVolume / 100;
		currentSE.volume = prefs.seVolume / 100;
		currentVoice.volume = prefs.voiceVolume / 100;
		setOptionValues();
		optsMenu.style.display = "none";
		currentView = prevView;
	}, true);
}

function checkChanges(){
	if(Number(optsColumns.value) != prefs.columns || Number(optsRows.value) != prefs.rows){
		sceneSelectPage = 0;
		prefs.columns = Number(optsColumns.value);
		prefs.rows = Number(optsRows.value);
		constructSceneSelect();
	}
	if(!prefs.textBoxUnder && optsTextBoxUnder.checked && currentView == 2){
		toggleContentHeight();
	} else if(prefs.textBoxUnder && !optsTextBoxUnder.checked && currentView == 2){
		toggleContentHeight();
	}
}

function defaultPreferences(){
	prefs.columns = 4;
	prefs.rows = 4;
	prefs.skipAnimations = false;
	prefs.textBoxUnder = false;
	prefs.bgmVolume = 50;
	prefs.seVolume = 80;
	prefs.voiceVolume = 80;
	prefs.bgmMuted = false;
	prefs.seMuted = false;
	prefs.voiceMuted = false;
	prefs.sceneAutoWaitVoice = true;
	prefs.sceneCutVoice = false;
	prefs.sceneAutoCPS = 12;
	prefs.sceneStartAuto = false;
	prefs.engScripts = false;
	setOptionValues();
	savePreferences();
}

function savePreferences(){
	prefs.columns = Number(optsColumns.value) > 0 ? Number(optsColumns.value) : prefs.columns;
	prefs.rows = Number(optsRows.value) > 0 ? Number(optsRows.value) : prefs.rows;
	prefs.engScripts = optsEngScripts.checked;
	prefs.skipAnimations = optsSkipAnim.checked
	prefs.textBoxUnder = optsTextBoxUnder.checked
	prefs.bgmVolume = optsBgmRange.value
	prefs.seVolume = optsSeRange.value
	prefs.voiceVolume = optsVoiceRange.value
	// prefs.bgmMuted = optsBgmMuted.checked
	// prefs.seMuted = optsSeMuted.checked
	// prefs.voiceMuted = optsVoiceMuted.checked
	prefs.sceneAutoWaitVoice = optsAutoWaitVoice.checked
	prefs.sceneCutVoice = optsCutVoice.checked
	prefs.sceneAutoCPS = Number(optsAutoCPS.value) > 0 ? Number(optsAutoCPS.value) : prefs.sceneAutoCPS;
	prefs.sceneStartAuto = optsStartAuto.checked;

	if(!allowCookies){
		return;
	}

	toLocalStorage("columns", prefs.columns);
	toLocalStorage("rows", prefs.rows);
	toLocalStorage("engScripts", prefs.engScripts);
	toLocalStorage("skipAnimations", prefs.skipAnimations);
	toLocalStorage("textBoxUnder", prefs.textBoxUnder);
	toLocalStorage("bgmVolume", prefs.bgmVolume);
	toLocalStorage("seVolume", prefs.seVolume);
	toLocalStorage("voiceVolume", prefs.voiceVolume);
	toLocalStorage("bgmMuted", prefs.bgmMuted);
	toLocalStorage("seMuted", prefs.seMuted);
	toLocalStorage("voiceMuted", prefs.voiceMuted);
	toLocalStorage("sceneAutoWaitVoice", prefs.sceneAutoWaitVoice);
	toLocalStorage("sceneCutVoice", prefs.sceneCutVoice);
	toLocalStorage("sceneAutoCPS", prefs.sceneAutoCPS);
	toLocalStorage("sceneStartAuto", prefs.sceneStartAuto);
}