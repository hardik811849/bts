// function displayCategories(data) {
//   const container = document.querySelector(".group-parent6");
//   const detailsContainer = document.querySelector(".group-parent7");

//   let firstCategoryData = null;

//   for (const category in data) {
//     if (data.hasOwnProperty(category)) {
//       const categoryDiv = document.createElement("div");
//       categoryDiv.classList.add("beansOil");
//       categoryDiv.dataset.category = category;

//       const categoryHeading = document.createElement("p");
//       categoryHeading.classList.add("span");
//       categoryHeading.textContent = category.replace(/_/g, " ").toUpperCase();
//       categoryDiv.appendChild(categoryHeading);

//       categoryDiv.addEventListener("click", () => {
//         displayCategoryDetails(data[category], detailsContainer);
//       });

//       container.appendChild(categoryDiv);

//       // Store the first category's data
//       if (!firstCategoryData) {
//         firstCategoryData = data[category];
//       }
//     }
//   }

//   // Display details of the first category by default
//   if (firstCategoryData) {
//     displayCategoryDetails(firstCategoryData, detailsContainer);
//   }
// }

// function displayCategoryDetails(items, container) {
//   container.innerHTML = "";

//   items.forEach((item) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("item");

//     const imageDiv = document.createElement("div");
//     imageDiv.classList.add("imageDiv");

//     const itemImage = document.createElement("img");
//     const imageUrl = item.image || item.images || "";
//     if (imageUrl) {
//       itemImage.src = imageUrl;
//       itemImage.alt = item.name;
//       itemImage.style.maxWidth = "200px";
//       itemImage.style.height = "auto";
//       imageDiv.appendChild(itemImage);
//       itemDiv.appendChild(imageDiv);
//     }

//     const itemName = document.createElement("h3");
//     itemName.textContent = item.name;
//     itemDiv.appendChild(itemName);

//     const itemDetails = document.createElement("p");
//     itemDetails.textContent = `₹ ${item.price || "N/A"}`;
//     itemDiv.appendChild(itemDetails);

//     container.appendChild(itemDiv);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   displayCategories(data);
// });

// Example data (replace this with your actual data)

// Example data (replace this with your actual data)

function displayCategories(data) {
  const container = document.querySelector(".group-parent6");
  const detailsContainer = document.querySelector(".group-parent7");
  const select = document.getElementById("categorySelect");

  let firstCategoryData = null;

  for (const category in data) {
    if (data.hasOwnProperty(category)) {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("beansOil");
      categoryDiv.dataset.category = category;

      const categoryHeading = document.createElement("p");
      categoryHeading.classList.add("span");
      categoryHeading.textContent = category.replace(/_/g, " ").toUpperCase();
      categoryDiv.appendChild(categoryHeading);

      categoryDiv.addEventListener("click", () => {
        displayCategoryDetails(data[category], detailsContainer);
      });

      container.appendChild(categoryDiv);

      // Add category to select dropdown
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.replace(/_/g, " ").toUpperCase();
      select.appendChild(option);

      // Store the first category's data
      if (!firstCategoryData) {
        firstCategoryData = data[category];
      }
    }
  }

  // Display details of the first category by default
  if (firstCategoryData) {
    displayCategoryDetails(firstCategoryData, detailsContainer);
  }

  // Handle select change event
  select.addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      displayCategoryDetails(data[selectedCategory], detailsContainer);
    } else {
      detailsContainer.innerHTML = "";
    }
  });
}

function displayCategoryDetails(items, container) {
  container.innerHTML = "";

  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carousel-cell");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");

    const itemImage = document.createElement("img");
    const imageUrl = item.image || item.images || "";
    if (imageUrl) {
      itemImage.src = imageUrl;
      itemImage.alt = item.name;
      itemImage.style.maxWidth = "200px";
      itemImage.style.height = "auto";
      imageDiv.appendChild(itemImage);
      itemDiv.appendChild(imageDiv);
    }

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    itemDiv.appendChild(itemName);

    const itemDetails = document.createElement("p");
    itemDetails.textContent = `₹ ${item.price || "N/A"}`;
    itemDiv.appendChild(itemDetails);

    carouselDiv.appendChild(itemDiv);
  });

  container.appendChild(carouselDiv);

  // Initialize Flickity
  new Flickity(carouselDiv, {
    contain: true,
    groupCells: 3,
    pageDots: false,
    freeScroll: false,
    wrapAround: false,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayCategories(data);
});
