<script>
    import { getWeatherFrom } from '../services/weather';
    import WeatherFooter from '../components/weather-footer.svelte';
    import WeatherIcon from '../components/weather-icon.svelte';
    const weatherPromise = getWeatherFrom()
</script>


{#await weatherPromise then weather}
<section>
    <h1>{weather.locationName}</h1>
    <h2>{weather.temperature}°</h2>
    <h3>{weather.conditionText}</h3>
    <WeatherIcon icon={weather.conditionIcon} text={weather.conditionText}/>
</section>
<WeatherFooter {weather}/>
  
{/await}


<style>
    section {
        padding: 16px;
    }

    h1 {
        font-weight: 300;
        color: #333;
        text-transform: uppercase;
        padding: 16px 0 0 0;
    }

    h2 {
        font-weight: 300;
        font-size: 120px;
        color: #333;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 700;
        transform: rotate(-90deg);
        position: absolute;
        top: 48px;
        right: 12px;
    }
</style>
