<script>
    export let params = {};

    let path = `/#${params.path.replace('@', '/')}`;

    while (path.includes('@')) path = path.replace('@', '/')


    console.log(path)

    // window.location.reload();

    window.location.href = path;
</script>
