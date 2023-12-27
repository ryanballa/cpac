<script>
	export let items;
</script>

<section class="p-section sub-nav-section">
	<div class="row">
		<div class="col-12">
			<ul class="p-inline-list--middot sub-nav-list">
				{#each items as navItem}
					<li class="p-inline-list__item">
						<a class="p-heading--3" href={navItem.href}>{navItem.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	.sub-nav-section {
		padding-bottom: 0;
	}
	.sub-nav-list {
		margin-bottom: 0;

		& a {
			color: $color-links;
		}
	}
</style>
