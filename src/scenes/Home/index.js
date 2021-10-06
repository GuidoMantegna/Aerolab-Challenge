import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, sortProducts } from "../../actions";
import "./styles.scss";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";

const Home = () => {
  const dispatch = useDispatch(),
  products = useSelector((state) => state.productsReducer.products),
  status = useSelector((state) => state.statusReducer.status),
  statusError = useSelector((state) => state.statusReducer.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [page, setPage] = useState(1);

  const handleSortCLick = (e) => {
    const { textContent, classList, nextSibling, previousSibling } = e.target;

    if (textContent === "lowest") {
      dispatch(sortProducts("lowest"));
      nextSibling.classList.remove("btn-active");
    } else {
      dispatch(sortProducts("highest"));
      previousSibling.classList.remove("btn-active");
    }
    classList.add("btn-active");
  };

  return (
    <>
      <div className="home-tools">
        <div className="sorting-panel">
          <p>Sort by:</p>
          <button className="sorting-btn" onClick={handleSortCLick}>
            lowest
          </button>
          <button className="sorting-btn" onClick={handleSortCLick}>
            highest
          </button>
        </div>
      </div>
      {status === "PENDING" && <PageLoading />}

      <ul className="product-list">
        {(status === "RESOLVED" || status === "IDLE") &&
          page === 1 &&
          products.slice(0, 16).map((product) => {
            const { category, name, cost, img, _id } = product;
            return (
              <li key={_id}>
                <ProductCard
                  category={category}
                  title={name}
                  cost={cost}
                  img={img.url}
                  id={_id}
                />
              </li>
            );
          })}
        {(status === "RESOLVED" || status === "IDLE") &&
          page === 2 &&
          products.slice(16).map((product) => {
            const { category, name, cost, img, _id } = product;
            return (
              <li key={_id}>
                <ProductCard
                  category={category}
                  title={name}
                  cost={cost}
                  img={img.url}
                  id={_id}
                />
              </li>
            );
          })}
      </ul>

      {status === "REJECTED" && <PageError msg={statusError.message} />}

      <div className="select-page-panel">
        <p>{page === 1 ? "Page 1 (1-16)" : "Page 2 (17-32)"}</p>
        <button className="btn-prev" onClick={() => setPage(1)}>
          {" "}
          {"<"}{" "}
        </button>
        <button className="btn-next" onClick={() => setPage(2)}>
          {" "}
          {">"}{" "}
        </button>
      </div>
    </>
  );
};

export default Home;
