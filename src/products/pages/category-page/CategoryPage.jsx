import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../../../common';
import { ProductList } from '../../components';
import { getProductsByCategoryId } from '../../helpers';

import categoryPageStyles from './category-page.module.css';


export const CategoryPage = () => {

  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(()=>{
    getProductsByCategoryId(params.id).then( prods => setProducts(prods) )
  },[params.id])

  return (
    <div className={categoryPageStyles.container}>
    
      <h2 className="title">Desde aquí podrás ver un listado de la categoría con el id {params.id}</h2>
    
      <Button mb={30} label='Ver artículos sin stock disponibles'/>

      <ProductList products={products}/>

    </div>
  )
}
