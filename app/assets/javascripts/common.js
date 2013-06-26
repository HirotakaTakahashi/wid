function swapLayer (tgt){
	for (i=0; i < tabs.length; i++){
		var tabObj = document.getElementById(tabs[i]);
		var html;
		var v;
		if(tabs[i] == tgt){
			v = 'visible';
			tabObj.style.margin = '70px 10px 20px 0px';
			tabObj.style.height = 'auto';
			tabObj.style.visibility = 'visible';
			if(tgt == 'tab2'){
				initLightbox();
			}
		}else{
			v = 'hidden';
			tabObj.style.margin = '0px';
			tabObj.style.height = '0px';
			tabObj.style.visibility = 'hidden';
		}
		changeNaviDispStyle(tabs[i],v);
	}
}

function changeNaviDispStyle(tabName,type){
	var navObj = document.getElementById(tabName + 'Navi');
	if(type == 'visible'){
		navObj.src = "search_src/" + tabName + ".gif";
		navObj.onmouseover = null;
		navObj.onmouseout  = null;
	}else{
		navObj.src = "search_src/" + tabName + "_ns.gif";
		navObj.onmouseover = function (){
			navObj.src = "search_src/" + tabName + "_ns_hov.gif";
		};
		navObj.onmouseout  = function (){
			navObj.src = "search_src/" + tabName + "_ns.gif";
		};
	}
}

function moveToPos (name){
	window.location = '#'+name;
}

function flipflap (ids) {
	var i;
	for (i=0;i<ids.length;i++){
	    var t = document.getElementById(ids[i]);
	    if(t == undefined){ continue }
	    if(t.style.display == 'none'){ t.style.display = 'block' }
	    else                         { t.style.display = 'none'  }
	}
}

function setCookie(name,value,expire){
	var myExp = new Date();
	myExp.setTime(myExp.getTime()+(expire*24*60*60*1000));
	document.cookie
	= name + '=' + escape(value)
	+ '; expires=' + myExp.toGMTString();
}

function getCookie(name){
	var search = name + '=';
	if (document.cookie.length>0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end		 = document.cookie.indexOf(';',offset);
			if(end == -1)
				end = document.cookie.length;
			return unescape(document.cookie.substring(offset,end));
		}
	}
	return null;
}