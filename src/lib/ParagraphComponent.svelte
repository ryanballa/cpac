<script>
	export let copy;
	export let attributes;
</script>

<div class={`col ${attributes}`}>
	<p>{copy}</p>
</div>

<style>
	p {
		max-width: 100%;
	}
</style>
