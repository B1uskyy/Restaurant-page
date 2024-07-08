
const about = () => {

    // div for everything to be in
    const div = document.createElement("div");
    div.classList.add("about-us")

    // Header with about us information
    const aboutUsHeader = document.createElement("h1");
    aboutUsHeader.innerText = "ABOUT US";
    div.appendChild(aboutUsHeader);

    // about us information
    const aboutUsInfo = document.createElement("p");
    aboutUsInfo.innerText = "Welcome to Mango Delight, your go-to destination for all things mango! " +
        "At Mango Delight, we are passionate about bringing you the freshest and most " +
        "delicious mango-based products. Our journey began with a simple love for this tropical fruit and " +
        "has grown into a full-fledged store dedicated to mango enthusiasts like you. We pride ourselves on using " +
        "only the finest ingredients to create a variety of mouth-watering treats that celebrate the unique flavor of mangoes. " +
        "From smoothies and salads to salsas and desserts, we have something for everyone. Join us in our mango madness and experience the tropical delight in every bite!"
    div.appendChild(aboutUsInfo);


    // "Contact us" header
     const contactHeader = document.createElement("h2");
     contactHeader.innerText = "Contact us!"
     div.appendChild(contactHeader);

    // Stock contact us information
    const contactUsInfo = document.createElement("p");
    contactUsInfo.innerText = "info@mangodelight.com"
    div.appendChild(contactUsInfo)


    return div;
};

export default about;