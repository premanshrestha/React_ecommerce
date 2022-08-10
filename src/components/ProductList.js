import { useGlobalContext } from "../context"
import Product from "./Product"
//import productsData from "../Data/productsData";

const ProductList=()=>{
    const{products} = useGlobalContext();
    return(
        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
                <select>
            <option>Default shorting</option>
            <option>Short by price</option>
            <option>Short by popularity</option>
            <option>Short by rating</option>
            <option>Short by sale</option>
            </select>
            </div>
            <div className="row">
                { products.map((item)=>{
                    return <Product key={item.id}{...item} /> 
                })}
            
            </div>

        </div>
        
    )
}
export default ProductList