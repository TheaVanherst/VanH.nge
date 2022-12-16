<header>
    <div id="background">
        <img src="/n8GV2KP.jpg">
        <logo>
            <img src="/test.png">
            <img src="/defaultback.png" id="loadInBack">
            <img src="/defaultbase.png">
        </logo>
        <img src="/n8GV2KP.jpg">
        <img src="/1kVZRD6.png">
    </div>

    <svg shape-rendering="geometricPrecision" style="top: -500px; position: absolute;">
        <filter id="turbulence">
            <feTurbulence id="sea-filter" numOctaves="1" seed="2" baseFrequency="0.04 0.08"></feTurbulence>
            <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
            <animate xlink:href="#sea-filter" attributeName="baseFrequency" dur="160s" repeatCount="indefinite" keyTimes="0;0.5;1" values="0.02 0.01;0.02 0.08;0.02 0.01"/>
        </filter>
    </svg>
</header>

<style>
    header {
        margin:     0 0 15px 0;
        max-width:  100%;
        height:     160px;
        position:   relative;}

    #background {
        height:     160px;
        overflow:   hidden;
        position:   relative;
        border-radius:  var(--outerRadius);}

    #background > img {
        position:   absolute;
        filter:     url("#turbulence");
        left:      -20px;
        top:       -20px;
        width:      940px;}

    #background > img:nth-of-type(2) {opacity:    0.3;}
    #background > img:nth-of-type(3) {opacity:    0.8;}

    logo > * {
        position:   absolute;
        height:     150px;
        filter:     url("#turbulence");
        transition: opacity 0.5s,
                    transform 1s;}

    logo:not(#alt) > * {
        filter: hue-rotate(320deg)
                brightness(130%)
                url("#turbulence");
    }
</style>