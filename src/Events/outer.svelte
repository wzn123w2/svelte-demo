<script>
    import Inner from "./inner.svelte";
    export let mousePos
</script>
<Inner on:message {mousePos}/>