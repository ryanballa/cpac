<script>
	import '../app.scss';
	import '$lib/scss/_main.scss';
	import '$lib/scss/_settings_themes.scss';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main class="container">
	<Navbar />
	<slot />
	<Footer />
</main>
