<script>
    import SanityImage from '../../imageBuilder.svelte'
    export let push
    let randomId = Math.floor(Math.random() * 999);
</script>

<div class="dynamicInline" style="--yWid:{push.length}">
    {#each push as image, e}
        <input type="radio" name="radio-{randomId}" checked={e === 0} id="{randomId}-{e}"/>

        <label for="{randomId}-{e}">
            <div class="fade">
                <SanityImage image={image}/>
            </div>
            <div class="wrapper">
                <div class="col">
                    <SanityImage image={image}/>
                </div>
            </div>
        </label>
    {/each}
</div>

<style lang="scss">
	.dynamicInline {
		border-radius:  var(--innerRaidus);
		overflow:           hidden;

		margin-bottom:  var(--contentPaddingY);
		gap:            var(--imageSpacing);

		vertical-align:     bottom;
		justify-content:    center;
        display:            flex;

        label {
	        height:     500px;
            position:   relative;
	        overflow:   hidden;
	        transition: min-width .4s ease-in-out, max-width .4s ease-in-out;

	        .fade {
		        position:   absolute;
		        width:      500px;
		        height:     fit-content;

		        opacity:    0.2;
		        filter:     blur(10px);
	        }

            .wrapper {
	            width:  100%;
	            height: 100%;
	            margin: 0 auto;

	            background:     var(--background);
	            border-radius:  var(--innerRaidus);
	            overflow:       hidden;

	            .col {
		            border-radius:      var(--innerRaidus);
		            overflow:           hidden;

		            display:    block;
		            margin:     0 auto;
		            width:      fit-content;
		            height:     100%;
	            }
            }
        }

		input {
			position: absolute;
			opacity: 0;

			&:checked + label {
				min-width:  calc(100% - (10% * var(--yWid)));
				max-width:  calc(100% - (10% * var(--yWid)));
				.col {
					filter: none;
				}

				opacity: 1;
            }
			&:not(:checked) + label {
				min-width:  100px;

				&:hover {
					min-width:  30.0%;
					max-width:  50.0%;
					.col {
						filter:     none;
					}
                }
            }
        }

    }
</style>