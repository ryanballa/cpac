<script>
	import { Content } from '@builder.io/sdk-svelte';
	import BannerComponent from '../lib/BannerComponent.svelte';
	import { BUILDER_PUBLIC_API_KEY } from '$lib/publicAPIKey';
	import { CUSTOM_COMPONENTS } from '$lib/builderCustomComponents';

	export let data;
	$: ({ Page } = data);
</script>

{#if $Page}
	<BannerComponent
		backgroundURL={$Page.data.page[0].content.data.heroBannerBg}
		title={$Page.data.page[0].content.data.heroTitle}
		description={$Page.data.page[0].content.data.heroDescription}
		destination={$Page.data.page[0].content.data.heroActionPath}
		destinationTitle={$Page.data.page[0].content.data.heroActionTitle}
		overlayOpacity={$Page.data.page[0].content.data.heroBannerOpacity}
	/>
	<div class="u-fixed-width">
		<h2 class="p-muted-heading">{$Page.data.page[0].content.data.secondaryPageTitle}</h2>
		<div class="row">
			<hr class="p-rule" />
		</div>
	</div>
	<Content
		model="page"
		apiKey={BUILDER_PUBLIC_API_KEY}
		content={$Page.data.page[0].content}
		customComponents={CUSTOM_COMPONENTS}
	/>
{/if}
