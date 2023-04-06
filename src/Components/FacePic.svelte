<script>
    export let id = 0;
    export let lang = 'zh';
    export let rounded = 'full';
    export let w = 'max-w-[30vh]';
    export let h = 'max-h-[30vh]';
    const file_format = 'jpg'
    $: img_link = `images/exhibition/head_photos/${file_format}/${id}.${file_format}`

    const go_to_person = () => {
        window.location.href = `/#/${lang}/member/${id}`;
    }
</script>

<!--<div class="{w} {h} bg-no-repeat bg-cover bg-center rounded-{rounded} cursor-pointer"-->
<!--     on:click={go_to_person} id="image-container"-->
<!--     style="background-image: url({img_link})">-->
<!--</div>-->

<img src="{img_link}" alt="" class="{w} {h} rounded-{rounded} cursor-pointer bg-no-repeat bg-cover bg-center"
     on:click={go_to_person} id="image-container">
<!--     style="background-image: url('images/website/logo/logo600.gif')"-->
