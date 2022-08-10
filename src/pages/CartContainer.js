
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context"
const CartConainer = () => {
    const { cart, totalAmt, clearCart } = useGlobalContext();
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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item) => {
                                return <CartItem key={item.id} {...item} />
                            })
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td> Sub-Total : ${totalAmt}</td>

                        </tr>
                    </tfoot>

                </table>

                <div className="cart-footer">
                    <button className='btn clear-btn'
                        onClick={clearCart}
                    >Clear All</button>
                </div>

            </div>
        </div>

    )

}
export default CartConainer