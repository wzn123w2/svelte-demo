<script>
    let count = 0;
    function handleClick(){
        count += 1;
    }
    $: doubled = count * 2;
    $: quadrupled = doubled * 2;
    $: if(count >= 10){
        alert("count is dangerously hight!");
        count = 9;
    }
</script>
<div>
    <button on:click={handleClick}>
        Clicked {count} {count === 1 ? "time" : "times"}
    </button>
    <p> {count} * 2 = {doubled} </p>
    <p> {doubled} * 2 = {quadrupled} </p>
</div>