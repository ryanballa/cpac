<script>
	export let items;
	export let props;
</script>

<div class="col">
	<ul class="p-list--divided">
		{#each items as item}
			<li class="p-list__item has-bullet">
				{item.title}
			</li>
		{/each}
	</ul>
</div>
