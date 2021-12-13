const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const signUp = document.querySelector(".sign-up-link")
let countVal = 0;

hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))

function shopPage() {
        const shopGrid = document.getElementById("shop-grid");
        shopGrid.appendChild(
                itemDesc(
                        `pic-1`, "Mr. Tangerine", "smol tree", "tastes good", "P200.00"
                )
        )

        shopGrid.appendChild(
                itemDesc(
                        `pic-2`, "Lili pad with stem", "kewl", "sophisticated", "P500.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-3`, "bush", "weird", "meaningless", "P250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-4`, "cactus man", "strong", "independent", "P63,466.40"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-5`, "wizard thing", "intimidating", "meaningful", "P252,350.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-6`, "cactus man (bent)", "strong", "kinda independent", "P2,250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-7`, "tree-ish", "food", "purpose", "P13,250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-8`, "chad bonsay", "knowledge", "brawn", "P23,650.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-9`, "sword plant", "elegance", "bad juju", "P22,350.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-10`, "dagger", "weird", "freedom", "P23,450.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-11`, "alive-ish", "help", "morose", "P8,550.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-12`, "Evil Cactus", "Socialism", "Karens", "P250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-13`, "Hippie", "Forest", "Gump", "P6,750.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-14`, "Tokyo", "Snow", "Heat", "P250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-15`, "Reality Bush", "Malleability", "Human Mind", "P267,450.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-16`, "Treepac", "shy", "sophisticated", "P50.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-17`, "Bojak", "Bernie", "Sanders", "P250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-18`, "Tesla", "Self Growing", "Daddy Elon", "555,555.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-19`, "Dogie", "Meme", "Coin", "P250.00"
                )
        )
        shopGrid.appendChild(
                itemDesc(
                        `pic-20`, "BBM", "WHY???", "dull-witted/unintelligent", "P250.00"
                )
        )

        return shopGrid
}

function itemDesc(imageName, plantName, description, size, price) {

        const shopItem = document.createElement("div");
        shopItem.classList.add("shop-item")
        shopItem.id = `${imageName}`

        const plantDiv = document.createElement("div")
        plantDiv.classList.add("plant-div")
        plantDiv.id = "plant-div"

        const quantity = document.createElement("div")
        quantity.classList.add("quantity")
        quantity.id = "plnt-div"

        const addToCart = document.createElement("button");
        addToCart.classList.add("add-to-cart")
        addToCart.textContent = "Add to cart"
        addToCart.id = "add-to-cart"

        const imageDesc = document.createElement("div");
        imageDesc.classList.add("image-desc")

        const plantFunc = document.createElement("div")
        plantFunc.classList.add("plant-func")
        plantFunc.id = "plantFunc"

        const plantDesc = document.createElement("div")
        plantDesc.classList.add("plant-desc")
        plantDesc.id = "plant-desc"

        const itemName = document.createElement("h3");
        itemName.classList.add("plant-name")
        itemName.textContent = plantName;

        const itemDesc = document.createElement("p");
        itemDesc.classList.add("plant-desc")
        itemDesc.textContent = "- " + description

        const itemSize = document.createElement("p");
        itemSize.classList.add("plant-size")
        itemSize.textContent = "- " + size

        const itemPrice = document.createElement("h3");
        itemPrice.classList.add("plan-price")
        itemPrice.textContent = price

        const itemImage = document.createElement("img");
        itemImage.src = `images/${imageName.toLowerCase()}.jpg`
        itemImage.classList.add("item-image")

        const count = document.createElement("h2")
        count.classList.add("counter")
        count.innerHTML = countVal;
        count.id = "count"


        const addButton = document.createElement("button");
        addButton.classList.add("add-button")
        addButton.textContent = "+"
        addButton.addEventListener("click", () => {
                countVal++
                if (countVal < 0) {
                        countVal = 0
                }
                count.innerHTML = countVal;
        })
        addButton.id = "add-button"

        const subButton = document.createElement("button");
        subButton.classList.add("sub-button")
        subButton.textContent = "-"
        subButton.addEventListener("click", () => {
                countVal--
                if (countVal < 0) {
                        countVal = 0;
                }
                count.innerHTML = countVal;
        })
        subButton.id = "sub-button"


        shopItem.appendChild(itemImage)
        imageDesc.appendChild(itemName)
        imageDesc.appendChild(itemDesc)
        imageDesc.appendChild(itemSize)
        imageDesc.appendChild(itemPrice)
        plantDesc.appendChild(imageDesc)

        quantity.appendChild(subButton)
        quantity.appendChild(count)
        quantity.appendChild(addButton)

        plantFunc.appendChild(quantity)

        plantFunc.appendChild(addToCart)

        plantDiv.appendChild(plantDesc)
        plantDiv.appendChild(plantFunc)

        shopItem.appendChild(plantDiv)

        let modal = document.getElementById("myModal");
        let span = document.getElementsByClassName("close")[0];
        // When the user clicks on the button, open the modal
        addToCart.onclick = function() {
                modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
                modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
                if (event.target == modal) {
                        modal.style.display = "none";
                }
        }
        return shopItem;
}

function mainPage() {
        const main = document.getElementById("main")
        main.appendChild(shopPage())
        return main;
}



mainPage();
