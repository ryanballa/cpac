<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ GetInvolvedPage } = data);
</script>

{#if $GetInvolvedPage}
	<PageComponent contentData={$GetInvolvedPage.data.page[0].content} />
{/if}
