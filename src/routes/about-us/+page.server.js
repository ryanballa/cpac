import { builderFetchPage } from '$lib/builderUtils';

export async function load({ route }) {
	return builderFetchPage({ page: route.id });
}
