export const serverLogin = async (email, password) => {
    return fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`)
        .then(response => response.json())
        .then(data => data.success)
};

export const addCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
    return fetch('https://loft-taxi.glitch.me/card', {
        method: 'POST',
        body: {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc,
            token: token
        }
    })
        .then(response => response.json())
        .then(data => data.success)
};