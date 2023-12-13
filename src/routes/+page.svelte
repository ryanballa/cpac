<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ Page } = data);
</script>

{#if $Page}
	<PageComponent contentData={$Page.data.page[0].content} />
{/if}
