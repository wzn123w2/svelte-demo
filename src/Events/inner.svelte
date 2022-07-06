<script>
    import {createEventDispatcher} from "svelte";
    export let mousePos;
    const dispatch = createEventDispatcher();
    function sayHello(){
        dispatch("message", {
            text: "Hello !"
        })
    }
</script>
<button on:click|once={sayHello}>
    Click to say hello {mousePos?.x || 0} x {mousePos?.y || 0}
</button>
<style>
button {
		background-color: #aaa;
		border-color: #f1c40f;
		color: #f1c40f;
		font-size: 1.25rem;
		background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: background 300ms ease-in-out;
	}
	button:hover {
		background-position: 0;
		color: #aaa;
	}
</style>