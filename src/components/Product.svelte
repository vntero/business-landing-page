<script>
    import ProductCard from "./ProductCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    let productFeatures=[
        {
            featureList: [
                'Curly',
                'Flat',
                'Mixed',
                'Bold'
            ],
            description: 'We take care of all kinds of hair, making sure you feel fabulous afterwards.',
            imgUrl: ''
        },
        {
            featureList: [
                'Wash & Cut',
                'Cut & Go',
                'Razor away',
                'Full throttle'
            ],
            description: 'Depending on your time, we give you the best look possible!',
            imgUrl: ''
        },
        {
            featureList: [
                'Nails',
                'Skin',
                'Feet',
                'Depilation'
            ],
            description: 'Need a helping hand? We got covered there too.',
            imgUrl: ''
        },
    ]
</script>

<SectionWrapper id="product">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Start your lifetime <span class="text-indigo-400"
                    >gym streak</span
                > today
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Features For Everyone
            </h3>
        </div>
            {#each productFeatures as productFeature, index}
                <ProductCard {productFeature} {index} >
                    {#if index === 0}
                    Experience our fastest haircut. <span class="text-indigo-400 font-medium">Be ready to rock in 15min. </span>
                    {:else if index === 1}
                    Our full treatment is a guaranteed <span class="text-indigo-400 font-medium">success and relaxation.</span>
                    {:else}
                    Book by calling our number <span class="text-indigo-400 font-medium">or through our website.</span>
                    {/if}
                </ProductCard>
            {/each}
        </div>
</SectionWrapper>