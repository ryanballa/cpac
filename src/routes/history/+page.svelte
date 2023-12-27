<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ HistoryPage } = data);
</script>

{#if $HistoryPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$HistoryPage.data.page[0]?.content} />
{/if}
