

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
    menuList.appendChild(createMenuItem("Mango sorbet", "Delicious sorbet freshly made", "$4.99"));
    div.appendChild(menuList);

    return div;

};

export default menu;