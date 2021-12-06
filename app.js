const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

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


  return shopGrid
}

function itemDesc(imageName, plantName, description, size, price) {
  const shopItem = document.createElement("div");
  shopItem.classList.add("shop-item")
  shopItem.id = `${imageName}`

  const imageDesc = document.createElement("div");
  imageDesc.classList.add("image-desc")

  const itemName = document.createElement("h3");
  itemName.classList.add("plant-name")
  itemName.textContent = plantName;

  const itemDesc = document.createElement("p");
  itemDesc.classList.add("plant-desc")
  itemDesc.textContent = "-" + description

  const itemSize = document.createElement("p");
  itemSize.classList.add("plant-size")
  itemSize.textContent = "-" + size

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("plan-price")
  itemPrice.textContent = "-" + price

  const itemImage = document.createElement("img");
  itemImage.src = `images/${imageName.toLowerCase()}.jpg`
  itemImage.classList.add("item-image")



  shopItem.appendChild(itemImage)
  imageDesc.appendChild(itemName)
  imageDesc.appendChild(itemDesc)
  imageDesc.appendChild(itemSize)
  imageDesc.appendChild(itemPrice)
  shopItem.appendChild(imageDesc)

  return shopItem;
}


function mainPage() {
  const main = document.getElementById("main")
  main.appendChild(shopPage())
  return main;
}


mainPage();
