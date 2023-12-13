<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ AboutUsPage } = data);
</script>

{#if $AboutUsPage}
	<PageComponent contentData={$AboutUsPage.data.page[0].content} />
{/if}
