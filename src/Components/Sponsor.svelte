<script>
    import BarLogo from '../../public/images/website/sponsor/bar_logo.png';
    import KirinLogo from '../../public/images/website/sponsor/kirin_logo.jpg';
    import Warning from '../../public/images/website/sponsor/warning.jpg';

    export let language = 'zh';
    let is_en = language === 'en';
</script>

<div class="">
    <div class="flex flex-row flex-wrap py-8 gap-4 text-center justify-center items-center">
        <p>{is_en ? "Thanks for our sponsors: " : "感謝贊助商："}</p>
        <img src="{BarLogo}" alt="" class="h-8"/>
        <img src="{KirinLogo}" alt="" class="h-8">
        <img src="{Warning}" alt="" class="h-8">
    </div>
</div>
