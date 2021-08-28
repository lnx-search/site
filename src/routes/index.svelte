<script>
	import Typewriter from 'svelte-typewriter';
    import {fade} from 'svelte/transition';
    import {onMount} from 'svelte';

    let target = "fast"

    function setFast() {
        target = "fast";
        setTimeout(setFriendly, 2400);

    }

    function setFriendly() {
        target = "friendly";
        setTimeout(setLnx, 3200);

    }

    function setLnx() {
        target = "lnx";
        setTimeout(setFast, 1900);
    }

    onMount(setFast);
</script>

<div class="flex flex-col pt-32 min-h-screen overflow-x-hidden">
    <div class="flex justify-around xl:justify-center flex-wrap px-16">
        <div class="h-64 w-1/2 mt-20">
            <div class="text-4xl lg:text-6xl font-bold border-l-4 border-indigo-600 pt-1 pb-3 pl-4">
                Make it
                <div class="flex text-7xl ml-8">
                    >
                    <div class="italic text-indigo-600 ml-4">
                        <Typewriter loop interval={80}>
                            <span>lightning fast.</span>
                            <span>relevant.</span>
                            <span>typo-tolerant.</span>
                            <span>search as you type.</span>
                            <span>your way.</span>
                        </Typewriter>
                    </div>
                </div>
            </div>
            <div class="mt-16">
                <p class="text-3xl font-semibold w-4/5">
                    Create projects your way with <span class="italic font-bold text-7xl text-indigo-600">lnx</span>.
                    <br/>
                    An open-source,
                    <span class="italic border-b-2 border-indigo-600">lightning-fast</span>
                    and <span class="italic border-b-2 border-indigo-600">typo-tolerant</span> search engine
                    empowering developers and users alike.
                </p>
            </div>
        </div>
        <div class="flex flex-col items-center bg-indigo-600 rounded-lg shadow-inner py-4 mx-4 text-white" style="width: 426px;">
            <div class="transform rotate-3 flex justify-center items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4" style="width: 28rem">
                <img class="w-12 h-12 mr-4" src="/love.svg" alt="">
                <div class="flex flex-col w-3/4">
                    <p class="text-xl font-bold italic">Community Driven</p>
                    <p>100% open-source, built for the community.</p>
                </div>
            </div>
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4" style="width: 28rem">
                <img class="w-12 h-12 mr-4" src="/lightning.svg" alt="">
                <div class="flex flex-col w-3/4">
                    <p class="text-xl font-bold italic">Insanely Fast</p>
                    <p>Query millions of documents in milliseconds with our fast-fuzzy system.</p>
                </div>
            </div>
            <div class="transform rotate-3 flex justify-around items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4" style="width: 28rem">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-xl font-bold italic">Typo-Tolerant</p>
                    <p>lnx provides fuzzy query systems to give you a typo-tolerant query.</p>
                </div>
            </div>
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4" style="width: 28rem">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-xl font-bold italic">Multi-Language</p>
                    <p>Currently lnx supports 17 latin languages. Chinese, japanese and korean are planned.</p>
                </div>
            </div>
            <div class="transform rotate-3 flex justify-around items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4" style="width: 28rem">
                <a href="https://book.lnx.rs" class="cursor-pointer flex items-center justify-center hover:shadow-inner transform duration-200 text-center text-white text-2xl font-bold border-2 border-black bg-indigo-400 hover:bg-indigo-500 rounded-lg h-12 pb-1 px-4">
                    🕹️ Source
                </a>
                <a href="https://book.lnx.rs" class="cursor-pointer flex items-center justify-center hover:shadow-inner transform duration-200 text-center text-white text-2xl font-bold border-2 border-black bg-indigo-400 hover:bg-indigo-500 rounded-lg h-12 pb-1 px-4">
                    🚀 Get Started
                </a>
            </div>
        </div>
    </div>
</div>
