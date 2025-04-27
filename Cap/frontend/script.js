document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;

    const productList = document.getElementById('products');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ${productPrice}원: ${productDescription}`;
    productList.appendChild(listItem);

    // 폼 초기화
    this.reset();
});