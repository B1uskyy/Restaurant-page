
const items = [
    {
        name:
    }
]

const createMenuItem = (name, description, price) => {

    const menuItem = document.createElement("li");


    const itemName = document.createElement('h2');
    itemName.innerText = name;
    menuItem.appendChild(itemName);

    //Add price to list item
    const itemPrice = document.createElement("p")
    itemPrice.innerText = price
    menuItem.appendChild(itemPrice);

    //Add description to list item
    const itemDescription = document.createElement('p');
    itemDescription.innerText = description;
    menuItem.appendChild(itemDescription);


    return menuItem

};


const menu = () => {

    const div = document.createElement("div");

    // Heading for menu
    const heading = document.createElement("h1");
    heading.innerText = "Menu"
    div.appendChild(heading);

    const menuList = document.createElement("ul");
    menuList.classList.add("menu");
    menuList.appendChild(createMenuItem("Mango Madness Smoothie", "Dive into a tropical paradise with our Mango Madness Smoothie. Made with fresh mangoes, a hint of pineapple, a splash of coconut milk, and a dash of honey, this smoothie is perfect for a refreshing treat anytime.", "$6.50"));
    menuList.appendChild(createMenuItem("Spicy Mango Salsa", "Add a zesty kick to your snack time with our Spicy Mango Salsa. This vibrant mix of ripe mangoes, jalapeños, red onions, cilantro, and lime juice is perfect for dipping chips or topping your favorite dishes.", "$64.99"));
    menuList.appendChild(createMenuItem("Mango Avocado Salad", "Enjoy a healthy and delicious meal with our Mango Avocado Salad. This refreshing salad combines juicy mangoes, creamy avocados, mixed greens, cherry tomatoes, and red onion, all tossed in a tangy lime vinaigrette.", "$8.99"));
    div.appendChild(menuList);

    return div;

};

export default menu;