<script>
    import {fade, fly} from 'svelte/transition';

    let open = false;

    function toggleHamburger() {
        open = !open;
    }

    function redirectTo(url) {
        open = false;
    }
</script>

<nav class="flex flex-col lg:flex-row justify-start lg:justify-around items-center bg-transparent h-20">
    <div class="flex justify-around items-center w-full lg:w-auto">
        <div class="flex items-center">
            <img class="w-12 h-12" src="/logo.png" alt="">
            <div class="h-full text-xs text-gray-600 border-l-2 border-indigo-600">
                <p class="pl-1 pt-1">Lightning-fast,</p>
                <p class="pl-1 transform -translate-y-1">Feature-rich search.</p>
            </div>
        </div>
        <div class="block md:hidden text-gray-900">
            <button on:click={toggleHamburger} class="relative h-6 w-6 object-contain text-gray-900 mb-8">
                {#if open}
                   <svg transition:fade xmlns="http://www.w3.org/2000/svg" class="absolute left-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                {:else}
                    <svg transition:fade xmlns="http://www.w3.org/2000/svg" class="absolute left-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                {/if}
            </button>
        </div>
    </div>

    <div class="hidden md:block flex items-center text-lg font-bold">
        <!-- <a href="" class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4">Tutorial</a> -->
        <a href="https://docs.lnx.rs" class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4">Documentation</a>
        <!-- <a href="" class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4">Blog</a> -->
        <a href="https://github.com/lnx-search/lnx" class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4">GitHub</a>
    </div>

    {#if open}
        <div transition:fade class="sticky flex flex-col items-center block md:hidden text-gray-900 text-2xl font-semibold bg-white border-b-2 border-black h-screen w-full py-8">
            <button in:fly="{{ y: -200, duration: 1000 }}" out:fly="{{ y: -200, duration: 1000 }}" on:click={() => redirectTo("")} class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4 my-4">Tutorial</button>
            <button in:fly="{{ y: -250, duration: 1000 }}" out:fly="{{ y: -250, duration: 1000 }}" on:click={() => redirectTo("")} class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4 my-4">Documentation</button>
            <button in:fly="{{ y: -300, duration: 1000 }}" out:fly="{{ y: -300, duration: 1000 }}" on:click={() => redirectTo("")} class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4 my-4">Blog</button>
            <button in:fly="{{ y: -350, duration: 1000 }}" out:fly="{{ y: -350, duration: 1000 }}" on:click={() => redirectTo("https://github.com/lnx-search/lnx")} class="cursor-pointer border-b-2 border-indigo-600 hover:border-black transition duration-200 px-2 mx-4 my-4">GitHub</button>
        </div>
    {/if}
</nav>