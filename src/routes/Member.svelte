<script>
    import FacePic from "../Components/FacePic.svelte";
    import {information} from "../lib/info";

    export let params = {};
    const is_en = params.language == 'en';
    let all_info = $information[params.language];
    const personal_info = all_info.personal_info[params.id];

    const name = personal_info.name;
    const external_links = personal_info.external_links;
    const comment_board_content = personal_info.comment_board;
    let external_links_content = ''

    function generate_link(link, icon, text_color) {
        return `<a class="${text_color} ${icon} duration-200" target="_blank" href="${link}"></a>`
    }

    if (external_links) {
        if (external_links.instagram) {
            external_links_content += generate_link(external_links.instagram, 'fa-brands fa-instagram', 'hover:text-fuchsia-500/30 text-fuchsia-500')
        } if (external_links.facebook) {
            external_links_content += generate_link(external_links.facebook, 'fa-brands fa-square-facebook', 'hover:text-sky-500/30 text-sky-500')
        } if (external_links.youtube) {
            external_links_content += generate_link(external_links.youtube, 'fa-brands fa-youtube', 'hover:text-red-700/30 text-red-700')
        } if (external_links.github) {
            external_links_content += generate_link(external_links.github, 'fa-brands fa-github', 'hover:text-white/30 text-white')
        } if (external_links.nft) {
            external_links_content += generate_link(external_links.nft, 'fa-regular fa-hexagon-vertical-nft', 'hover:text-violet-500/30 text-violet-500')
        } if (external_links.email) {
            external_links_content += generate_link(external_links.email, 'fa-regular fa-envelope', 'hover:text-amber-500/30 text-amber-500')
        }
    }

    let artwork_info = {};
    for (let team of all_info.art_teams) {
        for (let member of team.members) {
            if (member.id == params.id) {
                artwork_info.id = team.id;
                artwork_info.member_title = member.title;
                artwork_info.title = team.title
                break;
            }
        }
    }

    let admins_info = []
    for (let team of all_info.admins) {
        for (let member of team.members) {
            if (member.id == params.id) {
                let admin_info = {};
                admin_info.id = team.id;
                admin_info.department = team.department;
                admin_info.member_title = member.title;
                admins_info.push(admin_info);
            }
        }
    }

    const is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  //判斷裝置類型
    console.log(is_mobile)
</script>

<div id="main" class="flex justify-center items-center pt-12">
    <div class="flex flex-row flex-wrap">
        <div class="flex flex-col mx-10 mt-10 justify-center items-center gap-3">
            <div class="fixed w-screen h-screen z-[-1] top-0 bg-repeat-y bg-cover bg-center shadow-lg"
                 style="background-image: url('/images/exhibition/artwork_photos/{artwork_info.id}/0.jpg')"></div>

            {#if is_mobile}
                <FacePic id={params.id} rounded="full" w="w-[40vh]" h="max-h-[40vh] shadow-lg shadow-black/40" lang="{params.language}"></FacePic>
            {:else}
                <FacePic id={params.id} rounded="full" w="w-[40vh]" h="max-h-[40vh] shadow-lg shadow-black/40" do_animate="true" lang="{params.language}"></FacePic>
            {/if}

            <i class="font-bold text-3xl text-white">{name}</i>

            <div class="flex flex-row gap-3 text-2xl backdrop-blur-md p-2 rounded-xl">
                {@html external_links_content}
            </div>

            <div class="text-lg p-5 rounded-xl bg-black/10 shadow-2xl shadow-black/50 flex flex-col max-w-[80vw] w-fit break-all backdrop-blur-xl text-white/90">
                <a href="/#/{params.language}/artworks/{artwork_info.id}" class="text-lg hover:text-white text-white/40 duration-200 underline">
                    #{#if artwork_info.member_title}
                        {#if is_en}
                            {artwork_info.member_title.replace(' ', '_')}_of_{artwork_info.title.replace(' ', '_')}
                        {:else}
                            {artwork_info.title}の{artwork_info.member_title}
                        {/if}
                    {:else}
                        {artwork_info.title}
                    {/if}
                </a>
                {#each admins_info as admin}
                    <a class="font text-lg text-white/40 underline hover:text-white" href="/#/{params.language}/members/{admin.id}">
                        {#if is_en}
                            #{admin.member_title}_of_{admin.department}<br>
                        {:else}
                            #{admin.department}の{admin.member_title}<br>
                        {/if}
                    </a>
                {/each}
                {#if comment_board_content}
                    <br>{@html comment_board_content}
                {/if}
            </div>
            <a href="/#/{params.language}/members" class="hover:text-white">
                <a class="fa-regular fa-arrow-left"></a>
                {is_en ? "Look All Members" : '查看所有成員名單'}
            </a>
        </div>
    </div>
</div>
