<script lang="ts">
    // Import Libraries
    import Router from 'svelte-spa-router'
    import TailwindCSS from "./TailwindCSS.svelte";

    // Import Routes
    import Home from './routes/Home.svelte';
    import About from './routes/About.svelte';
    import Artworks from './routes/Artworks.svelte';
    import Artwork from './routes/Artwork.svelte';
    import PageNotFound from "./routes/PageNotFound.svelte";
    import RedirToZh from "./routes/RedirToZh.svelte";
    import Members from "./routes/Members.svelte";
    import Member from "./routes/Member.svelte";
    import Records from "./routes/Records.svelte";
    import Redirector from "./routes/Redirector.svelte";

    // Import Components
    import Header from "./Components/Header.svelte";
    import Cursor from "./Components/Cursor.svelte";

    // Create Router
    const routes = {
        '/': RedirToZh,
        '/:language/': RedirToZh,
        '/:language/home': Home,
        '/:language/about': About,
        '/:language/artworks': Artworks,
        '/:language/artworks/:id': Artwork,
        '/:language/artworks/:id/:page': Artwork,
        '/:language/members': Members,
        '/:language/members/:id': Members,
        '/:language/member/:id': Member,
        '/redirect/:path': Redirector,
        '/:language/records': Records,
        // '/:language/record/:id': Artwork,
        '*': PageNotFound,
    }

    let URL: string = window.location.href;
    let language: string;
    if (URL.includes('#')) {
        language = URL.split('#')[1].split('/')[1]
    } else {
        window.location.href = '/#/zh/'
        location.reload();
    }
    let current_page = URL.split(language)[1].split('/')[1]

</script>

<TailwindCSS/>
<div class="bg-gradient-to-tl from-blue-900 via-emerald-900 to-fuchsia-900 w-screen h-screen fixed z-[-3]"></div>
<div class="bg-gradient-to-bl from-lime-900 via-indigo-900 to-purple w-screen h-screen fixed z-[-1] backdrop-blur-2xl"></div>
<div class="bg-black/70 w-screen h-screen fixed z-[-1] backdrop-blur-2xl"></div>

<div class="w-[10vw] h-[10vw] fixed rounded-full ml-[60vw] mt-[60vh] blur-3xl bg-blue-900/40 z-[-1]"></div>
<div class="w-[20vw] h-[20vw] fixed rounded-full ml-[70vw] mt-[50vh] blur-3xl bg-violet-900/40 z-[-1]"></div>
<div class="w-[40vw] h-[40vw] fixed rounded-full ml-[80vw] mt-[35vh] blur-3xl bg-red-900/40 z-[-1]"></div>
<main>
    <Cursor/>
    <Header language="{language}" page="{current_page}"/>
    <div class="">
        <Router {routes}/>
    </div>
</main>
