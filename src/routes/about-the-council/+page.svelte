<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ AboutTheCouncilPage } = data);
</script>

{#if $AboutTheCouncilPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$AboutTheCouncilPage.data.page[0]?.content} />
{/if}
