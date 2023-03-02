import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const HomePage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    useFetch("product", "GET")
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product);

  return (
    <div className="container">
      <div className="row">
        {Array.isArray(product) &&
          product.map((val, key) => {
            return (
              <div
                key={key}
                className="card m-3 p-4"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <h6 className="card-title">Type - {val.type}</h6>
                  <h6 className="card-title">Price - {val.price} $</h6>
                  <p className="card-text">{val.description}</p>
                </div>
                <div className="row">
                  <button className="btn btn-warning ">Buy</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
