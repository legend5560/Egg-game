(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[994,0,992,870],[0,0,992,870],[988,872,980,826],[0,872,986,832]]},
		{name:"index_atlas_2", frames: [[470,1038,398,398],[928,655,4,12],[900,683,29,21],[944,0,939,519],[0,0,942,522],[944,521,894,540],[710,625,188,188],[514,911,84,117],[514,625,194,194],[870,975,51,51],[470,1438,894,148],[870,1063,894,20],[870,911,62,62],[0,1038,468,468],[900,655,26,26],[900,625,28,28],[514,524,414,99],[0,1508,414,7],[514,821,414,88],[870,1028,46,29],[0,524,512,512]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["index_atlas_2"]);
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
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
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
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eggsketches2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(20);
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


(lib.MonsterCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

}).prototype = getMCSymbolPrototype(lib.MonsterCard, new cjs.Rectangle(-1.5,-1.5,493,416), null);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eggsketches2();
	this.instance.parent = this;
	this.instance.setTransform(-22,-13,1.0873,1.0873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eggs, new cjs.Rectangle(-22,-13,556.7,556.7), null);


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


(lib.MonsterContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.guarding = new cjs.Text("guarding * slot 2", "italic bold 50px 'DM Sans 24pt ExtraBold'", "#8EAFBF");
	this.guarding.name = "guarding";
	this.guarding.textAlign = "center";
	this.guarding.lineHeight = 68;
	this.guarding.lineWidth = 1233;
	this.guarding.parent = this;
	this.guarding.setTransform(246.499,386.95,0.3938,0.3938);

	this.MonsterName = new cjs.Text("Monster name", "50px 'Marcellus'", "#FFFFFF");
	this.MonsterName.name = "MonsterName";
	this.MonsterName.textAlign = "center";
	this.MonsterName.lineHeight = 65;
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.type},{t:this.MonsterName},{t:this.guarding}]}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonsterContainer, new cjs.Rectangle(0,0,496,435.1), null);


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.eggs();
	this.instance.parent = this;
	this.instance.setTransform(114.85,88,0.7021,0.7021,0,0,0,255.7,255.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedTexturedBitmap_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(-80.1,-100.8,390.9,390.90000000000003), null);


// stage content:
(lib.Egggame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{menu:0,game:1,eggs:2,monsters:3});

	// timeline functions:
	this.frame_0 = function() {
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
		// --------------------------------------------------
		// SAVE SYSTEM
		// --------------------------------------------------
		
		// Only define it once, even if frame 1 ever runs again
		if (!window.SaveSystem) {
		
		    window.SaveSystem = (function () {
		
		        // ---------- Settings ----------
		        var PROJECT_ID = "alister-1e745";
		        var DOC_BASE =
		            "https://firestore.googleapis.com/v1/projects/" + PROJECT_ID +
		            "/databases/(default)/documents/players/";
		
		        var LOCAL_KEY  = "eggGameSave";
		        var SAVE_DELAY = 1000;              // save 1 second after the last change
		        var WAIT_DELAY = 5000;              // waiting for sign-in (no request is sent)
		        var BASE_RETRY = 5000;              // first retry after a failed request
		        var MAX_RETRY  = 5 * 60 * 1000;     // never wait more than 5 minutes between retries
		
		        // Starting amounts for a brand-new player
		        var DEFAULTS = { 
		            starGems: 0, 
		            cryst: 0,
		            eggEndTimes: "0,0,0,0,0"
		        };
		        var NAMES = Object.keys(DEFAULTS);
		
		        // ---------- State ----------
		        var data = {};
		        var dirty = {};              // currencies changed but not saved yet
		        var listeners = {};
		        var loaded = false;
		        var owner = null;            // "cloud:<uid>" or "local"
		        var loadingFor = null;
		        var loadPromise = null;
		        var saveTimer = null;
		        var loadTimer = null;
		        var saving = false;
		        var loadFailures = 0;
		        var saveFailures = 0;
		
		
		        // ---------- Retry helpers ----------
		        function backoff(failures) {
		            return Math.min(BASE_RETRY * Math.pow(2, failures - 1), MAX_RETRY);
		        }
		
		        // Sign-in and rules problems won't fix themselves, so don't keep retrying them
		        function isFatal(err) {
		            return /HTTP (401|403)/.test(String(err && err.message));
		        }
		
		
		        // ---------- Who is playing? ----------
		        function currentOwner() {
		            var u = exportRoot.user;
		            if (u && exportRoot.idToken && u.uid !== "dev-user") {
		                return "cloud:" + u.uid;
		            }
		            return "local";          // logged out, unverified, or testing
		        }
		
		        function uidOf(o) {
		            return o.slice(6);
		        }
		
		        function authHeaders() {
		            return {
		                "Authorization": "Bearer " + exportRoot.idToken,
		                "Content-Type": "application/json"
		            };
		        }
		
		
		        // ---------- Local (browser) storage ----------
		        function localRead() {
		            try {
		                return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
		            } catch (e) {
		                return {};
		            }
		        }
		
		        function localWrite() {
		            try {
		                localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
		            } catch (e) {}
		        }
		
		
		        // ---------- Helpers ----------
		        function clean(v) {
		            v = Math.floor(Number(v));
		            return (isFinite(v) && v > 0) ? v : 0;
		        }
		
		        function notify(name) {
		            Object.keys(listeners).forEach(function (k) {
		                try {
		                    listeners[k](name, name ? data[name] : null);
		                } catch (e) {
		                    console.error(e);
		                }
		            });
		        }
		
		
		        // ---------- Loading ----------
		        function cloudRead() {
		            return fetch(DOC_BASE + uidOf(owner), { headers: authHeaders() })
		                .then(function (r) {
		                    if (r.status === 404) return {};      // no save yet
		                    if (!r.ok) throw new Error("HTTP " + r.status);
		                    return r.json();
		                })
		                .then(function (doc) {
		                    var out = {};
		                    var f = (doc && doc.fields) || {};
		                    NAMES.forEach(function (n) {
		                        if (n === "eggEndTimes" && f[n] && f[n].stringValue !== undefined) {
		                            out[n] = f[n].stringValue;
		                        } else if (f[n] && f[n].integerValue !== undefined) {
		                            out[n] = Number(f[n].integerValue);
		                        }
		                    });
		                    return out;
		                });
		        }
		
		        function load() {
		            var wanted = currentOwner();
		
		            if (loaded && owner === wanted) {
		                // A fresh login token arrived: retry anything that failed to save
		                if (Object.keys(dirty).length) queueSave(SAVE_DELAY);
		                return Promise.resolve(data);
		            }
		            if (loadingFor === wanted && loadPromise) return loadPromise;
		
		            // A different player, or signed out: start clean
		            if (owner !== wanted) {
		                owner = wanted;
		                loaded = false;
		                data = {};
		                dirty = {};
		                loadFailures = 0;
		                saveFailures = 0;
		            }
		
		            loadingFor = wanted;
		
		            if (loadTimer) {
		                clearTimeout(loadTimer);
		                loadTimer = null;
		            }
		
		            var read = (wanted === "local")
		                ? Promise.resolve(localRead())
		                : cloudRead();
		
		            loadPromise = read.then(function (stored) {
		
		                // The player changed while we were loading: load the new one
		                if (currentOwner() !== wanted) {
		                    loadingFor = null;
		                    loadPromise = null;
		                    return load();
		                }
		
		                loadFailures = 0;
		
		                NAMES.forEach(function (n) {
		                    if (n === "eggEndTimes") {
		                        if (typeof stored[n] === "string") {
		                            data[n] = stored[n];
		                        } else {
		                            data[n] = DEFAULTS[n];
		                            dirty[n] = true;
		                        }
		                    } else if (typeof stored[n] === "number") {
		                        data[n] = clean(stored[n]);
		                    } else {
		                        data[n] = DEFAULTS[n];     // new player: save the starting amount
		                        dirty[n] = true;
		                    }
		                });
		
		                loaded = true;
		                loadingFor = null;
		                loadPromise = null;
		                notify(null);
		                queueSave(SAVE_DELAY);
		                return data;
		
		            }).catch(function (err) {
		                // Never save anything if loading failed, or we could
		                // overwrite the real balance with the defaults
		                console.error("SaveSystem: load failed", err);
		                loadingFor = null;
		                loadPromise = null;
		                loadFailures++;
		
		                if (isFatal(err)) {
		                    console.error(
		                        "SaveSystem: not retrying automatically. " +
		                        "Check the Firestore rules and that the player is signed in. " +
		                        "It will try again when the login token refreshes."
		                    );
		                } else {
		                    loadTimer = setTimeout(load, backoff(loadFailures));
		                }
		                return null;
		            });
		
		            return loadPromise;
		        }
		
		
		        // ---------- Saving ----------
		        function queueSave(delay) {
		            if (saveTimer) {
		                clearTimeout(saveTimer);
		                saveTimer = null;
		            }
		            if (!Object.keys(dirty).length) return;
		
		            saveTimer = setTimeout(function () {
		                saveTimer = null;
		                flush(false);
		            }, delay);
		        }
		
		        function flush(leaving) {
		            var names = Object.keys(dirty);
		            if (!loaded || !names.length) return;
		
		            if (owner === "local") {
		                localWrite();
		                dirty = {};
		                return;
		            }
		
		            // Cloud: only save if the same player is still signed in
		            var u = exportRoot.user;
		            if (!exportRoot.idToken || !u || ("cloud:" + u.uid) !== owner) {
		                queueSave(WAIT_DELAY);       // waiting for sign-in, no request sent
		                return;
		            }
		            if (saving && !leaving) {
		                queueSave(WAIT_DELAY);
		                return;
		            }
		
		            saving = true;
		            dirty = {};
		
		            var fields = {};
		            names.forEach(function (n) {
		                if (n === "eggEndTimes") {
		                    fields[n] = { stringValue: data[n] };
		                } else {
		                    fields[n] = { integerValue: String(data[n]) };
		                }
		            });
		
		            // updateMask means only these fields change, so other data
		            // in the same document (like the egg timer) is left alone
		            var url = DOC_BASE + uidOf(owner) + "?" +
		                names.map(function (n) {
		                    return "updateMask.fieldPaths=" + n;
		                }).join("&");
		
		            fetch(url, {
		                method: "PATCH",
		                headers: authHeaders(),
		                body: JSON.stringify({ fields: fields }),
		                keepalive: !!leaving      // lets the save finish while the page closes
		            }).then(function (r) {
		                if (!r.ok) throw new Error("HTTP " + r.status);
		                saveFailures = 0;
		            }).catch(function (err) {
		                console.error("SaveSystem: save failed", err);
		                names.forEach(function (n) { dirty[n] = true; });
		                saveFailures++;
		
		                if (isFatal(err)) {
		                    console.error(
		                        "SaveSystem: not retrying automatically. " +
		                        "It will try again on the next change or login refresh."
		                    );
		                } else {
		                    queueSave(backoff(saveFailures));
		                }
		            }).then(function () {
		                saving = false;
		            });
		        }
		
		        // Save right away when the player leaves or switches tabs
		        document.addEventListener("visibilitychange", function () {
		            if (document.visibilityState === "hidden") flush(true);
		        });
		        window.addEventListener("pagehide", function () {
		            flush(true);
		        });
		
		
		        // ---------- What the rest of the game uses ----------
		        function get(name) {
		            return data[name] || 0;
		        }
		
		        function set(name, value) {
		            if (!loaded || NAMES.indexOf(name) < 0) {
		                console.warn("SaveSystem: can't set", name, "(not loaded yet, or unknown name)");
		                return false;
		            }
		
		            if (name === "eggEndTimes") {
		                // String value, no cleaning
		                if (value === data[name]) return true;
		                data[name] = value;
		            } else {
		                value = clean(value);
		                if (value === data[name]) return true;
		                data[name] = value;
		            }
		
		            dirty[name] = true;
		            notify(name);
		            queueSave(SAVE_DELAY);
		            return true;
		        }
		
		        function add(name, amount) {
		            return set(name, get(name) + amount);
		        }
		
		        // Returns false (and changes nothing) if the player can't afford it
		        function spend(name, amount) {
		            if (!loaded || get(name) < amount) return false;
		            return set(name, get(name) - amount);
		        }
		
		        // One listener per key, so re-registering never creates duplicates
		        function onChange(key, fn) {
		            listeners[key] = fn;
		        }
		
		        return {
		            load: load,
		            get: get,
		            set: set,
		            add: add,
		            spend: spend,
		            onChange: onChange,
		            saveNow: function () { flush(false); },
		            isLoaded: function () { return loaded; }
		        };
		
		    })();
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
				
				//Description
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
		
		// Sluggity line (Will starter)
		var sluggity = new Monster({
		    monsterId: 13,
		    name: "Sluggity",
		    nickname: "",
		    shiny: false,
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type1: "Will",
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
		    type2: "Will",
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
		    description: "Fester uses its tail to draw predators and prey away from their shelters. Once a creature is lured out, fester will make a sound that resembles laughing as it steals food.",
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
		    type2: "Will",
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
		    type1: "Will",
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
		
		var seeNoEvil = new Monster({
		    monsterId: 104,
		    name: "See No Evil",
		    nickname: "",
		    shiny: false,
		    type1: "Fear",
		    type2: "",
		    baseHp: 100,
		    baseAttack: 125,
		    baseDefense: 100,
		    baseSpAttack: 75,
		    baseSpDefense: 90,
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
		
		var hearNoEvil = new Monster({
		    monsterId: 105,
		    name: "Hear No Evil",
		    nickname: "",
		    shiny: false,
		    type1: "Rage",
		    type2: "",
		    baseHp: 85,
		    baseAttack: 110,
		    baseDefense: 75,
		    baseSpAttack: 90,
		    baseSpDefense: 80,
		    baseSpeed: 175,
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
		
		var speakNoEvil = new Monster({
		    monsterId: 106,
		    name: "Speak No Evil",
		    nickname: "",
		    shiny: false,
		    type1: "Pride",
		    type2: "",
		    baseHp: 105,
		    baseAttack: 125,
		    baseDefense: 100,
		    baseSpAttack: 85,
		    baseSpDefense: 95,
		    baseSpeed: 105,
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
		
		var doNoEvil = new Monster({
		    monsterId: 107,
		    name: "Do No Evil",
		    nickname: "",
		    shiny: false,
		    type1: "Love",
		    type2: "",
		    baseHp: 10,
		    baseAttack: 10,
		    baseDefense: 10,
		    baseSpAttack: 10,
		    baseSpDefense: 10,
		    baseSpeed: 10,
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
	}
	this.frame_1 = function() {
		var self = this;
		this.stop();
		
		// --------------------------------------------------
		// EGG SETTINGS
		// --------------------------------------------------
		
		var EGG_RAISE = 0.15;
		
		// Total number of eggs. There is only one egg on the stage,
		// so this is just how many "pages" the arrows cycle through.
		var EGG_COUNT = 5;
		
		var W = lib.properties.width;
		var H = lib.properties.height;
		var portrait = H > W;
		
		
		// --------------------------------------------------
		// EGG SWITCH ANIMATION
		// --------------------------------------------------
		
		// How far the egg slides, as a share of the stage width
		var EGG_SLIDE_DISTANCE = 0.06;
		
		// Milliseconds to fade out, then fade back in
		var EGG_SLIDE_OUT_TIME = 220;
		var EGG_SLIDE_IN_TIME  = 320;
		
		// true  = the egg slides toward the arrow you pressed, then the
		//         next egg comes in from the opposite side
		// false = the egg slides away from the arrow you pressed, and the
		//         next egg comes in from the arrow's side
		var EGG_SLIDE_TOWARD_ARROW = true;
		
		
		// --------------------------------------------------
		// EGG
		// --------------------------------------------------
		
		var egg = self.egg;
		
		var currentEggIndex = 0;
		
		
		// --------------------------------------------------
		// EGG FLOATING
		// --------------------------------------------------
		
		function setupEgg(egg) {
		
		    // Raise egg, always measured from its original position
		    if (egg.baseY === undefined) egg.baseY = egg.y;
		    egg.y = egg.baseY - H * EGG_RAISE;
		
		    // Save its resting position
		    egg.eggRestY = egg.y;
		    egg.eggRestX = egg.x;
		
		    // Floating variables
		    egg.floatTime = Math.random() * Math.PI * 2;
		
		    // Store original scale
		    egg.originalScaleX = egg.scaleX;
		    egg.originalScaleY = egg.scaleY;
		
		    // True while the egg is sliding between pages
		    egg.eggSwitching = false;
		
		    // --------------------------------------------------
		    // HOVER
		    // --------------------------------------------------
		
		    egg.cursor = "pointer";
		
		    egg.on("rollover", function () {
		
		        // Hover tweens would cancel the slide, so skip them
		        if (egg.eggShaking || egg.eggSwitching) {
		            return;
		        }
		
		        createjs.Tween.removeTweens(egg);
		
		        createjs.Tween.get(egg)
		            .to({
		                scaleX: egg.originalScaleX * 0.97,
		                scaleY: egg.originalScaleY * 0.97
		            }, 100, createjs.Ease.quadOut);
		    });
		
		    egg.on("rollout", function () {
		
		        if (egg.eggShaking || egg.eggSwitching) {
		            return;
		        }
		
		        createjs.Tween.removeTweens(egg);
		
		        createjs.Tween.get(egg)
		            .to({
		                scaleX: egg.originalScaleX,
		                scaleY: egg.originalScaleY
		            }, 100, createjs.Ease.quadOut);
		    });
		
		
		    // --------------------------------------------------
		    // CLICK / SHAKE
		    // --------------------------------------------------
		
		    egg.on("click", function () {
		
		        // Don't shake while already shaking or sliding
		        if (egg.eggShaking || egg.eggSwitching) {
		            return;
		        }
		
		        egg.eggShaking = true;
		
		        var shakeTime = 0;
		        var shakeDuration = 350;
		
		        var originalX = egg.x;
		        var originalRotation = egg.rotation;
		
		        // Random X amount between 12 and 20
		        var shakeAmount =
		            12 + Math.random() * 8;
		
		        // Random rotation between 5 and 10 degrees
		        var rotationAmount =
		            5 + Math.random() * 5;
		
		        // Random initial directions
		        var xDirection =
		            Math.random() < 0.5 ? -1 : 1;
		
		        var rotationDirection =
		            Math.random() < 0.5 ? -1 : 1;
		
		
		        function shakeEgg(evt) {
		
		            shakeTime += evt.delta;
		
		            var progress =
		                shakeTime / shakeDuration;
		
		            if (progress >= 1) {
		
		                egg.x = originalX;
		                egg.rotation = originalRotation;
		
		                egg.eggShaking = false;
		
		                createjs.Ticker.removeEventListener(
		                    "tick",
		                    shakeEgg
		                );
		
		                return;
		            }
		
		            var strength = 1 - progress;
		
		
		            // Shake X
		            egg.x =
		                originalX +
		                Math.sin(
		                    progress * Math.PI * 12
		                ) *
		                shakeAmount *
		                strength *
		                xDirection;
		
		
		            // Shake rotation
		            egg.rotation =
		                originalRotation +
		                Math.sin(
		                    progress * Math.PI * 8
		                ) *
		                rotationAmount *
		                strength *
		                rotationDirection;
		        }
		
		
		        createjs.Ticker.addEventListener(
		            "tick",
		            shakeEgg
		        );
		    });
		}
		
		
		// --------------------------------------------------
		// SETUP EGG
		// --------------------------------------------------
		
		setupEgg(egg);
		
		
		// --------------------------------------------------
		// FLOATING UPDATE
		// --------------------------------------------------
		
		// Always runs, even while the egg is shaking.
		// The shake only changes x and rotation.
		
		function floatEggs(evt) {
		
		    egg.floatTime += evt.delta / 1000;
		
		    egg.y =
		        egg.eggRestY +
		        Math.sin(
		            egg.floatTime * 1.5
		        ) *
		        15;
		}
		
		createjs.Ticker.addEventListener(
		    "tick",
		    floatEggs
		);
		
		
		// --------------------------------------------------
		// EGG NAVIGATION
		// --------------------------------------------------
		
		var eggNavigation =
		    new createjs.Container();
		
		self.addChild(eggNavigation);
		
		
		// --------------------------------------------------
		// NAVIGATION SETTINGS
		// --------------------------------------------------
		
		var NAV_BUTTON_SIZE = 70;      // button height
		var NAV_BUTTON_WIDTH = 32;     // button width (smaller than the height)
		var NAV_BUTTON_RADIUS = 10;
		
		var NAV_BUTTON_ALPHA = 0.65;
		
		var NAV_OUTLINE_COLOR =
		    "#8FD8FF";
		
		var NAV_EGG_GAP = 230;         // distance from the egg to each button
		
		var NAV_DISABLED_ALPHA = 0.3;  // how faded the left button is on the first egg
		
		// Mobile (portrait): how much bigger the buttons are
		var NAV_MOBILE_SCALE = 2;
		
		// Closest a button may get to the edge of the screen
		var NAV_SCREEN_MARGIN = 12;
		
		
		// --------------------------------------------------
		// SAVE ORIGINAL EGG POSITION
		// --------------------------------------------------
		
		// The navigation is positioned using the egg's resting
		// position. It does NOT use the egg's floating position.
		
		var navEggX =
		    egg.eggRestX;
		
		var navEggY =
		    egg.eggRestY;
		
		
		// --------------------------------------------------
		// LEFT BUTTON
		// --------------------------------------------------
		
		var leftButton =
		    new createjs.Container();
		
		var leftBg =
		    new createjs.Shape();
		
		leftBg.graphics
		    .setStrokeStyle(2)
		    .beginStroke(NAV_OUTLINE_COLOR)
		    .beginFill("#123B5C")
		    .drawRoundRect(
		        -NAV_BUTTON_WIDTH / 2,
		        -NAV_BUTTON_SIZE / 2,
		        NAV_BUTTON_WIDTH,
		        NAV_BUTTON_SIZE,
		        NAV_BUTTON_RADIUS
		    );
		
		// Button transparency ONLY
		leftBg.alpha =
		    NAV_BUTTON_ALPHA;
		
		leftButton.addChild(leftBg);
		
		
		// --------------------------------------------------
		// LEFT ARROW
		// --------------------------------------------------
		
		// Spans x = -5 to 5, so it is centered in the button
		
		var leftArrow =
		    new createjs.Shape();
		
		leftArrow.graphics
		    .setStrokeStyle(2)
		    .beginStroke("#FFFFFF")
		    .moveTo(5, -10)
		    .lineTo(-5, 0)
		    .lineTo(5, 10);
		
		leftButton.addChild(leftArrow);
		
		leftButton.cursor = "pointer";
		
		
		// --------------------------------------------------
		// RIGHT BUTTON
		// --------------------------------------------------
		
		var rightButton =
		    new createjs.Container();
		
		var rightBg =
		    new createjs.Shape();
		
		rightBg.graphics
		    .setStrokeStyle(2)
		    .beginStroke(NAV_OUTLINE_COLOR)
		    .beginFill("#123B5C")
		    .drawRoundRect(
		        -NAV_BUTTON_WIDTH / 2,
		        -NAV_BUTTON_SIZE / 2,
		        NAV_BUTTON_WIDTH,
		        NAV_BUTTON_SIZE,
		        NAV_BUTTON_RADIUS
		    );
		
		// Button transparency ONLY
		rightBg.alpha =
		    NAV_BUTTON_ALPHA;
		
		rightButton.addChild(rightBg);
		
		
		// --------------------------------------------------
		// RIGHT ARROW
		// --------------------------------------------------
		
		// Spans x = -5 to 5, so it is centered in the button
		
		var rightArrow =
		    new createjs.Shape();
		
		rightArrow.graphics
		    .setStrokeStyle(2)
		    .beginStroke("#FFFFFF")
		    .moveTo(-5, -10)
		    .lineTo(5, 0)
		    .lineTo(-5, 10);
		
		rightButton.addChild(rightArrow);
		
		rightButton.cursor = "pointer";
		
		
		// --------------------------------------------------
		// ADD BUTTONS
		// --------------------------------------------------
		
		eggNavigation.addChild(leftButton);
		eggNavigation.addChild(rightButton);
		
		
		// --------------------------------------------------
		// SCALE + POSITION BUTTONS
		// --------------------------------------------------
		
		// Each button is scaled on its own, around its own center.
		// The eggNavigation container is NOT scaled, because scaling
		// the container would also multiply the gap between the
		// buttons and push them off the screen.
		
		var navScale =
		    portrait
		        ? NAV_MOBILE_SCALE
		        : 1;
		
		leftButton.scaleX = navScale;
		leftButton.scaleY = navScale;
		
		rightButton.scaleX = navScale;
		rightButton.scaleY = navScale;
		
		
		// Keep the gap as it is, but never let a button
		// go past the edge of the screen
		
		var navHalfWidth =
		    (NAV_BUTTON_WIDTH * navScale) / 2;
		
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
		
		
		// These NEVER update when the egg floats.
		
		leftButton.x =
		    navEggX - navGap;
		
		leftButton.y =
		    navEggY;
		
		
		rightButton.x =
		    navEggX + navGap;
		
		rightButton.y =
		    navEggY;
		
		
		// --------------------------------------------------
		// LEFT BUTTON STATE
		// --------------------------------------------------
		
		// The left button is disabled on the first egg,
		// because the left side does not loop around.
		
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
		
		    // Reset the hover brightness when it becomes disabled
		    leftBg.alpha =
		        NAV_BUTTON_ALPHA;
		}
		
		
		// --------------------------------------------------
		// EGG CHANGED
		// --------------------------------------------------
		
		// Runs while the egg is invisible, halfway through the
		// animation. All five eggs use the same art for now.
		// Later, change the egg's art, timer, and so on here,
		// based on the index (0 to 4).
		//
		// direction: +1 = right arrow, -1 = left arrow
		
		function onEggChanged(index, direction) {
		
		    console.log(
		        "Showing egg",
		        index + 1,
		        "of",
		        EGG_COUNT
		    );
		
		    // Re-layout the monster cards for the new egg
		    if (self.layoutCards) {
		
		        self.layoutCards();
		    }
		
		    // Play the monster cards intro again (they fade and slide in)
		    // in the direction of the arrow that was pressed
		    if (self.replayCardsIntro) {
		
		        self.replayCardsIntro(direction);
		    }
		}
		
		
		// --------------------------------------------------
		// SWITCH EGG
		// --------------------------------------------------
		
		// direction: +1 = right arrow, -1 = left arrow
		
		function switchEgg(newIndex, direction) {
		
		    // Ignore presses while the egg is already sliding
		    if (egg.eggSwitching) {
		        return;
		    }
		
		    // Past the last egg: loop back to the first one
		    if (newIndex >= EGG_COUNT) {
		        newIndex = 0;
		    }
		
		    // Before the first egg: do NOT loop, stay where we are
		    if (newIndex < 0) {
		        return;
		    }
		
		    currentEggIndex =
		        newIndex;
		
		    updateNavButtons();
		
		    // Mark the new tab in the bottom bar
		    if (self.setActiveDot) {
		
		        self.setActiveDot(currentEggIndex);
		    }
		
		    egg.eggSwitching = true;
		
		
		    // Fade the monster cards out while the egg slides away
		    if (self.fadeOutCards) {
		
		        self.fadeOutCards(EGG_SLIDE_OUT_TIME);
		    }
		
		
		    // Stop any hover tween and undo the hover squish
		    createjs.Tween.removeTweens(egg);
		
		    egg.scaleX = egg.originalScaleX;
		    egg.scaleY = egg.originalScaleY;
		
		
		    var distance =
		        lib.properties.width *
		        EGG_SLIDE_DISTANCE;
		
		    // Which way the egg slides out
		    var exitDirection =
		        EGG_SLIDE_TOWARD_ARROW
		            ? direction
		            : -direction;
		
		
		    // 1. Slide out and fade out
		    createjs.Tween.get(egg)
		        .to({
		            x: egg.eggRestX + exitDirection * distance,
		            alpha: 0
		        }, EGG_SLIDE_OUT_TIME, createjs.Ease.quadIn)
		        .call(function () {
		
		            // 2. Swap to the new egg while it can't be seen
		            onEggChanged(currentEggIndex, direction);
		
		            // Start the new egg on the opposite side
		            egg.x = egg.eggRestX - exitDirection * distance;
		            egg.alpha = 0;
		
		            // 3. Slide in and fade in
		            createjs.Tween.get(egg)
		                .to({
		                    x: egg.eggRestX,
		                    alpha: 1
		                }, EGG_SLIDE_IN_TIME, createjs.Ease.quadOut)
		                .call(function () {
		
		                    egg.eggSwitching = false;
		                });
		        });
		}
		
		
		// --------------------------------------------------
		// LEFT BUTTON CLICK
		// --------------------------------------------------
		
		leftButton.on("click", function () {
		
		    switchEgg(
		        currentEggIndex - 1,
		        -1
		    );
		});
		
		
		// --------------------------------------------------
		// RIGHT BUTTON CLICK
		// --------------------------------------------------
		
		rightButton.on("click", function () {
		
		    switchEgg(
		        currentEggIndex + 1,
		        1
		    );
		});
		
		
		// --------------------------------------------------
		// BUTTON HOVER
		// --------------------------------------------------
		
		leftButton.on("rollover", function () {
		
		    // No hover effect while disabled
		    if (currentEggIndex === 0) {
		        return;
		    }
		
		    leftBg.alpha = 0.85;
		});
		
		leftButton.on("rollout", function () {
		
		    leftBg.alpha =
		        NAV_BUTTON_ALPHA;
		});
		
		
		rightButton.on("rollover", function () {
		
		    rightBg.alpha = 0.85;
		});
		
		rightButton.on("rollout", function () {
		
		    rightBg.alpha =
		        NAV_BUTTON_ALPHA;
		});
		
		
		// --------------------------------------------------
		// CLEANUP (call when leaving this frame)
		// --------------------------------------------------
		
		self.cleanupEggNavigation = function () {
		
		    // Stop floating
		    createjs.Ticker.removeEventListener("tick", floatEggs);
		
		    // Remove event listeners
		    leftButton.removeAllEventListeners();
		    rightButton.removeAllEventListeners();
		    egg.removeAllEventListeners();
		
		    // Stop any tweens
		    createjs.Tween.removeTweens(egg);
		    createjs.Tween.removeTweens(leftButton);
		    createjs.Tween.removeTweens(rightButton);
		
		    // Reset egg position and state
		    egg.x = egg.eggRestX;
		    egg.y = egg.eggRestY;
		    egg.alpha = 1;
		    egg.rotation = 0;
		    egg.scaleX = egg.originalScaleX;
		    egg.scaleY = egg.originalScaleY;
		    egg.eggShaking = false;
		    egg.eggSwitching = false;
		
		    // Remove from stage
		    eggNavigation.removeAllEventListeners();
		    self.removeChild(eggNavigation);
		
		    // Clear references
		    self.cleanupEggNavigation = null;
		};
		
		
		// --------------------------------------------------
		// INITIAL STATE
		// --------------------------------------------------
		
		updateNavButtons();
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
		var CARDS_RAISE   = 0.09;
		var LIFT          = 0.40;
		
		var DESKTOP_CARDS_RAISE = 0.09;
		
		
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
		
		// Only used for the first intro, before any arrow is pressed
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
		
		        var card = new lib.MonsterCard();
		
		
		        // --------------------------------------------------
		        // CARD DATA
		        // --------------------------------------------------
		
		        card.slotIndex = i;
		        card.monster = null;
		        card.introDone = false;
		        card.cursor = null;
		        card.isPointerInside = false;
		
		
		        // --------------------------------------------------
		        // DEFAULT LABEL
		        // --------------------------------------------------
		
		        if (card.label) {
		
		            if (i === GOLD_INDEX) {
		                card.label.text = "Select a legend";
		            } else {
		                card.label.text = "Select a monster";
		            }
		        }
		
		
		        // --------------------------------------------------
		        // CLICK
		        // --------------------------------------------------
		
		        card.addEventListener(
		            "click",
		            onCardClick
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
		
		        self.addChild(card);
		
		        cards.push(card);
		    }
		}
		
		
		// --------------------------------------------------
		// CARD CLICK
		// --------------------------------------------------
		
		function onCardClick(evt) {
		
		    var card = evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    console.log(
		        "Card tapped:",
		        card.slotIndex
		    );
		}
		
		
		// --------------------------------------------------
		// CARD PRESS
		// --------------------------------------------------
		
		function onCardPress(evt) {
		
		    var card = evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    createjs.Tween.removeTweens(card);
		
		
		    if (typeof card.cardScale === "number") {
		
		        card.normalScale =
		            card.cardScale;
		    }
		
		
		    if (typeof card.cardScale === "number") {
		
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
		
		    var card = evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    if (typeof card.cardScale === "number") {
		
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
		
		    var card = evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    card.isPointerInside = true;
		
		    moveCard(
		        card,
		        true
		    );
		}
		
		
		// --------------------------------------------------
		// HOVER OFF
		// --------------------------------------------------
		
		function onCardOut(evt) {
		
		    var card = evt.currentTarget;
		
		
		    if (!card.introDone) {
		        return;
		    }
		
		
		    card.isPointerInside = false;
		
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
		            ? card.homeY - card.hoverDist
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
		
		    var n = cards.length;
		
		
		    if (!n) {
		        return;
		    }
		
		
		    var b =
		        cards[0].nominalBounds;
		
		
		    var cardW =
		        W * CARD_SIZE;
		
		
		    var scale =
		        cardW / b.width;
		
		
		    var cardH =
		        b.height * scale;
		
		
		    // --------------------------------------------------
		    // EGG POSITION
		    // --------------------------------------------------
		
		    var activeEgg = self.egg;
		
		    // Use the egg's RESTING x, never its sliding x
		    var eggX =
		        activeEgg.eggRestX;
		
		
		    var restY =
		        (typeof activeEgg.eggRestY === "number")
		            ? activeEgg.eggRestY
		            : (typeof self.eggRestY === "number")
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
		                ? (eb.y + eb.height) * eggScaleY
		                : 130
		        );
		
		
		    // --------------------------------------------------
		    // DESKTOP CARD OFFSET
		    // --------------------------------------------------
		
		    var desktopRaise =
		        portrait
		            ? 0
		            : H * DESKTOP_CARDS_RAISE;
		
		
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
		        W * ROW_SPAN;
		
		
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
		
		
		        // --------------------------------------------------
		        // STORE NORMAL SCALE
		        // --------------------------------------------------
		
		        c.cardScale =
		            scale;
		
		
		        c.scaleX =
		            scale;
		
		        c.scaleY =
		            scale;
		
		
		        // --------------------------------------------------
		        // CENTER REGISTRATION POINT
		        // --------------------------------------------------
		
		        c.regX =
		            b.x +
		            b.width / 2;
		
		
		        c.regY =
		            b.y +
		            b.height / 2;
		
		
		        // --------------------------------------------------
		        // EVENLY DISTRIBUTE CARDS
		        // --------------------------------------------------
		
		        var normalized =
		            n > 1
		                ? i / (n - 1)
		                : 0.5;
		
		
		        c.x =
		            leftX +
		            (
		                rightX -
		                leftX
		            ) *
		            normalized;
		
		
		        // --------------------------------------------------
		        // RAISE MIDDLE CARDS
		        // --------------------------------------------------
		
		        var centerOffset =
		            n > 1
		                ? (
		                    i -
		                    (n - 1) / 2
		                ) /
		                ((n - 1) / 2)
		
		                : 0;
		
		
		        c.y =
		            baseY -
		            lift *
		            centerOffset *
		            centerOffset;
		
		
		        // --------------------------------------------------
		        // STORE HOME POSITION
		        // --------------------------------------------------
		
		        c.homeX =
		            c.x;
		
		        c.homeY =
		            c.y;
		
		
		        c.hoverDist =
		            cardH *
		            HOVER_LIFT;
		
		
		        // --------------------------------------------------
		        // HIT AREA
		        // --------------------------------------------------
		
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
		
		
		        // --------------------------------------------------
		        // GOLD MIDDLE CARD
		        // --------------------------------------------------
		
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
		                new createjs.ColorMatrixFilter(m)
		            ];
		        }
		
		
		        // --------------------------------------------------
		        // CACHE
		        // --------------------------------------------------
		
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
		
		// dir: +1 = cards slide right, -1 = cards slide left
		// If no direction is given, INTRO_DIRECTION is used
		
		function animateCardsIn(dir) {
		
		    if (!cards.length) {
		        return;
		    }
		
		
		    dir =
		        dir ||
		        (
		            INTRO_DIRECTION === "right"
		                ? 1
		                : -1
		        );
		
		
		    for (
		        var i = 0;
		        i < cards.length;
		        i++
		    ) {
		
		        var card =
		            cards[i];
		
		
		        card.introDone = false;
		        card.cursor = null;
		
		
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
		
		            card.alpha = 0;
		
		        } else {
		
		            card.alpha = 1;
		        }
		
		
		        createjs.Tween.removeTweens(card);
		
		
		        var delay =
		            i *
		            INTRO_DELAY;
		
		
		        var tweenProperties = {
		            x: targetX
		        };
		
		
		        if (INTRO_FADE) {
		
		            tweenProperties.alpha = 1;
		        }
		
		
		        createjs.Tween.get(card)
		            .wait(delay)
		            .to(
		                tweenProperties,
		                INTRO_TIME,
		                createjs.Ease.backOut
		            )
		            .call(
		                function(card) {
		
		                    card.introDone = true;
		                    card.cursor = "pointer";
		
		                },
		                [card]
		            );
		    }
		}
		
		
		// --------------------------------------------------
		// WAIT ONE TICK
		// --------------------------------------------------
		
		function buildOnce() {
		
		    createjs.Ticker.removeEventListener(
		        "tick",
		        buildOnce
		    );
		
		
		    if (!alive) {
		        return;
		    }
		
		
		    createCards();
		
		    layoutCards();
		
		    animateCardsIn();
		}
		
		
		createjs.Ticker.addEventListener(
		    "tick",
		    buildOnce
		);
		
		
		// --------------------------------------------------
		// EXPOSE TO THE EGG SCRIPT
		// --------------------------------------------------
		
		self.layoutCards =
		    layoutCards;
		
		
		self.replayCardsIntro =
		    animateCardsIn;
		
		
		self.fadeOutCards =
		    function(time) {
		
		        cards.forEach(
		            function(c) {
		
		                c.introDone = false;
		                c.cursor = null;
		                c.isPointerInside = false;
		
		
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
		
		        alive = false;
		
		
		        createjs.Ticker.removeEventListener(
		            "tick",
		            buildOnce
		        );
		
		
		        cards.forEach(
		            function(c) {
		
		                createjs.Tween.removeTweens(c);
		
		                c.removeAllEventListeners();
		
		                self.removeChild(c);
		            }
		        );
		
		
		        cards = [];
		    };
		
		
		})(this);
		var self = this;
		this.stop();
		
		// Clean up the previous run first
		if (self.cleanupBottomBar) self.cleanupBottomBar();
		
		
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
		
		var EGG_COUNT = 5;
		var eggLocked = [false, true, true, true, true];
		var eggTimers = [30, 0, 0, 0, 0];
		
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
		    "00:00:30",
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
		    // SAVE ORIGINAL SCALE (only the first time)
		    // --------------------------------------------------
		
		    if (hatchButton.baseScaleX === undefined) {
		
		        hatchButton.baseScaleX = hatchButton.scaleX;
		        hatchButton.baseScaleY = hatchButton.scaleY;
		    }
		
		    hatchBaseScaleX = hatchButton.baseScaleX;
		    hatchBaseScaleY = hatchButton.baseScaleY;
		
		
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
		
		            // 96% of current size
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
		
		            // 90% of current size
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
		
		var pageDots = new createjs.Container();
		
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
		            .drawCircle(0, 0, DOT_RADIUS);
		
		        dot.shadow = new createjs.Shadow("#2496FF", 0, 0, 8);
		        dot.alpha = 1;
		
		    } else {
		
		        dot.graphics
		            .setStrokeStyle(1.5)
		            .beginStroke("#2789C9")
		            .beginFill("#123B5C")
		            .drawCircle(0, 0, DOT_RADIUS);
		
		        dot.shadow = null;
		        dot.alpha = 0.85;
		    }
		}
		
		
		// --------------------------------------------------
		// CREATE DOTS
		// --------------------------------------------------
		
		for (var i = 0; i < DOT_COUNT; i++) {
		
		    var dot = new createjs.Shape();
		
		    styleDot(dot, i === 0);
		
		    // Desktop spacing
		    dot.x =
		        (i - (DOT_COUNT - 1) / 2) *
		        DOT_SPACING;
		
		    pageDots.addChild(dot);
		}
		
		
		// --------------------------------------------------
		// SET ACTIVE DOT
		// --------------------------------------------------
		
		// Called by the egg switching script
		
		self.setActiveDot = function (index) {
		
		    currentEggIndex = index;
		
		    for (var j = 0; j < DOT_COUNT; j++) {
		
		        styleDot(pageDots.getChildAt(j), j === index);
		    }
		
		    updateCountdown();
		};
		
		
		// --------------------------------------------------
		// SAVE EGG TIMERS TO FIRESTORE
		// --------------------------------------------------
		
		function saveEggTimers() {
		
		    if (!window.SaveSystem || !window.SaveSystem.isLoaded()) {
		        return;
		    }
		
		    var endTimes = eggTimers.map(function (secs) {
		
		        if (secs <= 0) {
		            return 0;
		        }
		
		        return Date.now() + secs * 1000;
		    });
		
		    window.SaveSystem.set("eggEndTimes", endTimes.join(","));
		}
		
		
		// --------------------------------------------------
		// LOAD EGG TIMERS FROM FIRESTORE
		// --------------------------------------------------
		
		function loadEggTimers() {
		
		    if (!window.SaveSystem) {
		        console.warn("SaveSystem not ready yet");
		        return;
		    }
		
		    window.SaveSystem.load().then(function () {
		
		        var saved = window.SaveSystem.get("eggEndTimes");
		
		        if (saved && typeof saved === "string") {
		
		            var times = saved.split(",").map(Number);
		
		            for (var i = 0; i < EGG_COUNT && i < times.length; i++) {
		
		                var endTime = times[i];
		                var now = Date.now();
		
		                if (endTime > now) {
		
		                    eggTimers[i] = Math.ceil((endTime - now) / 1000);
		
		                } else {
		
		                    eggTimers[i] = 0;
		                }
		            }
		        }
		
		        updateCountdown();
		
		    }).catch(function (err) {
		        console.error("Failed to load egg timers:", err);
		    });
		}
		
		// Load timers after a short delay to ensure SaveSystem is ready
		setTimeout(function () {
		    loadEggTimers();
		}, 100);
		
		
		// --------------------------------------------------
		// UPDATE COUNTDOWN DISPLAY
		// --------------------------------------------------
		
		function updateCountdown() {
		
		    var isLocked =
		        eggLocked[currentEggIndex];
		
		    var totalSeconds =
		        isLocked
		            ? -1
		            : Math.max(0, eggTimers[currentEggIndex]);
		
		
		    // --------------------------------------------------
		    // TIMER TEXT
		    // --------------------------------------------------
		
		    if (isLocked) {
		
		        hatchTimer.text = "--:--:--";
		
		    } else {
		
		        var hours = Math.floor(
		            totalSeconds / 3600
		        );
		
		        var minutes = Math.floor(
		            (totalSeconds % 3600) / 60
		        );
		
		        var seconds =
		            totalSeconds % 60;
		
		        var hourText =
		            hours < 10
		                ? "0" + hours
		                : hours;
		
		        var minuteText =
		            minutes < 10
		                ? "0" + minutes
		                : minutes;
		
		        var secondText =
		            seconds < 10
		                ? "0" + seconds
		                : seconds;
		
		        hatchTimer.text =
		            hourText +
		            ":" +
		            minuteText +
		            ":" +
		            secondText;
		    }
		
		
		    // --------------------------------------------------
		    // UPDATE LABEL
		    // --------------------------------------------------
		
		    if (isLocked) {
		
		        timerLabels.text =
		            "LOCKED";
		
		    } else if (totalSeconds > 0) {
		
		        timerLabels.text =
		            "HOURS   •   MINUTES   •   SECONDS";
		
		    } else {
		
		        timerLabels.text =
		            "READY TO HATCH";
		    }
		
		
		    // --------------------------------------------------
		    // UPDATE HATCH BUTTON TEXT
		    // --------------------------------------------------
		
		    if (
		        hatchButton &&
		        hatchButton.hatchButtonText
		    ) {
		
		        if (isLocked) {
		
		            hatchButton.hatchButtonText.text =
		                "Egg locked";
		
		        } else if (totalSeconds > 0) {
		
		            hatchButton.hatchButtonText.text =
		                "Change the rarity.";
		
		        } else {
		
		            hatchButton.hatchButtonText.text =
		                "Hatch the egg";
		        }
		    }
		}
		
		
		// --------------------------------------------------
		// START COUNTDOWN
		// --------------------------------------------------
		
		function startCountdown() {
		
		    if (countdownTimer) {
		
		        clearInterval(
		            countdownTimer
		        );
		    }
		
		    updateCountdown();
		
		    countdownTimer = setInterval(
		        function () {
		
		            if (eggLocked[currentEggIndex]) {
		                return;
		            }
		
		            eggTimers[currentEggIndex]--;
		
		            if (eggTimers[currentEggIndex] < 0) {
		
		                eggTimers[currentEggIndex] = 0;
		            }
		
		            updateCountdown();
		
		            if (eggTimers[currentEggIndex] <= 0) {
		
		                clearInterval(
		                    countdownTimer
		                );
		
		                countdownTimer = null;
		                saveEggTimers();
		            }
		
		        },
		        1000
		    );
		}
		
		
		// --------------------------------------------------
		// LAYOUT
		// --------------------------------------------------
		
		function layoutBottomBar() {
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		
		    var portrait = H > W;
		
		
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
		
		        barHeight = Math.max(
		            118,
		            H * 0.16
		        );
		
		
		        hatchFontSize = Math.max(
		            20,
		            Math.min(28, H * 0.030)
		        );
		
		
		        timerFontSize = Math.max(
		            58,
		            Math.min(76, H * 0.082)
		        );
		
		
		        labelFontSize = Math.max(
		            13,
		            Math.min(18, H * 0.020)
		        );
		
		    } else {
		
		        // ----------------------------------------------
		        // DESKTOP / LANDSCAPE
		        // ----------------------------------------------
		
		        barHeight = Math.max(
		            82,
		            H * 0.11
		        );
		
		
		        hatchFontSize = Math.max(
		            10,
		            H * 0.014
		        );
		
		
		        timerFontSize = Math.max(
		            37,
		            H * 0.052
		        );
		
		
		        labelFontSize = Math.max(
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
		
		        // --------------------------------------------------
		        // ACTUAL TEXT HEIGHTS
		        // --------------------------------------------------
		
		        var hatchHeight =
		            hatchText.getMeasuredHeight();
		
		
		        var timerHeight =
		            hatchTimer.getMeasuredHeight();
		
		
		        var labelHeight =
		            timerLabels.getMeasuredHeight();
		
		
		        // --------------------------------------------------
		        // SAFE PADDING
		        // --------------------------------------------------
		
		        var topPadding = 6;
		        var bottomPadding = 6;
		
		
		        // --------------------------------------------------
		        // TOTAL CONTENT HEIGHT
		        // --------------------------------------------------
		
		        var contentHeight =
		            hatchHeight +
		            timerHeight +
		            labelHeight;
		
		
		        // --------------------------------------------------
		        // AVAILABLE SPACE FOR GAPS
		        // --------------------------------------------------
		
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
		
		
		        // --------------------------------------------------
		        // ROW 1
		        // --------------------------------------------------
		
		        hatchText.x =
		            W / 2;
		
		        hatchText.y =
		            barTop +
		            topPadding;
		
		
		        // --------------------------------------------------
		        // ROW 2
		        // --------------------------------------------------
		
		        hatchTimer.x =
		            W / 2;
		
		        hatchTimer.y =
		            hatchText.y +
		            hatchHeight +
		            gap;
		
		
		        // --------------------------------------------------
		        // ROW 3
		        // --------------------------------------------------
		
		        timerLabels.x =
		            W / 2;
		
		        timerLabels.y =
		            hatchTimer.y +
		            timerHeight +
		            gap;
		
		
		        // --------------------------------------------------
		        // FINAL SAFETY CHECK
		        // --------------------------------------------------
		
		        var labelBottom =
		            timerLabels.y +
		            labelHeight;
		
		
		        if (
		            labelBottom >
		            H - bottomPadding
		        ) {
		
		            var correction =
		                labelBottom -
		                (H - bottomPadding);
		
		
		            hatchText.y -= correction;
		            hatchTimer.y -= correction;
		            timerLabels.y -= correction;
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
		
		
		        // --------------------------------------------------
		        // MOBILE BUTTON MOVED HIGHER
		        // --------------------------------------------------
		
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
		
		        // Make dots 2x larger
		        pageDots.scaleX = 2;
		        pageDots.scaleY = 2;
		
		
		        // Slightly wider spacing
		        for (
		            var d = 0;
		            d < pageDots.numChildren;
		            d++
		        ) {
		
		            pageDots.getChildAt(d).x =
		                (
		                    d -
		                    (DOT_COUNT - 1) / 2
		                ) * 24;
		        }
		
		
		        if (hatchButton) {
		
		            // Dots moved higher
		            pageDots.y =
		                hatchButton.y - 75;
		
		        } else {
		
		            pageDots.y =
		                barTop - 95;
		        }
		
		    } else {
		
		        pageDots.scaleX = 1;
		        pageDots.scaleY = 1;
		
		
		        // Desktop spacing
		        for (
		            var d2 = 0;
		            d2 < pageDots.numChildren;
		            d2++
		        ) {
		
		            pageDots.getChildAt(d2).x =
		                (
		                    d2 -
		                    (DOT_COUNT - 1) / 2
		                ) * DOT_SPACING;
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
		// CLEANUP (called when leaving this frame, or on the next run)
		// --------------------------------------------------
		
		self.cleanupBottomBar = function () {
		
		    // Keep the countdown continuous across screens
		    saveEggTimers();
		
		    clearInterval(countdownTimer);
		    createjs.Ticker.removeEventListener("tick", layoutBottomBar);
		
		    self.removeChild(bottomBar);
		    self.removeChild(pageDots);
		
		    self.cleanupBottomBar = null;
		};
	}
	this.frame_2 = function() {
		this.stop();
		
		(function (self) {
		
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		    var portrait = H > W;
		
		
		    // --------------------------------------------------
		    // SETTINGS
		    // --------------------------------------------------
		
		    // Grid
		    var COLUMNS    = portrait ? 2 : 4;
		    var PER_PAGE   = 36;      // cards on each page
		    var TOTAL_EGGS = 33;      // eggs in the whole game (only page 1 for now)
		
		    // Leave room for the top bar at the top of the screen.
		    // Set to false if the top bar is not shown on this frame.
		    var RESERVE_TOP_BAR = true;
		
		    // Layout
		    var MAX_CONTENT_WIDTH = 1200;               // widest the grid and header get on PC
		    var SIDE_MARGIN       = portrait ? 24 : 40;
		    var CARD_GAP          = portrait ? 14 : 24;
		
		    // Header
		    var HEADER_HEIGHT = portrait ? 84 : 72;
		    var TITLE_SIZE    = portrait ? 34 : 30;
		    var COUNT_SIZE    = portrait ? 22 : 18;
		
		    var TITLE_COLOR = "#dbeaf5";
		    var COUNT_COLOR = "#8DBBD1";
		
		    // Light blue dividing line under the header
		    var LINE_COLOR     = "#8fd8ff";
		    var LINE_ALPHA     = 0.75;
		    var LINE_THICKNESS = 2;
		
		    // Space above the first row and below the last row
		    var SCROLL_PAD_TOP    = 20;
		    var SCROLL_PAD_BOTTOM = 40;
		
		    // Scrolling
		    var DRAG_THRESHOLD = 10;    // how far the pointer must move before it counts as a drag
		    var FRICTION       = 0.92;  // closer to 1 = glides for longer after letting go
		
		    // Text shown on a card for an egg that is not discovered yet
		    var EMPTY_TYPE = "UNDISCOVERED";
		    var EMPTY_NAME = "???";
		
		
		    // --------------------------------------------------
		    // DATA
		    // --------------------------------------------------
		
		    // null = not discovered yet.
		    // A discovered egg is an object like { type: "LUNAR", name: "Lumi" }.
		
		    var eggData = [];
		
		    for (var d = 0; d < TOTAL_EGGS; d++) {
		
		        eggData.push(null);
		    }
		
		    var currentPage = 0;
		
		
		    // --------------------------------------------------
		    // CONTAINERS
		    // --------------------------------------------------
		
		    // Viewport: clips the grid so it only shows under the header line
		    var eggsViewport = new createjs.Container();
		
		    self.addChild(eggsViewport);
		
		
		    // Invisible area that lets you start a drag in the gaps between cards
		    var scrollHit = new createjs.Shape();
		
		    eggsViewport.addChild(scrollHit);
		
		
		    // Everything that scrolls
		    var eggsContent = new createjs.Container();
		
		    eggsViewport.addChild(eggsContent);
		
		
		    // The clipping area for the viewport (not added to the stage)
		    var viewMask = new createjs.Shape();
		
		    eggsViewport.mask = viewMask;
		
		
		    // Header: title, count, and the dividing line
		    var eggsHeader = new createjs.Container();
		
		    self.addChild(eggsHeader);
		
		
		    var titleText = new createjs.Text(
		        "Eggs discovered",
		        "30px 'Marcellus'",
		        TITLE_COLOR
		    );
		
		    titleText.textAlign = "left";
		    titleText.textBaseline = "middle";
		
		    eggsHeader.addChild(titleText);
		
		
		    var countText = new createjs.Text(
		        "0 unique eggs",
		        "bold 18px 'DM Sans'",
		        COUNT_COLOR
		    );
		
		    countText.textAlign = "right";
		    countText.textBaseline = "middle";
		
		    eggsHeader.addChild(countText);
		
		
		    var headerLine = new createjs.Shape();
		
		    eggsHeader.addChild(headerLine);
		
		
		    // --------------------------------------------------
		    // STATE
		    // --------------------------------------------------
		
		    var cards = [];
		
		    var viewTop = 0;        // y where the scrolling area starts
		    var maxScroll = 0;      // furthest the grid can scroll
		
		    var scrollY = 0;
		
		    var dragging = false;
		    var dragMoved = false;  // true once a press has moved far enough to be a drag
		    var dragStartY = 0;
		    var dragStartScroll = 0;
		    var lastY = 0;
		    var lastTime = 0;
		    var velocity = 0;       // scroll speed in pixels per millisecond
		
		
		    // --------------------------------------------------
		    // HEADER COUNT
		    // --------------------------------------------------
		
		    function countDiscovered() {
		
		        var n = 0;
		
		        for (var i = 0; i < eggData.length; i++) {
		
		            if (eggData[i]) {
		
		                n++;
		            }
		        }
		
		        return n;
		    }
		
		
		    function updateDiscoveredText() {
		
		        var n = countDiscovered();
		
		        countText.text =
		            n +
		            (
		                n === 1
		                    ? " unique egg"
		                    : " unique eggs"
		            );
		    }
		
		
		    // --------------------------------------------------
		    // CARD TEXT
		    // --------------------------------------------------
		
		    function applyCardText(card) {
		
		        var data = eggData[card.eggIndex];
		
		        // The "type" label (top)
		        if (card.type) {
		
		            card.type.text =
		                data
		                    ? String(data.type).toUpperCase()
		                    : EMPTY_TYPE;
		        }
		
		        // The "MonsterName" label (second)
		        if (card.MonsterName) {
		
		            card.MonsterName.text =
		                data
		                    ? data.name
		                    : EMPTY_NAME;
		        }
		
		        // Cards are cached, so redraw the cache to show new text
		        if (card.cacheCanvas) {
		
		            card.updateCache();
		        }
		    }
		
		
		    // --------------------------------------------------
		    // CREATE / CLEAR THE CARDS FOR A PAGE
		    // --------------------------------------------------
		
		    function clearCards() {
		
		        for (var i = 0; i < cards.length; i++) {
		
		            cards[i].removeAllEventListeners();
		
		            eggsContent.removeChild(cards[i]);
		        }
		
		        cards = [];
		    }
		
		
		    function onEggCardClick(evt) {
		
		        // A press that turned into a drag is not a tap
		        if (dragMoved) {
		            return;
		        }
		
		        var card = evt.currentTarget;
		
		        console.log(
		            "Egg card tapped:",
		            card.eggIndex
		        );
		
		        // Put what should happen when a card is tapped here
		    }
		
		
		    function buildPage(page) {
		
		        if (!lib.MonsterContainer) {
		
		            console.error(
		                "MonsterContainer not found. Check AS Linkage on the symbol."
		            );
		
		            return;
		        }
		
		        clearCards();
		
		        currentPage = page;
		
		        var start = page * PER_PAGE;
		
		        var end = Math.min(
		            start + PER_PAGE,
		            TOTAL_EGGS
		        );
		
		
		        for (var i = start; i < end; i++) {
		
		            var card = new lib.MonsterContainer();
		
		            card.eggIndex = i;
		
		            card.cursor = "pointer";
		
		            // Not used on the eggs screen
		            if (card.guarding) {
		
		                card.guarding.visible = false;
		            }
		
		            card.addEventListener(
		                "click",
		                onEggCardClick
		            );
		
		            eggsContent.addChild(card);
		
		            cards.push(card);
		
		            applyCardText(card);
		        }
		
		
		        layoutEggs();
		
		        setScroll(0);
		    }
		
		
		    // --------------------------------------------------
		    // SCROLLING
		    // --------------------------------------------------
		
		    function setScroll(y) {
		
		        scrollY = Math.max(
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
		
		        dragging = true;
		        dragMoved = false;
		
		        // Stop any glide that is still going
		        velocity = 0;
		
		        dragStartY = evt.stageY;
		        dragStartScroll = scrollY;
		
		        lastY = evt.stageY;
		        lastTime = Date.now();
		    }
		
		
		    function onDragMove(evt) {
		
		        if (!dragging) {
		            return;
		        }
		
		        var y = evt.stageY;
		
		        if (!dragMoved) {
		
		            if (Math.abs(y - dragStartY) <= DRAG_THRESHOLD) {
		                return;
		            }
		
		            // The drag has started. Restart from here so the
		            // grid does not jump by the threshold distance.
		            dragMoved = true;
		
		            dragStartY = y;
		            dragStartScroll = scrollY;
		
		            lastY = y;
		            lastTime = Date.now();
		
		            return;
		        }
		
		
		        setScroll(
		            dragStartScroll -
		            (y - dragStartY)
		        );
		
		
		        // Track the speed so the grid can glide after release
		        var now = Date.now();
		        var dt = now - lastTime;
		
		        if (dt > 0) {
		
		            velocity =
		                velocity * 0.6 +
		                ((lastY - y) / dt) * 0.4;
		
		            lastY = y;
		            lastTime = now;
		        }
		    }
		
		
		    function onRelease() {
		
		        if (!dragging) {
		            return;
		        }
		
		        dragging = false;
		
		        // If the finger paused before lifting, don't glide
		        if (Date.now() - lastTime > 100) {
		
		            velocity = 0;
		        }
		    }
		
		
		    // Glide after letting go
		    function scrollTick(evt) {
		
		        if (dragging) {
		            return;
		        }
		
		        if (Math.abs(velocity) < 0.01) {
		
		            velocity = 0;
		
		            return;
		        }
		
		        setScroll(
		            scrollY +
		            velocity *
		            evt.delta
		        );
		
		        velocity *= Math.pow(
		            FRICTION,
		            evt.delta / 16.67
		        );
		
		        // Stop at the top and bottom
		        if (
		            scrollY <= 0 ||
		            scrollY >= maxScroll
		        ) {
		
		            velocity = 0;
		        }
		    }
		
		
		    // Mouse wheel (desktop)
		    var canvas =
		        self.stage
		            ? self.stage.canvas
		            : null;
		
		
		    function onWheel(e) {
		
		        e.preventDefault();
		
		        velocity = 0;
		
		        // Convert page pixels to stage pixels, so the speed
		        // feels the same however big the game is on screen
		        var unitsPerPixel =
		            canvas && canvas.clientWidth
		                ? W / canvas.clientWidth
		                : 1;
		
		        var amount =
		            e.deltaY *
		            (
		                e.deltaMode === 1
		                    ? 20
		                    : 1
		            ) *
		            unitsPerPixel;
		
		        setScroll(scrollY + amount);
		    }
		
		
		    // --------------------------------------------------
		    // LAYOUT
		    // --------------------------------------------------
		
		    function layoutEggs() {
		
		        // Same height as the top bar, so the header sits below it
		        var topOffset =
		            RESERVE_TOP_BAR
		                ? (
		                    portrait
		                        ? Math.max(82, H * 0.11)
		                        : Math.max(66, H * 0.09)
		                )
		                : 0;
		
		
		        var contentW =
		            Math.min(
		                W - SIDE_MARGIN * 2,
		                MAX_CONTENT_WIDTH
		            );
		
		        var contentLeft =
		            (W - contentW) / 2;
		
		
		        // ----------------------------------------------
		        // HEADER
		        // ----------------------------------------------
		
		        var headerMiddle =
		            topOffset +
		            HEADER_HEIGHT / 2;
		
		        var lineY =
		            topOffset +
		            HEADER_HEIGHT;
		
		
		        titleText.font =
		            TITLE_SIZE +
		            "px 'Marcellus'";
		
		        titleText.x = contentLeft;
		        titleText.y = headerMiddle;
		
		
		        countText.font =
		            "bold " +
		            COUNT_SIZE +
		            "px 'DM Sans'";
		
		        countText.x = contentLeft + contentW;
		        countText.y = headerMiddle;
		
		
		        headerLine.graphics.clear();
		
		        headerLine.graphics
		            .beginFill(LINE_COLOR)
		            .drawRect(
		                contentLeft,
		                lineY,
		                contentW,
		                LINE_THICKNESS
		            );
		
		        headerLine.alpha = LINE_ALPHA;
		
		
		        updateDiscoveredText();
		
		
		        // ----------------------------------------------
		        // SCROLLING AREA
		        // ----------------------------------------------
		
		        viewTop =
		            lineY +
		            LINE_THICKNESS;
		
		        var viewH =
		            H - viewTop;
		
		
		        viewMask.graphics.clear();
		
		        viewMask.graphics
		            .beginFill("#000")
		            .drawRect(
		                0,
		                viewTop,
		                W,
		                viewH
		            );
		
		
		        scrollHit.graphics.clear();
		
		        scrollHit.graphics
		            .beginFill("rgba(0, 0, 0, 0.02)")
		            .drawRect(
		                0,
		                viewTop,
		                W,
		                viewH
		            );
		
		
		        // ----------------------------------------------
		        // CARDS
		        // ----------------------------------------------
		
		        if (!cards.length) {
		
		            maxScroll = 0;
		
		            setScroll(0);
		
		            return;
		        }
		
		
		        var b = cards[0].nominalBounds;
		
		        var cardW =
		            (
		                contentW -
		                CARD_GAP * (COLUMNS - 1)
		            ) / COLUMNS;
		
		        var scale =
		            cardW / b.width;
		
		        var cardH =
		            b.height * scale;
		
		        var rows =
		            Math.ceil(
		                cards.length /
		                COLUMNS
		            );
		
		
		        // Sharper cards on high-density screens
		        var cacheScale =
		            scale *
		            Math.max(
		                1,
		                Math.min(
		                    2,
		                    window.devicePixelRatio || 1
		                )
		            );
		
		
		        for (var i = 0; i < cards.length; i++) {
		
		            var col = i % COLUMNS;
		            var row = Math.floor(i / COLUMNS);
		
		            var left =
		                contentLeft +
		                col * (cardW + CARD_GAP);
		
		            var top =
		                SCROLL_PAD_TOP +
		                row * (cardH + CARD_GAP);
		
		            var c = cards[i];
		
		            c.scaleX = scale;
		            c.scaleY = scale;
		
		            c.x = left - b.x * scale;
		            c.y = top - b.y * scale;
		
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
		            rows * cardH +
		            (rows - 1) * CARD_GAP +
		            SCROLL_PAD_BOTTOM;
		
		        maxScroll =
		            Math.max(
		                0,
		                contentH - viewH
		            );
		
		        // Keep the current position valid
		        setScroll(scrollY);
		    }
		
		
		    // --------------------------------------------------
		    // PUBLIC FUNCTIONS (for the rest of the game)
		    // --------------------------------------------------
		
		    // Mark an egg as discovered (or pass null to hide it again):
		    //
		    //     setEggData(0, { type: "Lunar", name: "Lumi" });
		
		    self.setEggData = function (index, data) {
		
		        if (index < 0 || index >= TOTAL_EGGS) {
		            return;
		        }
		
		        eggData[index] = data || null;
		
		        updateDiscoveredText();
		
		        for (var i = 0; i < cards.length; i++) {
		
		            if (cards[i].eggIndex === index) {
		
		                applyCardText(cards[i]);
		            }
		        }
		    };
		
		
		    // For the page buttons later: showEggPage(1) builds page 2
		    self.showEggPage = buildPage;
		
		
		    // --------------------------------------------------
		    // EVENTS
		    // --------------------------------------------------
		
		    eggsViewport.on("mousedown", onPress);
		    eggsViewport.on("pressmove", onDragMove);
		    eggsViewport.on("pressup", onRelease);
		
		    createjs.Ticker.addEventListener("tick", scrollTick);
		
		    if (canvas) {
		
		        canvas.addEventListener(
		            "wheel",
		            onWheel,
		            { passive: false }
		        );
		    }
		
		    if (self.stage) {
		
		        // Needed for finger scrolling on phones
		        createjs.Touch.enable(self.stage);
		
		        // Keep dragging even if the pointer leaves the game
		        self.stage.mouseMoveOutside = true;
		    }
		
		
		    // --------------------------------------------------
		    // CLEANUP (call when leaving this frame)
		    // --------------------------------------------------
		
		    self.cleanupEggs = function () {
		
		        createjs.Ticker.removeEventListener("tick", scrollTick);
		
		        if (canvas) {
		
		            canvas.removeEventListener("wheel", onWheel);
		        }
		
		        clearCards();
		
		        eggsViewport.removeAllEventListeners();
		
		        self.removeChild(eggsViewport);
		        self.removeChild(eggsHeader);
		
		        self.setEggData = null;
		        self.showEggPage = null;
		        self.cleanupEggs = null;
		    };
		
		
		    // --------------------------------------------------
		    // START
		    // --------------------------------------------------
		
		    buildPage(0);
		
		})(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// Layer_4
	this.Hatch = new lib.Hatch();
	this.Hatch.name = "Hatch";
	this.Hatch.parent = this;
	this.Hatch.setTransform(641.05,637,0.4193,0.4193,0,0,0,247.2,59);
	this.Hatch._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Hatch).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.egg = new lib.egg();
	this.egg.name = "egg";
	this.egg.parent = this;
	this.egg.setTransform(640,360,1,1,0,0,0,116.5,116.5);
	this.egg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.egg).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

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
		{src:"images/index_atlas_.png?1791231013526", id:"index_atlas_"},
		{src:"images/index_atlas_2.png?1791231013526", id:"index_atlas_2"}
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