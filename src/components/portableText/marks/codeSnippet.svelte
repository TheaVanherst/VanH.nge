<codesnippet>
    <slot/>
</codesnippet>

<style lang="scss">
    codesnippet {
        font-family:        monospace;
        background-color:   var(--backgroundAccent2);

        padding:        1px 4px;
        border-radius:  var(--innerRaidus);

        &::selection {
            color:              var(--textColourInvert);
            background-color: 	var(--textColour);}
    }
</style>