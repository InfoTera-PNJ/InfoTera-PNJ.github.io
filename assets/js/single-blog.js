const fetchData = async () => {
    try {
        const data = await fetch('./../assets/data.json');
        const res = await data.json();
        return res;
    } catch (error) {
       console.log(error); 
    }
}

const renderData = async () => {

    const titleSection = document.getElementById('title-section');
    const contentSection = document.getElementById('content-section');
    const imageSection = document.getElementById('image-section');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get('blog');

    const data = await fetchData();

    const singleData = data.filter((item) => {
        if(item.slug == value) {
            return item;
        }
    });

    const { judul, konten, image} = singleData[0];
    imageSection.src = image;
    titleSection.innerText = judul
    contentSection.innerHTML = konten

}
renderData()