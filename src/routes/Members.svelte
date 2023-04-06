<script lang="ts">
    import {information} from '../lib/info';
    import FacePic from "../Components/FacePic.svelte";


    export let params = {
        language: undefined
    };


    const is_en: boolean = params.language == 'en';
    const all_info: object = $information[params.language];
    const members_info: object = all_info.admins
    let members: Array<Object> = []
    for (const [key, value] of Object.entries(all_info.member_names)) {
        members.push({
            name: value,
            id: key,
        })
    }


    let page_id = params.id || '0'
    console.log(page_id)


    let current_page = 'creators'

    // This line in necessary to make TailwindCSS know what tags need to be used
    const tailwinds_tags = `
        to-emerald-900/10 to-emerald-900 to-red-900/10 to-red-900 to-violet-900/10 to-violet-900 to-sky-900/10 to-sky-900 to-yellow-900/10 to-yellow-900 to-rose-900/10 to-rose-900 to-pink-900/10 to-pink-900 to-orange-900/10 to-orange-900 to-teal-900/10 to-teal-900 to-amber-900/10 to-amber-900 to-lime-900/10 to-lime-900
    `

    const pages: Object = [
        {
            id: 0, name: 'president', color: 'emerald', content: is_en ? 'President' : '總召', icon: 'fa-user-secret'
        },
        {
            id: 1, name: 'paper', color: 'red', content: is_en ? 'Paper' : '文書', icon: 'fa-pen-nib'
        },
        {
            id: 2, name: 'moneyman', color: 'violet', content: is_en ? 'Moneyman' : '總務', icon: 'fa-sack-dollar'
        },
        {
            id: 3, name: 'translate', color: 'sky', content: is_en ? 'Translate' : '翻譯組', icon: 'fa-language'
        },
        {
            id: 4, name: 'visual', color: 'yellow', content: is_en ? 'Visual' : '視覺組', icon: 'fa-brush'
        },
        {
            id: 5, name: 'public', color: 'rose', content: is_en ? 'Business' : '公關組', icon: 'fa-handshake'
        },
        {
            id: 6, name: 'joy', color: 'pink', content: is_en ? 'Get High' : '活動組', icon: 'fa-smile-wink'
        },
        {
            id: 7,
            name: 'exhibition',
            color: 'orange',
            content: is_en ? 'Exhibition' : '佈展組',
            icon: 'fa-people-carry'
        },
        {
            id: 8, name: 'things', color: 'teal', content: is_en ? 'Video Record' : '事務組', icon: 'fa-folder-open'
        },
        {
            id: 9, name: 'record', color: 'amber', content: is_en ? 'Record' : '紀錄組', icon: 'fa-camera'
        },
        {
            id: 10, name: 'website', color: 'lime', content: is_en ? 'Website' : '網頁組', icon: 'fa-square-terminal'
        },
    ];

    function hide_page(page_name: String) {
        console.log(`${page_name} page is hidden`)
        document.getElementById(`${page_name}-page`).classList.add('hidden')
    }

    function show_page(page_name: String) {
        console.log(`switched to ${page_name}`)
        document.getElementById(`${page_name}-page`).classList.remove('hidden')
    }

    const stop_init_btn = () => clearInterval(set_init_btn)

    let set_init_btn = setInterval(() => {
        if (document.getElementById(`${pages[page_id].name}-btn`).classList.contains(`to-${pages[page_id].color}-900/10`)) {
            document.getElementById(`${pages[page_id].name}-btn`).classList.add(`to-${pages[page_id].color}-900`);
            document.getElementById(`${pages[page_id].name}-btn`).classList.remove(`to-${pages[page_id].color}-900/10`);
            stop_init_btn()
        } else return
    }, 100)
</script>

<div class="flex flex-col items-center m-5 mt-12">
    <h1 class="text-center text-5xl font-black my-3 text-white">
        {is_en ? "MEMBERS" : "參展人員"}
    </h1>
    <div class="flex flex-rol flex-wrap rounded-full m-auto items-center justify-center gap-3 px-2 py-1">
        {#each pages as page}
            <div id="{page.name}-btn"
                 class="rounded-full bg-gradient-to-tl from-white/10 to-{page.color}-900/10 px-3 py-1 text-s cursor-pointer duration-300 ease-in-out"
                 on:click={e => {
                    window.location.href = `/#/${params.language}/members/${page.id}`
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
    <div class="w-11/12 bg-gradient-to-tr from-white/10 to-violet-600/10 rounded-xl m-5 text-gray-300 font-bolder">
        {#each members_info as admin_team}
            <div class="{(page_id == admin_team.id) ? '' : 'hidden'} p-10 flex flex-col items-center text-center"
                 id="{pages[admin_team.id].name}-page">
                <!--                <h2 class="text-3xl font-bold my-1 text-white">{admin_team.department.charAt(0).toUpperCase() + admin_team.department.slice(1)}</h2>-->
                <h2 class="text-3xl font-bold my-1 text-white">{pages[admin_team.id].content}</h2>
                <div class="flex flex-row flex-wrap justify-center gap-4 border-b-1 border-white/20 p-10">
                    {#each admin_team.members as member}
                        <div class="">
                            <FacePic id={member.id} lang="{params.language}"/>
                            <a class="font-extrabold">{member.title}</a><br>
                            <a>{all_info.member_names[member.id]}</a>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
