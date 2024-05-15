<script>
	export let sectionTitle;
	export let actionText;
	export let description;
	export let imageSize = 'fifty-percent';
</script>

<section class="p-section">
	<div class="row--25-75 is-split-on-medium">
		<div class="col">
			<p class="p-muted-heading">{actionText}</p>
		</div>
		<div class="col">
			<h3>{sectionTitle}</h3>
			<p>
				{description}
			</p>
			<div class="slot-container image-size-percent-{imageSize}">
				<slot />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.slot-container :global(.p-card:only-of-type) .image-size-percent-fifty-percent {
		width: 50%;
	}

	.slot-container :global(.p-card:only-of-type) .image-size-percent-one-hundred-percent {
		width: 100%;
	}
</style>
