<script>
    import ContentsWrapper 		from "$components/layout/contents/contentsWrapper.svelte";
    import ContentsListItem 	from "$components/layout/contents/contentsListItem.svelte";

    export let data = undefined;

    const arrayGen = (arr) => {
        return arr.map((x) => {
            return {
                text: x.title,
                key: x.slug,
                level: "h1",
                type: "",};});};
</script>

<ContentsWrapper>
    <ContentsListItem dataset={arrayGen(data)}/>
</ContentsWrapper>