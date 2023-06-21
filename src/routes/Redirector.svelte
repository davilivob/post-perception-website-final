<script>
    export let params = {};

    const BASE_URL = import.meta.env.BASE_URL;

    let path = `${BASE_URL}/#${params.path.replace("@", "/")}`;

    while (path.includes("@")) path = path.replace("@", "/");

    console.log(path);

    // window.location.reload();

    window.location.href = path;
</script>
