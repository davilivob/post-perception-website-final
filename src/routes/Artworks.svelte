<script lang="ts">
    import {information} from "../lib/info";

    export let params = {
        language: undefined
    };

    const is_en: boolean = params.language == 'en';
    const all_info: object = $information[params.language];
    const artworks_info: object = all_info.art_teams;

    let hovered_title = {
        id: 0,
        classList: 0,
        innerHTML: 'Post-Perception'
    };

    let word_count_interval;

    $: hovered_title_link = `
        <a href="#/${params.language}/artworks/${hovered_title.id}"
            class="text-xl text-orange-200 hover:text-red-500 float-right italic inline border-b-2 break-all">
            ${is_en ? "Look Forward -->" : '查看詳情 -->'}
        </a>
    `;

    function mouse_on_title(e) {
        if (window.screen.width < 768) {
            window.location.href = `#/${params.language}/artworks/${e.target.id}`;
            return;
        }

        clearInterval(word_count_interval);
        hovered_title = e.target;
        // hovered_title.classList.toggle('blur-none')
        let previewDOM = document.getElementById('preview-description');
        previewDOM.innerHTML = '';
        let letter_count = 0;
        word_count_interval = setInterval(() => {
            previewDOM.innerHTML = artworks_info[hovered_title.id].description.slice(0, letter_count)
                + ((letter_count % 60 >= 30) ? '▌' : '&nbsp;');
            letter_count += 3;
        }, 50)
    }

    setInterval(() => {
        let hovered_titles = document.getElementsByClassName('blur-2xl');
        for (let title of hovered_titles) {
            if (title.classList.contains('blur-2xl')) title.classList.toggle('blur-2xl')
        }
    }, 1000)

</script>
<div class="pt-12">
    <h1 class="text-center text-5xl font-extrabold text-white m-5">
        {is_en ? "ARTWORKS" : "作品一覽"}
    </h1>
    <div class="flex flex-wrap relative left-0 mx-20 items-center justify-center text-center ">
        {#each artworks_info as team}
            <div class="p-3">
                <a class="font-extrabold blur-2xl text-cyan-50/80 text-2xl  hover:blur-3xl p-5 ease-in-out transition-all duration-1000 cursor-pointer"
                   on:click={() => window.location.href = `#/${params.language}/artworks/${team.id}`}
                   on:mouseover={mouse_on_title}
                   id={team.id}>{team.title} </a>
            </div>
        {/each}
        <br>
    </div>
    <div class="shadow-lg shadow-black bg-black/30
            border border-slate-200 rounded-xl border-solid
            p-5 m-5 lg:m-40 lg:mt-20 h-auto text-lg
            transition-all duration-700 sm:block hidden">
        <h2 class="mb-5 inline">
            『{hovered_title.innerHTML}』
            {is_en ? "Description" : "作品簡介"}：
        </h2>
        {@html hovered_title_link}
        <p id="preview-description" class="my-5">
            {is_en ? 'Hover' : "點擊上面的作品名稱，作品簡述會顯示在這裡喔！"}
        </p>
        <div class="shadow-sm shadow-black border-none p-3 rounded bg-white/5 w-fit">
            <h2 class="mb-5 py-2 inline">&nbsp;
                {is_en ? "Creator" : '創作者'}：
            </h2>
            <p class="inline">
                {#each artworks_info[hovered_title.id].members as member}
                    <a class="cursor-pointer hover:border-b-2"
                       href="/#/{params.language}/member/{member.id}">{all_info.member_names[member.id]}</a>
                    &nbsp;
                {/each}
            </p>
        </div>
        <br>
    </div>
</div>
