<script>
    import { routes } from "../../Routers/index";
    import { link } from "svelte-spa-router";
    const menus = Object.keys(routes);
</script>
<ul>
	{#each menus as item, i}
		<li><a href={item} use:link>{item}</a></li>
	{/each}
</ul>