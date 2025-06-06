import { production } from "src/axios";
export const baseUrl = () => {
	return production ? "https://backend.seraphinwoodwall.com" : "http://localhost:1337";
};

export const constructQueryString = (fields) => {
	let str = "";
	fields.forEach((element, index) => {
		str += `populate[${index}]=${element}&`;
	});
	return str;
};

export const getProductPrice = (product) => {
	return product.Price.Euro.StripePrice
}
