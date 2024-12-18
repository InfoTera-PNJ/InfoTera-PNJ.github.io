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
    const contentSection = document.getElementById('content-section');
    const data = await fetchData();
    let cards = '';

    data.map(item => {
        cards += `<a href="single-blog.html?blog=${item.slug}" class="flex flex-col animate-fadeindown items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-3">
                <div class="w-full md:w-48 h-96 md:h-auto overflow-hidden rounded-t-l md:rounded-none md:rounded-s-lg"> 
                    <img class="w-full h-full object-cover" src="${item.image}" alt="">
                </div>
                <div class="flex flex-col justify-between leading-normal">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${item.judul}</h5>
                </div>
            </a>`

            console.log(item)
    });
    contentSection.innerHTML = cards;
}

renderData();