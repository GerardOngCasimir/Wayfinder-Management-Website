// Function to populate dropdowns with fetched data
function populateDropdowns(jsonData) {

    const parsedObject = JSON.parse(JSON.stringify(jsonData));
    const documents = parsedObject.documents;
    const firstDocument = documents[1];

    const floors = firstDocument.floors;
    const pointsOfInterest = firstDocument.pointsOfInterest;

    // Populate institution names dropdown
    const institutionsDropdown = document.getElementById('facility');
    documents.forEach(institution => {
        // check if either floors or points of interests are empty
        if (institution.floors.length === 0 || institution.pointsOfInterest.length === 0)
        {
            return; // Skip this iteration if either is empty
        }

        const option = document.createElement('option');
        option.textContent = institution.name;
        institutionsDropdown.appendChild(option);
    });

    // Populate floors dropdown
    const floorsDropdown = document.getElementById('level');
    floors.forEach(floor => {
        const option = document.createElement('option');
        option.textContent = floor;
        floorsDropdown.appendChild(option);
    });

    // Populate points of interest dropdown based on selected floor
    const pointsOfInterestDropdown = document.getElementById('POI');
    
    function updatePointsOfInterest() {
        const selectedFloor = floorsDropdown.value;
        pointsOfInterestDropdown.innerHTML = '<option value="">Select an option</option>'; // Clear existing options

        const filteredPointsOfInterest = pointsOfInterest.filter(point => point.floor === selectedFloor);
        filteredPointsOfInterest.forEach(point => {
            const option = document.createElement('option');
            option.textContent = point.displayName;
            option.value = point.dataName;
            pointsOfInterestDropdown.appendChild(option);
        });
    }

    // Initial population
    updatePointsOfInterest();

    // Event listener for floor selection
    floorsDropdown.addEventListener('change', updatePointsOfInterest);
}