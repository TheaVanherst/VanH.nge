<script>
    export let portableText = null;
</script>

<ul class={portableText.value.listItem}>
    <slot/>
</ul>

<style lang="scss">
	ul {
		margin: 0;
		padding: 0 10px 7px 32px;
		font-size:      14px;
	}
</style>