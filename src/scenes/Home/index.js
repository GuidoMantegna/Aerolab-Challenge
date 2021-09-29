import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, sortProducts } from '../../actions';
import './styles.scss';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);
    const status = useSelector(state => state.statusReducer.status);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    
    const [page, setPage] = useState(1);

    const handleSortCLick = (e) => {
        const {textContent, classList, nextSibling, previousSibling} = e.target

        if (textContent === "lowest") {
            dispatch(sortProducts('lowest'))
            nextSibling.classList.remove("btn-active")            
        } else {
            dispatch(sortProducts('highest'))
            previousSibling.classList.remove("btn-active") 
        }
        classList.add("btn-active")
        
    }

    return (
        <>
        <div className="sorting-panel">
            <p>Sort by:</p>
            <button className="sorting-btn" onClick={handleSortCLick}>lowest</button>
            <button className="sorting-btn" onClick={handleSortCLick}>highest</button>
        </div>
        <ul className="product-list">
            {status === "PENDING" && <p>LOADING 🕘</p>}
            {status === "REJECTED" && <p>REJECTED ❌</p>}
            {((status === "RESOLVED" || status === "IDLE") && products) && 
                page === 1 
                ? products.slice(0,16).map(product => {
                        const {category, name, cost, img, _id} = product;
                        return (
                            <li key={_id}>
                                <ProductCard category={category} title={name} cost={cost} img={img.url} id={_id}/>
                            </li> 
                        )
                    }
                )
                : products.slice(16).map(product => {
                    const {category, name, cost, img, _id} = product;
                    return (
                        <li key={_id}>
                            <ProductCard category={category} title={name} cost={cost} img={img.url} id={_id}/>
                        </li> 
                    )
                }
            )}
        </ul>
        <div className="select-page-panel">            
            <p>{page === 1 ? "Page 1 (1-16)" : "Page 2 (17-32)"}</p>
            <button className="btn-prev" onClick={() => setPage(1)}> {"<"} </button>
            <button className="btn-next" onClick={() => setPage(2)}> {">"} </button> 
        </div>
        </>
    );
};

// const mapStateToProps = state => {
//     return {
//       products: state.products
//     }
//   }
  
// const mapDispatchToProps = dispatch => {
//     return {
//       fetchProducts: () => dispatch(fetchProducts())
//     }
//   }
  
// // Then we pass this function to connect and wrap the component to export it.
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Home)

export default Home;