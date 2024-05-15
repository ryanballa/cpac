<script>
	export let image;
	export let altText;
	export let description;
	export let actionText;
	export let actionUrl;
</script>

<div class="p-card">
	<div class="p-card__content">
		<img class="p-card__image" alt={altText} src={image} />
		<p>{description}</p>
		{#if actionText && actionUrl}
			<p>
				<a class="p-button--brand" href={actionUrl}>{actionText}</a>
			</p>
		{/if}
	</div>
</div>
