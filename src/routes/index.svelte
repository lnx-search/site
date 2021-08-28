<script>
    import Typewriter from 'svelte-typewriter';
</script>

<div class="flex flex-col items-center pt-16 min-h-screen overflow-x-hidden">
    <div class="flex flex-col items-center px-4">
        <h1 class="text-8xl font-bold italic text-indigo-600">
            lnx
        </h1>
        <h3 class="text-2xl text-center font-bold">An adaptable search engine API.</h3>
    </div>
    <div class="flex flex-col items-center lg:items-start lg:flex-row md:justify-between xl:justify-center flex-wrap 2xl:px-16 my-4 lg:my-24">
        <div class="flex flex-col items-center lg:items-start w-full lg:w-1/2 mt-12 lg:mt-24">
            <div class="text-2xl lg:text-6xl font-bold border-l-4 border-indigo-600 pt-1 pb-3 pl-4 w-4/5 lg:w-auto">
                Make it
                <div class="flex text-3xl lg:text-7xl ml-8">
                    >
                    <div class="italic text-indigo-600 ml-4">
                        <Typewriter loop interval={80}>
                            <span>lightning fast.</span>
                            <span>relevant.</span>
                            <span>typo tolerant.</span>
                            <span>search as you type.</span>
                            <span>your way.</span>
                        </Typewriter>
                    </div>
                </div>
            </div>
            <div class="flex justify-center lg:justify-start mt-8 lg:mt-16">
                <p class="text-3xl font-semibold text-center lg:text-left w-4/5 px-4 lg:px-0">
                    An open-source,
                    <span class="italic border-b-2 border-indigo-600">lightning-fast</span>
                    and <span class="italic border-b-2 border-indigo-600">typo tolerant</span>
                    search engine
                    empowering developers and users alike.
                </p>
            </div>
        </div>
        <div class="flex flex-col items-center bg-indigo-600 rounded-lg shadow-inner py-4 mx-4 text-white mt-8 lg:mt-0 w-9/12 lg:w-426">
            <div class="transform rotate-3 flex justify-center items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <img class="w-12 h-12 mr-4" src="/love.svg" alt="">
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Community Driven</p>
                    <p class="text-sm lg:text-base">100% open-source, built for the community.</p>
                </div>
            </div>
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <img class="w-12 h-12 mr-4" src="/lightning.svg" alt="">
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Insanely Fast</p>
                    <p class="text-sm lg:text-base">Query millions of documents in milliseconds with
                        our fast-fuzzy system.</p>
                </div>
            </div>
            <div class="transform rotate-3 flex justify-around items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 h-12 w-12 mr-4"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Typo Tolerant</p>
                    <p class="text-sm lg:text-base">lnx provides fuzzy query systems to give you a
                        typo-tolerant query.</p>
                </div>
            </div>
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-12 w-12 mr-4"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Multi-Language</p>
                    <p class="text-sm lg:text-base">Currently lnx supports 17 latin languages.
                        Chinese, Japanese and Korean are planned.</p>
                </div>
            </div>
            <div class="flex justify-around items-center h-24 bg-gray-900 rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <a href="https://github.com/lnx-search/lnx"
                   class="cursor-pointer flex items-center justify-center hover:shadow-inner transform duration-200 text-center text-white text-base lg:text-2xl font-bold border-2 border-black bg-indigo-400 hover:bg-indigo-500 rounded-lg h-12 pb-1 px-4">
                    🕹️ Source
                </a>
                <a href="https://book.lnx.rs"
                   class="cursor-pointer flex items-center justify-center hover:shadow-inner transform duration-200 text-center text-white text-base lg:text-2xl font-bold border-2 border-black bg-indigo-400 hover:bg-indigo-500 rounded-lg h-12 pb-1 px-4">
                    🚀 Get Started
                </a>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center lg:items-start lg:flex-row-reverse md:justify-between xl:justify-around flex-wrap text-white bg-gray-900 2xl:px-16 my-4 lg:py-24 w-full">
        <div class="flex flex-col w-full lg:w-1/2 mt-12 lg:mt-24">
            <h3 class="text-2xl lg:text-6xl font-bold mb-6">Built for anything</h3>
            <p class="text-gray-500 text-3xl font-semibold text-center lg:text-left lg:px-0">
                todo
            </p>
        </div>
        <div class="flex flex-col items-center bg-indigo-600 rounded-lg shadow-inner py-4 mx-4 text-gray-900 mt-8 lg:mt-0 w-9/12 lg:w-426">
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-white rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-900 rounded rounded-lg bg-blue-400 border-2 border-blue-600 shadow-inner w-12 h-12 p-2 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Sorting By Field</p>
                    <p class="text-sm lg:text-base">Results can be sorted by any fast-field quickly and easily.</p>
                </div>
            </div>
            <div class="transform rotate-3 flex justify-center items-center h-24 bg-white rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-900 rounded-lg bg-green-300 border-2 border-green-500 shadow-inner w-12 h-12 p-2 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Stop Words</p>
                    <p class="text-sm lg:text-base">
                        With a pre-made set, stop words can be removed to boost
                        relevancy in queries.
                    </p>
                </div>
            </div>
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-white rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-red-900 rounded-lg bg-red-400 border-2 border-red-600 shadow-inner w-12 h-12 p-2 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Token Bearer Authorization</p>
                    <p class="text-sm lg:text-base">
                        Secure your system giving permissions based access to specific users.
                    </p>
                </div>
            </div>
            <div class="transform rotate-3 flex justify-center items-center h-24 bg-white rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-900 rounded-lg bg-purple-400 border-2 border-purple-600 shadow-inner w-12 h-12 p-2 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Boost Fields</p>
                    <p class="text-sm lg:text-base">
                        Each fields can be individually adjusted to give the best
                        searching experience.
                    </p>
                </div>
            </div>
            <div class="transform -rotate-3 flex justify-center items-center h-24 bg-white rounded-lg shadow-md my-4 p-4 w-80 lg:w-28">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-900 rounded-lg bg-yellow-400 border-2 border-yellow-600 shadow-inner w-12 h-12 p-2 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div class="flex flex-col w-3/4">
                    <p class="text-base lg:text-xl font-bold italic">Fast-Fuzzy Pre-Computation</p>
                    <p class="text-sm lg:text-base">
                        This feature uses pre-computation to boost fuzzy query performance by over
                        <span class="font-bold italic">10x</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
