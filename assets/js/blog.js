const fetchData = async () => {
    const data = await fetch('./../assets/data.json');
    const res = await data.json();
    return res
}

const renderData = async () => {
    const contentSection = document.getElementById('content-section');
    const data = await fetchData();
    console.log(data);
}

renderData();