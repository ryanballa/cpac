<script>
	import { BUILDER_PUBLIC_API_KEY } from '$lib/publicAPIKey';
	import { CUSTOM_COMPONENTS } from '$lib/builderCustomComponents';
	import BannerComponent from '../lib/BannerComponent.svelte';
	import { Content } from '@builder.io/sdk-svelte';

	export let contentData;
</script>

<svelte:head>
	<title>{contentData?.data?.title} | Clarendon Park Advisory Council</title>
	<meta name="description" content={contentData?.data?.description} />
</svelte:head>

{#if contentData?.data?.heroBannerBg}
	<BannerComponent
		backgroundURL={contentData.data.heroBannerBg}
		title={contentData.data.heroTitle}
		description={contentData.data.heroDescription}
		destination={contentData.data.heroActionPath}
		destinationTitle={contentData.data.heroActionTitle}
		overlayOpacity={contentData.data.heroBannerOpacity}
	/>
{/if}
{#if contentData?.data?.secondaryPageTitle && contentData?.data?.secondaryPageTitle !== 'Content Title'}
	<div class="u-fixed-width">
		<h2 class="p-muted-heading">{contentData.data.secondaryPageTitle}</h2>
		<div class="row">
			<hr class="p-rule" />
		</div>
	</div>
{/if}
<Content
	enrich={true}
	model="page"
	apiKey={BUILDER_PUBLIC_API_KEY}
	content={contentData}
	data={contentData?.data}
	customComponents={CUSTOM_COMPONENTS}
/>
