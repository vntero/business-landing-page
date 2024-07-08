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

<SectionWrapper id="project">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Be <span class="text-indigo-400"> the best version </span> of yourself
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Features for everyone
            </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap14 lg:gap-20 relative text-base">
            {#each productFeatures as productFeature, index}
                <ProductCard {productFeature} {index} >
                    {#if index === 0}
                        {:else if index === 1}
                        {:else}
                    {/if}
                </ProductCard>
            {/each}
        </div>
    </div>
</SectionWrapper>