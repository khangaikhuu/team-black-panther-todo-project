fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        const allProducts = data.products;
        const container = document.querySelector("#main-products");
        container.innerHTML = " ";
        container.className = "ProductContainer";
        allProducts.map((element) => {
            
            const eachProduct = document.createElement('div');
            eachProduct.className = "eachPro";
            container.appendChild(eachProduct);
            

            const phoneTitle = document.createElement("h5");
            phoneTitle.innerHTML = element.title;
            phoneTitle.className = "phoneTitle";

            const phoneImage = document.createElement('img');
            phoneImage.src = element.thumbnail;
            phoneImage.className = "phoneImage";

            const phoneInfo = document.createElement("h4");
            phoneInfo.className = "phoneInfo";
            phoneInfo.innerHTML = ` <strong> Brand: </strong>  ${element.brand} <br> <strong> Category: </strong> ${element.category} <br>  ` ;

            const phonePrice = document.createElement("h3");
            phonePrice.innerHTML = `<strong> Price: </strong> ${element.price}$ <br> Discount: ${element.discountPercentage}%`;

            eachProduct.appendChild(phoneTitle);
            eachProduct.appendChild(phoneImage);
            eachProduct.appendChild(phoneInfo);
            eachProduct.appendChild(phonePrice);



        });
    });



// fetch("https://api.jikan.moe/v4/top/anime")
// .then((res) => res.json())
// .then((topAnime) => {
//     // console.log("topAnim", topAnime);
//     const anime = topAnime.data;
//     // console.log("anime", anime);
//     const container = document.querySelector("#manga_main");

//     container.innerHTML = "";
//     anime.map((element) => {
//         container.appendChild(getDetial(element));
//     });
// });


// function getShop(data) {




//     const myCreate = document.createElement('div');
//     myCreate.className = "myMain";

//     const phoneTitle = document.createElement("h5");
//     phoneTitle.innerHTML = element.title;
//     phoneTitle.className = "phoneTitle";
    
//     const phoneImage = document.createElement('img');
//     phoneImage.src = element.thumbnail;
//     phoneImage.className = "phoneImage";
    
    
//     myCreate.appendChild(phoneTitle);
//     myCreate.appendChild(phoneImage);

    
//     return myCreate;
// }

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data);
//         const allProducts = data.products;
//         const container = document.querySelector("#main-products");
//         container.innerHTML = " ";
//         allProducts.map((element) => {
//             container.appendChild(getShop(element));
//         });
//     });
