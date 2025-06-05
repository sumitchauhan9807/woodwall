import { useEffect, useState } from "react";

import { constructQueryString } from "src/helpers";
import { PageSkeleton } from "src/components/basic/Skeletons";
import { baseUrl } from "src/helpers";

import useAxios from "src/Hooks/uaeAxios";

let qs = constructQueryString(["Avatar","Price.Euro"]);
function Books() {
	const [data, setData] = useState([]);

	const { response, loading, error } = useAxios({
		method: "get",
		url: `books?${qs}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response.data);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.length) return;
	console.log(data);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">SHOP</h2>
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((book,index)=>{
            return <div key={index}><ProductTile book={book}/></div> 
          })}
					{/* <ProductTile/>
					<ProductTile/>
					<ProductTile/>
					<ProductTile/> */}

					{/* More products... */}
				</div>
			</div>
		</div>
	);
}

const ProductTile = ({book}) => {
  let data = book
	return (
		<div className="group relative">
			<img src={baseUrl() +  data.Avatar.url} alt="Front of men's Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<a href="#">
							<span aria-hidden="true" className="absolute inset-0" />
							{data.Title}
						</a>
					</h3>
					<p className="mt-1 text-sm text-gray-500">{data.SubTitle}</p>
				</div>
				<p className="text-sm font-medium text-gray-900">$ {data.Price.Euro.StripePrice}</p>
			</div>
		</div>
	);
};

export default Books;
