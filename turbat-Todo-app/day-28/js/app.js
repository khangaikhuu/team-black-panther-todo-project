const get = async () => {
    const res = await fetch("http://127.0.0.1:5500/js/callback/data.html");
    const data = await res.json();
    console.log(data);
    };
    get();