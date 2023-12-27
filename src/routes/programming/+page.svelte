<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ ProgrammingPage } = data);
</script>

{#if $ProgrammingPage}
	<PageComponent contentData={$ProgrammingPage.data.page[0].content} />
{/if}
