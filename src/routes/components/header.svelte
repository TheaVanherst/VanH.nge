<header>
    <div>
        <img src="/n8GV2KP.jpg" alt="Banner">
    </div>
</header>

<style lang="scss">
    $padding: 15px;

    header {
        border: 1px solid var(--accent1);
        border-radius: var(--outerRadius);
        overflow:   hidden;
        margin:     0 0 $padding 0;
        max-width:  100%;
        height:     160px;
        position:   relative;

        div {
            height:     100%;
            position:   relative;

            img {
                position:   absolute;
	            object-fit: cover;
	            height: 100%;
	            width: 100%;
            }
        }
    }
</style>