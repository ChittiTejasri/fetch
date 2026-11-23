document.getElementById("ShowBtn").addEventListener("click", () => {

    fetch("https://fakestoreapi.com/products")

    .then((response) => {
        return response.json();
    })

    .then((json) => {

        let res = "";

        json.forEach((cv) => {

            res += `
                <div class="card">

                    <img src="${cv.image}" alt="${cv.title}">

                    <h3>${cv.title}</h3>

                    <p class="category">${cv.category}</p>

                    <p class="price">$${cv.price}</p>

                    <p class="rating">
                        ⭐ ${cv.rating.rate} / 5
                        (${cv.rating.count} reviews)
                    </p>

                    <button class="buy-btn"
                        onclick="alert('You selected: ${cv.title.replace(/'/g, "\\'")}')">
                        Buy Now
                    </button>

                </div>
            `;

        });

        document.getElementById("output").innerHTML = res;

    })

    .catch((error) => {
        console.log("Error:", error);
        document.getElementById("output").innerHTML =
            "<p>Unable to load products. Please try again.</p>";
    });

});