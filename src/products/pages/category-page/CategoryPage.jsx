import { useParams } from 'react-router-dom';

import { Button } from '../../../common';
import { ProductList } from '../../components';

import categoryPageStyles from './category-page.module.css';
import { getProductsByCategoryId } from '../../../data/actions';


export const CategoryPage = () => {

  const params = useParams();

  return (
    <div className={categoryPageStyles.container}>
    
      <h2 className="title">Desde aquí podrás ver un listado de la categoría con el id {params.id}</h2>
    
      <Button mb={30} label='Ver artículos sin stock disponibles'/>

      <ProductList products={  getProductsByCategoryId(params.id) }/>

    </div>
  )
}
