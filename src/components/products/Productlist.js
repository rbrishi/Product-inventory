// import React, { useState } from "react";
// import styles from "./ProductList.module.css";

// const ProductList = ({ updateProduct }) => {
//   const [editProduct, setEditProduct] = useState(null);

//   const productItems = [
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
//   ];

//   const handleEditClick = (product) => {
//     setEditProduct({ ...product });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditProduct({
//       ...editProduct,
//       [name]: value,
//     });
//   };

//   const handleSaveClick = () => {
//     updateProduct(editProduct);
//     setEditProduct(null);
//   };

//   const handleCancelClick = () => {
//     setEditProduct(null);
//   };

//   const truncateDescription = (description) => {
//     return description.length > 20
//       ? description.substring(0, 20) + "..."
//       : description;
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.toLocaleString("default", { month: "short" });
//     const year = date.getFullYear();
//     return `${day} ${month} ${year}`;
//   };

//   return (
//     <div className={styles.productlist}>
//       <h2>Product List</h2>
//       {editProduct ? (
//         <div className={styles.editForm}>
//           <h3>Edit Product</h3>
//           <input
//             type="text"
//             name="name"
//             value={editProduct.name}
//             onChange={handleInputChange}
//             className={styles.input}
//           />
//           <input
//             type="number"
//             name="price"
//             value={editProduct.price}
//             onChange={handleInputChange}
//             className={styles.input}
//           />
//           <input
//             type="text"
//             name="description"
//             value={editProduct.description}
//             onChange={handleInputChange}
//             className={styles.input}
//           />
//           <input
//             type="date"
//             name="expiration_date"
//             value={editProduct.expiration_date}
//             onChange={handleInputChange}
//             className={styles.input}
//           />
//           <button onClick={handleSaveClick} className={styles.button}>
//             Save
//           </button>
//           <button onClick={handleCancelClick} className={styles.button}>
//             Cancel
//           </button>
//         </div>
//       ) : (
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Description</th>
//               <th>Expiration Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productItems.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.name}</td>
//                 <td>₹{product.price}</td>
//                 <td>{truncateDescription(product.description)}</td>
//                 <td>{formatDate(product.expiration_date)}</td>
//                 <td>
//                   <button onClick={() => handleEditClick(product)}>Edit</button>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ProductList;
import React, { useState } from "react";
import styles from "./ProductList.module.css";

const ProductList = ({ products, updateProduct }) => {
  const [editProduct, setEditProduct] = useState(null);

  const handleEditClick = (product) => {
    setEditProduct({ ...product });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    updateProduct(editProduct);
    setEditProduct(null);
  };

  const handleCancelClick = () => {
    setEditProduct(null);
  };

  const truncateDescription = (description) => {
    return description.length > 20
      ? description.substring(0, 20) + "..."
      : description;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className={styles.productlist}>
      <h2>Product List</h2>
      {editProduct ? (
        <div className={styles.editForm}>
          <h3>Edit Product</h3>
          <input
            type="text"
            name="name"
            value={editProduct.name}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="number"
            name="price"
            value={editProduct.price}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            name="description"
            value={editProduct.description}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="date"
            name="expiration_date"
            value={editProduct.expiration_date}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button onClick={handleSaveClick} className={styles.button}>
            Save
          </button>
          <button onClick={handleCancelClick} className={styles.button}>
            Cancel
          </button>
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Expiration Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{truncateDescription(product.description)}</td>
                <td>{formatDate(product.expiration_date)}</td>
                <td>
                  <button onClick={() => handleEditClick(product)}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;