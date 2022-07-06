<script> 
    import SubTitle from "./subTitle.svelte";
    let title = 'world'; 
</script>

<div>
    <h1 {title} >Hello {title}!</h1> 
    <SubTitle/>
</div>

<style>
    :global(h1){
    text-align: center;
    border: 1px solid #ccc;
    }
    h1{
    color: red;
    }
</style>
<!-- :global表示全局 -->