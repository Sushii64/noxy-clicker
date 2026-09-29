Game.registerMod("noxynoxycordcord",{
	init:function(){
		let modDirectory = this.dir;
		// list of cursors
		// like the ones that click the cookie not your cursor
		const cursors = [
			modDirectory + '/img/cursor1.png',
			modDirectory + '/img/cursor2.png',
			modDirectory + '/img/cursor3.png',
			modDirectory + '/img/cursor4.png',
			modDirectory + '/img/cursor5.png',
			modDirectory + '/img/cursor6.png',
			modDirectory + '/img/cursor7.png',
			modDirectory + '/img/cursor8.png',
			modDirectory + '/img/cursor9.png',
			modDirectory + '/img/cursor10.png',
			modDirectory + '/img/cursor11.png',
			modDirectory + '/img/cursor12.png',
			modDirectory + '/img/cursor13.png',
			modDirectory + '/img/cursor14.png',
			modDirectory + '/img/cursor15.png',
			modDirectory + '/img/cursor16.png',
			modDirectory + '/img/cursor17.png',
			modDirectory + '/img/cursor18.png',
			modDirectory + '/img/cursor19.png',
			modDirectory + '/img/cursor20.png'

		];
		// pick a random cursor from the list
		function randomCursor() {
			Game.Loader.Replace(
				'cursor.png',
				cursors[Math.floor(Math.random() * cursors.length)]
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
		// there is a better way to do this but i'll do it another time --jade
		l("productIcon0").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon1").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon2").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon3").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon4").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon5").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon6").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon7").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon8").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon9").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon10").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon11").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon12").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon13").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon14").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon15").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon16").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon17").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon18").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIcon19").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;

		// ditto, but for locked icons
		l("productIconOff0").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff1").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff2").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff3").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff4").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff5").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff6").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff7").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff8").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff9").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff10").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff11").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff12").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff13").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff14").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff15").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff16").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff17").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff18").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;
		l("productIconOff19").style = `background: url('${modDirectory + "/img/shop_icons.png"}')`;

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
		Game.Loader.Replace('grandma.png',modDirectory + '/img/noxydefault.png');
		Game.Loader.Replace('alteredGrandma.png',modDirectory + '/img/yesxy.png');
		Game.Loader.Replace('alternateGrandma.png',modDirectory + '/img/noxyalt.png');
		Game.Loader.Replace('antiGrandma.png',modDirectory + '/img/antinoxy.png');
		Game.Loader.Replace('bankGrandma.png',modDirectory + '/img/noxybanker.png');
		Game.Loader.Replace('brainyGrandma.png',modDirectory + '/img/noxybrain.png');
		Game.Loader.Replace('bunnyGrandma.png',modDirectory + '/img/whenxy.png');
		Game.Loader.Replace('cloneGrandma.png',modDirectory + '/img/testtubexy.png');
		Game.Loader.Replace('cosmicGrandma.png',modDirectory + '/img/noxycosmic.png');
		Game.Loader.Replace('elfGrandma.png',modDirectory + '/img/christmasnoxy.png');
		Game.Loader.Replace('farmerGrandma.png',modDirectory + '/img/noxyfarmer.png');
		Game.Loader.Replace('grandmasGrandma.png',modDirectory + '/img/noxynoxy.png');
		Game.Loader.Replace('luckyGrandma.png',modDirectory + '/img/noxyluck.png');
		Game.Loader.Replace('metaGrandma.png',modDirectory + '/img/metanoxy.png');
		Game.Loader.Replace('minerGrandma.png',modDirectory + '/img/noxyminer.png');
		Game.Loader.Replace('rainbowGrandma.png',modDirectory + '/img/tricksternoxy.png');
		Game.Loader.Replace('scriptGrandma.png',modDirectory + '/img/noxyscripter.png');
		Game.Loader.Replace('templeGrandma.png',modDirectory + '/img/noxypriestress.png');
		Game.Loader.Replace('transmutedGrandma.png',modDirectory + '/img/noxytransmutated.png');
		Game.Loader.Replace('witchGrandma.png',modDirectory + '/img/noxywitch.png');
		Game.Loader.Replace('workerGrandma.png',modDirectory + '/img/noxyworker.png');
		Game.Loader.Replace('perfectCookie.png',modDirectory + '/img/cookie.png');
		Game.Loader.Replace('cookieShadow.png',modDirectory + '/img/cookieShadow.png');
		Game.Loader.Replace('farm.png',modDirectory + '/img/farm.png');
		Game.Loader.Replace('mine.png',modDirectory + '/img/mine.png');
		Game.Loader.Replace('factory.png',modDirectory + '/img/factory.png');
		Game.Loader.Replace('bank.png',modDirectory + '/img/bank.png');
		Game.Loader.Replace('temple.png',modDirectory + '/img/temple.png');
		Game.Loader.Replace('shipment.png',modDirectory + '/img/shipment.png');
		Game.Loader.Replace('wizardtower.png',modDirectory + '/img/wizardtower.png');
		Game.Loader.Replace('alchemylab.png',modDirectory + '/img/alchemylab.png');
		Game.Loader.Replace('portal.png',modDirectory + '/img/portal.png');
		Game.Loader.Replace('portalBackground.png',modDirectory + '/img/portalBackground.png');
		Game.Loader.Replace('farmBackground.png',modDirectory + '/img/farmBackground.png');
		Game.Loader.Replace('grandmaBackground.png',modDirectory + '/img/grandmaBackground.png');
		Game.Loader.Replace('mineBackground.png',modDirectory + '/img/mineBackground.png');
		Game.Loader.Replace('imperfectCookie.png',modDirectory + '/img/imperfectCookie.png');
		Game.Loader.Replace('timemachine.png',modDirectory + '/img/timemachine.png');
		Game.Loader.Replace('timemachineBackground.png',modDirectory + '/img/timemachineBackground.png');
		Game.Loader.Replace('antimattercondenser.png',modDirectory + '/img/antimattercondenser.png');
		Game.Loader.Replace('antimattercondenserBackground.png',modDirectory + '/img/antimattercondenserBackground.png');
		Game.Loader.Replace('prism.png',modDirectory + '/img/prism.png');
		Game.Loader.Replace('prismBackground.png',modDirectory + '/img/prismBackground.png');
		Game.Loader.Replace('chancemaker.png',modDirectory + '/img/chancemaker.png');
		Game.Loader.Replace('chancemakerBackground.png',modDirectory + '/img/chancemakerBackground.png');
		Game.Loader.Replace('fractalEngine.png',modDirectory + '/img/fractalengine.png');
		Game.Loader.Replace('fractalEngineBackground.png',modDirectory + '/img/fractalengineBackground.png');
		Game.Loader.Replace('javascriptconsole.png',modDirectory + '/img/javascriptconsole.png');
		Game.Loader.Replace('javascriptconsoleBackground.png',modDirectory + '/img/javascriptconsoleBackground.png');
		Game.Loader.Replace('idleverse.png',modDirectory + '/img/idleverse.png');
		Game.Loader.Replace('cortex.png',modDirectory + '/img/cortex.png');
		Game.Loader.Replace('grandmas1.jpg',modDirectory + '/img/grandmas1.png');
		Game.Loader.Replace('grandmas2.jpg',modDirectory + '/img/grandmas2.png');
		Game.Loader.Replace('grandmas3.jpg',modDirectory + '/img/grandmas3.png');
		Game.Loader.Replace('wrinkler.png',modDirectory + '/img/wrinkler.png');
		Game.Loader.Replace('wrinkler.png',modDirectory + '/img/wrinkler.png');
		Game.Loader.Replace('winterWinkler.png',modDirectory + '/img/winterWinkler.png');
		Game.Loader.Replace('winterWrinkler.png',modDirectory + '/img/winterWrinkler.png');


		// hook into the golden init function and replace its picture
		let oldInitFunc = Game.shimmerTypes['golden'].initFunc;

		Game.shimmerTypes['golden'].initFunc = function(me) {
			oldInitFunc.call(this, me);

			me.l.style.backgroundImage = `url('${modDirectory + "/img/goldencookie.png"}')`;
		};

		// change grandma names and some more pictures
		Game.grandmaNames = [
			'Wherexy', 'Howxy' , 'Whoxy', 'Whenxy', 'Noxy', 'Whatxy'
		];
		Game.Loader.Replace('bankBackground.png',modDirectory + '/img/bankBackground.png');
		Game.Loader.Replace('templeBackground.png',modDirectory + '/img/templeBackground.png');
		Game.Loader.Replace('wizardtowerBackground.png',modDirectory + '/img/wizardtowerBackground.png');


		// change upgrade icons
		Game.Upgrades['Reinforced index finger'].icon = [0,0, modDirectory + '/img/icons.png'];

		Game.Upgrades['Forwards from grandma'].icon = [1,0, modDirectory + '/img/icons.png'];

		Game.Upgrades['Cheap hoes'].icon = [2,0, modDirectory + '/img/icons.png'];

		Game.Upgrades['Sugar gas'].icon = [3,0, modDirectory + '/img/icons.png'];

		Game.Upgrades['Sturdier conveyor belts'].icon = [4,0, modDirectory + '/img/icons.png'];

		Game.Upgrades['Vanilla nebulae'].icon = [5,0, modDirectory + '/img/icons.png'];
	}
});
