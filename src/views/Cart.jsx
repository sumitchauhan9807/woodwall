import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { baseUrl } from "src/helpers";
import useCart from "src/Hooks/useCart";

function Cart() {
	const cartData = useSelector((state) => state.cart);
	const { getCartTotal } = useCart();

	return (
		<div className="max-w-5xl max-lg:max-w-2xl mx-auto p-4">
			<h1 className="text-xl font-semibold text-slate-900">Shopping Cart</h1>
			<div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
				<div className="lg:col-span-2 space-y-6">
					{cartData.products.map((product, index) => {
						return (
							<div key={index}>
								<CartItem product={product} />
							</div>
						);
					})}
				</div>
				<div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
					<ul className="text-slate-500 font-medium space-y-4">
						<li className="flex flex-wrap gap-4 text-sm">
							Subtotal <span className="ml-auto font-semibold text-slate-900">$ {getCartTotal()}</span>
						</li>
						<li className="flex flex-wrap gap-4 text-sm">
							Shipping <span className="ml-auto font-semibold text-slate-900">$0.00</span>
						</li>
						<li className="flex flex-wrap gap-4 text-sm">
							Tax <span className="ml-auto font-semibold text-slate-900">$0.00</span>
						</li>
						<hr className="border-slate-300" />
						<li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
							Total <span className="ml-auto">$ {getCartTotal()}</span>
						</li>
					</ul>
					<div className="mt-8 space-y-4">
						<button type="button" className="ttext-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer">
							Buy Now
						</button>
						<Link to="/books" type="button" className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer text-center">
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

const CartItem = ({ product }) => {
	const { removeFromCart, changeProductQuantity } = useCart();
	let productData = product.product;
	return (
		<div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
			<div className="flex gap-6 sm:gap-4 max-sm:flex-col">
				<div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
					<img src={baseUrl() + productData.avatar} className="w-full h-full object-contain" />
				</div>
				<div className="flex flex-col gap-4">
					<div>
						<h3 className="text-sm sm:text-base font-semibold text-slate-900">{productData.Title}</h3>
						<p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">{productData.SubTitle}</p>
						<p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">{productData.bookType}</p>
					</div>
					<div className="mt-auto">
						<h3 className="text-sm font-semibold text-slate-900">$ {productData.Price}</h3>
					</div>
				</div>
			</div>
			<div className="ml-auto flex flex-col">
				<div className="flex items-start gap-4 justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-pink-600 inline-block" viewBox="0 0 64 64">
						<path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
					</svg>
					<svg onClick={() => removeFromCart({ documentId: productData.documentId, bookType: productData.bookType })} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block" viewBox="0 0 24 24">
						<path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" />
						<path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" />
					</svg>
				</div>
				<div className="flex items-center gap-3 mt-auto">
					<button onClick={() => changeProductQuantity({ documentId: productData.documentId, bookType: productData.bookType , value:-1 })} type="button" className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-2 " viewBox="0 0 124 124">
							<path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
						</svg>
					</button>
					<span className="font-semibold text-base leading-[18px]">{product.quantity}</span>
					<button onClick={() => changeProductQuantity({ documentId: productData.documentId, bookType: productData.bookType , value:1 })} type="button" className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-2 " viewBox="0 0 42 42">
							<path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};
export default Cart;
