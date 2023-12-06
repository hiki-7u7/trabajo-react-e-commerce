import { useContext } from 'react';


import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import PropTypes from 'prop-types'


import { Button } from '../button';
import { CartContext, CartWidget } from '../../../cart'
import { Sidebar } from '../sidebar';
import { UiContext } from '../../context';
import { AuthContext } from '../../../auth/context';


import navbarStyles from './navbar.module.css';
import { OrderContext } from '../../../orders/context';


export const Navbar = ({categories}) => {
  
  const { showCartWidget, toggleShowCartWidget, items } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const { setOrders } = useContext(OrderContext);
  const { openSidebar, toggleSidebar } = useContext(UiContext);
  const navigate = useNavigate();

  

  const itemsNum = items.length <= 0 ? undefined : `${items.length}`;

  const handleLoginOrLogout = () => {
    if(user){
      logout();
      setOrders([])
      return;
    }
    navigate('/auth/login')
  }

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
            {categories.map(({description,id}) =>  (
              <NavLink onClick={ () => toggleShowCartWidget('close')} key={id} to={`/category/${id}`} className={({isActive}) => isActive ? navbarStyles['link-active'] : '' }>{description}</NavLink>
            ))}
            <NavLink onClick={ () => toggleShowCartWidget('close')} key={"cart"} to={`/cart`} className={({isActive}) => isActive ? navbarStyles['link-active'] : '' }>Cart</NavLink>
          </nav>

          <div className={navbarStyles.actions}>
            <div className={navbarStyles.cart}>
              <Button icon={<FaShoppingCart />} onClick={ () => toggleShowCartWidget('toggle')}/>
              {itemsNum && <span>{itemsNum}</span> }
            </div>
            <div className={navbarStyles.login}>
              <Button label={ user ? 'Logout' : 'Login' } onClick={handleLoginOrLogout}/>
            </div>
            {user && (
              <div className={navbarStyles.bars}>
                <Button icon={<FaBars />} onClick={()=> toggleSidebar() }/>
              </div>
            )}
          </div>
      </div>
      { showCartWidget && <CartWidget /> }
      { openSidebar &&  <Sidebar/>} 
    </>
  )
}

Navbar.propTypes = {
  categories: PropTypes.any
}