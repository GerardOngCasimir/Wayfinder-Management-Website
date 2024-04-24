// Function to fetch JSON data
//TODO: Improve code performance
//TODO: Migrate to a more secure user authentication method
//TODO: Create proxy server and forward all requests to proxy server instead for increased security and shortened code
function fetchInstitutionData()
{
    const authUrl = 'https://services.cloud.mongodb.com/api/client/v2.0/app/data-btthb/auth/providers/anon-user/login';

    //Fetch authentication token to authenticate users
    //Temporarily allowing anon user login, not secure
    //Migrate to a more secure authentication method in the near future
    fetch(authUrl,
        {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json'
                }
        })
        .then(response => response.json())
        .then(authData =>
        {
            //Pass access token to data request header to remove CORS policy on browsers
            const accessToken = authData.access_token;
            const dataUrl = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/data/v1/action/find';
            const requestData =
                {
                    "collection": "Institutions",
                    "database": "WayfinderManagement",
                    "dataSource": "Dev-WayfinderManagement"
                };

            return fetch(dataUrl,
                {
                    method: 'POST',
                    headers:
                        {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`
                        },
                    body: JSON.stringify(requestData),
                });
        })
        .then(response =>
        {
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data =>
        {
            //console.log('Printing successful JSON Data: ' + JSON.stringify(data));
            populateDropdowns(data);
            
            //const institutions = JSON.parse(JSON.stringify(data)).documents[1];
        })
        .catch(error =>
        {
            console.error('There was a problem with your fetch operation:', error);
        });
}

function fetchRouteData()
{
    const authUrl = 'https://services.cloud.mongodb.com/api/client/v2.0/app/data-btthb/auth/providers/anon-user/login';

    //Fetch authentication token to authenticate users
    //Temporarily allowing anon user login, not secure
    //Migrate to a more secure authentication method in the near future
    fetch(authUrl,
        {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json'
                }
        })
        .then(response => response.json())
        .then(authData =>
        {
            //Pass access token to data request header to remove CORS policy on browsers
            const accessToken = authData.access_token;
            const dataUrl = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/returnTopUserStatistics';
            // const requestData =
            //     {
            //         "collection": "Institutions",
            //         "database": "WayfinderManagement",
            //         "dataSource": "Dev-WayfinderManagement"
            //     };

            return fetch(dataUrl,
                {
                    method: 'POST',
                    headers:
                        {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`
                        },
                    // body: JSON.stringify(requestData),
                });
        })
        .then(response =>
        {
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data =>
        {
            //console.log('Printing successful JSON Data: ' + JSON.stringify(data));
            populateRoutes(data);
        })
        .catch(error =>
        {
            console.error('There was a problem with your fetch operation:', error);
        });
}

function fetchPOINameData(institutionName, latitude, longitude)
{
    const authUrl = 'https://services.cloud.mongodb.com/api/client/v2.0/app/data-btthb/auth/providers/anon-user/login';
    
    console.log("name = " + institutionName + ". lat = " + latitude + ". long = " + longitude);

    //Fetch authentication token to authenticate users
    //Temporarily allowing anon user login, not secure
    //Migrate to a more secure authentication method in the near future
    fetch(authUrl,
        {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json'
                }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch authentication token');
            }
            return response.json();
        })
        .then(authData =>
        {
            //Pass access token to data request header to remove CORS policy on browsers
            const accessToken = authData.access_token;
            const dataUrl = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/findAndReturnPointOfInterest';
            const requestData =
                {
                    "institutionName": institutionName,
                    "latitude": latitude,
                    "longitude": longitude
                };

            return fetch(dataUrl,
                {
                    method: 'POST',
                    headers:
                        {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`
                        },
                    body: JSON.stringify(requestData),
                });
        })
        .then(response =>
        {
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data =>
        {
            console.log('FINAL Printing successful JSON Data: ' + JSON.parse(JSON.stringify(data)).displayName);
            return data;
        })
        .catch(error =>
        {
            console.error('There was a problem with your fetch operation:', error);
            throw error;
        });
}

window.onload = function()
{
    fetchRouteData();
    fetchInstitutionData();
    fetchPOINameData();
}
