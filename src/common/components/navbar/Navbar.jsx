import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

import { Button } from '../button';
import { CartContext, CartWidget } from '../../../cart'

import navbarStyles from './navbar.module.css';


const paths = [
  {
    path: '/',
    name: 'Inicio'
  },
  {
    path: '/category/1',
    name: 'Vehiculos'
  },
  {
    path: '/category/2',
    name: 'Electrònica'
  },
  {
    path: '/category/3',
    name: 'Libros'
  },
  {
    path: '/cart',
    name: 'Carrito'
  },
]

export const Navbar = () => {
  
  const { showCartWidget, toggleShowCartWidget, items } = useContext(CartContext);

  const itemsNum = items.length <= 0 ? undefined : `${items.length}`;


  return (
    <>
      <div className={navbarStyles.container}>
          <div className={navbarStyles.logo}>
            <NavLink to={'/'}>
              <img src="/react.svg" alt="logo" />
              <b>Compras Z</b>
            </NavLink>
          </div>

          <nav className={navbarStyles.nav}>
            {paths.map(({path,name}) =>  (
              <NavLink onClick={ () => toggleShowCartWidget('close')} key={name} to={path} className={({isActive}) => isActive ? navbarStyles['link-active'] : '' }>{name}</NavLink>
            ))}
          </nav>

          <div className={navbarStyles.actions}>
            <div className={navbarStyles.cart}>
              <Button icon={<FaShoppingCart />} onClick={ () => toggleShowCartWidget('toggle')}/>
               {itemsNum && <span>{itemsNum}</span> }
            </div>
            <div className={navbarStyles.login}>
              <Button label='Login' />
            </div>
          </div>
      </div>
      { showCartWidget && <CartWidget /> }
    </>
  )
}
