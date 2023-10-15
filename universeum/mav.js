function showInfo(planetName) {
    // Fetch the JSON file
    fetch("pl.json")
        .then((response) => response.json())
        .then((data) => {
            // Find the planet data by name
            const planet = data.find((p) => p.name.toLowerCase() === planetName.toLowerCase());
            if (planet) {
                const planetmass = planet.mass;
                const planetradius = planet.radius;
                const distance_light_year = planet.distance_light_year;
                const rotation_speed_kmh = planet.rotation_speed_kmh;
                const info = planet.info.description;
                const sym = planet.info.symbol;
                const nick = planet.info.nickname;
                const temp = planet.info.temperature;
                const greek = planet.info.greek_name;
                const comp = planet.info.composition;

                const planetInfoDiv = document.getElementById("planet-info");
                planetInfoDiv.innerHTML = 
                `<h2>${planetName}</h2>
                <p>${"Massa " + planetmass}</p>
                <p>${"Radius " + planetradius}</p>
                <p>${"Distance in light years " + distance_light_year}</p>
                <p>${"Rotation " + rotation_speed_kmh}</p>
                <p>${info}</p>
                <p>${"Symbol for planet is " + sym}</p>
                <p>${"Nickname: " + nick}</p>
                <p>${"Temperature: " + temp}</p>
                <p>${"Greek name: " + greek}</p>
                <p>${"Planet composition: " + comp}</p>`;
            } else {
                alert("Planet not found in the database.");
            }
        })
        .catch((error) => {
            console.error("Error fetching data: " + error);
        });
}