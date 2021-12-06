const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
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
      `pic-1`, "cactus", "smol", "2x2", "P200.00"
    )
  )

  shopGrid.appendChild(
    itemDesc(
      `pic-2`, "plant", "smoler", "2x3", "P220.00"
    )
  )

  return shopGrid
}

function itemDesc(imageName, plantName, description, size, price) {

  const shopItem = document.createElement("div");
  shopItem.classList.add("shop-item")
  shopItem.id = `${imageName}`

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
  plantDesc.id = "plantDesc"

  const itemName = document.createElement("h3");
  itemName.classList.add("plant-name")
  itemName.textContent = plantName;

  const itemDesc = document.createElement("p");
  itemDesc.classList.add("plant-desc")
  itemDesc.textContent = "- " + description

  const itemSize = document.createElement("p");
  itemSize.classList.add("plant-size")
  itemSize.textContent = "- " + size

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("plan-price")
  itemPrice.textContent = "- " + price

  const itemImage = document.createElement("img");
  itemImage.src = `images/${imageName.toLowerCase()}.jpg`
  itemImage.classList.add("item-image")

  const count = document.createElement("div")
  count.classList.add("counter")
  count.innerHTML = countVal;
  count.id = "count"


  const addButton = document.createElement("button");
  addButton.classList.add("add-button")
  addButton.textContent = "+"
  addButton.addEventListener("click", () => {
    countVal++
    count.innerHTML = countVal;
    console.log(countVal)
  })
  addButton.id = "add-button"

  const subButton = document.createElement("button");
  subButton.classList.add("sub-button")
  subButton.textContent = "-"
  subButton.addEventListener("click", () => {
    countVal--
    count.innerHTML = countVal;
    console.log(countVal)
  })
  subButton.id = "sub-button"


  shopItem.appendChild(itemImage)
  imageDesc.appendChild(itemName)
  imageDesc.appendChild(itemDesc)
  imageDesc.appendChild(itemSize)
  imageDesc.appendChild(itemPrice)
  plantDesc.appendChild(imageDesc)
  plantFunc.appendChild(subButton)
  plantFunc.appendChild(count)
  plantFunc.appendChild(addButton)
  plantFunc.appendChild(addToCart)
  shopItem.appendChild(plantDesc)
  shopItem.appendChild(plantFunc)





  return shopItem;
}

function mainPage() {
  const main = document.getElementById("main")
  main.appendChild(shopPage())
  return main;
}


mainPage();
