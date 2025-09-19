<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ Page } = data);
</script>

{#if $Page.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$Page.data.page[0]?.content} />
{/if}

We are excited for the renovated Clarendon Community Center Opening July 7th, 2025.