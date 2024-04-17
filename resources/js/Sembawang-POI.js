function updateLevel()
{
    var facility = document.getElementById('facility');
    var level = document.getElementById('level');

    var selectedFacility = facility.value;
    
    level.innerHTML = '';
    
    if (selectedFacility == 'Sembawang Polyclinic')
    {
        level.innerHTML += '<option value="">Select an option</option>';
        level.innerHTML += '<option value = "Level 1">Level 1</option>';
        level.innerHTML += '<option value = "Level 2">Level 2</option>';
    }
}

function updatePOI()
{
    var facility = document.getElementById('facility');
    var level = document.getElementById('level');
    var POI = document.getElementById('POI');

    var selectedFacility = facility.value;
    var selectedLevel = level.value;
    
    POI.innerHTML = '';

    if (selectedFacility == 'Sembawang Polyclinic')
    {
        if (selectedLevel == 'Level 1') {
            POI.innerHTML += '<option value="">Select an option</option>';
            POI.innerHTML += '<option value="Taxi Stand / Pick-Up Point">Taxi Stand / Pick-Up Point</option>';
            POI.innerHTML += '<option value="Drop-Off Point">Drop-Off Point</option>';
            POI.innerHTML += '<option value="1A - Self Service Kiosks">1A - Self Service Kiosks</option>';
        } else if (selectedLevel == 'Level 2') {
            POI.innerHTML += '<option value="">Select an option</option>';
            POI.innerHTML += '<option value="2A - Counter C/D">2A - Counter C/D</option>';
            POI.innerHTML += '<option value="2A - Self Service Kiosks">2A - Self Service Kiosks</option>';
            POI.innerHTML += '<option value="2A - Water Dispenser">2A - Water Dispenser</option>';
        }
    }
}

updateLevel();
updatePOI();