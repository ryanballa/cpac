<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ GetInvolvedPage } = data);
</script>

{#if $GetInvolvedPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$GetInvolvedPage.data.page[0]?.content} />
{/if}
