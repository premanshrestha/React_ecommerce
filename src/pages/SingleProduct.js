import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
//import productsData from "../Data/productsData"
import Loading from "../components/Loading"
import { useGlobalContext } from "../context";
const SingleProduct=()=> {
    const{paramId} = useParams();
    
    const[loading,setLoading] = useState(false);
    const [productDetail,setProductDetail] = useState({});
    const {products,addToCart} = useGlobalContext();
 useEffect( () => {
        setLoading(true)
        function getProductDetail(){
            if(products){
                const {id,name,image,price}= products.filter(x=>x.id == paramId)[0];
                const value = {id,name,image,price}
                setProductDetail(value);
            setLoading(false)
            }
           
        }
        getProductDetail()
            
    },[paramId])
 
    
    if(loading){
     return<Loading />
    }
    if(!productDetail){
        return <h2 className="section-title">No products</h2>
    }
    else{
        const {id,name,image,price} = productDetail;
    return(
        <div className="small-container single-product">
    <div className="row">
        <div className="col-2">
            <img src={image} className='small-img-col' />
            <div className = "small-img-row">
        </div>
        </div>
        
        <div className="col-2">
            <h1>{name}</h1>
            <h4>${price}</h4>
            <select name="" id="">
                <option value="">Select size</option>
                <option value="">XL</option>
                <option value="">XXL</option>
                <option value="">Large</option>
                <option value="">Medium</option>
                <option value="">
                    Small
                </option>
            </select>
            {/* <input type="number" value="1" /> */}
            <button className="btn" onClick={()=> addToCart(id)}>Add To Cart</button>
            <h3>Products Details <i className="fa fa-indent"></i></h3>
            <p>Give your summer wardrobe a style upgrade with the HRX Men's Active
                T-Shirt. Team it with a pair of shorts for your morning workout or 
                a denims for an evening out with the guys.
            </p>
        </div>
    </div>
    </div>

    )
    }
}
export default SingleProduct