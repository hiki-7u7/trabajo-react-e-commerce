import { useContext } from 'react';

import { Button } from '../../../common';
import { ProductList } from '../../components';
import { ProductContext } from '../../context';

import homePageStyles from './home-page.module.css';

export const HomePage = () => {

  const {products} = useContext(ProductContext)

  return (
    <div className={homePageStyles.container}>
      
      <h2 className="title">Desde aquí podrás ver un listado de todas las categorías</h2>
      
      <Button mb={30} label='Ver artículos sin stock disponibles'/>

      <ProductList products={products}/>

    </div>
  )
}
