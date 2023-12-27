<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ HistoryPage } = data);
</script>

{#if $HistoryPage}
	<PageComponent contentData={$HistoryPage.data.page[0].content} />
{/if}
