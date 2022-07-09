<div>
    <slot />
</div>

<style>
    :global(body) {
        background: #fdfdfd;
        display: grid;
        place-content: center;
        min-height: 100vh;
        margin: 0;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        margin: 0;
    }

    :global(*, *::after, *::before) {
        box-sizing: border-box;
    }

    div {
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        position: relative
    }
</style>