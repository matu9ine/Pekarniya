document.addEventListener('DOMContentLoaded', function () {
    const cartModal = document.getElementById('cart-modal');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');

    // Открыть модальное окно корзины
    function openCartModal() {
        cartModal.style.display = 'block';
    }

    // Закрыть модальное окно корзины
    function closeCartModal() {
        cartModal.style.display = 'none';
    }

    // Показать модальное окно при наведении на корзину
    cartModal.addEventListener('mouseover', openCartModal);

    // Скрыть модальное окно при клике вне его
    window.addEventListener('click', function (event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });

    // Удалить все товары из корзины
    function clearCart() {
        while (cartItemsContainer.firstChild) {
            cartItemsContainer.removeChild(cartItemsContainer.firstChild);
        }
    }

    // Удалить товар из корзины
    function removeCartItem(event) {
        const buttonClicked = event.target;
        const cartItem = buttonClicked.closest('.cart-item');
        cartItem.parentNode.removeChild(cartItem); // Удаляем элемент из DOM
    }

    // Добавить товар в корзину
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;

            const productPrice = productCard.querySelector('.price').textContent;
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');

            // Карточка товара в корзине
            cartItem.innerHTML = `
                <div class="product-info">
                    <img src="${productCard.querySelector('img').src}" alt="${productName}">
                    <div class="product-details">
                        <h3>${productName}</h3>
                        <p>${productPrice}</p>
                    </div>
                </div>
                <button class="delete-item">Удалить</button>
            `;

            // Добавляем функционал удаления товара
            const deleteButton = cartItem.querySelector('.delete-item');
            deleteButton.addEventListener('click', removeCartItem);

            // Очищаем корзину и добавляем новый товар
            clearCart();
            cartItemsContainer.appendChild(cartItem);
        });
    });
});
