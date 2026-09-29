Game.registerMod("noxynoxycordcord",{
	init:function(){
		const MOD_DIR = this.dir;
		// list of cursors
		// like the ones that click the cookie not your cursor
		const CURSORS = [
			MOD_DIR + '/img/cursor1.png',
			MOD_DIR + '/img/cursor2.png',
			MOD_DIR + '/img/cursor3.png',
			MOD_DIR + '/img/cursor4.png',
			MOD_DIR + '/img/cursor5.png',
			MOD_DIR + '/img/cursor6.png',
			MOD_DIR + '/img/cursor7.png',
			MOD_DIR + '/img/cursor8.png',
			MOD_DIR + '/img/cursor9.png',
			MOD_DIR + '/img/cursor10.png',
			MOD_DIR + '/img/cursor11.png',
			MOD_DIR + '/img/cursor12.png',
			MOD_DIR + '/img/cursor13.png',
			MOD_DIR + '/img/cursor14.png',
			MOD_DIR + '/img/cursor15.png',
			MOD_DIR + '/img/cursor16.png',
			MOD_DIR + '/img/cursor17.png',
			MOD_DIR + '/img/cursor18.png',
			MOD_DIR + '/img/cursor19.png',
			MOD_DIR + '/img/cursor20.png'

		];
		// pick a random cursor from the list
		function randomCursor() {
			Game.Loader.Replace(
				'cursor.png',
				CURSORS[Math.floor(Math.random() * CURSORS.length)]
			);

			Game.RefreshStore();
		}

		randomCursor();

		// swaps the cursor every 2500 milliseconds (2.5 seconds)
		setInterval(randomCursor, 2500);

		// hooks into the draw function and swap "cookies" with "noxies"
		Game.registerHook('draw', function() {
			var cookieTextElement = l('cookies');
			if (cookieTextElement) {
				// Retains the live game number but replaces the text following it
				var currentNumber = Beautify(Math.round(Game.cookiesd));
				cookieTextElement.innerHTML = currentNumber + ' noxies<div style="font-size:50%;">per second : ' + Beautify(Game.cookiesPs, 1) + '</div>';
			}
		});

		// set up all shop icons

		const SHOP_ICON_COUNT = 19;

		for (let i = 0; i <= 19; i++) {
			l(`productIcon${i}`).style = `background: url('${MOD_DIR + "/img/shop_icons.png"}')`;
			l(`productIconOff${i}`).style = `background: url('${MOD_DIR + "/img/shop_icons.png"}')`; // locked icons
		}

		// set up building names
		Game.ObjectsById[0].displayName = "Noxycord";
		Game.ObjectsById[1].displayName = "__xys";
		Game.ObjectsById[2].displayName = "Hemorrhoids";
		Game.ObjectsById[3].displayName = "Finley Mines";
		Game.ObjectsById[4].displayName = "Goo Factory";
		Game.ObjectsById[5].displayName = "Nick Walker";
		Game.ObjectsById[6].displayName = "Cline Temple";
		Game.ObjectsById[7].displayName = "Nova Tower";
		Game.ObjectsById[8].displayName = "Doxy Rocket";
		Game.ObjectsById[9].displayName = "Alchemiter";
		Game.ObjectsById[10].displayName = "Pane";
		Game.ObjectsById[11].displayName = "Tardis Wiki";
		Game.ObjectsById[12].displayName = "Vibri";
		Game.ObjectsById[13].displayName = "Oil Dog";
		Game.ObjectsById[14].displayName = "Vriska";
		Game.ObjectsById[15].displayName = "Burgerfucking";
		Game.ObjectsById[16].displayName = "Pancreant";
		Game.ObjectsById[17].displayName = "Genesis Horsexy";
		Game.ObjectsById[18].displayName = "Sasha Quatch";
		Game.ObjectsById[19].displayName = "MVriska";
		Game.RefreshStore(); // refresh the names

		// change building pictures

		let replace = { // this list just makes it easier to add files
			// the first thing is the original filename, and the second is the filename of the file within the mod directory
			'grandma': 'noxydefault',
			'alteredGrandma': 'yesxy',
			'alternateGrandma': 'noxyalt',
			'antiGrandma': 'antinoxy',
			'bankGrandma': 'noxybanker',
			'brainyGrandma': 'noxybrain',
			'bunnyGrandma': 'whenxy',
			'cloneGrandma': 'testtubexy',
			'cosmicGrandma': 'noxycosmic',
			'elfGrandma': 'christmasnoxy',
			'farmerGrandma': 'noxyfarmer',
			'grandmasGrandma': 'noxynoxy',
			'luckyGrandma': 'noxyluck',
			'metaGrandma': 'metanoxy',
			'minerGrandma': 'noxyminer',
			'rainbowGrandma': 'tricksternoxy',
			'scriptGrandma': 'noxyscripter',
			'templeGrandma': 'noxypriestress',
			'transmutedGrandma': 'noxytransmutated',
			'witchGrandma': 'noxywitch',
			'workerGrandma': 'noxyworker',
			'perfectCookie': 'cookie',
			'cookieShadow': 'cookieShadow',
			'farm': 'farm',
			'mine': 'mine',
			'factory': 'factory',
			'bank': 'bank',
			'temple': 'temple',
			'shipment': 'shipment',
			'wizardtower': 'wizardtower',
			'alchemylab': 'alchemylab',
			'portal': 'portal',
			'portalBackground': 'portalBackground',
			'farmBackground': 'farmBackground',
			'grandmaBackground': 'grandmaBackground',
			'mineBackground': 'mineBackground',
			'bankBackground': 'bankBackground',
			'templeBackground': 'templeBackground',
			'wizardtowerBackground': 'wizardtowerBackground',
			'imperfectCookie': 'imperfectCookie',
			'timemachine': 'timemachine',
			'timemachineBackground': 'timemachineBackground',
			'antimattercondenser': 'antimattercondenser',
			'antimattercondenserBackground': 'antimattercondenserBackground',
			'prism': 'prism',
			'prismBackground': 'prismBackground',
			'chancemaker': 'chancemaker',
			'chancemakerBackground': 'chancemakerBackground',
			'fractalEngine': 'fractalengine',
			'fractalEngineBackground': 'fractalengineBackground',
			'javascriptconsole': 'javascriptconsole',
			'javascriptconsoleBackground': 'javascriptconsoleBackground',
			'idleverse': 'idleverse',
			'cortex': 'cortex',
			'grandmas1': 'grandmas1',
			'grandmas2': 'grandmas2',
			'grandmas3': 'grandmas3',
			'wrinkler': 'wrinkler',
			'winterWinkler': 'winterWinkler',
			'winterWrinkler': 'winterWrinkler'
		};


		for (path in replace) {
			Game.Loader.Replace(`${path}.png`,`${MOD_DIR}/img/${replace[path]}.png`);
		}

		// hook into the golden init function and replace its picture
		let oldInitFunc = Game.shimmerTypes['golden'].initFunc;

		Game.shimmerTypes['golden'].initFunc = function(me) {
			oldInitFunc.call(this, me);

			me.l.style.backgroundImage = `url('${MOD_DIR + "/img/goldencookie.png"}')`;
		};

		// change grandma names and some more pictures
		Game.grandmaNames = [
			'Wherexy', 'Howxy' , 'Whoxy', 'Whenxy', 'Noxy', 'Whatxy'
		];

		// change upgrade icons
		Game.Upgrades['Reinforced index finger'].icon = [0,0, MOD_DIR + '/img/icons.png'];

		Game.Upgrades['Forwards from grandma'].icon = [1,0, MOD_DIR + '/img/icons.png'];

		Game.Upgrades['Cheap hoes'].icon = [2,0, MOD_DIR + '/img/icons.png'];

		Game.Upgrades['Sugar gas'].icon = [3,0, MOD_DIR + '/img/icons.png'];

		Game.Upgrades['Sturdier conveyor belts'].icon = [4,0, MOD_DIR + '/img/icons.png'];

		Game.Upgrades['Vanilla nebulae'].icon = [5,0, MOD_DIR + '/img/icons.png'];
	}
});
