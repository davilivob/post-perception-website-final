<script>
    import FacePic from "../Components/FacePic.svelte";
    import {information} from "../lib/info";

    export let params = {};
    const is_en = params.language == 'en';
    let all_info = $information[params.language];

    const name = all_info.personal_info[params.id].name;

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

<div id="main" class="flex justify-center items-center">
    <div class="flex flex-row flex-wrap">
        <div class="flex flex-col mx-10 my-20 justify-center items-center gap-3">
            <div class="absolute w-screen h-[40vh] z-[-1] top-0 bg-no-repeat bg-cover bg-center shadow-lg"
                 style="background-image: url('/images/exhibition/artwork_photos/{artwork_info.id}/0.jpg')"></div>

            {#if is_mobile}
                <FacePic id={params.id} rounded="full" w="w-[40vh]" h="max-h-[40vh] shadow-lg shadow-black/40" lang="{params.language}"></FacePic>
            {:else}
                <FacePic id={params.id} rounded="full" w="w-[40vh]" h="max-h-[40vh] shadow-lg shadow-black/40" do_animate="true" lang="{params.language}"></FacePic>
            {/if}
            <i class="font-bold text-3xl my-3 text-white">{name}</i>
            <a href="/#/{params.language}/artworks/{artwork_info.id}" class="text-2xl font-bold hover:text-white duration-200">
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
            <a href="/#/{params.language}/members">Look All Members</a>
        </div>
    </div>
</div>
