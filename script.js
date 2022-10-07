function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 51.5274,
			lng: -0.1076,
		},
		zoom: 8,
		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
		  "King Cross Station",
		  51.534788184199456,
		  -0.1255289988220793,
		  "king cross.svg",
		  80,
		  "Where the young wizards catch the Hogwarts Express from platform 9 3⁄4.",
		],
		[
		  "Claremont Square",
		  51.53150567716322,
		  -0.11054577123281041,
		  "square.svg",
		  80,
		  "This Islington square stands in for Grimmauld Place. Sirius Black's family once lived at number 12.",
		],
		[
		  "Millennium Bridge",
		  51.50974943530919,
		  -0.09853177335349374,
		  "bridge.svg",
		  80,
		  "London's wobbliest structure is made a whole lot wobblier in an attack by a gang of Death Eaters.",
		],
		[
		  " Australia House",
		  51.51361780903179,
		  -0.11584970033848667,
		  "Australia House.svg",
		  80,
		  "Oz's diplomatic residence is a stand-in for goblin-run bank Gringotts.",
		],
		[
		  "Leadenhall Market",
		  51.51295293487107,
		  -0.08355035986075723,
		  "market.svg",
		  80,
		  "This ornate covered market doubles up as Diagon Alley and the entrance to The Leaky Cauldron.",
		],
		[
		  "Scotland Place",
		  51.49496389130428,
		  -0.15098696080801932,
		  "telephone.svg",
		  80,
		  "The telephone box that is the entrance to the Ministry of Magic is on this street in the film.",
		],
		[
		  "Tottenham Court Road",
		  51.52045097291122,
		  -0.13404915986044,
		  "Tottenham Court Road.svg",
		  80,
		  "After the Death Eaters invade Bill Weasley's wedding, Harry, Ron and Hermione escape here.",
		],
		[
		  "Westminster tube station",
		  51.501516624477375,
		  -0.12481984451808166,
		  "tube station.svg",
		  50,
		  "Where Harry and Arthur go for Harry's Ministry hearing.",
		],
		[
		  "London Zoo Reptile House",
		  51.53540149012379,
		  -0.1556435733522769,
		  "Snake.svg",
		  60,
		  "In thiz zoo, ten-year-old Harry accidentally sets a giant python loose.",
		],
		[
		  "Footsteps",
		  51.53291606971397,
		  -0.14560389313609898,
		  "footsteps.svg",
		  120,
		  "Footsteps",
		],
		[
		  "Footsteps",
		  51.52627317752199,
		  -0.08753859575121649,
		  "footsteps.svg",
		  150,
		  "Footsteps",
		],
		[
		  "Steps",
		  51.499355298571594,
		  -0.16979489366259778,
		  "foot.svg",
		  200,
		  "Harry Potter",
		],
];
for (let i = 0; i < markers.length; i++) {
	const currMarker = markers[i];

	const marker = new google.maps.Marker({
		position: { lat: currMarker[1], lng: currMarker[2] },
		map,
		title: currMarker[0],
		icon: {
			url: currMarker[3],
			scaledSize: new google.maps.Size(currMarker[4], currMarker[4]),
		},
		animation: google.maps.Animation.DROP,
	});

	const infowindow = new google.maps.InfoWindow({
		content: currMarker[5],
	});

	marker.addListener('click', () => {
		infowindow.open(map, marker);
	});
}
}
