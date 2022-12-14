import { useGlobalContext } from '../context'
const CartItem = (item) => {
    const { removeFromCart, increase, decrease } = useGlobalContext();
    const { id, name, image, price, cartCount} = item

    return (
        <>
            <tr key={id}>
                <td> <div className="cart-info">
                    <img src={image} alt="" />
                    <div>
                        <p>{name}</p>
                        <small>Price: ${price}</small>
                        <br />
                        {/* remove item */}
                        <button
                            className= "remove-btn"
                            onClick={()=>removeFromCart(id)}>
                                remove
                                </button>
                    </div>
                </div>

                </td>
                <td>
                  
                        <button className='cart-btn' onClick={() => increase(id)}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                            </svg>
                        </button>
                        <p className='cartCount'>{cartCount}</p>
                        <button className='cart-btn' onClick={() => decrease(id)}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                            </svg>
                        </button>
                
                </td>
              
            </tr>
        </>
    )
}
export default CartItem
