<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ ContactUsPage } = data);
</script>

{#if $ContactUsPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$ContactUsPage.data.page[0]?.content} />
{/if}
