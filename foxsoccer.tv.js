// ==UserScript==
// @name           minimalize foxsoccer.tv
// @namespace      mcc
// @description    minimalize foxsoccer.tv
// @include        http://www.foxsoccer.tv/watchdvr/*
// @include        http://www.foxsoccer2go.com/watchdvr/*
// ==/UserScript==

function minimalize() {
	document.body.style.background = '#fff';
	document.body.style.backgroundImage = 'none';
	document.getElementsByClassName('content')[0].style.background = '#fff';
	document.getElementsByClassName('content')[0].style.backgroundImage = 'none';
	document.getElementsByClassName('content')[0].style.padding = '0px';
	document.body.getElementsByTagName('header')[0].style.display = 'none';
	document.body.getElementsByTagName('footer')[0].style.display = 'none';
	document.getElementsByClassName('mainContent')[0].style.margin = '0px';
	document.getElementsByClassName('mainContent')[0].style.padding = '0px';
	document.getElementsByClassName('mainContent')[0].style.width = '958px';
	document.getElementsByClassName('mainContent')[0].style.height = '538px';
	document.getElementsByClassName('mainContent')[0].style.overflow = 'hidden';
	document.getElementsByClassName('ondemand')[0].style.display = 'none';
	document.getElementsByClassName('fs-footer')[0].style.display = 'none';
	document.getElementsByClassName('twitter')[0].style.display = 'none';
	document.body.style.overflow = 'hidden';
		
	try {
		document.getElementsByTagName('form')[0].style.display = 'none';
		document.getElementsByTagName('form')[1].style.display = 'none';
		document.getElementsByTagName('form')[2].style.display = 'none';
	} catch (ex) {
	}
	
	window.innerWidth = 956;
	window.innerHeight = 538;
}

window.addEventListener('load', minimalize, false);


