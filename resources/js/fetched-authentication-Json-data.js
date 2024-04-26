function fetchAuthenticationLoginData()
{
    const authUrl = 'https://ap-southeast-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-btthb/auth/providers/local-userpass/login';

    const requestData =
        {
            "username": "060764@apac.nttdata.com",
            "password": "Gerard821207"
        };
    
    fetch(authUrl,
        {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(requestData),
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
            console.log('Printing successful JSON Data: ' + JSON.stringify(data));
            return JSON.parse(JSON.stringify(data));
        })
        .catch(error =>
        {
            console.error('There was a problem with your fetch operation:', error);
        });
}

window.onload = function()
{
    fetchAuthenticationLoginData();
}