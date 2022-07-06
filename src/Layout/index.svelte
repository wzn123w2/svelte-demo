<script>
    import Sider from "./Sider/index.svelte";
    import Header from "./Header/index.svelte";
    import Content from "./Content/index.svelte";
</script>
<div class="layout">
    <div class="layoutHeader">
        <Header />
    </div>
    <div class="layoutContent">
        <div class="sider"><Sider/></div>
        <div class="content"><Content/></div>
    </div>
</div>
<style>
    .layout{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .layoutHeader{
        height: 60px;
    }
    .layoutContent{
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
    }
    .sider{
        width: 220px;
    }
    .content{
        flex: 1;
    }
</style>