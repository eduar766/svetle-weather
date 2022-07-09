

export async function getWeatherFrom(query = 'Barcelona') {
    return fetch(`/api/get-weather?q=${query}`).then(res => res.json())
}

