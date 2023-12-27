<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ AboutUsPage } = data);
</script>

{#if $AboutUsPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$AboutUsPage.data.page[0]?.content} />
{/if}
