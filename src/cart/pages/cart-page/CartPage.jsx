import { useContext } from "react"

import { CartContext } from '../../context'
import { CartItem, EmptyCart } from '../../components'

import cartPageStyles from './cart-page.module.css'

export const CartPage = () => {

  const {items} = useContext(CartContext)
  const total = items.reduce( (pre,curr) => pre + curr.price * curr.quantity, 0)

  return (
    <div className={cartPageStyles.container}>
      <div className={cartPageStyles['items-cart']}>
        
        { items.length <= 0 
          ? ( <EmptyCart /> )
          : (items.map( item => <CartItem key={item.id} item={item} border /> ))
        }

      </div>
      <div className={cartPageStyles.summary}>
          <div className={cartPageStyles['card-summary']}>
            <h3>Resumen de la orden</h3>
            <div className={cartPageStyles['card-summary-details']}>
              <p>Productos ({items.length})</p>
              <p><span>Total:</span>${parseFloat(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
            </div>
            <button className={cartPageStyles['btn-next']}>
              <span>Continuar compra</span>
            </button>
          </div>
      </div>
    </div>
  )
}