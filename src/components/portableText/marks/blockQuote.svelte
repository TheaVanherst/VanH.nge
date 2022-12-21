<blockquote>
    <slot/>
</blockquote>

<style>
    blockquote {
        padding: 	3px 6px 3px 6px;
        margin: 	0 10px 10px 10px;
        font-style: italic;
        border-radius: 		5px;
        border-left: 		1px solid var(--fadedColourAcc);
        background-color: 	var(--backgColour);}
    blockquote:before {
        color: 		var(--fadedColourAcc);
        content: 	open-quote;
        font-size: 	2em;
        margin-right: 	0.15em;
        margin-left:   -0.15em;
        line-height: 	0.1em;
        vertical-align:-0.2em;}
    blockquote:after {
        margin: 	0.80em 0.00em -0.15em 0.05em;

        color: 			var(--fadedColourAcc);
        content: 		close-quote;
        float: 			right;
        font-size: 		2em;
        line-height: 	0.05em;}

    sub, sup {	font-size: 0.6em;}
</style>