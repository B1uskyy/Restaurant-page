import mangoImage from './mango.jpg';


const frontPage = () => {
    return `
        <h1>MATS' MARVELOUS MANGO RESTAURANT</h1>
        <img src="${mangoImage}" alt="Image of mango tree">
        <p>Selling you the best mango dishes since 2002!</p>
    `;
};

export default frontPage;
