require(dotenv)

const FETCH_OPTION = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST 
    }
};


export async function get (event) {
    const { searchParams } = event.url
    const query= searchParams.get('q') ?? 'El Tigre'
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTION)

    const data = await response.json()
    
    const { location, current } = data
    const { country, localtime, name } = location
    const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current
    const { code, text, icon } = condition
    
    const body = {
        conditionCode: code,
        conditionText: text,
        conditionIcon: icon,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }

    return {
        status: 200,
        body
    }

}