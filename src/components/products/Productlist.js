// import React, { useState } from "react";
// import styles from "./ProductList.module.css";

// const ProductList = ({ products, updateProduct }) => {
//   const [editProduct, setEditProduct] = useState(null);

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
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.name}</td>
//                 <td>₹{product.price}</td>
//                 <td>{truncateDescription(product.description)}</td>
//                 <td>{formatDate(product.expiration_date)}</td>
//                 // Update the Delete button in the return statement
//                 <td>
//                   <button onClick={() => handleEditClick(product)}>Edit</button>
//                   <button onClick={() => deleteProduct(product.id)}>
//                     Delete
//                   </button>
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

const ProductList = ({ products, updateProduct, deleteProduct }) => {
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
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete "${product.name}"?`
                        )
                      ) {
                        deleteProduct(product.id);
                      }
                    }}
                  >
                    Delete
                  </button>
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
