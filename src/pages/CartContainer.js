
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context"
const CartConainer = () => {
    const { cart, totalAmt } = useGlobalContext();
    if (cart.length === 0) {
        return (
            <div className="small-container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>  <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4></td>
                        </tr>
                      
                    </tbody>

                </table>
                </div>
            
        )
    }

    return (
        <div>
            <div className="small-container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        {
                            cart.map((item) => {
                                return <CartItem key={item.id} {...item} />
                            })
                        }

                    </tbody>

                </table>
                <div className="total-price">
        <table>
            <tr>
                <td>Subtotal</td>
                <td>${totalAmt}</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>$200.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$200.00</td>
            </tr>
        </table>
    </div> 
            </div>
        </div>
    )

}
export default CartConainer