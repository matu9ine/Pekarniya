document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Показать модальное окно при наведении на иконку корзины
    cartIcon.addEventListener('mouseenter', () => {
        cartModal.style.display = 'block';
    });

    // Скрыть модальное окно, когда курсор уходит с него
    cartModal.addEventListener('mouseleave', () => {
        cartModal.style.display = 'none';
    });

    // Скрыть модальное окно при клике на крестик
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Скрыть модальное окно при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Добавить товар в корзину
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - ${productPrice}`;
            
            cartItems.appendChild(listItem);
        });
    });
});