// Function to fetch JSON data
//TODO: Improve code performance
//TODO: Migrate to a more secure user authentication method
//TODO: Create proxy server and forward all requests to proxy server instead for increased security and shortened code
function fetchInstitutionData() {
     // Retrieve the access token from localStorage
     const accessToken = localStorage.getItem('accessToken')
     if (!accessToken) {
          console.error('Access token not found.')
          return
     }

     const dataUrl =
          'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/data/v1/action/find'

     const requestData = {
          collection: 'Institutions',
          database: 'WayfinderManagement',
          dataSource: 'Dev-WayfinderManagement',
     }

     fetch(dataUrl, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(requestData),
     })
          .then((response) => {
               if (!response.ok) {
                    throw new Error('Network response was not ok')
               }
               return response.json()
          })
          .then((data) => {
               //console.log('Printing successful JSON Data: ' + JSON.stringify(data));
               populateDropdowns(data)
          })
          .catch((error) => {
               console.error(
                    'There was a problem with your fetch operation:',
                    error
               )
          })
}

function fetchRouteData() {
     // Retrieve the access token from localStorage
     const accessToken = localStorage.getItem('accessToken')
     if (!accessToken) {
          console.error('Access token not found.')
          return
     }

     const dataUrl =
          'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/returnTopUserStatistics'

     fetch(dataUrl, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${accessToken}`,
          },
          // body: JSON.stringify(requestData),
     })
          .then((response) => {
               if (!response.ok) {
                    throw new Error('Network response was not ok')
               }
               return response.json()
          })
          .then((data) => {
               //console.log('Printing successful JSON Data: ' + JSON.stringify(data));
               populateRoutes(data)
          })
          .catch((error) => {
               console.error(
                    'There was a problem with your fetch operation:',
                    error
               )
          })
}

async function fetchPOINameData(institutionName, latitude, longitude) {
     try {
          // Retrieve the access token from localStorage
          const accessToken = localStorage.getItem('accessToken')
          if (!accessToken) {
               console.error('Access token not found.')
               return
          }

          const dataUrl =
               'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/findAndReturnPointOfInterest'
          const requestData = {
               institutionName: institutionName,
               latitude: latitude,
               longitude: longitude,
          }

          const dataResponse = await fetch(dataUrl, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
               },
               body: JSON.stringify(requestData),
          })

          if (!dataResponse.ok) {
               throw new Error('Network response was not ok')
          }

          const data = await dataResponse.json()
          const closestDisplayName = JSON.parse(
               JSON.stringify(data)
          ).closestDisplayName
          console.log(
               'FINAL Printing successful JSON Data: ' + closestDisplayName
          )

          return closestDisplayName
     } catch (error) {
          console.error('There was a problem with your fetch operation:', error)
          throw error
     }
}

window.onload = function () {
     fetchRouteData()
     fetchInstitutionData()
     fetchPOINameData()
}
