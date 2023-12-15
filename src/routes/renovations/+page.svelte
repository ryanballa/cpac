<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ RenovationsPage } = data);
</script>

{#if $RenovationsPage}
	<PageComponent contentData={$RenovationsPage.data.page[0].content} />
{/if}
