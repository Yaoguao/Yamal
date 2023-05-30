


document.addEventListener('DOMContentLoaded', () => {
      const Menu_Btn = document.getElementById('Menu');
      const Contnt = document.getElementById('ContentBo');
      const button = document.getElementById('MenBtn');
    
      button.addEventListener('click', (e) => {
            e.preventDefault();
            Menu_Btn.classList.toggle('menu_active');
            Contnt.classList.toggle('content_active');
      });
});
let menuList = [
      "кровь",
      "олень",
      "сырая",
      "рога",
      "рыба",
      "лук",
      "перец",
]

let products = [
      {
            name: "Оленья кровь",
            ingredients: ["кровь", "олень"],
            description: "Эээм, ну ладно",

            image: "../TYR-htmlcss/img/krov.jpg"
      },
      {
            name: "Строганина",
            ingredients: ["олень", "сырая"],
            description: "Не хавал, не знаю",

            image: "../TYR-htmlcss/img/-stroganina-stroganina-iz-muksuna_1492406588_1_max.jpg"
      },
      {
            name: "Панты оленя",
            ingredients: ["олень", "рога"],
            description: "Это внатуре едят?",

            image: "../TYR-htmlcss/img/panty-olenja-1-613x400.jpg"
      },
      {
            name: "Двойная уха",
            ingredients: ["рыба", "лук", "перец"],
            description: "Уха!",

            image: "../TYR-htmlcss/img/uha.jpg"
      },
      {
            name: "Оленье мясо",
            ingredients: ["олень", "сырая"],
            description: "Пломбир",

            image: "../TYR-htmlcss/img/Depositphotos_171581638_xl-2015.jpg"
      }
];

function generateProductElement(product) {
      let productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" style="width: 230px;height: 130px;border-radius: 12px;">
        <p>${product.description}</p>
      `;
      return productElement;
}

document.addEventListener("DOMContentLoaded", function() {
      let productsContainer = document.getElementById('products-container');

      for (let i = 0; i < products.length; i++) {
            let productElement = generateProductElement(products[i]);
            productsContainer.appendChild(productElement);
      }

})

document.addEventListener("DOMContentLoaded", function() {
      const menuContainer = document.getElementById("menu-container");

      for (let i = 0; i < menuList.length; i++) {
            const menuItem = document.createElement("button");
            menuItem.classList.add("buttonListMenu");
            menuItem.textContent = menuList[i];
            menuContainer.appendChild(menuItem);
      }

      const buttons = document.querySelectorAll(".buttonListMenu");
    
      function updateProducts() {
            const activeButtons = document.querySelectorAll('.buttonListMenu.active');
            const activeIngredients = [...activeButtons].map(button => button.textContent);
            const productElements = document.querySelectorAll('.product');
        
            if (activeButtons.length > 0) {
                  productElements.forEach(productElement => {
                        const product = products.find(p => p.name === productElement.querySelector('h2').textContent);
                       
                        if (product.ingredients.some(ingredient => activeIngredients.includes(ingredient))) {
                              productElement.style.display = 'flex';
                        } 
                        else {
                              productElement.style.display = 'none';
                        }
                  });
            } 
            else {
                  productElements.forEach(productElement => productElement.style.display = 'flex');
            }
      }
        
      buttons.forEach(button => {  // метод для клика на кнопку 
            button.addEventListener("click", function() {

            if (button.classList.contains("active")) {
                  button.classList.remove("active");
            } else {
                  button.classList.add("active");
            }
            updateProducts();
            });
      });
});

