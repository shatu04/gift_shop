// Mock Data
const mockProducts = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
        category: "Electronics",
        rating: 4.5,
        reviews: 128,
        inStock: true,
        features: ["Noise Cancellation", "30hr Battery", "Quick Charge"]
    },
    {
        id: 2,
        name: "Ceramic Coffee Mug Set",
        price: 24.99,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Beautiful set of 4 ceramic mugs perfect for morning coffee or evening tea.",
        category: "Home & Garden",
        rating: 4.8,
        reviews: 89,
        inStock: true,
        features: ["Dishwasher Safe", "Microwave Safe", "Set of 4"]
    },
    {
        id: 3,
        name: "Leather Crossbody Bag",
        price: 49.99,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Stylish genuine leather crossbody bag with adjustable strap and multiple compartments.",
        category: "Fashion",
        rating: 4.6,
        reviews: 156,
        inStock: true,
        features: ["Genuine Leather", "Adjustable Strap", "Multiple Pockets"]
    },
    {
        id: 4,
        name: "Smart Fitness Tracker",
        price: 89.99,
        image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity.",
        category: "Electronics",
        rating: 4.3,
        reviews: 203,
        inStock: true,
        features: ["Heart Rate Monitor", "GPS Tracking", "7-Day Battery"]
    },
    {
        id: 5,
        name: "Bestseller Novel Collection",
        price: 34.99,
        image: "https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Collection of 3 bestselling novels from acclaimed authors.",
        category: "Books",
        rating: 4.7,
        reviews: 94,
        inStock: true,
        features: ["Set of 3 Books", "Bestsellers", "Gift Wrapped"]
    },
    {
        id: 6,
        name: "Wooden Building Blocks Set",
        price: 19.99,
        image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Educational wooden building blocks set for creative play and learning.",
        category: "Toys & Games",
        rating: 4.9,
        reviews: 67,
        inStock: true,
        features: ["100% Natural Wood", "Educational", "Age 3+"]
    },
    {
        id: 7,
        name: "Aromatherapy Candle Set",
        price: 29.99,
        image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Set of 3 premium soy wax candles with relaxing lavender, vanilla, and eucalyptus scents.",
        category: "Home & Garden",
        rating: 4.4,
        reviews: 112,
        inStock: true,
        features: ["Soy Wax", "3 Scents", "40hr Burn Time"]
    },
    {
        id: 8,
        name: "Portable Phone Charger",
        price: 39.99,
        image: "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "High-capacity portable charger with fast charging technology and multiple ports.",
        category: "Electronics",
        rating: 4.2,
        reviews: 178,
        inStock: false,
        features: ["20000mAh", "Fast Charging", "Multiple Ports"]
    },
    {
        id: 9,
        name: "Cozy Knit Scarf",
        price: 22.99,
        image: "https://images.pexels.com/photos/1060882/pexels-photo-1060882.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Soft and warm knit scarf made from premium wool blend, perfect for cold weather.",
        category: "Fashion",
        rating: 4.6,
        reviews: 85,
        inStock: true,
        features: ["Wool Blend", "Machine Washable", "One Size Fits All"]
    },
    {
        id: 10,
        name: "Indoor Herb Garden Kit",
        price: 44.99,
        image: "https://images.pexels.com/photos/4750467/pexels-photo-4750467.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Complete indoor herb garden kit with LED grow light and organic seeds.",
        category: "Home & Garden",
        rating: 4.5,
        reviews: 73,
        inStock: true,
        features: ["LED Grow Light", "Organic Seeds", "Self-Watering"]
    },
    {
        id: 11,
        name: "Board Game Collection",
        price: 54.99,
        image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Family-friendly board game collection with 5 popular games for all ages.",
        category: "Toys & Games",
        rating: 4.8,
        reviews: 156,
        inStock: true,
        features: ["5 Games Included", "Family Friendly", "Ages 8+"]
    },
    {
        id: 12,
        name: "Premium Tea Collection",
        price: 32.99,
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Curated collection of premium loose-leaf teas from around the world.",
        category: "Food & Beverage",
        rating: 4.7,
        reviews: 92,
        inStock: true,
        features: ["10 Tea Varieties", "Loose Leaf", "Gift Box"]
    }
];

const categories = [
    { id: 'all', name: 'All Categories', icon: '🛍️' },
    { id: 'Electronics', name: 'Electronics', icon: '📱' },
    { id: 'Home & Garden', name: 'Home & Garden', icon: '🏠' },
    { id: 'Fashion', name: 'Fashion', icon: '👗' },
    { id: 'Books', name: 'Books', icon: '📚' },
    { id: 'Toys & Games', name: 'Toys & Games', icon: '🎮' },
    { id: 'Food & Beverage', name: 'Food & Beverage', icon: '🍵' }
];

// Global State
let currentUser = null;
let cartItems = [];
let filteredProducts = [...mockProducts];
let selectedCategory = 'all';
let searchTerm = '';
let isLogin = true;

// DOM Elements
const elements = {
    // Header
    authBtn: document.getElementById('authBtn'),
    authText: document.getElementById('authText'),
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    searchInput: document.getElementById('searchInput'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileAuthBtn: document.getElementById('mobileAuthBtn'),
    mobileAuthText: document.getElementById('mobileAuthText'),
    mobileCartBtn: document.getElementById('mobileCartBtn'),
    mobileCartCount: document.getElementById('mobileCartCount'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),

    // Categories
    categoryGrid: document.getElementById('categoryGrid'),

    // Products
    productsTitle: document.getElementById('productsTitle'),
    productsCount: document.getElementById('productsCount'),
    productsGrid: document.getElementById('productsGrid'),

    // Modals
    authModal: document.getElementById('authModal'),
    productModal: document.getElementById('productModal'),
    cartModal: document.getElementById('cartModal'),

    // Auth Modal
    closeAuthModal: document.getElementById('closeAuthModal'),
    authModalTitle: document.getElementById('authModalTitle'),
    authForm: document.getElementById('authForm'),
    nameGroup: document.getElementById('nameGroup'),
    nameInput: document.getElementById('nameInput'),
    emailInput: document.getElementById('emailInput'),
    passwordInput: document.getElementById('passwordInput'),
    authSubmitBtn: document.getElementById('authSubmitBtn'),
    authSwitchText: document.getElementById('authSwitchText'),
    authSwitchBtn: document.getElementById('authSwitchBtn'),

    // Product Modal
    closeProductModal: document.getElementById('closeProductModal'),
    modalProductImage: document.getElementById('modalProductImage'),
    modalOutOfStock: document.getElementById('modalOutOfStock'),
    modalProductCategory: document.getElementById('modalProductCategory'),
    modalProductName: document.getElementById('modalProductName'),
    modalProductDescription: document.getElementById('modalProductDescription'),
    modalProductStars: document.getElementById('modalProductStars'),
    modalProductRating: document.getElementById('modalProductRating'),
    modalProductReviews: document.getElementById('modalProductReviews'),
    modalProductFeatures: document.getElementById('modalProductFeatures'),
    modalProductPrice: document.getElementById('modalProductPrice'),
    modalStockStatus: document.getElementById('modalStockStatus'),
    modalAddToCartBtn: document.getElementById('modalAddToCartBtn'),

    // Cart Modal
    closeCartModal: document.getElementById('closeCartModal'),
    cartContent: document.getElementById('cartContent'),
    cartFooter: document.getElementById('cartFooter'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutBtn: document.getElementById('checkoutBtn')
};

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function renderStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += '<i class="fas fa-star star"></i>';
        } else if (i <= rating) {
            starsHTML += '<i class="fas fa-star-half-alt star"></i>';
        } else {
            starsHTML += '<i class="far fa-star star empty"></i>';
        }
    }
    return starsHTML;
}

function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    elements.cartCount.textContent = totalItems;
    elements.mobileCartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        elements.cartCount.style.display = 'flex';
    } else {
        elements.cartCount.style.display = 'none';
    }
}

function updateAuthUI() {
    const authText = currentUser ? currentUser.name : 'Sign In';
    elements.authText.textContent = authText;
    elements.mobileAuthText.textContent = authText;
}

// Filter Functions
function filterProducts() {
    let filtered = [...mockProducts];

    if (selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    filteredProducts = filtered;
    renderProducts();
    updateProductsHeader();
}

function updateProductsHeader() {
    const categoryName = selectedCategory === 'all' ? 'All Products' : selectedCategory;
    elements.productsTitle.textContent = categoryName;
    
    const count = filteredProducts.length;
    elements.productsCount.textContent = `${count} ${count === 1 ? 'product' : 'products'} found`;
}

// Render Functions
function renderCategories() {
    elements.categoryGrid.innerHTML = categories.map(category => `
        <button class="category-btn ${selectedCategory === category.id ? 'active' : ''}" 
                onclick="selectCategory('${category.id}')">
            <span class="category-icon">${category.icon}</span>
            <span>${category.name}</span>
        </button>
    `).join('');
}

function renderProducts() {
    if (filteredProducts.length === 0) {
        elements.productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
        return;
    }

    elements.productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${!product.inStock ? '<div class="out-of-stock-badge">Out of Stock</div>' : ''}
                <button class="view-btn" onclick="event.stopPropagation(); openProductModal(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="add-to-cart-btn" 
                            onclick="event.stopPropagation(); addToCart(${product.id})"
                            ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        <span>${product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCart() {
    if (cartItems.length === 0) {
        elements.cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some amazing products to get started!</p>
                <button class="add-to-cart-btn" onclick="closeModal('cartModal')">
                    Continue Shopping
                </button>
            </div>
        `;
        elements.cartFooter.style.display = 'none';
        return;
    }

    elements.cartContent.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.product.name}</div>
                <div class="cart-item-price">${formatPrice(item.product.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, ${item.quantity - 1})">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, ${item.quantity + 1})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.product.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    elements.cartTotal.textContent = formatPrice(total);
    elements.cartFooter.style.display = 'block';
}

// Event Handlers
function selectCategory(categoryId) {
    selectedCategory = categoryId;
    renderCategories();
    filterProducts();
}

function handleSearch(value) {
    searchTerm = value;
    filterProducts();
}

function addToCart(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = cartItems.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ product, quantity: 1 });
    }

    updateCartCount();
}

function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.product.id !== productId);
    updateCartCount();
    renderCart();
}

function updateCartQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cartItems.find(item => item.product.id === productId);
    if (item) {
        item.quantity = quantity;
        updateCartCount();
        renderCart();
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openProductModal(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    elements.modalProductImage.src = product.image;
    elements.modalProductImage.alt = product.name;
    elements.modalProductCategory.textContent = product.category;
    elements.modalProductName.textContent = product.name;
    elements.modalProductDescription.textContent = product.description;
    elements.modalProductStars.innerHTML = renderStars(product.rating);
    elements.modalProductRating.textContent = product.rating;
    elements.modalProductReviews.textContent = `(${product.reviews} reviews)`;
    elements.modalProductPrice.textContent = formatPrice(product.price);

    if (product.inStock) {
        elements.modalOutOfStock.style.display = 'none';
        elements.modalStockStatus.textContent = 'In Stock';
        elements.modalStockStatus.className = 'stock-status in-stock';
        elements.modalAddToCartBtn.disabled = false;
        elements.modalAddToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i><span>Add to Cart</span>';
    } else {
        elements.modalOutOfStock.style.display = 'block';
        elements.modalStockStatus.textContent = 'Out of Stock';
        elements.modalStockStatus.className = 'stock-status out-of-stock';
        elements.modalAddToCartBtn.disabled = true;
        elements.modalAddToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i><span>Out of Stock</span>';
    }

    if (product.features) {
        elements.modalProductFeatures.innerHTML = `
            <h3>Key Features</h3>
            <ul class="features-list">
                ${product.features.map(feature => `
                    <li><i class="fas fa-check"></i>${feature}</li>
                `).join('')}
            </ul>
        `;
    } else {
        elements.modalProductFeatures.innerHTML = '';
    }

    elements.modalAddToCartBtn.onclick = () => {
        addToCart(productId);
        closeModal('productModal');
    };

    openModal('productModal');
}

function toggleAuthMode() {
    isLogin = !isLogin;
    
    if (isLogin) {
        elements.authModalTitle.textContent = 'Sign In';
        elements.authSubmitBtn.textContent = 'Sign In';
        elements.authSwitchText.textContent = "Don't have an account?";
        elements.authSwitchBtn.textContent = 'Sign Up';
        elements.nameGroup.style.display = 'none';
        elements.nameInput.required = false;
    } else {
        elements.authModalTitle.textContent = 'Create Account';
        elements.authSubmitBtn.textContent = 'Create Account';
        elements.authSwitchText.textContent = 'Already have an account?';
        elements.authSwitchBtn.textContent = 'Sign In';
        elements.nameGroup.style.display = 'block';
        elements.nameInput.required = true;
    }
}

function handleAuth(e) {
    e.preventDefault();
    
    const email = elements.emailInput.value;
    const name = isLogin ? 'John Doe' : elements.nameInput.value;
    
    currentUser = { id: 1, name, email };
    updateAuthUI();
    closeModal('authModal');
    
    // Reset form
    elements.authForm.reset();
}

function handleCheckout() {
    if (cartItems.length === 0) return;
    
    alert('Checkout functionality would be implemented here!');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    renderCategories();
    renderProducts();
    updateProductsHeader();
    updateCartCount();

    // Header Events
    elements.authBtn.addEventListener('click', () => openModal('authModal'));
    elements.mobileAuthBtn.addEventListener('click', () => openModal('authModal'));
    elements.cartBtn.addEventListener('click', () => {
        renderCart();
        openModal('cartModal');
    });
    elements.mobileCartBtn.addEventListener('click', () => {
        renderCart();
        openModal('cartModal');
    });

    // Search Events
    elements.searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    elements.mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    // Mobile Menu
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileMenu.classList.toggle('active');
    });

    // Modal Events
    elements.closeAuthModal.addEventListener('click', () => closeModal('authModal'));
    elements.closeProductModal.addEventListener('click', () => closeModal('productModal'));
    elements.closeCartModal.addEventListener('click', () => closeModal('cartModal'));

    // Auth Events
    elements.authSwitchBtn.addEventListener('click', toggleAuthMode);
    elements.authForm.addEventListener('submit', handleAuth);

    // Cart Events
    elements.checkoutBtn.addEventListener('click', handleCheckout);

    // Close modals on outside click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header') && elements.mobileMenu.classList.contains('active')) {
            elements.mobileMenu.classList.remove('active');
        }
    });
});