var sceneSelectPage = 0;

function constructSceneSelect(){
	calculateCGSize();
	createSelections();
	fillSelections();
	setPageNumber();
}

function calculateCGSize(){
	// The images are 4:3 without the black bars
	// 938 is the usable width we have
	// 702 is the usable height we have
	//
	// spacing = (((w/h) / 10) | 0) * 2;
	// 10 is just a number I chose and fit.
	// 2 is because we need to account for 2 cgs being next to eachother
	//
	// We could just do repeat(--columns, 1fr), repeat(--rows, 1fr)
	// but that would ruin the AR and I'm autistic.
	let ARx = 4;
	let ARy = 3;
	let width = 938/ prefs.columns;
	let height = 702 / prefs.rows;
	let spacing = 1;
	if(width / ARx > height / ARy){
		// Height has the highest ratio so base CGs off of that
		spacing = ((height / 10) | 0) * 2;
		height = (702 - (spacing * (prefs.rows - 1))) / prefs.rows;
		width = (4/3) * height;
	} else if(width / ARx < height / ARy){
		// Width has the highest ratio so base the CGs off of that.
		spacing = ((width / 10) | 0) * 2;
		width = (938 - (spacing * (prefs.columns - 1))) / prefs.columns;
		height = (3/4) * width;
	} else{
		console.log("Something broke in calculateCGSize()");
		// Fall back to width because something broke or everythings equal
		spacing = ((width / 10) | 0) * 2;
		width = (938 - (spacing * (prefs.columns - 1))) / prefs.columns;
		height = (3/4) * width;
	}
	document.documentElement.style.setProperty("--cg-width", width + "px");
	document.documentElement.style.setProperty("--cg-height", height + "px");
	document.documentElement.style.setProperty("--cg-spacing", spacing + "px");
	document.documentElement.style.setProperty("--cg-columns", prefs.columns);
	document.documentElement.style.setProperty("--cg-rows", prefs.rows);
}

function createSelections(){
	let cgAmount = 0;
	if((prefs.rows * prefs.columns) * (sceneSelectPage + 1) > sceneList.length){
		//Reached the last page, cut off any excess elements.
		cgAmount = sceneList.length - (prefs.rows * prefs.columns) * (sceneSelectPage);
	} else {
		cgAmount = prefs.rows * prefs.columns;
	}
	killChildren(cgWrapper);
	for(let i = 0; i < cgAmount; i++){
		let cgContainer = document.createElement("div");
		cgContainer.className = "cg-container";
		cgWrapper.appendChild(cgContainer);
	}
}

function fillSelections(){
	for(let i = 0; i < cgWrapper.children.length; i++){
		let cgIdx = i + (sceneSelectPage * (prefs.rows * prefs.columns));
		cgWrapper.children[i].style.backgroundImage = "url('" + constructImagePath(sceneData[sceneList[cgIdx]].imgData[0].parent, sceneList[cgIdx]) + "')";
		cgWrapper.children[i].setAttribute("sceneId", sceneList[cgIdx]);
	}
}

function nextPage(){
	if(sceneSelectPage >= Math.floor((sceneList.length - 1) / (prefs.rows * prefs.columns))){
		sceneSelectPage = 0;
	} else {
		sceneSelectPage++;
	}
	constructSceneSelect();
	setPageNumber();
}

function prevPage(){
	if(sceneSelectPage <= 0){
		sceneSelectPage = Math.floor((sceneList.length - 1) / (prefs.rows * prefs.columns))
	} else {
		sceneSelectPage--;
	}
	constructSceneSelect();
	setPageNumber();
}

function setPageNumber(){
	pageNumber.value = (sceneSelectPage + 1) + "/" + (Math.floor((sceneList.length - 1) / (prefs.rows * prefs.columns)) + 1);
}