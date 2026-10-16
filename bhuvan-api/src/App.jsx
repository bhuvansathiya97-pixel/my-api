// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App;

// import React, { useState, useEffect } from "react";
// import "./index.css";

// function App() {
//   const [data, setData] = useState([]);
//   const [product, setProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [search, setSearch] = useState("");


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           "https://fakestoreapi.com/products"
//         );

//         if (!res.ok) {
//           throw new Error("API Error");
//         }

//         const result = await res.json();

//         const filteredData = result.filter((item) =>
//           [
//             "men's clothing",
//             "women's clothing",
//             "jewelery"
//           ].includes(item.category)
//         );

//         setData(filteredData);
//       } catch {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToCart = (item) => {
//     setCart((previousCart) => [
//       ...previousCart,
//       item
//     ]);
//   };

  
//   if (loading) {
//     return <h1 className="message">Loading Products...</h1>;
//   }

//   if (error) {
//     return (
//       <h1 className="message">
//         Something went wrong! Please try again.
//       </h1>
//     );
//   }

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="main">

//       <header className="navbar">
//         <h1>B1 Clothing</h1>

//         <div className="cart-count">
//           🛒 Cart ({cart.length})
//         </div>
//       </header>

//       {product ? (
//         <div className="details-card">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="detail-img"
//           />

//           <h2>{product.title}</h2>

//           <p className="product-category">
//             {product.category}
//           </p>

//           <h2 className="product-price">
//             ₹{product.price}
//           </h2>

//           <p>{product.description}</p>

//           <button
//             className="cart-button"
//             onClick={() => addToCart(product)}
//           >
//             Add to Cart
//           </button>

//           <button
//             className="back-button"
//             onClick={() => setProduct(null)}
//           >
//             Back to Products
//           </button>
//         </div>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="search"
//           />
//           <label htmlFor="">(search)</label>

//           <div className="container">
//             {filteredData.length === 0 ? (
//               <h2 className="message">
//                 No Products Found!
//               </h2>
//             ) : (
//               filteredData.map((item) => (
//                 <div className="card" key={item.id}>

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="img"
//                   />

//                   <h2 className="product-title">
//                     {item.title}
//                   </h2>

//                   <p className="product-category">
//                     {item.category}
//                   </p>

//                   <h3 className="product-price">
//                     ₹{item.price}
//                   </h3>

//                   <p className="product-description">
//                     {item.description}
//                   </p>

//                   <button
//                     className="cart-button"
//                     onClick={() => addToCart(item)}
//                   >
//                     🛒 Add to cart
//                   </button>

//                   <button
//                     className="back-button"
//                     onClick={() => setProduct(item)}
//                   >
//                     View Details
//                   </button>

//                 </div>
//               ))
//             )}
//           </div>
//         </>
//       )}

//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [form, setForm] = useState({
        search: ""
    });

    // Handle Search Input
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Fetch Product List
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("API Error");
                }

                return res.json();
            })
            .then((result) => {
                const filteredProducts = result.filter((items) =>
                    [
                        "men's clothing",
                        "women's clothing",
                        "jewelery"
                    ].includes(items.category)
                );

                setData(filteredProducts);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    // Fetch Product Details
    const showProduct = (url) => {
        setLoading(true);
        setError(false);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("API Error");
                }

                return res.json();
            })
            .then((result) => {
                setProduct(result);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    };

    // Add Product to Cart
    const addToCart = (items) => {
        setCart((prev) => [...prev, items]);
        alert("Product added to cart!");
    };

    // Loading Screen
    if (loading) {
        return <h1 className="message">Loading Products...</h1>;
    }

    // Error Screen
    if (error) {
        return <h1 className="message">Something went wrong!</h1>;
    }

    // Empty API Screen
    if (!product && data.length === 0) {
        return <h1 className="message">No Products Found!</h1>;
    }

    // Search Filter
    const filteredData = data.filter((items) =>
        items.title.toLowerCase().includes(form.search.toLowerCase())
    );

    return (
        <div className="main">

            <h1>B1 Clothing</h1>

            <h2>🛒 Cart ({cart.length})</h2>

            {!product && (
                <>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Products..."
                        value={form.search}
                        onChange={handleChange}
                        className="search"
                    />

                    <label>{form.search}</label>
                </>
            )}

            {/* Product Details */}
            {product ? (
                <div className="container">
                    <div className="card">

                        <h1 className="head">{product.title}</h1>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="img"
                        />

                        <h2>
                            <span className="genre">Category: </span>
                            {product.category}
                        </h2>

                        <h2>
                            <span className="genre">Price: ₹</span>
                            {product.price}
                        </h2>

                        <h3>
                            <span className="genre">Rating: </span>
                            {product.rating?.rate ?? "N/A"}
                        </h3>

                        <p>
                            <span className="genre">Description: </span>
                            {product.description}
                        </p>

                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>

                        <button onClick={() => setProduct(null)}>
                            Back to Products
                        </button>

                    </div>
                </div>
            ) : (

                /* Product List */
                <div className="container">

                    {filteredData.length === 0 ? (
                        <h2 className="message">
                            No Products Found!
                        </h2>
                    ) : (

                        filteredData.map((items) => (
                            <div className="card" key={items.id}>

                                <h1 className="head">
                                    {items.title}
                                </h1>

                                <img
                                    src={items.image}
                                    alt={items.title}
                                    className="img"
                                />

                                <h2>
                                    <span className="genre">Category: </span>
                                    {items.category}
                                </h2>

                                <h3>
                                    <span className="genre">Price: ₹</span>
                                    {items.price}
                                </h3>

                                <button
                                    onClick={() =>
                                        showProduct(
                                            `https://fakestoreapi.com/products/${items.id}`
                                        )
                                    }
                                >
                                    View Details
                                </button>

                                <button onClick={() => addToCart(items)}>
                                    Add to Cart
                                </button>

                            </div>
                        ))
                    )}

                </div>
            )}

        </div>
    );
}

export default App;

