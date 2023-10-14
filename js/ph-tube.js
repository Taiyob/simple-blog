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
    const cartContainer = document.getElementById('card-container');
    categoryData.forEach((selectedCategory) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card">
                <figure><img src="${selectedCategory?.thumbnail}" alt="Shoes" /></figure>
                <div class="card-body flex justify-start">
                    <div class="flex-1">
                        <div class="avatar-group -space-x-6">
                            <div class="avatar">
                                <div class="w-12">
                                    <img src="${selectedCategory?.authors[0]?.profile_picture}" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>  
                    <h2 class="card-title">${selectedCategory?.title}</h2>
                    <p>${selectedCategory?.authors[0]?.profile_name}</p>
                </div>
            </div>
        `;
        cartContainer.appendChild(div);
    });
    //console.log(data.data);
}
phTubeHandle();
