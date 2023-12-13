<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let title;
	export let uniqueID;
	export let photos;

	const galleryID = `${title.replace(' ', '')}`;

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: `#${uniqueID}`,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		lightbox.init();
	});
</script>

<section class="p-section">
	<div id={uniqueID} class="row--25-25-25-25">
		<h3>{title}</h3>

		{#each photos as photo}
			<div class="col">
				<div class="p-card">
					<div class="p-card__content">
						<a
							href={photo.image}
							data-pswp-width={photo.width}
							data-pswp-height={photo.height}
							target="_blank"
						>
							<img class="p-card__image" src={photo.image} alt={photo.description} />
						</a>
						<p>{photo.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
