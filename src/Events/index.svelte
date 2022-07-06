<script>
    import Outer from "./outer.svelte";
    let m = {x: 0, y: 0};
    function handleMessage(event) {
        alert(event.detail.text);
    }
</script>
<div on:mousemove={e => m = {x: e.clientX, y: e.clientY}} style="width: 100%; height: 100%">
    <Outer on:message={handleMessage} mousePos={m}/>
</div>