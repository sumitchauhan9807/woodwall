import { useState, useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { addProduct ,removeProduct ,productQuantity} from 'src/redux/cart'
import { getProductPrice } from 'src/helpers'
import { production } from "src/axios";

const useCart = () => {
	const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cart);

	const addToCart = ({product,bookType}) => {
    dispatch(addProduct({
      documentId:product.documentId,
      Title:product.Title,
      SubTitle:product.SubTitle,
      avatar:product.Avatar.url,
      Price:getProductPrice(product),
      bookType:bookType
    }))
  }

  const removeFromCart = ({documentId,bookType}) => {
    dispatch(removeProduct({
      documentId:documentId,
      bookType:bookType
    }))
  }

  const changeProductQuantity = ({documentId,bookType,value}) => {
    dispatch(productQuantity({
      documentId:documentId,
      bookType:bookType,
      value:value
    }))
  }

  const getCartTotal = () => {
    let total = cartData.products.reduce((accumulator,currentValue)=>{
      let productPrice =  Number(currentValue.product.Price)
      productPrice = productPrice * currentValue.quantity
      return accumulator + productPrice
    },0)
    return total.toFixed(2)
  }

	return { addToCart ,removeFromCart ,changeProductQuantity ,getCartTotal };
};



export default useCart;
