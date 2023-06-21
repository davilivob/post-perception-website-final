<script lang="ts">
    export let language: string = "zh";
    export let page: string = "home";

    let is_en: boolean = language === "en";
    let URL: string = window.location.href;

    const BASE_URL = import.meta.env.BASE_URL;

    function switch_language() {
        URL = window.location.href;
        window.location.href = is_en ? URL.replace("en", "zh") : URL.replace("zh", "en");
        location.reload();
    }

    const links = [
        { id: 0, en: "home", zh: "首頁" },
        { id: 1, en: "about", zh: "關於" },
        { id: 2, en: "members", zh: "參展人員" },
        { id: 3, en: "artworks", zh: "參展作品" },
        { id: 4, en: "records", zh: "展場紀錄" },
    ];

    function open_menu() {
        const links_container = document.querySelector("#links-container");
        const menu_icon = document.querySelector("#menu-icon");
        const close_icon = document.querySelector("#close-icon");
        links_container.classList.toggle("hidden");
        links_container.classList.toggle("backdrop-blur-xl");
        menu_icon.classList.toggle("hidden");
    }

    console.log(language);
</script>

<div id="navbar" class="fixed w-screen h-16 backdrop-blur-sm z-30 flex flex-row items-center justify-between bg-gradient-to-b from-transparent to-black/20 shadow-2xl shadow-black/60">
    <div class="flex justify-between items-center font-extrabold">
        <a href="{BASE_URL}/#/{language}/home" class="font-extrabold">
            <h1 class="text-white not-italic text-4xl left-5 tracking-tighter flex flex-row justify-center items-center" id="header-title">
                <img src="{BASE_URL}/images/website/logo/logo200.gif" alt="Logo" class="h-16" />
                <a class="hidden sm:inline shadow-black transform-all duration-500 ease-in-out">
                    {is_en ? "Post-Perception" : "後知後覺後"}
                </a>
            </h1>
        </a>
    </div>

    <div class="hidden lg:block mr-5 font-bold text-lg rounded-xl">
        {#each links as link (link.id)}
            <a
                class="cursor-pointer hover:text-white {link.en == page ? 'text-white text-2xl' : 'text-amber-400'} border-r-2 border-white/60 px-3 duration-100"
                href="{BASE_URL}/#/{language}/{link.en}"
                on:click={(e) => {
                    for (let link of links) {
                        document.querySelector(`a[href="${BASE_URL}/#/${language}/${link.en}"]`).classList.remove("text-white");
                        document.querySelector(`a[href="${BASE_URL}/#/${language}/${link.en}"]`).classList.remove("text-2xl");
                        document.querySelector(`a[href="${BASE_URL}/#/${language}/${link.en}"]`).classList.add("text-amber-400");
                    }
                    window.location.href = e.target.href;
                    e.target.classList.add("text-white");
                    e.target.classList.add("text-2xl");
                    e.target.classList.remove("text-amber-400");
                }}
            >
                {is_en ? link.en.toUpperCase() : link.zh}
            </a>
        {/each}
        <a class="cursor-pointer hover:text-white text-amber-400" on:click={switch_language}>
            {@html is_en ? '<a class="text-white/20">中</a>/<a class="text-white">En</a>' : '<a class="text-white">中</a>/<a class="text-white/20">En</a>'}
        </a>
    </div>

    <button id="menu-icon" class="fa-solid fa-bars p-5 text-3xl ml-auto cursor-pointer text-3xl mx-2 lg:hidden" on:click={open_menu} />
</div>

<div
    id="links-container"
    class="fixed text-center items-center justify-center flex flex-col
         hidden w-screen h-screen gap-10 z-10 bg-violet-500/10 transition-all ease-in-out duration-700 text-white"
>
    <i id="close-icon" class="fa-solid fa-xmark text-3xl cursor-pointer" on:click={open_menu} />
    {#each links as link (link.id)}
        <a class="">
            <a href="{BASE_URL}/#/{language}/{link.en}/" on:click={open_menu}>
                {is_en ? link.en : link.zh}
            </a>
        </a>
    {/each}
    <div class="flex flex-row top-0 cursor-pointer">
        <a class="">
            <a on:click={switch_language} on:click={open_menu}>
                {is_en ? "中" : "En"}
            </a>
        </a>
    </div>
</div>
