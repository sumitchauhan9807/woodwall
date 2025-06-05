function Breadcrumb({ path }) {
	return (
		<div className="container mx-auto px-4 py-4">
			<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				{path.map((value, index) => {
					return (
						<>
							<a href="#" className="hover:text-primary">
								{value}
							</a>
							<span>/</span>
						</>
					);
				})}
			</div>
		</div>
	);
}
export default Breadcrumb;
