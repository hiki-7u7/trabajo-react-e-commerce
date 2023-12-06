import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CartContext } from '../../../cart';
import { useCounter } from '../../../common';
import { getProductById } from '../../helpers';

import productDetailsStyles from './product.details.module.css'


export function ProductDetailsPage () {

  const { counter, decrement, increment } = useCounter();
  const { addItem } = useContext( CartContext );
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);  
  

  useEffect(()=>{
    getProductById(params.id).then( p => setProduct(p) )
  },[params.id])


  const addProductCart = (item) => {

    if(counter <= 0) {
      alert('select a quantity')
      return;
    }

    item.quantity = counter;
    addItem(item);

  };

  const handleIncrement = (max) => {
    increment(max)
  };

  return (
    <div className={productDetailsStyles.container}>
      <div className={productDetailsStyles.card}>

        <div className={productDetailsStyles.image}>
          <img src={product?.img} alt={product?.name} />
        </div>

        <div className={productDetailsStyles.info}>
          <p>{product?.name}</p>
          <p>${parseFloat(product?.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
          <p className={productDetailsStyles.description}>{product?.description}</p>
        </div>

        <div className={productDetailsStyles.actions}>
          <div>

            <div className={productDetailsStyles.counter}>
              <button onClick={ decrement } >-</button>
              <div><span>{counter}</span></div>
              <button onClick={ () => handleIncrement(product?.inStock) } >+</button>
            </div>

            <button className={productDetailsStyles['add-cart']} onClick={ () => addProductCart(product)} >Agregar al carrito</button>
          </div>
          <button onClick={()=> navigate(-1)} className={productDetailsStyles['btn-back']}>Volver</button>
        </div>

        <div className={productDetailsStyles.footer}>
          <b>{product?.inStock} unidades disponibles</b>
        </div>

      </div>
    </div>
  )
}
