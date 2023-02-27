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
    stripeColour={"red"} barBool={true} warning={true}>

    <p class="defPad bod orange">
        This site is currently in development. please do not take what you see as a true representation of the final site.</p>
    <p class="defPad bod orange">
        NERV is an international organization with their center of operation located in the city of Tokyo-3, Japan. More specifically, they run the majority of their research and operations out of NERV Headquarters, a large facility located in the GeoFront. Outside of their main operation in Japan, NERV also has operations in the United States, Germany and possibly more. </p>
    <p class="nutPad bod green">
        01101110 01101111 01110100 00100000 01100101 01101110 01101111 01110101 01100111 01101000 00100000 01110000 01111001 01101100 01101111 01101110 01110011 00100000 01101110 01101111 01110100 00100000 01100101 01101110 01101111 01110101 01100111 01101000 00100000 01110000 01111001 01101100 01101111 01101110 01110011</p>
    <p class="defPad bod orange">
        NERV (German for "nerve") is a special organization that was put together to combat the Angels after the Second Impact and is the organization responsible for the creation of the Evangelions.</p>
</NervContainer>