<script>
	import PageComponent from '$lib/PageComponent.svelte';

	export let data;
	$: ({ MeetingMinutes } = data);
</script>

{#if $MeetingMinutes.fetching}
	Loading
{:else}
	<PageComponent contentData={$MeetingMinutes.data.page[0]?.content} />
{/if}
