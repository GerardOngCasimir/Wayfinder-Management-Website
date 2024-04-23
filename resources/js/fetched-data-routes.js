// Function to populate left table with fetched data
function populateRoutes(jsonData) {

    const institutionsDropdown = document.getElementById('facility');
    const loadButton = document.getElementById('load');
    
    loadButton.addEventListener("click", function () {
        var selectedValue = institutionsDropdown.value;
        var checkSelectedValue = selectedValue.includes("Sembawang Polyclinic");

        var routeTable = document.getElementById('routeTable');
        var TotalSuccessFailedTable = document.getElementById('TotalSuccessFailedTable');
        var LongestShortestTable = document.getElementById('LongestShortestTable');

        if (checkSelectedValue) {
            jsonData["Sembawang Polyclinic"].topRoutes.sort(function (a, b) {
                return b.count - a.count;
            })

            jsonData["Sembawang Polyclinic"].topRoutes.forEach(function (route) {
                var row = routeTable.insertRow();
                row.insertCell(0).textContent = route.startPoint.replace(/_/g, ' ');
                row.insertCell(1).textContent = route.endPoint.replace(/_/g, ' ');
                row.insertCell(2).textContent = route.count;

                var startPointParts = route.startPoint.split("+");
                var latitude = parseFloat(startPointParts[1]);
                var longitude = parseFloat(startPointParts[0]);
            });

            var totalSuccessFailedRow = TotalSuccessFailedTable.insertRow();
            totalSuccessFailedRow.insertCell(0).textContent = jsonData["Sembawang Polyclinic"].totalLaunchCount;
            totalSuccessFailedRow.insertCell(1).textContent = jsonData["Sembawang Polyclinic"].totalSuccessfulPhotoCount;
            totalSuccessFailedRow.insertCell(2).textContent = jsonData["Sembawang Polyclinic"].totalFailedPhotoCount;

            var longestShortestRow = LongestShortestTable.insertRow();
            longestShortestRow.insertCell(0).textContent = (jsonData["Sembawang Polyclinic"].largestLongestDuration * 3600 / 60).toFixed(1);
            longestShortestRow.insertCell(1).textContent = (jsonData["Sembawang Polyclinic"].smallestShortestDuration * 3600 / 60).toFixed(1);
        } else if (selectedValue === "") {
            routeTable.textContent = "";
            TotalSuccessFailedTable.textContent = "";
            LongestShortestTable.textContent = "";
        }
    });
}