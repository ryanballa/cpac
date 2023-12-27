<script>
	export let title;
	export let subTitle;
	export let attributes;
	export let division = '25-75';

	let divisionClass = `row--${division}`;
</script>

<section class="p-section">
	<div class="{divisionClass} is-split-on-medium">
		{#if subTitle}
			<div class="col">
				<h2 class="p-muted-heading">{subTitle}</h2>
			</div>
		{/if}
		<div class="col">
			<h3 class="p-heading--1">{title}</h3>
			<slot {attributes} />
		</div>
	</div>
</section>
