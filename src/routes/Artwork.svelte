<script lang="ts">
    import FacePic from "../Components/FacePic.svelte";
    import {information} from "../lib/info";
    import {onMount} from "svelte";

    const BASE_URL = import.meta.env.BASE_URL;

    export let params: object = {};

    let is_en: boolean = params.language == "en";
    let all_info: object = $information[params.language];
    let artwork_info: object = all_info.art_teams[params.id];

    let team_members: object = artwork_info.members;
    let description: String = artwork_info.description;
    let format: String = artwork_info.format;
    let media: String = artwork_info.media;
    let img_range: Array<Number> = artwork_info.record.images;
    let face_pic_width_vw = parseInt(String(100.0 / team_members.length));

    const default_page = "description";
    let current_page = params.page || default_page;
    $: image_num = 0;
    $: record_img_num = 0;

    // This line in necessary to make TailwindCSS know what tags need to be used
    const tailwinds_tags = ["to-violet-900", "to-violet-900/10", "to-rose-900", "to-rose-900/10", "to-cyan-900", "to-cyan-900/10", "to-lime-900", "to-lime-900/10"];

    const pages: Object = [
        {
            name: "creators",
            color: "rose",
            content: is_en ? "Creators" : "創作者",
            icon: "fa-users",
        },
        {
            name: "description",
            color: "cyan",
            content: is_en ? "Description" : "作品介紹",
            icon: "fa-books",
        },
        img_range[1] === 0
            ? {}
            : {
                name: "image_record",
                color: "violet",
                content: is_en ? "Image Record" : "照片記錄",
                icon: "fa-images",
            },
        !artwork_info.record.video
            ? {}
            : {
                name: "video_record",
                color: "lime",
                content: is_en ? "video record" : "影像記錄",
                icon: "fa-video",
            },
    ];

    if (["creators", "description", "image_record", "video_record"].indexOf(current_page) == -1) {
        window.location.href = `${BASE_URL}/#/${params.language}/artworks/${params.id}`;
        current_page = default_page;
    }

    let record_images = [];
    let small_record_images = [];
    for (let i = img_range[0]; i < img_range[1] + img_range[0]; i++) {
        record_images.push(`${BASE_URL}/images/exhibition/artwork_photos/${artwork_info.id}/${i}.jpg`);
        small_record_images.push(`${BASE_URL}/images/exhibition/artwork_photos/${artwork_info.id}/small-${i}.jpg`);
    }

    console.log(record_images);

    function next_img() {
        if (image_num >= img_range[0] - 1) image_num = 0;
        else image_num++;
    }

    function last_img() {
        if (image_num <= 0) image_num = img_range[0] - 1;
        else image_num--;
    }

    function toggle_description(e) {
        e.target.classList.toggle("fa-book-open");
        e.target.classList.toggle("fa-book");
        const description = document.getElementById("description-text-container");
        const content = document.querySelector("#description-text-container p");
        description.classList.toggle("text-transparent");
        description.classList.toggle("text-cyan-50/80");
        description.classList.toggle("bg-black/30");
        description.classList.toggle("backdrop-blur-xl");
        content.classList.toggle("pointer-events-none");
        content.classList.toggle("shadow-black");
        content.classList.toggle("shadow-2xl");
    }

    function hide_page(page_name: String) {
        console.log(`${page_name} page is hidden`);
        document.getElementById(`${page_name}-page`).classList.add("hidden");
    }

    function show_page(page_name: String) {
        console.log(`switched to ${page_name}`);
        document.getElementById(`${page_name}-page`).classList.remove("hidden");
    }

    onMount(() => {
        const current_page_color = pages.find((page) => page.name == current_page).color;
        document.getElementById(`${current_page}-btn`).classList.add(`to-${current_page_color}-900`);
        document.getElementById(`${current_page}-btn`).classList.remove(`to-${current_page_color}-900/10`);
    });
</script>

<div class="mx-3 pt-16 text-center">
    <a
            class="text-lg mx-3 text-white/20 cursor-pointer hover:text-white transition-all duration-500 ease-in-out"
            href="{BASE_URL}/#/redirect/@{params.language}@artworks@{artwork_info.id >= 1 ? artwork_info.id - 1 : 11}"
    >
        <a class="fa-solid fa-arrow-left"/>
        {all_info.art_teams[artwork_info.id >= 1 ? artwork_info.id - 1 : 11].title}
    </a>
    <h1 class="text-center text-5xl font-black m-1 text-white {artwork_info.id == 4 ? 'break-all' : ''}">{artwork_info.title}</h1>
    <a
            class="text-lg mx-3 text-white/20 cursor-pointer hover:text-white transition-all duration-500 ease-in-out"
            href="{BASE_URL}/#/redirect/@{params.language}@artworks@{artwork_info.id < 11 ? artwork_info.id + 1 : 0}"
    >
        {artwork_info.id < 11 ? all_info.art_teams[artwork_info.id + 1].title : all_info.art_teams[0].title}
        <a class="fa-solid fa-arrow-right"/>
    </a>

    <h2 class="text-center text-xl font-bold my-1">{artwork_info.format}</h2>
    <h3 class="text-center text-s font-extralight my-1 mx-2">{artwork_info.media}</h3>
</div>

<div class="mx-3 flex flex-col justify-center items-center text-center my-3">
    <div class="flex flex-rol flex-wrap rounded-full m-auto items-center justify-center gap-3 px-2 py-1">
        {#each pages as page}
            {#if page.name}
                <div
                        id="{page.name}-btn"
                        class="rounded-full bg-gradient-to-tl from-white/10 to-{page.color}-900/10 px-3 py-1 text-s cursor-pointer"
                        on:click={(e) => {
                        if (current_page === page.name) return;
                        window.location.href = `${BASE_URL}/#/${params.language}/artworks/${artwork_info.id}/${page.name}`;
                        current_page = page.name;
                        console.log(`switching to ${page.name}`);
                        e.target.classList.toggle(`to-${page.color}-900`);
                        e.target.classList.toggle(`to-${page.color}-900/10`);
                        for (let i = 0; i < pages.length; i++) {
                            if (pages[i].name !== page.name) {
                                hide_page(pages[i].name);
                                document.getElementById(`${pages[i].name}-btn`).classList.remove(`to-${pages[i].color}-900`);
                                document.getElementById(`${pages[i].name}-btn`).classList.add(`to-${pages[i].color}-900/10`);
                            } else {
                                show_page(pages[i].name);
                            }
                        }
                    }}
                >
                    <a class="fa-regular {page.icon} pointer-events-none"></a>
                    {page.content}
                </div>
            {/if}
        {/each}
    </div>

    <div class="w-11/12 bg-gradient-to-tr from-white/5 to-violet-600/5 rounded-xl m-5 text-gray-300 font-bolder shadow-black/50 shadow-2xl">
        <div class="{current_page === 'creators' ? '' : 'hidden'} p-5" id="creators-page">
            <div class="justify-evenly flex flex-wrap">
                {#each team_members as member}
                    <div class="mx-1 w-48 md:w-64 font-light text-center flex flex-col justify-center items-center">
                        <FacePic id={member.id} lang={params.language}/>
                        <div class="desc text-xl mt-1">{all_info.personal_info[member.id].name}</div>
                        <div class="overlay">
                            <div class="text-sm">{member.title}</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="p-0 flex flex-wrap flex-row items-center justify-center {current_page === 'description' ? '' : 'hidden'}"
             id="description-page">
            <!--            Image Progress Bar-->
            <div class="w-[96%] bg-white-10 flex flex-row justify-center">
                <div class="bg-gradient-to-l from-violet-500 to-transparent h-1 transition-all duration-500"
                     style="width: {parseInt((image_num * 100) / (img_range[0] - 1) / 4).toString()}%"></div>
                <div class="bg-gradient-to-r from-violet-500 to-orange-500 h-1 transition-all duration-300"
                     style="width: {parseInt((((image_num * 100) / (img_range[0] - 1)) * 2) / 4).toString()}%"></div>
                <div class="bg-gradient-to-r from-orange-500 to-transparent h-1 transition-all duration-300"
                     style="width: {parseInt((image_num * 100) / (img_range[0] - 1) / 4).toString()}%"></div>
            </div>

            <div
                    class="w-full h-[80vh] bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-tr-xl rounded-br-xl"
                    style="background-image:url('{BASE_URL}/images/exhibition/artwork_photos/{artwork_info.id}/{image_num}.jpg'), url('{BASE_URL}/images/website/logo/logo200.gif');"
            >
                <div
                        class="bg-black/30 top-0 sm:text-lg text-s text-cyan-50/80 text-left break-after-avoid
                    md:w-1/3 h-full duration-500 rounded-t-xl rounded-br-xl md:rounded-r-none backdrop-blur-xl"
                        id="description-text-container"
                >
                    <p class="px-5 py-3 max-h-full h-full overflow-auto sticky shadow-black shadow-2xl">
                        {is_en ? "Description" : "作品論述"}：
                        <br/><br/>
                        {@html description}
                    </p>
                    <div
                            class="text-lg text-black/20 flex flex-row w-fit
                        bg-white/90 rounded-bl-xl rounded-br-xl p-1
                        cursor-pointer shadow-inner shadow-black"
                    >
                        <a class="fa-solid fa-chevron-left hover:text-black transition-colors duration-200 p-2 px-3"
                           on:click={last_img}></a>
                        <a class="fa-regular fa-book-open hover:text-black transition-colors duration-200 p-2 px-3"
                           on:click={toggle_description}></a>
                        <a class="fa-solid fa-chevron-right hover:text-black transition-colors duration-200 p-2 px-3"
                           on:click={next_img}></a>
                    </div>
                </div>
            </div>
        </div>

        <div id="image_record-page" class={current_page === "image_record" ? "" : "hidden"}>
            <div class="w-[96%] bg-white-10 flex flex-row justify-center">
                <div class="bg-gradient-to-l from-violet-500 to-transparent h-1 transition-all duration-500"
                     style="width: {parseInt((record_img_num * 100) / (img_range[1] - 1) / 4).toString()}%"></div>
                <div
                        class="bg-gradient-to-r from-violet-500 to-amber-500 h-1 transition-all duration-300"
                        style="width: {parseInt((((record_img_num * 100) / (img_range[1] - 1)) * 2) / 4).toString()}%"></div>
                <div class="bg-gradient-to-r from-amber-500 to-transparent h-1 transition-all duration-300"
                     style="width: {parseInt((record_img_num * 100) / (img_range[1] - 1) / 4).toString()}%"></div>
            </div>
            <div class="w-full h-[80vh]">
                <div
                        class="h-[72vh] w-full bg-no-repeat bg-center bg-contain bg-black/60 rounded-t-xl flex flex-row justify-between items-center"
                        id="record-image-container"
                        style="background-image: url('{record_images[record_img_num]}')"
                >
                    <a
                            class="fa-solid fa-chevron-left text-3xl cursor-pointer text-white/50 hover:text-white duration-300 pl-3 pr-[20vw] py-[20vh]"
                            on:click={() => {
                            if (record_img_num > 0) record_img_num -= 1;
                            else record_img_num = record_images.length - 1;
                        }}></a>
                    <a
                            class="fa-solid fa-chevron-right text-3xl cursor-pointer text-white/50 hover:text-white duration-300 pr-3 pl-[20vw] py-[20vh]"
                            on:click={() => {
                            if (record_img_num < record_images.length - 1) record_img_num += 1;
                            else record_img_num = 0;
                        }}></a>
                </div>
                <div class="overflow-x-auto w-full flex-row flex">
                    {#each small_record_images as img_link}
                        <div
                                class="min-w-[11vw] h-[8vh] bg-no-repeat bg-cover bg-center border-2 hover:border-white border-white/0 cursor-pointer duration-200"
                                style="background-image:url('{img_link}'), url('{BASE_URL}/images/website/logo/logo200.gif');"
                                on:click={() => {
                                record_img_num = record_images.indexOf(img_link);
                                document.querySelector("#record-image-container").style.backgroundImage = `url('${img_link.replace('small-', '')}')`;
                            }}></div>
                    {/each}
                </div>
            </div>
        </div>

        <div id="video_record-page" class={current_page === "video_record" ? "" : "hidden"}>
            <iframe
                    class="w-full h-[80vh] rounded-xl"
                    src="https://www.youtube.com/embed/{artwork_info.record.videos.youtube || 'dQw4w9WgXcQ'}"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
        </div>
    </div>
</div>
