"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState<string[]>([]);

  // Recuperar el estado desde localStorage cuando el componente se monte
  useEffect(() => {
    const savedProductList = localStorage.getItem("productList");
    if (savedProductList) {
      setProductList(JSON.parse(savedProductList));
    }
  }, []);

  // Guardar el estado en localStorage cada vez que se actualice productList
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product.trim()) {
      setProductList([...productList, product]);
      setProduct("");
    }
  };

  const handleDelete = (index: number) => {
    setProductList(productList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar producto..."
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <p>Producto actual: {product}</p>
      <ul>
        {productList.map((prod, index) => (
          <li key={index} onClick={() => handleDelete(index)}>
            {prod}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
