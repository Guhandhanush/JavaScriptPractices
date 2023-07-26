class products {
    constructor(newID, newSize, newColor) {
        this.id = newID;
        this.size = newSize;
        this.color = newColor;
    };
}

let id = document.getElementById('inputId').value;
let size = document.getElementById('inputSize').value;
let color = document.getElementById('inputColor').value;

var product1 = new products(id,size,color);
console.log(product1);

document.getElementById('div').innerHTML = `
    <ul>
        <li>ID:${product1.id}</li>
        <li>Size:${product1.size}</li>
        <li>Color:${product1.color}</li>
    </ul> `;