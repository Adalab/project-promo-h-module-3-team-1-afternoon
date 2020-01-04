const sendUserData = (userData) => {
    return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data.cardURL)
        .catch(function (error) { console.log(error); });
}

export default sendUserData;


