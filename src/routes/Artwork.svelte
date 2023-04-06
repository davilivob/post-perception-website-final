<script lang="ts">
    import FacePic from "../Components/FacePic.svelte";
    import {information} from '../lib/info';

    export let params: object = {};

    let is_en: boolean = params.language == 'en';
    let all_info: object = $information[params.language];
    let artwork_info: object = all_info.art_teams[params.id];


    let team_members: object = artwork_info.members
    let description: String = artwork_info.description;
    let format: String = artwork_info.format;
    let media: String = artwork_info.media;
    let img_range: Array<Number> = artwork_info.record.images;
    let face_pic_width_vw = parseInt(String(100.0 / (team_members.length)));

    let current_page = 'description'
    $:image_num = 0;

    // This line in necessary to make TailwindCSS know what tags need to be used
    const tailwinds_tags = ['to-violet-900', 'to-violet-900/10', 'to-rose-900', 'to-rose-900/10', 'to-cyan-900', 'to-cyan-900/10', 'to-lime-900', 'to-lime-900/10'];

    const pages: Object = [
        {
            name: 'creators', color: 'rose', content: is_en ? 'Creators' : '創作者', icon: 'fa-users'
        },
        {
            name: 'description', color: 'cyan', content: is_en ? 'Description' : '作品介紹', icon: 'fa-books'
        },
        {
            name: 'image_record', color: 'violet', content: is_en ? 'Image Record' : '照片記錄', icon: 'fa-images'
        },
        {
            name: 'video_record', color: 'lime', content: is_en ? 'Video Record' : '影像記錄', icon: 'fa-video'
        },
    ];

    function next_img() {
        if (image_num >= img_range[0] - 1) image_num = 0;
        else image_num ++;
    }
    function last_img() {
        if (image_num <= 0) image_num = img_range[0] - 1;
        else image_num --;
    }

    function next_work() {
        window.location.href = `/#/${params.language}/artworks/${artwork_info.id + 1}`;
    }

    function last_work() {
        window.location.href = `/#/${params.language}/artworks/${artwork_info.id - 1}`;
    }

    function toggle_description(e) {
        e.target.classList.toggle('fa-book-open');
        e.target.classList.toggle('fa-book');
        const description = document.getElementById('description-text-container');
        const content = document.querySelector('#description-text-container p');
        description.classList.toggle('text-transparent');
        description.classList.toggle('text-cyan-50/80');
        description.classList.toggle('bg-black/30');
        description.classList.toggle('backdrop-blur-xl');
        content.classList.toggle('pointer-events-none')
        content.classList.toggle('shadow-black')
        content.classList.toggle('shadow-2xl')
    }

    function toggle_team_members() {
        const team_members = document.getElementById('team-members-container');
        team_members.classList.toggle('hidden');
    }

    function hide_page(page_name: String) {
        console.log(`${page_name} page is hidden`)
        document.getElementById(`${page_name}-page`).classList.add('hidden')
    }

    function show_page(page_name: String) {
        console.log(`switched to ${page_name}`)
        document.getElementById(`${page_name}-page`).classList.remove('hidden')
    }

    const stop_red_btn = () => clearInterval(set_initial_btn)

    let set_initial_btn = setInterval(() => {
        if (document.getElementById('description-btn').classList.contains(`to-cyan-900/10`)) {
            document.getElementById('description-btn').classList.add(`to-cyan-900`);
            document.getElementById('description-btn').classList.remove(`to-cyan-900/10`);
            stop_red_btn()
        } else return
    }, 100)
</script>


<!--<div class="mt-8 mx-3 fixed">-->
<!--    <a class="text-lg" href="/#/{params.language}/artworks">-->
<!--        <a class="fa-solid fa-chevron-left"></a>-->
<!--        <a class="transition-all duration-300 text-white/0 hover:text-white" id="go-back-text">{is_en ? "Back to Artworks List": "回到作品列表"}</a>-->
<!--    </a>-->
<!--</div>-->

<div class="mx-3 mt-12 text-center">
    {#if artwork_info.id >= 1}
        <a class="text-lg mx-3 text-white/10 cursor-pointer hover:text-white transition-all duration-500 ease-in-out" href="/#/redirect/@{params.language}@artworks@{artwork_info.id - 1}">
            <a class="fa-solid fa-arrow-left"></a>
            {all_info.art_teams[artwork_info.id - 1].title}
        </a>
    {/if}
    <h1 class="text-center text-5xl font-black m-1 text-white {(artwork_info.id == 4) ? 'break-all' : ''}">{artwork_info.title}</h1>
    {#if artwork_info.id < 12}
        <a class="text-lg mx-3 text-white/10 cursor-pointer hover:text-white transition-all duration-500 ease-in-out" href="/#/redirect/@{params.language}@artworks@{artwork_info.id + 1}">
            {all_info.art_teams[artwork_info.id + 1].title}
            <a class="fa-solid fa-arrow-right"></a>
        </a>
    {/if}

    <h2 class="text-center text-xl font-bold my-1">{artwork_info.format}</h2>
    <h3 class="text-center text-s font-extralight my-1 mx-2">{artwork_info.media}</h3>
</div>

<div class="mx-3 flex flex-col justify-center items-center text-center my-3">
    <div class="flex flex-rol flex-wrap rounded-full m-auto items-center justify-center gap-3 px-2 py-1">
        {#each pages as page}
            <div id="{page.name}-btn"
                 class="rounded-full bg-gradient-to-tl from-white/10 to-{page.color}-900/10 px-3 py-1 text-xs cursor-pointer"
                 on:click={e => {
                    if (current_page === page.name) return
                    current_page = page.name
                    console.log(`switching to ${page.name}`)
                    e.target.classList.toggle(`to-${page.color}-900`)
                    e.target.classList.toggle(`to-${page.color}-900/10`)
                    for (let i = 0; i < pages.length; i++) {
                        if (pages[i].name !== page.name) {
                            hide_page(pages[i].name)
                            document.getElementById(`${pages[i].name}-btn`).classList.remove(`to-${pages[i].color}-900`);
                            document.getElementById(`${pages[i].name}-btn`).classList.add(`to-${pages[i].color}-900/10`);
                        }else {
                            show_page(pages[i].name)
                        }
                    }
                }}>
                <a class="fa-regular {page.icon}"></a>
                {page.content}
            </div>
        {/each}
    </div>

    <div class="w-11/12 bg-gradient-to-tr from-white/5 to-violet-600/5 rounded-xl m-5 text-gray-300 font-bolder shadow-black/50 shadow-2xl">

        <div class="hidden p-10" id="creators-page">
            <div class="justify-evenly flex flex-wrap">
                {#each team_members as member}
                    <div class="mx-1 w-48 md:w-64 font-light text-center flex flex-col justify-center items-center">
                        <FacePic id={member.id} lang="{params.language}"></FacePic>
                        <div class="desc text-xl mt-1">{all_info.member_names[member.id]}</div>
                        <div class="overlay">
                            <div class="text-sm">{member.title}</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div id="description-page" class="p-0 flex flex-wrap flex-row items-center justify-center">

<!--            Image Progress Bar-->
            <div class="w-[96%] bg-white-10 flex flex-row justify-center">
                <div class="bg-gradient-to-l from-violet-500 to-transparent h-1 transition-all duration-500"
                     style="width: {parseInt((image_num) * 100 / (img_range[0] - 1) / 4).toString()}%"></div>
                <div class="bg-gradient-to-r from-violet-500 to-orange-500 h-1 transition-all duration-300"
                     style="width: {parseInt((image_num) * 100 / (img_range[0] - 1) * 2 / 4).toString()}%"></div>
                <div class="bg-gradient-to-r from-orange-500 to-transparent h-1 transition-all duration-300"
                     style="width: {parseInt((image_num) * 100 / (img_range[0] - 1) / 4).toString()}%"></div>
            </div>

            <div class="w-full h-[80vh] bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-tr-xl rounded-br-xl"
                   style="background-image:url('/images/exhibition/artwork_photos/{artwork_info.id}/{image_num}.jpg'), url('/images/website/logo/logo200.gif');">

                <div class="top-0 sm:text-lg text-s text-left break-after-avoid md:w-1/3 h-full text-transparent transition-all duration-500 ease-in-out rounded-tl-xl rounded-tr-xl rounded-br-xl md:rounded-br-none md:rounded-tr-none"
                    id="description-text-container">
                    <p class="px-5 py-3 max-h-full h-full overflow-auto pointer-events-none sticky">
                        {is_en ? "Description": "作品論述"}：
                        <br><br>
                        {@html description}
                    </p>
                    <div class="text-lg text-black/20 flex flex-row w-fit
                        bg-white/90 rounded-bl-xl rounded-br-xl p-1
                        cursor-pointer shadow-inner shadow-black ">
                        <a class="fa-solid fa-chevron-left hover:text-black transition-colors duration-200 p-2 px-3" on:click={last_img}></a>
                        <a class="fa-regular fa-book hover:text-black transition-colors duration-200 p-2 px-3" on:click={toggle_description}></a>
                        <a class="fa-solid fa-chevron-right hover:text-black transition-colors duration-200 p-2 px-3" on:click={next_img}></a>
                    </div>
                </div>
            </div>
        </div>

        <div id="image_record-page" class="hidden">
        </div>

        <div id="video_record-page" class="hidden">
        </div>

    </div>
</div>