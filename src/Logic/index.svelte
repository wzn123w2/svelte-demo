<script>
    let promise = getRandomNuber();
    async function getRandomNuber(){
        const res = await fetch("https://www.sveltejs.cn/tutorial/random-number");
        const text = await res.text();
        if(res.ok){
            return text;
        } else {
            throw new Error(text);
        }
    }
    function handleClick(){
        promise = getRandomNuber();
    }
</script>
<div>
    <button on:click={handleClick}>generate random number</button>
    {#await promise}
        <p>...waiting</p>
    {:then number}
        <p>The number is {number}</p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>