const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const items = data.data.tools;
    displayItems(items);
}

const displayItems = (items) => {
    const itemsContainer = document.getElementById('items-container');

    for (const item of items) {
        console.log(item);
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
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
        `;
        itemsContainer.appendChild(itemCard);
    }
}

loadData();