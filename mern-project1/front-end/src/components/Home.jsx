import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";

function Home() {
  const [username, setUsername] = useState("");
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setUsername(localStorage.getItem("loggedBy"));
  }, []);

  const navigator = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("JWT token");
    localStorage.removeItem("loggedBy");
    handleSuccess("User LogedOut");
    setTimeout(() => {
      navigator("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    const url = "http://localhost:3000/api/v2/product";
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT token")}`,
      },
    };
    try {
      const response = await fetch(url, options);
      const res = await response.json();
      console.log(res);
      const products = res.data ?? res.products ?? res;
      if (
        res.message &&
        (!products || (Array.isArray(products) && products.length === 0))
      ) {
        handleError(res.message);
        return;
      }
      if (Array.isArray(products)) setDetails(products);
      handleSuccess(res.message || "Products loaded");
    } catch (error) {
      handleError(error?.message || "Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello, welcome {username}</h1>
      <div>
        <h1>This is Protected data can only be acces upon valid jwt token</h1>
        {Array.isArray(details) &&
          details.map((item, index) => (
            <ul key={index}>
              <li>
                {item.name}: {item.price}
              </li>
            </ul>
          ))}
      </div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Home;
