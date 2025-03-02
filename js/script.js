const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const items = data.data.tools;
    displayItems(items);
}

const displayItems = (items) => {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.textContent = '';

    for (const item of items) {
        const itemCard = document.createElement('div');
        itemCard.classList = `card bg-base-100 shadow-sm`;
        itemCard.innerHTML = `
            <figure>
                <img class="p-5" src="${item.image}"
                            alt="image" />
            </figure>
            <div class="card-body">
                 <h2 class="card-title">Features</h2>
                 <p class="text-gray-400">1. ${item.features[0]}</p>
                 <p class="text-gray-400">2. ${item.features[1]}</p>
                 <p class="text-gray-400">3. ${item?.features[2] || 'No data'}</p>
                 <hr class="border border-gray-200 mt-5 mb-5">
                <div class="card-actions justify-between items-center">
                    <div>
                        <h2 class="card-title">${item.name}</h2>
                         <p class="text-gray-500 text-xs">${item.published_in}</p>
                     </div>
                        <button onClick="handleViewDetails('${item.id}');my_modal_5.showModal()" class="btn btn-primary">Details</button>
                    </div>
                </div>
        `;
        itemsContainer.appendChild(itemCard);
    }
}

const handleViewDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    const dataById = data.data
    viewDetails(dataById)
}

const viewDetails = (dataById) => {
    console.log(dataById);
    const modalContainer = document.getElementById('modal-container');
    const viewDetailsModal = document.getElementById('view-details');
    viewDetailsModal.innerHTML = `
           <div class="space-y-5">
                            <h3 class="font-semibold text-xl">Descriptions</h3>
                            <div class="flex gap-5 justify-around">
                                <h4 class="font-semibold text-green-500 p-5 bg-gray-200 rounded-lg">Basic</h4>
                                <h4 class="font-semibold text-orange-400 p-5 bg-gray-200 rounded-lg">Pro</h4>
                                <h4 class="font-semibold text-red-500 p-5 bg-gray-200 rounded-lg">Enterprise</h4>
                            </div>
                            <div class="flex gap-5 justify-around">
                                <div>
                                    <h2 class="card-title">Features</h2>
                                    <p class="text-gray-400 text-xs">Features</p>
                                    <p class="text-gray-400 text-xs">Features</p>
                                    <p class="text-gray-400 text-xs">Features</p>
                                </div>
                                <div>
                                    <h2 class="card-title">Features</h2>
                                    <p class="text-gray-400 text-xs">Features</p>
                                    <p class="text-gray-400 text-xs">Features</p>
                                    <p class="text-gray-400 text-xs">Features</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="" alt="">
                            <h2 class="card-title mt-10">Features</h2>
                            <p class="text-gray-400 text-xs">Features</p>
                        </div>
    `;
    modalContainer.appendChild(viewDetailsModal);
}


loadData();