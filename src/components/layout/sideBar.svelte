<script>
    import Container from "$components/generic/containers/container.svelte";
    import NervContainer from "$components/generic/containers/nervContainer.svelte";
</script>

<Container colour={"red"} paddingBool="{false}">
    <div class="emergency red flashing">
        <div class="bars"></div>
        <div class="bars"></div>
    </div>

    <div class="emergencyWrapper flashing">
        <div>
            <p class="def red">EMERGENCY</p>
        </div>
    </div>

    <div class="emergency red flashing">
        <div class="bars"></div>
        <div class="bars"></div>
    </div>
</Container>

<NervContainer
    colour={"orange"}
    tab={true} subtitle="CODE 202" tabColour={"orange"}
    stripeColour={"red"} barBool="{true}" warningScroll="{true}">

    <p class="defPad alt white">
        This site is currently in development. please do not take what you see as a true representation of the final site.
    </p>
</NervContainer>