// Function to populate left table with fetched data
function populateRoutes(jsonData) {
     const institutionsDropdown = document.getElementById('facility')
     const loadButton = document.getElementById('load')

     loadButton.addEventListener('click', function () {
          var selectedValue = institutionsDropdown.value
          var checkSelectedValue = selectedValue.includes(
               'Sembawang Polyclinic'
          )

          var routeTable = document.getElementById('routeTable')
          var totalSuccessFailedTable = document.getElementById(
               'totalSuccessFailedTable'
          )
          var longestShortestTable = document.getElementById(
               'longestShortestTable'
          )

          var refreshIcon = document.getElementById('refresh icon')
          refreshIcon.disabled = false
          refreshIcon.src = 'resources/images/Image-Refresh-enabled.png'

          var topRoutesDisplayOptions = document.getElementById('table2Options')
          topRoutesDisplayOptions.disabled = false

          if (checkSelectedValue) {
               jsonData['Sembawang Polyclinic'].topRoutes.sort(function (a, b) {
                    return b.count - a.count
               })

               jsonData['Sembawang Polyclinic'].topRoutes.forEach(
                    function (route) {
                         var row = routeTable.insertRow()
                         var startPoint = route.startPoint.replace(/_/g, ' ') // Replace underscores with spaces
                         var endPoint = route.endPoint.replace(/_/g, ' ') // Replace underscores with spaces
                         var count = route.count

                         // Check if startPoint contains the '+' sign
                         var isStartPointWithPlus = startPoint.includes('+')

                         // Insert startPoint into the table cell
                         var startPointCell = row.insertCell(0)
                         if (isStartPointWithPlus) {
                              var startPointParts = startPoint.split('+')
                              var latitude = parseFloat(
                                   startPointParts[1]
                              ).toString()
                              var longitude = parseFloat(
                                   startPointParts[0]
                              ).toString()

                              convertLatLongToPoiName()

                              async function convertLatLongToPoiName() {
                                   try {
                                        var poiName = await fetchPOINameData(
                                             'Sembawang Polyclinic',
                                             latitude,
                                             longitude
                                        )
                                        startPointCell.textContent = poiName
                                   } catch (error) {
                                        // Handle errors here
                                   }
                              }
                         } else {
                              // If startPoint is alphanumeric, insert it directly into the table cell
                              startPointCell.textContent = startPoint
                         }

                         // Insert count into the second cell
                         row.insertCell(1).textContent = endPoint

                         // Insert count into the third cell
                         row.insertCell(2).textContent = count
                    }
               )

               var totalSuccessFailedRow = totalSuccessFailedTable.insertRow()
               totalSuccessFailedRow.insertCell(0).textContent =
                    jsonData['Sembawang Polyclinic'].totalLaunchCount
               totalSuccessFailedRow.insertCell(1).textContent =
                    jsonData['Sembawang Polyclinic'].totalSuccessfulPhotoCount
               totalSuccessFailedRow.insertCell(2).textContent =
                    jsonData['Sembawang Polyclinic'].totalFailedPhotoCount

               var longestShortestRow = longestShortestTable.insertRow()
               longestShortestRow.insertCell(0).textContent = (
                    (jsonData['Sembawang Polyclinic'].largestLongestDuration *
                         3600) /
                    60
               ).toFixed(1)
               longestShortestRow.insertCell(1).textContent = (
                    (jsonData['Sembawang Polyclinic'].smallestShortestDuration *
                         3600) /
                    60
               ).toFixed(1)
          } else if (selectedValue === '') {
               routeTable.textContent = ''
               totalSuccessFailedTable.textContent = ''
               longestShortestTable.textContent = ''
          }
     })
}
