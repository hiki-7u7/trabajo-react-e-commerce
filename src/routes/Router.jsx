import { Route, Routes } from 'react-router-dom';

import { ProductsLayout } from '../products/layout/ProductsLayout';
import { NotFoundPage } from '../common';
import { CategoryPage, HomePage, ProductDetailsPage } from '../products/pages';
import { CartPage } from '../cart';

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<ProductsLayout />} >
        <Route path={"/"} element={ <HomePage /> }/>
        <Route path={"category/:id"} element={ <CategoryPage /> }/>
        <Route path={"item/:id"} element={ <ProductDetailsPage /> }/>
        <Route path={"/cart"} element={ <CartPage /> }/>
        <Route path={"*"} element={ <NotFoundPage /> }/>
      </Route>
    </Routes>
  )
}

export default Router