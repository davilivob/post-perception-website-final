<script>
    import { information } from "../lib/info";

    export let params = {};
    const is_en = params.language == "en";
    let all_info = $information[params.language];
    const img_amount = 20;

    let img_links = [];
    for (let i = 0; i < img_amount; i++) {
        img_links.push(`/images/exhibition/image_record/${i}.jpg`);
    }

    function toggle_full_img() {
        const full_img = document.getElementById("full-img");
        console.log("toggled");
        full_img.classList.toggle("hidden");
    }

    $: current_img_id = 0;
</script>

<div class="pt-20">
    <div class="flex flex-row flex-wrap gap-3 mx-3 items-center justify-center">
        {#each img_links as img_link}
            <button
                on:click={(e) => {
                    const img_id = e.target.src.split("/").pop().split(".")[0];
                    console.log(img_id);
                    toggle_full_img();
                    const img = document.querySelector("#full-img img");
                    // img.style.backgroundImage = `url('${img_links[img_id]}')`;
                    img.src = img_links[img_id];
                }}
                ><img class="lg:max-h-[20vh] max-h-[14vh] cursor-pointer" src={img_link} alt="" />
            </button>
        {/each}
    </div>
    <div id="full-img" class="hidden">
        <div class="fixed top-0 w-screen h-screen bg-black/30 backdrop-blur-md flex flex-col justify-center items-center">
            <button class="fa-regular fa-close text-4xl font-extrabold" on:click={toggle_full_img} />
            <!--<div class="bg-black rounded-xl w-5/6 h-5/6 bg-no-repeat bg-contain bg-center" />-->

            <div class="flex flex-row justify-between items-center w-screen px-10">
                <button
                    class="fa-solid fa-chevron-left text-3xl cursor-pointer text-white/50 hover:text-white duration-300"
                    on:click={() => {
                        const img = document.querySelector("#full-img img");
                        const img_id = img.src.split("/").pop().split(".")[0];
                        console.log(img_id);
                        if (img_id > 0) {
                            current_img_id--;
                        } else {
                            current_img_id = img_amount - 1;
                        }
                    }}
                />
                <img src={img_links[current_img_id]} alt="" class="max-w-[80vw] max-h-[80vh] rounded-xl" />
                <button
                    class="fa-solid fa-chevron-right text-3xl cursor-pointer text-white/50 hover:text-white duration-300"
                    on:click={() => {
                        const img = document.querySelector("#full-img img");
                        let img_id = img.src.split("/").pop().split(".")[0];
                        console.log(img_id);
                        if (img_id < img_amount - 1) {
                            current_img_id++;
                        } else {
                            current_img_id = 0;
                        }
                    }}
                />
            </div>
        </div>
    </div>
</div>
