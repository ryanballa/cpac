<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ ContactUsPage } = data);
</script>

{#if $ContactUsPage}
	<PageComponent contentData={$ContactUsPage.data.page[0]?.content} />
{/if}
