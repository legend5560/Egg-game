(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[470,1028,188,188],[470,834,192,192],[470,1218,51,51],[896,1370,894,20],[988,828,894,540],[988,0,980,826],[0,0,986,832],[0,1304,894,148],[0,834,468,468]]}
];


// symbols:



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_30 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_31 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_33 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_36 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_38 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_41 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_42 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
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
	this.instance = new lib.CachedTexturedBitmap_33();
	this.instance.parent = this;
	this.instance.setTransform(21.5,310.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,328.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.3,143.85,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(197,108.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(198,109.5,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.5,21.5,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_41();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.5,-1.5,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonsterCard, new cjs.Rectangle(-1.5,-1.5,493,416), null);


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_8();
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
		
		exportRoot.onUserChange = showName;
		
		// --- Floating egg ---
		var startY = self.egg.y + 10;
		var time = 0;
		
		// ---------- Floating egg ----------
		var EGG_RAISE = 0.15;                      // how far to move the egg up (share of stage height)
		self.egg.y -= lib.properties.height * EGG_RAISE;
		
		var startY = self.egg.y;
		self.eggRestY = startY;                    // the cards script reads this (it never moves the egg)
		var time = 0;
		
		function floatEgg(evt) {
		    time += evt.delta / 1000;
		    self.egg.y = startY + Math.sin(time * 1.5) * 15;
		}
		createjs.Ticker.addEventListener("tick", floatEgg);
		
		// ---------- Clean up when leaving this screen ----------
		this.cleanup = function() {
		    exportRoot.onUserChange = null;
		    createjs.Ticker.removeEventListener("tick", floatEgg);
		    if (self.cleanupCards) self.cleanupCards();
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
		(function(self) {
		    var W = lib.properties.width;
		    var H = lib.properties.height;
		    var portrait = H > W;
		
		    // ---------- Settings ----------
		    var CARD_COUNT    = 5;
		    var CARD_SIZE     = portrait ? 0.17 : 0.12;  // card width, share of stage width
		    var ROW_SPAN      = portrait ? 0.92 : 0.72;  // share of stage width the arc spreads across
		    var GAP_BELOW_EGG = 0.02;                    // space under the egg, share of stage height
		    var CARDS_RAISE   = 0.09;                    // extra lift for the whole arc, share of stage height
		    var LIFT          = 0.40;                    // how high the outer cards rise (share of card height)
		
		    // Hover
		    var HOVER_LIFT = 0.12;                       // how far a hovered card rises (share of card height)
		    var HOVER_TIME = 150;                        // milliseconds to rise
		
		    // Golden middle card
		    var GOLD_INDEX = Math.floor(CARD_COUNT / 2);
		    var GOLD = { hue: -154, saturation: 50, brightness: 45 };
		
		    var cards = [];
		    var alive = true;
		
		    // Hover only makes sense with a mouse; touch screens have no hover
		    var canHover = !!(window.matchMedia && window.matchMedia("(hover: hover)").matches);
		
		    function createCards() {
		        if (!lib.MonsterCard) {
		            console.error("MonsterCard not found. Check AS Linkage on the symbol.");
		            return;
		        }
		        if (canHover) self.stage.enableMouseOver(20);   // needed for rollover/rollout
		
		        for (var i = 0; i < CARD_COUNT; i++) {
		            var card = new lib.MonsterCard();
		            card.slotIndex = i;
		            card.monster = null;
		            card.cursor = "pointer";
		            if (card.label) card.label.text = "Select a monster";
		            card.addEventListener("click", onCardClick);
		            if (canHover) {
		                card.addEventListener("rollover", onCardOver);
		                card.addEventListener("rollout", onCardOut);
		            }
		            self.addChild(card);
		            cards.push(card);
		        }
		    }
		
		    function onCardClick(evt) {
		        console.log("Card tapped:", evt.currentTarget.slotIndex);
		    }
		
		    // ---------- Hover tween ----------
		    function onCardOver(evt) { moveCard(evt.currentTarget, true); }
		    function onCardOut(evt)  { moveCard(evt.currentTarget, false); }
		
		    function moveCard(card, up) {
		        var targetY = up ? card.homeY - card.hoverDist : card.homeY;
		        createjs.Tween.get(card, { override: true })     // override: cancels any tween still running
		            .to({ y: targetY }, up ? HOVER_TIME : HOVER_TIME + 50, createjs.Ease.quadOut);
		    }
		
		    function layoutCards() {
		        var n = cards.length;
		        if (!n) return;
		
		        var b = cards[0].nominalBounds;
		        var cardW = W * CARD_SIZE;
		        var scale = cardW / b.width;
		        var cardH = b.height * scale;
		
		        // Read-only look at the egg's resting position
		        var eggX = self.egg.x;
		        var restY = (typeof self.eggRestY === "number") ? self.eggRestY : self.egg.y;
		        var eb = self.egg.nominalBounds;
		        var eggBottom = restY + (eb ? (eb.y + eb.height) * self.egg.scaleY : 130);
		
		        // Vertical center of the middle (lowest) card, kept on screen
		        var baseY = Math.min(eggBottom + H * (GAP_BELOW_EGG - CARDS_RAISE) + cardH / 2,
		                             H - cardH / 2 - 20);
		        var lift = cardH * LIFT;
		
		        var half = (W * ROW_SPAN - cardW) / 2;   // middle to outer card centers
		        var mid = (n - 1) / 2;
		
		        for (var i = 0; i < n; i++) {
		            var t = mid ? (i - mid) / mid : 0;   // -1 far left ... 0 middle ... +1 far right
		            var c = cards[i];
		
		            c.scaleX = c.scaleY = scale;
		            c.regX = b.x + b.width / 2;
		            c.regY = b.y + b.height / 2;
		            c.x = eggX + t * half;
		            c.y = baseY - lift * t * t;          // curve: middle stays, edges rise
		
		            // Remember the resting spot and how far to rise on hover
		            c.homeY = c.y;
		            c.hoverDist = cardH * HOVER_LIFT;
		
		            // Hit area stretched downward by the hover distance, so the card
		            // doesn't flicker when it rises out from under the mouse
		            var hit = new createjs.Shape();
		            hit.graphics.beginFill("#000")
		                .drawRect(b.x, b.y, b.width, b.height + c.hoverDist / scale);
		            c.hitArea = hit;
		
		            if (i === GOLD_INDEX && createjs.ColorMatrixFilter) {
		                var m = new createjs.ColorMatrix()
		                    .adjustColor(GOLD.brightness, 0, GOLD.saturation, GOLD.hue);
		                c.filters = [new createjs.ColorMatrixFilter(m)];
		            }
		            c.cache(b.x, b.y, b.width, b.height, scale * 2);
		        }
		    }
		
		    // Wait one tick so the egg is already in its final spot
		    function buildOnce() {
		        createjs.Ticker.removeEventListener("tick", buildOnce);
		        if (!alive) return;
		        createCards();
		        layoutCards();
		    }
		    createjs.Ticker.addEventListener("tick", buildOnce);
		
		    // Called by the main script's cleanup
		    self.cleanupCards = function() {
		        alive = false;
		        createjs.Ticker.removeEventListener("tick", buildOnce);
		        cards.forEach(function(c) {
		            createjs.Tween.removeTweens(c);
		            c.removeAllEventListeners();
		            self.removeChild(c);
		        });
		        cards = [];
		    };
		})(this);
		// --------------------------------------------------
		// ENABLE MOUSE OVER
		// --------------------------------------------------
		
		if (exportRoot.stage) {
		    exportRoot.stage.enableMouseOver(20);
		}
		
		
		// --------------------------------------------------
		// ENABLE TOUCH
		// --------------------------------------------------
		
		if (exportRoot.stage) {
		    createjs.Touch.enable(exportRoot.stage);
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
		// HOVER ON - PC
		// --------------------------------------------------
		
		settingsBtn.addEventListener("rollover", function () {
		
		    drawMenuBg("#8fd8ff");
		    drawMenuLines("#8fd8ff");
		
		});
		
		
		// --------------------------------------------------
		// HOVER OFF - PC
		// --------------------------------------------------
		
		settingsBtn.addEventListener("rollout", function () {
		
		    drawMenuBg("#527896");
		    drawMenuLines("#b9d8eb");
		
		});
		
		
		// --------------------------------------------------
		// PRESS DOWN - MOUSE / TOUCH
		// --------------------------------------------------
		
		settingsBtn.addEventListener("mousedown", function () {
		
		    // Pressed appearance
		    drawMenuBg("#8fd8ff");
		    drawMenuLines("#8fd8ff");
		
		});
		
		
		// --------------------------------------------------
		// RELEASE - MOUSE / TOUCH
		// --------------------------------------------------
		
		settingsBtn.addEventListener("pressup", function () {
		
		    // Return to normal appearance
		    drawMenuBg("#527896");
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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,757,477);
// library properties:
lib.properties = {
	id: '6EA4766156B7B04292821C2C02025349',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#0099CC",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1790997026199", id:"index_atlas_"}
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