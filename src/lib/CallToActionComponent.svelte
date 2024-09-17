<script>
	export let sectionTitle;
	export let actionText;
	export let imageSizeOption;
	export let description;
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
			<div class="slot-container image-size-{imageSizeOption}">
				<slot />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.slot-container.image-size-fifty-percent :global(.p-card:only-of-type) {
		width: 50%;
	}

	.slot-container.image-size-one-hundred-percent :global(.p-card:only-of-type) {
		width: 100%;
	}
</style>
