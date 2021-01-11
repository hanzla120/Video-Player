"use strict";

 
// declare all variables
const player = document.getElementById("player");
const video = document.getElementById("video_player");
function init_player(){	
const play_pause_btn = document.getElementById("play_pause_btn");
const mute_unmute_btn = document.getElementById("mute_unmute_btn");
const main_settings = document.querySelector(".main_settings");
const settings_container = document.querySelector(".settings_container");
const settings_btn = document.querySelector(".settings_btn");
const progress_bar_container = document.querySelector(".progress_bar_container");
const progress_bar_buffer = document.querySelector(".progress_bar_buffer");
const progress_bar_play = document.querySelector(".progress_bar_play");
const current_time = document.querySelector(".current_time");
const duration_time = document.querySelector(".duration_time");
const show_controls = document.querySelector(".show-controls");
const player_controls = document.querySelector(".player-controls");
const volume_bar_container = document.querySelector(".volume_bar_container");
const volume_bar = document.querySelector(".volume_bar");
const fullscreen_btn = document.querySelector(".fullscreen_btn");
const caption_window = document.querySelector(".caption_window");
const caption_btn = document.querySelector(".caption_btn");
const caption_text = document.querySelector(".caption_text");
const cc_btn_style = document.querySelector(".cc_btn_style");



// all functions 

// roate settings_icon 

// function rotateSettings(){
	// const getChildren = settings_btn.children[0];
	// getChildren.classList.add("apply_rotate");
// }
// settings_btn.onmouseleave = function(){
	// const getChildren = settings_btn.children[0];
	// getChildren.classList.remove("apply_rotate");
// }
function getElementPercentage(click, elm) {
    let rect;
    rect = elm.getBoundingClientRect();
    return (click.pageX - rect.left) / rect.width * 100;
  }

// play pause functions 

function play_pause_func(){
	if(video.paused){
		
		video.play();
		play_pause_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg>`;
	}else{
		video.pause();
		play_pause_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>`;
	}
}
// ended function 

function video_ended(){
	video.pause();
		play_pause_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>`;
	
	
}
// mute or unmute function 
let lastVolume = 1;


function mute_unmute_func(){
	
	if(lastVolume == 0.0){
		
		video.volume = 0.2;
		
	}
	if(video.volume){
		lastVolume = video.volume;
		 video.volume = 0;
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path></svg>`;
		
		volume_bar.style.width = `0%`;
		
		
	}else{
		 video.volume = lastVolume;
		
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><defs><clipPath><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"></path></clipPath><clipPath ><path  d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="icon-svg-fill icon-svg-volume-animation-speaker" clip-path="url(#icon-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="icon-id-14"></path><path class="icon-svg-fill icon-svg-volume-animation-hider" clip-path="url(#icon-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="icon-id-15" style="display: none;"></path></svg>`;
		
		volume_bar.style.width = `${lastVolume * 100}%`;
	}
	setVolumeLocalStorage();
}
// update time and progress bar 

function seekTime_func(){
	const newTime = video.currentTime * (100 / video.duration);
	progress_bar_play.style.width = `${newTime}%`;
	current_time.textContent = `${displayTime(video.currentTime)}`
	duration_time.textContent = `${displayTime(video.duration)}`
	
	
}
// get Time 
function displayTime(time) { //get current time and duration  function
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}
// change progressBar when click
function progressBarChange(e){
	const getMousePosition = getElementPercentage(e,progress_bar_container);
	progress_bar_play.style.width = `${getMousePosition}%`;
	video.currentTime = video.duration * getMousePosition / 100;
}


// drag handler in progress_bar_container

function progressDrag(e){
	 e.preventDefault();
      document.addEventListener('mousemove', progressMoveHandler);
      document.addEventListener('mouseup', progressStopHandler);
	
}
function progressMoveHandler(e){
	  let percent;
      percent = getElementPercentage(e, progress_bar_container);
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
	progress_bar_play.style.width = `${percent}%`;
	video.currentTime = video.duration * percent / 100;
}
function progressStopHandler(e){
	 document.removeEventListener('mousemove', progressMoveHandler);
      document.removeEventListener('mouseup', progressStopHandler);
	
}


// volumebar mousedown 

function volumeDrag(e){
	 e.preventDefault();
      document.addEventListener('mousemove', volumeMoveHandler);
      document.addEventListener('mouseup', volumeStopHandler);
	
}
 function volumeMoveHandler(e) {
	
      let percent;
      percent = getElementPercentage(e, volume_bar_container);
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
      
	  	volume_bar.style.width = `${percent}%`;
	video.volume = percent / 100;
	if(video.volume == 0){
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path></svg>`;
	}else if(video.volume > 0){
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><defs><clipPath><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"></path></clipPath><clipPath><path d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="icon-svg-fill icon-svg-volume-animation-speaker" clip-path="url(#icon-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="icon-id-14"></path><path class="icon-svg-fill icon-svg-volume-animation-hider" clip-path="url(#icon-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="icon-id-15" style="display: none;"></path></svg>`;
		
	}
	  
	  
	   setVolumeLocalStorage();
    }
function volumeStopHandler(e) {
      document.removeEventListener('mousemove', volumeMoveHandler);
      document.removeEventListener('mouseup', volumeStopHandler);
    }
// volumebar when click or seeking 

function volumeBarChange(e){

	const getMousePosition = getElementPercentage(e, volume_bar_container);
	volume_bar.style.width = `${getMousePosition}%`;
	video.volume = getMousePosition / 100;
	if(video.volume === 0){
		video.volume = 0;
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path></svg>`;
	}else if(video.volume > 0){
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><defs><clipPath><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"></path></clipPath><clipPath><path d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="icon-svg-fill icon-svg-volume-animation-speaker" clip-path="url(#icon-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="icon-id-14"></path><path class="icon-svg-fill icon-svg-volume-animation-hider" clip-path="url(#icon-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="icon-id-15" style="display: none;"></path></svg>`;
		
	}
		setVolumeLocalStorage();
	
}
// function fullscreen 

function getFullscreenElement(){
	
	return document.fullscreenElement;
}
player.onfullscreenchange = function (){
	if(!getFullscreenElement()){
		fullscreen_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g><path class="icon-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path></g><g class="icon-fullscreen-button-corner-1"><use class="icon-svg-shadow" xlink:href="#icon-id-7"></use><path class="icon-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="icon-id-7"></path></g><g class="icon-fullscreen-button-corner-2"><use class="icon-svg-shadow" xlink:href="#icon-id-8"></use><path class="icon-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="icon-id-8"></path></g><g class="icon-fullscreen-button-corner-3"><use class="icon-svg-shadow" xlink:href="#icon-id-9"></use><path class="icon-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="icon-id-9"></path></g></svg>`;
		caption_text.style.fontSize = "18px";
		caption_text.style.padding = "7px";
		video.classList.remove("fullscreen-video");
	}
}

function toggleFullscreen(){
	if(getFullscreenElement()){
		document.exitFullscreen();
	}else{
		player.requestFullscreen().catch(console.log);
		fullscreen_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g><path class="icon-svg-fill" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path></g><g><path class="icon-svg-fill" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z" id="icon-id-577"></path></g><g class="icon-fullscreen-button-corner-0"><use class="icon-svg-shadow" xlink:href="#icon-id-578"></use><path class="icon-svg-fill" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z" id="icon-id-578"></path></g><g class="icon-fullscreen-button-corner-1"><use class="icon-svg-shadow" xlink:href="#icon-id-579"></use><path class="icon-svg-fill" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z" id="icon-id-579"></path></g></svg>`;
		caption_text.style.fontSize = "23px";
		caption_text.style.padding = "10px";
		video.classList.add("fullscreen-video");
	}
	
}
//caption panel settings 
function caption_panel_details(){
	settings_container.innerHTML = `<div class="setting_panel_container">
									<div class="settings_panel_header back-btn">
							<span><i class="arrow left"></i></span>
							<span><div>Subtitles/CC</div>
							</span>	
						</div>
							<div class="setting_panel_body"></div></div>`;
	
				// caption details button active 
				const caption_panel_body = document.querySelector(".setting_panel_body");
				
				const createlistItem = function(id,lang,label){
				let listItem = document.createElement("div");
				listItem.classList.add("settings_panel_item","caption_item");
				listItem.setAttribute("data-lang",lang);
				listItem.setAttribute("data-id",id);
				listItem.appendChild(document.createTextNode(label));
				
				
				if(listItem.getAttribute("data-lang") == caption_text.getAttribute("data_srclang")){
					
					listItem.classList.add("active_panel");
					
				}
				
				
				listItem.addEventListener("click",function(e){
					
					let this_lang = this.getAttribute("data-lang");
					let this_id = this.getAttribute("data-id");
					
					const caption_srclang = caption_text.setAttribute("data_srclang",this_lang);
					
				document.querySelector('.active_panel').classList.remove('active_panel');

			this.classList.add("active_panel");
				
				customCaptionFunc(video.textTracks[this_id]);
				
				
						
				});
					return listItem;
				}
			
				let createCaptionMenu;
				createCaptionMenu = document.createElement('div');
				createCaptionMenu.className = 'caption_panel_items';
			for(let i=0;i < video.textTracks.length;i++){
				const srclang = video.textTracks[i].language;
				const languageLabel = video.textTracks[i].label;
		
				createCaptionMenu.appendChild(createlistItem(i,srclang,languageLabel));
			}
			
			caption_panel_body.appendChild(createCaptionMenu);
		
						
	// back btn 
		const backBtn = document.querySelector(".back-btn");
		backBtn.addEventListener("click",playbackSettingsPanelFunc);
	
}

function captionSettingsPanelFunc(){
		const caption_panel_settings = document.querySelector(".playerCaptionSettings");
		
		if(video.textTracks.length != 0){
			
			caption_panel_settings.innerHTML=`<div class="settings_box captionPanelBtn">Subtitles/CC <span><span class="active_subtitle_class"></span> <i class="arrow right"></i></span></div>`;
			
			const active_caption_title = document.querySelector(".active_subtitle_class");
			const caption_display_text = caption_text.getAttribute("data-label");
			active_caption_title.innerHTML = caption_display_text;
			
			
			
			
			const captionPanelBtn = document.querySelector(".captionPanelBtn");
			
			captionPanelBtn.addEventListener("click",caption_panel_details);
			
		}
}


function playbackSettingsPanelFunc(){
		settings_container.innerHTML = `<div class="settings_box">Quality <span>720p </span></div><div class="playerCaptionSettings"></div><div class="settings_box player_paybackSpeed">Speed <span><span class="active_playback_text">${video.playbackRate}</span> <i class="arrow right"></i></span></div>`;
		
	if(video.playbackRate == 1){
		document.querySelector(".active_playback_text").textContent = "Normal";
	}
	const player_paybackSpeed = document.querySelector(".player_paybackSpeed");
	player_paybackSpeed.addEventListener("click",playback_panel_details);
	captionSettingsPanelFunc();
}

// toggleSettingsBox function 
function toggleSettingsBox(e){
	e.stopPropagation();
	 

	playbackSettingsPanelFunc();
	const targetValue = e.target.classList;
	if(main_settings.style.display === "block"){
		main_settings.style.display = "none";
		show_controls.classList.remove("panel_height");
	}else{
		main_settings.style.display = "block";
		show_controls.classList.add("panel_height");
		
	}

}


// player paybackspeed function 

function playback_panel_details(e){
	
	
	settings_container.innerHTML = `<div class="setting_panel_container">
									<div class="settings_panel_header back-btn">
							<span><i class="arrow left"></i></span>
							<span><div>Playback Speed</div>
							</span>	
						</div>
							<div class="setting_panel_body">
								<div data-speed="0.25" class="settings_panel_item">0.25</div>
								<div data-speed="0.5" class="settings_panel_item">0.5</div>
								<div data-speed="0.75" class="settings_panel_item">0.75</div>
								<div data-speed="1" class="settings_panel_item active_panel">Normal</div>
								<div data-speed="1.25" class="settings_panel_item">1.25</div>
								<div data-speed="1.5" class="settings_panel_item">1.5</div>
								<div data-speed="1.75" class="settings_panel_item">1.75</div>
								<div data-speed="2" class="settings_panel_item">2</div>
							</div>
						</div>`;
						
						
				

			// 
	const settings_panel_items = document.querySelectorAll(".settings_panel_item");
	
	settings_panel_items.forEach(function(item){
		
		if(video.playbackRate.toString() == item.getAttribute("data-speed")){
			document.querySelector('.active_panel').classList.remove('active_panel');
			item.classList.add("active_panel");
		}
		item.addEventListener("click",function(e){
		
		const getItemPlaybackSpeedValue =  e.target.getAttribute("data-speed");
		video.playbackRate = getItemPlaybackSpeedValue;
		if(video.playbackRate.toString() == getItemPlaybackSpeedValue){
			document.querySelector('.active_panel').classList.remove('active_panel');

			item.classList.add("active_panel");
		}
		
	});
	
	});
	// back btn 
		const backBtn = document.querySelector(".back-btn");
		backBtn.addEventListener("click",playbackSettingsPanelFunc);
						
}

// keydown function 
document.addEventListener("keyup",(e)=>{
	
	if(e.keyCode == 39){
		
		video.currentTime += 4;
	}
	if(e.keyCode == 37){
		video.currentTime -= 4;
	}
});


// keypress function 
document.addEventListener("keypress",(e)=>{
	if(e.keyCode == 32){
		play_pause_func();
	}
	if(e.keyCode == 102){
		toggleFullscreen();
	}
	if(e.keyCode == 109){
		mute_unmute_func();
	}

	
});



// initialize function 

	play_pause_btn.addEventListener("click",play_pause_func);
	mute_unmute_btn.addEventListener("click",mute_unmute_func);
	video.addEventListener("ended",video_ended);
	video.addEventListener("timeupdate",seekTime_func);
	progress_bar_container.addEventListener("click",progressBarChange);
	progress_bar_container.addEventListener("mousedown",progressDrag);
	volume_bar_container.addEventListener("click",volumeBarChange);
	volume_bar_container.addEventListener("mousedown",volumeDrag);
	fullscreen_btn.addEventListener("click",toggleFullscreen);
	// video.addEventListener("dblclick",toggleFullscreen);
	
let timer;
video.addEventListener("click", e => {
  if (e.detail === 1) {
    timer = setTimeout(() => {
      play_pause_func();
    }, 200)
  }else if(e.detail === 2){
	  clearTimeout(timer);
  toggleFullscreen();
  }
});
	
	// toggleSettingsBox events 
	settings_btn.addEventListener("click",toggleSettingsBox);
	settings_container.addEventListener("click",function(e){
		 e.stopPropagation();
	});
	document.body.addEventListener("click",function(e){
		
		if(main_settings.style.display === "block"){
		main_settings.style.display = "none";
		show_controls.classList.remove("panel_height");
	}
	});
	
// hide cursor and player controls after 5 sec 

(function() {
    let mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        mouseTimer = null;
        video.style.cursor = "none";
		player_controls.style.opacity = "0";
		caption_window.style.bottom = "12px";
        cursorVisible = false;
    }
function mouseMoveFunc() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            video.style.cursor = "default";
			player_controls.style.opacity = "1";
			caption_window.style.bottom = "65px";
            cursorVisible = true;
        }
      if(video.paused == false){
		 mouseTimer = window.setTimeout(disappearCursor, 3000);

	}
    }
	if(video.paused){
		player_controls.style.opacity = "1";
		caption_window.style.bottom = "65px";
	}
    video.addEventListener("mousemove",mouseMoveFunc);
	
	player_controls.onmouseenter = function(){
		player_controls.style.opacity = "1";
		caption_window.style.bottom = "65px";
		window.clearTimeout(mouseTimer);
	}
})();
// set volume in localstorage 
function setVolumeLocalStorage(){
	localStorage.setItem('videoVolume', video.volume);	
	
}
// display time and localstorage volume function 

function displayTimeLocalstorageVolumeFunc(){
		 current_time.textContent = `${displayTime(video.currentTime)}`;
	duration_time.textContent = `${displayTime(video.duration)}`;
	
	const getLocalstorageVolume = localStorage.getItem('videoVolume');
	volume_bar.style.width = `${getLocalstorageVolume * 100}%`;
	video.volume = getLocalstorageVolume;
	if(video.volume == 0){
		mute_unmute_btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="icon-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path></svg>`;
	}
}

					// Turn off all subtitles
	for (let i = 0; i < video.textTracks.length; i++) {
		video.textTracks[i].mode = 'hidden';
		
}
// style your own caption function 
function customCaptionFunc(currentTextTrack){
	let lang = currentTextTrack.language;
	let label = currentTextTrack.label;
	 caption_text.setAttribute("data_srclang",lang);
	 caption_text.setAttribute("data-label",label);
	
	let cues = currentTextTrack.cues;
function cueChangeFunc(e){	

  const cue = currentTextTrack.activeCues[0];
  if(cue){
		 const caption_srclang = caption_text.getAttribute("data_srclang");
		 if(caption_srclang == lang){
			caption_text.innerHTML = cue.text; 
			caption_text.style.opacity = "1";
		 }
	
  }else{
	  caption_text.style.opacity = "0";
  }
		}
	
		currentTextTrack.addEventListener("cuechange",cueChangeFunc);
}




function toggleCaption(){
	if(caption_window.style.display == "none"){
		caption_window.style.display = "block";
		cc_btn_style.style.fill = "white";
	}else{
		caption_window.style.display = "none";
		cc_btn_style.style.fill = "rgb(117 117 117)";
	}
	
}

				

if(video.textTracks.length != 0){
customCaptionFunc(video.textTracks[0]);
	
caption_btn.style.display = "block";

caption_btn.addEventListener("click",toggleCaption);


}

 video.addEventListener('progress', function() {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const duration =  video.duration;
      if (duration > 0) {
		  let percent = ((bufferedEnd / duration)*100);
		 progress_bar_buffer.style.width = `${percent}%`;
      }
    });
	
	// video.addEventListener('progress', function(e) {
    // let percent = null;
    // if (video && video.buffered && video.buffered.length > 0 && video.buffered.end && video.duration) {
        // percent = video.buffered.end(0) / video.duration;
    // } else if (video && video.bytesTotal != undefined && video.bytesTotal > 0 && video.bufferedBytes != undefined) {
        // percent = video.bufferedBytes / video.bytesTotal;
    // }

    // if (percent !== null) {
        // percent = 100 * Math.min(1, Math.max(0, percent));

		// progress_bar_buffer.style.width = `${percent}%`;
        

    // }

// }, false);

displayTimeLocalstorageVolumeFunc();
video.onloadeddata = function() {
	
  displayTimeLocalstorageVolumeFunc();
  video.onloadstart = function(){
	  const loader = document.querySelector(".loader");
		loader.style.display = "block";
  }
	video.onwaiting = function(){
   const loader = document.querySelector(".loader");
		loader.style.display = "block";
	
};

video.onplaying = function(){
    const loader = document.querySelector(".loader");
		loader.style.display = "none";
};
video.oncanplay = function(){
    const loader = document.querySelector(".loader");
		loader.style.display = "none";
};
  
};

	
}
document.addEventListener("DOMContentLoaded",init_player);
// all callback events

