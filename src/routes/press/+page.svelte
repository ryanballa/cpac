<script>
	import PageComponent from '$lib/PageComponent.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data;
	$: ({ PressPage } = data);
</script>

{#if $PressPage.fetching}
	<Loader />
{:else}
	<PageComponent contentData={$PressPage.data.page[0]?.content} />
{/if}
