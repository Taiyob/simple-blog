const phTubeHandle = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const rawData = data.data;
    const buttonContainer = document.getElementById('button-container');
    rawData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <a onclick="loadCategory('${category.category_id}')" role="button" class="btn bg-gray-200 hover:bg-[#FF1F3D] hover:text-white active:bg[#FF1F3D] focus:outline-none focus:ring focus:ring-violet-300 ...">${category.category}</a>
        `;
        buttonContainer.appendChild(div);
    });
}
const loadCategory = async (categoryId)=> {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const categoryData = data.data;
    //console.log(data.data);
}
phTubeHandle();
