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
    cartContainer.innerHTML = '';
    if(categoryData.length <= 0){
        const p = document.createElement('p');
        // cartContainer.classList.remove('grid');
        // p.classList.add('flex');
        // p.classList.add('justify-center');
        p.innerHTML = `
            <a class="text-white text-5xl font-font-bold px-40 w-full">
                <img src="../Frame 3.png" alt="images" >               
            </a>
        `;
        cartContainer.appendChild(p);
    }else{
        categoryData.forEach((selectedCategory) => {
            const div = document.createElement('div');
        div.innerHTML = `
            <div class="card">
                <figure><img src="${selectedCategory?.thumbnail}" alt="Shoes" /></figure>
                <div class="card-body grid grid-cols-2 justify-start">
                    <div class="">
                        <div class="avatar-group -space-x-6">
                            <div class="avatar">
                                <div class="w-12">
                                    <img src="${selectedCategory?.authors[0]?.profile_picture}" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div class="">
                        <h2 class="card-title">${selectedCategory?.title}</h2>
                        <p>
                            ${selectedCategory?.authors[0]?.profile_name}
                            <span>
                                ${selectedCategory?.authors[0]?.verified === true ? '<input type="checkbox" checked="checked" class="checkbox" />': ''}
                            </span>
                        </p>
                        <a>
                            ${selectedCategory?.others?.views} views
                        </a>
                    </div>
                </div>
            </div>
        `;
        cartContainer.appendChild(div);   
    });
    }  
}
document.getElementById('sorting').addEventListener('click',async function (){
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const rawData = data.data;
    console.log(rawData);
    
});
phTubeHandle();
loadCategory('1000');
