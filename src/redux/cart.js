import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

const cartSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			let currentProducts = current(state).products;
      let findProduct = null;
			if (currentProducts.length) {
				findProduct = currentProducts.find((p) => p.product.documentId == action.payload.documentId && p.product.bookType == action.payload.bookType);
			}

			if (findProduct) {
				state.products = state.products.map((product) => {
					if (product.product.documentId == findProduct.product.documentId && product.product.bookType == findProduct.product.bookType) {
						product.quantity = product.quantity + 1;
					}
					return product;
				});
				return;
			}
			state.products.push({
				product: action.payload,
				quantity: 1,
			});
		},
		removeProduct: (state, action) => {
      let currentProducts = current(state).products;

			let finalProducts  = currentProducts.filter((product) => {
        console.log(product)
				if (product.product.documentId == action.payload.documentId && product.product.bookType == action.payload.bookType) {
					return false
				}
				return true;
			});
      state.products = finalProducts
		},
    productQuantity: (state, action) => {
      state.products = state.products.map((product)=>{
        if (product.product.documentId == action.payload.documentId && product.product.bookType == action.payload.bookType) {
          let finalQuantity = product.quantity + action.payload.value
          if(finalQuantity > 0) {
					  product.quantity = finalQuantity
          }
				}
				return product
      })
    },
	},
});

export const { addProduct, removeProduct ,productQuantity } = cartSlice.actions;

export default cartSlice.reducer;
