document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    const productList = document.getElementById('productList');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - 가격: ${productPrice}원`;
    productList.appendChild(listItem);

    // 폼 초기화
    this.reset();
});