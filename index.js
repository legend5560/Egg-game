(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1884,828,84,117],[988,828,894,540],[1508,1370,188,188],[1312,1370,194,194],[1698,1370,51,51],[0,1348,894,148],[0,1498,894,20],[896,1304,62,62],[514,1304,46,29],[960,1332,4,12],[592,1304,29,21],[514,834,468,468],[960,1304,26,26],[562,1304,28,28],[896,1370,414,99],[1508,1560,414,7],[896,1471,414,88],[988,0,980,826],[0,0,986,832],[0,834,512,512]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eggsketches2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(19);
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
	this.instance = new lib.CachedTexturedBitmap_16();
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
	this.instance = new lib.CachedTexturedBitmap_15();
	this.instance.parent = this;
	this.instance.setTransform(21.5,310.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,328.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.3,143.85,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(196.5,108,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(198,109.5,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.5,21.5,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonsterCard, new cjs.Rectangle(-1.5,-1.5,493,416), null);


(lib.lock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_19();
	this.instance.parent = this;
	this.instance.setTransform(3.25,-0.95,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.55,11.7,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_17();
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
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(23.65,40.15,1.1924,1.1924);

	this.instance_1 = new lib.CachedTexturedBitmap_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(432.05,41.4,1.1924,1.1924);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkFAJOQhCAAgvgvQgvgvAAhCIAAtbQAAhCAvgvQAvgvBCAAMBILAAAQBCAAAvAvQAvAvAABCIAANbQAABCgvAvQgvAvhCAAg");
	mask.setTransform(247,59);

	// Layer_3
	this.instance_2 = new lib.CachedTexturedBitmap_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2.95,1.1924,1.1924);

	this.instance_3 = new lib.CachedTexturedBitmap_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,110,1.1924,1.1924);

	this.instance_4 = new lib.CachedTexturedBitmap_5();
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
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-20.85,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cryst, new cjs.Rectangle(-20.8,0,42,58.5), null);


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.eggs();
	this.instance.parent = this;
	this.instance.setTransform(114.85,88,0.7021,0.7021,0,0,0,255.7,255.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(-80.1,-100.8,390.9,390.90000000000003), null);


// stage content:
(lib.Egggame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{menu:0,game:1});

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
		        var DEFAULTS = { starGems: 0, cryst: 0 };
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
		                        if (f[n] && f[n].integerValue !== undefined) {
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
		                    if (typeof stored[n] === "number") {
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
		                fields[n] = { integerValue: String(data[n]) };
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
		            value = clean(value);
		            if (value === data[name]) return true;
		
		            data[name] = value;
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
		
		
		var sluggity = new Monster({
		
		    monsterId: 2,
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
		
		
		var starn = new Monster({
		
		    monsterId: 3,
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
		
		    // Raise egg
		    egg.y -= lib.properties.height * EGG_RAISE;
		
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
		        var originalY = egg.y;
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
		                egg.y = originalY;
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
		
		function floatEggs(evt) {
		
		    var deltaSeconds =
		        evt.delta / 1000;
		
		    // Don't interfere with the Y position while shaking
		    if (egg.eggShaking) {
		        return;
		    }
		
		    egg.floatTime += deltaSeconds;
		
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
		
		var NAV_BUTTON_SIZE = 46;      // button height
		var NAV_BUTTON_WIDTH = 32;     // button width (smaller than the height)
		var NAV_BUTTON_RADIUS = 10;
		
		var NAV_BUTTON_ALPHA = 0.65;
		
		var NAV_OUTLINE_COLOR =
		    "#8FD8FF";
		
		var NAV_EGG_GAP = 230;         // distance from the egg to each button
		
		var NAV_DISABLED_ALPHA = 0.3;  // how faded the left button is on the first egg
		
		
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
		// POSITION BUTTONS
		// --------------------------------------------------
		
		// These NEVER update when the egg floats.
		
		leftButton.x =
		    navEggX - NAV_EGG_GAP;
		
		leftButton.y =
		    navEggY;
		
		
		rightButton.x =
		    navEggX + NAV_EGG_GAP;
		
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
		// DRAW MENU BUTTON
		// --------------------------------------------------
		
		function drawMenuButton(size, color) {
		
		    var radius = size * 0.22;
		
		    var lineLeft = size * 0.28;
		    var lineRight = size * 0.72;
		
		    var line1Y = size * 0.31;
		    var line2Y = size * 0.50;
		    var line3Y = size * 0.69;
		
		
		    // Background
		
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
		
		
		    // Line 1
		
		    line1.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke("#b9d8eb")
		        .moveTo(
		            lineLeft,
		            line1Y
		        )
		        .lineTo(
		            lineRight,
		            line1Y
		        );
		
		
		    // Line 2
		
		    line2.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke("#b9d8eb")
		        .moveTo(
		            lineLeft,
		            line2Y
		        )
		        .lineTo(
		            lineRight,
		            line2Y
		        );
		
		
		    // Line 3
		
		    line3.graphics.clear()
		        .setStrokeStyle(1)
		        .beginStroke("#b9d8eb")
		        .moveTo(
		            lineLeft,
		            line3Y
		        )
		        .lineTo(
		            lineRight,
		            line3Y
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
		
		
		// --------------------------------------------------
		// MENU BUTTON EVENTS
		// --------------------------------------------------
		
		settingsBtn.addEventListener(
		    "rollover",
		    function() {
		
		        drawMenuButton(
		            settingsBtn.buttonSize,
		            "#8fd8ff"
		        );
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "rollout",
		    function() {
		
		        drawMenuButton(
		            settingsBtn.buttonSize,
		            "#527896"
		        );
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "mousedown",
		    function() {
		
		        settingsBtn.scaleX = 0.88;
		        settingsBtn.scaleY = 0.88;
		
		        drawMenuButton(
		            settingsBtn.buttonSize,
		            "#8fd8ff"
		        );
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "pressup",
		    function() {
		
		        settingsBtn.scaleX = 1;
		        settingsBtn.scaleY = 1;
		
		        drawMenuButton(
		            settingsBtn.buttonSize,
		            "#527896"
		        );
		    }
		);
		
		
		settingsBtn.addEventListener(
		    "click",
		    function() {
		
		        // TEMPORARY TEST: remove the // to add 10 Star Gems on each click
		        // SaveSystem.add("starGems", 10);
		
		        // Put your menu-opening code here
		
		    }
		);
		
		
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
		
		
		    drawMenuButton(
		        menuSize,
		        "#527896"
		    );
		
		
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
		
		
		    var gemBounds =
		        gemIcon.getBounds();
		
		
		    if (gemBounds) {
		
		        gemIcon.scaleX =
		            gemIconSize /
		            gemBounds.width;
		
		        gemIcon.scaleY =
		            gemIconSize /
		            gemBounds.height;
		    }
		
		
		    gemIcon.x =
		        currencyPaddingLeft;
		
		    gemIcon.y =
		        -gemIconSize / 2;
		
		
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
		
		
		    var crystBounds =
		        crystIcon.getBounds();
		
		
		    if (crystBounds) {
		
		        crystIcon.scaleX =
		            crystIconSize /
		            crystBounds.width;
		
		        crystIcon.scaleY =
		            crystIconSize /
		            crystBounds.height;
		    }
		
		
		    crystIcon.x =
		        currencyPaddingLeft;
		
		    crystIcon.y =
		        -crystIconSize / 2;
		
		
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
		}
		
		
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
		
		exportRoot.onUserChange = showName;
		
		
		// --------------------------------------------------
		// FLOATING EGG
		// --------------------------------------------------
		
		var startY = self.egg.y + 10;
		var time = 0;
		
		var EGG_RAISE = 0.15;
		
		self.egg.y -= lib.properties.height * EGG_RAISE;
		
		
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
		// COUNTDOWN
		// --------------------------------------------------
		
		var countdownSeconds = 30;
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
		
		    hatchButton.cursor = "pointer";
		
		
		    // --------------------------------------------------
		    // SAVE ORIGINAL SCALE
		    // --------------------------------------------------
		
		    hatchBaseScaleX = hatchButton.scaleX;
		    hatchBaseScaleY = hatchButton.scaleY;
		
		
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
		
		    for (var j = 0; j < DOT_COUNT; j++) {
		
		        styleDot(pageDots.getChildAt(j), j === index);
		    }
		};
		
		
		// --------------------------------------------------
		// UPDATE COUNTDOWN DISPLAY
		// --------------------------------------------------
		
		function updateCountdown() {
		
		    var totalSeconds = Math.max(
		        0,
		        countdownSeconds
		    );
		
		
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
		
		
		    // --------------------------------------------------
		    // TIMER
		    // --------------------------------------------------
		
		    hatchTimer.text =
		        hourText +
		        ":" +
		        minuteText +
		        ":" +
		        secondText;
		
		
		    // --------------------------------------------------
		    // UPDATE LABEL
		    // --------------------------------------------------
		
		    if (totalSeconds > 0) {
		
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
		
		        if (totalSeconds > 0) {
		
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
		
		
		    countdownSeconds = 30;
		
		    updateCountdown();
		
		
		    countdownTimer = setInterval(
		        function () {
		
		            countdownSeconds--;
		
		
		            if (countdownSeconds < 0) {
		
		                countdownSeconds = 0;
		            }
		
		
		            updateCountdown();
		
		
		            if (countdownSeconds <= 0) {
		
		                clearInterval(
		                    countdownTimer
		                );
		
		                countdownTimer = null;
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.Hatch = new lib.Hatch();
	this.Hatch.name = "Hatch";
	this.Hatch.parent = this;
	this.Hatch.setTransform(641.05,637,0.4193,0.4193,0,0,0,247.2,59);
	this.Hatch._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Hatch).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.egg = new lib.egg();
	this.egg.name = "egg";
	this.egg.parent = this;
	this.egg.setTransform(640,360,1,1,0,0,0,116.5,116.5);
	this.egg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.egg).wait(1).to({_off:false},0).wait(1));

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
		{src:"images/index_atlas_.png?1791162396801", id:"index_atlas_"}
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