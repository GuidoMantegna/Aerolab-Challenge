import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchUser } from '../../actions';
// import { connect } from 'react-redux';
import './styles.scss';

const Home = ({ }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchUser())
    }, [])
    
    const products = useSelector(state => state.productsReducer.products);
    const status = useSelector(state => state.statusReducer.status);
    return (
        <>
        <div className="sorting-panel">
            <p>Sort by:</p>
            <button className="btn-active">lowest</button>
            <button className="btn-disable">highest</button>
        </div>
        <ul className="product-list">
            {status === "PENDING" && <p>LOADING 🕘</p>}
            {status === "REJECTED" && <p>REJECTED ❌</p>}
            {
                ((status === "RESOLVED" || status === "IDLE") && products) && 
                    products.map(product => {
                        const {category, name, cost, img, _id} = product;
                        return (
                            <li key={_id}>
                                <ProductCard category={category} title={name} cost={cost} img={img.url}/>
                            </li> 
                        )
                })
            }
        </ul>
        <div className="select-page-panel">
            <p>Showing 16 of 32</p>
            <button className="btn-prev"> {"<"} prev </button>
            <button className="btn-next"> next {">"} </button> 
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