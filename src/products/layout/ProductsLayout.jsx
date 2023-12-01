import { Outlet } from 'react-router-dom';

import { Navbar } from '../../common';

import productsLayoutStyles from './products-layout.module.css';

//TODO arregla eso del scroll y el padding que nose porque esta xd

export const ProductsLayout = () => {

  return (
    <>
      <Navbar />
      <div className={productsLayoutStyles['container-children']}>
        <Outlet />
      </div>
    </>
  )
};