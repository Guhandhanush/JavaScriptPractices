class products {
    constructor(newID, newSize, newColor) {
        this.id = newID;
        this.size = newSize;
        this.color = newColor;
    };
}

var product1 = new products(1, 7, 'Blue & Black');
console.log(product1);

document.body.innerHTML = `
    <ul>
        <li>ID:${product1.id}</li>
        <li>Size:${product1.size}</li>
        <li>Color:${product1.color}</li>
    </ul> `;