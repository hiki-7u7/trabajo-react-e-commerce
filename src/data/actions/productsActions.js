import { products } from "../products";

export const getProductsByCategoryId = (id) => {
    
    if( typeof id !== 'number' ) {
        id = +id
    }

    const data = products.filter(  e => e.categoryId === id )
    return data
}

export const getProductById = (id) => {
    
    if( typeof id !== 'number' ) {
        id = +id
    }

    const data =  products.find( e => e.id === id )
    return data
}