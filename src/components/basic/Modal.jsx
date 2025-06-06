import Animate from "src/components/basic/Animate";

function Modal({ children, hidden, setHidden }) {
	return (
		<div className={`relative z-10 ${hidden ? "hidden" : ""}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<Animate
						config={{
							animateIn: "bounceInDown",
						}}
					>
						<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
							<button className="absolute top-2 right-4" onClick={() => setHidden(true)}>
								<svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
								</svg>
							</button>

							{children}
						</div>
					</Animate>
				</div>
			</div>
		</div>
	);
}

export default Modal;
