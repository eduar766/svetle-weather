<script>
    export let weather;
</script>


<footer>
    <div>
        <span>{weather.humidity}</span>
        <strong>Humidity</strong>
    </div>
    <div>
        <span>{weather.windSpeed} km/h</span>
        <strong>Windspeed</strong>
    </div>
    <div>
        <span>{weather.feelsLike}°</span>
        <strong>Feelslike</strong>
    </div>
</footer>

<style>
    footer {
        border: 2px solid #000;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
    }
    span {
        display: block;
    }
    strong {
        color: #444;
        font-size: 14px;
        font-weight: 500;
    }
</style>