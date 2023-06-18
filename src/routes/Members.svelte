<script lang="ts">
    import { information } from "../lib/info";
    import FacePic from "../Components/FacePic.svelte";
    import { onMount } from "svelte";

    interface route_body {
        language?: string;
        id?: string;
    }

    export let params: route_body = {};

    const is_en: boolean = params.language == "en";
    const all_info = $information[params.language];
    const members_info: object = all_info.admins;

    const BASE_URL = import.meta.env.BASE_URL;

    let members = [];
    for (const [key, value] of Object.entries(all_info.personal_info)) {
        members.push({
            name: value.name,
            id: key,
        });
    }

    let page_id: string = params.id || "0";
    console.log(page_id);

    let current_page = "president";

    // This line in necessary to make TailwindCSS know what tags need to be used
    const tailwinds_tags = `
        to-rose-500/5 to-purple-500/5 to-teal-500/5 to-amber-500/5 to-violet-500/5 to-sky-500/5 to-red-500/5 to-lime-500/5 to-orange-500/5
        to-yellow-500/5 to-green-500/5 to-emerald-500/5 to-cyan-500/5 to-fuchsia-500/5 to-pink-500/5
    `;

    $: page_color = "rose";

    const pages: Object = [
        {
            id: 0,
            name: "president",
            color: "rose",
            content: is_en ? "Convensor" : "總召",
            icon: "fa-user-secret",
        },
        {
            id: 1,
            name: "paper",
            color: "pink",
            content: is_en ? "Paper" : "文書",
            icon: "fa-pen-nib",
        },
        {
            id: 2,
            name: "moneyman",
            color: "teal",
            content: is_en ? "Moneyman" : "總務",
            icon: "fa-sack-dollar",
        },
        {
            id: 3,
            name: "translate",
            color: "cyan",
            content: is_en ? "Translate" : "翻譯組",
            icon: "fa-language",
        },
        {
            id: 4,
            name: "visual",
            color: "purple",
            content: is_en ? "Visual" : "視覺組",
            icon: "fa-brush",
        },
        {
            id: 5,
            name: "public",
            color: "rose",
            content: is_en ? "Public Relation" : "公關組",
            icon: "fa-handshake",
        },
        {
            id: 6,
            name: "joy",
            color: "violet",
            content: is_en ? "Get High" : "活動組",
            icon: "fa-smile-wink",
        },
        {
            id: 7,
            name: "exhibition",
            color: "orange",
            content: is_en ? "Exhibition" : "佈展組",
            icon: "fa-people-carry",
        },
        {
            id: 8,
            name: "things",
            color: "yellow",
            content: is_en ? "Administration" : "事務組",
            icon: "fa-folder-open",
        },
        {
            id: 9,
            name: "record",
            color: "blue",
            content: is_en ? "Record" : "紀錄組",
            icon: "fa-camera",
        },
        {
            id: 10,
            name: "website",
            color: "green",
            content: is_en ? "Website" : "網頁組",
            icon: "fa-square-terminal",
        },
        {
            id: 11,
            name: "think",
            color: "purple",
            content: is_en ? "Brainstorming" : "發想組",
            icon: "fa-face-thinking",
        },
    ];

    function hide_page(page_name: String) {
        console.log(`${page_name} page is hidden`);
        document.getElementById(`${page_name}-page`).classList.add("hidden");
    }

    function show_page(page_name: String) {
        console.log(`switched to ${page_name}`);
        document.getElementById(`${page_name}-page`).classList.remove("hidden");
    }

    function light_btn(btn) {
        btn.classList.remove(`from-transparent`);
        btn.classList.add(`from-white/10`);
        btn.classList.add(`via-white/60`);
        btn.classList.remove(`to-white/10`);
        btn.classList.add(`to-white`);
        btn.classList.add(`text-black`);
        btn.classList.add("shadow-lg");
        btn.classList.add("shadow-black/50");
        btn.classList.add("font-bold");
    }

    function dark_btn(btn) {
        btn.classList.add(`from-transparent`);
        btn.classList.remove(`from-white/10`);
        btn.classList.remove(`via-white/60`);
        btn.classList.add(`to-white/10`);
        btn.classList.remove(`to-white`);
        btn.classList.remove(`text-black`);
        btn.classList.remove("shadow-lg");
        btn.classList.remove("shadow-black/50");
    }

    onMount(() => {
        const page_name: String = pages[page_id].name;
        const page_color: String = pages[page_id].color;
        const page_btn: HTMLElement = document.getElementById(`${page_name}-btn`);
        light_btn(page_btn);
    });
</script>

<div class="flex flex-col items-center pt-16">
    <h1 class="text-center text-5xl font-black my-3 text-white lg:hidden">
        {is_en ? "MEMBERS" : "參展人員"}
    </h1>

    <div class="flex flex-row flex-wrap py-5 items-center justify-center gap-3 px-2 py-1 md:w-1/2 lg:w-1/3">
        {#each pages as page}
            <div
                id="{page.name}-btn"
                class="rounded-full bg-gradient-to-tl from-transparent to-white/10 px-3 py-1 text-s cursor-pointer text-white/70 hover:text-white hover:bg-black"
                on:click={(e) => {
                    window.location.href = `${BASE_URL}/#/${params.language}/members/${page.id}`;
                    if (current_page === page.name) return;
                    current_page = page.name;
                    page_color = page.color;
                    light_btn(e.target);
                    for (let i = 0; i < pages.length; i++) {
                        if (pages[i].name !== page.name) {
                            hide_page(pages[i].name);
                            dark_btn(document.getElementById(`${pages[i].name}-btn`));
                        } else {
                            show_page(pages[i].name);
                        }
                    }
                }}
            >
                <a class="fa-regular {page.icon} pointer-events-none" />
                {page.content}
            </div>
        {/each}
    </div>

    <div class="bg-none shadow-black/50 shadow-2xl rounded-xl m-5 text-white/90 backdrop-blur-2xl w-fit max-w-[80vw] lg:p-2">
        {#each members_info as admin_team}
            <div class="{page_id == admin_team.id ? '' : 'hidden'} p-10 text-center" id="{pages[admin_team.id].name}-page">
                <div class="flex flex-row flex-wrap justify-evenly lg:gap-5 gap-2 border-b-1 border-white/20">
                    {#each admin_team.members as member}
                        <div class="flex flex-col gap-1 text-center">
                            <FacePic id={member.id} lang={params.language} />
                            <a class="font-extrabold text-xl">{all_info.personal_info[member.id].name}</a>
                            <a class="font-normal mt-2 text-lg">{member.title}</a>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
