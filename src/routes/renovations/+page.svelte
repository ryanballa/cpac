<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ RenovationsPage } = data);
</script>

{#if $RenovationsPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$RenovationsPage.data.page[0]?.content} />
{/if}
