//Please add markers in Alphabetical order, First .png file, after that marker name, so ZombieCleo is a C because her .png file is cleo.png.
//Poi markers are on top. Ignore the names in ()

//Empty format to Copy, Paste { "pos" : [X, Z, 64], "title" : "", "icon" : ".png" },

var MAPCRAFTER_MARKERS = [

	// Starter Bases
	{
		// id of the marker group, without spaces/other special chars
		"id": "starters",
		// name of the marker group, displayed in the webinterface
		"name": "Starter Bases",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				{ "pos": [-1800, 1900, 80], "title": "Bdubs' Monolith", "icon": "bdubs.png" },

				{ "pos": [-1746, 1589, 71], "title": "Beef's starter base", "icon": "beef.png" },
				
				{ "pos": [-1750, 1895, 64], "title": "Cleo's starter base", "icon": "cleo.png" },
				
				{ "pos": [-1863, 1572, 70], "title": "Cub and Ren's Pie Factory", "icon": "cub-rendog.png" },
				
				{ "pos": [-1805, 1750, 64], "title": "Doc's starter base", "icon": "doc.png"},
				
				{ "pos": [-1020, 1318, 64], "title": "Doc's starter village", "icon": "doc.png"},
				
				//{ "pos": [,,], "title": "Etho's starter base", "icon": "etho.png"},
				
				{ "pos": [-1866, 1632, 76], "title": "False's starter eagle", "icon": "false.png" },
				
				{ "pos": [-1632, 1764, 71], "title": "Gem's starter tree", "icon": "gemini.png" },
				
				{ "pos": [-1700, 1700, 73], "title": "Grian's starter base", "icon": "grian.png" },
				
				{ "pos": [-1645, 1470, 64], "title": "Hypno's starter base", "icon": "hypno.png" },
				
				{ "pos": [-1845, 1730, 77], "title": "Jevin's starter base", "icon": "ijevin.png" },
				
				{ "pos": [-1724, 1809, 68], "title": "Impulse's starter base", "icon": "impulse.png" },
				
				{ "pos": [-1636, 1421, 103], "title": "Iskall's starter base", "icon": "iskall.png" },
				
				{ "pos": [-1822, 1793, 73], "title": "Joe's starter base", "icon": "joe.png" },
				
				{ "pos": [-1569, 1716, 64], "title": "Keralis' starter base", "icon": "keralis.png" },
				
				{ "pos": [-1736, 1652, 72], "title": "Mumbo's starter base", "icon": "mumbo.png" },
				
				{ "pos": [-1685, 1747, 68], "title": "Pearl's starter base", "icon": "pearl.png" },
				
				{ "pos": [-1781, 1633, 70], "title": "Ren's Spirit of the Hermissippi", "icon": "rendog.png" },
				
				{ "pos": [-1660, 1660, 75], "title": "Scar's starter tree (Cub's base underneath)", "icon": "scar.png" },
				
				{ "pos": [-1853, 1520, 72], "title": "Stress' starter teapot", "icon": "stress.png" },
				
				{ "pos": [-1676, 1801, 68], "title": "Tango's starter base", "icon": "tango.png" },
				
				{ "pos": [-1786, 1535, 63], "title": "TFC's starter base", "icon": "tfc.png"},
				
				{ "pos": [-1741, 1367, 69], "title": "Wels' starter base", "icon": "wels.png" },
				
				{ "pos": [-1785, 1458, 64], "title": "xB's starter base", "icon": "xb.png" },
				
				{ "pos": [-1637, 1550, 72], "title": "Xisuma's starter base", "icon": "xisuma.png" },
				
				{ "pos": [-1724, 1500, 66], "title": "Zedaph's starter rock", "icon": "zedaph.png" },
				
			
			],
		},
	},
	
	// Main Bases
	{
		// id of the marker group, without spaces/other special chars
		"id": "bases",
		// name of the marker group, displayed in the webinterface
		"name": "Main Bases",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				
				{ "pos": [-1233, 2768, 66], "title": "The Perimeter", "icon": "doc.png" },
				
				{ "pos": [-1810, 1055, 66], "title": "False's megabase", "icon": "false.png" },
				
				{ "pos": [70, 1870, 66], "title": "Gem's elven megabase", "icon": "gemini.png" },
				
				{ "pos": [-1012, 2112, 66], "title": "Grian's megabase (\"Dwayne\")", "icon": "grian.png" },
				
				{ "pos": [-475, 860, 66], "title": "Hypno's planned megabase", "icon": "hypno.png" },
				
				{ "pos": [70, 1890, 66], "title": "Impulse's dwarven city (underground)", "icon": "impulse.png" },
				
				{ "pos": [-1994, 1127, 66], "title": "Iskall's megabase (underground)", "icon": "iskall.png" },
				
				{ "pos": [-2410, 2755, 66], "title": "JoeHills' planned megabase", "icon": "joe.png" },
				
				{ "pos": [-100, 1135, 66], "title": "Keralis' planned megabase", "icon": "keralis.png" },
				
				{ "pos": [50, 1970, 66], "title": "Pearl's planned megabase", "icon": "pearl.png" },
				
				{ "pos": [-2075, 1265, 66], "title": "Stressmonster's megabase", "icon": "stress.png" },
				
				{ "pos": [-545, 2150, 66], "title": "Tango's planned megabase", "icon": "tango.png" },
				
				{ "pos": [-445, 1414, 66], "title": "xB's planned megabase", "icon": "xb.png" },
				
				{ "pos": [-1500, 600, 66], "title": "Xisuma's planned megabase", "icon": "joe.png" },
				
				{ "pos": [-1300, 1909, 66], "title": "Zedaph's Hole of Fame", "icon": "zedaph.png" },
			],
		},
	},
	
	// Minigames
	{
		// id of the marker group, without spaces/other special chars
		"id": "minigames",
		// name of the marker group, displayed in the webinterface
		"name": "Minigames & Event Locations",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
			
				{ "pos": [-3150, -3190, 66], "title": "Bdubs' Adventures: Shroomlight Ruins", "icon": "bdubs.png" },
				// you might need a bigger map for this one lol
				{ "pos": [-1850, 1410, 66], "title": "Easter Egg Hunt", "icon": "ijevin.png" },
				
				{ "pos": [-1670, 1860, 66], "title": "Locked Out: A Ravager's Revenge", "icon": "scar.png" },
				
				{ "pos": [-1900, 1400, 66], "title": "Lil' Coppy, the copper golem", "icon": "tango.png" },
				
				{ "pos": [-1302, 1264, 66], "title": "Gary the Goat", "icon": "iskall.png" },
				
				{ "pos": [-1322, 1424, 66], "title": "Gemini Slay arena", "icon": "tango.png" },
				
				{ "pos": [-1795, 1467, 66], "title": "OctoDrop", "icon": "xb.png" },
				
				{ "pos": [-1850, 1910, 80], "title": "The Tree of Whimsy", "icon": "bdubs.png" },
				
				{ "pos": [-1915, 1760, 80], "title": "Hermit Dares", "icon": "iskall.png" },
			
			],
		},
	},
	
	// Farms
	{
		// id of the marker group, without spaces/other special chars
		"id": "farms",
		// name of the marker group, displayed in the webinterface
		"name": "Farms",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				
				{ "pos": [-406, 2842, 66], "title": "Grian, Scar & Tango's villager farms", "icon": "poi.png" },
				
				{ "pos": [1136, 2112, 66], "title": "Keralis and X's raid farm", "icon": "poi.png" },
				
				{ "pos": [1136, 2112, 66], "title": "Gem's guardian farm", "icon": "gemini.png" },
				
				{ "pos": [-1615, 2828, 66], "title": "Mumbo's ineffecient slime farm", "icon": "mumbo.png" },
				
			],
		},
	},

	
	// Shops:
	{
		// id of the marker group, without spaces/other special chars
		"id": "shops",
		// name of the marker group, displayed in the webinterface
		"name": "Shops",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				
				{ "pos": [-1877, 1387, 66], "title": "Team Rocket rocket shop", "icon": "ijevin.png" },
				
				{ "pos": [-2040, 1518, 66], "title": "False Beans", "icon": "false.png" },
				
				{ "pos": [-1746, 1698, 66], "title": "The Entity", "icon": "grian.png" },
				
				{ "pos": [-1710, 1465, 66], "title": "Super Wings", "icon": "iskall.png" },
				
				{ "pos": [-1560, 1590, 66], "title": "Legendary Super Tommy's Carrots", "icon": "iskall.png" },
				
				{ "pos": [-1625, 1625, 66], "title": "Scar's cookie factory", "icon": "scar.png" },
				
				{ "pos": [-1955, 1891, 66], "title": "GigaLogs (Ren, Keralis)", "icon": "poi.png" },
				
				{ "pos": [-2145, 1910, 66], "title": "The Oreiginal Shop", "icon": "cub.png" },
				
				{ "pos": [-2080, 1932, 66], "title": "iLuminate", "icon": "impulse.png" },
				
				{ "pos": [-1756, 1811, 66], "title": "iEmMortal", "icon": "impulse.png" },
				
				{ "pos": [-1795, 1708, 66], "title": "Jevin's Coral Adventure", "icon": "ijevin.png" },
				
			],
		},
	},
	
	
	// Other:
	{
		// id of the marker group, without spaces/other special chars
		"id": "other",
		// name of the marker group, displayed in the webinterface
		"name": "Other",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				{ "pos": [0, 0, 64], "title": "(0, 0)", "icon": "poi.png" },
				
				{ "pos": [-1770, 1525, 64], "title": "Spawn", "icon": "poi.png" },
				
				{ "pos": [-1770, 1520, 65], "title": "HHH supply tent", "icon": "poi.png" },
				
				{ "pos": [-4143, 397, 65], "title": "Old Hammersmith Mine", "icon": "cub.png" },
				
				
			],
		},
	},
];
