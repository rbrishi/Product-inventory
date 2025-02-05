import React, { useState } from "react";
import styles from "./ProductForm.module.css";

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    expiration_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now(),
    };
    addProduct(newProduct);
    console.log("New Product Added:", newProduct);
    setProduct({
      id: "",
      name: "",
      price: "",
      description: "",
      expiration_date: "",
    });
  };

  return (
    <div className={styles.container}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formgroupinput}>
          <label className={styles.label}>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formgroupinput}>
          <label className={styles.label}>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formgroupinput}>
          <label className={styles.label}>Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formgroupinput}>
          <label className={styles.label}>Expiration Date</label>
          <input
            type="date"
            name="expiration_date"
            value={product.expiration_date}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
