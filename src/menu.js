
const recipes = [
    {
        name: "Mango sorbet",
        desc: "Delicious mango sorbet freshly made",
        price: "$4.99"
    }
]


const createMenuItem = (item) => {
    const itemName = item.name;
    const itemDesc = item.desc;
    const itemPrice = item.price;


    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuHeader = document.createElement("h2");
    menuHeader.innerText = itemName;

}

const createMenuParent = (arr) => {
    const parentDiv = document.createElement("div");

    const pushItem = (item) => parentDiv.appendChild(item);

    arr.forEach(Item => {
        pushItem(createMenuItem(Item))
    });


}


const menu = (div) => {

};

export default menu;