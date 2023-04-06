<script>
    import FacePic from "../Components/FacePic.svelte";
    import {information} from "../lib/info";

    export let params = {};
    const is_en = params.language == 'en';
    let all_info = $information[params.language];

    const name = all_info.member_names[params.id];

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
</script>

<div id="main" class="flex justify-center items-center text-center">
    <div class="flex flex-row flex-wrap">
        <div class="flex flex-col mx-10 my-12 justify-center items-center text-center gap-3">
            <a href="/#/{params.language}/members">Look All Members</a>
            <FacePic id={params.id} rounded="xl" w="w-[40vh]" h="max-h-[40vh]" lang="{params.language}"></FacePic>
            <i class="font-bold text-3xl my-3">{name}</i>
            <a href="/#/{params.language}/artworks/{artwork_info.id}" class="text-2xl font-bold">
                {#if artwork_info.member_title}
                    {#if is_en}
                        {artwork_info.member_title} of {artwork_info.title}
                    {:else}
                        {artwork_info.title}の{artwork_info.member_title}
                    {/if}
                {:else}
                    {artwork_info.title}
                {/if}
            </a>
            {#each admins_info as admin}
                <a class="font text-2xl" href="/#/{params.language}/members/{admin.id}">
                    {#if is_en}
                        {admin.member_title} of {admin.department}
                    {:else}
                        {admin.department}の{admin.member_title}
                    {/if}
                </a>
            {/each}
        </div>
    </div>
</div>
