<script>
    import Info from "./info.svelte";
    let info = {
        name: "Svelte",
        github: "https://github.com/sullay/svelte-learn",
        version: "1.0.0",
    }
</script>
<div>
    <Info {...info} />
</div>