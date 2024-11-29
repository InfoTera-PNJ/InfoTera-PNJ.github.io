const fetchData = async () => {
    try {
        const data = await fetch('./../assets/data.json');
        const res = await data.json();
        return res
    } catch (error) {
       console.log(error) 
    }
}

const renderImage = async () => {
    const data = await fetchData();
    const carouselImages = document.getElementById('carousel-images'); 
    let imageTemplate = ``;

    data.map(item => {
        const imagePath = item.image.replace('/..', '');
        imageTemplate += ` <div class="duration-700 ease-in-out" data-carousel-item>
                <img src="${imagePath}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>`
        
    });



    carouselImages.innerHTML = imageTemplate;
}
        
renderImage()


