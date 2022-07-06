<script>
    let a = 1;
    let b = 2;
    let checked = false;
    let files;
    $: if(files) {
        for(const file of files){
            console.log(`${file.name}: ${file.size} b`)
        }
    }
</script>
<label>
    <input type=number bind:value = {a} min = 0 max = 10>
    <input type=range bind:value = {a} min = 0 max = 10>
</label>
<label>
    <input type=number bind:value = {b} min = 0 max = 10>
    <input type=range bind:value = {b} min = 0 max = 10>
</label>
<p> {a} + {b} = {a+b} </p>
<input 
    accept = "image/png, image/jpeg"
    bind:files
    id = "avatar"
    name = "avatar"
    type = "file"
    multiple
>
{#if files}
    <p>selected files</p>
    {#each Array.from(files) as file }
        <p>{file.name}({file.size}b)</p>
    {/each}
{/if}
<label>
    <input type=checkbox bind:checked={checked}>
    记住当前数值
</label>
<button disabled={!checked}>
    提交
</button>