var in_prefecture;
var in_big_area;
var in_small_area;

function loadPrefecture (){
	var pref = document.getElementById('pref');
	for (var i in area){
		var opt = document.createElement("OPTION");
		opt.value = i;
		var txt = document.createTextNode( area[i].name );
		opt.appendChild(txt);
		pref.appendChild(opt);
	}
}

function chgBigArea (pr){
	var ba = document.getElementById('l_area');
	ba.length = 1;
	var sa = document.getElementById('s_area');
	sa.length = 1;
	if(!pr.value){
		return;
	}
	for (i in area[ pr.value ].big_area){
		var opt = document.createElement("OPTION");
		opt.value = i;
		var name = area[ pr.value ].big_area[i].name;
		var txt = document.createTextNode( name );
		opt.appendChild(txt);
		ba.appendChild(opt);
	}
}

function chgSmallArea (ba){
	if(!ba.value){
		return;
	}
	var pr = document.getElementById('pref');
	var sa = document.getElementById('s_area');
	sa.length = 1;
	for (var i in area[ pr.value ].big_area[ ba.value ].small_area){
		var opt = document.createElement("OPTION");
		opt.value = i;
		var name = area[ pr.value ].big_area[ ba.value ].small_area[i].name;
		var txt = document.createTextNode( name );
		opt.appendChild(txt);
		sa.appendChild(opt);
	}
}

function setSmallAreaName (idx){
	if(idx == 0){
		return;
	}
	var sa = document.getElementById('s_area');
	if(!sa.value){
		var ba = document.getElementById('l_area');
	}
}

function initAreaPulldown (){
	loadPrefecture();
	if (in_big_area){
		var pr = document.getElementById('pref');
		var ba = document.getElementById('l_area');
		var sa = document.getElementById('s_area');
		pr.value = in_prefecture;
		chgBigArea(pr);
		ba.value = in_big_area;
		chgSmallArea(ba);
		sa.value = in_small_area;
		setSmallAreaName(sa.selectedIndex);
	}
}
