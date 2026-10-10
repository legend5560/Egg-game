(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[994,0,992,870],[0,0,992,870],[988,872,980,826],[0,872,986,832]]},
		{name:"index_atlas_2", frames: [[944,770,939,519],[0,770,942,522],[944,1291,894,540],[0,0,768,768],[770,0,768,768],[0,1294,512,512]]},
		{name:"index_atlas_3", frames: [[514,470,398,398],[502,514,4,12],[81,842,29,21],[196,615,188,188],[416,514,84,117],[0,615,194,194],[0,811,51,51],[0,870,894,148],[0,1110,894,20],[196,805,62,62],[514,0,468,468],[53,842,26,26],[386,615,28,28],[0,514,414,99],[416,1020,414,7],[0,1020,414,88],[53,811,46,29],[0,0,512,512]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._default = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eggsketches2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.SLUGGITY = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.terratortleegg = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_24();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Stars, new cjs.Rectangle(-15.5,0,31,31), null);


(lib.monsters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":1,Sluggity:2});

	// Layer_1
	this.instance = new lib.SLUGGITY();
	this.instance.parent = this;
	this.instance.setTransform(-384,-384);

	this.instance_1 = new lib._default();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-450.25,-338,1,1,-14.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.2,-536.7,940.5999999999999,940.6);


(lib.lock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_11();
	this.instance.parent = this;
	this.instance.setTransform(3.25,-0.95,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.55,11.7,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.95,7.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lock, new cjs.Rectangle(-0.9,-0.9,23,22.9), null);


(lib.Hatch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.hatchButtonText = new cjs.Text("Hatch the egg", "italic 60px 'DM Sans 36pt SemiBold'", "#3E4C54");
	this.hatchButtonText.name = "hatchButtonText";
	this.hatchButtonText.textAlign = "center";
	this.hatchButtonText.lineHeight = 79;
	this.hatchButtonText.lineWidth = 396;
	this.hatchButtonText.parent = this;
	this.hatchButtonText.setTransform(245.2789,32.4441,0.8732,0.8732);

	this.timeline.addTween(cjs.Tween.get(this.hatchButtonText).wait(1));

	// Layer_4
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(23.65,40.15,1.1924,1.1924);

	this.instance_1 = new lib.CachedTexturedBitmap_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(432.05,41.4,1.1924,1.1924);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkFAJOQhCAAgvgvQgvgvAAhCIAAtbQAAhCAvgvQAvgvBCAAMBILAAAQBCAAAvAvQAvAvAABCIAANbQAABCgvAvQgvAvhCAAg");
	mask.setTransform(247,59);

	// Layer_3
	this.instance_2 = new lib.CachedTexturedBitmap_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2.95,1.1924,1.1924);

	this.instance_3 = new lib.CachedTexturedBitmap_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,110,1.1924,1.1924);

	this.instance_4 = new lib.CachedTexturedBitmap_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1.1924,1.1924);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hatch, new cjs.Rectangle(0,0,493.7,118), null);


(lib.eggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,Terratortle:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.eggsketches2();
	this.instance.parent = this;
	this.instance.setTransform(-22,-13,1.0873,1.0873);

	this.instance_1 = new lib.terratortleegg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22,-13,1.0873,1.0873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-13,556.7,556.7);


(lib.Cryst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-20.85,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cryst, new cjs.Rectangle(-20.8,0,42,58.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,199,199), null);


(lib.MonsterCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmRAhXMAAAhCtMBMjAAAMAAABCtg");
	mask.setTransform(244.025,97.575);

	// Layer_3
	this.MonsterArt = new lib.monsters();
	this.MonsterArt.name = "MonsterArt";
	this.MonsterArt.parent = this;
	this.MonsterArt.setTransform(230,158.05,0.7448,0.7448);

	var maskedShapeInstanceList = [this.MonsterArt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.MonsterArt).wait(1));

	// Layer_2
	this.label = new cjs.Text("Add Monster", "50px 'Marcellus'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 65;
	this.label.lineWidth = 438;
	this.label.parent = this;
	this.label.setTransform(245.1,334.45);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_23();
	this.instance.parent = this;
	this.instance.setTransform(21.5,310.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,328.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.3,143.85,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(196.5,108,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(198,109.5,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.5,21.5,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonsterCard, new cjs.Rectangle(-1.5,-115.9,493,530.4), null);


(lib.MonsterContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkQAW/MAAAgt9MBIhAAAMAAAAt9g");
	mask.setTransform(248.85,125.325);

	// Layer_2
	this.egg = new lib.eggs();
	this.egg.name = "egg";
	this.egg.parent = this;
	this.egg.setTransform(247.05,193,0.7556,0.7556,0,0,0,256.4,265.3);

	this.MonsterArt = new lib.monsters();
	this.MonsterArt.name = "MonsterArt";
	this.MonsterArt.parent = this;
	this.MonsterArt.setTransform(251.1,175.7,0.5627,0.5627,0,0,0,19.8,-2);

	var maskedShapeInstanceList = [this.egg,this.MonsterArt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.egg}]}).to({state:[{t:this.MonsterArt}]},1).wait(1));

	// text
	this.guarding = new cjs.Text("guarding * slot 2", "italic bold 50px 'DM Sans 24pt ExtraBold'", "#8EAFBF");
	this.guarding.name = "guarding";
	this.guarding.textAlign = "center";
	this.guarding.lineHeight = 68;
	this.guarding.lineWidth = 1233;
	this.guarding.parent = this;
	this.guarding.setTransform(246.499,386.95,0.3938,0.3938);

	this.MonsterName = new cjs.Text("Monster name", "60px 'Marcellus'", "#FFFFFF");
	this.MonsterName.name = "MonsterName";
	this.MonsterName.textAlign = "center";
	this.MonsterName.lineHeight = 77;
	this.MonsterName.lineWidth = 751;
	this.MonsterName.parent = this;
	this.MonsterName.setTransform(248.0491,328.3,0.6434,0.6434);

	this.type = new cjs.Text("type 1 * type 2", "italic 50px 'DM Sans 36pt SemiBold'", "#A1D9E5");
	this.type.name = "type";
	this.type.textAlign = "center";
	this.type.lineHeight = 68;
	this.type.lineWidth = 1353;
	this.type.parent = this;
	this.type.setTransform(247.9994,291.1,0.3581,0.3581);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.type},{t:this.MonsterName},{t:this.guarding}]}).wait(2));

	// Layer_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(248.5,143.5,1,1,0,0,0,99.5,99.5);
	this.instance.alpha = 0.6797;

	this.instance_1 = new lib.CachedTexturedBitmap_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.95,13,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.75,13.8,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0.05,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-21.8,496,456.90000000000003);


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.egg_shells = new lib.eggs();
	this.egg_shells.name = "egg_shells";
	this.egg_shells.parent = this;
	this.egg_shells.setTransform(114.85,88,0.7021,0.7021,0,0,0,255.7,255.9);

	this.timeline.addTween(cjs.Tween.get(this.egg_shells).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(-80.1,-100.8,390.9,390.90000000000003), null);


// stage content:
(lib.Egggame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{menu:0,game:1,eggs:2,monsters:3,"import":4,MonsterShowcase:9});

	// timeline functions:
	this.frame_0 = function() {
		//localStorage.removeItem("eggGameSave");
		//location.reload();
		// ==================================================
		 // SAVE SYSTEM
		 // Adobe Animate / CreateJS + Firestore REST API
		 // ==================================================
		
		if (!window.SaveSystem) {
		
		    window.SaveSystem = (function () {
		
		        // --------------------------------------------------
		        // SETTINGS
		        // --------------------------------------------------
		
		        var PROJECT_ID = "alister-1e745";
		
		        var FIRESTORE_ROOT =
		            "https://firestore.googleapis.com/v1/projects/" +
		            PROJECT_ID +
		            "/databases/(default)/documents";
		
		        var SAVE_DELAY = 1000;
		        var WAIT_DELAY = 5000;
		        var BASE_RETRY = 5000;
		        var MAX_RETRY = 5 * 60 * 1000;
		
		        var LOCAL_KEY = "eggGameSave";
		
		        var SECRET =
		            "q7Xv2LmK9tRb4WzN8cPd3HfYs6JgUa1EoTn5MiVq0XrBz7CwA4kDe9Gy2Su8Fh3L";
		
		        var STARTER_EGGS = [4, 4];
		        var SLOT_COUNT = 5;
		        var EXPORT_LIMIT = 6;
		
		        // --------------------------------------------------
		        // DEFAULT SAVE DATA
		        // --------------------------------------------------
		
		        var DEFAULTS = {
		            starGems: 0,
		            cryst: 0,
		            eggEndTimes: "0,0,0,0,0",
		            eggLevel: 1,
		            eggs: [],
		            starterGiven: 0,
		            discovered: [],
		            slots: [0, 0, 0, 0, 0],
		            tapReduction: 5,
		            monsters: [],
		            monsterSeq: 1
		        };
		
		        var NAMES = Object.keys(DEFAULTS);
		
		        // --------------------------------------------------
		        // STATE
		        // --------------------------------------------------
		
		        var data = {};
		        var blob = null;
		        var sealSeq = 0;
		        var dirty = {};
		        var listeners = {};
		
		        var loaded = false;
		        var owner = null;
		        var loadingFor = null;
		        var loadPromise = null;
		
		        var saveTimer = null;
		        var loadTimer = null;
		
		        var saving = false;
		        var loadFailures = 0;
		        var saveFailures = 0;
		        var migrate = false;
		
		        // --------------------------------------------------
		        // RETRY HELPERS
		        // --------------------------------------------------
		
		        function backoff(failures) {
		            return Math.min(
		                BASE_RETRY * Math.pow(2, failures - 1),
		                MAX_RETRY
		            );
		        }
		
		        function isFatal(err) {
		            return /HTTP (401|403)/.test(
		                String(err && err.message)
		            );
		        }
		
		        // --------------------------------------------------
		        // PLAYER IDENTITY
		        // --------------------------------------------------
		
		        function currentOwner() {
		            var u = exportRoot.user;
		
		            if (
		                u &&
		                exportRoot.idToken &&
		                u.uid &&
		                u.uid !== "dev-user" &&
		                u.username
		            ) {
		                return "cloud:" + u.uid;
		            }
		
		            return "local";
		        }
		
		        function uidOf(o) {
		            return o.slice(6);
		        }
		
		        function usernameOf() {
		            var u = exportRoot.user;
		
		            if (!u || !u.username) {
		                throw new Error("missing-username");
		            }
		
		            return String(u.username);
		        }
		
		        function usernameDocumentUrl() {
		            return FIRESTORE_ROOT +
		                "/usernames/" +
		                encodeURIComponent(usernameOf());
		        }
		
		        function saveUrl() {
		            return usernameDocumentUrl() + "/saves/main";
		        }
		
		        function authHeaders() {
		            if (!exportRoot.idToken) {
		                throw new Error("missing-auth-token");
		            }
		
		            return {
		                "Authorization":
		                    "Bearer " + exportRoot.idToken,
		                "Content-Type": "application/json"
		            };
		        }
		
		        // --------------------------------------------------
		        // FIRESTORE READ
		        // --------------------------------------------------
		
		        function getDoc(url) {
		            return fetch(url, {
		                headers: authHeaders()
		            }).then(function (r) {
		                if (r.status === 404) {
		                    return null;
		                }
		
		                if (!r.ok) {
		                    throw new Error("HTTP " + r.status);
		                }
		
		                return r.json();
		            });
		        }
		
		        // --------------------------------------------------
		        // ENCRYPTION
		        // --------------------------------------------------
		
		        var canCrypto = !!(
		            window.crypto &&
		            window.crypto.subtle
		        );
		
		        var keyPromise = null;
		
		        function toB64(s) {
		            return btoa(unescape(encodeURIComponent(s)));
		        }
		
		        function fromB64(s) {
		            return decodeURIComponent(escape(atob(s)));
		        }
		
		        function getKey() {
		            if (!keyPromise) {
		                var enc = new TextEncoder();
		
		                keyPromise = crypto.subtle.importKey(
		                    "raw",
		                    enc.encode(SECRET),
		                    "PBKDF2",
		                    false,
		                    ["deriveKey"]
		                ).then(function (base) {
		                    return crypto.subtle.deriveKey(
		                        {
		                            name: "PBKDF2",
		                            salt: enc.encode("alister"),
		                            iterations: 100000,
		                            hash: "SHA-256"
		                        },
		                        base,
		                        {
		                            name: "AES-GCM",
		                            length: 256
		                        },
		                        false,
		                        ["encrypt", "decrypt"]
		                    );
		                });
		            }
		
		            return keyPromise;
		        }
		
		        function encrypt(obj) {
		            return Promise.resolve().then(function () {
		                var json = JSON.stringify(obj);
		
		                if (!canCrypto) {
		                    return "plain:" + toB64(json);
		                }
		
		                var iv = crypto.getRandomValues(
		                    new Uint8Array(12)
		                );
		
		                return getKey().then(function (key) {
		                    return crypto.subtle.encrypt(
		                        {
		                            name: "AES-GCM",
		                            iv: iv
		                        },
		                        key,
		                        new TextEncoder().encode(json)
		                    );
		                }).then(function (buf) {
		                    var out = new Uint8Array(
		                        12 + buf.byteLength
		                    );
		
		                    out.set(iv);
		                    out.set(new Uint8Array(buf), 12);
		
		                    return btoa(
		                        String.fromCharCode.apply(null, out)
		                    );
		                });
		            });
		        }
		
		        function decrypt(str) {
		            return Promise.resolve().then(function () {
		                str = String(str);
		
		                if (str.indexOf("plain:") === 0) {
		                    return JSON.parse(fromB64(str.slice(6)));
		                }
		
		                if (!canCrypto) {
		                    throw new Error(
		                        "Encrypted save requires HTTPS."
		                    );
		                }
		
		                var bytes = Uint8Array.from(
		                    atob(str),
		                    function (c) {
		                        return c.charCodeAt(0);
		                    }
		                );
		
		                return getKey().then(function (key) {
		                    return crypto.subtle.decrypt(
		                        {
		                            name: "AES-GCM",
		                            iv: bytes.slice(0, 12)
		                        },
		                        key,
		                        bytes.slice(12)
		                    );
		                }).then(function (buf) {
		                    return JSON.parse(
		                        new TextDecoder().decode(buf)
		                    );
		                });
		            });
		        }
		
		        // --------------------------------------------------
		        // ENCRYPT CURRENT DATA
		        // --------------------------------------------------
		
		        function seal() {
		            var n = ++sealSeq;
		
		            return encrypt(data).then(function (b) {
		                if (n === sealSeq) {
		                    blob = b;
		                }
		            }).catch(function (err) {
		                console.error(
		                    "SaveSystem: encryption failed",
		                    err
		                );
		            });
		        }
		
		        // --------------------------------------------------
		        // LOCAL STORAGE
		        // --------------------------------------------------
		
		        function localRead() {
		            var s = null;
		
		            try {
		                s = localStorage.getItem(LOCAL_KEY);
		            } catch (e) {}
		
		            if (!s) {
		                return Promise.resolve({});
		            }
		
		            return decrypt(s).catch(function () {
		                try {
		                    return JSON.parse(s) || {};
		                } catch (e) {
		                    return {};
		                }
		            });
		        }
		
		        function localWrite() {
		            try {
		                if (blob) {
		                    localStorage.setItem(LOCAL_KEY, blob);
		                }
		            } catch (e) {
		                console.error(
		                    "SaveSystem: local storage failed",
		                    e
		                );
		            }
		        }
		
		        // --------------------------------------------------
		        // GENERAL HELPERS
		        // --------------------------------------------------
		
		        function clean(v) {
		            v = Math.floor(Number(v));
		
		            return isFinite(v) && v > 0 ? v : 0;
		        }
		
		        function notify(name) {
		            Object.keys(listeners).forEach(function (k) {
		                try {
		                    listeners[k](
		                        name,
		                        name ? data[name] : null
		                    );
		                } catch (e) {
		                    console.error(e);
		                }
		            });
		        }
		
		        function sameType(v, d) {
		            if (Array.isArray(d)) {
		                return Array.isArray(v);
		            }
		
		            return typeof v === typeof d && v !== null;
		        }
		
		        function speciesName(monsterId) {
		            var species =
		                window.Monster &&
		                Monster.BY_ID &&
		                Monster.BY_ID[monsterId];
		
		            return species ? species.name : "";
		        }
		
		        // --------------------------------------------------
		        // APPLY LOADED SAVE
		        // --------------------------------------------------
		
		        function apply(stored) {
		            stored = stored || {};
		
		            NAMES.forEach(function (name) {
		                var v = stored[name];
		
		                if (sameType(v, DEFAULTS[name])) {
		                    data[name] =
		                        typeof v === "number" ? clean(v) : v;
		                } else {
		                    data[name] = JSON.parse(
		                        JSON.stringify(DEFAULTS[name])
		                    );
		
		                    dirty[name] = true;
		                }
		            });
		
		            data.slots = data.slots.slice(0, SLOT_COUNT);
		
		            while (data.slots.length < SLOT_COUNT) {
		                data.slots.push(0);
		            }
		
		            data.monsters = data.monsters.filter(function (m) {
		                return m &&
		                    clean(m.monsterId) > 0 &&
		                    clean(m.uid) > 0;
		            });
		
		            data.monsters = data.monsters.map(function (m) {
		                if (typeof m.name === "string" && m.name) {
		                    return m;
		                }
		
		                var name = speciesName(m.monsterId);
		
		                if (!name) {
		                    return m;
		                }
		
		                dirty.monsters = true;
		
		                return Object.assign({}, m, {
		                    name: name
		                });
		            });
		
		            var top = 0;
		
		            data.monsters.forEach(function (m) {
		                if (m.uid > top) {
		                    top = m.uid;
		                }
		            });
		
		            if (
		                data.monsterSeq < 1 ||
		                data.monsterSeq <= top
		            ) {
		                data.monsterSeq = top + 1;
		                dirty.monsterSeq = true;
		            }
		        }
		
		        // --------------------------------------------------
		        // STARTER EGGS
		        // --------------------------------------------------
		
		        function giveStarterEggs() {
		            if (data.starterGiven) {
		                return;
		            }
		
		            if (data.eggs.length === 0) {
		                data.eggs = STARTER_EGGS.slice();
		                dirty.eggs = true;
		            }
		
		            data.starterGiven = 1;
		            dirty.starterGiven = true;
		        }
		
		        function markDiscovered() {
		            var found = data.discovered.slice();
		
		            data.eggs.forEach(function (id) {
		                if (found.indexOf(id) < 0) {
		                    found.push(id);
		                }
		            });
		
		            if (
		                found.length !== data.discovered.length
		            ) {
		                data.discovered = found;
		                dirty.discovered = true;
		            }
		        }
		
		        // --------------------------------------------------
		        // CLOUD LOAD AND LEGACY MIGRATION
		        // --------------------------------------------------
		
		        function cloudRead() {
		            return getDoc(saveUrl()).then(function (doc) {
		                var fields = doc && doc.fields;
		
		                if (
		                    fields &&
		                    fields.save &&
		                    fields.save.stringValue
		                ) {
		                    migrate = false;
		
		                    return decrypt(
		                        fields.save.stringValue
		                    );
		                }
		
		                migrate = true;
		
		                return getDoc(
		                    FIRESTORE_ROOT +
		                    "/players/" +
		                    encodeURIComponent(uidOf(owner))
		                ).then(function (old) {
		                    var fields = (old && old.fields) || {};
		
		                    if (
		                        fields.save &&
		                        fields.save.stringValue
		                    ) {
		                        return decrypt(
		                            fields.save.stringValue
		                        );
		                    }
		
		                    var result = {};
		
		                    NAMES.forEach(function (name) {
		                        var field = fields[name];
		
		                        if (!field) {
		                            return;
		                        }
		
		                        if (field.stringValue !== undefined) {
		                            var value = field.stringValue;
		
		                            if (
		                                value &&
		                                (
		                                    value.charAt(0) === "[" ||
		                                    value.charAt(0) === "{"
		                                )
		                            ) {
		                                try {
		                                    value = JSON.parse(value);
		                                } catch (e) {}
		                            }
		
		                            result[name] = value;
		
		                        } else if (
		                            field.integerValue !== undefined
		                        ) {
		                            result[name] =
		                                Number(field.integerValue);
		
		                        } else if (
		                            field.booleanValue !== undefined
		                        ) {
		                            result[name] =
		                                field.booleanValue;
		                        }
		                    });
		
		                    return result;
		                });
		            });
		        }
		
		        // --------------------------------------------------
		        // LOAD
		        // --------------------------------------------------
		
		        function load() {
		            var wanted = currentOwner();
		
		            if (loaded && owner === wanted) {
		                if (Object.keys(dirty).length) {
		                    queueSave(SAVE_DELAY);
		                }
		
		                return Promise.resolve(data);
		            }
		
		            if (
		                loadingFor === wanted &&
		                loadPromise
		            ) {
		                return loadPromise;
		            }
		
		            if (owner !== wanted) {
		                owner = wanted;
		                loaded = false;
		                data = {};
		                blob = null;
		                dirty = {};
		                saving = false;
		                loadFailures = 0;
		                saveFailures = 0;
		                migrate = false;
		            }
		
		            loadingFor = wanted;
		
		            if (loadTimer) {
		                clearTimeout(loadTimer);
		                loadTimer = null;
		            }
		
		            var read =
		                wanted === "local" ?
		                localRead() :
		                cloudRead();
		
		            loadPromise = read.then(function (stored) {
		                if (currentOwner() !== wanted) {
		                    loadingFor = null;
		                    loadPromise = null;
		                    return load();
		                }
		
		                loadFailures = 0;
		
		                apply(stored);
		
		                if (migrate) {
		                    NAMES.forEach(function (name) {
		                        dirty[name] = true;
		                    });
		
		                    migrate = false;
		                }
		
		                giveStarterEggs();
		                markDiscovered();
		
		                loaded = true;
		                loadingFor = null;
		                loadPromise = null;
		
		                seal();
		                notify(null);
		                queueSave(SAVE_DELAY);
		
		                return data;
		
		            }).catch(function (err) {
		                console.error(
		                    "SaveSystem: load failed",
		                    err
		                );
		
		                loadingFor = null;
		                loadPromise = null;
		                loadFailures++;
		
		                if (wanted === "local") {
		                    apply({});
		                    giveStarterEggs();
		                    markDiscovered();
		
		                    loaded = true;
		
		                    seal();
		                    notify(null);
		
		                    return data;
		                }
		
		                if (isFatal(err)) {
		                    console.error(
		                        "SaveSystem: cloud load failed. " +
		                        "Check authentication, username ownership, " +
		                        "and Firestore rules."
		                    );
		                } else {
		                    loadTimer = setTimeout(
		                        load,
		                        backoff(loadFailures)
		                    );
		                }
		
		                return null;
		            });
		
		            return loadPromise;
		        }
		
		        // --------------------------------------------------
		        // SAVE QUEUE
		        // --------------------------------------------------
		
		        function queueSave(delay) {
		            if (saveTimer) {
		                clearTimeout(saveTimer);
		                saveTimer = null;
		            }
		
		            if (!Object.keys(dirty).length) {
		                return;
		            }
		
		            saveTimer = setTimeout(function () {
		                saveTimer = null;
		                flush(false);
		            }, delay);
		        }
		
		        // --------------------------------------------------
		        // WRITE MAIN SAVE TO FIRESTORE
		        // --------------------------------------------------
		
		        function flush(leaving) {
		            var names = Object.keys(dirty);
		
		            if (!loaded || !names.length) {
		                return;
		            }
		
		            if (!blob) {
		                if (!leaving) {
		                    queueSave(500);
		                }
		
		                return;
		            }
		
		            if (owner === "local") {
		                localWrite();
		                dirty = {};
		                return;
		            }
		
		            var u = exportRoot.user;
		
		            if (
		                !exportRoot.idToken ||
		                !u ||
		                !u.uid ||
		                ("cloud:" + u.uid) !== owner ||
		                !u.username
		            ) {
		                queueSave(WAIT_DELAY);
		                return;
		            }
		
		            if (saving && !leaving) {
		                queueSave(WAIT_DELAY);
		                return;
		            }
		
		            if (blob.length >= 20000) {
		                console.error(
		                    "SaveSystem: save is too large for " +
		                    "the current Firestore rules."
		                );
		
		                return;
		            }
		
		            var saveSnapshot = blob;
		            var startOwner = owner;
		            var url;
		
		            try {
		                url = saveUrl() +
		                    "?updateMask.fieldPaths=save";
		            } catch (e) {
		                console.error(e);
		                return;
		            }
		
		            saving = true;
		            dirty = {};
		
		            fetch(url, {
		                method: "PATCH",
		                headers: authHeaders(),
		                body: JSON.stringify({
		                    fields: {
		                        save: {
		                            stringValue: saveSnapshot
		                        }
		                    }
		                }),
		                keepalive: !!leaving
		            }).then(function (r) {
		                if (!r.ok) {
		                    return r.text().then(function (body) {
		                        throw new Error(
		                            "HTTP " + r.status + ": " + body
		                        );
		                    });
		                }
		
		                saveFailures = 0;
		
		            }).catch(function (err) {
		                console.error(
		                    "SaveSystem: save failed",
		                    err
		                );
		
		                if (owner === startOwner) {
		                    names.forEach(function (name) {
		                        dirty[name] = true;
		                    });
		                }
		
		                saveFailures++;
		
		                if (isFatal(err)) {
		                    console.error(
		                        "SaveSystem: check username ownership, " +
		                        "authentication, and Firestore rules."
		                    );
		                } else {
		                    queueSave(backoff(saveFailures));
		                }
		
		            }).then(function () {
		                saving = false;
		
		                if (Object.keys(dirty).length) {
		                    queueSave(SAVE_DELAY);
		                }
		            });
		        }
		
		        // --------------------------------------------------
		        // SAVE WHEN LEAVING THE PAGE
		        // --------------------------------------------------
		
		        document.addEventListener(
		            "visibilitychange",
		            function () {
		                if (
		                    document.visibilityState === "hidden"
		                ) {
		                    flush(true);
		                }
		            }
		        );
		
		        window.addEventListener("pagehide", function () {
		            flush(true);
		        });
		
		        // --------------------------------------------------
		        // PUBLIC DATA FUNCTIONS
		        // --------------------------------------------------
		
		        function get(name) {
		            return data[name] !== undefined ?
		                data[name] : 0;
		        }
		
		        function set(name, value) {
		            if (
		                !loaded ||
		                NAMES.indexOf(name) < 0
		            ) {
		                console.warn(
		                    "SaveSystem: cannot set",
		                    name,
		                    "(not loaded or unknown key)"
		                );
		
		                return false;
		            }
		
		            if (typeof DEFAULTS[name] === "number") {
		                value = clean(value);
		            }
		
		            if (
		                JSON.stringify(value) ===
		                JSON.stringify(data[name])
		            ) {
		                return true;
		            }
		
		            data[name] = value;
		
		            if (name === "eggs") {
		                markDiscovered();
		            }
		
		            dirty[name] = true;
		
		            seal();
		            notify(name);
		            queueSave(SAVE_DELAY);
		
		            return true;
		        }
		
		        function add(name, amount) {
		            return set(name, get(name) + amount);
		        }
		
		        function spend(name, amount) {
		            if (!loaded || get(name) < amount) {
		                return false;
		            }
		
		            return set(name, get(name) - amount);
		        }
		
		        // --------------------------------------------------
		        // EGG PLACEMENT
		        // --------------------------------------------------
		
		        function placeEgg(slot, monsterId, endTime) {
		            if (
		                !loaded ||
		                slot < 0 ||
		                slot >= SLOT_COUNT
		            ) {
		                return false;
		            }
		
		            var slots = data.slots.slice();
		
		            while (slots.length < SLOT_COUNT) {
		                slots.push(0);
		            }
		
		            if (slots[slot]) {
		                return false;
		            }
		
		            var at = data.eggs.indexOf(monsterId);
		
		            if (at < 0) {
		                return false;
		            }
		
		            var eggs = data.eggs.slice();
		            eggs.splice(at, 1);
		
		            slots[slot] = monsterId;
		
		            var times = String(
		                data.eggEndTimes
		            ).split(",");
		
		            while (times.length < SLOT_COUNT) {
		                times.push("0");
		            }
		
		            times[slot] = String(
		                Math.floor(Number(endTime) || 0)
		            );
		
		            set("slots", slots);
		            set("eggs", eggs);
		            set("eggEndTimes", times.join(","));
		
		            return true;
		        }
		
		        // --------------------------------------------------
		        // MONSTERS
		        // --------------------------------------------------
		
		        function randomNature() {
		            if (
		                !window.Monster ||
		                !Monster.NATURE_MODIFIERS
		            ) {
		                return "Hardy";
		            }
		
		            var names = Object.keys(
		                Monster.NATURE_MODIFIERS
		            );
		
		            return names[
		                Math.floor(Math.random() * names.length)
		            ] || "Hardy";
		        }
		
		        function addMonster(monsterId, extra) {
		            if (
		                !loaded ||
		                !window.Monster ||
		                !Monster.BY_ID ||
		                !Monster.BY_ID[monsterId]
		            ) {
		                return 0;
		            }
		
		            var species = Monster.BY_ID[monsterId];
		            var uid = data.monsterSeq;
		
		            var genderRate =
		                typeof species.genderRate === "number" ?
		                species.genderRate : 50;
		
		            var rec = {
		                uid: uid,
		                monsterId: monsterId,
		                name: species.name,
		                nickname: "",
		                shiny: Math.random() < 1 / 4096,
		                level: 1,
		                experience: 0,
		                nature: randomNature(),
		                gender:
		                    Math.random() * 100 < genderRate ?
		                    "Female" : "Male",
		                heldItem: null
		            };
		
		            if (extra) {
		                Object.keys(extra).forEach(function (k) {
		                    rec[k] = extra[k];
		                });
		            }
		
		            rec.uid = uid;
		            rec.monsterId = monsterId;
		            rec.name = species.name;
		
		            rec.level = Math.max(
		                1,
		                Math.min(100, clean(rec.level) || 1)
		            );
		
		            rec.experience = clean(rec.experience);
		
		            var list = data.monsters.slice();
		            list.push(rec);
		
		            set("monsters", list);
		            set("monsterSeq", uid + 1);
		
		            return uid;
		        }
		
		        function getMonsterRecord(uid) {
		            for (var i = 0; i < data.monsters.length; i++) {
		                if (data.monsters[i].uid === uid) {
		                    return data.monsters[i];
		                }
		            }
		
		            return null;
		        }
		
		        function getMonster(uid) {
		            var rec = getMonsterRecord(uid);
		
		            if (!rec) {
		                return null;
		            }
		
		            return Monster.fromSave(rec);
		        }
		
		        function getAllMonsters() {
		            if (!window.Monster) {
		                return [];
		            }
		
		            return data.monsters.map(function (rec) {
		                return Monster.fromSave(rec);
		            }).filter(Boolean);
		        }
		
		        function updateMonster(uid, changes) {
		            if (!loaded || !changes) {
		                return false;
		            }
		
		            var found = false;
		
		            var list = data.monsters.map(function (m) {
		                if (m.uid !== uid) {
		                    return m;
		                }
		
		                found = true;
		
		                var copy = Object.assign({}, m, changes);
		
		                copy.uid = m.uid;
		                copy.monsterId = m.monsterId;
		                copy.name = m.name;
		
		                copy.level = Math.max(
		                    1,
		                    Math.min(100, clean(copy.level) || 1)
		                );
		
		                copy.experience = clean(copy.experience);
		
		                return copy;
		            });
		
		            return found && set("monsters", list);
		        }
		
		        function removeMonster(uid) {
		            if (
		                !loaded ||
		                !getMonsterRecord(uid)
		            ) {
		                return false;
		            }
		
		            return set(
		                "monsters",
		                data.monsters.filter(function (m) {
		                    return m.uid !== uid;
		                })
		            );
		        }
		
		        // --------------------------------------------------
		        // HATCH EGG
		        // --------------------------------------------------
		
		        function hatchEgg(slot) {
		            if (
		                !loaded ||
		                slot < 0 ||
		                slot >= SLOT_COUNT
		            ) {
		                return 0;
		            }
		
		            var monsterId = data.slots[slot];
		
		            if (!monsterId) {
		                return 0;
		            }
		
		            var times = String(
		                data.eggEndTimes
		            ).split(",");
		
		            while (times.length < SLOT_COUNT) {
		                times.push("0");
		            }
		
		            if (Date.now() < Number(times[slot])) {
		                return 0;
		            }
		
		            var uid = addMonster(monsterId);
		
		            if (!uid) {
		                return 0;
		            }
		
		            var slots = data.slots.slice();
		            slots[slot] = 0;
		            times[slot] = "0";
		
		            set("slots", slots);
		            set("eggEndTimes", times.join(","));
		
		            return uid;
		        }
		
		        // --------------------------------------------------
		        // EXPORTED MONSTERS
		        // usernames/{username}/monsters/{0-5}
		        // --------------------------------------------------
		
		        function exportName() {
		            return usernameOf();
		        }
		
		        function fsValue(v) {
		            if (v === null || v === undefined) {
		                return { nullValue: null };
		            }
		
		            if (typeof v === "number") {
		                if (!isFinite(v)) {
		                    return { nullValue: null };
		                }
		
		                if (Number.isInteger(v)) {
		                    return {
		                        integerValue: String(v)
		                    };
		                }
		
		                return {
		                    doubleValue: v
		                };
		            }
		
		            if (typeof v === "boolean") {
		                return { booleanValue: v };
		            }
		
		            if (typeof v === "object") {
		                return {
		                    stringValue: JSON.stringify(v)
		                };
		            }
		
		            return { stringValue: String(v) };
		        }
		
		        function fromFsValue(v) {
		            if ("integerValue" in v) {
		                return Number(v.integerValue);
		            }
		
		            if ("doubleValue" in v) {
		                return Number(v.doubleValue);
		            }
		
		            if ("booleanValue" in v) {
		                return v.booleanValue;
		            }
		
		            if ("stringValue" in v) {
		                return v.stringValue;
		            }
		
		            if ("nullValue" in v) {
		                return null;
		            }
		
		            return null;
		        }
		
		        // --------------------------------------------------
		        // READ EXPORTED MONSTERS
		        // --------------------------------------------------
		
		        function readExported() {
		            var name;
		
		            try {
		                name = exportName();
		            } catch (e) {
		                return Promise.reject(e);
		            }
		
		            var user = exportRoot.user;
		
		            if (
		                !owner ||
		                owner === "local" ||
		                !exportRoot.idToken ||
		                !user ||
		                !user.uid ||
		                ("cloud:" + user.uid) !== owner
		            ) {
		                return Promise.reject(
		                    new Error("not-signed-in")
		                );
		            }
		
		            var url =
		                FIRESTORE_ROOT +
		                "/usernames/" +
		                encodeURIComponent(name) +
		                "/monsters?pageSize=20";
		
		            return getDoc(url).then(function (res) {
		                var docs = (res && res.documents) || [];
		
		                return docs.map(function (d) {
		                    var rec = {};
		
		                    Object.keys(d.fields || {}).forEach(
		                        function (k) {
		                            rec[k] = fromFsValue(d.fields[k]);
		                        }
		                    );
		
		                    return {
		                        slot: Number(
		                            d.name.split("/").pop()
		                        ),
		                        rec: rec
		                    };
		                });
		            });
		        }
		
		        // --------------------------------------------------
		        // EXPORT INFO
		        // --------------------------------------------------
		
		        function getExportInfo() {
		            return readExported().then(function (list) {
		                return {
		                    count: list.length,
		                    limit: EXPORT_LIMIT
		                };
		            });
		        }
		
		        // --------------------------------------------------
		        // EXPORT MONSTERS
		        // --------------------------------------------------
		
		        function exportMonsters(uids) {
		            if (!loaded) {
		                return Promise.reject(
		                    new Error("not-loaded")
		                );
		            }
		
		            var user = exportRoot.user;
		
		            if (
		                !user ||
		                !user.uid ||
		                !user.username ||
		                !exportRoot.idToken ||
		                !owner ||
		                owner === "local" ||
		                owner !== "cloud:" + user.uid
		            ) {
		                return Promise.reject(
		                    new Error("not-signed-in")
		                );
		            }
		
		            if (!Array.isArray(uids) || !uids.length) {
		                return Promise.reject(
		                    new Error("nothing-selected")
		                );
		            }
		
		            var startOwner = owner;
		
		            // Remove duplicate IDs from the selection.
		            var uniqueUIDs = [];
		
		            uids.forEach(function (uid) {
		                if (
		                    uniqueUIDs.indexOf(uid) < 0
		                ) {
		                    uniqueUIDs.push(uid);
		                }
		            });
		
		            var picked = data.monsters.filter(function (m) {
		                return uniqueUIDs.indexOf(m.uid) >= 0;
		            });
		
		            if (!picked.length) {
		                return Promise.reject(
		                    new Error("nothing-selected")
		                );
		            }
		
		            var allowedFields = [
		                "uid",
		                "monsterId",
		                "name",
		                "nickname",
		                "shiny",
		                "level",
		                "experience",
		                "nature",
		                "gender",
		                "heldItem"
		            ];
		
		            return readExported().then(function (current) {
		                if (
		                    owner !== startOwner ||
		                    !exportRoot.user ||
		                    exportRoot.user.uid !== user.uid
		                ) {
		                    throw new Error("player-changed");
		                }
		
		                var used = {};
		
		                current.forEach(function (entry) {
		                    used[String(entry.slot)] = true;
		                });
		
		                var free = [];
		
		                for (var i = 0; i < EXPORT_LIMIT; i++) {
		                    if (!used[String(i)]) {
		                        free.push(i);
		                    }
		                }
		
		                if (picked.length > free.length) {
		                    throw new Error("limit");
		                }
		
		                var username = exportName();
		
		                // This is a Firestore resource name, not a URL.
		                // Keep the document path separators intact.
		                var prefix =
		                    "projects/" + PROJECT_ID +
		                    "/databases/(default)/documents/usernames/" +
		                    username +
		                    "/monsters/";
		
		                var writes = picked.map(function (monster, index) {
		                    var fields = {};
		
		                    allowedFields.forEach(function (key) {
		                        var value = monster[key];
		
		                        if (
		                            key === "name" &&
		                            (!value || value === "")
		                        ) {
		                            value = speciesName(monster.monsterId);
		                        }
		
		                        if (
		                            key === "heldItem" &&
		                            value === undefined
		                        ) {
		                            value = null;
		                        }
		
		                        if (value !== undefined) {
		                            fields[key] = fsValue(value);
		                        }
		                    });
		
		                    // Force required fields to valid Firestore types.
		                    fields.uid = fsValue(monster.uid);
		
		                    fields.monsterId = {
		                        integerValue: String(
		                            Math.floor(Number(monster.monsterId))
		                        )
		                    };
		
		                    fields.name = {
		                        stringValue:
		                            monster.name ||
		                            speciesName(monster.monsterId) ||
		                            ""
		                    };
		
		                    fields.level = {
		                        integerValue: String(
		                            Math.max(
		                                1,
		                                Math.min(
		                                    100,
		                                    clean(monster.level) || 1
		                                )
		                            )
		                        )
		                    };
		
		                    // Create-only write: never overwrite an existing slot.
		                    return {
		                        update: {
		                            name: prefix + free[index],
		                            fields: fields
		                        },
		                        currentDocument: {
		                            exists: false
		                        }
		                    };
		                });
		
		                return fetch(FIRESTORE_ROOT + ":commit", {
		                    method: "POST",
		                    headers: authHeaders(),
		                    body: JSON.stringify({
		                        writes: writes
		                    })
		                }).then(function (response) {
		                    return response.text().then(function (body) {
		                        if (!response.ok) {
		                            var message =
		                                "HTTP " + response.status;
		
		                            try {
		                                var errorJSON = JSON.parse(body);
		
		                                if (
		                                    errorJSON.error &&
		                                    errorJSON.error.message
		                                ) {
		                                    message += ": " +
		                                        errorJSON.error.message;
		                                } else {
		                                    message += ": " + body;
		                                }
		                            } catch (e) {
		                                message += ": " + body;
		                            }
		
		                            throw new Error(message);
		                        }
		
		                        if (
		                            owner !== startOwner ||
		                            !exportRoot.user ||
		                            exportRoot.user.uid !== user.uid
		                        ) {
		                            // The server has already committed the export.
		                            // Do not remove monsters from a different player.
		                            throw new Error("player-changed");
		                        }
		
		                        var exported = {};
		
		                        picked.forEach(function (monster) {
		                            exported[monster.uid] = true;
		                        });
		
		                        var remaining = data.monsters.filter(
		                            function (monster) {
		                                return !exported[monster.uid];
		                            }
		                        );
		
		                        if (!set("monsters", remaining)) {
		                            console.error(
		                                "SaveSystem: exported monsters were saved " +
		                                "to Firestore, but the local save could not " +
		                                "be updated."
		                            );
		                        }
		
		                        return {
		                            count: current.length + picked.length,
		                            limit: EXPORT_LIMIT
		                        };
		                    });
		                });
		            });
		        }
		
		        // --------------------------------------------------
		        // LISTENERS
		        // --------------------------------------------------
		
		        function onChange(key, fn) {
		            listeners[key] = fn;
		        }
		
		        // --------------------------------------------------
		        // PUBLIC API
		        // --------------------------------------------------
		
		        return {
		            load: load,
		            get: get,
		            set: set,
		            add: add,
		            spend: spend,
		
		            placeEgg: placeEgg,
		
		            addMonster: addMonster,
		            getMonster: getMonster,
		            getMonsterRecord: getMonsterRecord,
		            getAllMonsters: getAllMonsters,
		            updateMonster: updateMonster,
		            removeMonster: removeMonster,
		
		            hatchEgg: hatchEgg,
		
		            getExportInfo: getExportInfo,
		            exportMonsters: exportMonsters,
		
		            onChange: onChange,
		
		            saveNow: function () {
		                flush(false);
		            },
		
		            isLoaded: function () {
		                return loaded;
		            },
		
		            where: function () {
		                return owner;
		            },
		
		            exportSave: function () {
		                return blob || "";
		            },
		
		            importSave: function (text) {
		                if (!loaded) {
		                    return Promise.resolve(false);
		                }
		
		                return decrypt(String(text).trim())
		                    .then(function (obj) {
		                        apply(obj);
		                        markDiscovered();
		
		                        NAMES.forEach(function (name) {
		                            dirty[name] = true;
		                        });
		
		                        seal();
		                        notify(null);
		                        queueSave(SAVE_DELAY);
		
		                        return true;
		                    })
		                    .catch(function (err) {
		                        console.error(
		                            "SaveSystem: import failed",
		                            err
		                        );
		
		                        return false;
		                    });
		            }
		        };
		
		    })();
		}
		var self = this;
		this.stop();
		
		var PARENT_ORIGIN = "https://alistermonstertamer.com";
		
		
		// --------------------------------------------------
		// CAPITALIZE USERNAME
		// --------------------------------------------------
		
		function capitalizeUsername(username) {
		
		    if (!username) {
		        return username;
		    }
		
		    return username.charAt(0).toUpperCase() +
		           username.slice(1);
		}
		
		
		// --------------------------------------------------
		// RUNNING ON ITS OWN
		// --------------------------------------------------
		// Animate preview or GitHub link.
		// Skip login so you can test.
		// Delete this block before launch.
		
		if (window.parent === window) {
		
		    exportRoot.user = {
		        uid: "dev-user",
		        username: capitalizeUsername("Developer here")
		    };
		
		    this.gotoAndStop("game");
		
		}
		
		
		// --------------------------------------------------
		// RUNNING INSIDE YOUR WEBSITE
		// --------------------------------------------------
		
		else if (!exportRoot.authListenerAttached) {
		
		    exportRoot.authListenerAttached = true;
		
		    exportRoot.user = null;
		    exportRoot.idToken = null;
		    exportRoot.gotAuth = false;
		
		
		    // --------------------------------------------------
		    // RECEIVE AUTH FROM PARENT WEBSITE
		    // --------------------------------------------------
		
		    window.addEventListener(
		        "message",
		        function(e) {
		
		            if (e.origin !== PARENT_ORIGIN) {
		                return;
		            }
		
		            if (e.source !== window.parent) {
		                return;
		            }
		
		            var d = e.data;
		
		            if (!d || d.type !== "auth") {
		                return;
		            }
		
		
		            console.log(
		                "game got auth message:",
		                d.uid
		                    ? "signed in"
		                    : "signed out",
		                d.username
		            );
		
		
		            exportRoot.gotAuth = true;
		
		
		            // --------------------------------------------------
		            // SIGNED IN
		            // --------------------------------------------------
		
		            if (d.uid && d.idToken) {
		
		                exportRoot.user = {
		                    uid: d.uid,
		                    username: capitalizeUsername(d.username)
		                };
		
		                exportRoot.idToken = d.idToken;
		
		            }
		
		
		            // --------------------------------------------------
		            // SIGNED OUT
		            // --------------------------------------------------
		
		            else {
		
		                exportRoot.user = null;
		                exportRoot.idToken = null;
		
		            }
		
		
		            // --------------------------------------------------
		            // LEAVE MENU
		            // --------------------------------------------------
		
		            if (
		                exportRoot.currentLabel === "menu"
		            ) {
		
		                exportRoot.gotoAndStop("game");
		
		            }
		
		
		            // --------------------------------------------------
		            // REFRESH NAME TEXT
		            // --------------------------------------------------
		
		            if (exportRoot.onUserChange) {
		
		                exportRoot.onUserChange();
		
		            }
		
		        }
		    );
		
		
		    // --------------------------------------------------
		    // TELL PARENT WEBSITE WE ARE READY
		    // --------------------------------------------------
		
		    var tries = 0;
		
		    var timer = setInterval(
		        function() {
		
		            if (
		                exportRoot.gotAuth ||
		                ++tries > 20
		            ) {
		
		                clearInterval(timer);
		
		                return;
		            }
		
		
		            window.parent.postMessage(
		                {
		                    type: "game-ready"
		                },
		                PARENT_ORIGIN
		            );
		
		        },
		        500
		    );
		
		
		    // Initial ready message
		    window.parent.postMessage(
		        {
		            type: "game-ready"
		        },
		        PARENT_ORIGIN
		    );
		}
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
		// ==================================================
		// MONSTER CLASS
		// ==================================================
		
		class Monster {
		
		    constructor(data) {
		
		        data = data || {};
		
		        // IDENTITY
		        this.monsterId = data.monsterId || 0;
		        this.name = data.name || "";
		        this.nickname = data.nickname || "";
		        this.shiny = data.shiny || false;
		
		        // TYPE
		        this.type1 = data.type1 || "";
		        this.type2 = data.type2 || "";
		
		        // DESCRIPTION
		        this.description = data.description || "No description available.";
		
		        // BASE STATS
		        this.baseHp = data.baseHp || 10;
		        this.baseAttack = data.baseAttack || 10;
		        this.baseDefense = data.baseDefense || 10;
		        this.baseSpAttack = data.baseSpAttack || 10;
		        this.baseSpDefense = data.baseSpDefense || 10;
		        this.baseSpeed = data.baseSpeed || 10;
		
		        // LEVEL
		        this.level = data.level || 1;
		
		        // EXPERIENCE
		        this.experience = data.experience || 0;
		        this.experienceCap = data.experienceCap || 0;
		        this.baseExpYield = data.baseExpYield || 64;
		        this.growthRate = data.growthRate || "MEDIUM_SLOW";
		
		        // GENDER
		        this.gender = data.gender || "";
		        this.genderRate = data.genderRate || 50;
		
		        // NATURE
		        this.nature = data.nature || "";
		
		        // FLAGS
		        this.wild = data.wild || false;
		        this.human = data.human || false;
		
		        // ITEMS
		        this.heldItem = data.heldItem || null;
		        this.storedItem = data.storedItem || null;
		
		        // DISPLAY
		        this.sprite = null;
		
		        // SPECIES REGISTRY
		        // The first Monster created for each id is the species template.
		        // Later copies (like monsters rebuilt from a save) don't replace it.
		        if (this.monsterId && !Monster.BY_ID[this.monsterId]) {
		            Monster.BY_ID[this.monsterId] = this;
		        }
		    }
		
		
		    // ==================================================
		    // DISPLAY NAME
		    // ==================================================
		
		    getDisplayName() {
		
		        if (this.nickname !== "") {
		            return this.nickname;
		        }
		
		        return this.name;
		    }
		
		
		    // ==================================================
		    // TYPE VALIDATION
		    // ==================================================
		
		    isValidType(type) {
		
		        return Monster.TYPES.indexOf(type) !== -1;
		    }
		
		
		    // ==================================================
		    // NATURE MODIFIERS
		    // ==================================================
		
		    getNatureModifiers() {
		
		        if (Monster.NATURE_MODIFIERS[this.nature]) {
		            return Monster.NATURE_MODIFIERS[this.nature];
		        }
		
		        return {
		            increase: null,
		            decrease: null
		        };
		    }
		}
		
		
		// ==================================================
		// SPECIES LOOKUP
		// ==================================================
		
		// Filled automatically by the constructor.
		// Only created if it doesn't exist yet, so running this
		// file again never empties the table.
		Monster.BY_ID = Monster.BY_ID || {};
		
		// Other scripts use this name
		Monster.registry = Monster.BY_ID;
		
		// Builds a full Monster from a saved record
		Monster.fromSave = function (rec) {
		
		    var species = Monster.BY_ID[rec.monsterId];
		
		    if (!species) return null;
		
		    var m = new Monster(Object.assign({}, species, rec));
		
		    m.uid = rec.uid;
		
		    return m;
		};
		
		// Makes every frame script see the same class
		window.Monster = Monster;
		
		
		// ==================================================
		// TYPES
		// ==================================================
		
		Monster.TYPES = [
		    "Spectrum",
		    "Willpower",
		    "Hope",
		    "Fear",
		    "Rage",
		    "Love",
		    "Joy",
		    "Envy",
		    "Sorrow",
		    "Pride"
		];
		
		
		// ==================================================
		// NATURE MODIFIERS
		// ==================================================
		
		Monster.NATURE_MODIFIERS = {
		
		    Steadfast: {
		        increase: "baseDefense",
		        decrease: "baseSpAttack"
		    },
		
		    Solitary: {
		        increase: "baseAttack",
		        decrease: "baseDefense"
		    },
		
		    Courageous: {
		        increase: "baseAttack",
		        decrease: "baseSpeed"
		    },
		
		    Daring: {
		        increase: "baseAttack",
		        decrease: "baseSpDefense"
		    },
		
		    Mischievous: {
		        increase: "baseAttack",
		        decrease: "baseSpDefense"
		    },
		
		    Chill: {
		        increase: null,
		        decrease: null
		    },
		
		    Agreeable: {
		        increase: "baseSpDefense",
		        decrease: "baseSpeed"
		    },
		
		    Sincere: {
		        increase: "baseDefense",
		        decrease: "baseSpeed"
		    },
		
		    Playful: {
		        increase: "baseSpeed",
		        decrease: "baseSpDefense"
		    },
		
		    Carefree: {
		        increase: "baseSpDefense",
		        decrease: "baseSpAttack"
		    },
		
		    Skittish: {
		        increase: "baseSpeed",
		        decrease: "baseAttack"
		    },
		
		    Rash: {
		        increase: "baseSpeed",
		        decrease: "baseDefense"
		    },
		
		    Resolute: {
		        increase: null,
		        decrease: null
		    },
		
		    Cheerful: {
		        increase: "baseSpeed",
		        decrease: "baseSpDefense"
		    },
		
		    Innocent: {
		        increase: "baseSpeed",
		        decrease: "baseSpDefense"
		    },
		
		    Whimsical: {
		        increase: "baseSpAttack",
		        decrease: "baseAttack"
		    },
		
		    Serene: {
		        increase: "baseSpAttack",
		        decrease: "baseDefense"
		    },
		
		    Reserved: {
		        increase: "baseSpAttack",
		        decrease: "baseSpeed"
		    },
		
		    Brazen: {
		        increase: "baseSpAttack",
		        decrease: "baseAttack"
		    },
		
		    Reckless: {
		        increase: "baseSpAttack",
		        decrease: "baseSpDefense"
		    },
		
		    Gentle: {
		        increase: "baseSpDefense",
		        decrease: "baseAttack"
		    },
		
		    Tender: {
		        increase: "baseSpDefense",
		        decrease: "baseDefense"
		    },
		
		    Shy: {
		        increase: "baseSpDefense",
		        decrease: "baseSpAttack"
		    },
		
		    Cautious: {
		        increase: "baseSpDefense",
		        decrease: "baseSpAttack"
		    },
		
		    Humble: {
		        increase: null,
		        decrease: null
		    }
		};
		var DEFAULT_EGG_LEVEL = 1;
		
		function getEggLevel() {
		    return (window.SaveSystem && SaveSystem.isLoaded() && SaveSystem.get("eggLevel")) || DEFAULT_EGG_LEVEL;
		}
		
		function setEggLevel(n) {
		    if (window.SaveSystem) SaveSystem.set("eggLevel", Math.max(1, n));
		}
		
		class Egg {
		
		    constructor(data) {
		
		        data = data || {};
		
		        // ------------------------------------------
		        // SPECIES
		        // ------------------------------------------
		
		        this.species = data.species || null;
		
		
		        // ------------------------------------------
		        // EGG ID
		        // ------------------------------------------
		
		        this.eggId = data.eggId || 0;
		
		
		        // ------------------------------------------
		        // EGG LEVEL
		        // ------------------------------------------
		
		        this.eggLevel = data.eggLevel || getEggLevel();
		
		
		        // ------------------------------------------
		        // HATCH TIME
		        // ------------------------------------------
		
		        this.maxHatchTime = this.calculateHatchTime();
		        this.hatchTime = this.maxHatchTime;
				
				// Loaded from a save: use the time left until the saved end time
				if (data.endTime) this.hatchTime = Math.max(0, (data.endTime - Date.now()) / 1000);
		
		
		        // ------------------------------------------
		        // RANDOM VALUES
		        // ------------------------------------------
		
		        this.shiny = data.shiny || false;
		
		        // Random gender
		        this.gender = data.gender || this.randomGender();
		
		        // Random nature
		        this.nature = data.nature || this.randomNature();
		
		
		        // ------------------------------------------
		        // HATCHING
		        // ------------------------------------------
		
		        this.hatched = false;
		        this.hatchedMonster = null;
		    }
		
		
		    // ==================================================
		    // RANDOM GENDER
		    // ==================================================
		
		    randomGender() {
		
		        if (!this.species) {
		            return "";
		        }
		
		        var roll = Math.random() * 100;
		
		        if (roll < this.species.genderRate) {
		            return "Female";
		        }
		
		        return "Male";
		    }
		
		
		    // ==================================================
		    // RANDOM NATURE
		    // ==================================================
		
		    randomNature() {
		
		        var natures = Object.keys(Monster.NATURE_MODIFIERS);
		
		        var index = Math.floor(Math.random() * natures.length);
		
		        return natures[index];
		    }
		
		
		    // ==================================================
		    // BASE STAT TOTAL
		    // ==================================================
		
		    getBaseStatTotal() {
		
		        if (!this.species) {
		            return 0;
		        }
		
		        return (
		            this.species.baseHp +
		            this.species.baseAttack +
		            this.species.baseDefense +
		            this.species.baseSpAttack +
		            this.species.baseSpDefense +
		            this.species.baseSpeed
		        );
		    }
		
		
		    // ==================================================
		    // CALCULATE HATCH TIME
		    // ==================================================
		
		    calculateHatchTime() {
		
		        var baseStatTotal = this.getBaseStatTotal();
		
		        return baseStatTotal * this.eggLevel * 3;
		    }
		
		
		    // ==================================================
		    // UPDATE
		    // ==================================================
		
		    update(delta) {
		
		        if (this.hatched) {
		            return;
		        }
		
		        this.hatchTime -= delta;
		
		        if (this.hatchTime <= 0) {
		
		            this.hatchTime = 0;
		            this.hatched = true;
		        }
		    }
		
		
		    // ==================================================
		    // CAN HATCH
		    // ==================================================
		
		    canHatch() {
		
		        return this.hatchTime <= 0 && !this.hatchedMonster;
		    }
		
		
		    // ==================================================
		    // HATCH
		    // ==================================================
		
		    hatch() {
		
		        if (!this.canHatch()) {
		            return this.hatchedMonster;
		        }
		
		        if (!this.species) {
		            console.error("Egg has no monster species.");
		            return null;
		        }
		
		        var monsterData = Object.assign({}, this.species);
		
		        monsterData.shiny = this.shiny;
		        monsterData.gender = this.gender;
		        monsterData.nature = this.nature;
		
		        var monster = new Monster(monsterData);
		
		        this.hatchedMonster = monster;
		        this.hatched = true;
		
		        return monster;
		    }
		}
		// ==================================================
		// MONSTER LIST
		// ==================================================
		
		// ------------------------------------------
		// STARTERS
		// ------------------------------------------
		
		// Terradon line (Fear starter)
		var terradon = new Monster({
		    monsterId: 1,
		    name: "Terradon",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "",
		    baseHp: 44,
		    baseAttack: 48,
		    baseDefense: 65,
		    baseSpAttack: 50,
		    baseSpDefense: 62,
		    baseSpeed: 47,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var terradonStage2 = new Monster({
		    monsterId: 2,
		    name: "Terradon",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "",
		    baseHp: 62,
		    baseAttack: 66,
		    baseDefense: 83,
		    baseSpAttack: 68,
		    baseSpDefense: 81,
		    baseSpeed: 63,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var terradonStage3 = new Monster({
		    monsterId: 3,
		    name: "Terradon",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Rage",
		    baseHp: 79,
		    baseAttack: 83,
		    baseDefense: 100,
		    baseSpAttack: 85,
		    baseSpDefense: 100,
		    baseSpeed: 78,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		// Sluggity line (Willpower starter)
		var sluggity = new Monster({
		    monsterId: 13,
		    name: "Sluggity",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "",
		    baseHp: 50,
		    baseAttack: 44,
		    baseDefense: 54,
		    baseSpAttack: 63,
		    baseSpDefense: 65,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var sluggityStage2 = new Monster({
		    monsterId: 14,
		    name: "Sluggity",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "Love",
		    baseHp: 69,
		    baseAttack: 63,
		    baseDefense: 69,
		    baseSpAttack: 82,
		    baseSpDefense: 88,
		    baseSpeed: 51,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var sluggityStage3 = new Monster({
		    monsterId: 15,
		    name: "Sluggity",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "Love",
		    baseHp: 88,
		    baseAttack: 82,
		    baseDefense: 83,
		    baseSpAttack: 100,
		    baseSpDefense: 110,
		    baseSpeed: 62,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		// Starn line (Hope starter)
		var starn = new Monster({
		    monsterId: 22,
		    name: "Starn",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 50,
		    baseDefense: 40,
		    baseSpAttack: 70,
		    baseSpDefense: 55,
		    baseSpeed: 56,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var roadrunner = new Monster({
		    monsterId: 23,
		    name: "Roadrunner",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 58,
		    baseAttack: 65,
		    baseDefense: 55,
		    baseSpAttack: 87,
		    baseSpDefense: 65,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var roadrunnerStage3 = new Monster({
		    monsterId: 24,
		    name: "Roadrunner",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "Pride",
		    baseHp: 78,
		    baseAttack: 84,
		    baseDefense: 78,
		    baseSpAttack: 109,
		    baseSpDefense: 80,
		    baseSpeed: 106,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		// ------------------------------------------
		// TWO-STAGE MONSTERS
		// ------------------------------------------
		
		var terratortle = new Monster({
		    monsterId: 4,
		    name: "Terratortle",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Pride",
		    baseHp: 115,
		    baseAttack: 60,
		    baseDefense: 80,
		    baseSpAttack: 25,
		    baseSpDefense: 80,
		    baseSpeed: 30,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "These reptiles are extremely territorial and take pride in defending the area they claimed. They use the shape of their shell to scare away smaller foes.",
		});
		
		var tortabunker = new Monster({
		    monsterId: 5,
		    name: "Tortabunker",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "",
		    baseHp: 130,
		    baseAttack: 105,
		    baseDefense: 65,
		    baseSpAttack: 60,
		    baseSpDefense: 115,
		    baseSpeed: 55,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Having pride in the hardness of their shells, these creatures slam their shells with others of the same species to test their might.",
		});
		
		var spider = new Monster({
		    monsterId: 6,
		    name: "Spider",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 35,
		    baseDefense: 40,
		    baseSpAttack: 40,
		    baseSpDefense: 35,
		    baseSpeed: 55,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var spiderStage2 = new Monster({
		    monsterId: 7,
		    name: "Spider",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "",
		    baseHp: 75,
		    baseAttack: 75,
		    baseDefense: 55,
		    baseSpAttack: 65,
		    baseSpDefense: 55,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var vulture = new Monster({
		    monsterId: 8,
		    name: "Vulture",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Envy",
		    baseHp: 95,
		    baseAttack: 65,
		    baseDefense: 85,
		    baseSpAttack: 55,
		    baseSpDefense: 90,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var jackInTheBox = new Monster({
		    monsterId: 9,
		    name: "Jack in the Box",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Joy",
		    baseHp: 95,
		    baseAttack: 50,
		    baseDefense: 70,
		    baseSpAttack: 50,
		    baseSpDefense: 80,
		    baseSpeed: 55,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var bat = new Monster({
		    monsterId: 10,
		    name: "Bat",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Spectrum",
		    baseHp: 40,
		    baseAttack: 30,
		    baseDefense: 35,
		    baseSpAttack: 45,
		    baseSpDefense: 40,
		    baseSpeed: 55,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var batStage2 = new Monster({
		    monsterId: 11,
		    name: "Bat",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Spectrum",
		    baseHp: 85,
		    baseAttack: 70,
		    baseDefense: 75,
		    baseSpAttack: 95,
		    baseSpDefense: 75,
		    baseSpeed: 125,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var crocodile = new Monster({
		    monsterId: 12,
		    name: "Crocodile",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "Rage",
		    baseHp: 145,
		    baseAttack: 85,
		    baseDefense: 120,
		    baseSpAttack: 60,
		    baseSpDefense: 107,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var racerSnake = new Monster({
		    monsterId: 16,
		    name: "Racer Snake",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "Fear",
		    baseHp: 65,
		    baseAttack: 115,
		    baseDefense: 55,
		    baseSpAttack: 75,
		    baseSpDefense: 60,
		    baseSpeed: 115,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var lotuer = new Monster({
		    monsterId: 17,
		    name: "Lotuer",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "",
		    baseHp: 250,
		    baseAttack: 5,
		    baseDefense: 5,
		    baseSpAttack: 35,
		    baseSpDefense: 105,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Shattered stones across the battlefield gave life to this plant life, giving their petals stronger healing properties and a stronger scent.",
		});
		
		var lotussel = new Monster({
		    monsterId: 18,
		    name: "Lotussel",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "Love",
		    baseHp: 255,
		    baseAttack: 5,
		    baseDefense: 10,
		    baseSpAttack: 75,
		    baseSpDefense: 135,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dragonfly = new Monster({
		    monsterId: 19,
		    name: "Dragonfly",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "Joy",
		    baseHp: 65,
		    baseAttack: 55,
		    baseDefense: 45,
		    baseSpAttack: 65,
		    baseSpDefense: 45,
		    baseSpeed: 115,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var galapaPenguin = new Monster({
		    monsterId: 20,
		    name: "Galapa Penguin",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "",
		    baseHp: 50,
		    baseAttack: 45,
		    baseDefense: 55,
		    baseSpAttack: 40,
		    baseSpDefense: 50,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Penguin",
		});
		
		var galapaPenguinStage2 = new Monster({
		    monsterId: 21,
		    name: "Galapa Penguin",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "",
		    baseHp: 55,
		    baseAttack: 55,
		    baseDefense: 70,
		    baseSpAttack: 50,
		    baseSpDefense: 65,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Penguin",
		});
		
		var rainbowFish = new Monster({
		    monsterId: 25,
		    name: "Rainbow Fish",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 68,
		    baseAttack: 80,
		    baseDefense: 70,
		    baseSpAttack: 80,
		    baseSpDefense: 70,
		    baseSpeed: 92,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dolphin = new Monster({
		    monsterId: 26,
		    name: "Dolphin",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 50,
		    baseDefense: 45,
		    baseSpAttack: 65,
		    baseSpDefense: 55,
		    baseSpeed: 70,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Dolphin",
		});
		
		var dolphinStage2 = new Monster({
		    monsterId: 27,
		    name: "Dolphin",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "Joy",
		    baseHp: 65,
		    baseAttack: 75,
		    baseDefense: 70,
		    baseSpAttack: 105,
		    baseSpDefense: 80,
		    baseSpeed: 95,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Dolphin",
		});
		
		var babySwan = new Monster({
		    monsterId: 28,
		    name: "Baby Swan",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 40,
		    baseAttack: 35,
		    baseDefense: 45,
		    baseSpAttack: 60,
		    baseSpDefense: 55,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Baby Swan",
		});
		
		var greatEgret = new Monster({
		    monsterId: 29,
		    name: "Great Egret",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "Love",
		    baseHp: 70,
		    baseAttack: 60,
		    baseDefense: 70,
		    baseSpAttack: 100,
		    baseSpDefense: 90,
		    baseSpeed: 85,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Great Egret",
		});
		
		var clam = new Monster({
		    monsterId: 30,
		    name: "Clam",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 70,
		    baseAttack: 55,
		    baseDefense: 75,
		    baseSpAttack: 60,
		    baseSpDefense: 75,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var wesper = new Monster({
		    monsterId: 31,
		    name: "Wesper",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "",
		    baseHp: 38,
		    baseAttack: 35,
		    baseDefense: 35,
		    baseSpAttack: 75,
		    baseSpDefense: 65,
		    baseSpeed: 57,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var esllow = new Monster({
		    monsterId: 32,
		    name: "Esllow",
		    nickname: "",
		    shiny: false,
		    type1: "Hope",
		    type2: "Envy",
		    baseHp: 68,
		    baseAttack: 65,
		    baseDefense: 65,
		    baseSpAttack: 135,
		    baseSpDefense: 115,
		    baseSpeed: 70,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var bull = new Monster({
		    monsterId: 33,
		    name: "Bull",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "Spectrum",
		    baseHp: 95,
		    baseAttack: 120,
		    baseDefense: 75,
		    baseSpAttack: 40,
		    baseSpDefense: 65,
		    baseSpeed: 90,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var bombardant = new Monster({
		    monsterId: 34,
		    name: "Bombardant",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "",
		    baseHp: 85,
		    baseAttack: 55,
		    baseDefense: 70,
		    baseSpAttack: 55,
		    baseSpDefense: 60,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var antQueen = new Monster({
		    monsterId: 35,
		    name: "Ant Queen",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "Willpower",
		    baseHp: 120,
		    baseAttack: 85,
		    baseDefense: 95,
		    baseSpAttack: 75,
		    baseSpDefense: 95,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var whaleShark = new Monster({
		    monsterId: 36,
		    name: "Whale Shark",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "",
		    baseHp: 130,
		    baseAttack: 70,
		    baseDefense: 95,
		    baseSpAttack: 50,
		    baseSpDefense: 95,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var sallyLightfootCrab = new Monster({
		    monsterId: 37,
		    name: "Sally Lightfoot Crab",
		    nickname: "",
		    shiny: false,
		    type1: "",
		    type2: "",
		    baseHp: 35,
		    baseAttack: 40,
		    baseDefense: 35,
		    baseSpAttack: 40,
		    baseSpDefense: 35,
		    baseSpeed: 35,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var sallyLightfootCrabStage2 = new Monster({
		    monsterId: 38,
		    name: "Sally Lightfoot Crab",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "Pride",
		    baseHp: 55,
		    baseAttack: 35,
		    baseDefense: 75,
		    baseSpAttack: 45,
		    baseSpDefense: 110,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var boar = new Monster({
		    monsterId: 39,
		    name: "Boar",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "",
		    baseHp: 70,
		    baseAttack: 65,
		    baseDefense: 55,
		    baseSpAttack: 40,
		    baseSpDefense: 50,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var boarStage2 = new Monster({
		    monsterId: 40,
		    name: "Boar",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "",
		    baseHp: 125,
		    baseAttack: 70,
		    baseDefense: 65,
		    baseSpAttack: 45,
		    baseSpDefense: 60,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var frester = new Monster({
		    monsterId: 41,
		    name: "Frester",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "",
		    baseHp: 60,
		    baseAttack: 75,
		    baseDefense: 42,
		    baseSpAttack: 75,
		    baseSpDefense: 42,
		    baseSpeed: 96,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Fester uses its tail to draw predators and prey away from their shelters. Once a creature is lured out, fester Willpower make a sound that resembles laughing as it steals food.",
		});
		
		var frigatebird = new Monster({
		    monsterId: 42,
		    name: "Frigatebird",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "Love",
		    baseHp: 100,
		    baseAttack: 125,
		    baseDefense: 60,
		    baseSpAttack: 85,
		    baseSpDefense: 55,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var larvight = new Monster({
		    monsterId: 43,
		    name: "Larvight",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 30,
		    baseDefense: 25,
		    baseSpAttack: 20,
		    baseSpDefense: 20,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var samuraiBug = new Monster({
		    monsterId: 44,
		    name: "Samurai Bug",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "Rage",
		    baseHp: 50,
		    baseAttack: 25,
		    baseDefense: 55,
		    baseSpAttack: 30,
		    baseSpDefense: 45,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var hiderefly = new Monster({
		    monsterId: 45,
		    name: "Hiderefly",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "Hope",
		    baseHp: 60,
		    baseAttack: 45,
		    baseDefense: 50,
		    baseSpAttack: 90,
		    baseSpDefense: 70,
		    baseSpeed: 85,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var babyBear = new Monster({
		    monsterId: 46,
		    name: "Baby Bear",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "",
		    baseHp: 55,
		    baseAttack: 50,
		    baseDefense: 45,
		    baseSpAttack: 50,
		    baseSpDefense: 45,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Baby Bear",
		});
		
		var honeyBear = new Monster({
		    monsterId: 47,
		    name: "Honey Bear",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "Rage",
		    baseHp: 90,
		    baseAttack: 100,
		    baseDefense: 75,
		    baseSpAttack: 80,
		    baseSpDefense: 75,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Honey Bear",
		});
		
		var finian = new Monster({
		    monsterId: 48,
		    name: "Finian",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Joy",
		    baseHp: 45,
		    baseAttack: 40,
		    baseDefense: 55,
		    baseSpAttack: 50,
		    baseSpDefense: 55,
		    baseSpeed: 35,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var frovor = new Monster({
		    monsterId: 49,
		    name: "Frovor",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "",
		    baseHp: 75,
		    baseAttack: 80,
		    baseDefense: 60,
		    baseSpAttack: 70,
		    baseSpDefense: 65,
		    baseSpeed: 85,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var drayos = new Monster({
		    monsterId: 50,
		    name: "Drayos",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "",
		    baseHp: 70,
		    baseAttack: 65,
		    baseDefense: 60,
		    baseSpAttack: 80,
		    baseSpDefense: 65,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dranoshi = new Monster({
		    monsterId: 51,
		    name: "Dranoshi",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "Sorrow",
		    baseHp: 95,
		    baseAttack: 110,
		    baseDefense: 80,
		    baseSpAttack: 125,
		    baseSpDefense: 90,
		    baseSpeed: 100,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dogCollie = new Monster({
		    monsterId: 52,
		    name: "Dog (Collie)",
		    nickname: "",
		    shiny: false,
		    type1: "Joy",
		    type2: "Spectrum",
		    baseHp: 70,
		    baseAttack: 85,
		    baseDefense: 70,
		    baseSpAttack: 50,
		    baseSpDefense: 75,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var seaLion = new Monster({
		    monsterId: 53,
		    name: "Sea Lion",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "",
		    baseHp: 65,
		    baseAttack: 40,
		    baseDefense: 55,
		    baseSpAttack: 50,
		    baseSpDefense: 70,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var seaLionStage2 = new Monster({
		    monsterId: 54,
		    name: "Sea Lion",
		    nickname: "",
		    shiny: false,
		    type1: "",
		    type2: "",
		    baseHp: 105,
		    baseAttack: 60,
		    baseDefense: 95,
		    baseSpAttack: 70,
		    baseSpDefense: 105,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var amore = new Monster({
		    monsterId: 55,
		    name: "Amore",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "",
		    baseHp: 80,
		    baseAttack: 80,
		    baseDefense: 75,
		    baseSpAttack: 60,
		    baseSpDefense: 60,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var kyomour = new Monster({
		    monsterId: 56,
		    name: "Kyomour",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "Sorrow",
		    baseHp: 110,
		    baseAttack: 125,
		    baseDefense: 80,
		    baseSpAttack: 90,
		    baseSpDefense: 80,
		    baseSpeed: 95,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var elephant = new Monster({
		    monsterId: 57,
		    name: "Elephant",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "Hope",
		    baseHp: 110,
		    baseAttack: 85,
		    baseDefense: 90,
		    baseSpAttack: 95,
		    baseSpDefense: 95,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var rabbit = new Monster({
		    monsterId: 58,
		    name: "Rabbit",
		    nickname: "",
		    shiny: false,
		    type1: "",
		    type2: "Spectrum",
		    baseHp: 50,
		    baseAttack: 45,
		    baseDefense: 40,
		    baseSpAttack: 70,
		    baseSpDefense: 55,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var rabbitStage2 = new Monster({
		    monsterId: 59,
		    name: "Rabbit",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "Spectrum",
		    baseHp: 75,
		    baseAttack: 60,
		    baseDefense: 65,
		    baseSpAttack: 110,
		    baseSpDefense: 80,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var flower = new Monster({
		    monsterId: 60,
		    name: "Flower",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 40,
		    baseDefense: 50,
		    baseSpAttack: 60,
		    baseSpDefense: 55,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Flamingo",
		});
		
		var flamingo = new Monster({
		    monsterId: 61,
		    name: "Flamingo",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "Spectrum",
		    baseHp: 65,
		    baseAttack: 90,
		    baseDefense: 65,
		    baseSpAttack: 90,
		    baseSpDefense: 65,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Flamingo",
		});
		
		var flamingoStage2 = new Monster({
		    monsterId: 62,
		    name: "Flamingo",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 40,
		    baseDefense: 50,
		    baseSpAttack: 60,
		    baseSpDefense: 55,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Flamingo",
		});
		
		var abysmal = new Monster({
		    monsterId: 63,
		    name: "Abysmal",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "",
		    baseHp: 50,
		    baseAttack: 55,
		    baseDefense: 45,
		    baseSpAttack: 70,
		    baseSpDefense: 50,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Abysmal drifts alone in the deepest trenches, its faint glow growing stronger in the presence of a void. Ancient sailors believed its light was a warning.",
		});
		
		var abyssreign = new Monster({
		    monsterId: 64,
		    name: "Abyssreign",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "Hope",
		    baseHp: 80,
		    baseAttack: 85,
		    baseDefense: 75,
		    baseSpAttack: 115,
		    baseSpDefense: 80,
		    baseSpeed: 90,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Dragon fish",
		});
		
		var redPoppies = new Monster({
		    monsterId: 65,
		    name: "Red Poppies",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "Love",
		    baseHp: 70,
		    baseAttack: 42,
		    baseDefense: 58,
		    baseSpAttack: 92,
		    baseSpDefense: 68,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Red poppies",
		});
		
		var snake = new Monster({
		    monsterId: 66,
		    name: "Snake",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "Fear",
		    baseHp: 90,
		    baseAttack: 70,
		    baseDefense: 85,
		    baseSpAttack: 60,
		    baseSpDefense: 90,
		    baseSpeed: 40,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var lavaGull = new Monster({
		    monsterId: 67,
		    name: "Lava Gull",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "",
		    baseHp: 60,
		    baseAttack: 55,
		    baseDefense: 55,
		    baseSpAttack: 45,
		    baseSpDefense: 60,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var lavaGullStage2 = new Monster({
		    monsterId: 68,
		    name: "Lava Gull",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "Rage",
		    baseHp: 95,
		    baseAttack: 95,
		    baseDefense: 85,
		    baseSpAttack: 65,
		    baseSpDefense: 90,
		    baseSpeed: 45,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var kingAngelFish = new Monster({
		    monsterId: 69,
		    name: "King Angel Fish",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 45,
		    baseAttack: 50,
		    baseDefense: 55,
		    baseSpAttack: 65,
		    baseSpDefense: 60,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "King angel fish",
		});
		
		var kingAngelFishStage2 = new Monster({
		    monsterId: 70,
		    name: "King Angel Fish",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "",
		    baseHp: 75,
		    baseAttack: 75,
		    baseDefense: 78,
		    baseSpAttack: 95,
		    baseSpDefense: 85,
		    baseSpeed: 55,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "King angel fish",
		});
		
		var leviathan = new Monster({
		    monsterId: 71,
		    name: "Leviathan",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "",
		    baseHp: 120,
		    baseAttack: 110,
		    baseDefense: 100,
		    baseSpAttack: 130,
		    baseSpDefense: 100,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var hermitCrab = new Monster({
		    monsterId: 72,
		    name: "Hermit Crab",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "",
		    baseHp: 90,
		    baseAttack: 45,
		    baseDefense: 65,
		    baseSpAttack: 40,
		    baseSpDefense: 40,
		    baseSpeed: 35,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var hermitCrabStage2 = new Monster({
		    monsterId: 73,
		    name: "Hermit Crab",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "Pride",
		    baseHp: 95,
		    baseAttack: 60,
		    baseDefense: 100,
		    baseSpAttack: 100,
		    baseSpDefense: 80,
		    baseSpeed: 55,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var jelfish = new Monster({
		    monsterId: 74,
		    name: "Jelfish",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "",
		    baseHp: 40,
		    baseAttack: 40,
		    baseDefense: 35,
		    baseSpAttack: 50,
		    baseSpDefense: 100,
		    baseSpeed: 70,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var boxJellyfish = new Monster({
		    monsterId: 75,
		    name: "Box Jellyfish",
		    nickname: "",
		    shiny: false,
		    type1: "",
		    type2: "",
		    baseHp: 110,
		    baseAttack: 85,
		    baseDefense: 95,
		    baseSpAttack: 60,
		    baseSpDefense: 80,
		    baseSpeed: 85,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var boxJellyfishStage2 = new Monster({
		    monsterId: 76,
		    name: "Box Jellyfish",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "Rage",
		    baseHp: 90,
		    baseAttack: 60,
		    baseDefense: 65,
		    baseSpAttack: 80,
		    baseSpDefense: 120,
		    baseSpeed: 100,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var racoonBurglar = new Monster({
		    monsterId: 77,
		    name: "Racoon Burglar",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "",
		    baseHp: 80,
		    baseAttack: 90,
		    baseDefense: 75,
		    baseSpAttack: 65,
		    baseSpDefense: 75,
		    baseSpeed: 90,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var felisCatus = new Monster({
		    monsterId: 78,
		    name: "Felis Catus",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "",
		    baseHp: 60,
		    baseAttack: 50,
		    baseDefense: 60,
		    baseSpAttack: 100,
		    baseSpDefense: 80,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var lavaHerons = new Monster({
		    monsterId: 79,
		    name: "Lava Herons",
		    nickname: "",
		    shiny: false,
		    type1: "Envy",
		    type2: "Sorrow",
		    baseHp: 70,
		    baseAttack: 105,
		    baseDefense: 65,
		    baseSpAttack: 85,
		    baseSpDefense: 75,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var shield = new Monster({
		    monsterId: 80,
		    name: "Shield",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "Joy",
		    baseHp: 80,
		    baseAttack: 50,
		    baseDefense: 100,
		    baseSpAttack: 55,
		    baseSpDefense: 95,
		    baseSpeed: 50,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var goat = new Monster({
		    monsterId: 81,
		    name: "Goat",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "",
		    baseHp: 55,
		    baseAttack: 70,
		    baseDefense: 50,
		    baseSpAttack: 35,
		    baseSpDefense: 50,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var goatStage2 = new Monster({
		    monsterId: 82,
		    name: "Goat",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "Willpower",
		    baseHp: 85,
		    baseAttack: 115,
		    baseDefense: 75,
		    baseSpAttack: 50,
		    baseSpDefense: 75,
		    baseSpeed: 70,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dragon = new Monster({
		    monsterId: 83,
		    name: "Dragon",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "Sorrow",
		    baseHp: 60,
		    baseAttack: 50,
		    baseDefense: 55,
		    baseSpAttack: 85,
		    baseSpDefense: 70,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dragonStage2 = new Monster({
		    monsterId: 84,
		    name: "Dragon",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "Sorrow",
		    baseHp: 95,
		    baseAttack: 70,
		    baseDefense: 90,
		    baseSpAttack: 130,
		    baseSpDefense: 105,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var carpenterBee = new Monster({
		    monsterId: 85,
		    name: "Carpenter Bee",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "",
		    baseHp: 70,
		    baseAttack: 75,
		    baseDefense: 70,
		    baseSpAttack: 70,
		    baseSpDefense: 75,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var carpenterBeeStage2 = new Monster({
		    monsterId: 86,
		    name: "Carpenter Bee",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "",
		    baseHp: 70,
		    baseAttack: 100,
		    baseDefense: 65,
		    baseSpAttack: 110,
		    baseSpDefense: 80,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var luestellar = new Monster({
		    monsterId: 87,
		    name: "Luestellar",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 115,
		    baseAttack: 115,
		    baseDefense: 85,
		    baseSpAttack: 145,
		    baseSpDefense: 70,
		    baseSpeed: 135,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var prostellar = new Monster({
		    monsterId: 88,
		    name: "Prostellar",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 100,
		    baseAttack: 100,
		    baseDefense: 100,
		    baseSpAttack: 100,
		    baseSpDefense: 100,
		    baseSpeed: 100,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var rodent = new Monster({
		    monsterId: 89,
		    name: "Rodent",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 40,
		    baseAttack: 60,
		    baseDefense: 35,
		    baseSpAttack: 40,
		    baseSpDefense: 40,
		    baseSpeed: 100,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Because of the invasion of other rat species, these mammals were forced to become nocturnal.",
		});
		
		var rodentStage2 = new Monster({
		    monsterId: 90,
		    name: "Rodent",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Envy",
		    baseHp: 60,
		    baseAttack: 95,
		    baseDefense: 60,
		    baseSpAttack: 55,
		    baseSpDefense: 65,
		    baseSpeed: 125,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		    description: "Driven to extinction, these animals gave into their primal emotion of envy. Instead of using this power for revenge, they guide their kin to food before other rats can find it.",
		});
		
		var sheep = new Monster({
		    monsterId: 91,
		    name: "Sheep",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 85,
		    baseAttack: 65,
		    baseDefense: 85,
		    baseSpAttack: 65,
		    baseSpDefense: 90,
		    baseSpeed: 65,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var mockingBird = new Monster({
		    monsterId: 92,
		    name: "Mocking Bird",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Joy",
		    baseHp: 65,
		    baseAttack: 60,
		    baseDefense: 60,
		    baseSpAttack: 85,
		    baseSpDefense: 70,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var porocoro = new Monster({
		    monsterId: 93,
		    name: "Porocoro",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Sorrow",
		    baseHp: 60,
		    baseAttack: 50,
		    baseDefense: 50,
		    baseSpAttack: 95,
		    baseSpDefense: 75,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var lolocolo = new Monster({
		    monsterId: 94,
		    name: "Lolocolo",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Love",
		    baseHp: 60,
		    baseAttack: 50,
		    baseDefense: 50,
		    baseSpAttack: 75,
		    baseSpDefense: 95,
		    baseSpeed: 75,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var amlagmamite = new Monster({
		    monsterId: 95,
		    name: "Amlagmamite",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 50,
		    baseAttack: 95,
		    baseDefense: 90,
		    baseSpAttack: 145,
		    baseSpDefense: 90,
		    baseSpeed: 110,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var darattle = new Monster({
		    monsterId: 96,
		    name: "Darattle",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Rage",
		    baseHp: 50,
		    baseAttack: 65,
		    baseDefense: 55,
		    baseSpAttack: 35,
		    baseSpDefense: 50,
		    baseSpeed: 60,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var darumole = new Monster({
		    monsterId: 97,
		    name: "Darumole",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Rage",
		    baseHp: 75,
		    baseAttack: 115,
		    baseDefense: 80,
		    baseSpAttack: 50,
		    baseSpDefense: 70,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var clock = new Monster({
		    monsterId: 98,
		    name: "Clock",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Sorrow",
		    baseHp: 57,
		    baseAttack: 24,
		    baseDefense: 83,
		    baseSpAttack: 24,
		    baseSpDefense: 77,
		    baseSpeed: 35,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dubadile = new Monster({
		    monsterId: 99,
		    name: "Dubadile",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "Sorrow",
		    baseHp: 67,
		    baseAttack: 69,
		    baseDefense: 116,
		    baseSpAttack: 79,
		    baseSpDefense: 116,
		    baseSpeed: 53,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var deloria = new Monster({
		    monsterId: 100,
		    name: "Deloria",
		    nickname: "",
		    shiny: false,
		    type1: "Willpower",
		    type2: "Rage",
		    baseHp: 100,
		    baseAttack: 75,
		    baseDefense: 120,
		    baseSpAttack: 60,
		    baseSpDefense: 115,
		    baseSpeed: 80,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dmegra = new Monster({
		    monsterId: 101,
		    name: "D'megra",
		    nickname: "",
		    shiny: false,
		    type1: "Sorrow",
		    type2: "Rage",
		    baseHp: 70,
		    baseAttack: 50,
		    baseDefense: 65,
		    baseSpAttack: 135,
		    baseSpDefense: 80,
		    baseSpeed: 150,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var dnavi = new Monster({
		    monsterId: 102,
		    name: "D'navi",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "Rage",
		    baseHp: 90,
		    baseAttack: 105,
		    baseDefense: 75,
		    baseSpAttack: 105,
		    baseSpDefense: 75,
		    baseSpeed: 100,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		
		var wukong = new Monster({
		    monsterId: 103,
		    name: "Wukong",
		    nickname: "",
		    shiny: false,
		    type1: "Spectrum",
		    type2: "",
		    baseHp: 85,
		    baseAttack: 95,
		    baseDefense: 80,
		    baseSpAttack: 75,
		    baseSpDefense: 80,
		    baseSpeed: 100,
		    level: 1,
		    experience: 0,
		    experienceCap: 0,
		    baseExpYield: 64,
		    growthRate: "MEDIUM_SLOW",
		    gender: "",
		    genderRate: 50,
		    nature: "",
		    wild: true,
		    human: false,
		    heldItem: null,
		    storedItem: null,
		});
		// ==================================================
		// MONSTER EGGS
		// ==================================================
		
		// ------------------------------------------
		// THREE-STAGE / BASE STAGES
		// ------------------------------------------
		
		var terradonEgg = new Egg({
		    eggId: 1,
		    species: terradon,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var sluggityEgg = new Egg({
		    eggId: 2,
		    species: sluggity,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var starnEgg = new Egg({
		    eggId: 3,
		    species: starn,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		
		// ------------------------------------------
		// TWO-STAGE / BASE STAGES
		// ------------------------------------------
		
		var terratortleEgg = new Egg({
		    eggId: 4,
		    species: terratortle,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var spiderEgg = new Egg({
		    eggId: 5,
		    species: spider,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var batEgg = new Egg({
		    eggId: 6,
		    species: bat,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var galapaPenguinEgg = new Egg({
		    eggId: 7,
		    species: galapaPenguin,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dolphinEgg = new Egg({
		    eggId: 8,
		    species: dolphin,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var sallyLightfootCrabEgg = new Egg({
		    eggId: 9,
		    species: sallyLightfootCrab,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var boarEgg = new Egg({
		    eggId: 10,
		    species: boar,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var seaLionEgg = new Egg({
		    eggId: 11,
		    species: seaLion,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var rabbitEgg = new Egg({
		    eggId: 12,
		    species: rabbit,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var flamingoEgg = new Egg({
		    eggId: 13,
		    species: flamingo,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var lavaGullEgg = new Egg({
		    eggId: 14,
		    species: lavaGull,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var kingAngelFishEgg = new Egg({
		    eggId: 15,
		    species: kingAngelFish,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var hermitCrabEgg = new Egg({
		    eggId: 16,
		    species: hermitCrab,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var boxJellyfishEgg = new Egg({
		    eggId: 17,
		    species: boxJellyfish,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var goatEgg = new Egg({
		    eggId: 18,
		    species: goat,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dragonEgg = new Egg({
		    eggId: 19,
		    species: dragon,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var carpenterBeeEgg = new Egg({
		    eggId: 20,
		    species: carpenterBee,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var rodentEgg = new Egg({
		    eggId: 21,
		    species: rodent,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		
		// ------------------------------------------
		// ONE-STAGE MONSTERS
		// ------------------------------------------
		
		var vultureEgg = new Egg({
		    eggId: 22,
		    species: vulture,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var jackInTheBoxEgg = new Egg({
		    eggId: 23,
		    species: jackInTheBox,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var rainbowFishEgg = new Egg({
		    eggId: 24,
		    species: rainbowFish,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var babySwanEgg = new Egg({
		    eggId: 25,
		    species: babySwan,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var greatEgretEgg = new Egg({
		    eggId: 26,
		    species: greatEgret,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var clamEgg = new Egg({
		    eggId: 27,
		    species: clam,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var wesperEgg = new Egg({
		    eggId: 28,
		    species: wesper,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var esllowEgg = new Egg({
		    eggId: 29,
		    species: esllow,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var bullEgg = new Egg({
		    eggId: 30,
		    species: bull,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var bombardantEgg = new Egg({
		    eggId: 31,
		    species: bombardant,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var antQueenEgg = new Egg({
		    eggId: 32,
		    species: antQueen,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var whaleSharkEgg = new Egg({
		    eggId: 33,
		    species: whaleShark,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var frigatebirdEgg = new Egg({
		    eggId: 34,
		    species: frigatebird,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var larvightEgg = new Egg({
		    eggId: 35,
		    species: larvight,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var samuraiBugEgg = new Egg({
		    eggId: 36,
		    species: samuraiBug,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var hidereflyEgg = new Egg({
		    eggId: 37,
		    species: hiderefly,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var babyBearEgg = new Egg({
		    eggId: 38,
		    species: babyBear,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var honeyBearEgg = new Egg({
		    eggId: 39,
		    species: honeyBear,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var finianEgg = new Egg({
		    eggId: 40,
		    species: finian,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var frovorEgg = new Egg({
		    eggId: 41,
		    species: frovor,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var drayosEgg = new Egg({
		    eggId: 42,
		    species: drayos,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dranoshiEgg = new Egg({
		    eggId: 43,
		    species: dranoshi,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dogCollieEgg = new Egg({
		    eggId: 44,
		    species: dogCollie,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var elephantEgg = new Egg({
		    eggId: 45,
		    species: elephant,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var flowerEgg = new Egg({
		    eggId: 46,
		    species: flower,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var abysmalEgg = new Egg({
		    eggId: 47,
		    species: abysmal,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var abyssreignEgg = new Egg({
		    eggId: 48,
		    species: abyssreign,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var redPoppiesEgg = new Egg({
		    eggId: 49,
		    species: redPoppies,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var snakeEgg = new Egg({
		    eggId: 50,
		    species: snake,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var leviathanEgg = new Egg({
		    eggId: 51,
		    species: leviathan,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var racoonBurglarEgg = new Egg({
		    eggId: 52,
		    species: racoonBurglar,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var felisCatusEgg = new Egg({
		    eggId: 53,
		    species: felisCatus,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var lavaHeronsEgg = new Egg({
		    eggId: 54,
		    species: lavaHerons,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var shieldEgg = new Egg({
		    eggId: 55,
		    species: shield,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var luestellarEgg = new Egg({
		    eggId: 56,
		    species: luestellar,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var prostellarEgg = new Egg({
		    eggId: 57,
		    species: prostellar,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var sheepEgg = new Egg({
		    eggId: 58,
		    species: sheep,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var mockingBirdEgg = new Egg({
		    eggId: 59,
		    species: mockingBird,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var porocoroEgg = new Egg({
		    eggId: 60,
		    species: porocoro,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var lolocoloEgg = new Egg({
		    eggId: 61,
		    species: lolocolo,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var amlagmamiteEgg = new Egg({
		    eggId: 62,
		    species: amlagmamite,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var darattleEgg = new Egg({
		    eggId: 63,
		    species: darattle,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var darumoleEgg = new Egg({
		    eggId: 64,
		    species: darumole,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var clockEgg = new Egg({
		    eggId: 65,
		    species: clock,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dubadileEgg = new Egg({
		    eggId: 66,
		    species: dubadile,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var deloriaEgg = new Egg({
		    eggId: 67,
		    species: deloria,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dmegraEgg = new Egg({
		    eggId: 68,
		    species: dmegra,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var dnaviEgg = new Egg({
		    eggId: 69,
		    species: dnavi,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		var wukongEgg = new Egg({
		    eggId: 70,
		    species: wukong,
		    eggLevel: getEggLevel(),
		    shiny: false
		});
		
		// ==================================================
		// SHARED WITH OTHER FRAMES (window.*)
		// ==================================================
		
		// Every egg species, in the same order as the eggId numbers above.
		// The eggs menu reads this list.
		window.EGG_SPECIES = [
		    terradon, sluggity, starn,
		    terratortle, spider, bat, galapaPenguin, dolphin, sallyLightfootCrab,
		    boar, seaLion, rabbit, flamingo, lavaGull, kingAngelFish, hermitCrab,
		    boxJellyfish, goat, dragon, carpenterBee, rodent,
		    vulture, jackInTheBox, rainbowFish, babySwan, greatEgret, clam, wesper,
		    esllow, bull, bombardant, antQueen, whaleShark, frigatebird, larvight,
		    samuraiBug, hiderefly, babyBear, honeyBear, finian, frovor, drayos,
		    dranoshi, dogCollie, elephant, flower, abysmal, abyssreign, redPoppies,
		    snake, leviathan, racoonBurglar, felisCatus, lavaHerons, shield,
		    luestellar, prostellar, sheep, mockingBird, porocoro, lolocolo,
		    amlagmamite, darattle, darumole, clock, dubadile, deloria, dmegra,
		    dnavi, wukong
		];
		
		// Look up a species by the monsterId stored in the save
		window.EGG_SPECIES_BY_ID = {};
		
		window.EGG_SPECIES.forEach(function (s) {
		    window.EGG_SPECIES_BY_ID[s.monsterId] = s;
		});
		
		// Turns a saved egg (a monsterId) into a real Egg object.
		// Use this from any frame: createEggFromId(4) gives a Terratortle egg.
		window.createEggFromId = function (monsterId) {
		
		    var species = window.EGG_SPECIES_BY_ID[monsterId];
		
		    if (!species) {
		        console.error("No egg species with monsterId", monsterId);
		        return null;
		    }
		
		    return new Egg({
		        species: species,
		        eggLevel: getEggLevel()
		    });
		};
		// ==================================================
		// ADD STARN, TERRADON, AND SLUGGITY
		// Uses the original registered species.
		// Adds each monster to the player's save only once.
		// ==================================================
		
		function addStarterMonsters() {
		
		    // --------------------------------------------------
		    // GET THE ORIGINAL SPECIES
		    // --------------------------------------------------
		
		    var starn = Monster.BY_ID[22];
		    var terradon = Monster.BY_ID[1];
		    var sluggity = Monster.BY_ID[13];
		
		    // --------------------------------------------------
		    // VERIFY THAT ALL SPECIES EXIST
		    // --------------------------------------------------
		
		    if (!starn || !terradon || !sluggity) {
		
		        console.error(
		            "Starter monsters could not be added. " +
		            "One or more species are missing from Monster.BY_ID.",
		            {
		                Starn: !!starn,
		                Terradon: !!terradon,
		                Sluggity: !!sluggity
		            }
		        );
		
		        return;
		    }
		
		    var starters = [
		        starn,
		        terradon,
		        sluggity
		    ];
		
		    // --------------------------------------------------
		    // WAIT FOR THE PLAYER'S SAVE TO LOAD
		    // --------------------------------------------------
		
		    SaveSystem.load()
		        .then(function (data) {
		
		            if (
		                !SaveSystem.isLoaded ||
		                !SaveSystem.isLoaded()
		            ) {
		                console.error(
		                    "Cannot add starter monsters: " +
		                    "the player save has not loaded."
		                );
		
		                return;
		            }
		
		            // --------------------------------------------------
		            // ADD EACH MONSTER IF IT IS NOT ALREADY OWNED
		            // --------------------------------------------------
		
		            starters.forEach(function (species) {
		
		                var owned = SaveSystem.getAllMonsters() || [];
		
		                // Check by species ID, not monster name.
		                var alreadyOwned = owned.some(function (record) {
		
		                    return (
		                        Number(record.monsterId) ===
		                        Number(species.monsterId)
		                    );
		
		                });
		
		                if (alreadyOwned) {
		
		                    console.log(
		                        species.name +
		                        " is already in the player's save."
		                    );
		
		                    return;
		                }
		
		                // Add the existing species to the player's save.
		                var uid = SaveSystem.addMonster(
		                    species.monsterId,
		                    {
		                        level: 1,
		                        experience: 0,
		                        shiny: false
		                    }
		                );
		
		                if (!uid) {
		
		                    console.error(
		                        "Failed to add " + species.name,
		                        {
		                            monsterId: species.monsterId,
		                            registeredSpecies:
		                                Monster.BY_ID[species.monsterId]
		                        }
		                    );
		
		                    return;
		                }
		
		                console.log(
		                    species.name +
		                    " added successfully. UID:",
		                    uid
		                );
		
		            });
		
		            // --------------------------------------------------
		            // VERIFY THE FINAL SAVE CONTENTS
		            // --------------------------------------------------
		
		            console.log(
		                "Final saved monster records:",
		                SaveSystem.getAllMonsters()
		            );
		
		        })
		        .catch(function (error) {
		
		            console.error(
		                "Failed to load the player's save:",
		                error
		            );
		
		        });
		}
		
		// --------------------------------------------------
		// RUN THE FUNCTION
		// --------------------------------------------------
		
		addStarterMonsters();
	}
	this.frame_1 = function() {
		var self = this;
		
		this.stop();
		
		
		// --------------------------------------------------
		// EGG SETTINGS
		// --------------------------------------------------
		
		var EGG_RAISE = 0.15;
		
		var EGG_COUNT = 5;
		
		var MONSTER_SLOTS_PER_EGG = 5;
		
		var W =
		    lib.properties.width;
		
		var H =
		    lib.properties.height;
		
		var portrait =
		    H > W;
		
		
		// --------------------------------------------------
		// PLACING AN EGG IN A SLOT
		// --------------------------------------------------
		
		var EGG_MENU_LABEL = "eggs";
		
		
		if (!window.EggPlacement) {
		
		    window.EggPlacement = {
		
		        active: false,
		
		        slot: -1
		    };
		}
		
		
		window.EggPlacement.active = false;
		
		
		// --------------------------------------------------
		// EGG SWITCH ANIMATION
		// --------------------------------------------------
		
		var EGG_SLIDE_DISTANCE = 0.06;
		
		var EGG_SLIDE_OUT_TIME = 220;
		
		var EGG_SLIDE_IN_TIME = 320;
		
		var EGG_SLIDE_TOWARD_ARROW = true;
		
		
		// --------------------------------------------------
		// TAP NUMBER SETTINGS
		// --------------------------------------------------
		
		var TAP_NUM_SIZE = 30;
		
		var TAP_NUM_COLOR = "#E8F5FF";
		
		var TAP_NUM_GLOW = "#2496FF";
		
		var TAP_NUM_START =
		    W * 0.05;
		
		var TAP_NUM_TRAVEL =
		    W * 0.07;
		
		var TAP_NUM_TIME = 800;
		
		var TAP_NUM_MOBILE_SCALE = 2;
		
		
		// --------------------------------------------------
		// EGG
		// --------------------------------------------------
		
		var egg =
		    self.egg;
		
		
		// --------------------------------------------------
		// NESTED EGG SHELLS
		// --------------------------------------------------
		
		var eggShells =
		    egg.egg_shells;
		
		
		// --------------------------------------------------
		// TAP NUMBER LAYER
		// --------------------------------------------------
		
		var tapNumbers =
		    new createjs.Container();
		
		self.addChild(
		    tapNumbers
		);
		
		
		// --------------------------------------------------
		// CURRENT EGG INDEX
		// --------------------------------------------------
		
		var currentEggIndex =
		    (
		        window.EggPlacement.slot >= 0 &&
		        window.EggPlacement.slot < EGG_COUNT
		    )
		        ? window.EggPlacement.slot
		        : 0;
		
		
		// Use the saved slot once, so an old slot can't be picked again later
		window.EggPlacement.slot =
		    -1;
		
		
		// ==================================================
		// GLOBAL ACTIVE EGG INDEX
		// ==================================================
		
		window.CurrentEggIndex =
		    currentEggIndex;
		
		
		// --------------------------------------------------
		// GLOBAL MONSTER SLOT INFORMATION
		// --------------------------------------------------
		
		window.MonsterSlotsPerEgg =
		    MONSTER_SLOTS_PER_EGG;
		
		
		// ==================================================
		// SLOT HELPERS
		// ==================================================
		
		function slotIsEmpty(slot) {
		
		    if (
		        !window.SaveSystem ||
		        !SaveSystem.isLoaded()
		    ) {
		
		        return false;
		    }
		
		
		    var slots =
		        SaveSystem.get(
		            "slots"
		        );
		
		
		    return (
		        Array.isArray(slots) &&
		        !Number(
		            slots[slot]
		        )
		    );
		}
		
		
		// ==================================================
		// SHARED EGG LOCK CHECK
		// ==================================================
		
		function eggIsLocked(index) {
		
		    if (
		        !window.EggLockStatus ||
		        !Array.isArray(
		            window.EggLockStatus.locked
		        )
		    ) {
		
		        return true;
		    }
		
		
		    return (
		        window.EggLockStatus.locked[index] === true
		    );
		}
		
		
		// ==================================================
		// OPEN EGG MENU
		// ==================================================
		
		function openEggMenuToPlace(slot) {
		
		    window.EggPlacement.active =
		        true;
		
		    window.EggPlacement.slot =
		        slot;
		
		
		    if (
		        self.cleanupEggNavigation
		    ) {
		
		        self.cleanupEggNavigation();
		    }
		
		
		    self.gotoAndStop(
		        EGG_MENU_LABEL
		    );
		}
		
		
		// ==================================================
		// FLYING TAP NUMBER
		// ==================================================
		
		function spawnTapNumber(secs) {
		
		    var text =
		        new createjs.Text(
		
		            "-" +
		            secs +
		            "s",
		
		            "bold " +
		            TAP_NUM_SIZE *
		            (
		                portrait
		                    ? TAP_NUM_MOBILE_SCALE
		                    : 1
		            ) +
		            "px 'DM Sans'",
		
		            TAP_NUM_COLOR
		        );
		
		
		    text.textAlign =
		        "center";
		
		
		    text.textBaseline =
		        "middle";
		
		
		    text.mouseEnabled =
		        false;
		
		
		    text.shadow =
		        new createjs.Shadow(
		
		            TAP_NUM_GLOW,
		
		            0,
		
		            0,
		
		            8
		        );
		
		
		    var angle =
		        Math.random() *
		        Math.PI *
		        2;
		
		
		    var travel =
		        TAP_NUM_TRAVEL *
		        (
		            0.7 +
		            Math.random() *
		            0.6
		        );
		
		
		    text.x =
		        egg.eggRestX +
		        Math.cos(angle) *
		        TAP_NUM_START;
		
		
		    text.y =
		        egg.y +
		        Math.sin(angle) *
		        TAP_NUM_START;
		
		
		    tapNumbers.addChild(
		        text
		    );
		
		
		    createjs.Tween.get(
		        text
		    )
		        .to(
		            {
		
		                x:
		                    text.x +
		                    Math.cos(angle) *
		                    travel,
		
		                y:
		                    text.y +
		                    Math.sin(angle) *
		                    travel,
		
		                alpha:
		                    0
		
		            },
		
		            TAP_NUM_TIME,
		
		            createjs.Ease.cubicOut
		        )
		        .call(
		            function () {
		
		                tapNumbers.removeChild(
		                    text
		                );
		            }
		        );
		}
		
		
		// ==================================================
		// FIND EGG SPECIES
		// ==================================================
		
		function getEggSpecies(monsterId) {
		
		    var speciesList =
		        window.EGG_SPECIES;
		
		
		    if (
		        !Array.isArray(
		            speciesList
		        )
		    ) {
		
		        return null;
		    }
		
		
		    var wantedId =
		        Number(
		            monsterId
		        );
		
		
		    for (
		        var i = 0;
		        i < speciesList.length;
		        i++
		    ) {
		
		        var candidate =
		            speciesList[i];
		
		
		        if (
		            candidate &&
		            Number(
		                candidate.monsterId
		            ) === wantedId
		        ) {
		
		            return candidate;
		        }
		    }
		
		
		    return null;
		}
		
		
		// ==================================================
		// FIND EGG FRAME LABEL
		// ==================================================
		
		function findEggFrameLabel(
		    shells,
		    frameName
		) {
		
		    var timelineLabels =
		        [];
		
		
		    if (
		        shells.timeline &&
		        typeof shells.timeline.getLabels ===
		            "function"
		    ) {
		
		        timelineLabels =
		            shells.timeline.getLabels();
		    }
		
		
		    var wanted =
		        String(
		            frameName || ""
		        )
		            .trim()
		            .toLowerCase();
		
		
		    for (
		        var i = 0;
		        i < timelineLabels.length;
		        i++
		    ) {
		
		        var label =
		            timelineLabels[i];
		
		
		        if (
		            !label
		        ) {
		
		            continue;
		        }
		
		
		        var labelName =
		            String(
		                label.label || ""
		            )
		                .trim()
		                .toLowerCase();
		
		
		        if (
		            labelName === wanted
		        ) {
		
		            return label;
		        }
		    }
		
		
		    return null;
		}
		
		
		// ==================================================
		// UPDATE EGG ARTWORK
		// ==================================================
		
		function updateEggFrame() {
		
		    var shells =
		        egg.egg_shells;
		
		
		    if (
		        !shells
		    ) {
		
		        console.warn(
		            "egg_shells was not found inside egg."
		        );
		
		
		        egg.alpha =
		            1;
		
		
		        return false;
		    }
		
		
		    egg.alpha =
		        1;
		
		
		    shells.stop();
		
		
		    // --------------------------------------------------
		    // SAVE SYSTEM NOT READY
		    // --------------------------------------------------
		
		    if (
		        !window.SaveSystem ||
		        typeof SaveSystem.isLoaded !==
		            "function" ||
		        !SaveSystem.isLoaded()
		    ) {
		
		        return false;
		    }
		
		
		    // --------------------------------------------------
		    // GET SAVED EGG SLOTS
		    // --------------------------------------------------
		
		    var slots =
		        SaveSystem.get(
		            "slots"
		        );
		
		
		    if (
		        !Array.isArray(slots)
		    ) {
		
		        return false;
		    }
		
		
		    // --------------------------------------------------
		    // IMPORTANT DEBUG INFORMATION
		    // --------------------------------------------------
		
		    console.log(
		        "EGG SLOTS:",
		        JSON.stringify(
		            slots
		        )
		    );
		
		
		    var monsterId =
		        Number(
		            slots[currentEggIndex]
		        );
		
		
		    console.log(
		        "Egg",
		        currentEggIndex + 1,
		        "saved monsterId:",
		        monsterId
		    );
		
		
		    // --------------------------------------------------
		    // EMPTY SLOT
		    // --------------------------------------------------
		
		    if (
		        !monsterId
		    ) {
		
		        shells.gotoAndStop(
		            1
		        );
		
		        shells.stop();
		
		        egg.alpha =
		            1;
		
		
		        console.log(
		            "Egg",
		            currentEggIndex + 1,
		            "is empty."
		        );
		
		
		        return true;
		    }
		
		
		    // --------------------------------------------------
		    // FIND SPECIES
		    // --------------------------------------------------
		
		    var species =
		        getEggSpecies(
		            monsterId
		        );
		
		
		    if (
		        !species
		    ) {
		
		        console.error(
		            "EGG DATA ERROR:",
		            "No EGG_SPECIES entry for saved monsterId",
		            monsterId,
		            "in egg slot",
		            currentEggIndex + 1
		        );
		
		
		        shells.gotoAndStop(
		            1
		        );
		
		        shells.stop();
		
		        egg.alpha =
		            1;
		
		
		        return true;
		    }
		
		
		    var frameName =
		        String(
		            species.name || ""
		        )
		            .trim();
		
		
		    console.log(
		        "Egg",
		        currentEggIndex + 1,
		        "ID",
		        monsterId,
		        "maps to",
		        frameName
		    );
		
		
		    if (
		        frameName === ""
		    ) {
		
		        shells.gotoAndStop(
		            1
		        );
		
		        shells.stop();
		
		        egg.alpha =
		            1;
		
		
		        return true;
		    }
		
		
		    // --------------------------------------------------
		    // FIND ACTUAL ANIMATE LABEL
		    // --------------------------------------------------
		
		    var matchingLabel =
		        findEggFrameLabel(
		            shells,
		            frameName
		        );
		
		
		    if (
		        !matchingLabel
		    ) {
		
		        console.error(
		            "Could not find egg frame label:",
		            frameName,
		            "| saved monsterId:",
		            monsterId,
		            "| egg slot:",
		            currentEggIndex + 1
		        );
		
		
		        shells.gotoAndStop(
		            1
		        );
		
		        shells.stop();
		
		        egg.alpha =
		            1;
		
		
		        return true;
		    }
		
		
		    // --------------------------------------------------
		    // GO TO CORRECT EGG
		    // --------------------------------------------------
		
		    shells.stop();
		
		
		    shells.gotoAndStop(
		        matchingLabel.position
		    );
		
		
		    shells.stop();
		
		
		    egg.alpha =
		        1;
		
		
		    console.log(
		        "Egg frame loaded:",
		        "Egg",
		        currentEggIndex + 1,
		        "| monsterId:",
		        monsterId,
		        "| frame:",
		        frameName,
		        "| position:",
		        matchingLabel.position
		    );
		
		
		    return true;
		}
		
		
		// ==================================================
		// SAVE SYSTEM SLOT CHANGE LISTENER
		// ==================================================
		//
		// This is important.
		//
		// When placeEgg() changes slots, or hatchEgg() clears
		// a slot, the egg artwork updates immediately.
		//
		
		function registerEggSlotListener() {
		
		    if (
		        !window.SaveSystem ||
		        typeof SaveSystem.onChange !==
		            "function"
		    ) {
		
		        return;
		    }
		
		
		    SaveSystem.onChange(
		        "slots",
		        function (
		            key,
		            slots
		        ) {
		
		            if (
		                !slots ||
		                !Array.isArray(slots)
		            ) {
		
		                return;
		            }
		
		
		            console.log(
		                "Egg slot data changed:",
		                JSON.stringify(
		                    slots
		                )
		            );
		
		
		            updateEggFrame();
		        }
		    );
		}
		
		
		// ==================================================
		// WAIT FOR SAVE + EGG SPECIES
		// ==================================================
		
		var eggFrameWaitActive =
		    true;
		
		var eggFrameWaitTicks =
		    0;
		
		var eggFrameWaitMaxTicks =
		    300;
		
		
		function waitForInitialEggFrame() {
		
		    if (
		        !eggFrameWaitActive
		    ) {
		
		        return;
		    }
		
		
		    if (
		        !self.parent
		    ) {
		
		        return;
		    }
		
		
		    eggFrameWaitTicks++;
		
		
		    var updated =
		        updateEggFrame();
		
		
		    if (
		        updated === true
		    ) {
		
		        eggFrameWaitActive =
		            false;
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            waitForInitialEggFrame
		        );
		
		
		        return;
		    }
		
		
		    if (
		        eggFrameWaitTicks >=
		        eggFrameWaitMaxTicks
		    ) {
		
		        eggFrameWaitActive =
		            false;
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            waitForInitialEggFrame
		        );
		
		
		        console.warn(
		            "Timed out waiting for saved egg data."
		        );
		    }
		}
		
		
		createjs.Ticker.addEventListener(
		    "tick",
		    waitForInitialEggFrame
		);
		
		
		// ==================================================
		// EGG FLOATING
		// ==================================================
		
		function setupEgg(egg) {
		
		    if (
		        egg.baseY ===
		        undefined
		    ) {
		
		        egg.baseY =
		            egg.y;
		    }
		
		
		    egg.y =
		        egg.baseY -
		        H *
		        EGG_RAISE;
		
		
		    egg.eggRestY =
		        egg.y;
		
		
		    egg.eggRestX =
		        egg.x;
		
		
		    egg.floatTime =
		        Math.random() *
		        Math.PI *
		        2;
		
		
		    egg.originalScaleX =
		        egg.scaleX;
		
		    egg.originalScaleY =
		        egg.scaleY;
		
		
		    egg.eggSwitching =
		        false;
		
		    egg.eggShaking =
		        false;
		
		
		    egg.cursor =
		        "pointer";
		
		
		    // --------------------------------------------------
		    // HOVER IN
		    // --------------------------------------------------
		
		    egg.on(
		        "rollover",
		        function () {
		
		            if (
		                egg.eggShaking ||
		                egg.eggSwitching
		            ) {
		
		                return;
		            }
		
		
		            createjs.Tween.removeTweens(
		                egg
		            );
		
		
		            createjs.Tween.get(
		                egg
		            )
		                .to(
		                    {
		
		                        scaleX:
		                            egg.originalScaleX *
		                            0.97,
		
		                        scaleY:
		                            egg.originalScaleY *
		                            0.97
		
		                    },
		
		                    100,
		
		                    createjs.Ease.quadOut
		                );
		        }
		    );
		
		
		    // --------------------------------------------------
		    // HOVER OUT
		    // --------------------------------------------------
		
		    egg.on(
		        "rollout",
		        function () {
		
		            if (
		                egg.eggShaking ||
		                egg.eggSwitching
		            ) {
		
		                return;
		            }
		
		
		            createjs.Tween.removeTweens(
		                egg
		            );
		
		
		            createjs.Tween.get(
		                egg
		            )
		                .to(
		                    {
		
		                        scaleX:
		                            egg.originalScaleX,
		
		                        scaleY:
		                            egg.originalScaleY
		
		                    },
		
		                    100,
		
		                    createjs.Ease.quadOut
		                );
		        }
		    );
		
		
		    // --------------------------------------------------
		    // EGG CLICK
		    // --------------------------------------------------
		
		    egg.on(
		        "click",
		        function () {
		
		            if (
		                egg.eggSwitching
		            ) {
		
		                return;
		            }
		
		
		            var locked =
		                eggIsLocked(
		                    currentEggIndex
		                );
		
		
		            // --------------------------------------------------
		            // UNLOCKED + EMPTY
		            // --------------------------------------------------
		
		            if (
		                !locked &&
		                slotIsEmpty(
		                    currentEggIndex
		                )
		            ) {
		
		                openEggMenuToPlace(
		                    currentEggIndex
		                );
		
		                return;
		            }
		
		
		            // --------------------------------------------------
		            // EVERY CLICK: REDUCE TIMER
		            // --------------------------------------------------
		
		            if (
		                !locked &&
		                self.reduceEggTimer
		            ) {
		
		                var cut =
		                    self.reduceEggTimer(
		                        currentEggIndex
		                    );
		
		
		                if (
		                    cut > 0
		                ) {
		
		                    spawnTapNumber(
		                        cut
		                    );
		                }
		            }
		
		
		            // --------------------------------------------------
		            // ALREADY SHAKING
		            // --------------------------------------------------
		
		            if (
		                egg.eggShaking
		            ) {
		
		                return;
		            }
		
		
		            // --------------------------------------------------
		            // SHAKE
		            // --------------------------------------------------
		
		            egg.eggShaking =
		                true;
		
		
		            var shakeTime =
		                0;
		
		            var shakeDuration =
		                350;
		
		
		            var originalX =
		                egg.x;
		
		            var originalRotation =
		                egg.rotation;
		
		
		            var shakeAmount =
		                12 +
		                Math.random() *
		                8;
		
		
		            var rotationAmount =
		                5 +
		                Math.random() *
		                5;
		
		
		            var xDirection =
		                Math.random() < 0.5
		                    ? -1
		                    : 1;
		
		
		            var rotationDirection =
		                Math.random() < 0.5
		                    ? -1
		                    : 1;
		
		
		            function shakeEgg(evt) {
		
		                shakeTime +=
		                    evt.delta;
		
		
		                var progress =
		                    shakeTime /
		                    shakeDuration;
		
		
		                if (
		                    progress >= 1
		                ) {
		
		                    egg.x =
		                        originalX;
		
		                    egg.rotation =
		                        originalRotation;
		
		                    egg.eggShaking =
		                        false;
		
		
		                    createjs.Ticker.removeEventListener(
		                        "tick",
		                        shakeEgg
		                    );
		
		
		                    return;
		                }
		
		
		                var strength =
		                    1 -
		                    progress;
		
		
		                egg.x =
		                    originalX +
		                    Math.sin(
		                        progress *
		                        Math.PI *
		                        12
		                    ) *
		                    shakeAmount *
		                    strength *
		                    xDirection;
		
		
		                egg.rotation =
		                    originalRotation +
		                    Math.sin(
		                        progress *
		                        Math.PI *
		                        8
		                    ) *
		                    rotationAmount *
		                    strength *
		                    rotationDirection;
		            }
		
		
		            createjs.Ticker.addEventListener(
		                "tick",
		                shakeEgg
		            );
		        }
		    );
		}
		
		
		// --------------------------------------------------
		// SETUP EGG
		// --------------------------------------------------
		
		setupEgg(
		    egg
		);
		
		
		// --------------------------------------------------
		// INITIAL EGG FRAME
		// --------------------------------------------------
		
		updateEggFrame();
		
		
		// --------------------------------------------------
		// REGISTER SAVE LISTENER
		// --------------------------------------------------
		
		registerEggSlotListener();
		
		
		// --------------------------------------------------
		// SAVE SYSTEM LOAD
		// --------------------------------------------------
		
		if (
		    window.SaveSystem &&
		    typeof SaveSystem.isLoaded ===
		        "function" &&
		    !SaveSystem.isLoaded()
		) {
		
		    if (
		        typeof SaveSystem.load ===
		            "function"
		    ) {
		
		        try {
		
		            var saveLoadResult =
		                SaveSystem.load();
		
		
		            if (
		                saveLoadResult &&
		                typeof saveLoadResult.then ===
		                    "function"
		            ) {
		
		                saveLoadResult.then(
		                    function () {
		
		                        updateEggFrame();
		
		                    }
		                )
		                .catch(
		                    function (error) {
		
		                        console.warn(
		                            "SaveSystem load failed:",
		                            error
		                        );
		                    }
		                );
		            }
		
		        } catch (error) {
		
		            console.warn(
		                "Could not start SaveSystem load:",
		                error
		            );
		        }
		    }
		}
		
		
		// ==================================================
		// FLOATING UPDATE
		// ==================================================
		
		function floatEggs(evt) {
		
		    egg.floatTime +=
		        evt.delta /
		        1000;
		
		
		    egg.y =
		        egg.eggRestY +
		        Math.sin(
		            egg.floatTime *
		            1.5
		        ) *
		        15;
		}
		
		
		createjs.Ticker.addEventListener(
		    "tick",
		    floatEggs
		);
		
		
		// ==================================================
		// EGG NAVIGATION
		// ==================================================
		
		var eggNavigation =
		    new createjs.Container();
		
		self.addChild(
		    eggNavigation
		);
		
		
		// --------------------------------------------------
		// NAVIGATION SETTINGS
		// --------------------------------------------------
		
		var NAV_BUTTON_SIZE =
		    70;
		
		var NAV_BUTTON_WIDTH =
		    32;
		
		var NAV_BUTTON_RADIUS =
		    10;
		
		var NAV_BUTTON_ALPHA =
		    0.65;
		
		var NAV_OUTLINE_COLOR =
		    "#8FD8FF";
		
		var NAV_EGG_GAP =
		    230;
		
		var NAV_DISABLED_ALPHA =
		    0.3;
		
		var NAV_MOBILE_SCALE =
		    2;
		
		var NAV_SCREEN_MARGIN =
		    12;
		
		
		// --------------------------------------------------
		// SAVE ORIGINAL EGG POSITION
		// --------------------------------------------------
		
		var navEggX =
		    egg.eggRestX;
		
		var navEggY =
		    egg.eggRestY;
		
		
		// ==================================================
		// LEFT BUTTON
		// ==================================================
		
		var leftButton =
		    new createjs.Container();
		
		
		var leftBg =
		    new createjs.Shape();
		
		
		leftBg.graphics
		    .setStrokeStyle(2)
		    .beginStroke(
		        NAV_OUTLINE_COLOR
		    )
		    .beginFill(
		        "#123B5C"
		    )
		    .drawRoundRect(
		        -NAV_BUTTON_WIDTH / 2,
		        -NAV_BUTTON_SIZE / 2,
		        NAV_BUTTON_WIDTH,
		        NAV_BUTTON_SIZE,
		        NAV_BUTTON_RADIUS
		    );
		
		
		leftBg.alpha =
		    NAV_BUTTON_ALPHA;
		
		
		leftButton.addChild(
		    leftBg
		);
		
		
		// --------------------------------------------------
		// LEFT ARROW
		// --------------------------------------------------
		
		var leftArrow =
		    new createjs.Shape();
		
		
		leftArrow.graphics
		    .setStrokeStyle(2)
		    .beginStroke(
		        "#FFFFFF"
		    )
		    .moveTo(
		        5,
		        -10
		    )
		    .lineTo(
		        -5,
		        0
		    )
		    .lineTo(
		        5,
		        10
		    );
		
		
		leftButton.addChild(
		    leftArrow
		);
		
		
		leftButton.cursor =
		    "pointer";
		
		
		// ==================================================
		// RIGHT BUTTON
		// ==================================================
		
		var rightButton =
		    new createjs.Container();
		
		
		var rightBg =
		    new createjs.Shape();
		
		
		rightBg.graphics
		    .setStrokeStyle(2)
		    .beginStroke(
		        NAV_OUTLINE_COLOR
		    )
		    .beginFill(
		        "#123B5C"
		    )
		    .drawRoundRect(
		        -NAV_BUTTON_WIDTH / 2,
		        -NAV_BUTTON_SIZE / 2,
		        NAV_BUTTON_WIDTH,
		        NAV_BUTTON_SIZE,
		        NAV_BUTTON_RADIUS
		    );
		
		
		rightBg.alpha =
		    NAV_BUTTON_ALPHA;
		
		
		rightButton.addChild(
		    rightBg
		);
		
		
		// --------------------------------------------------
		// RIGHT ARROW
		// --------------------------------------------------
		
		var rightArrow =
		    new createjs.Shape();
		
		
		rightArrow.graphics
		    .setStrokeStyle(2)
		    .beginStroke(
		        "#FFFFFF"
		    )
		    .moveTo(
		        -5,
		        -10
		    )
		    .lineTo(
		        5,
		        0
		    )
		    .lineTo(
		        -5,
		        10
		    );
		
		
		rightButton.addChild(
		    rightArrow
		);
		
		
		rightButton.cursor =
		    "pointer";
		
		
		// --------------------------------------------------
		// ADD BUTTONS
		// --------------------------------------------------
		
		eggNavigation.addChild(
		    leftButton
		);
		
		eggNavigation.addChild(
		    rightButton
		);
		
		
		// --------------------------------------------------
		// SCALE + POSITION BUTTONS
		// --------------------------------------------------
		
		var navScale =
		    portrait
		        ? NAV_MOBILE_SCALE
		        : 1;
		
		
		leftButton.scaleX =
		    navScale;
		
		leftButton.scaleY =
		    navScale;
		
		
		rightButton.scaleX =
		    navScale;
		
		rightButton.scaleY =
		    navScale;
		
		
		var navHalfWidth =
		    (
		        NAV_BUTTON_WIDTH *
		        navScale
		    ) / 2;
		
		
		var navMaxGap =
		    Math.min(
		        navEggX,
		        W - navEggX
		    ) -
		    navHalfWidth -
		    NAV_SCREEN_MARGIN;
		
		
		var navGap =
		    Math.min(
		        NAV_EGG_GAP,
		        navMaxGap
		    );
		
		
		leftButton.x =
		    navEggX -
		    navGap;
		
		leftButton.y =
		    navEggY;
		
		
		rightButton.x =
		    navEggX +
		    navGap;
		
		rightButton.y =
		    navEggY;
		
		
		// ==================================================
		// NAVIGATION BUTTON STATE
		// ==================================================
		
		function updateNavButtons() {
		
		    var canGoLeft =
		        currentEggIndex > 0;
		
		
		    leftButton.alpha =
		        canGoLeft
		            ? 1
		            : NAV_DISABLED_ALPHA;
		
		
		    leftButton.cursor =
		        canGoLeft
		            ? "pointer"
		            : null;
		
		
		    leftBg.alpha =
		        NAV_BUTTON_ALPHA;
		}
		
		
		// ==================================================
		// EGG CHANGED
		// ==================================================
		
		function onEggChanged(
		    index,
		    direction
		) {
		
		    console.log(
		        "Showing egg",
		        index + 1,
		        "of",
		        EGG_COUNT
		    );
		
		
		    window.CurrentEggIndex =
		        currentEggIndex;
		
		
		    // --------------------------------------------------
		    // UPDATE EGG ART
		    // --------------------------------------------------
		
		    updateEggFrame();
		
		
		    // --------------------------------------------------
		    // TELL MONSTER CARDS
		    // --------------------------------------------------
		
		    if (
		        typeof window.dispatchEvent ===
		        "function"
		    ) {
		
		        window.dispatchEvent(
		            new CustomEvent(
		                "eggChanged",
		                {
		
		                    detail: {
		
		                        eggIndex:
		                            currentEggIndex,
		
		                        direction:
		                            direction
		                    }
		                }
		            )
		        );
		    }
		
		
		    // --------------------------------------------------
		    // SAME-SCRIPT FALLBACK
		    // --------------------------------------------------
		
		    if (
		        typeof self.updateAllCardMonsters ===
		        "function"
		    ) {
		
		        self.updateAllCardMonsters();
		    }
		
		
		    if (
		        typeof self.layoutCards ===
		        "function"
		    ) {
		
		        self.layoutCards();
		    }
		
		
		    if (
		        typeof self.replayCardsIntro ===
		        "function"
		    ) {
		
		        self.replayCardsIntro(
		            direction
		        );
		    }
		}
		
		
		// ==================================================
		// SWITCH EGG
		// ==================================================
		
		function switchEgg(
		    newIndex,
		    direction
		) {
		
		    if (
		        egg.eggSwitching
		    ) {
		
		        return;
		    }
		
		
		    if (
		        newIndex >= EGG_COUNT
		    ) {
		
		        newIndex =
		            0;
		    }
		
		
		    if (
		        newIndex < 0
		    ) {
		
		        return;
		    }
		
		
		    currentEggIndex =
		        newIndex;
		
		
		    window.CurrentEggIndex =
		        currentEggIndex;
		
		
		    updateNavButtons();
		
		
		    if (
		        self.setActiveDot
		    ) {
		
		        self.setActiveDot(
		            currentEggIndex
		        );
		    }
		
		
		    egg.eggSwitching =
		        true;
		
		
		    if (
		        self.fadeOutCards
		    ) {
		
		        self.fadeOutCards(
		            EGG_SLIDE_OUT_TIME
		        );
		    }
		
		
		    createjs.Tween.removeTweens(
		        egg
		    );
		
		
		    egg.scaleX =
		        egg.originalScaleX;
		
		    egg.scaleY =
		        egg.originalScaleY;
		
		
		    var distance =
		        lib.properties.width *
		        EGG_SLIDE_DISTANCE;
		
		
		    var exitDirection =
		        EGG_SLIDE_TOWARD_ARROW
		            ? direction
		            : -direction;
		
		
		    // --------------------------------------------------
		    // SLIDE OUT
		    // --------------------------------------------------
		
		    createjs.Tween.get(
		        egg
		    )
		        .to(
		            {
		
		                x:
		                    egg.eggRestX +
		                    exitDirection *
		                    distance,
		
		                alpha:
		                    0
		
		            },
		
		            EGG_SLIDE_OUT_TIME,
		
		            createjs.Ease.quadIn
		        )
		        .call(
		            function () {
		
		                // --------------------------------------------------
		                // CHANGE EGG ART
		                // --------------------------------------------------
		
		                onEggChanged(
		                    currentEggIndex,
		                    direction
		                );
		
		
		                // --------------------------------------------------
		                // MOVE TO OPPOSITE SIDE
		                // --------------------------------------------------
		
		                egg.x =
		                    egg.eggRestX -
		                    exitDirection *
		                    distance;
		
		
		                egg.alpha =
		                    0;
		
		
		                // --------------------------------------------------
		                // SLIDE IN
		                // --------------------------------------------------
		
		                createjs.Tween.get(
		                    egg
		                )
		                    .to(
		                        {
		
		                            x:
		                                egg.eggRestX,
		
		                            alpha:
		                                1
		
		                        },
		
		                        EGG_SLIDE_IN_TIME,
		
		                        createjs.Ease.quadOut
		                    )
		                    .call(
		                        function () {
		
		                            egg.alpha =
		                                1;
		
		                            egg.eggSwitching =
		                                false;
		                        }
		                    );
		            }
		        );
		}
		
		
		// ==================================================
		// LEFT BUTTON
		// ==================================================
		
		leftButton.on(
		    "click",
		    function () {
		
		        switchEgg(
		            currentEggIndex - 1,
		            -1
		        );
		    }
		);
		
		
		// ==================================================
		// RIGHT BUTTON
		// ==================================================
		
		rightButton.on(
		    "click",
		    function () {
		
		        switchEgg(
		            currentEggIndex + 1,
		            1
		        );
		    }
		);
		
		
		// ==================================================
		// LEFT BUTTON HOVER
		// ==================================================
		
		leftButton.on(
		    "rollover",
		    function () {
		
		        if (
		            currentEggIndex === 0
		        ) {
		
		            return;
		        }
		
		
		        leftBg.alpha =
		            0.85;
		    }
		);
		
		
		leftButton.on(
		    "rollout",
		    function () {
		
		        leftBg.alpha =
		            NAV_BUTTON_ALPHA;
		    }
		);
		
		
		// ==================================================
		// RIGHT BUTTON HOVER
		// ==================================================
		
		rightButton.on(
		    "rollover",
		    function () {
		
		        rightBg.alpha =
		            0.85;
		    }
		);
		
		
		rightButton.on(
		    "rollout",
		    function () {
		
		        rightBg.alpha =
		            NAV_BUTTON_ALPHA;
		    }
		);
		
		
		// ==================================================
		// CLEANUP
		// ==================================================
		
		self.cleanupEggNavigation =
		    function () {
		
		        eggFrameWaitActive =
		            false;
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            waitForInitialEggFrame
		        );
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            floatEggs
		        );
		
		
		        leftButton.removeAllEventListeners();
		
		        rightButton.removeAllEventListeners();
		
		        egg.removeAllEventListeners();
		
		
		        createjs.Tween.removeTweens(
		            egg
		        );
		
		        createjs.Tween.removeTweens(
		            leftButton
		        );
		
		        createjs.Tween.removeTweens(
		            rightButton
		        );
		
		
		        egg.x =
		            egg.eggRestX;
		
		        egg.y =
		            egg.eggRestY;
		
		        egg.alpha =
		            1;
		
		        egg.rotation =
		            0;
		
		        egg.scaleX =
		            egg.originalScaleX;
		
		        egg.scaleY =
		            egg.originalScaleY;
		
		        egg.eggShaking =
		            false;
		
		        egg.eggSwitching =
		            false;
		
		
		        if (
		            egg.egg_shells
		        ) {
		
		            egg.egg_shells.stop();
		        }
		
		
		        egg.stop();
		
		
		        eggNavigation.removeAllEventListeners();
		
		
		        self.removeChild(
		            eggNavigation
		        );
		
		
		        tapNumbers.removeAllChildren();
		
		
		        self.removeChild(
		            tapNumbers
		        );
		
		
		        self.cleanupEggNavigation =
		            null;
		    };
		
		
		// ==================================================
		// INITIAL STATE
		// ==================================================
		
		updateNavButtons();
		
		
		window.CurrentEggIndex =
		    currentEggIndex;
		
		
		if (
		    self.setActiveDot
		) {
		
		    self.setActiveDot(
		        currentEggIndex
		    );
		}
		//this is for the players username
		exportRoot.onUserChange = showName;
		
		// ---------- Clean up when leaving this screen ----------
		this.cleanup = function() {
		    exportRoot.onUserChange = null;
		    createjs.Ticker.removeEventListener("tick", floatEgg);
		    if (self.cleanupCards) self.cleanupCards();
		};
		var self = this;
		
		// If this script ran before, remove the old top bar and menu first
		if (self.topBar) {
		
		    self.removeChild(self.topBar);
		    self.removeChild(self.menuRoot);
		}
		
		
		// --------------------------------------------------
		// TOP BAR
		// --------------------------------------------------
		
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
		
		self.nameText.textAlign = "left";
		
		topBar.addChild(self.nameText);
		
		
		// --------------------------------------------------
		// PLAYER NAME
		// --------------------------------------------------
		
		function showName() {
		
		    var u = exportRoot.user;
		
		    self.nameText.text =
		        (u && u.username)
		            ? u.username
		            : "Player";
		}
		
		showName();
		
		// Runs when the website sends a new login state
		// (sign in, sign out, or a refreshed token)
		exportRoot.onUserChange = function () {
		
		    showName();
		
		    // Loads a different player's save if the player changed
		    if (window.SaveSystem) {
		        SaveSystem.load();
		        showCurrencies();
		    }
		};
		
		
		// --------------------------------------------------
		// STAR GEMS
		// --------------------------------------------------
		
		var gemContainer = new createjs.Container();
		
		var gemBg = new createjs.Shape();
		
		gemContainer.addChild(gemBg);
		
		
		// --------------------------------------------------
		// STAR GEM ICON
		// --------------------------------------------------
		
		var gemIcon = new lib.Stars();
		
		gemContainer.addChild(gemIcon);
		
		
		// --------------------------------------------------
		// GEM AMOUNT
		// --------------------------------------------------
		
		var gemAmount = new createjs.Text(
		    "0",
		    "bold 14px 'DM Sans'",
		    "#e8f5ff"
		);
		
		gemAmount.textAlign = "left";
		
		gemAmount.x = 22;
		gemAmount.y = -7;
		
		gemContainer.addChild(gemAmount);
		
		
		// --------------------------------------------------
		// STAR GEMS LABEL
		// --------------------------------------------------
		
		var gemLabel = new createjs.Text(
		    "STAR GEMS",
		    "bold 7px 'DM Sans'",
		    "#7199b7"
		);
		
		gemLabel.textAlign = "left";
		
		// Hide STAR GEMS text
		gemLabel.visible = false;
		
		gemLabel.x = 52;
		gemLabel.y = -5;
		
		gemContainer.addChild(gemLabel);
		
		topBar.addChild(gemContainer);
		
		
		// --------------------------------------------------
		// CRYST
		// --------------------------------------------------
		
		var crystContainer = new createjs.Container();
		
		var crystBg = new createjs.Shape();
		
		crystContainer.addChild(crystBg);
		
		
		// --------------------------------------------------
		// CRYST ICON
		// --------------------------------------------------
		
		var crystIcon = new lib.Cryst();
		
		crystContainer.addChild(crystIcon);
		
		
		// --------------------------------------------------
		// CRYST AMOUNT
		// --------------------------------------------------
		
		var crystAmount = new createjs.Text(
		    "0",
		    "bold 14px 'DM Sans'",
		    "#e8f5ff"
		);
		
		crystAmount.textAlign = "left";
		
		crystAmount.x = 22;
		crystAmount.y = -7;
		
		crystContainer.addChild(crystAmount);
		
		
		// --------------------------------------------------
		// CRYST LABEL
		// --------------------------------------------------
		
		var crystLabel = new createjs.Text(
		    "CRYST",
		    "bold 7px 'DM Sans'",
		    "#7199b7"
		);
		
		crystLabel.textAlign = "left";
		
		// Hide CRYST text
		crystLabel.visible = false;
		
		crystLabel.x = 52;
		crystLabel.y = -5;
		
		crystContainer.addChild(crystLabel);
		
		topBar.addChild(crystContainer);
		
		
		// --------------------------------------------------
		// MENU STATE
		// --------------------------------------------------
		
		// Height of the top bar (set by layoutTopBar)
		var topBarHeight = 0;
		
		// Is the dropdown menu open?
		var menuOpen = false;
		
		// Used to keep the menu button highlighted
		var menuBtnHovered = false;
		var menuBtnPressed = false;
		
		
		// --------------------------------------------------
		// SETTINGS / MENU BUTTON
		// --------------------------------------------------
		
		var settingsBtn = new createjs.Container();
		
		var menuBg = new createjs.Shape();
		
		settingsBtn.addChild(menuBg);
		
		var line1 = new createjs.Shape();
		var line2 = new createjs.Shape();
		var line3 = new createjs.Shape();
		
		settingsBtn.addChild(line1);
		settingsBtn.addChild(line2);
		settingsBtn.addChild(line3);
		
		
		// --------------------------------------------------
		// DRAW MENU BUTTON (BACKGROUND ONLY)
		// --------------------------------------------------
		
		function drawMenuButton(size, color) {
		
		    var radius = size * 0.22;
		
		    menuBg.graphics.clear();
		
		    menuBg.graphics
		        .setStrokeStyle(1)
		        .beginStroke(color)
		        .beginFill("#173b5d")
		        .drawRoundRect(
		            0,
		            0,
		            size,
		            size,
		            radius
		        );
		}
		
		
		// --------------------------------------------------
		// DRAW MENU BUTTON LINES
		// --------------------------------------------------
		
		// Each line is drawn around its own center, so it can
		// rotate into an X when the menu opens.
		
		function drawMenuLines(size) {
		
		    var halfLine = size * 0.22;
		
		    var allLines = [line1, line2, line3];
		
		    for (var k = 0; k < allLines.length; k++) {
		
		        allLines[k].graphics.clear()
		            .setStrokeStyle(1)
		            .beginStroke("#b9d8eb")
		            .moveTo(
		                -halfLine,
		                0
		            )
		            .lineTo(
		                halfLine,
		                0
		            );
		
		        allLines[k].x =
		            size / 2;
		    }
		
		
		    // Hamburger positions
		    line1.restY = size * 0.31;
		    line2.restY = size * 0.50;
		    line3.restY = size * 0.69;
		
		
		    // X positions: all three lines meet in the middle
		    line1.openY = size * 0.50;
		    line2.openY = size * 0.50;
		    line3.openY = size * 0.50;
		
		    applyMenuIconPose();
		}
		
		
		// --------------------------------------------------
		// MENU ICON POSE (NO ANIMATION)
		// --------------------------------------------------
		
		function applyMenuIconPose() {
		
		    line1.y = menuOpen ? line1.openY : line1.restY;
		    line1.rotation = menuOpen ? 45 : 0;
		
		    line3.y = menuOpen ? line3.openY : line3.restY;
		    line3.rotation = menuOpen ? -45 : 0;
		
		    line2.y = line2.restY;
		    line2.alpha = menuOpen ? 0 : 1;
		    line2.scaleX = menuOpen ? 0.2 : 1;
		}
		
		
		// --------------------------------------------------
		// MENU ICON ANIMATION (HAMBURGER <-> X)
		// --------------------------------------------------
		
		function animateMenuIcon() {
		
		    var time = 220;
		    var ease = createjs.Ease.quadOut;
		
		    // Top line: moves to the middle and tilts one way
		    createjs.Tween.get(line1, { override: true })
		        .to({
		            y: menuOpen ? line1.openY : line1.restY,
		            rotation: menuOpen ? 45 : 0
		        }, time, ease);
		
		    // Bottom line: moves to the middle and tilts the other way
		    createjs.Tween.get(line3, { override: true })
		        .to({
		            y: menuOpen ? line3.openY : line3.restY,
		            rotation: menuOpen ? -45 : 0
		        }, time, ease);
		
		    // Middle line: fades away
		    createjs.Tween.get(line2, { override: true })
		        .to({
		            alpha: menuOpen ? 0 : 1,
		            scaleX: menuOpen ? 0.2 : 1
		        }, time, ease);
		}
		
		
		// --------------------------------------------------
		// MENU BUTTON BORDER COLOR
		// --------------------------------------------------
		
		function refreshMenuButtonColor() {
		
		    var lit =
		        menuOpen ||
		        menuBtnHovered ||
		        menuBtnPressed;
		
		    drawMenuButton(
		        settingsBtn.buttonSize,
		        lit
		            ? "#8fd8ff"
		            : "#527896"
		    );
		}
		
		
		drawMenuButton(
		    36,
		    "#527896"
		);
		
		topBar.addChild(settingsBtn);
		
		settingsBtn.cursor = "pointer";
		
		settingsBtn.buttonSize = 36;
		
		settingsBtn.regX = 18;
		settingsBtn.regY = 18;
		
		drawMenuLines(36);
		
		
		// --------------------------------------------------
		// MENU BUTTON EVENTS
		// --------------------------------------------------
		
		settingsBtn.addEventListener(
		    "rollover",
		    function() {
		
		        menuBtnHovered = true;
		
		        refreshMenuButtonColor();
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "rollout",
		    function() {
		
		        menuBtnHovered = false;
		
		        refreshMenuButtonColor();
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "mousedown",
		    function() {
		
		        settingsBtn.scaleX = 0.88;
		        settingsBtn.scaleY = 0.88;
		
		        menuBtnPressed = true;
		
		        refreshMenuButtonColor();
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "pressup",
		    function() {
		
		        settingsBtn.scaleX = 1;
		        settingsBtn.scaleY = 1;
		
		        menuBtnPressed = false;
		
		        refreshMenuButtonColor();
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "click",
		    function() {
		
		        // Open the menu, or close it if it is already open
		        toggleMenu();
		    }
		);
		
		
		// --------------------------------------------------
		// FIT A CURRENCY ICON INSIDE ITS BOX
		// --------------------------------------------------
		
		// Places the icon using its real bounds, so it ends up
		// inside the box wherever its registration point is.
		//
		// icon = the icon symbol
		// size = width and height of the square the icon fits in
		// left = where that square starts, from the box's left edge
		//
		// The icon is scaled evenly (never stretched) and
		// centered vertically on the middle of the box.
		
		function fitCurrencyIcon(icon, size, left) {
		
		    var b =
		        icon.nominalBounds ||
		        icon.getBounds();
		
		    // Size unknown: leave the icon at its own size
		    if (!b || !b.width || !b.height) {
		
		        icon.x = left;
		        icon.y = -size / 2;
		
		        return;
		    }
		
		    var s =
		        Math.min(
		            size / b.width,
		            size / b.height
		        );
		
		    icon.scaleX = s;
		    icon.scaleY = s;
		
		    // Centered in its square, left to right
		    icon.x =
		        left +
		        (size - b.width * s) / 2 -
		        b.x * s;
		
		    // Centered on the middle of the box, top to bottom
		    icon.y =
		        -(b.y + b.height / 2) * s;
		}
		
		
		// --------------------------------------------------
		// RESPONSIVE TOP BAR LAYOUT
		// --------------------------------------------------
		
		function layoutTopBar() {
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		
		    var portrait = H > W;
		
		
		    // --------------------------------------------------
		    // RESPONSIVE SIZES
		    // --------------------------------------------------
		
		    var BAR_H;
		    var nameFontSize;
		    var gemFontSize;
		    var gemLabelFontSize;
		    var menuSize;
		
		
		    if (portrait) {
		
		        BAR_H = Math.max(
		            82,
		            H * 0.11
		        );
		
		        nameFontSize = Math.max(
		            32,
		            H * 0.043
		        );
		
		        gemFontSize = Math.max(
		            18,
		            H * 0.025
		        );
		
		        gemLabelFontSize = Math.max(
		            9,
		            H * 0.013
		        );
		
		        menuSize = Math.max(
		            44,
		            H * 0.060
		        );
		
		    } else {
		
		        BAR_H = Math.max(
		            66,
		            H * 0.09
		        );
		
		        nameFontSize = Math.max(
		            28,
		            H * 0.039
		        );
		
		        gemFontSize = Math.max(
		            14,
		            H * 0.019
		        );
		
		        gemLabelFontSize = Math.max(
		            7,
		            H * 0.010
		        );
		
		        menuSize = 36;
		    }
		
		
		    // Remember the bar height for the dropdown menu
		    topBarHeight = BAR_H;
		
		
		    // --------------------------------------------------
		    // BAR BACKGROUND
		    // --------------------------------------------------
		
		    barBg.graphics.clear();
		
		    barBg.graphics
		        .beginLinearGradientFill(
		            [
		                "#061A2D",
		                "#092642",
		                "#123B5C"
		            ],
		            [
		                0,
		                0.5,
		                1
		            ],
		            0,
		            0,
		            0,
		            BAR_H
		        )
		        .drawRect(
		            0,
		            0,
		            W,
		            BAR_H
		        );
		
		
		    // --------------------------------------------------
		    // BOTTOM DARK LINE
		    // --------------------------------------------------
		
		    barBg.graphics
		        .beginFill("#08233d")
		        .drawRect(
		            0,
		            BAR_H - 2,
		            W,
		            2
		        );
		
		
		    // --------------------------------------------------
		    // GRADIENT HIGHLIGHT LINE
		    // --------------------------------------------------
		
		    barBg.graphics
		        .beginLinearGradientFill(
		            [
		                "rgba(255, 255, 255, 0.45)",
		                "rgba(255, 255, 255, 0.66)",
		                "rgba(255, 255, 255, 0.45)"
		            ],
		            [
		                0,
		                0.15,
		                0.85
		            ],
		            0,
		            0,
		            W,
		            0
		        )
		        .drawRect(
		            0,
		            BAR_H - 1,
		            W,
		            1
		        );
		
		
		    // --------------------------------------------------
		    // FONT SIZES
		    // --------------------------------------------------
		
		    self.nameText.font =
		        nameFontSize +
		        "px 'Marcellus'";
		
		
		    gemAmount.font =
		        "bold " +
		        gemFontSize +
		        "px 'DM Sans'";
		
		
		    gemLabel.font =
		        "bold " +
		        gemLabelFontSize +
		        "px 'DM Sans'";
		
		
		    crystAmount.font =
		        "bold " +
		        gemFontSize +
		        "px 'DM Sans'";
		
		
		    crystLabel.font =
		        "bold " +
		        gemLabelFontSize +
		        "px 'DM Sans'";
		
		
		    // --------------------------------------------------
		    // PLAYER NAME
		    // --------------------------------------------------
		
		    self.nameText.x =
		        portrait
		            ? 24
		            : 32;
		
		    self.nameText.y =
		        portrait
		            ? (BAR_H - nameFontSize) / 2 - 2
		            : 22;
		
		
		    // --------------------------------------------------
		    // SETTINGS BUTTON
		    // --------------------------------------------------
		
		    settingsBtn.buttonSize = menuSize;
		
		    settingsBtn.regX =
		        menuSize / 2;
		
		    settingsBtn.regY =
		        menuSize / 2;
		
		    settingsBtn.scaleX = 1;
		    settingsBtn.scaleY = 1;
		
		
		    drawMenuLines(
		        menuSize
		    );
		
		    refreshMenuButtonColor();
		
		
		    settingsBtn.x =
		        W -
		        (
		            portrait
		                ? menuSize / 2 + 14
		                : 52
		        );
		
		
		    settingsBtn.y =
		        BAR_H / 2;
		
		
		    // --------------------------------------------------
		    // CURRENCY BOX SIZES
		    // --------------------------------------------------
		
		    var currencyPaddingLeft = 10;
		    var currencyPaddingRight = 10;
		
		    var currencyGap =
		        portrait
		            ? 8
		            : 10;
		
		
		    // ==================================================
		    // STAR GEMS ICON
		    // ==================================================
		
		    var gemIconSize =
		        portrait
		            ? gemFontSize * 1.25
		            : gemFontSize * 1.15;
		
		
		    fitCurrencyIcon(
		        gemIcon,
		        gemIconSize,
		        currencyPaddingLeft
		    );
		
		
		    // ==================================================
		    // STAR GEMS TEXT
		    // ==================================================
		
		    gemAmount.x =
		        gemIconSize +
		        currencyPaddingLeft +
		        6;
		
		
		    gemAmount.y =
		        portrait
		            ? -gemFontSize * 0.55
		            : -7;
		
		
		    gemLabel.x =
		        portrait
		            ? gemFontSize * 2.9 + 4
		            : 52 + 4;
		
		
		    gemLabel.y =
		        portrait
		            ? -gemFontSize * 0.35
		            : -5;
		
		
		    // ==================================================
		    // STAR GEMS BOX SIZE
		    // ==================================================
		
		    var gemBoxWidth =
		        gemIconSize +
		        currencyPaddingLeft +
		        6 +
		        gemAmount.getMeasuredWidth() +
		        currencyPaddingRight;
		
		
		    // Make Star Gems box smaller
		    gemBoxWidth = Math.max(
		        gemBoxWidth - 8,
		        60
		    );
		
		
		    var gemBoxHeight =
		        portrait
		            ? gemFontSize * 2.15
		            : 34;
		
		
		    // ==================================================
		    // STAR GEMS BOX
		    // ==================================================
		
		    gemBg.graphics.clear();
		
		    gemBg.graphics
		        .setStrokeStyle(1)
		        .beginStroke("#527896")
		        .beginFill("rgba(8, 35, 61, 0.85)")
		        .drawRoundRect(
		            0,
		            -gemBoxHeight / 2,
		            gemBoxWidth,
		            gemBoxHeight,
		            8
		        );
		
		
		    // ==================================================
		    // CRYST ICON
		    // ==================================================
		
		    var crystIconSize =
		        portrait
		            ? gemFontSize * 1.25
		            : gemFontSize * 1.15;
		
		
		    fitCurrencyIcon(
		        crystIcon,
		        crystIconSize,
		        currencyPaddingLeft
		    );
		
		
		    // ==================================================
		    // CRYST TEXT
		    // ==================================================
		
		    crystAmount.x =
		        crystIconSize +
		        currencyPaddingLeft +
		        6;
		
		
		    crystAmount.y =
		        portrait
		            ? -gemFontSize * 0.55
		            : -7;
		
		
		    crystLabel.x =
		        portrait
		            ? gemFontSize * 2.9 + 4
		            : 52 + 4;
		
		
		    crystLabel.y =
		        portrait
		            ? -gemFontSize * 0.35
		            : -5;
		
		
		    // ==================================================
		    // CRYST BOX SIZE
		    // ==================================================
		
		    var crystAmountWidth =
		        crystAmount.getMeasuredWidth();
		
		
		    var crystLabelWidth =
		        crystLabel.getMeasuredWidth();
		
		
		    var crystContentRight =
		        Math.max(
		            crystAmount.x +
		                crystAmountWidth,
		
		            crystLabel.x +
		                crystLabelWidth
		        );
		
		
		    var crystBoxWidth =
		        crystContentRight +
		        currencyPaddingRight;
		
		
		    var crystBoxHeight =
		        portrait
		            ? gemFontSize * 2.15
		            : 34;
		
		
		    // ==================================================
		    // CRYST BOX
		    // ==================================================
		
		    crystBg.graphics.clear();
		
		    crystBg.graphics
		        .setStrokeStyle(1)
		        .beginStroke("#527896")
		        .beginFill("rgba(8, 35, 61, 0.85)")
		        .drawRoundRect(
		            0,
		            -crystBoxHeight / 2,
		            crystBoxWidth,
		            crystBoxHeight,
		            8
		        );
		
		
		    // ==================================================
		    // POSITION CURRENCY BOXES
		    // ==================================================
		
		    var menuLeft =
		        settingsBtn.x -
		        menuSize / 2;
		
		
		    // --------------------------------------------------
		    // CRYST
		    // Immediately to the LEFT of the menu
		    // --------------------------------------------------
		
		    var menuGap =
		        portrait
		            ? 18
		            : 20;
		
		
		    crystContainer.x =
		        menuLeft -
		        menuGap -
		        crystBoxWidth;
		
		
		    crystContainer.y =
		        BAR_H / 2;
		
		
		    // --------------------------------------------------
		    // STAR GEMS
		    // Immediately to the LEFT of Cryst
		    // --------------------------------------------------
		
		    gemContainer.x =
		        crystContainer.x -
		        currencyGap -
		        gemBoxWidth;
		
		
		    gemContainer.y =
		        BAR_H / 2;
		
		
		    // --------------------------------------------------
		    // MOBILE ALIGNMENT
		    // --------------------------------------------------
		
		    if (portrait) {
		
		        // Keep both boxes perfectly centered vertically
		        gemContainer.y =
		            BAR_H / 2;
		
		        crystContainer.y =
		            BAR_H / 2;
		    }
		
		
		    // --------------------------------------------------
		    // HIDE OLD TIMER UI
		    // --------------------------------------------------
		
		    if (self.timerText) {
		
		        self.timerText.visible = false;
		    }
		
		
		    if (
		        self.settingsBtn &&
		        self.settingsBtn !== settingsBtn
		    ) {
		
		        self.settingsBtn.visible = false;
		    }
		
		
		    // --------------------------------------------------
		    // KEEP THE DROPDOWN MENU UNDER THE MENU BUTTON
		    // --------------------------------------------------
		
		    layoutMenu();
		}
		
		
		// --------------------------------------------------
		// DROPDOWN MENU
		// --------------------------------------------------
		
		// The options, in order from top to bottom
		
		var MENU_ITEMS = [
		    { id: "home",       label: "Home" },
		    { id: "egg",        label: "Egg" },
		    { id: "monsters",   label: "Monsters" },
		    { id: "expedition", label: "Expedition" },
		    { id: "summons",    label: "Summons" },
		    { id: "shop",       label: "Shop" },
		    { id: "import",     label: "Import" },
		    { id: "export",     label: "Export" },
		    { id: "settings",   label: "Settings" }
		];
		
		
		// Animation settings (milliseconds)
		
		var MENU_OPEN_TIME  = 180;
		var MENU_CLOSE_TIME = 140;
		
		// How far the panel slides while it fades in and out
		var MENU_SLIDE = 10;
		
		
		// Hover only exists with a mouse. On touch screens
		// the buttons glow while they are being pressed.
		
		var menuCanHover = !!(
		    window.matchMedia &&
		    window.matchMedia("(hover: hover)").matches
		);
		
		
		var menuButtons = [];
		
		var menuMetrics = {
		    itemW: 0,
		    itemH: 0,
		    itemRadius: 0
		};
		
		
		// --------------------------------------------------
		// MENU CONTAINERS
		// --------------------------------------------------
		
		// menuRoot holds everything and is brought to the front
		// every time the menu opens.
		
		var menuRoot = new createjs.Container();
		
		menuRoot.visible = false;
		
		self.addChild(menuRoot);
		
		
		// Invisible area under the top bar. Clicking it closes the menu.
		
		var menuCatcher = new createjs.Shape();
		
		menuRoot.addChild(menuCatcher);
		
		menuCatcher.addEventListener(
		    "click",
		    function () {
		
		        closeMenu();
		    }
		);
		
		
		// The rounded panel
		
		var menuPanel = new createjs.Container();
		
		menuPanel.alpha = 0;
		
		menuRoot.addChild(menuPanel);
		
		
		var menuPanelBg = new createjs.Shape();
		
		menuPanel.addChild(menuPanelBg);
		
		
		// --------------------------------------------------
		// DRAW ONE MENU BUTTON
		// --------------------------------------------------
		
		function drawMenuItem(item, lit) {
		
		    var m = menuMetrics;
		
		    item.bg.graphics.clear();
		
		    item.bg.graphics
		        .setStrokeStyle(
		            lit
		                ? 1.5
		                : 1
		        )
		        .beginStroke(
		            lit
		                ? "#8fd8ff"
		                : "rgba(82, 120, 150, 0.7)"
		        )
		        .beginFill(
		            lit
		                ? "#1d5381"
		                : "rgba(18, 59, 92, 0.75)"
		        )
		        .drawRoundRect(
		            0,
		            0,
		            m.itemW,
		            m.itemH,
		            m.itemRadius
		        );
		}
		
		
		// --------------------------------------------------
		// MENU BUTTON HIGHLIGHT (GLOW)
		// --------------------------------------------------
		
		function refreshItem(item) {
		
		    var lit =
		        item.hovered ||
		        item.pressed;
		
		    if (lit === item.lit) {
		        return;
		    }
		
		    item.lit = lit;
		
		    drawMenuItem(
		        item,
		        lit
		    );
		
		    item.label.color =
		        lit
		            ? "#ffffff"
		            : "#cfe6f5";
		
		
		    // Fade the light blue glow in and out
		    createjs.Tween.get(
		        item.glow,
		        { override: true }
		    )
		    .to(
		        {
		            alpha:
		                lit
		                    ? 1
		                    : 0
		        },
		        140,
		        createjs.Ease.quadOut
		    );
		
		
		    // Bring the lit button to the front so its glow
		    // shows over its neighbors
		    if (lit) {
		
		        menuPanel.addChild(item);
		    }
		}
		
		
		// --------------------------------------------------
		// CREATE MENU BUTTONS
		// --------------------------------------------------
		
		function createMenuButtons() {
		
		    // Needed for hover events
		    if (menuCanHover && self.stage) {
		
		        self.stage.enableMouseOver(20);
		    }
		
		
		    for (var i = 0; i < MENU_ITEMS.length; i++) {
		
		        var item = new createjs.Container();
		
		        item.itemId = MENU_ITEMS[i].id;
		
		        item.hovered = false;
		        item.pressed = false;
		        item.lit = false;
		
		
		        // Light blue glow (hidden until hovered)
		        var glow = new createjs.Shape();
		
		        glow.alpha = 0;
		        glow.mouseEnabled = false;
		
		
		        // Button background
		        var bg = new createjs.Shape();
		
		
		        // Button text
		        var label = new createjs.Text(
		            MENU_ITEMS[i].label,
		            "bold 15px 'DM Sans'",
		            "#cfe6f5"
		        );
		
		        label.textAlign = "left";
		        label.textBaseline = "middle";
		        label.mouseEnabled = false;
		
		
		        item.addChild(glow);
		        item.addChild(bg);
		        item.addChild(label);
		
		        item.glow = glow;
		        item.bg = bg;
		        item.label = label;
		
		        item.cursor = "pointer";
		
		
		        // ------------------------------------------
		        // EVENTS
		        // ------------------------------------------
		
		        item.on(
		            "click",
		            function (evt) {
		
		                onMenuItemClick(evt.currentTarget);
		            }
		        );
		
		
		        if (menuCanHover) {
		
		            item.on(
		                "rollover",
		                function (evt) {
		
		                    evt.currentTarget.hovered = true;
		
		                    refreshItem(evt.currentTarget);
		                }
		            );
		
		            item.on(
		                "rollout",
		                function (evt) {
		
		                    evt.currentTarget.hovered = false;
		
		                    refreshItem(evt.currentTarget);
		                }
		            );
		        }
		
		
		        item.on(
		            "mousedown",
		            function (evt) {
		
		                evt.currentTarget.pressed = true;
		
		                refreshItem(evt.currentTarget);
		            }
		        );
		
		        item.on(
		            "pressup",
		            function (evt) {
		
		                evt.currentTarget.pressed = false;
		
		                refreshItem(evt.currentTarget);
		            }
		        );
		
		
		        menuPanel.addChild(item);
		
		        menuButtons.push(item);
		    }
		}
		
		
		// --------------------------------------------------
		// LAYOUT MENU
		// --------------------------------------------------
		
		function layoutMenu() {
		
		    if (!menuButtons.length) {
		        return;
		    }
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		
		    var portrait = H > W;
		
		    var count = MENU_ITEMS.length;
		
		
		    // --------------------------------------------------
		    // SIZES
		    // --------------------------------------------------
		
		    var itemH       = portrait ? 76  : 38;
		    var itemGap     = portrait ? 10  : 6;
		    var padding     = portrait ? 22  : 14;
		    var fontSize    = portrait ? 30  : 15;
		    var panelW      = portrait ? 560 : 320;
		    var panelRadius = portrait ? 30  : 18;
		    var itemRadius  = portrait ? 20  : 11;
		    var glowBlur    = portrait ? 28  : 16;
		    var textInset   = portrait ? 28  : 16;
		
		    var itemW  = panelW - padding * 2;
		
		    var panelH =
		        count * itemH +
		        (count - 1) * itemGap +
		        padding * 2;
		
		
		    menuMetrics.itemW = itemW;
		    menuMetrics.itemH = itemH;
		    menuMetrics.itemRadius = itemRadius;
		
		
		    // --------------------------------------------------
		    // PANEL POSITION
		    // --------------------------------------------------
		
		    // Right edge lines up with the menu button,
		    // just underneath the top bar
		
		    var menuRight =
		        settingsBtn.x +
		        settingsBtn.buttonSize / 2;
		
		    var panelX =
		        Math.max(
		            12,
		            menuRight - panelW
		        );
		
		    var panelY =
		        topBarHeight +
		        (portrait ? 12 : 8);
		
		
		    menuPanel.x = panelX;
		    menuPanel.restY = panelY;
		
		    menuPanel.y =
		        menuOpen
		            ? panelY
		            : panelY - MENU_SLIDE;
		
		
		    // --------------------------------------------------
		    // CLICK-AWAY AREA
		    // --------------------------------------------------
		
		    // Covers the screen under the top bar, so the menu
		    // button itself stays clickable.
		
		    menuCatcher.graphics.clear();
		
		    menuCatcher.graphics
		        .beginFill("rgba(0, 0, 0, 0.02)")
		        .drawRect(
		            0,
		            topBarHeight,
		            W,
		            H - topBarHeight
		        );
		
		
		    // --------------------------------------------------
		    // PANEL BACKGROUND
		    // --------------------------------------------------
		
		    menuPanelBg.graphics.clear();
		
		    menuPanelBg.graphics
		        .setStrokeStyle(1.5)
		        .beginStroke("#527896")
		        .beginLinearGradientFill(
		            [
		                "#0d2f4d",
		                "#071c31"
		            ],
		            [
		                0,
		                1
		            ],
		            0,
		            0,
		            0,
		            panelH
		        )
		        .drawRoundRect(
		            0,
		            0,
		            panelW,
		            panelH,
		            panelRadius
		        );
		
		    menuPanelBg.shadow =
		        new createjs.Shadow(
		            "rgba(0, 0, 0, 0.55)",
		            0,
		            8,
		            24
		        );
		
		
		    // --------------------------------------------------
		    // BUTTONS
		    // --------------------------------------------------
		
		    for (var m = 0; m < menuButtons.length; m++) {
		
		        var item = menuButtons[m];
		
		        item.x = padding;
		
		        item.y =
		            padding +
		            m * (itemH + itemGap);
		
		
		        // Glow shape
		        item.glow.graphics.clear();
		
		        item.glow.graphics
		            .beginFill("rgba(143, 216, 255, 0.35)")
		            .drawRoundRect(
		                0,
		                0,
		                itemW,
		                itemH,
		                itemRadius
		            );
		
		        item.glow.shadow =
		            new createjs.Shadow(
		                "#8fd8ff",
		                0,
		                0,
		                glowBlur
		            );
		
		
		        // Background
		        drawMenuItem(
		            item,
		            item.lit
		        );
		
		
		        // Text
		        item.label.font =
		            "bold " +
		            fontSize +
		            "px 'DM Sans'";
		
		        item.label.x = textInset;
		        item.label.y = itemH / 2;
		
		
		        // Clickable area
		        var hit = new createjs.Shape();
		
		        hit.graphics
		            .beginFill("#000")
		            .drawRect(
		                0,
		                0,
		                itemW,
		                itemH
		            );
		
		        item.hitArea = hit;
		    }
		}
		
		
		// --------------------------------------------------
		// OPEN / CLOSE / TOGGLE
		// --------------------------------------------------
		
		function openMenu() {
		
		    if (menuOpen) {
		        return;
		    }
		
		    menuOpen = true;
		
		    layoutMenu();
		
		
		    // Bring the menu in front of everything else
		    self.addChild(menuRoot);
		
		    // Only start from the hidden pose if it is fully closed
		    if (!menuRoot.visible) {
		
		        menuPanel.alpha = 0;
		
		        menuPanel.y =
		            menuPanel.restY -
		            MENU_SLIDE;
		    }
		
		    menuRoot.visible = true;
		
		
		    createjs.Tween.get(
		        menuPanel,
		        { override: true }
		    )
		    .to(
		        {
		            alpha: 1,
		            y: menuPanel.restY
		        },
		        MENU_OPEN_TIME,
		        createjs.Ease.quadOut
		    );
		
		
		    animateMenuIcon();
		    refreshMenuButtonColor();
		}
		
		
		function closeMenu() {
		
		    if (!menuOpen) {
		        return;
		    }
		
		    menuOpen = false;
		
		
		    // Turn off any glow that is still showing
		    for (var i = 0; i < menuButtons.length; i++) {
		
		        menuButtons[i].hovered = false;
		        menuButtons[i].pressed = false;
		
		        refreshItem(menuButtons[i]);
		    }
		
		
		    createjs.Tween.get(
		        menuPanel,
		        { override: true }
		    )
		    .to(
		        {
		            alpha: 0,
		            y: menuPanel.restY - MENU_SLIDE
		        },
		        MENU_CLOSE_TIME,
		        createjs.Ease.quadIn
		    )
		    .call(function () {
		
		        // Only hide it if it was not opened again meanwhile
		        if (!menuOpen) {
		
		            menuRoot.visible = false;
		        }
		    });
		
		
		    animateMenuIcon();
		    refreshMenuButtonColor();
		}
		
		
		function toggleMenu() {
		
		    if (menuOpen) {
		
		        closeMenu();
		
		    } else {
		
		        openMenu();
		    }
		}
		
		
		// --------------------------------------------------
		// MENU BUTTON CLICKED
		// --------------------------------------------------
		
		function onMenuItemClick(item) {
		
		    closeMenu();
		
		    onMenuSelect(item.itemId);
		}
		
		
		// --------------------------------------------------
		// IMPORT / EXPORT
		// --------------------------------------------------
		
		function exportGame() {
		
		    var a = document.createElement("a");
		
		    a.href = URL.createObjectURL(
		        new Blob([SaveSystem.exportSave()], { type: "application/json" })
		    );
		    a.download = "save.json";
		    a.click();
		
		    URL.revokeObjectURL(a.href);
		}
		
		
		function importGame() {
		
		    var input = document.createElement("input");
		
		    input.type = "file";
		    input.accept = ".json";
		
		    input.onchange = function () {
		
		        input.files[0].text().then(function (text) {
		
		            SaveSystem.importSave(text);
		            showCurrencies();
		        });
		    };
		
		    input.click();
		}
		
		
		// --------------------------------------------------
		// WHAT EACH OPTION DOES
		// --------------------------------------------------
		
		// id is one of: home, egg, monsters, expedition,
		// summons, shop, import, export, settings
		
		function onMenuSelect(id) {
		
		    switch (id) {
		
		        case "home":
		            showScreen("game");
		            break;
		
		        case "egg":
		            showScreen("eggs");
		            break;
		
		        case "monsters":
		            showScreen("monsters");
		            break;
		
		        case "import":
		            if (window.SaveSystem) importGame();
		            break;
		
		        case "export":
		            if (window.SaveSystem) exportGame();
		            break;
		
		        // Put your other screens here, for example:
		        //
		        // case "shop":
		        //     showScreen("shop");
		        //     break;
		
		        default:
		            console.log("Menu option chosen:", id);
		    }
		}
		
		
		// --------------------------------------------------
		// SWITCH SCREENS
		// --------------------------------------------------
		
		// Each screen is a frame on the main timeline, found by
		// its frame label (for example "game" or "eggs").
		
		function hasFrameLabel(name) {
		
		    var labels = self.labels;
		
		    // Cannot check, so try anyway
		    if (!labels) {
		        return true;
		    }
		
		    for (var i = 0; i < labels.length; i++) {
		
		        if (labels[i].label === name) {
		
		            return true;
		        }
		    }
		
		    return false;
		}
		
		
		// Things the screens create in code stay on the stage
		// when the playhead moves to another frame, so clean them up.
		// The top bar and the menu stay on every screen.
		
		function hideGameScreen() {
		
		    if (self.cleanupCards) self.cleanupCards();
		    if (self.cleanupEggs) self.cleanupEggs();
		    if (self.cleanupEggNavigation) self.cleanupEggNavigation();
		    if (self.cleanupBottomBar) self.cleanupBottomBar();
		    if (self.cleanupMonsters) self.cleanupMonsters();
		}
		
		
		function showScreen(name) {
		
		    // Already on that screen
		    if (self.currentLabel === name) {
		        return;
		    }
		
		    if (!hasFrameLabel(name)) {
		
		        console.error(
		            'There is no frame labeled "' + name + '". ' +
		            "Add a keyframe on the labels layer and type the name " +
		            "in the Label name box."
		        );
		
		        return;
		    }
		
		    hideGameScreen();
		
		    self.gotoAndStop(name);
		
		    // Keep the top bar and the menu in front of the new screen.
		    // Uses self.topBar so it always points at the newest one.
		    self.addChild(self.topBar);
		    self.addChild(self.menuRoot);
		}
		
		
		// --------------------------------------------------
		// BUILD THE MENU
		// --------------------------------------------------
		
		createMenuButtons();
		
		
		// --------------------------------------------------
		// INITIAL LAYOUT
		// --------------------------------------------------
		
		layoutTopBar();
		
		
		// --------------------------------------------------
		// CURRENCY SAVE / LOAD
		// --------------------------------------------------
		
		function formatAmount(n) {
		
		    // 12345 becomes "12,345"
		    return Number(n).toLocaleString("en-US");
		}
		
		
		// Writes the saved amounts into the top bar
		function showCurrencies() {
		
		    gemAmount.text =
		        formatAmount(SaveSystem.get("starGems"));
		
		    crystAmount.text =
		        formatAmount(SaveSystem.get("cryst"));
		
		    // The box widths depend on the text width
		    layoutTopBar();
		}
		
		
		function startCurrencies() {
		
		    // Shows 0 until the save has loaded
		    gemAmount.text = "0";
		    crystAmount.text = "0";
		    layoutTopBar();
		
		    // Updates the top bar whenever a currency changes
		    SaveSystem.onChange("topbar", showCurrencies);
		
		    if (SaveSystem.isLoaded()) {
		        showCurrencies();
		    }
		
		    SaveSystem.load();
		}
		
		
		// The save system layer may not have run yet, so wait for it if needed
		var saveWaitTicks = 0;
		
		function waitForSaveSystem() {
		
		    if (window.SaveSystem) {
		
		        createjs.Ticker.removeEventListener("tick", waitForSaveSystem);
		        startCurrencies();
		        return;
		    }
		
		    saveWaitTicks++;
		
		    if (saveWaitTicks > 120) {
		
		        createjs.Ticker.removeEventListener("tick", waitForSaveSystem);
		
		        console.error(
		            "SaveSystem not found. Add the save system layer on frame 1."
		        );
		    }
		}
		
		
		if (window.SaveSystem) {
		
		    startCurrencies();
		
		} else {
		
		    createjs.Ticker.addEventListener("tick", waitForSaveSystem);
		}
		
		
		// --------------------------------------------------
		// REMEMBER THE TOP BAR (removed on the next run)
		// --------------------------------------------------
		
		self.topBar = topBar;
		self.menuRoot = menuRoot;
		
		// Lets other screens (like Monsters) change screens the same way the menu does
		self.showScreen = showScreen;
		(function(self) {
		
		
		var W = lib.properties.width;
		var H = lib.properties.height;
		var portrait = H > W;
		
		
		// --------------------------------------------------
		// SETTINGS
		// --------------------------------------------------
		
		var CARD_COUNT    = 5;
		var CARD_SIZE     = portrait ? 0.17 : 0.12;
		var ROW_SPAN      = portrait ? 0.92 : 0.72;
		var GAP_BELOW_EGG = 0.02;
		var CARDS_RAISE   = 0.15;
		var LIFT          = 0.40;
		
		var DESKTOP_CARDS_RAISE = 0.09;
		
		
		// --------------------------------------------------
		// MONSTER SELECTION SCREEN
		// --------------------------------------------------
		
		var MONSTER_MENU_LABEL = "monsters";
		
		
		// --------------------------------------------------
		// DEFAULT MONSTER ART FRAME
		// --------------------------------------------------
		
		var DEFAULT_MONSTER_ART_FRAME = "default";
		
		
		// --------------------------------------------------
		// HOVER
		// --------------------------------------------------
		
		var HOVER_LIFT = 0.12;
		var HOVER_TIME = 150;
		
		
		// --------------------------------------------------
		// TOUCH PRESS
		// --------------------------------------------------
		
		var PRESS_SCALE = 0.88;
		
		
		// --------------------------------------------------
		// CARD INTRO ANIMATION
		// --------------------------------------------------
		
		var INTRO_DIRECTION = "left";
		var INTRO_DISTANCE = 75;
		var INTRO_TIME = 550;
		var INTRO_DELAY = 100;
		var INTRO_FADE = true;
		
		
		// --------------------------------------------------
		// GOLDEN MIDDLE CARD
		// --------------------------------------------------
		
		var GOLD_INDEX = Math.floor(CARD_COUNT / 2);
		
		var GOLD = {
		    hue: -154,
		    saturation: 50,
		    brightness: 45
		};
		
		
		// --------------------------------------------------
		// CARD STORAGE
		// --------------------------------------------------
		
		var cards = [];
		var alive = true;
		
		
		// --------------------------------------------------
		// HOVER DETECTION
		// --------------------------------------------------
		
		var canHover = !!(
		    window.matchMedia &&
		    window.matchMedia("(hover: hover)").matches
		);
		
		
		// --------------------------------------------------
		// ENABLE TOUCH
		// --------------------------------------------------
		
		if (self.stage) {
		    createjs.Touch.enable(self.stage);
		}
		
		
		// --------------------------------------------------
		// DISABLE BROWSER RIGHT-CLICK MENU
		// --------------------------------------------------
		
		if (
		    self.stage &&
		    self.stage.canvas
		) {
		
		    self.stage.canvas.addEventListener(
		        "contextmenu",
		        function(evt) {
		
		            evt.preventDefault();
		        }
		    );
		}
		
		
		// --------------------------------------------------
		// GET CURRENT EGG INDEX
		// --------------------------------------------------
		//
		// Egg 1 = 0
		// Egg 2 = 1
		// Egg 3 = 2
		// Egg 4 = 3
		// Egg 5 = 4
		// --------------------------------------------------
		
		function getCurrentEggIndex() {
		
		    if (
		        typeof window.CurrentEggIndex ===
		        "number"
		    ) {
		
		        if (
		            window.CurrentEggIndex >= 0 &&
		            window.CurrentEggIndex < 5
		        ) {
		
		            return Math.floor(
		                window.CurrentEggIndex
		            );
		        }
		    }
		
		
		    return 0;
		}
		
		
		// --------------------------------------------------
		// GET GLOBAL MONSTER SLOT
		// --------------------------------------------------
		//
		// Each egg owns five monster slots.
		//
		// Egg 1:  0 - 4
		// Egg 2:  5 - 9
		// Egg 3: 10 - 14
		// Egg 4: 15 - 19
		// Egg 5: 20 - 24
		// --------------------------------------------------
		
		function getGlobalMonsterSlot(localSlot) {
		
		    var eggIndex =
		        getCurrentEggIndex();
		
		
		    var slotsPerEgg =
		        5;
		
		
		    return (
		        eggIndex *
		        slotsPerEgg
		    ) +
		    localSlot;
		}
		
		
		// --------------------------------------------------
		// CREATE CARDS
		// --------------------------------------------------
		
		function createCards() {
		
		    if (!lib.MonsterCard) {
		
		        console.error(
		            "MonsterCard not found. Check AS Linkage on the symbol."
		        );
		
		        return;
		    }
		
		
		    if (canHover) {
		        self.stage.enableMouseOver(20);
		    }
		
		
		    for (var i = 0; i < CARD_COUNT; i++) {
		
		        var card =
		            new lib.MonsterCard();
		
		
		        // --------------------------------------------------
		        // CARD DATA
		        // --------------------------------------------------
		
		        card.slotIndex =
		            i;
		
		        card.monster =
		            null;
		
		        card.introDone =
		            false;
		
		        card.cursor =
		            null;
		
		        card.isPointerInside =
		            false;
		
		
		        // --------------------------------------------------
		        // DEFAULT LABEL
		        // --------------------------------------------------
		
		        if (card.label) {
		
		            if (i === GOLD_INDEX) {
		
		                card.label.text =
		                    "Select a legend";
		
		            } else {
		
		                card.label.text =
		                    "Select a monster";
		            }
		        }
		
		
		        // --------------------------------------------------
		        // HIDE MONSTER ART INITIALLY
		        // --------------------------------------------------
		
		        if (card.MonsterArt) {
		
		            card.MonsterArt.stop();
		
		            card.MonsterArt.visible =
		                false;
		
		            card.MonsterArt.alpha =
		                0;
		        }
		
		
		        // --------------------------------------------------
		        // LEFT CLICK
		        // --------------------------------------------------
		
		        card.addEventListener(
		            "click",
		            onCardClick
		        );
		
		
		        // --------------------------------------------------
		        // RIGHT CLICK
		        // --------------------------------------------------
		
		        card.addEventListener(
		            "contextmenu",
		            onCardRightClick
		        );
		
		
		        // --------------------------------------------------
		        // MOUSE HOVER
		        // --------------------------------------------------
		
		        if (canHover) {
		
		            card.addEventListener(
		                "rollover",
		                onCardOver
		            );
		
		            card.addEventListener(
		                "rollout",
		                onCardOut
		            );
		        }
		
		
		        // --------------------------------------------------
		        // PRESS
		        // --------------------------------------------------
		
		        card.addEventListener(
		            "mousedown",
		            onCardPress
		        );
		
		        card.addEventListener(
		            "pressup",
		            onCardRelease
		        );
		
		
		        // --------------------------------------------------
		        // TOUCH
		        // --------------------------------------------------
		
		        card.addEventListener(
		            "touchstart",
		            onCardPress
		        );
		
		        card.addEventListener(
		            "touchend",
		            onCardRelease
		        );
		
		
		        // --------------------------------------------------
		        // ADD TO STAGE
		        // --------------------------------------------------
		
		        self.addChild(
		            card
		        );
		
		        cards.push(
		            card
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// GET MONSTER FOR GLOBAL SLOT
		// --------------------------------------------------
		//
		// IMPORTANT:
		//
		// Only SaveSystem.monsters is used here.
		//
		// SaveSystem.slots belongs to the EGG system and
		// must never be used for monster cards.
		// --------------------------------------------------
		
		function getMonsterForSlot(globalSlot) {
		
		    if (
		        !window.SaveSystem ||
		        typeof SaveSystem.get !== "function"
		    ) {
		
		        return null;
		    }
		
		
		    var monsters =
		        SaveSystem.get(
		            "monsters"
		        );
		
		
		    if (!Array.isArray(monsters)) {
		
		        return null;
		    }
		
		
		    for (
		        var i = 0;
		        i < monsters.length;
		        i++
		    ) {
		
		        var entry =
		            monsters[i];
		
		
		        if (!entry) {
		            continue;
		        }
		
		
		        if (
		            typeof entry.slot !== "number"
		        ) {
		
		            continue;
		        }
		
		
		        if (
		            entry.slot !== globalSlot
		        ) {
		
		            continue;
		        }
		
		
		        // --------------------------------------------------
		        // LOOK UP MONSTER FROM REGISTRY
		        // --------------------------------------------------
		
		        if (
		            entry.monsterId !== undefined &&
		            entry.monsterId !== null
		        ) {
		
		            if (
		                window.Monster &&
		                Monster.registry
		            ) {
		
		                var found =
		                    Monster.registry[
		                        entry.monsterId
		                    ];
		
		
		                if (found) {
		
		                    return found;
		                }
		            }
		        }
		
		
		        // --------------------------------------------------
		        // FALLBACK TO SAVED ENTRY
		        // --------------------------------------------------
		
		        if (
		            entry.name ||
		            entry.type1 ||
		            entry.maxHp !== undefined
		        ) {
		
		            return entry;
		        }
		    }
		
		
		    return null;
		}
		
		
		// --------------------------------------------------
		// GO TO DEFAULT MONSTER ART FRAME
		// --------------------------------------------------
		
		function goToDefaultMonsterArt(monsterArt) {
		
		    if (!monsterArt) {
		        return false;
		    }
		
		
		    monsterArt.stop();
		
		
		    var labels = [];
		
		
		    if (
		        monsterArt.timeline &&
		        typeof monsterArt.timeline.getLabels ===
		        "function"
		    ) {
		
		        labels =
		            monsterArt.timeline.getLabels();
		    }
		
		
		    for (
		        var i = 0;
		        i < labels.length;
		        i++
		    ) {
		
		        var labelName =
		            String(
		                labels[i].label || ""
		            ).trim();
		
		
		        if (
		            labelName.toLowerCase() ===
		            DEFAULT_MONSTER_ART_FRAME.toLowerCase()
		        ) {
		
		            monsterArt.gotoAndStop(
		                labels[i].position
		            );
		
		            monsterArt.stop();
		
		            return true;
		        }
		    }
		
		
		    monsterArt.gotoAndStop(
		        0
		    );
		
		    monsterArt.stop();
		
		    return false;
		}
		
		
		// --------------------------------------------------
		// REFRESH CARD CACHE
		// --------------------------------------------------
		//
		// Only refresh an already-existing cache.
		// This preserves the original card dimensions.
		// --------------------------------------------------
		
		function refreshCardCache(card) {
		
		    if (
		        !card ||
		        !card.nominalBounds
		    ) {
		
		        return;
		    }
		
		
		    if (!card.cacheCanvas) {
		
		        return;
		    }
		
		
		    var b =
		        card.nominalBounds;
		
		
		    var scale =
		        typeof card.cardScale === "number"
		            ? card.cardScale
		            : 1;
		
		
		    var cacheScale =
		        scale * 2;
		
		
		    card.uncache();
		
		
		    card.cache(
		        b.x,
		        b.y,
		        b.width,
		        b.height,
		        cacheScale
		    );
		}
		
		
		// --------------------------------------------------
		// UPDATE MONSTER ART
		// --------------------------------------------------
		
		function updateMonsterArt(card) {
		
		    if (!card) {
		        return;
		    }
		
		
		    var monsterArt =
		        card.MonsterArt;
		
		
		    if (!monsterArt) {
		
		        console.warn(
		            "MonsterArt instance not found on MonsterCard."
		        );
		
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // GOLDEN LEGEND CARD
		    // --------------------------------------------------
		
		    if (
		        card.slotIndex ===
		        GOLD_INDEX
		    ) {
		
		        monsterArt.stop();
		
		        monsterArt.visible =
		            false;
		
		        monsterArt.alpha =
		            0;
		
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // EMPTY MONSTER SLOT
		    // --------------------------------------------------
		
		    if (!card.monster) {
		
		        monsterArt.stop();
		
		        monsterArt.visible =
		            false;
		
		        monsterArt.alpha =
		            0;
		
		
		        refreshCardCache(
		            card
		        );
		
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // MONSTER NAME
		    // --------------------------------------------------
		
		    var monsterName =
		        String(
		            card.monster.name || ""
		        ).trim();
		
		
		    // --------------------------------------------------
		    // NO NAME
		    // --------------------------------------------------
		
		    if (!monsterName) {
		
		        monsterArt.stop();
		
		        goToDefaultMonsterArt(
		            monsterArt
		        );
		
		        monsterArt.stop();
		
		        monsterArt.visible =
		            true;
		
		        monsterArt.alpha =
		            1;
		
		
		        refreshCardCache(
		            card
		        );
		
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // GET FRAME LABELS
		    // --------------------------------------------------
		
		    var labels = [];
		
		
		    if (
		        monsterArt.timeline &&
		        typeof monsterArt.timeline.getLabels ===
		        "function"
		    ) {
		
		        labels =
		            monsterArt.timeline.getLabels();
		    }
		
		
		    var frameFound =
		        false;
		
		
		    // --------------------------------------------------
		    // FIND MONSTER FRAME
		    // --------------------------------------------------
		
		    for (
		        var i = 0;
		        i < labels.length;
		        i++
		    ) {
		
		        var label =
		            labels[i];
		
		
		        if (!label) {
		            continue;
		        }
		
		
		        var labelName =
		            String(
		                label.label || ""
		            ).trim();
		
		
		        if (
		            labelName.toLowerCase() ===
		            monsterName.toLowerCase()
		        ) {
		
		            monsterArt.stop();
		
		
		            monsterArt.gotoAndStop(
		                label.position
		            );
		
		
		            monsterArt.stop();
		
		
		            frameFound =
		                true;
		
		            break;
		        }
		    }
		
		
		    // --------------------------------------------------
		    // FRAME NOT FOUND
		    // --------------------------------------------------
		
		    if (!frameFound) {
		
		        console.warn(
		            "MonsterArt frame not found for:",
		            monsterName,
		            "Using default frame."
		        );
		
		
		        goToDefaultMonsterArt(
		            monsterArt
		        );
		    }
		
		
		    // --------------------------------------------------
		    // SHOW ART
		    // --------------------------------------------------
		
		    monsterArt.stop();
		
		    monsterArt.visible =
		        true;
		
		    monsterArt.alpha =
		        1;
		
		
		    // --------------------------------------------------
		    // REFRESH EXISTING CACHE
		    // --------------------------------------------------
		
		    refreshCardCache(
		        card
		    );
		}
		
		
		// --------------------------------------------------
		// UPDATE ONE CARD
		// --------------------------------------------------
		
		function updateCardMonster(card) {
		
		    if (!card) {
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // GOLDEN LEGEND CARD
		    // --------------------------------------------------
		
		    if (
		        card.slotIndex ===
		        GOLD_INDEX
		    ) {
		
		        card.monster =
		            null;
		
		
		        if (card.label) {
		
		            card.label.text =
		                "Select a legend";
		        }
		
		
		        updateMonsterArt(
		            card
		        );
		
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // GET GLOBAL MONSTER SLOT
		    // --------------------------------------------------
		
		    var globalSlot =
		        getGlobalMonsterSlot(
		            card.slotIndex
		        );
		
		
		    card.globalMonsterSlot =
		        globalSlot;
		
		
		    // --------------------------------------------------
		    // GET MONSTER
		    // --------------------------------------------------
		
		    card.monster =
		        getMonsterForSlot(
		            globalSlot
		        );
		
		
		    // --------------------------------------------------
		    // UPDATE LABEL
		    // --------------------------------------------------
		
		    if (card.label) {
		
		        if (card.monster) {
		
		            var monsterName =
		                String(
		                    card.monster.name || ""
		                ).trim();
		
		
		            card.label.text =
		                monsterName !== ""
		                    ? monsterName
		                    : "Select a monster";
		
		        } else {
		
		            card.label.text =
		                "Select a monster";
		        }
		    }
		
		
		    // --------------------------------------------------
		    // UPDATE ART
		    // --------------------------------------------------
		
		    updateMonsterArt(
		        card
		    );
		}
		
		
		// --------------------------------------------------
		// UPDATE ALL CARDS
		// --------------------------------------------------
		
		function updateAllCardMonsters() {
		
		    if (!alive) {
		        return;
		    }
		
		
		    for (
		        var i = 0;
		        i < cards.length;
		        i++
		    ) {
		
		        updateCardMonster(
		            cards[i]
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// GLOBAL EGG CHANGE
		// --------------------------------------------------
		
		function onGlobalEggChanged(evt) {
		
		    if (!alive) {
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // REFRESH MONSTER DATA
		    // --------------------------------------------------
		
		    updateAllCardMonsters();
		
		
		    // --------------------------------------------------
		    // KEEP EXISTING CARD POSITIONING
		    // --------------------------------------------------
		
		    layoutCards();
		
		
		    // --------------------------------------------------
		    // REPLAY CARD INTRO
		    // --------------------------------------------------
		
		    var direction =
		        1;
		
		
		    if (
		        evt &&
		        evt.detail &&
		        typeof evt.detail.direction ===
		        "number"
		    ) {
		
		        direction =
		            evt.detail.direction;
		    }
		
		
		    animateCardsIn(
		        direction
		    );
		}
		
		
		// --------------------------------------------------
		// REGISTER GLOBAL EGG CHANGE LISTENER
		// --------------------------------------------------
		
		if (
		    typeof window.addEventListener ===
		    "function"
		) {
		
		    window.addEventListener(
		        "eggChanged",
		        onGlobalEggChanged
		    );
		}
		
		
		// --------------------------------------------------
		// CARD LEFT CLICK
		// --------------------------------------------------
		
		function onCardClick(evt) {
		
		    var card =
		        evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // LEGEND CARD
		    // --------------------------------------------------
		
		    if (
		        card.slotIndex ===
		        GOLD_INDEX
		    ) {
		
		        console.log(
		            "Legend card tapped:",
		            card.slotIndex
		        );
		
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // GET GLOBAL SLOT
		    // --------------------------------------------------
		
		    var globalSlot =
		        getGlobalMonsterSlot(
		            card.slotIndex
		        );
		
		
		    if (card.monster) {
		
		        console.log(
		            "Changing monster in global slot:",
		            globalSlot,
		            card.monster.name
		        );
		
		    } else {
		
		        console.log(
		            "Selecting monster for global slot:",
		            globalSlot
		        );
		    }
		
		
		    // --------------------------------------------------
		    // SET MONSTER PLACEMENT
		    // --------------------------------------------------
		
		    if (!window.MonsterPlacement) {
		
		        window.MonsterPlacement = {
		            active: false,
		            slot: -1
		        };
		    }
		
		
		    window.MonsterPlacement.active =
		        true;
		
		
		    window.MonsterPlacement.slot =
		        globalSlot;
		
		
		    window.MonsterPlacement.eggIndex =
		        getCurrentEggIndex();
		
		
		    window.MonsterPlacement.localSlot =
		        card.slotIndex;
		
		
		    // --------------------------------------------------
		    // OPEN MONSTER SELECTION
		    // --------------------------------------------------
		
		    if (
		        typeof self.showScreen ===
		        "function"
		    ) {
		
		        self.showScreen(
		            MONSTER_MENU_LABEL
		        );
		
		    } else {
		
		        self.gotoAndStop(
		            MONSTER_MENU_LABEL
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// RIGHT CLICK / CLEAR MONSTER SLOT
		// --------------------------------------------------
		
		function onCardRightClick(evt) {
		
		    if (evt && evt.nativeEvent) {
		
		        evt.nativeEvent.preventDefault();
		    }
		
		
		    var card =
		        evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    if (
		        card.slotIndex ===
		        GOLD_INDEX
		    ) {
		
		        return;
		    }
		
		
		    if (!card.monster) {
		        return;
		    }
		
		
		    var globalSlot =
		        getGlobalMonsterSlot(
		            card.slotIndex
		        );
		
		
		    console.log(
		        "Clearing monster global slot:",
		        globalSlot,
		        card.monster.name
		    );
		
		
		    var monsters =
		        SaveSystem.get(
		            "monsters"
		        );
		
		
		    if (Array.isArray(monsters)) {
		
		        var nextMonsters =
		            monsters.map(
		                function(entry) {
		
		                    if (!entry) {
		                        return entry;
		                    }
		
		
		                    var copy =
		                        Object.assign(
		                            {},
		                            entry
		                        );
		
		
		                    if (
		                        typeof copy.slot ===
		                        "number" &&
		                        copy.slot ===
		                        globalSlot
		                    ) {
		
		                        copy.slot =
		                            -1;
		                    }
		
		
		                    return copy;
		                }
		            );
		
		
		        // --------------------------------------------------
		        // ONLY SAVE MONSTERS
		        // --------------------------------------------------
		
		        SaveSystem.set(
		            "monsters",
		            nextMonsters
		        );
		    }
		
		
		    // --------------------------------------------------
		    // CLEAR CARD IMMEDIATELY
		    // --------------------------------------------------
		
		    card.monster =
		        null;
		
		
		    if (card.label) {
		
		        card.label.text =
		            "Select a monster";
		    }
		
		
		    updateMonsterArt(
		        card
		    );
		}
		
		
		// --------------------------------------------------
		// CARD PRESS
		// --------------------------------------------------
		
		function onCardPress(evt) {
		
		    var card =
		        evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    createjs.Tween.removeTweens(
		        card
		    );
		
		
		    if (
		        typeof card.cardScale ===
		        "number"
		    ) {
		
		        card.normalScale =
		            card.cardScale;
		
		
		        card.scaleX =
		            card.cardScale *
		            PRESS_SCALE;
		
		        card.scaleY =
		            card.cardScale *
		            PRESS_SCALE;
		    }
		}
		
		
		// --------------------------------------------------
		// CARD RELEASE
		// --------------------------------------------------
		
		function onCardRelease(evt) {
		
		    var card =
		        evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    if (
		        typeof card.cardScale ===
		        "number"
		    ) {
		
		        card.scaleX =
		            card.cardScale;
		
		        card.scaleY =
		            card.cardScale;
		    }
		
		
		    if (
		        canHover &&
		        card.isPointerInside
		    ) {
		
		        moveCard(
		            card,
		            true
		        );
		
		    } else {
		
		        moveCard(
		            card,
		            false
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// HOVER ON
		// --------------------------------------------------
		
		function onCardOver(evt) {
		
		    var card =
		        evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    card.isPointerInside =
		        true;
		
		
		    moveCard(
		        card,
		        true
		    );
		}
		
		
		// --------------------------------------------------
		// HOVER OFF
		// --------------------------------------------------
		
		function onCardOut(evt) {
		
		    var card =
		        evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    card.isPointerInside =
		        false;
		
		
		    moveCard(
		        card,
		        false
		    );
		}
		
		
		// --------------------------------------------------
		// HOVER TWEEN
		// --------------------------------------------------
		
		function moveCard(card, up) {
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    var targetY =
		        up
		            ? card.homeY -
		              card.hoverDist
		            : card.homeY;
		
		
		    createjs.Tween.get(
		        card,
		        {
		            override: true
		        }
		    )
		    .to(
		        {
		            y: targetY
		        },
		        up
		            ? HOVER_TIME
		            : HOVER_TIME + 50,
		        createjs.Ease.quadOut
		    );
		}
		
		
		// --------------------------------------------------
		// LAYOUT CARDS
		// --------------------------------------------------
		
		function layoutCards() {
		
		    var n =
		        cards.length;
		
		
		    if (!n) {
		        return;
		    }
		
		
		    var b =
		        cards[0].nominalBounds;
		
		
		    var cardW =
		        W *
		        CARD_SIZE;
		
		
		    var scale =
		        cardW /
		        b.width;
		
		
		    var cardH =
		        b.height *
		        scale;
		
		
		    // --------------------------------------------------
		    // EGG POSITION
		    // --------------------------------------------------
		
		    var activeEgg =
		        self.egg;
		
		
		    if (!activeEgg) {
		        return;
		    }
		
		
		    var eggX =
		        activeEgg.eggRestX;
		
		
		    var restY =
		        (
		            typeof activeEgg.eggRestY ===
		            "number"
		        )
		            ? activeEgg.eggRestY
		
		            : (
		                typeof self.eggRestY ===
		                "number"
		            )
		                ? self.eggRestY
		                : activeEgg.y;
		
		
		    var eb =
		        activeEgg.nominalBounds;
		
		
		    var eggScaleY =
		        activeEgg.originalScaleY ||
		        activeEgg.scaleY;
		
		
		    var eggBottom =
		        restY +
		        (
		            eb
		                ? (
		                    eb.y +
		                    eb.height
		                ) *
		                eggScaleY
		
		                : 130
		        );
		
		
		    // --------------------------------------------------
		    // DESKTOP CARD OFFSET
		    // --------------------------------------------------
		
		    var desktopRaise =
		        portrait
		            ? 0
		            : H *
		              DESKTOP_CARDS_RAISE;
		
		
		    // --------------------------------------------------
		    // CARD BASE POSITION
		    // --------------------------------------------------
		
		    var baseY =
		        Math.min(
		            eggBottom +
		            H *
		            (
		                GAP_BELOW_EGG -
		                CARDS_RAISE
		            ) +
		            cardH / 2 -
		            desktopRaise,
		
		            H -
		            cardH / 2 -
		            20
		        );
		
		
		    var lift =
		        cardH *
		        LIFT;
		
		
		    // --------------------------------------------------
		    // CENTERED ROW
		    // --------------------------------------------------
		
		    var rowWidth =
		        W *
		        ROW_SPAN;
		
		
		    var leftX =
		        eggX -
		        rowWidth / 2 +
		        cardW / 2;
		
		
		    var rightX =
		        eggX +
		        rowWidth / 2 -
		        cardW / 2;
		
		
		    // --------------------------------------------------
		    // POSITION EACH CARD
		    // --------------------------------------------------
		
		    for (
		        var i = 0;
		        i < n;
		        i++
		    ) {
		
		        var c =
		            cards[i];
		
		
		        c.cardScale =
		            scale;
		
		
		        c.scaleX =
		            scale;
		
		        c.scaleY =
		            scale;
		
		
		        c.regX =
		            b.x +
		            b.width / 2;
		
		        c.regY =
		            b.y +
		            b.height / 2;
		
		
		        var normalized =
		            n > 1
		                ? i /
		                  (n - 1)
		                : 0.5;
		
		
		        c.x =
		            leftX +
		            (
		                rightX -
		                leftX
		            ) *
		            normalized;
		
		
		        var centerOffset =
		            n > 1
		                ? (
		                    i -
		                    (n - 1) / 2
		                ) /
		                (
		                    (n - 1) / 2
		                )
		                : 0;
		
		
		        c.y =
		            baseY -
		            lift *
		            centerOffset *
		            centerOffset;
		
		
		        c.homeX =
		            c.x;
		
		        c.homeY =
		            c.y;
		
		
		        c.hoverDist =
		            cardH *
		            HOVER_LIFT;
		
		
		        var hit =
		            new createjs.Shape();
		
		
		        hit.graphics
		            .beginFill("#000")
		            .drawRect(
		                b.x,
		                b.y,
		                b.width,
		                b.height +
		                c.hoverDist /
		                scale
		            );
		
		
		        c.hitArea =
		            hit;
		
		
		        if (
		            i === GOLD_INDEX &&
		            createjs.ColorMatrixFilter
		        ) {
		
		            var m =
		                new createjs.ColorMatrix()
		                    .adjustColor(
		                        GOLD.brightness,
		                        0,
		                        GOLD.saturation,
		                        GOLD.hue
		                    );
		
		
		            c.filters = [
		                new createjs.ColorMatrixFilter(
		                    m
		                )
		            ];
		        }
		
		
		        c.cache(
		            b.x,
		            b.y,
		            b.width,
		            b.height,
		            scale * 2
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// CARD INTRO ANIMATION
		// --------------------------------------------------
		
		function animateCardsIn(dir) {
		
		    if (!cards.length) {
		        return;
		    }
		
		
		    if (!dir) {
		
		        dir =
		            INTRO_DIRECTION === "right"
		                ? 1
		                : -1;
		    }
		
		
		    for (
		        var i = 0;
		        i < cards.length;
		        i++
		    ) {
		
		        var card =
		            cards[i];
		
		
		        card.introDone =
		            false;
		
		        card.cursor =
		            null;
		
		
		        var targetX =
		            card.homeX;
		
		
		        var targetY =
		            card.homeY;
		
		
		        var startX =
		            targetX -
		            dir *
		            INTRO_DISTANCE;
		
		
		        card.x =
		            startX;
		
		
		        card.y =
		            targetY;
		
		
		        if (INTRO_FADE) {
		
		            card.alpha =
		                0;
		
		        } else {
		
		            card.alpha =
		                1;
		        }
		
		
		        createjs.Tween.removeTweens(
		            card
		        );
		
		
		        var delay =
		            i *
		            INTRO_DELAY;
		
		
		        var tweenProperties = {
		            x: targetX
		        };
		
		
		        if (INTRO_FADE) {
		
		            tweenProperties.alpha =
		                1;
		        }
		
		
		        createjs.Tween.get(
		            card
		        )
		        .wait(
		            delay
		        )
		        .to(
		            tweenProperties,
		            INTRO_TIME,
		            createjs.Ease.backOut
		        )
		        .call(
		            function(card) {
		
		                card.introDone =
		                    true;
		
		                card.cursor =
		                    "pointer";
		
		            },
		            [card]
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// SAVE SYSTEM CHANGE LISTENER
		// --------------------------------------------------
		
		function onSaveSystemChange() {
		
		    if (!alive) {
		        return;
		    }
		
		
		    updateAllCardMonsters();
		}
		
		
		// --------------------------------------------------
		// REGISTER SAVE SYSTEM CHANGE LISTENER
		// --------------------------------------------------
		
		function registerSaveSystemListener() {
		
		    if (
		        !window.SaveSystem ||
		        typeof SaveSystem.on !==
		        "function"
		    ) {
		
		        return;
		    }
		
		
		    try {
		
		        SaveSystem.on(
		            "change",
		            onSaveSystemChange
		        );
		
		    } catch (e) {
		
		        console.warn(
		            "Could not register SaveSystem change listener.",
		            e
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// WAIT FOR SAVE SYSTEM
		// --------------------------------------------------
		//
		// This is the important load fix.
		//
		// The cards can be created before SaveSystem has
		// finished loading. When that happens, the first
		// update finds no monster assignments.
		//
		// We explicitly refresh after SaveSystem.load()
		// finishes.
		// --------------------------------------------------
		
		function waitForSaveSystemLoad() {
		
		    if (!window.SaveSystem) {
		        return;
		    }
		
		
		    if (
		        typeof SaveSystem.isLoaded ===
		        "function" &&
		        SaveSystem.isLoaded()
		    ) {
		
		        updateAllCardMonsters();
		
		        return;
		    }
		
		
		    if (
		        typeof SaveSystem.load ===
		        "function"
		    ) {
		
		        try {
		
		            var loadResult =
		                SaveSystem.load();
		
		
		            if (
		                loadResult &&
		                typeof loadResult.then ===
		                "function"
		            ) {
		
		                loadResult.then(
		                    function() {
		
		                        if (!alive) {
		                            return;
		                        }
		
		
		                        // --------------------------------------------------
		                        // SAVE DATA IS NOW AVAILABLE
		                        // --------------------------------------------------
		
		                        updateAllCardMonsters();
		                    }
		                )
		                .catch(
		                    function(error) {
		
		                        console.warn(
		                            "SaveSystem load failed:",
		                            error
		                        );
		                    }
		                );
		            }
		
		        } catch (e) {
		
		            console.warn(
		                "Could not load SaveSystem:",
		                e
		            );
		        }
		    }
		}
		
		
		// --------------------------------------------------
		// BUILD ONCE
		// --------------------------------------------------
		
		function buildOnce() {
		
		    createjs.Ticker.removeEventListener(
		        "tick",
		        buildOnce
		    );
		
		
		    if (!alive) {
		        return;
		    }
		
		
		    // --------------------------------------------------
		    // CREATE CARDS
		    // --------------------------------------------------
		
		    createCards();
		
		
		    // --------------------------------------------------
		    // LAYOUT
		    // --------------------------------------------------
		
		    layoutCards();
		
		
		    // --------------------------------------------------
		    // FIRST MONSTER UPDATE
		    // --------------------------------------------------
		
		    updateAllCardMonsters();
		
		
		    // --------------------------------------------------
		    // REGISTER SAVE LISTENER
		    // --------------------------------------------------
		
		    registerSaveSystemListener();
		
		
		    // --------------------------------------------------
		    // EXPLICITLY WAIT FOR SAVE DATA
		    // --------------------------------------------------
		
		    waitForSaveSystemLoad();
		
		
		    // --------------------------------------------------
		    // INTRO
		    // --------------------------------------------------
		
		    animateCardsIn();
		}
		
		
		createjs.Ticker.addEventListener(
		    "tick",
		    buildOnce
		);
		
		
		// --------------------------------------------------
		// EXPOSE TO EGG SCRIPT
		// --------------------------------------------------
		
		self.layoutCards =
		    layoutCards;
		
		
		self.updateAllCardMonsters =
		    updateAllCardMonsters;
		
		
		self.replayCardsIntro =
		    animateCardsIn;
		
		
		self.fadeOutCards =
		    function(time) {
		
		        cards.forEach(
		            function(c) {
		
		                c.introDone =
		                    false;
		
		                c.cursor =
		                    null;
		
		                c.isPointerInside =
		                    false;
		
		
		                createjs.Tween.get(
		                    c,
		                    {
		                        override: true
		                    }
		                )
		                .to(
		                    {
		                        alpha: 0
		                    },
		                    time,
		                    createjs.Ease.quadOut
		                );
		            }
		        );
		    };
		
		
		// --------------------------------------------------
		// CLEANUP
		// --------------------------------------------------
		
		self.cleanupCards =
		    function() {
		
		        alive =
		            false;
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            buildOnce
		        );
		
		
		        // --------------------------------------------------
		        // REMOVE EGG CHANGE LISTENER
		        // --------------------------------------------------
		
		        if (
		            typeof window.removeEventListener ===
		            "function"
		        ) {
		
		            window.removeEventListener(
		                "eggChanged",
		                onGlobalEggChanged
		            );
		        }
		
		
		        cards.forEach(
		            function(c) {
		
		                createjs.Tween.removeTweens(
		                    c
		                );
		
		
		                c.removeAllEventListeners();
		
		
		                if (c.cacheCanvas) {
		
		                    c.uncache();
		                }
		
		
		                self.removeChild(
		                    c
		                );
		            }
		        );
		
		
		        cards = [];
		    };
		
		
		})(this);
		var self = this;
		this.stop();
		
		// Clean up the previous run first
		if (self.cleanupBottomBar) {
		    self.cleanupBottomBar();
		}
		
		
		// --------------------------------------------------
		// BOTTOM EGG HATCH BAR
		// --------------------------------------------------
		
		var bottomBar = new createjs.Container();
		var bottomBarBg = new createjs.Shape();
		
		bottomBar.addChild(bottomBarBg);
		
		// Background only is 33% opacity
		bottomBarBg.alpha = 0.33;
		
		// Add after existing artwork
		self.addChild(bottomBar);
		
		
		// --------------------------------------------------
		// EGG LOCK STATUS & TIMERS
		// --------------------------------------------------
		
		// --------------------------------------------------
		// SHARED EGG LOCK STATUS
		// --------------------------------------------------
		//
		// This is shared with the egg-click/navigation script.
		//
		// false = unlocked
		// true  = locked
		//
		// Egg 1 starts unlocked.
		// Eggs 2-5 start locked.
		//
		
		var EGG_COUNT = 5;
		
		if (!window.EggLockStatus) {
		
		    window.EggLockStatus = {
		        locked: [false, true, true, true, true]
		    };
		
		} else {
		
		    // Make sure the array exists and has the correct size.
		    if (
		        !Array.isArray(window.EggLockStatus.locked) ||
		        window.EggLockStatus.locked.length !== EGG_COUNT
		    ) {
		
		        window.EggLockStatus.locked =
		            [false, true, true, true, true];
		    }
		}
		
		
		// Local reference to the shared lock array
		var eggLocked =
		    window.EggLockStatus.locked;
		
		
		// --------------------------------------------------
		// TIMER SETTINGS
		// --------------------------------------------------
		
		// Only the END time of each egg is stored.
		// The time remaining is calculated from Date.now(),
		// so switching eggs or screens does not restart it.
		
		var FIRST_EGG_SECONDS = 30;
		
		var eggEnd =
		    [0, 0, 0, 0, 0];
		
		var timersReady = false;
		
		var currentEggIndex = 0;
		
		var countdownTimer = null;
		
		
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
		    "--:--:--",
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
		// HATCH BUTTON
		// --------------------------------------------------
		
		var hatchButton = self.Hatch;
		
		
		// --------------------------------------------------
		// HATCH BUTTON BASE SCALE
		// --------------------------------------------------
		
		var hatchBaseScaleX = 1;
		var hatchBaseScaleY = 1;
		
		var hatchHovered = false;
		var hatchPressed = false;
		
		
		if (hatchButton) {
		
		    // Clear listeners from earlier visits
		    hatchButton.removeAllEventListeners("mouseover");
		    hatchButton.removeAllEventListeners("mouseout");
		    hatchButton.removeAllEventListeners("mousedown");
		    hatchButton.removeAllEventListeners("pressup");
		
		    hatchButton.cursor = "pointer";
		
		
		    // --------------------------------------------------
		    // SAVE ORIGINAL SCALE
		    // --------------------------------------------------
		
		    if (hatchButton.baseScaleX === undefined) {
		
		        hatchButton.baseScaleX =
		            hatchButton.scaleX;
		
		        hatchButton.baseScaleY =
		            hatchButton.scaleY;
		    }
		
		    hatchBaseScaleX =
		        hatchButton.baseScaleX;
		
		    hatchBaseScaleY =
		        hatchButton.baseScaleY;
		
		
		    // --------------------------------------------------
		    // HATCH BUTTON TEXT
		    // --------------------------------------------------
		
		    if (hatchButton.hatchButtonText) {
		
		        hatchButton.hatchButtonText.font =
		            "bold 50px 'DM Sans'";
		    }
		
		
		    // --------------------------------------------------
		    // UPDATE BUTTON SCALE
		    // --------------------------------------------------
		
		    function updateHatchButtonScale(scaleMultiplier) {
		
		        if (!hatchButton) {
		            return;
		        }
		
		        var portrait =
		            lib.properties.height >
		            lib.properties.width;
		
		
		        // Mobile button is 2.5x larger
		        var mobileScale =
		            portrait
		                ? 2.50
		                : 1.00;
		
		
		        createjs.Tween.removeTweens(
		            hatchButton
		        );
		
		
		        createjs.Tween.get(hatchButton)
		            .to(
		                {
		                    scaleX:
		                        hatchBaseScaleX *
		                        mobileScale *
		                        scaleMultiplier,
		
		                    scaleY:
		                        hatchBaseScaleY *
		                        mobileScale *
		                        scaleMultiplier
		                },
		                80,
		                createjs.Ease.quadOut
		            );
		    }
		
		
		    // --------------------------------------------------
		    // HOVER
		    // --------------------------------------------------
		
		    hatchButton.on(
		        "mouseover",
		        function () {
		
		            hatchHovered = true;
		
		            updateHatchButtonScale(0.96);
		        }
		    );
		
		
		    // --------------------------------------------------
		    // MOUSE OUT
		    // --------------------------------------------------
		
		    hatchButton.on(
		        "mouseout",
		        function () {
		
		            hatchHovered = false;
		
		            if (!hatchPressed) {
		
		                updateHatchButtonScale(1.00);
		            }
		        }
		    );
		
		
		    // --------------------------------------------------
		    // PRESS
		    // --------------------------------------------------
		
		    hatchButton.on(
		        "mousedown",
		        function () {
		
		            hatchPressed = true;
		
		            updateHatchButtonScale(0.90);
		        }
		    );
		
		
		    // --------------------------------------------------
		    // RELEASE
		    // --------------------------------------------------
		
		    hatchButton.on(
		        "pressup",
		        function () {
		
		            hatchPressed = false;
		
		            if (hatchHovered) {
		
		                updateHatchButtonScale(0.96);
		
		            } else {
		
		                updateHatchButtonScale(1.00);
		            }
		        }
		    );
		}
		
		
		// --------------------------------------------------
		// PAGE INDICATOR DOTS
		// --------------------------------------------------
		
		var pageDots =
		    new createjs.Container();
		
		self.addChild(pageDots);
		
		
		// --------------------------------------------------
		// DOT SETTINGS
		// --------------------------------------------------
		
		var DOT_COUNT = 5;
		
		var DOT_RADIUS = 4;
		
		var DOT_SPACING = 18;
		
		
		// --------------------------------------------------
		// DOT STYLE
		// --------------------------------------------------
		
		// Active   = white with blue glow
		// Inactive = dark blue with blue outline
		
		function styleDot(dot, active) {
		
		    dot.graphics.clear();
		
		    if (active) {
		
		        dot.graphics
		            .beginFill("#FFFFFF")
		            .drawCircle(
		                0,
		                0,
		                DOT_RADIUS
		            );
		
		        dot.shadow =
		            new createjs.Shadow(
		                "#2496FF",
		                0,
		                0,
		                8
		            );
		
		        dot.alpha = 1;
		
		    } else {
		
		        dot.graphics
		            .setStrokeStyle(1.5)
		            .beginStroke("#2789C9")
		            .beginFill("#123B5C")
		            .drawCircle(
		                0,
		                0,
		                DOT_RADIUS
		            );
		
		        dot.shadow = null;
		
		        dot.alpha = 0.85;
		    }
		}
		
		
		// --------------------------------------------------
		// CREATE DOTS
		// --------------------------------------------------
		
		for (
		    var i = 0;
		    i < DOT_COUNT;
		    i++
		) {
		
		    var dot =
		        new createjs.Shape();
		
		    styleDot(
		        dot,
		        i === 0
		    );
		
		    // Desktop spacing
		    dot.x =
		        (
		            i -
		            (DOT_COUNT - 1) / 2
		        ) *
		        DOT_SPACING;
		
		    pageDots.addChild(dot);
		}
		
		
		// --------------------------------------------------
		// SET ACTIVE DOT
		// --------------------------------------------------
		//
		// Called by the egg navigation script.
		//
		
		self.setActiveDot =
		    function (index) {
		
		        // Safety
		        if (
		            index < 0 ||
		            index >= DOT_COUNT
		        ) {
		            return;
		        }
		
		        currentEggIndex =
		            index;
		
		        for (
		            var j = 0;
		            j < DOT_COUNT;
		            j++
		        ) {
		
		            styleDot(
		                pageDots.getChildAt(j),
		                j === index
		            );
		        }
		
		        updateCountdown();
		    };
		
		
		// --------------------------------------------------
		// SAVE / READ EGG TIMERS
		// --------------------------------------------------
		
		// The end times go into SaveSystem.
		
		function saveEggTimers() {
		
		    if (window.SaveSystem) {
		
		        SaveSystem.set(
		            "eggEndTimes",
		            eggEnd.join(",")
		        );
		    }
		}
		
		
		// --------------------------------------------------
		// REDUCE EGG TIMER (called by the egg click)
		// --------------------------------------------------
		//
		// Removes SaveSystem "tapReduction" seconds.
		// Returns the seconds actually removed (0 = nothing happened).
		//
		
		self.reduceEggTimer =
		    function (index) {
		
		        if (
		            !timersReady ||
		            eggLocked[index] ||
		            !eggEnd[index]
		        ) {
		
		            return 0;
		        }
		
		
		        var before =
		            eggEnd[index];
		
		        eggEnd[index] =
		            Math.max(
		                Date.now(),
		                before -
		                SaveSystem.get("tapReduction") * 1000
		            );
		
		
		        saveEggTimers();
		
		        updateCountdown();
		
		
		        return Math.round(
		            (before - eggEnd[index]) / 1000
		        );
		    };
		
		
		// --------------------------------------------------
		// READ SAVED TIMERS
		// --------------------------------------------------
		
		function readTimers() {
		
		    var savedValue =
		        SaveSystem.get("eggEndTimes");
		
		    var t =
		        String(savedValue)
		            .split(",")
		            .map(Number);
		
		
		    for (
		        var i = 0;
		        i < EGG_COUNT;
		        i++
		    ) {
		
		        eggEnd[i] =
		            t[i] > 0
		                ? t[i]
		                : 0;
		    }
		
		
		    // First egg starts its timer the first time ever
		    if (!eggEnd[0]) {
		
		        eggEnd[0] =
		            Date.now() +
		            FIRST_EGG_SECONDS * 1000;
		
		        saveEggTimers();
		    }
		
		
		    timersReady = true;
		
		    updateCountdown();
		}
		
		
		// --------------------------------------------------
		// UPDATE COUNTDOWN DISPLAY
		// --------------------------------------------------
		
		function updateCountdown() {
		
		    // Safety
		    if (
		        currentEggIndex < 0 ||
		        currentEggIndex >= EGG_COUNT
		    ) {
		        currentEggIndex = 0;
		    }
		
		
		    // Read the SHARED lock state
		    var locked =
		        window.EggLockStatus &&
		        Array.isArray(
		            window.EggLockStatus.locked
		        )
		            ? window.EggLockStatus.locked[
		                currentEggIndex
		            ] === true
		            : true;
		
		
		    var secs =
		        (
		            locked ||
		            !timersReady
		        )
		            ? -1
		            : Math.max(
		                0,
		                Math.ceil(
		                    (
		                        eggEnd[
		                            currentEggIndex
		                        ] -
		                        Date.now()
		                    ) / 1000
		                )
		            );
		
		
		    function pad(n) {
		
		        return n < 10
		            ? "0" + n
		            : n;
		    }
		
		
		    // --------------------------------------------------
		    // TIMER TEXT
		    // --------------------------------------------------
		
		    hatchTimer.text =
		        secs < 0
		
		            ? "--:--:--"
		
		            : pad(
		                Math.floor(
		                    secs / 3600
		                )
		            ) +
		            ":" +
		            pad(
		                Math.floor(
		                    secs % 3600 / 60
		                )
		            ) +
		            ":" +
		            pad(
		                secs % 60
		            );
		
		
		    // --------------------------------------------------
		    // UPDATE LABEL
		    // --------------------------------------------------
		
		    timerLabels.text =
		        locked
		
		            ? "LOCKED"
		
		            : !timersReady
		
		                ? "LOADING"
		
		                : secs > 0
		
		                    ? "HOURS   •   MINUTES   •   SECONDS"
		
		                    : "READY TO HATCH";
		
		
		    // --------------------------------------------------
		    // UPDATE HATCH BUTTON TEXT
		    // --------------------------------------------------
		
		    if (
		        hatchButton &&
		        hatchButton.hatchButtonText &&
		        (
		            locked ||
		            timersReady
		        )
		    ) {
		
		        hatchButton.hatchButtonText.text =
		
		            locked
		
		                ? "Egg locked"
		
		                : secs > 0
		
		                    ? "Change the rarity."
		
		                    : "Hatch the egg";
		    }
		}
		
		
		// --------------------------------------------------
		// START COUNTDOWN
		// --------------------------------------------------
		
		function startCountdown() {
		
		    clearInterval(
		        countdownTimer
		    );
		
		    updateCountdown();
		
		    countdownTimer =
		        setInterval(
		            updateCountdown,
		            250
		        );
		}
		
		
		// --------------------------------------------------
		// LAYOUT
		// --------------------------------------------------
		
		function layoutBottomBar() {
		
		    var W =
		        lib.properties.width;
		
		    var H =
		        lib.properties.height;
		
		    var portrait =
		        H > W;
		
		
		    // --------------------------------------------------
		    // RESPONSIVE SIZING
		    // --------------------------------------------------
		
		    var barHeight;
		
		    var hatchFontSize;
		    var timerFontSize;
		    var labelFontSize;
		
		
		    if (portrait) {
		
		        // ----------------------------------------------
		        // MOBILE / PORTRAIT
		        // ----------------------------------------------
		
		        barHeight =
		            Math.max(
		                118,
		                H * 0.16
		            );
		
		
		        hatchFontSize =
		            Math.max(
		                20,
		                Math.min(
		                    28,
		                    H * 0.030
		                )
		            );
		
		
		        timerFontSize =
		            Math.max(
		                58,
		                Math.min(
		                    76,
		                    H * 0.082
		                )
		            );
		
		
		        labelFontSize =
		            Math.max(
		                13,
		                Math.min(
		                    18,
		                    H * 0.020
		                )
		            );
		
		    } else {
		
		        // ----------------------------------------------
		        // DESKTOP / LANDSCAPE
		        // ----------------------------------------------
		
		        barHeight =
		            Math.max(
		                82,
		                H * 0.11
		            );
		
		
		        hatchFontSize =
		            Math.max(
		                10,
		                H * 0.014
		            );
		
		
		        timerFontSize =
		            Math.max(
		                37,
		                H * 0.052
		            );
		
		
		        labelFontSize =
		            Math.max(
		                8,
		                H * 0.011
		            );
		    }
		
		
		    // --------------------------------------------------
		    // BACKGROUND — VERTICAL GRADIENT
		    // --------------------------------------------------
		
		    bottomBarBg.graphics.clear();
		
		    bottomBarBg.graphics
		        .beginLinearGradientFill(
		            [
		                "#123B5C",
		                "#092642",
		                "#061A2D"
		            ],
		            [0, 0.5, 1],
		            0,
		            H - barHeight,
		            0,
		            H
		        )
		        .drawRect(
		            0,
		            H - barHeight,
		            W,
		            barHeight
		        );
		
		
		    // --------------------------------------------------
		    // SLIGHTLY DARKER TOP EDGE
		    // --------------------------------------------------
		
		    bottomBarBg.graphics
		        .beginFill("#08233d")
		        .drawRect(
		            0,
		            H - barHeight,
		            W,
		            2
		        );
		
		
		    // --------------------------------------------------
		    // WHITE GRADIENT ACCENT LINE
		    // --------------------------------------------------
		
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
		            H - barHeight,
		            W,
		            1
		        );
		
		
		    // --------------------------------------------------
		    // UPDATE FONT SIZES
		    // --------------------------------------------------
		
		    hatchText.font =
		        "bold " +
		        hatchFontSize +
		        "px 'DM Sans'";
		
		
		    hatchTimer.font =
		        timerFontSize +
		        "px 'Marcellus'";
		
		
		    timerLabels.font =
		        "bold " +
		        labelFontSize +
		        "px 'DM Sans'";
		
		
		    // --------------------------------------------------
		    // BAR TOP
		    // --------------------------------------------------
		
		    var barTop =
		        H - barHeight;
		
		
		    // --------------------------------------------------
		    // MOBILE LAYOUT
		    // --------------------------------------------------
		
		    if (portrait) {
		
		        var hatchHeight =
		            hatchText.getMeasuredHeight();
		
		        var timerHeight =
		            hatchTimer.getMeasuredHeight();
		
		        var labelHeight =
		            timerLabels.getMeasuredHeight();
		
		
		        var topPadding = 6;
		        var bottomPadding = 6;
		
		
		        var contentHeight =
		            hatchHeight +
		            timerHeight +
		            labelHeight;
		
		
		        var availableGapSpace =
		            barHeight -
		            topPadding -
		            bottomPadding -
		            contentHeight;
		
		
		        var gap =
		            Math.max(
		                1,
		                availableGapSpace / 2
		            );
		
		
		        // ROW 1
		
		        hatchText.x =
		            W / 2;
		
		        hatchText.y =
		            barTop +
		            topPadding;
		
		
		        // ROW 2
		
		        hatchTimer.x =
		            W / 2;
		
		        hatchTimer.y =
		            hatchText.y +
		            hatchHeight +
		            gap;
		
		
		        // ROW 3
		
		        timerLabels.x =
		            W / 2;
		
		        timerLabels.y =
		            hatchTimer.y +
		            timerHeight +
		            gap;
		
		
		        // FINAL SAFETY CHECK
		
		        var labelBottom =
		            timerLabels.y +
		            labelHeight;
		
		
		        if (
		            labelBottom >
		            H - bottomPadding
		        ) {
		
		            var correction =
		                labelBottom -
		                (
		                    H -
		                    bottomPadding
		                );
		
		
		            hatchText.y -=
		                correction;
		
		            hatchTimer.y -=
		                correction;
		
		            timerLabels.y -=
		                correction;
		        }
		
		    } else {
		
		        // --------------------------------------------------
		        // DESKTOP LAYOUT
		        // --------------------------------------------------
		
		        hatchText.x =
		            W / 2;
		
		        hatchText.y =
		            barTop + 10;
		
		
		        hatchTimer.x =
		            W / 2;
		
		        hatchTimer.y =
		            barTop + 24;
		
		
		        timerLabels.x =
		            W / 2;
		
		        timerLabels.y =
		            barTop + 63;
		    }
		
		
		    // --------------------------------------------------
		    // HATCH BUTTON POSITION
		    // --------------------------------------------------
		
		    if (hatchButton) {
		
		        hatchButton.x =
		            W / 2;
		
		
		        if (portrait) {
		
		            hatchButton.y =
		                barTop - 70;
		
		        } else {
		
		            hatchButton.y =
		                barTop - 28;
		        }
		
		
		        // --------------------------------------------------
		        // RESPONSIVE BUTTON SCALE
		        // --------------------------------------------------
		
		        if (
		            !hatchHovered &&
		            !hatchPressed
		        ) {
		
		            var buttonScale =
		                portrait
		                    ? 2.50
		                    : 1.00;
		
		
		            hatchButton.scaleX =
		                hatchBaseScaleX *
		                buttonScale;
		
		            hatchButton.scaleY =
		                hatchBaseScaleY *
		                buttonScale;
		        }
		    }
		
		
		    // --------------------------------------------------
		    // PAGE DOTS
		    // --------------------------------------------------
		
		    pageDots.x =
		        W / 2;
		
		
		    // --------------------------------------------------
		    // MOBILE DOTS
		    // --------------------------------------------------
		
		    if (portrait) {
		
		        pageDots.scaleX = 2;
		        pageDots.scaleY = 2;
		
		
		        for (
		            var d = 0;
		            d < pageDots.numChildren;
		            d++
		        ) {
		
		            pageDots.getChildAt(d).x =
		                (
		                    d -
		                    (DOT_COUNT - 1) / 2
		                ) *
		                24;
		        }
		
		
		        if (hatchButton) {
		
		            pageDots.y =
		                hatchButton.y - 75;
		
		        } else {
		
		            pageDots.y =
		                barTop - 95;
		        }
		
		    } else {
		
		        pageDots.scaleX = 1;
		        pageDots.scaleY = 1;
		
		
		        for (
		            var d2 = 0;
		            d2 < pageDots.numChildren;
		            d2++
		        ) {
		
		            pageDots.getChildAt(d2).x =
		                (
		                    d2 -
		                    (DOT_COUNT - 1) / 2
		                ) *
		                DOT_SPACING;
		        }
		
		
		        if (hatchButton) {
		
		            pageDots.y =
		                hatchButton.y - 42;
		
		        } else {
		
		            pageDots.y =
		                barTop - 70;
		        }
		    }
		}
		
		
		// --------------------------------------------------
		// INITIAL LAYOUT
		// --------------------------------------------------
		
		layoutBottomBar();
		
		
		// --------------------------------------------------
		// START COUNTDOWN
		// --------------------------------------------------
		
		startCountdown();
		
		
		// --------------------------------------------------
		// RESPONSIVE LAYOUT UPDATE
		// --------------------------------------------------
		
		createjs.Ticker.addEventListener(
		    "tick",
		    layoutBottomBar
		);
		
		
		// --------------------------------------------------
		// LOAD THE SAVED TIMERS
		// --------------------------------------------------
		
		function connectSave() {
		
		    // Re-reads timers when the save loads,
		    // player changes, or save is imported.
		
		    SaveSystem.onChange(
		        "bottomBar",
		        function (name) {
		
		            if (
		                !name ||
		                name === "eggEndTimes"
		            ) {
		
		                readTimers();
		            }
		        }
		    );
		
		
		    if (SaveSystem.isLoaded()) {
		
		        readTimers();
		
		    } else {
		
		        SaveSystem.load();
		    }
		}
		
		
		// --------------------------------------------------
		// WAIT FOR SAVE SYSTEM
		// --------------------------------------------------
		
		var saveWaitTicks = 0;
		
		function waitForSave() {
		
		    if (window.SaveSystem) {
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            waitForSave
		        );
		
		        connectSave();
		
		        return;
		    }
		
		
		    if (++saveWaitTicks > 120) {
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            waitForSave
		        );
		    }
		}
		
		
		if (window.SaveSystem) {
		
		    connectSave();
		
		} else {
		
		    createjs.Ticker.addEventListener(
		        "tick",
		        waitForSave
		    );
		}
		
		
		// --------------------------------------------------
		// CLEANUP
		// --------------------------------------------------
		
		self.cleanupBottomBar =
		    function () {
		
		        clearInterval(
		            countdownTimer
		        );
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            layoutBottomBar
		        );
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            waitForSave
		        );
		
		
		        // Stop listening while this screen is gone
		        if (window.SaveSystem) {
		
		            SaveSystem.onChange(
		                "bottomBar",
		                function () {}
		            );
		        }
		
		
		        self.removeChild(
		            bottomBar
		        );
		
		        self.removeChild(
		            pageDots
		        );
		
		
		        self.cleanupBottomBar =
		            null;
		    };
	}
	this.frame_2 = function() {
		this.stop();
		
		(function (self) {
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		    var portrait = H > W;
		
		
		    // --------------------------------------------------
		    // CLEAN UP PREVIOUS HATCHERY UI
		    // --------------------------------------------------
		
		    function cleanupPreviousHatcheryUI() {
		
		        // Bottom hatch timer bar
		        if (self.cleanupBottomBar) {
		            self.cleanupBottomBar();
		        }
		
		
		        // Monster cards/buttons
		        if (self.cleanupCards) {
		            self.cleanupCards();
		        }
		
		
		        // Hatchery-specific UI
		        if (self.cleanupHatchery) {
		            self.cleanupHatchery();
		        }
		
		
		        // Monster card UI
		        if (self.cleanupMonsterCards) {
		            self.cleanupMonsterCards();
		        }
		
		
		        // General hatchery UI
		        if (self.cleanupHatcheryUI) {
		            self.cleanupHatcheryUI();
		        }
		    }
		
		
		    // Run this BEFORE creating the egg-discovery UI.
		    cleanupPreviousHatcheryUI();
		
		
		    // --------------------------------------------------
		    // SETTINGS
		    // --------------------------------------------------
		
		    var EGG_SPECIES =
		        window.EGG_SPECIES || [];
		
		
		    if (!EGG_SPECIES.length) {
		
		        console.error(
		            "EGG_SPECIES is empty. Check that the egg groups file ran before this frame."
		        );
		    }
		
		
		    // Grid
		    var COLUMNS =
		        portrait ? 2 : 4;
		
		    var PER_PAGE =
		        36;
		
		    var TOTAL_EGGS =
		        EGG_SPECIES.length;
		
		
		    // Leave room for the top bar
		    var RESERVE_TOP_BAR =
		        true;
		
		
		    // Layout
		    var MAX_CONTENT_WIDTH =
		        1200;
		
		    var SIDE_MARGIN =
		        portrait ? 24 : 40;
		
		    var CARD_GAP =
		        portrait ? 14 : 24;
		
		
		    // Header
		    var HEADER_HEIGHT =
		        portrait ? 84 : 72;
		
		    var TITLE_SIZE =
		        portrait ? 34 : 30;
		
		    var COUNT_SIZE =
		        portrait ? 22 : 18;
		
		
		    var TITLE_COLOR =
		        "#dbeaf5";
		
		    var COUNT_COLOR =
		        "#8DBBD1";
		
		
		    // Dividing line
		    var LINE_COLOR =
		        "#8fd8ff";
		
		    var LINE_ALPHA =
		        0.75;
		
		    var LINE_THICKNESS =
		        2;
		
		
		    // Space above/below cards
		    var SCROLL_PAD_TOP =
		        20;
		
		    var SCROLL_PAD_BOTTOM =
		        40;
		
		
		    // Scrolling
		    var DRAG_THRESHOLD =
		        10;
		
		    var FRICTION =
		        0.92;
		
		
		    // Undiscovered
		    var EMPTY_TYPE =
		        "UNDISCOVERED";
		
		    var EMPTY_NAME =
		        "???";
		
		
		    // No type
		    var NO_TYPE =
		        "NONE";
		
		
		    var TYPE_SEPARATOR =
		        " \u00B7 ";
		
		
		    var GUARDING_FONT_FAMILY =
		        "'DM Sans'";
		
		
		    var OWNED_LABEL =
		        "Owned: ";
		
		
		    var SAVE_LISTENER_ID =
		        "eggsMenu";
		
		
		    // --------------------------------------------------
		    // MAIN GAME FRAME
		    // --------------------------------------------------
		
		    var GAME_LABEL =
		        "game";
		
		
		    // Title while choosing an egg
		    var PICK_TITLE =
		        "Choose an egg";
		
		
		    // --------------------------------------------------
		    // DATA
		    // --------------------------------------------------
		
		    var eggData = [];
		    var ownedCount = [];
		
		
		    for (
		        var d = 0;
		        d < TOTAL_EGGS;
		        d++
		    ) {
		
		        eggData.push(null);
		        ownedCount.push(0);
		    }
		
		
		    var currentPage =
		        0;
		
		
		    // --------------------------------------------------
		    // CONTAINERS
		    // --------------------------------------------------
		
		    var eggsViewport =
		        new createjs.Container();
		
		
		    self.addChild(
		        eggsViewport
		    );
		
		
		    var scrollHit =
		        new createjs.Shape();
		
		
		    eggsViewport.addChild(
		        scrollHit
		    );
		
		
		    var eggsContent =
		        new createjs.Container();
		
		
		    eggsViewport.addChild(
		        eggsContent
		    );
		
		
		    var viewMask =
		        new createjs.Shape();
		
		
		    eggsViewport.mask =
		        viewMask;
		
		
		    // --------------------------------------------------
		    // HEADER
		    // --------------------------------------------------
		
		    var eggsHeader =
		        new createjs.Container();
		
		
		    self.addChild(
		        eggsHeader
		    );
		
		
		    var titleText =
		        new createjs.Text(
		            "Eggs discovered",
		            "30px 'Marcellus'",
		            TITLE_COLOR
		        );
		
		
		    titleText.textAlign =
		        "left";
		
		
		    titleText.textBaseline =
		        "middle";
		
		
		    eggsHeader.addChild(
		        titleText
		    );
		
		
		    var countText =
		        new createjs.Text(
		            "0 unique eggs",
		            "bold 18px 'DM Sans'",
		            COUNT_COLOR
		        );
		
		
		    countText.textAlign =
		        "right";
		
		
		    countText.textBaseline =
		        "middle";
		
		
		    eggsHeader.addChild(
		        countText
		    );
		
		
		    var headerLine =
		        new createjs.Shape();
		
		
		    eggsHeader.addChild(
		        headerLine
		    );
		
		
		    // --------------------------------------------------
		    // STATE
		    // --------------------------------------------------
		
		    var cards = [];
		
		
		    var viewTop =
		        0;
		
		
		    var maxScroll =
		        0;
		
		
		    var scrollY =
		        0;
		
		
		    var dragging =
		        false;
		
		
		    var dragMoved =
		        false;
		
		
		    var dragStartY =
		        0;
		
		
		    var dragStartScroll =
		        0;
		
		
		    var lastY =
		        0;
		
		
		    var lastTime =
		        0;
		
		
		    var velocity =
		        0;
		
		
		    // --------------------------------------------------
		    // HEADER COUNT
		    // --------------------------------------------------
		
		    function countDiscovered() {
		
		        var n =
		            0;
		
		
		        for (
		            var i = 0;
		            i < eggData.length;
		            i++
		        ) {
		
		            if (eggData[i]) {
		                n++;
		            }
		        }
		
		
		        return n;
		    }
		
		
		    function updateDiscoveredText() {
		
		        var n =
		            countDiscovered();
		
		
		        countText.text =
		            n +
		            (
		                n === 1
		                    ? " unique egg"
		                    : " unique eggs"
		            );
		    }
		
		
		    // --------------------------------------------------
		    // CARD TEXT + EGG IMAGE
		    // --------------------------------------------------
		
		    function applyCardText(card) {
		
		        var data =
		            eggData[
		                card.eggIndex
		            ];
		
		
		        // --------------------------------------------------
		        // EGG IMAGE
		        // --------------------------------------------------
		        //
		        // Each MonsterContainer now has an instance named
		        // "egg".
		        //
		        // If the species has NOT been discovered:
		        //     hide the egg.
		        //
		        // If the species HAS been discovered:
		        //     show the egg and go to the frame whose label
		        //     matches the monster/egg name.
		        //
		
		        if (card.egg) {
		
		            if (!data) {
		
		                // Undiscovered
		                card.egg.visible =
		                    false;
		
		            } else {
		
		                // Discovered
		                card.egg.visible =
		                    true;
		
		
		                // The frame label must match the egg name.
		                card.egg.gotoAndStop(
		                    data.name
		                );
		            }
		        }
		
		
		        // --------------------------------------------------
		        // TYPE
		        // --------------------------------------------------
		
		        if (card.type) {
		
		            card.type.text =
		                data
		                    ? typeLabel(data)
		                    : EMPTY_TYPE;
		        }
		
		
		        // --------------------------------------------------
		        // MONSTER NAME
		        // --------------------------------------------------
		
		        if (card.MonsterName) {
		
		            card.MonsterName.text =
		                data
		                    ? data.name
		                    : EMPTY_NAME;
		        }
		
		
		        // --------------------------------------------------
		        // OWNED COUNT
		        // --------------------------------------------------
		
		        if (card.guarding) {
		
		            var sizeAndStyle =
		                /^(.*?\d+(?:\.\d+)?px)\s/.exec(
		                    card.guarding.font || ""
		                );
		
		
		            if (sizeAndStyle) {
		
		                card.guarding.font =
		                    sizeAndStyle[1] +
		                    " " +
		                    GUARDING_FONT_FAMILY;
		            }
		
		
		            card.guarding.text =
		                data
		                    ? OWNED_LABEL +
		                      ownedCount[
		                          card.eggIndex
		                      ]
		                    : "";
		        }
		
		
		        // --------------------------------------------------
		        // CACHE
		        // --------------------------------------------------
		
		        if (card.cacheCanvas) {
		
		            card.updateCache();
		        }
		    }
		
		
		    // --------------------------------------------------
		    // TYPE LABEL
		    // --------------------------------------------------
		
		    function typeLabel(data) {
		
		        var types = [];
		
		
		        if (data.type1) {
		
		            types.push(
		                data.type1
		            );
		        }
		
		
		        if (data.type2) {
		
		            types.push(
		                data.type2
		            );
		        }
		
		
		        if (!types.length) {
		
		            return NO_TYPE;
		        }
		
		
		        return types.join(
		            TYPE_SEPARATOR
		        ).toUpperCase();
		    }
		
		
		    // --------------------------------------------------
		    // SAVE SYNC
		    // --------------------------------------------------
		
		    function syncFromSave() {
		
		        var found =
		            SaveSystem.get(
		                "discovered"
		            );
		
		
		        var owned =
		            SaveSystem.get(
		                "eggs"
		            );
		
		
		        if (!Array.isArray(found)) {
		
		            found = [];
		        }
		
		
		        if (!Array.isArray(owned)) {
		
		            owned = [];
		        }
		
		
		        for (
		            var i = 0;
		            i < TOTAL_EGGS;
		            i++
		        ) {
		
		            var species =
		                EGG_SPECIES[i];
		
		
		            // --------------------------------------------------
		            // DISCOVERED DATA
		            // --------------------------------------------------
		
		            eggData[i] =
		                (
		                    species &&
		                    found.indexOf(
		                        species.monsterId
		                    ) >= 0
		                )
		                    ? {
		
		                        type1:
		                            species.type1,
		
		                        type2:
		                            species.type2,
		
		                        name:
		                            species.name
		                    }
		                    : null;
		
		
		            // --------------------------------------------------
		            // OWNED COUNT
		            // --------------------------------------------------
		
		            var n =
		                0;
		
		
		            for (
		                var o = 0;
		                o < owned.length;
		                o++
		            ) {
		
		                if (
		                    species &&
		                    owned[o] ===
		                    species.monsterId
		                ) {
		
		                    n++;
		                }
		            }
		
		
		            ownedCount[i] =
		                n;
		        }
		
		
		        updateDiscoveredText();
		
		
		        // Update every visible card
		        for (
		            var c = 0;
		            c < cards.length;
		            c++
		        ) {
		
		            applyCardText(
		                cards[c]
		            );
		        }
		    }
		
		
		    // --------------------------------------------------
		    // CLEAR CARDS
		    // --------------------------------------------------
		
		    function clearCards() {
		
		        for (
		            var i = 0;
		            i < cards.length;
		            i++
		        ) {
		
		            cards[i]
		                .removeAllEventListeners();
		
		
		            eggsContent.removeChild(
		                cards[i]
		            );
		        }
		
		
		        cards = [];
		    }
		
		
		    // --------------------------------------------------
		    // EGG CARD CLICK
		    // --------------------------------------------------
		
		    function onEggCardClick(evt) {
		
		        if (dragMoved) {
		
		            return;
		        }
		
		
		        var card =
		            evt.currentTarget;
		
		
		        var species =
		            EGG_SPECIES[
		                card.eggIndex
		            ];
		
		
		        var placement =
		            window.EggPlacement;
		
		
		        if (
		            !placement ||
		            !placement.active
		        ) {
		
		            return;
		        }
		
		
		        // --------------------------------------------------
		        // MAKE SURE PLAYER OWNS THIS EGG
		        // --------------------------------------------------
		
		        if (
		            ownedCount[
		                card.eggIndex
		            ] < 1
		        ) {
		
		            console.log(
		                "No",
		                species.name,
		                "egg owned, can't place it."
		            );
		
		            return;
		        }
		
		
		        // --------------------------------------------------
		        // CREATE EGG DATA
		        // --------------------------------------------------
		
		        if (!window.createEggFromId) {
		
		            console.error(
		                "createEggFromId not found. Add it to the bottom of the egg groups file."
		            );
		
		            return;
		        }
		
		
		        var newEgg =
		            window.createEggFromId(
		                species.monsterId
		            );
		
		
		        if (!newEgg) {
		
		            return;
		        }
		
		
		        // --------------------------------------------------
		        // HATCH TIME
		        // --------------------------------------------------
		
		        var endTime =
		            Date.now() +
		            newEgg.maxHatchTime *
		            1000;
		
		
		        // --------------------------------------------------
		        // SAVE EGG TO SLOT
		        // --------------------------------------------------
		
		        var placed =
		            SaveSystem.placeEgg(
		                placement.slot,
		                species.monsterId,
		                endTime
		            );
		
		
		        if (!placed) {
		
		            console.warn(
		                "Could not place the egg in slot",
		                placement.slot
		            );
		
		            return;
		        }
		
		
		        // --------------------------------------------------
		        // PLACEMENT COMPLETE
		        // --------------------------------------------------
		
		        placement.active =
		            false;
		
		
		        // --------------------------------------------------
		        // CLEAN UP EGG MENU
		        // --------------------------------------------------
		
		        if (self.cleanupEggs) {
		
		            self.cleanupEggs();
		        }
		
		
		        // --------------------------------------------------
		        // CLEAN UP OLD HATCHERY UI
		        // --------------------------------------------------
		
		        cleanupPreviousHatcheryUI();
		
		
		        // --------------------------------------------------
		        // RETURN TO MAIN GAME
		        // --------------------------------------------------
		
		        self.gotoAndStop(
		            GAME_LABEL
		        );
		    }
		
		
		    // --------------------------------------------------
		    // BUILD PAGE
		    // --------------------------------------------------
		
		    function buildPage(page) {
		
		        if (!lib.MonsterContainer) {
		
		            console.error(
		                "MonsterContainer not found. Check AS Linkage on the symbol."
		            );
		
		            return;
		        }
		
		
		        clearCards();
		
		
		        currentPage =
		            page;
		
		
		        var start =
		            page * PER_PAGE;
		
		
		        var end =
		            Math.min(
		                start + PER_PAGE,
		                TOTAL_EGGS
		            );
		
		
		        for (
		            var i = start;
		            i < end;
		            i++
		        ) {
		
		            var card =
		                new lib.MonsterContainer();
		
		
		            card.eggIndex =
		                i;
		
		
		            card.cursor =
		                "pointer";
		
		
		            card.addEventListener(
		                "click",
		                onEggCardClick
		            );
		
		
		            eggsContent.addChild(
		                card
		            );
		
		
		            cards.push(
		                card
		            );
		
		
		            applyCardText(
		                card
		            );
		        }
		
		
		        layoutEggs();
		
		
		        setScroll(0);
		    }
		
		
		    // --------------------------------------------------
		    // SCROLLING
		    // --------------------------------------------------
		
		    function setScroll(y) {
		
		        scrollY =
		            Math.max(
		                0,
		                Math.min(
		                    maxScroll,
		                    y
		                )
		            );
		
		
		        eggsContent.y =
		            viewTop -
		            scrollY;
		    }
		
		
		    function onPress(evt) {
		
		        dragging =
		            true;
		
		
		        dragMoved =
		            false;
		
		
		        velocity =
		            0;
		
		
		        dragStartY =
		            evt.stageY;
		
		
		        dragStartScroll =
		            scrollY;
		
		
		        lastY =
		            evt.stageY;
		
		
		        lastTime =
		            Date.now();
		    }
		
		
		    function onDragMove(evt) {
		
		        if (!dragging) {
		
		            return;
		        }
		
		
		        var y =
		            evt.stageY;
		
		
		        if (!dragMoved) {
		
		            if (
		                Math.abs(
		                    y -
		                    dragStartY
		                ) <= DRAG_THRESHOLD
		            ) {
		
		                return;
		            }
		
		
		            dragMoved =
		                true;
		
		
		            dragStartY =
		                y;
		
		
		            dragStartScroll =
		                scrollY;
		
		
		            lastY =
		                y;
		
		
		            lastTime =
		                Date.now();
		
		
		            return;
		        }
		
		
		        setScroll(
		            dragStartScroll -
		            (
		                y -
		                dragStartY
		            )
		        );
		
		
		        var now =
		            Date.now();
		
		
		        var dt =
		            now -
		            lastTime;
		
		
		        if (dt > 0) {
		
		            velocity =
		                velocity * 0.6 +
		                (
		                    (
		                        lastY -
		                        y
		                    ) /
		                    dt
		                ) * 0.4;
		
		
		            lastY =
		                y;
		
		
		            lastTime =
		                now;
		        }
		    }
		
		
		    function onRelease() {
		
		        if (!dragging) {
		
		            return;
		        }
		
		
		        dragging =
		            false;
		
		
		        if (
		            Date.now() -
		            lastTime > 100
		        ) {
		
		            velocity =
		                0;
		        }
		    }
		
		
		    function scrollTick(evt) {
		
		        if (dragging) {
		
		            return;
		        }
		
		
		        if (
		            Math.abs(
		                velocity
		            ) < 0.01
		        ) {
		
		            velocity =
		                0;
		
		            return;
		        }
		
		
		        setScroll(
		            scrollY +
		            velocity *
		            evt.delta
		        );
		
		
		        velocity *=
		            Math.pow(
		                FRICTION,
		                evt.delta / 16.67
		            );
		
		
		        if (
		            scrollY <= 0 ||
		            scrollY >= maxScroll
		        ) {
		
		            velocity =
		                0;
		        }
		    }
		
		
		    // --------------------------------------------------
		    // MOUSE WHEEL
		    // --------------------------------------------------
		
		    var canvas =
		        self.stage
		            ? self.stage.canvas
		            : null;
		
		
		    function onWheel(e) {
		
		        e.preventDefault();
		
		
		        velocity =
		            0;
		
		
		        var unitsPerPixel =
		            canvas &&
		            canvas.clientWidth
		                ? W /
		                  canvas.clientWidth
		                : 1;
		
		
		        var amount =
		            e.deltaY *
		            (
		                e.deltaMode === 1
		                    ? 20
		                    : 1
		            ) *
		            unitsPerPixel;
		
		
		        setScroll(
		            scrollY +
		            amount
		        );
		    }
		
		
		    // --------------------------------------------------
		    // LAYOUT
		    // --------------------------------------------------
		
		    function layoutEggs() {
		
		        var topOffset =
		            RESERVE_TOP_BAR
		                ? (
		                    portrait
		                        ? Math.max(
		                            82,
		                            H * 0.11
		                        )
		                        : Math.max(
		                            66,
		                            H * 0.09
		                        )
		                )
		                : 0;
		
		
		        var contentW =
		            Math.min(
		                W -
		                SIDE_MARGIN * 2,
		                MAX_CONTENT_WIDTH
		            );
		
		
		        var contentLeft =
		            (
		                W -
		                contentW
		            ) / 2;
		
		
		        // --------------------------------------------------
		        // HEADER
		        // --------------------------------------------------
		
		        var headerMiddle =
		            topOffset +
		            HEADER_HEIGHT / 2;
		
		
		        var lineY =
		            topOffset +
		            HEADER_HEIGHT;
		
		
		        titleText.font =
		            TITLE_SIZE +
		            "px 'Marcellus'";
		
		
		        titleText.x =
		            contentLeft;
		
		
		        titleText.y =
		            headerMiddle;
		
		
		        countText.font =
		            "bold " +
		            COUNT_SIZE +
		            "px 'DM Sans'";
		
		
		        countText.x =
		            contentLeft +
		            contentW;
		
		
		        countText.y =
		            headerMiddle;
		
		
		        headerLine.graphics.clear();
		
		
		        headerLine.graphics
		            .beginFill(
		                LINE_COLOR
		            )
		            .drawRect(
		                contentLeft,
		                lineY,
		                contentW,
		                LINE_THICKNESS
		            );
		
		
		        headerLine.alpha =
		            LINE_ALPHA;
		
		
		        updateDiscoveredText();
		
		
		        // --------------------------------------------------
		        // SCROLLING AREA
		        // --------------------------------------------------
		
		        viewTop =
		            lineY +
		            LINE_THICKNESS;
		
		
		        var viewH =
		            H -
		            viewTop;
		
		
		        viewMask.graphics.clear();
		
		
		        viewMask.graphics
		            .beginFill(
		                "#000"
		            )
		            .drawRect(
		                0,
		                viewTop,
		                W,
		                viewH
		            );
		
		
		        scrollHit.graphics.clear();
		
		
		        scrollHit.graphics
		            .beginFill(
		                "rgba(0, 0, 0, 0.02)"
		            )
		            .drawRect(
		                0,
		                viewTop,
		                W,
		                viewH
		            );
		
		
		        // --------------------------------------------------
		        // CARDS
		        // --------------------------------------------------
		
		        if (!cards.length) {
		
		            maxScroll =
		                0;
		
		
		            setScroll(0);
		
		
		            return;
		        }
		
		
		        var b =
		            cards[0]
		                .nominalBounds;
		
		
		        var cardW =
		            (
		                contentW -
		                CARD_GAP *
		                (
		                    COLUMNS -
		                    1
		                )
		            ) /
		            COLUMNS;
		
		
		        var scale =
		            cardW /
		            b.width;
		
		
		        var cardH =
		            b.height *
		            scale;
		
		
		        var rows =
		            Math.ceil(
		                cards.length /
		                COLUMNS
		            );
		
		
		        var cacheScale =
		            scale *
		            Math.max(
		                1,
		                Math.min(
		                    2,
		                    window.devicePixelRatio ||
		                    1
		                )
		            );
		
		
		        for (
		            var i = 0;
		            i < cards.length;
		            i++
		        ) {
		
		            var col =
		                i %
		                COLUMNS;
		
		
		            var row =
		                Math.floor(
		                    i /
		                    COLUMNS
		                );
		
		
		            var left =
		                contentLeft +
		                col *
		                (
		                    cardW +
		                    CARD_GAP
		                );
		
		
		            var top =
		                SCROLL_PAD_TOP +
		                row *
		                (
		                    cardH +
		                    CARD_GAP
		                );
		
		
		            var c =
		                cards[i];
		
		
		            c.scaleX =
		                scale;
		
		
		            c.scaleY =
		                scale;
		
		
		            c.x =
		                left -
		                b.x *
		                scale;
		
		
		            c.y =
		                top -
		                b.y *
		                scale;
		
		
		            c.cache(
		                b.x,
		                b.y,
		                b.width,
		                b.height,
		                cacheScale
		            );
		        }
		
		
		        var contentH =
		            SCROLL_PAD_TOP +
		            rows *
		            cardH +
		            (
		                rows -
		                1
		            ) *
		            CARD_GAP +
		            SCROLL_PAD_BOTTOM;
		
		
		        maxScroll =
		            Math.max(
		                0,
		                contentH -
		                viewH
		            );
		
		
		        setScroll(
		            scrollY
		        );
		    }
		
		
		    // --------------------------------------------------
		    // PUBLIC FUNCTIONS
		    // --------------------------------------------------
		
		    self.showEggPage =
		        buildPage;
		
		
		    self.refreshEggs =
		        syncFromSave;
		
		
		    // --------------------------------------------------
		    // EVENTS
		    // --------------------------------------------------
		
		    eggsViewport.on(
		        "mousedown",
		        onPress
		    );
		
		
		    eggsViewport.on(
		        "pressmove",
		        onDragMove
		    );
		
		
		    eggsViewport.on(
		        "pressup",
		        onRelease
		    );
		
		
		    createjs.Ticker.addEventListener(
		        "tick",
		        scrollTick
		    );
		
		
		    if (canvas) {
		
		        canvas.addEventListener(
		            "wheel",
		            onWheel,
		            {
		                passive: false
		            }
		        );
		    }
		
		
		    if (self.stage) {
		
		        createjs.Touch.enable(
		            self.stage
		        );
		
		
		        self.stage.mouseMoveOutside =
		            true;
		    }
		
		
		    // --------------------------------------------------
		    // CLEANUP
		    // --------------------------------------------------
		
		    self.cleanupEggs =
		        function () {
		
		            createjs.Ticker
		                .removeEventListener(
		                    "tick",
		                    scrollTick
		                );
		
		
		            if (canvas) {
		
		                canvas.removeEventListener(
		                    "wheel",
		                    onWheel
		                );
		            }
		
		
		            SaveSystem.onChange(
		                SAVE_LISTENER_ID,
		                function () {}
		            );
		
		
		            if (window.EggPlacement) {
		
		                window.EggPlacement.active =
		                    false;
		            }
		
		
		            clearCards();
		
		
		            eggsViewport
		                .removeAllEventListeners();
		
		
		            self.removeChild(
		                eggsViewport
		            );
		
		
		            self.removeChild(
		                eggsHeader
		            );
		
		
		            self.showEggPage =
		                null;
		
		
		            self.refreshEggs =
		                null;
		
		
		            self.cleanupEggs =
		                null;
		        };
		
		
		    // --------------------------------------------------
		    // START
		    // --------------------------------------------------
		
		    buildPage(0);
		
		
		    if (
		        window.EggPlacement &&
		        window.EggPlacement.active
		    ) {
		
		        titleText.text =
		            PICK_TITLE;
		    }
		
		
		    SaveSystem.onChange(
		        SAVE_LISTENER_ID,
		        function (name) {
		
		            if (
		                name === null ||
		                name === "eggs" ||
		                name === "discovered"
		            ) {
		
		                syncFromSave();
		            }
		        }
		    );
		
		
		    if (
		        SaveSystem.isLoaded()
		    ) {
		
		        syncFromSave();
		
		    } else {
		
		        SaveSystem
		            .load()
		            .then(
		                syncFromSave
		            );
		    }
		
		})(this);
	}
	this.frame_3 = function() {
		this.stop();
		
		(function (self) {
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		    var portrait = H > W;
		
		    // --------------------------------------------------
		    // CLEAN UP THE HOME SCREEN UI
		    // --------------------------------------------------
		
		    if (self.cleanupBottomBar) self.cleanupBottomBar();
		    if (self.cleanupCards) self.cleanupCards();
		    if (self.cleanupEggNavigation) self.cleanupEggNavigation();
		    if (self.cleanupEggs) self.cleanupEggs();
		
		    var eggUi = self.egg || null;
		    var eggWasVisible = eggUi ? eggUi.visible : true;
		
		    if (eggUi) eggUi.visible = false;
		
		    // --------------------------------------------------
		    // SETTINGS
		    // --------------------------------------------------
		
		    var COLUMNS = portrait ? 2 : 4;
		    var RESERVE_TOP_BAR = true;
		    var MAX_CONTENT_WIDTH = 1200;
		    var SIDE_MARGIN = portrait ? 24 : 40;
		    var CARD_GAP = portrait ? 14 : 24;
		
		    var HEADER_HEIGHT = portrait ? 84 : 72;
		    var TITLE_SIZE = portrait ? 34 : 30;
		    var COUNT_SIZE = portrait ? 22 : 18;
		
		    var TITLE_COLOR = "#dbeaf5";
		    var COUNT_COLOR = "#8DBBD1";
		
		    var LINE_COLOR = "#8fd8ff";
		    var LINE_ALPHA = 0.75;
		    var LINE_THICKNESS = 2;
		
		    var SCROLL_PAD_TOP = 20;
		    var SCROLL_PAD_BOTTOM = 40;
		
		    var DRAG_THRESHOLD = 10;
		    var FRICTION = 0.92;
		
		    var BROWSE_TITLE = "Your monsters";
		    var PICK_TITLE = "Choose a monster";
		    var SELL_TITLE = "Select monsters to sell";
		    var EXPORT_TITLE = "Select monsters to export";
		    var EMPTY_TEXT = "No monsters yet";
		
		    var NO_TYPE = "NONE";
		    var SEPARATOR = " \u00B7 ";
		    var FONT_FAMILY = "'DM Sans'";
		    var LISTENER_ID = "monstersMenu";
		    var GAME_LABEL = "game";
		
		    var ART_CLIP = "egg";
		    var ART_FRAME = 1;
		
		    var HOVER_SCALE = 0.96;
		    var PRESS_SCALE = 0.90;
		    var REACT_TIME = 120;
		
		    var canHover = !!(
		        window.matchMedia &&
		        window.matchMedia("(hover: hover)").matches
		    );
		
		    // --------------------------------------------------
		    // BOTTOM BAR
		    // --------------------------------------------------
		
		    var BTN_H = portrait ? 76 : 48;
		    var BTN_PAD = portrait ? 22 : 16;
		    var BTN_GAP = portrait ? 16 : 14;
		    var BAR_H = BTN_H + BTN_PAD * 2;
		
		    var BTN_FILL = "#173b5d";
		    var BTN_FILL_LIT = "#1d5381";
		    var BTN_STROKE = "#527896";
		    var BTN_STROKE_LIT = "#8fd8ff";
		    var BTN_TEXT = "#cfe6f5";
		    var BTN_TEXT_LIT = "#ffffff";
		
		    // --------------------------------------------------
		    // SELL SETTINGS
		    // --------------------------------------------------
		
		    var SELL_STAT_RATE = 0.05;
		    var SELL_LEVEL_BONUS = 5;
		    var SELL_MIN = 1;
		
		    // --------------------------------------------------
		    // CONTAINERS
		    // --------------------------------------------------
		
		    var viewport = new createjs.Container();
		    self.addChild(viewport);
		
		    var scrollHit = new createjs.Shape();
		    viewport.addChild(scrollHit);
		
		    var content = new createjs.Container();
		    viewport.addChild(content);
		
		    var viewMask = new createjs.Shape();
		    viewport.mask = viewMask;
		
		    var header = new createjs.Container();
		    self.addChild(header);
		
		    var titleText = new createjs.Text(
		        BROWSE_TITLE,
		        "30px 'Marcellus'",
		        TITLE_COLOR
		    );
		
		    titleText.textAlign = "left";
		    titleText.textBaseline = "middle";
		    header.addChild(titleText);
		
		    var countText = new createjs.Text(
		        "0 monsters",
		        "bold 18px 'DM Sans'",
		        COUNT_COLOR
		    );
		
		    countText.textAlign = "right";
		    countText.textBaseline = "middle";
		    header.addChild(countText);
		
		    var headerLine = new createjs.Shape();
		    header.addChild(headerLine);
		
		    var emptyText = new createjs.Text(
		        EMPTY_TEXT,
		        "bold 22px 'DM Sans'",
		        COUNT_COLOR
		    );
		
		    emptyText.textAlign = "center";
		    emptyText.textBaseline = "middle";
		    emptyText.visible = false;
		    header.addChild(emptyText);
		
		    // --------------------------------------------------
		    // STATE
		    // --------------------------------------------------
		
		    var cards = [];
		    var entries = [];
		    var destroyed = false;
		
		    var viewTop = 0;
		    var maxScroll = 0;
		    var scrollY = 0;
		
		    var dragging = false;
		    var dragMoved = false;
		    var dragStartY = 0;
		    var dragStartScroll = 0;
		    var lastY = 0;
		    var lastTime = 0;
		    var velocity = 0;
		
		    var pressedObj = null;
		
		    var pickMode = "";
		    var selected = {};
		
		    var dialogOpen = false;
		    var dialogKind = "";
		
		    var exportFree = 0;
		    var exportLimit = 6;
		    var exportBusy = false;
		    var exportBusyText = "Sending...";
		
		    function placementActive() {
		        return !!(
		            window.MonsterPlacement &&
		            window.MonsterPlacement.active
		        );
		    }
		
		    function formatAmount(n) {
		        return Number(n).toLocaleString("en-US");
		    }
		
		    function speciesOf(monsterId) {
		        if (typeof Monster === "undefined") {
		            return null;
		        }
		
		        return (
		            (Monster.BY_ID && Monster.BY_ID[monsterId]) ||
		            (Monster.registry && Monster.registry[monsterId]) ||
		            null
		        );
		    }
		
		    // --------------------------------------------------
		    // BUTTON REACTIONS
		    // --------------------------------------------------
		
		    function applyReact(o) {
		        if (o.reactBase === undefined) return;
		
		        var s = o.reactBase * o.reactF;
		
		        o.scaleX = s;
		        o.scaleY = s;
		
		        o.x = o.reactCx - (o.reactLocalCx - o.regX) * s;
		        o.y = o.reactCy - (o.reactLocalCy - o.regY) * s;
		    }
		
		    function placeReactive(o, base, cx, cy, localCx, localCy) {
		        o.reactBase = base;
		        o.reactCx = cx;
		        o.reactCy = cy;
		        o.reactLocalCx = localCx;
		        o.reactLocalCy = localCy;
		
		        if (o.reactF === undefined) o.reactF = 1;
		
		        applyReact(o);
		    }
		
		    function reactTo(o, f) {
		        createjs.Tween.get(o, {
		            override: true,
		            onChange: function () {
		                applyReact(o);
		            }
		        }).to(
		            { reactF: f },
		            REACT_TIME,
		            createjs.Ease.quadOut
		        );
		    }
		
		    function refreshReact(o) {
		        var f = 1;
		
		        if (!o.reactOff) {
		            if (o.pressed) {
		                f = PRESS_SCALE;
		            } else if (o.hovered) {
		                f = HOVER_SCALE;
		            }
		        }
		
		        reactTo(o, f);
		
		        if (o.onLit) {
		            o.onLit(o.hovered || o.pressed);
		        }
		    }
		
		    function wireReactions(o) {
		        o.reactF = 1;
		        o.hovered = false;
		        o.pressed = false;
		
		        if (canHover) {
		            o.on("rollover", function () {
		                o.hovered = true;
		                refreshReact(o);
		            });
		
		            o.on("rollout", function () {
		                o.hovered = false;
		                refreshReact(o);
		            });
		        }
		
		        o.on("mousedown", function () {
		            o.pressed = true;
		            pressedObj = o;
		            refreshReact(o);
		        });
		
		        o.on("pressup", function () {
		            o.pressed = false;
		
		            if (pressedObj === o) {
		                pressedObj = null;
		            }
		
		            refreshReact(o);
		        });
		    }
		
		    // --------------------------------------------------
		    // CRYST ICON
		    // --------------------------------------------------
		
		    function makeCrystIcon() {
		        var holder = new createjs.Container();
		
		        holder.mouseEnabled = false;
		        holder.mouseChildren = false;
		
		        if (lib.Cryst) {
		            holder.icon = new lib.Cryst();
		            holder.addChild(holder.icon);
		        } else {
		            console.warn(
		                "Cryst not found. Check AS Linkage on the symbol."
		            );
		        }
		
		        return holder;
		    }
		
		    function sizeCrystIcon(holder, size) {
		        var icon = holder.icon;
		        if (!icon) return;
		
		        var b = icon.nominalBounds || icon.getBounds();
		        if (!b || !b.width || !b.height) return;
		
		        var s = Math.min(size / b.width, size / b.height);
		
		        icon.scaleX = s;
		        icon.scaleY = s;
		        icon.x = -(b.x + b.width / 2) * s;
		        icon.y = -(b.y + b.height / 2) * s;
		    }
		
		    // --------------------------------------------------
		    // BUTTONS
		    // --------------------------------------------------
		
		    function drawButton(b, lit) {
		        var radius = b.bh * 0.28;
		
		        b.bg.graphics.clear();
		
		        b.bg.graphics
		            .setStrokeStyle(lit ? 1.5 : 1)
		            .beginStroke(lit ? BTN_STROKE_LIT : BTN_STROKE)
		            .beginFill(lit ? BTN_FILL_LIT : BTN_FILL)
		            .drawRoundRect(0, 0, b.bw, b.bh, radius);
		
		        var textColor = lit ? BTN_TEXT_LIT : BTN_TEXT;
		
		        b.label.color = textColor;
		
		        if (b.amount) {
		            b.amount.color = textColor;
		        }
		    }
		
		    function makeButton(text) {
		        var b = new createjs.Container();
		
		        b.bw = 100;
		        b.bh = 40;
		        b.fs = 16;
		
		        b.bg = new createjs.Shape();
		
		        b.label = new createjs.Text(
		            text,
		            "bold 16px 'DM Sans'",
		            BTN_TEXT
		        );
		
		        b.label.textAlign = "left";
		        b.label.textBaseline = "middle";
		        b.label.mouseEnabled = false;
		
		        b.addChild(b.bg);
		        b.addChild(b.label);
		
		        b.cursor = "pointer";
		
		        b.onLit = function (lit) {
		            drawButton(b, lit);
		        };
		
		        wireReactions(b);
		
		        return b;
		    }
		
		    function centerLabel(b) {
		        b.label.x = (b.bw - b.label.getMeasuredWidth()) / 2;
		        b.label.y = b.bh / 2;
		    }
		
		    function sizeButton(b, w, h, fontSize) {
		        b.bw = w;
		        b.bh = h;
		        b.fs = fontSize;
		
		        b.regX = w / 2;
		        b.regY = h / 2;
		
		        b.label.font = "bold " + fontSize + "px 'DM Sans'";
		
		        if (b.amount) {
		            b.amount.font = "bold " + fontSize + "px 'DM Sans'";
		        }
		
		        var hit = new createjs.Shape();
		        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
		        b.hitArea = hit;
		
		        drawButton(b, b.hovered || b.pressed);
		        centerLabel(b);
		    }
		
		    // --------------------------------------------------
		    // ACTION BAR
		    // --------------------------------------------------
		
		    var actionBar = new createjs.Container();
		    self.addChild(actionBar);
		
		    var actionBg = new createjs.Shape();
		    actionBar.addChild(actionBg);
		
		    var sellBtn = makeButton("Sell");
		
		    sellBtn.iconHolder = makeCrystIcon();
		
		    sellBtn.amount = new createjs.Text(
		        "0",
		        "bold 16px 'DM Sans'",
		        BTN_TEXT
		    );
		
		    sellBtn.amount.textAlign = "left";
		    sellBtn.amount.textBaseline = "middle";
		    sellBtn.amount.mouseEnabled = false;
		    sellBtn.amount.visible = false;
		
		    sellBtn.addChild(sellBtn.iconHolder);
		    sellBtn.addChild(sellBtn.amount);
		    actionBar.addChild(sellBtn);
		
		    var exportBtn = makeButton("Export");
		    actionBar.addChild(exportBtn);
		
		    function layoutSellContent() {
		        var b = sellBtn;
		        var iconSize = b.fs * 1.4;
		        var gap = b.fs * 0.45;
		
		        var showIcon = b.iconHolder.visible;
		        var showAmount = b.amount.visible;
		        var labelW = b.label.getMeasuredWidth();
		
		        var total = labelW;
		
		        if (showIcon) total += gap + iconSize;
		        if (showAmount) total += gap * 0.6 + b.amount.getMeasuredWidth();
		
		        var x = (b.bw - total) / 2;
		
		        b.label.x = x;
		        b.label.y = b.bh / 2;
		
		        x += labelW;
		
		        if (showIcon) {
		            sizeCrystIcon(b.iconHolder, iconSize);
		
		            b.iconHolder.x = x + gap + iconSize / 2;
		            b.iconHolder.y = b.bh / 2;
		
		            x += gap + iconSize;
		        }
		
		        if (showAmount) {
		            b.amount.x = x + gap * 0.6;
		            b.amount.y = b.bh / 2;
		        }
		    }
		
		    // --------------------------------------------------
		    // CONFIRMATION DIALOG
		    // --------------------------------------------------
		
		    var dialog = new createjs.Container();
		    dialog.visible = false;
		    self.addChild(dialog);
		
		    var dim = new createjs.Shape();
		    dialog.addChild(dim);
		
		    var panel = new createjs.Shape();
		    dialog.addChild(panel);
		
		    var dialogTitle = new createjs.Text(
		        "Sell monsters?",
		        "30px 'Marcellus'",
		        TITLE_COLOR
		    );
		
		    dialogTitle.textAlign = "center";
		    dialogTitle.textBaseline = "middle";
		    dialog.addChild(dialogTitle);
		
		    var dialogBody = new createjs.Text(
		        "",
		        "bold 18px 'DM Sans'",
		        BTN_TEXT
		    );
		
		    dialogBody.textAlign = "center";
		    dialogBody.textBaseline = "middle";
		    dialog.addChild(dialogBody);
		
		    var rewardLabel = new createjs.Text(
		        "You will receive",
		        "bold 18px 'DM Sans'",
		        COUNT_COLOR
		    );
		
		    rewardLabel.textAlign = "left";
		    rewardLabel.textBaseline = "middle";
		    dialog.addChild(rewardLabel);
		
		    var rewardIcon = makeCrystIcon();
		    dialog.addChild(rewardIcon);
		
		    var rewardAmount = new createjs.Text(
		        "0",
		        "bold 18px 'DM Sans'",
		        "#ffffff"
		    );
		
		    rewardAmount.textAlign = "left";
		    rewardAmount.textBaseline = "middle";
		    dialog.addChild(rewardAmount);
		
		    var dialogNote = new createjs.Text(
		        "This can't be undone.",
		        "14px 'DM Sans'",
		        COUNT_COLOR
		    );
		
		    dialogNote.textAlign = "center";
		    dialogNote.textBaseline = "middle";
		    dialog.addChild(dialogNote);
		
		    var cancelBtn = makeButton("Cancel");
		    dialog.addChild(cancelBtn);
		
		    var confirmBtn = makeButton("Sell");
		    dialog.addChild(confirmBtn);
		
		    function layoutDialog() {
		        var kind = dialogKind;
		
		        var pw = portrait ? Math.min(W - 60, 640) : 480;
		        var ph = portrait ? 460 : 310;
		
		        var px = (W - pw) / 2;
		        var py = (H - ph) / 2;
		
		        var pad = portrait ? 32 : 24;
		
		        dim.graphics.clear();
		        dim.graphics
		            .beginFill("rgba(0, 0, 0, 0.62)")
		            .drawRect(0, 0, W, H);
		
		        panel.graphics.clear();
		        panel.graphics
		            .setStrokeStyle(1.5)
		            .beginStroke("#527896")
		            .beginLinearGradientFill(
		                ["#0d2f4d", "#071c31"],
		                [0, 1],
		                0, py,
		                0, py + ph
		            )
		            .drawRoundRect(px, py, pw, ph, portrait ? 30 : 18);
		
		        var fs = portrait ? 28 : 17;
		        var noteFs = portrait ? 22 : 14;
		        var textW = pw - pad * 2;
		
		        dialogTitle.font = (portrait ? 40 : 28) + "px 'Marcellus'";
		        dialogTitle.x = W / 2;
		        dialogTitle.y = py + ph * 0.17;
		
		        dialogBody.font = "bold " + fs + "px 'DM Sans'";
		        dialogBody.textBaseline = "top";
		        dialogBody.lineWidth = textW;
		        dialogBody.lineHeight = fs * 1.35;
		        dialogBody.x = W / 2;
		        dialogBody.y = py + ph * (kind === "notice" ? 0.34 : 0.30);
		
		        var showReward = kind === "sell";
		
		        rewardLabel.visible = showReward;
		        rewardIcon.visible = showReward;
		        rewardAmount.visible = showReward;
		
		        if (showReward) {
		            rewardLabel.font = "bold " + fs + "px 'DM Sans'";
		            rewardAmount.font = "bold " + fs + "px 'DM Sans'";
		
		            var iconSize = fs * 1.4;
		            var gap = fs * 0.5;
		
		            var rowW =
		                rewardLabel.getMeasuredWidth() +
		                gap +
		                iconSize +
		                gap * 0.6 +
		                rewardAmount.getMeasuredWidth();
		
		            var x = (W - rowW) / 2;
		            var rowY = py + ph * 0.51;
		
		            rewardLabel.x = x;
		            rewardLabel.y = rowY;
		
		            x += rewardLabel.getMeasuredWidth();
		
		            sizeCrystIcon(rewardIcon, iconSize);
		
		            rewardIcon.x = x + gap + iconSize / 2;
		            rewardIcon.y = rowY;
		
		            x += gap + iconSize;
		
		            rewardAmount.x = x + gap * 0.6;
		            rewardAmount.y = rowY;
		        }
		
		        dialogNote.visible = kind !== "notice";
		        dialogNote.font = noteFs + "px 'DM Sans'";
		        dialogNote.textBaseline = "top";
		        dialogNote.lineWidth = textW;
		        dialogNote.lineHeight = noteFs * 1.35;
		        dialogNote.x = W / 2;
		        dialogNote.y = py + ph * (kind === "sell" ? 0.64 : 0.50);
		
		        var bh = portrait ? 72 : 46;
		        var by = py + ph - pad - bh / 2;
		
		        if (kind === "notice") {
		            var nw = Math.min(pw - pad * 2, portrait ? 320 : 200);
		
		            confirmBtn.visible = false;
		            sizeButton(cancelBtn, nw, bh, fs);
		
		            placeReactive(cancelBtn, 1, W / 2, by, nw / 2, bh / 2);
		        } else {
		            var bw = (pw - pad * 3) / 2;
		
		            confirmBtn.visible = true;
		            sizeButton(cancelBtn, bw, bh, fs);
		            sizeButton(confirmBtn, bw, bh, fs);
		
		            placeReactive(cancelBtn, 1, px + pad + bw / 2, by, bw / 2, bh / 2);
		            placeReactive(confirmBtn, 1, px + pw - pad - bw / 2, by, bw / 2, bh / 2);
		        }
		    }
		
		    function showDialog() {
		        layoutDialog();
		        dialogOpen = true;
		        dialog.visible = true;
		        self.addChild(dialog);
		    }
		
		    function openConfirm(kind) {
		        var sel = getSelection();
		
		        if (!sel.count) return;
		
		        var n = sel.count;
		        var word = n === 1 ? " monster" : " monsters";
		
		        dialogKind = kind;
		
		        if (kind === "sell") {
		            dialogTitle.text = "Sell monsters?";
		            dialogBody.text = "You are about to sell " + n + word + ".";
		            rewardLabel.text = "You will receive";
		            rewardAmount.text = formatAmount(sel.total);
		            dialogNote.text = "This can't be undone.";
		            confirmBtn.label.text = "Sell";
		        } else {
		            dialogTitle.text = "Send to your account?";
		            dialogBody.text = "Send " + n + word + " to your account?";
		            dialogNote.text =
		                "They will be removed from this game. Your account can hold " +
		                exportLimit + " in total, so " +
		                Math.max(0, exportFree - n) +
		                " more could still be sent after this.";
		            confirmBtn.label.text = "Send";
		        }
		
		        cancelBtn.label.text = "Cancel";
		        showDialog();
		    }
		
		    function showNotice(title, body) {
		        dialogKind = "notice";
		        dialogTitle.text = title;
		        dialogBody.text = body;
		        cancelBtn.label.text = "OK";
		        showDialog();
		    }
		
		    function closeConfirm() {
		        dialogOpen = false;
		        dialog.visible = false;
		    }
		
		    // --------------------------------------------------
		    // SELLING / SELECTION
		    // --------------------------------------------------
		
		    function isLocked(entry) {
		        return (
		            typeof entry.slot === "number" &&
		            entry.slot >= 0
		        );
		    }
		
		    function sellValue(entry) {
		        var def = speciesOf(entry.monsterId);
		
		        if (!def) return SELL_MIN;
		
		        var stats =
		            (Number(def.baseHp) || 0) +
		            (Number(def.baseAttack) || 0) +
		            (Number(def.baseDefense) || 0) +
		            (Number(def.baseSpAttack) || 0) +
		            (Number(def.baseSpDefense) || 0) +
		            (Number(def.baseSpeed) || 0);
		
		        return Math.max(
		            SELL_MIN,
		            Math.round(
		                stats * SELL_STAT_RATE +
		                (Number(entry.level) || 1) * SELL_LEVEL_BONUS
		            )
		        );
		    }
		
		    function getSelection() {
		        var list = [];
		        var total = 0;
		
		        for (var i = 0; i < entries.length; i++) {
		            var m = entries[i];
		
		            if (selected[m.uid] && !isLocked(m)) {
		                list.push(m);
		                total += sellValue(m);
		            }
		        }
		
		        return {
		            list: list,
		            count: list.length,
		            total: total
		        };
		    }
		
		    function setTitle() {
		        if (placementActive()) {
		            titleText.text = PICK_TITLE;
		        } else if (pickMode === "sell") {
		            titleText.text = SELL_TITLE;
		        } else if (pickMode === "export") {
		            titleText.text = EXPORT_TITLE;
		        } else {
		            titleText.text = BROWSE_TITLE;
		        }
		    }
		
		    function refreshSellUI() {
		        if (destroyed) return;
		
		        var sel = getSelection();
		        var picking = pickMode !== "";
		
		        setTitle();
		
		        for (var i = 0; i < cards.length; i++) {
		            var card = cards[i];
		            var entry = entries[card.monsterIndex];
		
		            var locked = picking && !!entry && isLocked(entry);
		            var on = picking && !!entry && !locked && !!selected[entry.uid];
		
		            card.alpha = locked ? 0.45 : 1;
		            card.reactOff = locked;
		
		            if (card.selectMark && card.selectMark.visible !== on) {
		                card.selectMark.visible = on;
		
		                if (card.cacheCanvas) {
		                    card.updateCache();
		                }
		            }
		        }
		
		        if (pickMode === "sell") {
		            countText.text = sel.count + " selected";
		        } else if (pickMode === "export") {
		            countText.text = sel.count + " of " + exportFree + " selected";
		        } else {
		            countText.text =
		                entries.length +
		                (entries.length === 1 ? " monster" : " monsters");
		        }
		
		        if (pickMode === "sell" && sel.count === 0) {
		            sellBtn.label.text = "Cancel";
		            sellBtn.iconHolder.visible = false;
		            sellBtn.amount.visible = false;
		        } else {
		            sellBtn.label.text = "Sell";
		            sellBtn.iconHolder.visible = true;
		            sellBtn.amount.visible = pickMode === "sell";
		            sellBtn.amount.text = formatAmount(sel.total);
		        }
		
		        layoutSellContent();
		
		        if (exportBusy) {
		            exportBtn.label.text = exportBusyText;
		        } else if (pickMode === "export") {
		            exportBtn.label.text = sel.count === 0 ? "Cancel" : "Send " + sel.count;
		        } else {
		            exportBtn.label.text = "Export";
		        }
		
		        centerLabel(exportBtn);
		    }
		
		    function startPicking(mode) {
		        pickMode = mode;
		        selected = {};
		        refreshSellUI();
		    }
		
		    function stopPicking() {
		        pickMode = "";
		        selected = {};
		        refreshSellUI();
		    }
		
		    function onSellPress() {
		        if (placementActive() || dialogOpen || exportBusy) return;
		
		        if (pickMode !== "sell") {
		            startPicking("sell");
		            return;
		        }
		
		        if (getSelection().count === 0) {
		            stopPicking();
		            return;
		        }
		
		        openConfirm("sell");
		    }
		
		    // --------------------------------------------------
		    // EXPORT ERROR HANDLING
		    // --------------------------------------------------
		
		    function exportErrorText(err) {
		        var code = String(
		            err && err.message
		                ? err.message
		                : err || "unknown-error"
		        );
		
		        if (code.indexOf("not-signed-in") >= 0) {
		            return "Sign in with your username before exporting monsters.";
		        }
		
		        if (code.indexOf("limit") >= 0) {
		            return "Your account can only hold " +
		                exportLimit +
		                " exported monsters. Select fewer monsters and try again.";
		        }
		
		        if (code.indexOf("not-loaded") >= 0) {
		            return "Your save has not loaded yet. Try again in a moment.";
		        }
		
		        if (code.indexOf("player-changed") >= 0) {
		            return "Your signed-in player changed. Nothing was exported. Try again.";
		        }
		
		        if (code.indexOf("HTTP 401") >= 0) {
		            return "Your sign-in may have expired. Reload the game and sign in again.";
		        }
		
		        if (code.indexOf("HTTP 403") >= 0) {
		            return "The server denied the export. Check your Firestore security rules and make sure you are signed in.";
		        }
		
		        if (
		            code.indexOf("exportMonsters is not a function") >= 0 ||
		            code.indexOf("getExportInfo is not a function") >= 0
		        ) {
		            return "The save system is missing a required export function. Update SaveSystem and try again.";
		        }
		
		        if (
		            code.indexOf("Failed to fetch") >= 0 ||
		            code.indexOf("NetworkError") >= 0
		        ) {
		            return "A network error interrupted the export. Check your connection and try again.";
		        }
		
		        console.error("Monster export error:", err);
		
		        return "Something went wrong during export. Check the browser console for details and try again.";
		    }
		
		    // --------------------------------------------------
		    // EXPORT SELECTION
		    // --------------------------------------------------
		
		    function onExportPress() {
		        if (placementActive() || dialogOpen || exportBusy) return;
		
		        if (pickMode === "export") {
		            if (getSelection().count === 0) {
		                stopPicking();
		                return;
		            }
		
		            openConfirm("export");
		            return;
		        }
		
		        if (
		            typeof SaveSystem === "undefined" ||
		            typeof SaveSystem.getExportInfo !== "function" ||
		            typeof SaveSystem.exportMonsters !== "function"
		        ) {
		            showNotice(
		                "Export unavailable",
		                "The save system is missing its export functions. Update SaveSystem before exporting."
		            );
		            return;
		        }
		
		        exportBusy = true;
		        exportBusyText = "Checking...";
		        refreshSellUI();
		
		        Promise.resolve()
		            .then(function () {
		                return SaveSystem.getExportInfo();
		            })
		            .then(function (info) {
		                if (destroyed) return;
		
		                if (
		                    !info ||
		                    !Number.isFinite(Number(info.limit)) ||
		                    !Number.isFinite(Number(info.count)) ||
		                    Number(info.limit) < 0 ||
		                    Number(info.count) < 0
		                ) {
		                    throw new Error("invalid-export-info");
		                }
		
		                exportLimit = Number(info.limit);
		                exportFree = Math.max(0, exportLimit - Number(info.count));
		
		                exportBusy = false;
		                exportBusyText = "Sending...";
		
		                if (exportFree === 0) {
		                    refreshSellUI();
		
		                    showNotice(
		                        "Account is full",
		                        "Your account already holds " +
		                        exportLimit +
		                        " exported monsters, which is the limit."
		                    );
		
		                    return;
		                }
		
		                startPicking("export");
		            })
		            .catch(function (err) {
		                if (destroyed) return;
		
		                exportBusy = false;
		                exportBusyText = "Sending...";
		                refreshSellUI();
		
		                showNotice("Can't export", exportErrorText(err));
		            });
		    }
		
		    function onConfirm() {
		        if (dialogKind === "sell") {
		            doSell();
		        } else if (dialogKind === "export") {
		            doExport();
		        } else {
		            closeConfirm();
		        }
		    }
		
		    function doSell() {
		        var sel = getSelection();
		
		        closeConfirm();
		
		        if (!sel.count) return;
		
		        var gone = {};
		
		        for (var i = 0; i < sel.list.length; i++) {
		            gone[sel.list[i].uid] = true;
		        }
		
		        var remaining = entries.filter(function (m) {
		            return !gone[m.uid];
		        });
		
		        pickMode = "";
		        selected = {};
		
		        SaveSystem.set("monsters", remaining);
		        SaveSystem.add("cryst", sel.total);
		
		        refreshSellUI();
		    }
		
		    // --------------------------------------------------
		    // SEND SELECTED MONSTERS TO THE PLAYER ACCOUNT
		    // --------------------------------------------------
		
		    function doExport() {
		        var sel = getSelection();
		
		        closeConfirm();
		
		        if (!sel.count) return;
		
		        if (
		            typeof SaveSystem === "undefined" ||
		            typeof SaveSystem.exportMonsters !== "function"
		        ) {
		            showNotice(
		                "Export unavailable",
		                "The save system cannot export monsters yet. Update SaveSystem and try again."
		            );
		            return;
		        }
		
		        var uids = [];
		        var seen = {};
		
		        for (var i = 0; i < sel.list.length; i++) {
		            var entry = sel.list[i];
		
		            if (
		                !entry ||
		                entry.uid === undefined ||
		                entry.uid === null ||
		                String(entry.uid).trim() === "" ||
		                isLocked(entry)
		            ) {
		                continue;
		            }
		
		            var uid = String(entry.uid);
		
		            if (seen[uid]) continue;
		
		            seen[uid] = true;
		            uids.push(uid);
		        }
		
		        if (!uids.length) {
		            refreshSellUI();
		
		            showNotice(
		                "No monsters selected",
		                "Select at least one monster that is not assigned to an egg slot."
		            );
		            return;
		        }
		
		        if (uids.length > exportFree) {
		            refreshSellUI();
		
		            showNotice(
		                "Export limit reached",
		                "Your account has room for only " +
		                exportFree +
		                (exportFree === 1 ? " more monster." : " more monsters.") +
		                " Select fewer monsters and try again."
		            );
		            return;
		        }
		
		        var n = uids.length;
		
		        exportBusy = true;
		        exportBusyText = "Sending...";
		        refreshSellUI();
		
		        Promise.resolve()
		            .then(function () {
		                return SaveSystem.exportMonsters(uids);
		            })
		            .then(function (info) {
		                if (destroyed) return;
		
		                if (
		                    !info ||
		                    !Number.isFinite(Number(info.count)) ||
		                    !Number.isFinite(Number(info.limit))
		                ) {
		                    throw new Error("invalid-export-response");
		                }
		
		                exportBusy = false;
		                exportBusyText = "Sending...";
		
		                pickMode = "";
		                selected = {};
		
		                refreshSellUI();
		
		                showNotice(
		                    "Sent!",
		                    n +
		                    (n === 1
		                        ? " monster was sent"
		                        : " monsters were sent") +
		                    " to your account. It now holds " +
		                    Number(info.count) +
		                    " of " +
		                    Number(info.limit) +
		                    "."
		                );
		            })
		            .catch(function (err) {
		                if (destroyed) return;
		
		                exportBusy = false;
		                exportBusyText = "Sending...";
		                refreshSellUI();
		
		                showNotice("Export failed", exportErrorText(err));
		            });
		    }
		
		    // --------------------------------------------------
		    // BUTTON CLICKS
		    // --------------------------------------------------
		
		    sellBtn.on("click", onSellPress);
		    exportBtn.on("click", onExportPress);
		    cancelBtn.on("click", closeConfirm);
		    confirmBtn.on("click", onConfirm);
		
		    // --------------------------------------------------
		    // CARD TEXT
		    // --------------------------------------------------
		
		    function typeLabel(def) {
		        var types = [];
		
		        if (def.type1) types.push(def.type1);
		        if (def.type2) types.push(def.type2);
		
		        return types.length
		            ? types.join(SEPARATOR).toUpperCase()
		            : NO_TYPE;
		    }
		
		    function levelLabel(entry) {
		        var text = "Level " + (entry.level || 1);
		
		        if (typeof entry.slot === "number" && entry.slot >= 0) {
		            text += SEPARATOR + "Slot " + (entry.slot + 1);
		        }
		
		        return text;
		    }
		
		    // --------------------------------------------------
		    // REMOVE OLD EGG ART
		    // --------------------------------------------------
		
		    function removeEgg(node) {
		        if (!node) return;
		
		        if (node.egg && node.egg.parent) {
		            node.egg.parent.removeChild(node.egg);
		        }
		
		        var kids = (node.children || []).slice();
		
		        for (var i = 0; i < kids.length; i++) {
		            removeEgg(kids[i]);
		        }
		    }
		
		    // --------------------------------------------------
		    // SHOW MONSTER ART
		    // --------------------------------------------------
		
		    function showArt(card) {
		        card.gotoAndStop(ART_FRAME);
		
		        var monsterArt = card.MonsterArt;
		
		        if (!monsterArt) {
		            console.warn("MonsterArt not found inside MonsterContainer.");
		            removeEgg(card);
		            return;
		        }
		
		        var entry = entries[card.monsterIndex];
		        var def = entry ? speciesOf(entry.monsterId) : null;
		
		        var monsterName = def
		            ? String(def.name || "").trim()
		            : String((entry && entry.name) || "").trim();
		
		        var frameToUse = "default";
		        var labels = [];
		
		        if (monsterArt.timeline && monsterArt.timeline.getLabels) {
		            labels = monsterArt.timeline.getLabels();
		        }
		
		        for (var i = 0; i < labels.length; i++) {
		            var labelName = String(labels[i].label || "").trim();
		
		            if (
		                monsterName !== "" &&
		                labelName.toLowerCase() === monsterName.toLowerCase()
		            ) {
		                frameToUse = labelName;
		                break;
		            }
		        }
		
		        monsterArt.gotoAndStop(frameToUse);
		        removeEgg(card);
		    }
		
		    // --------------------------------------------------
		    // SELECTION MARK
		    // --------------------------------------------------
		
		    function ensureMark(card) {
		        if (card.selectMark && card.selectMark.parent === card) return;
		
		        var b = card.nominalBounds;
		
		        if (!b) return;
		
		        var mark = new createjs.Container();
		        mark.visible = false;
		        mark.mouseEnabled = false;
		        mark.mouseChildren = false;
		
		        var ring = new createjs.Shape();
		
		        ring.graphics
		            .setStrokeStyle(Math.max(3, b.width * 0.015))
		            .beginStroke("#8fd8ff")
		            .beginFill("rgba(143, 216, 255, 0.2)")
		            .drawRoundRect(b.x, b.y, b.width, b.height, b.width * 0.06);
		
		        mark.addChild(ring);
		
		        var r = b.width * 0.07;
		        var cx = b.x + b.width - r * 1.7;
		        var cy = b.y + r * 1.7;
		
		        var badge = new createjs.Shape();
		
		        badge.graphics
		            .beginFill("#8fd8ff")
		            .drawCircle(cx, cy, r);
		
		        badge.graphics
		            .setStrokeStyle(Math.max(3, r * 0.22), "round")
		            .beginStroke("#061a2d")
		            .moveTo(cx - r * 0.45, cy)
		            .lineTo(cx - r * 0.1, cy + r * 0.35)
		            .lineTo(cx + r * 0.5, cy - r * 0.35);
		
		        mark.addChild(badge);
		        card.addChild(mark);
		        card.selectMark = mark;
		    }
		
		    // --------------------------------------------------
		    // APPLY CARD DATA
		    // --------------------------------------------------
		
		    function applyCard(card) {
		        var entry = entries[card.monsterIndex];
		        if (!entry) return;
		
		        var def = speciesOf(entry.monsterId);
		
		        showArt(card);
		
		        if (card.type) {
		            card.type.text = def ? typeLabel(def) : "";
		        }
		
		        if (card.MonsterName) {
		            var nick = String(entry.nickname || "").trim();
		
		            card.MonsterName.text = nick !== ""
		                ? nick
		                : (def ? def.name : (entry.name || "???"));
		        }
		
		        if (card.guarding) {
		            var m = /^(.*?\d+(?:\.\d+)?px)\s/.exec(card.guarding.font || "");
		
		            if (m) {
		                card.guarding.font = m[1] + " " + FONT_FAMILY;
		            }
		
		            card.guarding.visible = true;
		            card.guarding.text = levelLabel(entry);
		        }
		
		        ensureMark(card);
		
		        if (card.cacheCanvas) {
		            card.updateCache();
		        }
		    }
		
		    // --------------------------------------------------
		    // BUILD CARDS
		    // --------------------------------------------------
		
		    function clearCards() {
		        for (var i = 0; i < cards.length; i++) {
		            createjs.Tween.removeTweens(cards[i]);
		            cards[i].removeAllEventListeners();
		            content.removeChild(cards[i]);
		        }
		
		        cards = [];
		        pressedObj = null;
		    }
		
		    function rebuild() {
		        if (destroyed) return;
		
		        if (!lib.MonsterContainer) {
		            console.error("MonsterContainer not found. Check AS Linkage on the symbol.");
		            return;
		        }
		
		        var saved = SaveSystem.get("monsters");
		        entries = Array.isArray(saved) ? saved : [];
		
		        var stillThere = {};
		
		        entries.forEach(function (m) {
		            stillThere[m.uid] = true;
		        });
		
		        Object.keys(selected).forEach(function (uid) {
		            if (!stillThere[uid]) delete selected[uid];
		        });
		
		        if (placementActive()) {
		            pickMode = "";
		            selected = {};
		        }
		
		        clearCards();
		
		        for (var i = 0; i < entries.length; i++) {
		            var card = new lib.MonsterContainer();
		
		            card.monsterIndex = i;
		            card.cursor = "pointer";
		            card.addEventListener("click", onCardClick);
		
		            wireReactions(card);
		            content.addChild(card);
		            cards.push(card);
		
		            applyCard(card);
		        }
		
		        emptyText.visible = !entries.length;
		
		        layout();
		        refreshSellUI();
		    }
		
		    // --------------------------------------------------
		    // LEAVE MONSTER SCREEN
		    // --------------------------------------------------
		
		    function leave() {
		        if (self.showScreen) {
		            self.showScreen(GAME_LABEL);
		        } else {
		            if (self.cleanupMonsters) self.cleanupMonsters();
		            self.gotoAndStop(GAME_LABEL);
		        }
		    }
		
		    // --------------------------------------------------
		    // UPDATE MONSTER SLOTS
		    // --------------------------------------------------
		
		    function updateMonsterSlots(chosenMonsterId, targetSlot) {
		        var savedSlots = SaveSystem.get("slots");
		
		        var nextSlots = Array.isArray(savedSlots)
		            ? savedSlots.slice()
		            : [];
		
		        while (nextSlots.length < 5) {
		            nextSlots.push(null);
		        }
		
		        for (var i = 0; i < nextSlots.length; i++) {
		            if (i !== targetSlot && nextSlots[i] === chosenMonsterId) {
		                nextSlots[i] = null;
		            }
		        }
		
		        nextSlots[targetSlot] = chosenMonsterId;
		
		        SaveSystem.set("slots", nextSlots);
		    }
		
		    // --------------------------------------------------
		    // CARD CLICK
		    // --------------------------------------------------
		
		    function onCardClick(evt) {
		        if (dragMoved) return;
		        if (dialogOpen || exportBusy) return;
		
		        var placement = window.MonsterPlacement;
		
		        if (!placement || !placement.active) {
		            if (pickMode !== "") {
		                var tapped = entries[evt.currentTarget.monsterIndex];
		
		                if (!tapped || isLocked(tapped)) return;
		
		                if (selected[tapped.uid]) {
		                    delete selected[tapped.uid];
		                } else {
		                    if (
		                        pickMode === "export" &&
		                        getSelection().count >= exportFree
		                    ) {
		                        showNotice(
		                            "Export limit reached",
		                            "Your account has room for " +
		                            exportFree +
		                            (exportFree === 1 ? " more monster." : " more monsters.") +
		                            " The limit is " + exportLimit + " in total."
		                        );
		                        return;
		                    }
		
		                    selected[tapped.uid] = true;
		                }
		
		                refreshSellUI();
		            }
		
		            return;
		        }
		
		        var chosen = evt.currentTarget.monsterIndex;
		        var chosenEntry = entries[chosen];
		
		        if (!chosenEntry) {
		            console.warn("Could not find selected monster:", chosen);
		            return;
		        }
		
		        var chosenMonsterId = chosenEntry.monsterId;
		        var targetSlot = placement.slot;
		
		        if (
		            typeof targetSlot !== "number" ||
		            targetSlot < 0 ||
		            targetSlot >= 5
		        ) {
		            console.warn("Invalid monster placement slot:", targetSlot);
		            return;
		        }
		
		        var next = entries.map(function (m, i) {
		            var c = Object.assign({}, m);
		
		            if (i === chosen) {
		                c.slot = targetSlot;
		            } else if (c.slot === targetSlot) {
		                c.slot = -1;
		            }
		
		            return c;
		        });
		
		        SaveSystem.set("monsters", next);
		        updateMonsterSlots(chosenMonsterId, targetSlot);
		
		        placement.active = false;
		        placement.slot = -1;
		
		        leave();
		    }
		
		    // --------------------------------------------------
		    // SCROLLING
		    // --------------------------------------------------
		
		    function setScroll(y) {
		        scrollY = Math.max(0, Math.min(maxScroll, y));
		        content.y = viewTop - scrollY;
		    }
		
		    function onPress(evt) {
		        dragging = true;
		        dragMoved = false;
		        velocity = 0;
		        dragStartY = evt.stageY;
		        dragStartScroll = scrollY;
		        lastY = evt.stageY;
		        lastTime = Date.now();
		    }
		
		    function onDragMove(evt) {
		        if (!dragging) return;
		
		        var y = evt.stageY;
		
		        if (!dragMoved) {
		            if (Math.abs(y - dragStartY) <= DRAG_THRESHOLD) return;
		
		            dragMoved = true;
		
		            if (pressedObj) {
		                pressedObj.pressed = false;
		                refreshReact(pressedObj);
		                pressedObj = null;
		            }
		
		            dragStartY = y;
		            dragStartScroll = scrollY;
		            lastY = y;
		            lastTime = Date.now();
		
		            return;
		        }
		
		        setScroll(dragStartScroll - (y - dragStartY));
		
		        var now = Date.now();
		        var dt = now - lastTime;
		
		        if (dt > 0) {
		            velocity = velocity * 0.6 + ((lastY - y) / dt) * 0.4;
		            lastY = y;
		            lastTime = now;
		        }
		    }
		
		    function onRelease() {
		        if (!dragging) return;
		
		        dragging = false;
		
		        if (Date.now() - lastTime > 100) {
		            velocity = 0;
		        }
		    }
		
		    function scrollTick(evt) {
		        if (dragging) return;
		
		        if (Math.abs(velocity) < 0.01) {
		            velocity = 0;
		            return;
		        }
		
		        setScroll(scrollY + velocity * evt.delta);
		
		        velocity *= Math.pow(FRICTION, evt.delta / 16.67);
		
		        if (scrollY <= 0 || scrollY >= maxScroll) {
		            velocity = 0;
		        }
		    }
		
		    var canvas = self.stage ? self.stage.canvas : null;
		
		    function onWheel(e) {
		        e.preventDefault();
		        velocity = 0;
		
		        if (dialogOpen) return;
		
		        var unitsPerPixel = canvas && canvas.clientWidth
		            ? W / canvas.clientWidth
		            : 1;
		
		        setScroll(
		            scrollY +
		            e.deltaY *
		            (e.deltaMode === 1 ? 20 : 1) *
		            unitsPerPixel
		        );
		    }
		
		    // --------------------------------------------------
		    // LAYOUT
		    // --------------------------------------------------
		
		    function layoutActionBar() {
		        var show = !placementActive();
		        actionBar.visible = show;
		
		        if (!show) return;
		
		        var contentW = Math.min(W - SIDE_MARGIN * 2, MAX_CONTENT_WIDTH);
		
		        var btnW = portrait
		            ? (contentW - BTN_GAP) / 2
		            : Math.min(240, (contentW - BTN_GAP) / 2);
		
		        var fontSize = portrait ? 30 : 18;
		
		        actionBar.y = H - BAR_H;
		
		        actionBg.graphics.clear();
		
		        actionBg.graphics
		            .beginFill("rgba(6, 26, 45, 0.94)")
		            .drawRect(0, 0, W, BAR_H);
		
		        actionBg.graphics
		            .beginFill(LINE_COLOR)
		            .drawRect(0, 0, W, 1);
		
		        var left = (W - (btnW * 2 + BTN_GAP)) / 2;
		        var cy = BAR_H / 2;
		
		        sizeButton(sellBtn, btnW, BTN_H, fontSize);
		        sizeButton(exportBtn, btnW, BTN_H, fontSize);
		
		        placeReactive(sellBtn, 1, left + btnW / 2, cy, btnW / 2, BTN_H / 2);
		        placeReactive(exportBtn, 1, left + btnW + BTN_GAP + btnW / 2, cy, btnW / 2, BTN_H / 2);
		
		        layoutSellContent();
		    }
		
		    function layout() {
		        layoutActionBar();
		
		        var topOffset = RESERVE_TOP_BAR
		            ? (portrait ? Math.max(82, H * 0.11) : Math.max(66, H * 0.09))
		            : 0;
		
		        var contentW = Math.min(W - SIDE_MARGIN * 2, MAX_CONTENT_WIDTH);
		        var contentLeft = (W - contentW) / 2;
		
		        var headerMiddle = topOffset + HEADER_HEIGHT / 2;
		        var lineY = topOffset + HEADER_HEIGHT;
		
		        titleText.font = TITLE_SIZE + "px 'Marcellus'";
		        titleText.x = contentLeft;
		        titleText.y = headerMiddle;
		
		        countText.font = "bold " + COUNT_SIZE + "px 'DM Sans'";
		        countText.x = contentLeft + contentW;
		        countText.y = headerMiddle;
		
		        headerLine.graphics.clear();
		        headerLine.graphics
		            .beginFill(LINE_COLOR)
		            .drawRect(contentLeft, lineY, contentW, LINE_THICKNESS);
		
		        headerLine.alpha = LINE_ALPHA;
		        viewTop = lineY + LINE_THICKNESS;
		
		        var barH = actionBar.visible ? BAR_H : 0;
		        var viewH = H - viewTop - barH;
		
		        emptyText.x = W / 2;
		        emptyText.y = viewTop + 90;
		
		        viewMask.graphics.clear();
		        viewMask.graphics
		            .beginFill("#000")
		            .drawRect(0, viewTop, W, viewH);
		
		        scrollHit.graphics.clear();
		        scrollHit.graphics
		            .beginFill("rgba(0, 0, 0, 0.02)")
		            .drawRect(0, viewTop, W, viewH);
		
		        if (!cards.length) {
		            maxScroll = 0;
		            setScroll(0);
		            return;
		        }
		
		        var b = cards[0].nominalBounds;
		
		        if (!b || !b.width || !b.height) {
		            console.warn("MonsterContainer needs valid nominal bounds.");
		            return;
		        }
		
		        var cardW = (contentW - CARD_GAP * (COLUMNS - 1)) / COLUMNS;
		        var scale = cardW / b.width;
		        var cardH = b.height * scale;
		
		        var rows = Math.ceil(cards.length / COLUMNS);
		
		        var cacheScale = scale * Math.max(
		            1,
		            Math.min(2, window.devicePixelRatio || 1)
		        );
		
		        for (var i = 0; i < cards.length; i++) {
		            var col = i % COLUMNS;
		            var row = Math.floor(i / COLUMNS);
		
		            var left = contentLeft + col * (cardW + CARD_GAP);
		            var top = SCROLL_PAD_TOP + row * (cardH + CARD_GAP);
		            var c = cards[i];
		
		            placeReactive(
		                c,
		                scale,
		                left + cardW / 2,
		                top + cardH / 2,
		                b.x + b.width / 2,
		                b.y + b.height / 2
		            );
		
		            c.cache(b.x, b.y, b.width, b.height, cacheScale);
		        }
		
		        var contentH =
		            SCROLL_PAD_TOP +
		            rows * cardH +
		            (rows - 1) * CARD_GAP +
		            SCROLL_PAD_BOTTOM;
		
		        maxScroll = Math.max(0, contentH - viewH);
		        setScroll(scrollY);
		    }
		
		    // --------------------------------------------------
		    // EVENTS
		    // --------------------------------------------------
		
		    viewport.on("mousedown", onPress);
		    viewport.on("pressmove", onDragMove);
		    viewport.on("pressup", onRelease);
		
		    createjs.Ticker.addEventListener("tick", scrollTick);
		
		    if (canvas) {
		        canvas.addEventListener("wheel", onWheel, { passive: false });
		    }
		
		    if (self.stage) {
		        createjs.Touch.enable(self.stage);
		        self.stage.mouseMoveOutside = true;
		
		        if (canHover) {
		            self.stage.enableMouseOver(20);
		        }
		    }
		
		    // --------------------------------------------------
		    // CLEANUP
		    // --------------------------------------------------
		
		    self.cleanupMonsters = function () {
		        destroyed = true;
		
		        if (eggUi) {
		            eggUi.visible = eggWasVisible;
		        }
		
		        createjs.Ticker.removeEventListener("tick", scrollTick);
		
		        if (canvas) {
		            canvas.removeEventListener("wheel", onWheel);
		        }
		
		        SaveSystem.onChange(LISTENER_ID, function () {});
		
		        if (window.MonsterPlacement) {
		            window.MonsterPlacement.active = false;
		        }
		
		        clearCards();
		
		        [sellBtn, exportBtn, cancelBtn, confirmBtn].forEach(function (btn) {
		            createjs.Tween.removeTweens(btn);
		            btn.removeAllEventListeners();
		        });
		
		        viewport.removeAllEventListeners();
		
		        self.removeChild(viewport);
		        self.removeChild(header);
		        self.removeChild(actionBar);
		        self.removeChild(dialog);
		
		        self.cleanupMonsters = null;
		    };
		
		    // --------------------------------------------------
		    // START
		    // --------------------------------------------------
		
		    setTitle();
		    layout();
		    refreshSellUI();
		
		    SaveSystem.onChange(LISTENER_ID, function (name) {
		        if (
		            name === null ||
		            name === "monsters" ||
		            name === "slots"
		        ) {
		            rebuild();
		        }
		    });
		
		    if (SaveSystem.isLoaded()) {
		        rebuild();
		    } else {
		        SaveSystem.load().then(rebuild).catch(function (err) {
		            console.error("Could not load monster screen:", err);
		            showNotice(
		                "Load failed",
		                "Your monsters could not be loaded. Try reloading the game."
		            );
		        });
		    }
		
		})(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(7));

	// Layer_4
	this.Hatch = new lib.Hatch();
	this.Hatch.name = "Hatch";
	this.Hatch.parent = this;
	this.Hatch.setTransform(641.05,637,0.4193,0.4193,0,0,0,247.2,59);
	this.Hatch._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Hatch).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

	// Layer_1
	this.egg = new lib.egg();
	this.egg.name = "egg";
	this.egg.parent = this;
	this.egg.setTransform(640,360,1,1,0,0,0,116.5,116.5);
	this.egg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.egg).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,834.3,661.9);
// library properties:
lib.properties = {
	id: '6EA4766156B7B04292821C2C02025349',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#0099CC",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1791647415249", id:"index_atlas_"},
		{src:"images/index_atlas_2.png?1791647415249", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1791647415250", id:"index_atlas_3"}
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