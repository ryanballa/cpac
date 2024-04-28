<script>
	import { Image } from '@unpic/svelte';

	export let backgroundURL;
	export let title = '';
	export let description = '';
	export let destination = '/';
	export let destinationTitle = '';
	export let overlayOpacity = 0.5;
</script>

<section class="p-strip banner-bg">
	<div class="overlay" style={`opacity: ${overlayOpacity};`} />
	<Image
		background="auto"
		class="bannerImg"
		height="100%"
		width="1350"
		layout="constrained"
		src={backgroundURL}
		alt={destinationTitle}
	/>
	<div class="row--50-50 banner-inner">
		<div class="col">
			<h1>{title}</h1>
			<p>{description}</p>
			{#if destinationTitle !== '' && destination !== ''}
				<p><a class="p-button--brand" href={destination}>{destinationTitle}</a></p>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	:global(.bannerImg) {
		position: absolute;
		left: 0;
		top: 0;
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.banner-bg {
		height: 100%;
		max-height: 500px;
		overflow-y: hidden;
		overflow-x: hidden;
		color: $color-light;
		position: relative;
		width: 100%;

		& .overlay {
			background-color: #292525;
			background-attachment: scroll;
			background-position: 50%;
			background-size: cover;
			content: '';
			display: block;
			opacity: 0.5;
			position: absolute;
			height: 100%;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
		}
	}

	.banner-inner {
		position: relative;
		z-index: 2;
	}
</style>
