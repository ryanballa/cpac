<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ TennisPage } = data);
</script>

{#if $TennisPage.fetching}
	Loading
{:else}
	<PageComponent contentData={$TennisPage.data.page[0]?.content} />
{/if}
