
import { Link } from 'react-router-dom';
const Product= (item)=>{ 

    return(
     
            <div className="col-4" key={item.id}>
             <img src={item.image} className ='img'/>
            <div>{item.name}</div>
            <div className="rating">
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>${item.price}</p>
            <Link to ={`/detail/${item.id}`} className='btn'>
                Details
            </Link>
            
        </div>
        
        

        
        
    )
}
export  default Product