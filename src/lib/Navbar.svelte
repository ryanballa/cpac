<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/clarendon-park-advisory-council-logo.svg';
</script>

<header id="navigation" class="p-navigation is-dark">
	<div class="p-navigation__row">
		<div class="p-navigation__banner">
			<div class="p-navigation__tagged-logo">
				<a class="p-navigation__link" href="/"
					><img class="logo" src={logo} alt="Clarendon Park Advisory Council" /></a
				>
			</div>
			<a href="#navigation" class="p-navigation__toggle--open" title="menu">Menu</a>
			<a href="#navigation-closed" class="p-navigation__toggle--close" title="close menu"
				>Close menu</a
			>
		</div>
		<nav class="p-navigation__nav">
			<ul class="p-navigation__items">
				<li
					class="p-navigation__item is-selected"
					class:is-selected={$page.url.pathname == '/about-us'}
				>
					<a class="p-navigation__link" href="/about-us">About Us</a>
				</li>
				<li class="p-navigation__item" class:is-selected={$page.url.pathname == '/renovations'}>
					<a class="p-navigation__link" href="/renovations">Renovations</a>
				</li>
				<li class="p-navigation__item" class:is-selected={$page.url.pathname == '/programming'}>
					<a class="p-navigation__link" href="/programming">Programming</a>
				</li>
				<li class="p-navigation__item" class:is-selected={$page.url.pathname == '/contact-us'}>
					<a class="p-navigation__link" href="/contact-us">Contact Us</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	@media screen and (min-width: $breakpoint-large) {
		.p-navigation__nav {
			align-items: end;
			justify-content: end;
		}
	}

	.logo {
		width: 170px;
	}
</style>
