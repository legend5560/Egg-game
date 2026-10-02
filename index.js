(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,468,468]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(img.CachedTexturedBitmap_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2625,1552);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(-0.5,-0.5,234,234), null);


// stage content:
(lib.Egggame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{menu:0,game:1});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		this.stop(); // keeps the code from re-running if the timeline loops
		
		var isMobile = window.matchMedia("(pointer: coarse)").matches &&
		               navigator.maxTouchPoints > 0;
		
		// --- Set stage size: portrait on mobile, landscape on PC ---
		if (isMobile) {
		    lib.properties.width = 720;
		    lib.properties.height = 1280;
		} else {
		    lib.properties.width = 1280;
		    lib.properties.height = 720;
		}
		
		// Resize the canvas itself, then ask Animate's responsive code to refit it
		self.stage.canvas.width = lib.properties.width;
		self.stage.canvas.height = lib.properties.height;
		window.dispatchEvent(new Event("resize"));
		
		// --- Position objects for each layout ---
		function layout() {
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		
		    // Egg in the center on both layouts
		    self.egg.x = W / 2;
		    self.egg.y = H / 2;
		
		    // Add your buttons and slots here later, for example:
		    // if (isMobile) { self.btnFire.x = W * 0.25; self.btnFire.y = H - 100; }
		    // else          { self.btnFire.x = 100;      self.btnFire.y = H * 0.35; }
		}
		layout();
		
		// --- Mobile-only
		var self = this;
		this.stop();
		
		var PARENT_ORIGIN = "https://alistermonstertamer.com";
		
		// Running on its own (Animate preview or the GitHub link), not inside your site:
		// skip login so you can test. Delete this block before launch.
		if (window.parent === window) {
		    exportRoot.user = { uid: "dev-user", username: "Developer here" };
		    this.gotoAndStop("game");
		}
		else if (!exportRoot.authListenerAttached) {
		    exportRoot.authListenerAttached = true;
		    exportRoot.user = null;
		    exportRoot.idToken = null;
		    exportRoot.gotAuth = false;
		
		    window.addEventListener("message", function(e) {
		        if (e.origin !== PARENT_ORIGIN) return;
		        if (e.source !== window.parent) return;
		        var d = e.data;
		        if (!d || d.type !== "auth") return;
		
		        console.log("game got auth message:", d.uid ? "signed in" : "signed out", d.username);
		        exportRoot.gotAuth = true;
		
		        if (d.uid && d.idToken) {
		            exportRoot.user = { uid: d.uid, username: d.username };
		            exportRoot.idToken = d.idToken;
		        } else {
		            exportRoot.user = null;
		            exportRoot.idToken = null;
		        }
		
		        // Leave the menu once we've heard from the site
		        if (exportRoot.currentLabel === "menu") exportRoot.gotoAndStop("game");
		
		        // Refresh the name text if the game screen is already showing
		        if (exportRoot.onUserChange) exportRoot.onUserChange();
		    });
		
		    // Tell the site we're listening; retry in case it wasn't ready yet
		    var tries = 0;
		    var timer = setInterval(function() {
		        if (exportRoot.gotAuth || ++tries > 20) return clearInterval(timer);
		        window.parent.postMessage({ type: "game-ready" }, PARENT_ORIGIN);
		    }, 500);
		    window.parent.postMessage({ type: "game-ready" }, PARENT_ORIGIN);
		}
	}
	this.frame_1 = function() {
		var self = this;
		this.stop();
		
		exportRoot.onUserChange = showName;
		
		// --- Floating egg ---
		var startY = self.egg.y;
		var time = 0;
		
		function floatEgg(evt) {
		    time += evt.delta / 1000;
		    self.egg.y = startY + Math.sin(time * 1.5) * 15;
		}
		createjs.Ticker.addEventListener("tick", floatEgg);
		
		// --- Clean up when leaving this screen ---
		this.cleanup = function() {
		    exportRoot.onUserChange = null;
		    createjs.Ticker.removeEventListener("tick", floatEgg);
		};
		var BAR_H = 66;
		
		var topBar = new createjs.Container();
		var barBg = new createjs.Shape();
		
		topBar.addChild(barBg);
		
		// Background only is 33% opacity
		barBg.alpha = 0.33;
		
		// Add the UI AFTER the existing timeline artwork
		self.addChild(topBar);
		
		
		// --------------------------------------------------
		// PLAYER USERNAME
		// --------------------------------------------------
		
		self.nameText = new createjs.Text(
		    "Marcellus",
		    "28px 'Marcellus'",
		    "#dbeaf5"
		);
		
		topBar.addChild(self.nameText);
		
		
		// --------------------------------------------------
		// PLAYER NAME
		// --------------------------------------------------
		
		function showName() {
		    var u = exportRoot.user;
		
		    self.nameText.text = (u && u.username)
		        ? u.username
		        : "Marcellus";
		}
		
		showName();
		
		exportRoot.onUserChange = showName;
		
		
		// --------------------------------------------------
		// STAR GEMS
		// --------------------------------------------------
		
		var gemContainer = new createjs.Container();
		
		
		// Gem amount
		var gemAmount = new createjs.Text(
		    "120",
		    "bold 14px 'DM Sans'",
		    "#e8f5ff"
		);
		
		gemAmount.x = 0;
		gemAmount.y = -7;
		
		gemContainer.addChild(gemAmount);
		
		
		// STAR GEMS label
		var gemLabel = new createjs.Text(
		    "STAR GEMS",
		    "bold 7px 'DM Sans'",
		    "#7199b7"
		);
		
		gemLabel.letterSpacing = 1;
		gemLabel.x = 30;
		gemLabel.y = -5;
		
		gemContainer.addChild(gemLabel);
		
		topBar.addChild(gemContainer);
		
		
		// --------------------------------------------------
		// MENU BUTTON
		// --------------------------------------------------
		
		var settingsBtn = new createjs.Container();
		
		var menuBg = new createjs.Shape();
		
		menuBg.graphics
		    .setStrokeStyle(1)
		    .beginStroke("#527896")
		    .beginFill("#173b5d")
		    .drawRoundRect(0, 0, 36, 36, 8);
		
		settingsBtn.addChild(menuBg);
		
		
		// Hamburger line 1
		var line1 = new createjs.Shape();
		
		line1.graphics
		    .setStrokeStyle(1)
		    .beginStroke("#b9d8eb")
		    .moveTo(10, 11)
		    .lineTo(26, 11);
		
		
		// Hamburger line 2
		var line2 = new createjs.Shape();
		
		line2.graphics
		    .setStrokeStyle(1)
		    .beginStroke("#b9d8eb")
		    .moveTo(10, 17)
		    .lineTo(26, 17);
		
		
		// Hamburger line 3
		var line3 = new createjs.Shape();
		
		line3.graphics
		    .setStrokeStyle(1)
		    .beginStroke("#b9d8eb")
		    .moveTo(10, 23)
		    .lineTo(26, 23);
		
		settingsBtn.addChild(line1);
		settingsBtn.addChild(line2);
		settingsBtn.addChild(line3);
		
		topBar.addChild(settingsBtn);
		
		
		// --------------------------------------------------
		// LAYOUT
		// --------------------------------------------------
		
		function layoutTopBar() {
		
		    var W = lib.properties.width;
		
		
		    // ----------------------------------------------
		    // Background
		    // ----------------------------------------------
		
		    barBg.graphics.clear();
		
		    // Main dark navy header
		    barBg.graphics
		        .beginFill("#092642")
		        .drawRect(0, 0, W, BAR_H);
		
		    // Slightly darker bottom edge
		    barBg.graphics
		        .beginFill("#08233d")
		        .drawRect(0, BAR_H - 2, W, 2);
		
		
		    // ----------------------------------------------
		    // White Gradient Accent Line
		    // ----------------------------------------------
		
		    barBg.graphics
		        .beginLinearGradientFill(
		            [
		                "rgba(255, 255, 255, 0.45)",
		                "rgba(255, 255, 255, 0.66)",
		                "rgba(255, 255, 255, 0.45)"
		            ],
		            [0, 0.15, 0.85],
		            0,
		            0,
		            W,
		            0
		        )
		        .drawRect(0, BAR_H - 1, W, 1);
		
		
		    // ----------------------------------------------
		    // Username - TOP LEFT
		    // ----------------------------------------------
		
		    self.nameText.x = 32;
		    self.nameText.y = 22;
		
		
		    // ----------------------------------------------
		    // Star Gems - TOP RIGHT
		    // ----------------------------------------------
		
		    gemContainer.x = W - 170;
		    gemContainer.y = BAR_H / 2;
		
		
		    // ----------------------------------------------
		    // Menu button - FAR RIGHT
		    // ----------------------------------------------
		
		    settingsBtn.x = W - 52;
		    settingsBtn.y = 15;
		
		
		    // ----------------------------------------------
		    // Hide old UI elements
		    // ----------------------------------------------
		
		    if (self.timerText) {
		        self.timerText.visible = false;
		    }
		
		    if (self.settingsBtn && self.settingsBtn !== settingsBtn) {
		        self.settingsBtn.visible = false;
		    }
		}
		
		
		// --------------------------------------------------
		// INITIAL LAYOUT
		// --------------------------------------------------
		
		layoutTopBar();
		// --------------------------------------------------
		// ENABLE MOUSE OVER
		// --------------------------------------------------
		
		if (exportRoot.stage) {
		    exportRoot.stage.enableMouseOver(20);
		}
		
		
		// --------------------------------------------------
		// MENU BUTTON
		// --------------------------------------------------
		
		var settingsBtn = new createjs.Container();
		
		
		// --------------------------------------------------
		// BUTTON BACKGROUND
		// --------------------------------------------------
		
		var menuBg = new createjs.Shape();
		
		function drawMenuBg(color) {
		
		    menuBg.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke(color)
		        .beginFill("#173b5d")
		        .drawRoundRect(0, 0, 36, 36, 8);
		}
		
		drawMenuBg("#527896");
		
		settingsBtn.addChild(menuBg);
		
		
		// --------------------------------------------------
		// HAMBURGER LINES
		// --------------------------------------------------
		
		var line1 = new createjs.Shape();
		var line2 = new createjs.Shape();
		var line3 = new createjs.Shape();
		
		function drawMenuLines(color) {
		
		    line1.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke(color)
		        .moveTo(10, 11)
		        .lineTo(26, 11);
		
		    line2.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke(color)
		        .moveTo(10, 17)
		        .lineTo(26, 17);
		
		    line3.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke(color)
		        .moveTo(10, 23)
		        .lineTo(26, 23);
		}
		
		drawMenuLines("#b9d8eb");
		
		settingsBtn.addChild(line1);
		settingsBtn.addChild(line2);
		settingsBtn.addChild(line3);
		
		
		// --------------------------------------------------
		// BUTTON SETTINGS
		// --------------------------------------------------
		
		settingsBtn.cursor = "pointer";
		
		
		// --------------------------------------------------
		// HOVER ON
		// --------------------------------------------------
		
		settingsBtn.addEventListener("rollover", function () {
		
		    // Bright light-blue outline
		    drawMenuBg("#8fd8ff");
		
		    // Bright light-blue hamburger lines
		    drawMenuLines("#8fd8ff");
		
		});
		
		
		// --------------------------------------------------
		// HOVER OFF
		// --------------------------------------------------
		
		settingsBtn.addEventListener("rollout", function () {
		
		    // Normal outline
		    drawMenuBg("#527896");
		
		    // Normal hamburger lines
		    drawMenuLines("#b9d8eb");
		
		});
		
		
		// --------------------------------------------------
		// BUTTON CLICK
		// --------------------------------------------------
		
		settingsBtn.addEventListener("click", function () {
		
		    // Put your menu-opening code here
		
		});
		
		
		// --------------------------------------------------
		// ADD BUTTON TO STAGE
		// --------------------------------------------------
		
		self.addChild(settingsBtn);
		
		
		// --------------------------------------------------
		// RESPONSIVE POSITION
		// --------------------------------------------------
		
		function layoutMenuButton() {
		
		    var W = lib.properties.width;
		
		    settingsBtn.x = W - 52;
		    settingsBtn.y = 15;
		}
		
		
		// --------------------------------------------------
		// INITIAL POSITION
		// --------------------------------------------------
		
		layoutMenuButton();
		// --------------------------------------------------
		// BOTTOM EGG HATCH BAR
		// --------------------------------------------------
		
		var BOTTOM_BAR_H = 82;
		
		var bottomBar = new createjs.Container();
		var bottomBarBg = new createjs.Shape();
		
		bottomBar.addChild(bottomBarBg);
		
		// Background only is 33% opacity
		bottomBarBg.alpha = 0.33;
		
		// Add after existing artwork
		self.addChild(bottomBar);
		
		
		// --------------------------------------------------
		// HATCH TEXT
		// --------------------------------------------------
		
		var hatchText = new createjs.Text(
		    "-  Until the egg hatches.  -",
		    "bold 10px 'DM Sans'",
		    "#8DBBD1"
		);
		
		hatchText.textAlign = "center";
		
		bottomBar.addChild(hatchText);
		
		
		// --------------------------------------------------
		// TIMER
		// --------------------------------------------------
		
		var hatchTimer = new createjs.Text(
		    "00:00:00",
		    "37px 'Marcellus'",
		    "#e8f5ff"
		);
		
		hatchTimer.textAlign = "center";
		
		bottomBar.addChild(hatchTimer);
		
		
		// --------------------------------------------------
		// TIMER LABELS
		// --------------------------------------------------
		
		var timerLabels = new createjs.Text(
		    "HOURS   •   MINUTES   •   SECONDS",
		    "bold 8px 'DM Sans'",
		    "#8DBBD1"
		);
		
		timerLabels.textAlign = "center";
		
		bottomBar.addChild(timerLabels);
		
		
		// --------------------------------------------------
		// LAYOUT
		// --------------------------------------------------
		
		function layoutBottomBar() {
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		
		
		    // ----------------------------------------------
		    // BACKGROUND
		    // ----------------------------------------------
		
		    bottomBarBg.graphics.clear();
		
		    bottomBarBg.graphics
		        .beginFill("#092642")
		        .drawRect(
		            0,
		            H - BOTTOM_BAR_H,
		            W,
		            BOTTOM_BAR_H
		        );
		
		
		    // Slightly darker top edge
		    bottomBarBg.graphics
		        .beginFill("#08233d")
		        .drawRect(
		            0,
		            H - BOTTOM_BAR_H,
		            W,
		            2
		        );
		
		
		    // ----------------------------------------------
		    // WHITE GRADIENT ACCENT LINE
		    // ----------------------------------------------
		
		    bottomBarBg.graphics
		        .beginLinearGradientFill(
		            [
		                "rgba(255, 255, 255, 0.45)",
		                "rgba(255, 255, 255, 0.66)",
		                "rgba(255, 255, 255, 0.45)"
		            ],
		            [0, 0.15, 0.85],
		            0,
		            0,
		            W,
		            0
		        )
		        .drawRect(
		            0,
		            H - BOTTOM_BAR_H,
		            W,
		            1
		        );
		
		
		    // ----------------------------------------------
		    // HATCH TEXT
		    // ----------------------------------------------
		
		    hatchText.x = W / 2;
		    hatchText.y = H - BOTTOM_BAR_H + 10;
		
		
		    // ----------------------------------------------
		    // TIMER
		    // ----------------------------------------------
		
		    hatchTimer.x = W / 2;
		    hatchTimer.y = H - BOTTOM_BAR_H + 24;
		
		
		    // ----------------------------------------------
		    // TIMER LABELS
		    // ----------------------------------------------
		
		    timerLabels.x = W / 2;
		    timerLabels.y = H - BOTTOM_BAR_H + 63;
		}
		
		
		// --------------------------------------------------
		// INITIAL LAYOUT
		// --------------------------------------------------
		
		layoutBottomBar();
		var self = this;
		var startY = self.egg.y;
		var time = 0;
		
		createjs.Ticker.addEventListener("tick", function(evt) {
		    time += evt.delta / 1000;
		    self.egg.y = startY + Math.sin(time * 2) * 15;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.egg = new lib.egg();
	this.egg.name = "egg";
	this.egg.parent = this;
	this.egg.setTransform(640,360,1,1,0,0,0,116.5,116.5);
	this.egg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.egg).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-10,-18,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1302.5,758);
// library properties:
lib.properties = {
	id: '6EA4766156B7B04292821C2C02025349',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#0099CC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_3.png", id:"CachedTexturedBitmap_3"},
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6EA4766156B7B04292821C2C02025349'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;