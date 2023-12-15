<script>
	export let items;
	export let attributes;
	const formattedData = { id: attributes['builder-id'], class: attributes.class };
</script>

<div builder-id={formattedData.id} class={`col ${formattedData.class}`}>
	<ul class="p-list--divided">
		{#each items as item}
			<li class="p-list__item has-bullet">
				{@html item.title}
			</li>
		{/each}
	</ul>
</div>

<style>
	.p-list__item {
		padding-bottom: 0.5rem;
	}
	:global(.p-list__item > p) {
		margin: 0;
		padding: 0;
	}
</style>
