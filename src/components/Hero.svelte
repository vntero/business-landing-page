<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte"
</script>

<SectionWrapper>
    <Header />
    <div class="flex flex-col gap-10 flex-1 items-center 
    justify-center pb-10 md:pb-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold">
            <span class="text-indigo-400">A hair</span> salon 
            <span class="text-slate-600 line-through">is very slow</span><br/>
            for <span class="text-indigo-400">busy people</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
            Who says looking good has to be a burden? We're the stylists in your 
            <span class="italic">neighbourhood</span> & much much more.
        </p>
    </div>
</SectionWrapper>