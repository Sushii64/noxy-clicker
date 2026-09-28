Game.registerMod("noxynoxycordcord",{
	init:function(){
		const cursors = [
			this.dir + '/cursor1.png',
			this.dir + '/cursor2.png',
			this.dir + '/cursor3.png',
			this.dir + '/cursor4.png',
			this.dir + '/cursor5.png',
			this.dir + '/cursor6.png',
			this.dir + '/cursor7.png',
			this.dir + '/cursor8.png',
			this.dir + '/cursor9.png',
			this.dir + '/cursor10.png',
			this.dir + '/cursor11.png',
			this.dir + '/cursor12.png',
			this.dir + '/cursor13.png',
			this.dir + '/cursor14.png',
			this.dir + '/cursor15.png',
			this.dir + '/cursor16.png',
			this.dir + '/cursor17.png',
			this.dir + '/cursor18.png',
			this.dir + '/cursor19.png',
			this.dir + '/cursor20.png'

		];
		function randomCursor() {
			Game.Loader.Replace(
				'cursor.png',
				cursors[Math.floor(Math.random() * cursors.length)]
			);

			Game.RefreshStore();
		}

		randomCursor();

		setInterval(randomCursor, 2500);

		Game.registerHook('draw', function() {
			var cookieTextElement = l('cookies');
			if (cookieTextElement) {
				// Retains the live game number but replaces the text following it
				var currentNumber = Beautify(Math.round(Game.cookiesd));
				cookieTextElement.innerHTML = currentNumber + ' noxies<div style="font-size:50%;">per second : ' + Beautify(Game.cookiesPs, 1) + '</div>';
			}
		});


		l("productIcon0").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon1").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/yesxygrandma.png"}')`;
		l("productIcon2").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon3").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon4").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon5").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon6").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon7").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon8").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon9").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon10").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon11").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon12").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon13").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon14").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIcon15").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIcon16").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIcon17").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIcon18").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIcon19").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;


		l("productIconOff0").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff1").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff2").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff3").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff4").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff5").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff6").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff7").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff8").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff9").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff10").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff11").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff12").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff13").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff14").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;
		l("productIconOff15").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIconOff16").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIconOff17").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIconOff18").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/betterbuildings.png"}')`;
		l("productIconOff19").style = `background: url('${"https://file.garden/aqowuM9iLHY0tNO1/buildings-Recovered.png"}')`;


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
		Game.RefreshStore();
		Game.Loader.Replace('grandma.png',this.dir+'/noxydefault.png');
		Game.Loader.Replace('alteredGrandma.png',this.dir+'/yesxy.png');
		Game.Loader.Replace('alternateGrandma.png',this.dir+'/noxyalt.png');
		Game.Loader.Replace('antiGrandma.png',this.dir+'/antinoxy.png');
		Game.Loader.Replace('bankGrandma.png',this.dir+'/noxybanker.png');
		Game.Loader.Replace('brainyGrandma.png',this.dir+'/noxybrain.png');
		Game.Loader.Replace('bunnyGrandma.png',this.dir+'/whenxy.png');
		Game.Loader.Replace('cloneGrandma.png',this.dir+'/testtubexy.png');
		Game.Loader.Replace('cosmicGrandma.png',this.dir+'/noxycosmic.png');
		Game.Loader.Replace('elfGrandma.png',this.dir+'/christmasnoxy.png');
		Game.Loader.Replace('farmerGrandma.png',this.dir+'/noxyfarmer.png');
		Game.Loader.Replace('grandmasGrandma.png',this.dir+'/noxynoxy.png');
		Game.Loader.Replace('luckyGrandma.png',this.dir+'/noxyluck.png');
		Game.Loader.Replace('metaGrandma.png',this.dir+'/metanoxy.png');
		Game.Loader.Replace('minerGrandma.png',this.dir+'/noxyminer.png');
		Game.Loader.Replace('rainbowGrandma.png',this.dir+'/tricksternoxy.png');
		Game.Loader.Replace('scriptGrandma.png',this.dir+'/noxyscripter.png');
		Game.Loader.Replace('templeGrandma.png',this.dir+'/noxypriestress.png');
		Game.Loader.Replace('transmutedGrandma.png',this.dir+'/noxytransmutated.png');
		Game.Loader.Replace('witchGrandma.png',this.dir+'/noxywitch.png');
		Game.Loader.Replace('workerGrandma.png',this.dir+'/noxyworker.png');
		Game.Loader.Replace('perfectCookie.png',this.dir+'/cookie.png');
		    Game.Loader.Replace('cookieShadow.png',this.dir+'/cookieShadow.png');
		    Game.Loader.Replace('farm.png',this.dir+'/farm.png');
		    Game.Loader.Replace('mine.png',this.dir+'/mine.png');
		    Game.Loader.Replace('factory.png',this.dir+'/factory.png');
		    Game.Loader.Replace('bank.png',this.dir+'/bank.png');
		    Game.Loader.Replace('temple.png',this.dir+'/temple.png');
			Game.Loader.Replace('shipment.png',this.dir+'/shipment.png');
			Game.Loader.Replace('wizardtower.png',this.dir+'/wizardtower.png');
			Game.Loader.Replace('alchemylab.png',this.dir+'/alchemylab.png');
			Game.Loader.Replace('portal.png',this.dir+'/portal.png');
			Game.Loader.Replace('portalBackground.png',this.dir+'/portalBackground.png');
			Game.Loader.Replace('farmBackground.png',this.dir+'/farmBackground.png');
			Game.Loader.Replace('grandmaBackground.png',this.dir+'/grandmaBackground.png');
			Game.Loader.Replace('mineBackground.png',this.dir+'/mineBackground.png');
			Game.Loader.Replace('imperfectCookie.png',this.dir+'/imperfectCookie.png');
			Game.Loader.Replace('timemachine.png',this.dir+'/timemachine.png');
			Game.Loader.Replace('timemachineBackground.png',this.dir+'/timemachineBackground.png');
			Game.Loader.Replace('antimattercondenser.png',this.dir+'/antimattercondenser.png');
			Game.Loader.Replace('antimattercondenserBackground.png',this.dir+'/antimattercondenserBackground.png');
			Game.Loader.Replace('prism.png',this.dir+'/prism.png');
			Game.Loader.Replace('prismBackground.png',this.dir+'/prismBackground.png');
			Game.Loader.Replace('chancemaker.png',this.dir+'/chancemaker.png');
			Game.Loader.Replace('chancemakerBackground.png',this.dir+'/chancemakerBackground.png');
			Game.Loader.Replace('fractalEngine.png',this.dir+'/fractalengine.png');
			Game.Loader.Replace('fractalEngineBackground.png',this.dir+'/fractalengineBackground.png');
			Game.Loader.Replace('javascriptconsole.png',this.dir+'/javascriptconsole.png');
			Game.Loader.Replace('javascriptconsoleBackground.png',this.dir+'/javascriptconsoleBackground.png');
			Game.Loader.Replace('idleverse.png',this.dir+'/idleverse.png');
			Game.Loader.Replace('cortex.png',this.dir+'/cortex.png');
			Game.Loader.Replace('grandmas1.jpg',this.dir+'/grandmas1.png');
			Game.Loader.Replace('grandmas2.jpg',this.dir+'/grandmas2.png');
			Game.Loader.Replace('grandmas3.jpg',this.dir+'/grandmas3.png');
			Game.Loader.Replace('wrinkler.png',this.dir+'/wrinkler.png');
			Game.Loader.Replace('wrinkler.png',this.dir+'/wrinkler.png');
			Game.Loader.Replace('winterWinkler.png',this.dir+'/winterWinkler.png');
			Game.Loader.Replace('winterWrinkler.png',this.dir+'/winterWrinkler.png');

			let oldInitFunc = Game.shimmerTypes['golden'].initFunc;

			Game.shimmerTypes['golden'].initFunc = function(me) {
				oldInitFunc.call(this, me);

				me.l.style.backgroundImage = 'url("https://file.garden/aqowuM9iLHY0tNO1/goldencookie.png")';
			};

			Game.grandmaNames = [
				'Wherexy', 'Howxy' , 'Whoxy', 'Whenxy', 'Noxy', 'Whatxy'
			];
			Game.Loader.Replace('bankBackground.png',this.dir+'/bankBackground.png');
			Game.Loader.Replace('templeBackground.png',this.dir+'/templeBackground.png');
			Game.Loader.Replace('wizardtowerBackground.png',this.dir+'/wizardtowerBackground.png');


			Game.Upgrades['Reinforced index finger'].icon = [0,0, this.dir+'/icons.png'];

			Game.Upgrades['Forwards from grandma'].icon = [1,0, this.dir+'/icons.png'];

			Game.Upgrades['Cheap hoes'].icon = [2,0, this.dir+'/icons.png'];

			Game.Upgrades['Sugar gas'].icon = [3,0, this.dir+'/icons.png'];

			Game.Upgrades['Sturdier conveyor belts'].icon = [4,0, this.dir+'/icons.png'];

			Game.Upgrades['Vanilla nebulae'].icon = [5,0, this.dir+'/icons.png'];
	}
});
