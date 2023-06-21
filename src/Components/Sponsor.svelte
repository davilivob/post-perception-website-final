<script>
    const BASE_URL = import.meta.env.BASE_URL;

    export let language = "zh";
    let is_en = language === "en";
</script>

<div class="">
    <div class="flex flex-row flex-wrap py-8 gap-4 text-center justify-center items-center">
        <p>{is_en ? "Thanks for our sponsors: " : "感謝贊助商："}</p>
        <img src="{BASE_URL}/images/website/sponsor/bar_logo.png" alt="" class="h-8" />
        <img src="{BASE_URL}/images/website/sponsor/kirin_logo.jpg" alt="" class="h-8" />
        <img src="{BASE_URL}/images/website/sponsor/warning.jpg" alt="" class="h-8" />
    </div>
</div>
