
const menuItems = [
    {
        name: "Mango Madness Smoothie",
        description: "Dive into a tropical paradise with our Mango Madness Smoothie. Made with fresh mangoes, a hint of pineapple, a splash of coconut milk, and a dash of honey, this smoothie is perfect for a refreshing treat anytime.",
        price: "$6.50"
    },
    {
        name: "Spicy Mango Salsa",
        description: "Add a zesty kick to your snack time with our Spicy Mango Salsa. This vibrant mix of ripe mangoes, jalapeños, red onions, cilantro, and lime juice is perfect for dipping chips or topping your favorite dishes.",
        price: "$4.99"
    },
    {
        name: "Mango Coconut Tart",
        description: "Indulge in our Mango Coconut Tart, a delightful dessert featuring a buttery crust filled with creamy coconut custard and topped with luscious slices of fresh mango. Finished with a sprinkle of toasted coconut flakes.",
        price: "$5.75"
    },
    {
        name: "Mango Avocado Salad",
        description: "Enjoy a healthy and delicious meal with our Mango Avocado Salad. This refreshing salad combines juicy mangoes, creamy avocados, mixed greens, cherry tomatoes, and red onion, all tossed in a tangy lime vinaigrette.",
        price: "$8.99"
    }
]

const createMenuItem = (item) => {

    const menuItem = document.createElement("li");
    menuItem.classList.add("menu-item")


    const itemName = document.createElement('h2');
    itemName.innerText = item.name;
    menuItem.appendChild(itemName);

    //Add price to list item
    const itemPrice = document.createElement("p")
    itemPrice.innerText = item.price
    menuItem.appendChild(itemPrice);

    //Add description to list item
    const itemDescription = document.createElement('p');
    itemDescription.innerText = item.description;
    menuItem.appendChild(itemDescription);

    return menuItem

};


const menu = () => {

    const div = document.createElement("div");
    div.classList.add("menu-parent-div")

    // Heading for menu
    const heading = document.createElement("h1");
    heading.innerText = "Menu"
    div.appendChild(heading);

    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");
    menuItems.forEach(
        item =>
            menuList.appendChild(createMenuItem(item))

    );
    //menuList.appendChild(createMenuItem("Mango Madness Smoothie", "Dive into a tropical paradise with our Mango Madness Smoothie. Made with fresh mangoes, a hint of pineapple, a splash of coconut milk, and a dash of honey, this smoothie is perfect for a refreshing treat anytime.", "$6.50"));
    div.appendChild(menuList);

    return div;

};

export default menu;