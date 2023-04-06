<script>
    import {onMount} from "svelte";

    export let id = 0;
    export let lang = 'zh';
    export let rounded = 'full';

    export let do_animate = false;
    export let w = 'max-w-[25vh]';
    export let h = 'max-h-[25vh]';
    const file_format = 'jpg'
    $: img_link = `images/exhibition/head_photos/${file_format}/${id}.${file_format}`;
    $: vid_link = `videos/head_photos/${id}.mp4#t=0,2`;

    const go_to_person = () => {
        window.location.href = `/#/${lang}/member/${id}`;
    }

    function play_video() {
        document.querySelector('source').src = vid_link;
        document.querySelector('video').play();
    }

    onMount(() => {
        const video = document.querySelector('video');
        if (do_animate) {
            video.addEventListener('click', () => {
                document.querySelector('#play-btn').classList.add('opacity-0');
                play_video();
            });

            video.addEventListener('mouseover', () => {
                play_video();
            })
        }
    })

</script>

{#if do_animate}
    <div class="flex items-center justify-center">
        <a id="play-btn" class="fa-solid fa-play absolute text-white/50 text-8xl transition-all duration-1000"></a>
        <video class="{w} {h} rounded-{rounded} border-8 hover:border-white/90 border-white/10 backdrop-blur-lg transition-all duration-300
        shadow-white/10 hover:shadow-white/30 hover:shadow-lg"
               on:click={play_video}>
            <source src="{vid_link}" type="video/mp4">
        </video>
    </div>
{:else}
    <img src="{img_link}" alt=""
         class="{w} {h} rounded-{rounded} cursor-pointer bg-no-repeat bg-cover bg-center
         border-2 hover:border-white hover:shadow-xl hover:shadow-white/20 shadow-white/5 border-white/0 transition-all duration-300"
         on:click={go_to_person} id="image-container">
{/if}

<!--     style="background-image: url('images/website/logo/logo600.gif')"-->
