<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ PressPage } = data);
</script>

{#if $PressPage}
	<PageComponent contentData={$PressPage.data.page[0].content} />
{/if}
