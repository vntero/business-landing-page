<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte"
</script>

<SectionWrapper>
    <Header />
    <div class="flex flex-col gap-10 flex-1 items-center 
    justify-center pb-10 md:pb-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center">
            <span class="text-indigo-400">Hair</span> salon 
            <span class="text-slate-600 line-trough">for all</span><br/>
            types <span class="text-indigo-400">of happiness</span>
        </h2>
    </div>
</SectionWrapper>