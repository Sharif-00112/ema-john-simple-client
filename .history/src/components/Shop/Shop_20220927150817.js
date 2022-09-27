import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    //quantity problem solved
    const handleAddToCart = (product) => {
        //check if the product already exists in the cart
        const exists = cart.find(pd => pd.key === product.key);

        // create a newCart empty array
        let newCart = [];

        // if the same product already exists, it has the 'quantity' attribute. In this situation, firstly, add the remaining (unmatched) items in the cart. then increase the existing product quantity by 1 and finally add that product to new cart.
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }

        // if the same product already not exists, add a quantity attribute with value = 1 and set it to the array. 
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // update cart
        setCart(newCart);
        // save to local storage (as we do not have database yet)
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container p-2">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="  Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn-regular'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;