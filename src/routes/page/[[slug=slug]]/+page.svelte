<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ DynamicPage } = data);
</script>

{#if $DynamicPage.fetching}
	Loading
{:else}
	<PageComponent contentData={$DynamicPage.data.page[0]?.content} />
{/if}
