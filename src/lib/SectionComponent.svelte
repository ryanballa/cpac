<script>
	export let title;
	export let subTitle;
	export let attributes;
</script>

{#if subTitle}<div class="u-fixed-width">
		<h2 class="p-muted-heading">{subTitle}</h2>
		<div class="row">
			<hr class="p-rule" />
		</div>
	</div>{/if}
<section class="p-section">
	<div class="row--25-75 is-split-on-medium">
		<div class="col">
			<h3 class="p-heading--1">{title}</h3>
		</div>
		<slot {attributes} />
	</div>
</section>
