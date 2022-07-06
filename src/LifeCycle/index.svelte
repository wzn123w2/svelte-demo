<script>
    import { onMount } from "svelte";
    import OnDestroy from "./onDestroy.svelte";

    let photos = [];
    onMount( async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=20");
        photos = await res.json();
    })
</script>
<div class="shell">
    <div class="left">
        <h1>Photo album</h1>
        <div class="photos">
            {#each photos as photo }
                <figure>
                    <img src={photo.thumbnailUrl} alt={photo.title}>
                    <figcaption>{photo.title}</figcaption>
                </figure>
                {:else}
                <p>loading......</p>
            {/each}
        </div>
    </div>
    <div class="right">
        <OnDestroy />
    </div>
</div>

<style>
    .shell{
        display: flex;
    }
    .left{
        width: 600px;
    }
    .right{
        flex: 1;
    }
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>