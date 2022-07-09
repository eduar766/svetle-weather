<script>
    export let icon;
    export let text;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src={icon} alt={text}/>

<style>
    img {
        width: 100px;
        height: auto;
    }
</style>