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
        '/:language/members': Members,
        '/:language/members/:id': Members,
        '/:language/member/:id': Member,
        '/redirect/:path': Redirector,
        // '/:language/record': Artwork,
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
<div class="bg-gradient-to-br from-blue-900/80 via-black/100 to-sky-800/50 w-screen h-screen fixed z-[-3]"></div>
<div class="bg-gradient-to-bl from-black via-pink-900/10 to-black w-screen h-screen fixed z-[-1] backdrop-blur-2xl"></div>
<main>
    <Cursor/>
    <Header language="{language}" page="{current_page}"/>
    <div class="py-8">
        <Router {routes}/>
    </div>
</main>
