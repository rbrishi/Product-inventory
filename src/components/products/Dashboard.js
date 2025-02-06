// import React, { useState } from "react";
// import ProductForm from "./ProductForm";
// import ProductList from "./ProducLlist";

// const Dashboard = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Smartphone",
//       price: 30000,
//       description: "High-end smartphone with 128GB storage.",
//       expiration_date: "2027-12-31",
//     },
//     {
//       id: 2,
//       name: "Laptop",
//       price: 50000,
//       description: "Powerful laptop with 16GB RAM, 512GB SSD.",
//       expiration_date: "2026-12-31",
//     },
//     {
//       id: 3,
//       name: "Smartwatch",
//       price: 8000,
//       description: "Smartwatch with fitness tracking features.",
//       expiration_date: "2026-06-15",
//     },
//     {
//       id: 4,
//       name: "Wireless Mouse",
//       price: 1000,
//       description: "Wireless mouse with long battery life.",
//       expiration_date: "2026-05-30",
//     },
//     {
//       id: 5,
//       name: "Headphones",
//       price: 22000,
//       description: "Black headphones with noise cancellation.",
//       expiration_date: "2027-12-01",
//     },
//     {
//       id: 6,
//       name: "TWS",
//       price: 2000,
//       description: "Wireless",
//       expiration_date: "2026-07-15",
//     },
//   ]);

//   const addProduct = (product) => {
//     setProducts([...products, product]);
//   };

//   const updateProduct = (updatedProduct) => {
//     const updatedProducts = products.map((product) =>
//       product.id === updatedProduct.id ? updatedProduct : product
//     );
//     setProducts(updatedProducts);
//   };

//   return (
//     <div>
//       <ProductForm addProduct={addProduct} />
//       <ProductList products={products} updateProduct={updateProduct} />
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Dashboard = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts =
      sessionStorage.getItem("products") || localStorage.getItem("products");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            id: 1,
            name: "Smartphone",
            price: 30000,
            description: "High-end smartphone with 128GB storage.",
            expiration_date: "2027-12-31",
          },
          {
            id: 2,
            name: "Laptop",
            price: 50000,
            description: "Powerful laptop with 16GB RAM, 512GB SSD.",
            expiration_date: "2026-12-31",
          },
          {
            id: 3,
            name: "Smartwatch",
            price: 8000,
            description: "Smartwatch with fitness tracking features.",
            expiration_date: "2026-06-15",
          },
          {
            id: 4,
            name: "Wireless Mouse",
            price: 1000,
            description: "Wireless mouse with long battery life.",
            expiration_date: "2026-05-30",
          },
          {
            id: 5,
            name: "Headphones",
            price: 22000,
            description: "Black headphones with noise cancellation.",
            expiration_date: "2027-12-01",
          },
          {
            id: 6,
            name: "TWS",
            price: 2000,
            description: "Wireless earphones",
            expiration_date: "2026-07-15",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    sessionStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default Dashboard;
