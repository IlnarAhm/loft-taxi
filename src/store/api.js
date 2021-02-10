const BASE_URL = "https://loft-taxi.glitch.me";

export const serverLogin = async (email, password) => {
    return fetch(`${BASE_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
        .then(response => response.json())
        .then(data => data)
};

export const addCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
    return fetch(`${BASE_URL}/card`, {
        method: 'POST',
        body: {
            cardNumber,
            expiryDate,
            cardName,
            cvc,
            token
        }
    })
        .then(response => response.json())
        .then(data => data)
};