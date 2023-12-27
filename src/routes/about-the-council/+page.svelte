<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ AboutTheCouncilPage } = data);
</script>

{#if $AboutTheCouncilPage}
	<PageComponent contentData={$AboutTheCouncilPage.data.page[0]?.content} />
{/if}
