import { useEffect, useState } from "react";
import Banner from "src/assets/images/banner.jpeg";
import e1 from "src/assets/images/e1.jpeg";
import e2 from "src/assets/images/e2.jpeg";
import { constructQueryString } from "src/helpers";
import { PageSkeleton } from 'src/components/basic/Skeletons'
import { baseUrl } from "src/helpers";

import useAxios from "src/Hooks/uaeAxios";

let qs = constructQueryString([
	"BannerImage",
	"SectionOne.Image1",
	"SectionOne.Image2",
	"SectionOne.Image3",

	// "Description.ProductSpecs",
	// "Description.Image",
	// "ProductSpecs",
	// "ProductSpecs.ProductSpecs",
	// "ProductSpecs.Image",
	// "DeployingSteps",
	// "DeployingSteps.Steps",
	// "DeployingSteps.Image"
]);

function Home() {
  const [data, setData] = useState([]);

	const { response, loading, error } = useAxios({
		method: "get",
		url: `home?${qs}`,
	});
  useEffect(() => {
    if (response !== null) {
      setData(response.data);
    }
  }, [response]);
  if (loading) return <PageSkeleton />
  if (!data.BannerImage) return
  console.log(data)
	return (
		<>
			{/* ====== Navbar Section End */}
			{/* ====== Hero Section Start */}
			<div className="relative overflow-hidden bg-white dark:bg-dark">
				<div style={{ height: "950px" }} className="relative z-10 pb-20 pt-[150px] lg:pb-[120px] lg:pt-[210px]">
					<img src={baseUrl() +  data.BannerImage.url} alt="image" className="absolute top-0 left-0 z-[-1] h-full w-full" />
					{/* <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                  <div className="max-w-[570px] bg-white dark:bg-dark-2 py-10 px-8 sm:p-12 md:p-[60px]">
                    <span className="block mb-3 text-base font-medium text-primary">
                      Your Business Revenue to The Moon
                    </span>
                    <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white md:text-4xl">
                      Corporate &amp; Business Site Template By TailGrids.
                    </h1>
                    <p className="mb-8 text-base font-medium text-body-color dark:text-dark-6 lg:mb-10">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="javascript:void(0)" className="py-3 text-base font-medium text-white transition bg-primary px-7 hover:bg-blue-dark">
                        Discover More
                      </a>
                      <a href="javascript:void(0)" className="inline-flex items-center px-6 py-3 text-base font-medium bg-white dark:bg-dark-2 shadow-1 dark:shadow-none text-dark dark:text-white hover:text-primary dark:hover:text-primary">
                        Explore Services
                        <span className="ml-2">
                          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                            <path d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z" fill />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
				</div>
			</div>
			{/* ====== Hero Section End */}
			{/* ====== Services Section Start */}
			<section className="overflow-hidden dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
				<div className="container mx-auto">
					<div className="flex flex-wrap items-center justify-between -mx-4">
						<div className="w-full px-4 lg:w-6/12">
							<div className="flex items-center -mx-3 sm:-mx-4">
								<div className="w-full px-3 sm:px-4 xl:w-1/2">
									<div className="py-3 sm:py-4">
										<img src={baseUrl()+  data.SectionOne.Image1.url} alt="" className="w-full rounded-2xl" />
									</div>
									<div className="py-3 sm:py-4">
										<img src={baseUrl()+  data.SectionOne.Image2.url} alt="" className="w-full rounded-2xl" />
									</div>
								</div>
								<div className="w-full px-3 sm:px-4 xl:w-1/2">
									<div className="relative z-10 my-4">
										<img src={baseUrl()+  data.SectionOne.Image3.url} alt="" className="w-full rounded-2xl" />
										<span className="absolute -right-7 -bottom-7 z-[-1]">
											<svg width={134} height={106} viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="1.66667" cy={104} r="1.66667" transform="rotate(-90 1.66667 104)" fill="#3056D3" />
												<circle cx="16.3333" cy={104} r="1.66667" transform="rotate(-90 16.3333 104)" fill="#3056D3" />
												<circle cx={31} cy={104} r="1.66667" transform="rotate(-90 31 104)" fill="#3056D3" />
												<circle cx="45.6667" cy={104} r="1.66667" transform="rotate(-90 45.6667 104)" fill="#3056D3" />
												<circle cx="60.3334" cy={104} r="1.66667" transform="rotate(-90 60.3334 104)" fill="#3056D3" />
												<circle cx="88.6667" cy={104} r="1.66667" transform="rotate(-90 88.6667 104)" fill="#3056D3" />
												<circle cx="117.667" cy={104} r="1.66667" transform="rotate(-90 117.667 104)" fill="#3056D3" />
												<circle cx="74.6667" cy={104} r="1.66667" transform="rotate(-90 74.6667 104)" fill="#3056D3" />
												<circle cx={103} cy={104} r="1.66667" transform="rotate(-90 103 104)" fill="#3056D3" />
												<circle cx={132} cy={104} r="1.66667" transform="rotate(-90 132 104)" fill="#3056D3" />
												<circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="#3056D3" />
												<circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="#3056D3" />
												<circle cx={31} cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="#3056D3" />
												<circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="#3056D3" />
												<circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="#3056D3" />
												<circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="#3056D3" />
												<circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="#3056D3" />
												<circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="#3056D3" />
												<circle cx={103} cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="#3056D3" />
												<circle cx={132} cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="#3056D3" />
												<circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="#3056D3" />
												<circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="#3056D3" />
												<circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="#3056D3" />
												<circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="#3056D3" />
												<circle cx={31} cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="#3056D3" />
												<circle cx={31} cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="#3056D3" />
												<circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="#3056D3" />
												<circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="#3056D3" />
												<circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="#3056D3" />
												<circle cx="60.3333" cy="30.9998" r="1.66667" transform="rotate(-90 60.3333 30.9998)" fill="#3056D3" />
												<circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="#3056D3" />
												<circle cx="88.6667" cy="30.9998" r="1.66667" transform="rotate(-90 88.6667 30.9998)" fill="#3056D3" />
												<circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="#3056D3" />
												<circle cx="117.667" cy="30.9998" r="1.66667" transform="rotate(-90 117.667 30.9998)" fill="#3056D3" />
												<circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="#3056D3" />
												<circle cx="74.6667" cy="30.9998" r="1.66667" transform="rotate(-90 74.6667 30.9998)" fill="#3056D3" />
												<circle cx={103} cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="#3056D3" />
												<circle cx={103} cy="30.9998" r="1.66667" transform="rotate(-90 103 30.9998)" fill="#3056D3" />
												<circle cx={132} cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="#3056D3" />
												<circle cx={132} cy="30.9998" r="1.66667" transform="rotate(-90 132 30.9998)" fill="#3056D3" />
												<circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="#3056D3" />
												<circle cx="1.66667" cy="16.3333" r="1.66667" transform="rotate(-90 1.66667 16.3333)" fill="#3056D3" />
												<circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="#3056D3" />
												<circle cx="16.3333" cy="16.3333" r="1.66667" transform="rotate(-90 16.3333 16.3333)" fill="#3056D3" />
												<circle cx={31} cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="#3056D3" />
												<circle cx={31} cy="16.3333" r="1.66667" transform="rotate(-90 31 16.3333)" fill="#3056D3" />
												<circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="#3056D3" />
												<circle cx="45.6667" cy="16.3333" r="1.66667" transform="rotate(-90 45.6667 16.3333)" fill="#3056D3" />
												<circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="#3056D3" />
												<circle cx="60.3333" cy="16.3333" r="1.66667" transform="rotate(-90 60.3333 16.3333)" fill="#3056D3" />
												<circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="#3056D3" />
												<circle cx="88.6667" cy="16.3333" r="1.66667" transform="rotate(-90 88.6667 16.3333)" fill="#3056D3" />
												<circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="#3056D3" />
												<circle cx="117.667" cy="16.3333" r="1.66667" transform="rotate(-90 117.667 16.3333)" fill="#3056D3" />
												<circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="#3056D3" />
												<circle cx="74.6667" cy="16.3333" r="1.66667" transform="rotate(-90 74.6667 16.3333)" fill="#3056D3" />
												<circle cx={103} cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="#3056D3" />
												<circle cx={103} cy="16.3333" r="1.66667" transform="rotate(-90 103 16.3333)" fill="#3056D3" />
												<circle cx={132} cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="#3056D3" />
												<circle cx={132} cy="16.3333" r="1.66667" transform="rotate(-90 132 16.3333)" fill="#3056D3" />
												<circle cx="1.66667" cy="45.3333" r="1.66667" transform="rotate(-90 1.66667 45.3333)" fill="#3056D3" />
												<circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="#3056D3" />
												<circle cx="16.3333" cy="45.3333" r="1.66667" transform="rotate(-90 16.3333 45.3333)" fill="#3056D3" />
												<circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="#3056D3" />
												<circle cx={31} cy="45.3333" r="1.66667" transform="rotate(-90 31 45.3333)" fill="#3056D3" />
												<circle cx={31} cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="#3056D3" />
												<circle cx="45.6667" cy="45.3333" r="1.66667" transform="rotate(-90 45.6667 45.3333)" fill="#3056D3" />
												<circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="#3056D3" />
												<circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="#3056D3" />
												<circle cx="60.3333" cy="1.66683" r="1.66667" transform="rotate(-90 60.3333 1.66683)" fill="#3056D3" />
												<circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="#3056D3" />
												<circle cx="88.6667" cy="1.66683" r="1.66667" transform="rotate(-90 88.6667 1.66683)" fill="#3056D3" />
												<circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="#3056D3" />
												<circle cx="117.667" cy="1.66683" r="1.66667" transform="rotate(-90 117.667 1.66683)" fill="#3056D3" />
												<circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="#3056D3" />
												<circle cx="74.6667" cy="1.66683" r="1.66667" transform="rotate(-90 74.6667 1.66683)" fill="#3056D3" />
												<circle cx={103} cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="#3056D3" />
												<circle cx={103} cy="1.66683" r="1.66667" transform="rotate(-90 103 1.66683)" fill="#3056D3" />
												<circle cx={132} cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="#3056D3" />
												<circle cx={132} cy="1.66683" r="1.66667" transform="rotate(-90 132 1.66683)" fill="#3056D3" />
											</svg>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
							<div className="mt-10 lg:mt-0">
								{/* <span className="block mb-4 text-lg font-semibold text-primary">Why Choose Us</span> */}
								<h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">{data.SectionOne.Headline}</h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6" 	dangerouslySetInnerHTML={{ __html: data.SectionOne.Content.replace(/\n/g,"<br />") }}></p>
								{/* <p className="mb-5 text-base text-body-color dark:text-dark-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
								<p className="mb-8 text-base text-body-color dark:text-dark-6">A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.</p> */}
								<a href="javascript:void(0)" className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90">
									Get Started
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Services Section End */}
			{/* ====== Services Section Start */}
			<section className="bg-tg-bg dark:bg-dark-2 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
								<span className="block mb-2 text-lg font-semibold text-primary">Our Services</span>
								<h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">What We Offer</h2>
								<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="mb-9 rounded-[20px] bg-white dark:bg-dark p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
								<div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
									<svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Refreshing Design</h4>
								<p className="text-body-color dark:text-dark-6">We dejoy working with discerning clients, people for whom qualuty, service, integrity &amp; aesthetics.</p>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="mb-9 rounded-[20px] bg-white dark:bg-dark p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
								<div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
									<svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Based on Tailwind CSS</h4>
								<p className="text-body-color dark:text-dark-6">We dejoy working with discerning clients, people for whom qualuty, service, integrity &amp; aesthetics.</p>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="mb-9 rounded-[20px] bg-white dark:bg-dark p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
								<div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
									<svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z" fill="white" />
										<path d="M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z" fill="white" />
										<path d="M12.2063 19.8564H5.0625C3.15 19.8564 1.575 21.4314 1.575 23.3439V30.4877C1.575 32.4002 3.15 33.9752 5.0625 33.9752H12.2063C14.1188 33.9752 15.6938 32.4002 15.6938 30.4877V23.4002C15.75 21.4314 14.175 19.8564 12.2063 19.8564ZM13.2188 30.5439C13.2188 31.1064 12.7688 31.5564 12.2063 31.5564H5.0625C4.5 31.5564 4.05 31.1064 4.05 30.5439V23.4002C4.05 22.8377 4.5 22.3877 5.0625 22.3877H12.2063C12.7688 22.3877 13.2188 22.8377 13.2188 23.4002V30.5439Z" fill="white" />
										<path
											d="M30.9375 19.8564H23.7937C21.8812 19.8564 20.3062 21.4314 20.3062 23.3439V30.4877C20.3062 32.4002 21.8812 33.9752 23.7937 33.9752H30.9375C32.85 33.9752 34.425 32.4002 34.425 30.4877V23.4002C34.425 21.4314 32.85 19.8564 30.9375 19.8564ZM31.95 30.5439C31.95 31.1064 31.5 31.5564 30.9375 31.5564H23.7937C23.2312 31.5564 22.7812 31.1064 22.7812 30.5439V23.4002C22.7812 22.8377 23.2312 22.3877 23.7937 22.3877H30.9375C31.5 22.3877 31.95 22.8377 31.95 23.4002V30.5439Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">100+ Components</h4>
								<p className="text-body-color dark:text-dark-6">We dejoy working with discerning clients, people for whom qualuty, service, integrity &amp; aesthetics.</p>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="mb-9 rounded-[20px] bg-white dark:bg-dark p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
								<div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
									<svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
											fill="white"
										/>
										<path d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z" fill="white" />
									</svg>
								</div>
								<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Speed Optimized</h4>
								<p className="text-body-color dark:text-dark-6">We dejoy working with discerning clients, people for whom qualuty, service, integrity &amp; aesthetics.</p>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="mb-9 rounded-[20px] bg-white dark:bg-dark p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
								<div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
									<svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M30.0937 21.8251L29.6437 21.6001L30.2062 21.2626C31.3312 20.5876 31.95 19.4063 31.95 18.0563C31.95 16.7626 31.2187 15.5813 30.0937 14.9063L28.9125 14.2313L30.2062 13.4438C31.3312 12.7688 31.95 11.5876 31.95 10.2376C31.95 8.94385 31.2187 7.7626 30.0937 7.14385L19.9125 1.4626C18.7875 0.843848 17.3812 0.843848 16.3125 1.4626L5.84999 7.5376C4.72499 8.2126 4.04999 9.39385 4.04999 10.6876C4.04999 11.9813 4.72499 13.2188 5.84999 13.8376L7.08749 14.5688L5.84999 15.3001C4.72499 15.9751 4.04999 17.1563 4.04999 18.4501C4.04999 19.7438 4.72499 20.9813 5.84999 21.6001L6.35624 21.8813L5.84999 22.1626C4.72499 22.8376 3.99374 24.0188 3.99374 25.3126C3.99374 26.6626 4.66874 27.8438 5.79374 28.4626L16.1437 34.4813C16.7062 34.8188 17.325 34.9876 18 34.9876C18.675 34.9876 19.35 34.8188 19.9125 34.4251L30.2625 28.1251C31.3875 27.4501 32.0062 26.2688 32.0062 24.9188C31.95 23.6251 31.275 22.4438 30.0937 21.8251ZM6.52499 10.6876C6.52499 10.5188 6.58124 10.0126 7.08749 9.73135L17.55 3.65635C17.8875 3.43135 18.3375 3.43135 18.675 3.65635L28.9125 9.3376C29.4187 9.61885 29.475 10.1251 29.475 10.2938C29.475 10.4626 29.4187 10.9688 28.9125 11.3063L18.6187 17.6626C18.2812 17.8876 17.8312 17.8876 17.4375 17.6626L7.08749 11.6438C6.58124 11.3626 6.52499 10.8563 6.52499 10.6876ZM7.08749 17.4938L9.56249 16.0313L16.1437 19.8563C16.7062 20.1938 17.325 20.3626 18 20.3626C18.675 20.3626 19.35 20.1938 19.9125 19.8001L26.4375 15.8063L28.8562 17.1563C29.3625 17.4376 29.4187 17.9438 29.4187 18.1126C29.4187 18.2813 29.3625 18.7876 28.8562 19.1251L18.6187 25.4251C18.2812 25.6501 17.8312 25.6501 17.4375 25.4251L7.08749 19.4063C6.58124 19.1251 6.52499 18.6188 6.52499 18.4501C6.52499 18.2813 6.58124 17.7751 7.08749 17.4938ZM28.9125 25.9876L18.6187 32.3438C18.2812 32.5688 17.8312 32.5688 17.4375 32.3438L7.08749 26.3251C6.58124 26.0438 6.52499 25.5376 6.52499 25.3688C6.52499 25.2001 6.58124 24.6938 7.08749 24.4126L8.83124 23.4001L16.2 27.6751C16.7625 28.0126 17.3812 28.1813 18.0562 28.1813C18.7312 28.1813 19.4062 28.0126 19.9687 27.6188L27.225 23.1751L28.9125 24.0751C29.4187 24.3563 29.475 24.8626 29.475 25.0313C29.475 25.2001 29.4187 25.7063 28.9125 25.9876Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Fully Customizable</h4>
								<p className="text-body-color dark:text-dark-6">We dejoy working with discerning clients, people for whom qualuty, service, integrity &amp; aesthetics.</p>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="mb-9 rounded-[20px] bg-white dark:bg-dark p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
								<div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
									<svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.725 16.3124C4.89375 16.3124 5.11875 16.2562 5.2875 16.1999L11.5312 14.0062C12.2062 13.7812 12.5437 13.0499 12.3187 12.3749C12.0937 11.6999 11.3625 11.3624 10.6875 11.5874L6.80625 12.9374C8.6625 8.0999 13.3875 4.8374 18.7875 4.8374C24.6938 4.8374 29.8125 8.7749 31.275 14.3999C31.4437 15.0749 32.1187 15.4687 32.7937 15.2999C33.4687 15.1312 33.8625 14.4562 33.6938 13.7812C31.95 7.03115 25.8187 2.30615 18.7312 2.30615C12.4312 2.30615 6.8625 6.01865 4.55625 11.5874L3.375 8.2124C3.15 7.5374 2.41875 7.1999 1.74375 7.4249C1.06875 7.6499 0.73125 8.38115 0.95625 9.05615L3.09375 15.1874C3.43125 15.9187 4.05 16.3124 4.725 16.3124Z"
											fill="white"
										/>
										<path
											d="M34.9312 27.9562L32.625 21.9375C32.4562 21.5437 32.175 21.2062 31.7812 21.0375C31.3875 20.8687 30.9375 20.8687 30.5437 21.0375L24.3562 23.3999C23.6812 23.6249 23.4 24.3562 23.625 25.0312C23.85 25.7062 24.5813 25.9875 25.2563 25.7625L29.1375 24.3C26.8875 28.4062 22.5 31.1062 17.6062 31.1062C12.0375 31.1062 7.14375 27.6187 5.4 22.4437C5.175 21.7687 4.44375 21.4312 3.825 21.6562C3.15 21.8812 2.8125 22.6124 3.0375 23.2312C5.11875 29.4187 10.9687 33.5812 17.6062 33.5812C23.4 33.5812 28.6312 30.375 31.275 25.425L32.5688 28.8562C32.7375 29.3625 33.2437 29.6437 33.75 29.6437C33.9187 29.6437 34.0312 29.6437 34.2 29.5312C34.875 29.3625 35.1562 28.6312 34.9312 27.9562Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Regular Updates</h4>
								<p className="text-body-color dark:text-dark-6">We dejoy working with discerning clients, people for whom qualuty, service, integrity &amp; aesthetics.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Services Section End */}
			{/* ====== Portfolio Section Start */}
			<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center">
								<span className="block mb-2 text-lg font-semibold text-primary">Our Portfolio</span>
								<h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">Our Recent Projects</h2>
								<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center -mx-4">
						<div className="w-full px-4">
							<ul className="flex flex-wrap justify-center mb-12 space-x-1">
								<li className="mb-1">
									<button className="inline-block px-5 py-2 text-base font-semibold text-center transition rounded-lg md:py-3 lg:px-8">All Projects</button>
								</li>
								<li className="mb-1">
									<button className="inline-block px-5 py-2 text-base font-semibold text-center transition rounded-lg md:py-3 lg:px-8">Branding</button>
								</li>
								<li className="mb-1">
									<button className="inline-block px-5 py-2 text-base font-semibold text-center transition rounded-lg md:py-3 lg:px-8">Design</button>
								</li>
								<li className="mb-1">
									<button className="inline-block px-5 py-2 text-base font-semibold text-center transition rounded-lg md:py-3 lg:px-8">Marketing</button>
								</li>
								<li className="mb-1">
									<button className="inline-block px-5 py-2 text-base font-semibold text-center transition rounded-lg md:py-3 lg:px-8">Development</button>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4 md:w-1/2 xl:w-1/3">
							<div className="relative mb-12">
								<div className="overflow-hidden rounded-[10px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/portfolio/portfolio-01/image-01.jpg" alt="portfolio" className="w-full" />
								</div>
								<div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
									<span className="block mb-2 text-sm font-medium text-primary">Branding</span>
									<h3 className="mb-5 text-xl font-bold text-dark dark:text-white">Branding Design</h3>
									<a href="javascript:void(0)" className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white dark:hover:text-white dark:hover:border-primary">
										View Details
									</a>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/3">
							<div className="relative mb-12">
								<div className="overflow-hidden rounded-[10px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/portfolio/portfolio-01/image-02.jpg" alt="portfolio" className="w-full" />
								</div>
								<div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
									<span className="block mb-2 text-sm font-medium text-primary">Marketing</span>
									<h3 className="mb-5 text-xl font-bold text-dark dark:text-white">Best Marketing tips</h3>
									<a href="javascript:void(0)" className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white dark:hover:text-white dark:hover:border-primary">
										View Details
									</a>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/3">
							<div className="relative mb-12">
								<div className="overflow-hidden rounded-[10px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/portfolio/portfolio-01/image-03.jpg" alt="portfolio" className="w-full" />
								</div>
								<div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
									<span className="block mb-2 text-sm font-medium text-primary">Development</span>
									<h3 className="mb-5 text-xl font-bold text-dark dark:text-white">Web Design Trend</h3>
									<a href="javascript:void(0)" className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white dark:hover:text-white dark:hover:border-primary">
										View Details
									</a>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/3">
							<div className="relative mb-12">
								<div className="overflow-hidden rounded-[10px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/portfolio/portfolio-01/image-04.jpg" alt="portfolio" className="w-full" />
								</div>
								<div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
									<span className="block mb-2 text-sm font-medium text-primary">Design</span>
									<h3 className="mb-5 text-xl font-bold text-dark dark:text-white">Business Card Design</h3>
									<a href="javascript:void(0)" className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white dark:hover:text-white dark:hover:border-primary">
										View Details
									</a>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/3">
							<div className="relative mb-12">
								<div className="overflow-hidden rounded-[10px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/portfolio/portfolio-01/image-05.jpg" alt="portfolio" className="w-full" />
								</div>
								<div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
									<span className="block mb-2 text-sm font-medium text-primary">Marketing</span>
									<h3 className="mb-5 text-xl font-bold text-dark dark:text-white">Digital marketing</h3>
									<a href="javascript:void(0)" className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white dark:hover:text-white dark:hover:border-primary">
										View Details
									</a>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/3">
							<div className="relative mb-12">
								<div className="overflow-hidden rounded-[10px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/portfolio/portfolio-01/image-06.jpg" alt="portfolio" className="w-full" />
								</div>
								<div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
									<span className="block mb-2 text-sm font-medium text-primary">Branding</span>
									<h3 className="mb-5 text-xl font-bold text-dark dark:text-white">Creative Agency</h3>
									<a href="javascript:void(0)" className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white dark:hover:text-white dark:hover:border-primary">
										View Details
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Portfolio Section End */}
			{/* ====== Team Section Start */}
			<section className="bg-tg-bg dark:bg-dark-2 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center">
								<span className="block mb-2 text-lg font-semibold text-primary">Our Team</span>
								<h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">Our Awesome Team</h2>
								<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center -mx-4">
						<div className="w-full px-4 md:w-1/2 xl:w-1/4">
							<div className="mx-auto mb-10 w-full max-w-[370px]">
								<div className="relative overflow-hidden rounded-lg">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/team/team-01/image-01.jpg" alt="image" className="w-full" />
									<div className="absolute left-0 w-full text-center bottom-5">
										<div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg dark:bg-dark-2">
											<h3 className="text-base font-semibold text-dark dark:text-white">Coriss Ambady</h3>
											<p className="text-xs text-body-color dark:text-dark-6">Web Developer</p>
											<div>
												<span className="absolute bottom-0 left-0">
													<svg width={61} height={30} viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx={16} cy={45} r={45} fill="#13C296" fillOpacity="0.11" />
													</svg>
												</span>
												<span className="absolute top-0 right-0">
													<svg width={20} height={25} viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx="0.706257" cy="24.3533" r="0.646687" transform="rotate(-90 0.706257 24.3533)" fill="#3056D3" />
														<circle cx="6.39669" cy="24.3533" r="0.646687" transform="rotate(-90 6.39669 24.3533)" fill="#3056D3" />
														<circle cx="12.0881" cy="24.3533" r="0.646687" transform="rotate(-90 12.0881 24.3533)" fill="#3056D3" />
														<circle cx="17.7785" cy="24.3533" r="0.646687" transform="rotate(-90 17.7785 24.3533)" fill="#3056D3" />
														<circle cx="0.706257" cy="18.6624" r="0.646687" transform="rotate(-90 0.706257 18.6624)" fill="#3056D3" />
														<circle cx="6.39669" cy="18.6624" r="0.646687" transform="rotate(-90 6.39669 18.6624)" fill="#3056D3" />
														<circle cx="12.0881" cy="18.6624" r="0.646687" transform="rotate(-90 12.0881 18.6624)" fill="#3056D3" />
														<circle cx="17.7785" cy="18.6624" r="0.646687" transform="rotate(-90 17.7785 18.6624)" fill="#3056D3" />
														<circle cx="0.706257" cy="12.9717" r="0.646687" transform="rotate(-90 0.706257 12.9717)" fill="#3056D3" />
														<circle cx="6.39669" cy="12.9717" r="0.646687" transform="rotate(-90 6.39669 12.9717)" fill="#3056D3" />
														<circle cx="12.0881" cy="12.9717" r="0.646687" transform="rotate(-90 12.0881 12.9717)" fill="#3056D3" />
														<circle cx="17.7785" cy="12.9717" r="0.646687" transform="rotate(-90 17.7785 12.9717)" fill="#3056D3" />
														<circle cx="0.706257" cy="7.28077" r="0.646687" transform="rotate(-90 0.706257 7.28077)" fill="#3056D3" />
														<circle cx="6.39669" cy="7.28077" r="0.646687" transform="rotate(-90 6.39669 7.28077)" fill="#3056D3" />
														<circle cx="12.0881" cy="7.28077" r="0.646687" transform="rotate(-90 12.0881 7.28077)" fill="#3056D3" />
														<circle cx="17.7785" cy="7.28077" r="0.646687" transform="rotate(-90 17.7785 7.28077)" fill="#3056D3" />
														<circle cx="0.706257" cy="1.58989" r="0.646687" transform="rotate(-90 0.706257 1.58989)" fill="#3056D3" />
														<circle cx="6.39669" cy="1.58989" r="0.646687" transform="rotate(-90 6.39669 1.58989)" fill="#3056D3" />
														<circle cx="12.0881" cy="1.58989" r="0.646687" transform="rotate(-90 12.0881 1.58989)" fill="#3056D3" />
														<circle cx="17.7785" cy="1.58989" r="0.646687" transform="rotate(-90 17.7785 1.58989)" fill="#3056D3" />
													</svg>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/4">
							<div className="mx-auto mb-10 w-full max-w-[370px]">
								<div className="relative overflow-hidden rounded-lg">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/team/team-01/image-02.jpg" alt="image" className="w-full" />
									<div className="absolute left-0 w-full text-center bottom-5">
										<div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg dark:bg-dark-2">
											<h3 className="text-base font-semibold text-dark dark:text-white">Glorius Cristian</h3>
											<p className="text-xs text-body-color dark:text-dark-6">App Developer</p>
											<div>
												<span className="absolute bottom-0 left-0">
													<svg width={61} height={30} viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx={16} cy={45} r={45} fill="#13C296" fillOpacity="0.11" />
													</svg>
												</span>
												<span className="absolute top-0 right-0">
													<svg width={20} height={25} viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx="0.706257" cy="24.3533" r="0.646687" transform="rotate(-90 0.706257 24.3533)" fill="#3056D3" />
														<circle cx="6.39669" cy="24.3533" r="0.646687" transform="rotate(-90 6.39669 24.3533)" fill="#3056D3" />
														<circle cx="12.0881" cy="24.3533" r="0.646687" transform="rotate(-90 12.0881 24.3533)" fill="#3056D3" />
														<circle cx="17.7785" cy="24.3533" r="0.646687" transform="rotate(-90 17.7785 24.3533)" fill="#3056D3" />
														<circle cx="0.706257" cy="18.6624" r="0.646687" transform="rotate(-90 0.706257 18.6624)" fill="#3056D3" />
														<circle cx="6.39669" cy="18.6624" r="0.646687" transform="rotate(-90 6.39669 18.6624)" fill="#3056D3" />
														<circle cx="12.0881" cy="18.6624" r="0.646687" transform="rotate(-90 12.0881 18.6624)" fill="#3056D3" />
														<circle cx="17.7785" cy="18.6624" r="0.646687" transform="rotate(-90 17.7785 18.6624)" fill="#3056D3" />
														<circle cx="0.706257" cy="12.9717" r="0.646687" transform="rotate(-90 0.706257 12.9717)" fill="#3056D3" />
														<circle cx="6.39669" cy="12.9717" r="0.646687" transform="rotate(-90 6.39669 12.9717)" fill="#3056D3" />
														<circle cx="12.0881" cy="12.9717" r="0.646687" transform="rotate(-90 12.0881 12.9717)" fill="#3056D3" />
														<circle cx="17.7785" cy="12.9717" r="0.646687" transform="rotate(-90 17.7785 12.9717)" fill="#3056D3" />
														<circle cx="0.706257" cy="7.28077" r="0.646687" transform="rotate(-90 0.706257 7.28077)" fill="#3056D3" />
														<circle cx="6.39669" cy="7.28077" r="0.646687" transform="rotate(-90 6.39669 7.28077)" fill="#3056D3" />
														<circle cx="12.0881" cy="7.28077" r="0.646687" transform="rotate(-90 12.0881 7.28077)" fill="#3056D3" />
														<circle cx="17.7785" cy="7.28077" r="0.646687" transform="rotate(-90 17.7785 7.28077)" fill="#3056D3" />
														<circle cx="0.706257" cy="1.58989" r="0.646687" transform="rotate(-90 0.706257 1.58989)" fill="#3056D3" />
														<circle cx="6.39669" cy="1.58989" r="0.646687" transform="rotate(-90 6.39669 1.58989)" fill="#3056D3" />
														<circle cx="12.0881" cy="1.58989" r="0.646687" transform="rotate(-90 12.0881 1.58989)" fill="#3056D3" />
														<circle cx="17.7785" cy="1.58989" r="0.646687" transform="rotate(-90 17.7785 1.58989)" fill="#3056D3" />
													</svg>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/4">
							<div className="mx-auto mb-10 w-full max-w-[370px]">
								<div className="relative overflow-hidden rounded-lg">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/team/team-01/image-03.jpg" alt="image" className="w-full" />
									<div className="absolute left-0 w-full text-center bottom-5">
										<div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg dark:bg-dark-2">
											<h3 className="text-base font-semibold text-dark dark:text-white">Jackie Sanders</h3>
											<p className="text-xs text-body-color dark:text-dark-6">UI/UX Designer</p>
											<div>
												<span className="absolute bottom-0 left-0">
													<svg width={61} height={30} viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx={16} cy={45} r={45} fill="#13C296" fillOpacity="0.11" />
													</svg>
												</span>
												<span className="absolute top-0 right-0">
													<svg width={20} height={25} viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx="0.706257" cy="24.3533" r="0.646687" transform="rotate(-90 0.706257 24.3533)" fill="#3056D3" />
														<circle cx="6.39669" cy="24.3533" r="0.646687" transform="rotate(-90 6.39669 24.3533)" fill="#3056D3" />
														<circle cx="12.0881" cy="24.3533" r="0.646687" transform="rotate(-90 12.0881 24.3533)" fill="#3056D3" />
														<circle cx="17.7785" cy="24.3533" r="0.646687" transform="rotate(-90 17.7785 24.3533)" fill="#3056D3" />
														<circle cx="0.706257" cy="18.6624" r="0.646687" transform="rotate(-90 0.706257 18.6624)" fill="#3056D3" />
														<circle cx="6.39669" cy="18.6624" r="0.646687" transform="rotate(-90 6.39669 18.6624)" fill="#3056D3" />
														<circle cx="12.0881" cy="18.6624" r="0.646687" transform="rotate(-90 12.0881 18.6624)" fill="#3056D3" />
														<circle cx="17.7785" cy="18.6624" r="0.646687" transform="rotate(-90 17.7785 18.6624)" fill="#3056D3" />
														<circle cx="0.706257" cy="12.9717" r="0.646687" transform="rotate(-90 0.706257 12.9717)" fill="#3056D3" />
														<circle cx="6.39669" cy="12.9717" r="0.646687" transform="rotate(-90 6.39669 12.9717)" fill="#3056D3" />
														<circle cx="12.0881" cy="12.9717" r="0.646687" transform="rotate(-90 12.0881 12.9717)" fill="#3056D3" />
														<circle cx="17.7785" cy="12.9717" r="0.646687" transform="rotate(-90 17.7785 12.9717)" fill="#3056D3" />
														<circle cx="0.706257" cy="7.28077" r="0.646687" transform="rotate(-90 0.706257 7.28077)" fill="#3056D3" />
														<circle cx="6.39669" cy="7.28077" r="0.646687" transform="rotate(-90 6.39669 7.28077)" fill="#3056D3" />
														<circle cx="12.0881" cy="7.28077" r="0.646687" transform="rotate(-90 12.0881 7.28077)" fill="#3056D3" />
														<circle cx="17.7785" cy="7.28077" r="0.646687" transform="rotate(-90 17.7785 7.28077)" fill="#3056D3" />
														<circle cx="0.706257" cy="1.58989" r="0.646687" transform="rotate(-90 0.706257 1.58989)" fill="#3056D3" />
														<circle cx="6.39669" cy="1.58989" r="0.646687" transform="rotate(-90 6.39669 1.58989)" fill="#3056D3" />
														<circle cx="12.0881" cy="1.58989" r="0.646687" transform="rotate(-90 12.0881 1.58989)" fill="#3056D3" />
														<circle cx="17.7785" cy="1.58989" r="0.646687" transform="rotate(-90 17.7785 1.58989)" fill="#3056D3" />
													</svg>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 xl:w-1/4">
							<div className="mx-auto mb-10 w-full max-w-[370px]">
								<div className="relative overflow-hidden rounded-lg">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/team/team-01/image-04.jpg" alt="image" className="w-full" />
									<div className="absolute left-0 w-full text-center bottom-5">
										<div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg dark:bg-dark-2">
											<h3 className="text-base font-semibold text-dark dark:text-white">Nikolas Brooten</h3>
											<p className="text-xs text-body-color dark:text-dark-6">Sales Manager</p>
											<div>
												<span className="absolute bottom-0 left-0">
													<svg width={61} height={30} viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx={16} cy={45} r={45} fill="#13C296" fillOpacity="0.11" />
													</svg>
												</span>
												<span className="absolute top-0 right-0">
													<svg width={20} height={25} viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx="0.706257" cy="24.3533" r="0.646687" transform="rotate(-90 0.706257 24.3533)" fill="#3056D3" />
														<circle cx="6.39669" cy="24.3533" r="0.646687" transform="rotate(-90 6.39669 24.3533)" fill="#3056D3" />
														<circle cx="12.0881" cy="24.3533" r="0.646687" transform="rotate(-90 12.0881 24.3533)" fill="#3056D3" />
														<circle cx="17.7785" cy="24.3533" r="0.646687" transform="rotate(-90 17.7785 24.3533)" fill="#3056D3" />
														<circle cx="0.706257" cy="18.6624" r="0.646687" transform="rotate(-90 0.706257 18.6624)" fill="#3056D3" />
														<circle cx="6.39669" cy="18.6624" r="0.646687" transform="rotate(-90 6.39669 18.6624)" fill="#3056D3" />
														<circle cx="12.0881" cy="18.6624" r="0.646687" transform="rotate(-90 12.0881 18.6624)" fill="#3056D3" />
														<circle cx="17.7785" cy="18.6624" r="0.646687" transform="rotate(-90 17.7785 18.6624)" fill="#3056D3" />
														<circle cx="0.706257" cy="12.9717" r="0.646687" transform="rotate(-90 0.706257 12.9717)" fill="#3056D3" />
														<circle cx="6.39669" cy="12.9717" r="0.646687" transform="rotate(-90 6.39669 12.9717)" fill="#3056D3" />
														<circle cx="12.0881" cy="12.9717" r="0.646687" transform="rotate(-90 12.0881 12.9717)" fill="#3056D3" />
														<circle cx="17.7785" cy="12.9717" r="0.646687" transform="rotate(-90 17.7785 12.9717)" fill="#3056D3" />
														<circle cx="0.706257" cy="7.28077" r="0.646687" transform="rotate(-90 0.706257 7.28077)" fill="#3056D3" />
														<circle cx="6.39669" cy="7.28077" r="0.646687" transform="rotate(-90 6.39669 7.28077)" fill="#3056D3" />
														<circle cx="12.0881" cy="7.28077" r="0.646687" transform="rotate(-90 12.0881 7.28077)" fill="#3056D3" />
														<circle cx="17.7785" cy="7.28077" r="0.646687" transform="rotate(-90 17.7785 7.28077)" fill="#3056D3" />
														<circle cx="0.706257" cy="1.58989" r="0.646687" transform="rotate(-90 0.706257 1.58989)" fill="#3056D3" />
														<circle cx="6.39669" cy="1.58989" r="0.646687" transform="rotate(-90 6.39669 1.58989)" fill="#3056D3" />
														<circle cx="12.0881" cy="1.58989" r="0.646687" transform="rotate(-90 12.0881 1.58989)" fill="#3056D3" />
														<circle cx="17.7785" cy="1.58989" r="0.646687" transform="rotate(-90 17.7785 1.58989)" fill="#3056D3" />
													</svg>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Team Section End */}
			{/* ====== Pricing Section Start */}
			<section className="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-[75px]">
								<span className="block mb-2 text-lg font-semibold text-primary">Pricing Table</span>
								<h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">Our Pricing Plan</h2>
								<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-center">
						<div className="w-full max-w-[406px]">
							<div className="border-[#D4DEFF] dark:border-dark-3 drop-shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border-2 bg-white dark:bg-dark-2 py-10 px-8 text-center sm:p-12 lg:py-10 lg:px-6 xl:pt-[45px] xl:pb-[50px] xl:px-[50px]">
								<span className="block mb-2 text-base font-medium uppercase text-dark dark:text-white">STARTING FROM</span>
								<h2 className="text-primary mb-9 text-[28px] font-semibold">€ 19.99/mo</h2>
								<div className="flex flex-col gap-4 mb-9">
									<p className="text-base text-body-color dark:text-dark-6">1 User</p>
									<p className="text-base text-body-color dark:text-dark-6">All UI components</p>
									<p className="text-base text-body-color dark:text-dark-6">Lifetime access</p>
									<p className="text-base text-body-color dark:text-dark-6">Free updates</p>
									<p className="text-base text-body-color dark:text-dark-6">Use on 1 (one) project</p>
									<p className="text-base text-body-color dark:text-dark-6">3 Months support</p>
								</div>
								<div className="w-full">
									<a href="javascript:void(0)" className="text-primary hover:border-primary hover:bg-primary inline-block rounded-full border border-stroke dark:border-dark-3 shadow-1 dark:shadow-none dark:hover:border-primary bg-transparent py-3 px-[50px] text-center text-base font-medium transition hover:text-white">
										Purchase Now
									</a>
								</div>
								<span className="bg-primary absolute left-0 bottom-0 z-[-1] block h-14 w-14 rounded-tr-full"></span>
							</div>
						</div>
						<div className="w-full max-w-[370px]">
							<div className="bg-primary from-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl bg-gradient-to-b to-[#179BEE] py-10 px-8 text-center sm:p-12 lg:py-10 lg:px-6 xl:pt-[55px] xl:pb-10 xl:px-[50px]">
								<span className="inline-block px-6 py-2 mb-5 text-base font-semibold text-white uppercase border rounded-full">POPULAR</span>
								<span className="block mb-2 text-base font-medium text-white uppercase">STARTING FROM</span>
								<h2 className="mb-8 text-[28px] font-semibold text-white">€ 19.99/mo</h2>
								<div className="flex flex-col gap-4 mb-16">
									<p className="text-base text-white">1 User</p>
									<p className="text-base text-white">All UI components</p>
									<p className="text-base text-white">Lifetime access</p>
									<p className="text-base text-white">Free updates</p>
									<p className="text-base text-white">Use on 1 (one) project</p>
									<p className="text-base text-white">3 Months support</p>
								</div>
								<div className="w-full">
									<a href="javascript:void(0)" className="text-primary inline-block rounded-full shadow-1 border border-white bg-white py-3 px-[50px] text-center text-base font-medium transition hover:bg-gray-2 hover:text-body-color">
										Purchase Now
									</a>
								</div>
								<div>
									<span className="absolute right-0 top-0 z-[-1]">
										<svg width={115} height={188} viewBox="0 0 115 188" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.8728 74.7487C-7.29746 54.3102 0.420245 11.2655 2.4266 -7.93432L142.717 -13.0439C158.15 54.3102 178.924 188.74 138.55 187.625C88.0822 186.231 71.1788 165.278 69.562 139.316C67.7108 109.587 53.1242 96.6453 21.8728 74.7487Z" fill="white" fillOpacity="0.06" />
										</svg>
									</span>
									<span className="absolute bottom-0 left-0 z-[-1]">
										<svg width={61} height={222} viewBox="0 0 61 222" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M54.4989 22.7537C40.0989 -6.94625 0.165607 -1.32733 -18.0011 5.19463C-36.1677 76.1 -36.4871 199.841 -18.0011 245.002C4.99936 301.191 67.5 262.561 54.4989 217.911C48.8553 198.528 22.9989 168.244 34.9989 136.637C46.9989 105.031 72.4989 59.8787 54.4989 22.7537Z" fill="white" fillOpacity="0.06" />
										</svg>
									</span>
								</div>
							</div>
						</div>
						<div className="w-full max-w-[406px]">
							<div className="border-[#D4DEFF] dark:border-dark-3 drop-shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border-2 bg-white dark:bg-dark-2 py-10 px-8 text-center sm:p-12 lg:py-10 lg:px-6 xl:pt-[45px] xl:pb-[50px] xl:px-[50px]">
								<span className="block mb-2 text-base font-medium uppercase text-dark dark:text-white">STARTING FROM</span>
								<h2 className="text-primary mb-9 text-[28px] font-semibold">€ 70.99/mo</h2>
								<div className="flex flex-col gap-4 mb-9">
									<p className="text-base text-body-color dark:text-dark-6">1 User</p>
									<p className="text-base text-body-color dark:text-dark-6">All UI components</p>
									<p className="text-base text-body-color dark:text-dark-6">Lifetime access</p>
									<p className="text-base text-body-color dark:text-dark-6">Free updates</p>
									<p className="text-base text-body-color dark:text-dark-6">Use on 1 (one) project</p>
									<p className="text-base text-body-color dark:text-dark-6">3 Months support</p>
								</div>
								<div className="w-full">
									<a href="javascript:void(0)" className="text-primary hover:border-primary hover:bg-primary inline-block rounded-full border border-stroke dark:border-dark-3 shadow-1 dark:shadow-none dark:hover:border-primary bg-transparent py-3 px-[50px] text-center text-base font-medium transition hover:text-white">
										Purchase Now
									</a>
								</div>
								<span className="bg-secondary absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full"></span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Pricing Section End */}
			{/* ====== Brands Section Start */}
			<section className="relative z-10 bg-primary py-20 lg:py-[120px]">
				<div className="container mx-auto">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
							<div>
								<h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-3xl xl:text-[33px] 2xl:text-4xl">Tailwind CSS UI Components for Modern Web Apps</h2>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-7/12">
							<div className="flex flex-wrap items-center justify-center mt-12 lg:mt-0 xl:justify-end">
								<a href="javascript:void(0)" className="mx-4 flex min-w-[150px] max-w-[200px] items-center justify-center py-5 lg:min-w-min lg:max-w-[110px] xl:max-w-[200px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/brands/graygrids-white.svg" alt="image" className="w-full h-10" />
								</a>
								<a href="javascript:void(0)" className="mx-4 flex min-w-[150px] max-w-[200px] items-center justify-center py-5 lg:min-w-min lg:max-w-[110px] xl:max-w-[200px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/brands/lineIcons-white.svg" alt="image" className="w-full h-10" />
								</a>
								<a href="javascript:void(0)" className="mx-4 flex min-w-[150px] max-w-[200px] items-center justify-center py-5 lg:min-w-min lg:max-w-[110px] xl:max-w-[200px]">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/brands/ayroui-white.svg" alt="image" className="w-full h-10" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<span className="absolute top-4 left-4 z-[-1]">
						<svg width={50} height={49} viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="47.7119" cy="46.3164" r="1.74121" transform="rotate(180 47.7119 46.3164)" fill="white" />
							<circle cx="47.7119" cy="16.7161" r="1.74121" transform="rotate(180 47.7119 16.7161)" fill="white" />
							<circle cx="47.7119" cy="31.3423" r="1.74121" transform="rotate(180 47.7119 31.3423)" fill="white" />
							<circle cx="47.7119" cy="1.74121" r="1.74121" transform="rotate(180 47.7119 1.74121)" fill="white" />
							<circle cx="32.3916" cy="46.3162" r="1.74121" transform="rotate(180 32.3916 46.3162)" fill="white" />
							<circle cx="32.3916" cy="16.7161" r="1.74121" transform="rotate(180 32.3916 16.7161)" fill="white" />
							<circle cx="32.3916" cy="31.342" r="1.74121" transform="rotate(180 32.3916 31.342)" fill="white" />
							<circle cx="32.3916" cy="1.74145" r="1.74121" transform="rotate(180 32.3916 1.74145)" fill="white" />
							<circle cx="17.0674" cy="46.3162" r="1.74121" transform="rotate(180 17.0674 46.3162)" fill="white" />
							<circle cx="17.0674" cy="16.7161" r="1.74121" transform="rotate(180 17.0674 16.7161)" fill="white" />
							<circle cx="17.0674" cy="31.342" r="1.74121" transform="rotate(180 17.0674 31.342)" fill="white" />
							<circle cx="17.0674" cy="1.74145" r="1.74121" transform="rotate(180 17.0674 1.74145)" fill="white" />
							<circle cx="1.74316" cy="46.3162" r="1.74121" transform="rotate(180 1.74316 46.3162)" fill="white" />
							<circle cx="1.74316" cy="16.7161" r="1.74121" transform="rotate(180 1.74316 16.7161)" fill="white" />
							<circle cx="1.74316" cy="31.342" r="1.74121" transform="rotate(180 1.74316 31.342)" fill="white" />
							<circle cx="1.74316" cy="1.74145" r="1.74121" transform="rotate(180 1.74316 1.74145)" fill="white" />
						</svg>
					</span>
					<span className="absolute bottom-4 right-4 z-[-1]">
						<svg width={50} height={49} viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="47.7119" cy="46.3164" r="1.74121" transform="rotate(180 47.7119 46.3164)" fill="white" />
							<circle cx="47.7119" cy="16.7161" r="1.74121" transform="rotate(180 47.7119 16.7161)" fill="white" />
							<circle cx="47.7119" cy="31.3423" r="1.74121" transform="rotate(180 47.7119 31.3423)" fill="white" />
							<circle cx="47.7119" cy="1.74121" r="1.74121" transform="rotate(180 47.7119 1.74121)" fill="white" />
							<circle cx="32.3916" cy="46.3162" r="1.74121" transform="rotate(180 32.3916 46.3162)" fill="white" />
							<circle cx="32.3916" cy="16.7161" r="1.74121" transform="rotate(180 32.3916 16.7161)" fill="white" />
							<circle cx="32.3916" cy="31.342" r="1.74121" transform="rotate(180 32.3916 31.342)" fill="white" />
							<circle cx="32.3916" cy="1.74145" r="1.74121" transform="rotate(180 32.3916 1.74145)" fill="white" />
							<circle cx="17.0674" cy="46.3162" r="1.74121" transform="rotate(180 17.0674 46.3162)" fill="white" />
							<circle cx="17.0674" cy="16.7161" r="1.74121" transform="rotate(180 17.0674 16.7161)" fill="white" />
							<circle cx="17.0674" cy="31.342" r="1.74121" transform="rotate(180 17.0674 31.342)" fill="white" />
							<circle cx="17.0674" cy="1.74145" r="1.74121" transform="rotate(180 17.0674 1.74145)" fill="white" />
							<circle cx="1.74316" cy="46.3162" r="1.74121" transform="rotate(180 1.74316 46.3162)" fill="white" />
							<circle cx="1.74316" cy="16.7161" r="1.74121" transform="rotate(180 1.74316 16.7161)" fill="white" />
							<circle cx="1.74316" cy="31.342" r="1.74121" transform="rotate(180 1.74316 31.342)" fill="white" />
							<circle cx="1.74316" cy="1.74145" r="1.74121" transform="rotate(180 1.74316 1.74145)" fill="white" />
						</svg>
					</span>
				</div>
			</section>
			{/* ====== Brands Section End */}
			{/* ====== Testimonials Section Start */}
			<section x-data="{activeItem: 1}" className="pt-20 lg:pt-[120px] dark:bg-dark">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center -mx-4">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
								<span className="block mb-2 text-lg font-semibold text-primary">What People Says</span>
								<h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">Client Testimonials</h2>
								<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center -mx-4">
						<div className="w-full px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
							<div x-show="activeItem === 1">
								<div className="relative items-center rounded-lg bg-[#F8F9FF] dark:bg-dark-2 py-10 px-10 md:flex lg:px-[70px]">
									<div className="relative z-10 mb-12 h-[165px] w-full max-w-[165px] rounded-full md:mb-0">
										<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/testimonials/testimonial-03/image-02.png" alt="image" className="w-full rounded-full" />
										<div className="absolute left-0 top-0 z-[-1]">
											<svg width={160} height={160} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect x="-6.88525" y="18.9728" width="36.731" height="209.602" rx="18.3655" transform="rotate(-45 -6.88525 18.9728)" fill="#13C296" />
											</svg>
										</div>
										<div className="absolute -left-2 top-5 z-[-2]">
											<svg width={152} height={152} viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect x={-5} y="12.5433" width="24.9386" height="204.237" rx="12.4693" transform="rotate(-45 -5 12.5433)" fill="#3758F9" />
											</svg>
										</div>
									</div>
									<div className="w-full pl-0 md:pl-14">
										<p className="mb-6 text-base text-body-color dark:text-dark-6">Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage.</p>
										<h4 className="mb-1 text-lg font-semibold text-primary">Healther Bennit</h4>
										<h6 className="text-sm italic font-normal text-body-color dark:text-dark-6">Founder - Dailousm</h6>
									</div>
									<div>
										<span className="absolute -left-5 -bottom-5 z-[-1]">
											<svg width={77} height={77} viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="1.66343" cy="74.5221" r="1.66343" transform="rotate(-90 1.66343 74.5221)" fill="#13C296" />
												<circle cx="1.66343" cy="30.94" r="1.66343" transform="rotate(-90 1.66343 30.94)" fill="#13C296" />
												<circle cx="16.3016" cy="74.5221" r="1.66343" transform="rotate(-90 16.3016 74.5221)" fill="#13C296" />
												<circle cx="16.3016" cy="30.94" r="1.66343" transform="rotate(-90 16.3016 30.94)" fill="#13C296" />
												<circle cx="30.9398" cy="74.5221" r="1.66343" transform="rotate(-90 30.9398 74.5221)" fill="#13C296" />
												<circle cx="30.9398" cy="30.94" r="1.66343" transform="rotate(-90 30.9398 30.94)" fill="#13C296" />
												<circle cx="45.578" cy="74.5221" r="1.66343" transform="rotate(-90 45.578 74.5221)" fill="#13C296" />
												<circle cx="45.578" cy="30.94" r="1.66343" transform="rotate(-90 45.578 30.94)" fill="#13C296" />
												<circle cx="60.2162" cy="74.5216" r="1.66343" transform="rotate(-90 60.2162 74.5216)" fill="#13C296" />
												<circle cx="74.6634" cy="74.5216" r="1.66343" transform="rotate(-90 74.6634 74.5216)" fill="#13C296" />
												<circle cx="60.2162" cy="30.9398" r="1.66343" transform="rotate(-90 60.2162 30.9398)" fill="#13C296" />
												<circle cx="74.6634" cy="30.9398" r="1.66343" transform="rotate(-90 74.6634 30.9398)" fill="#13C296" />
												<circle cx="1.66343" cy="59.8839" r="1.66343" transform="rotate(-90 1.66343 59.8839)" fill="#13C296" />
												<circle cx="1.66343" cy="16.3017" r="1.66343" transform="rotate(-90 1.66343 16.3017)" fill="#13C296" />
												<circle cx="16.3016" cy="59.8839" r="1.66343" transform="rotate(-90 16.3016 59.8839)" fill="#13C296" />
												<circle cx="16.3016" cy="16.3018" r="1.66343" transform="rotate(-90 16.3016 16.3018)" fill="#13C296" />
												<circle cx="30.9398" cy="59.8839" r="1.66343" transform="rotate(-90 30.9398 59.8839)" fill="#13C296" />
												<circle cx="30.9398" cy="16.3018" r="1.66343" transform="rotate(-90 30.9398 16.3018)" fill="#13C296" />
												<circle cx="45.578" cy="59.8839" r="1.66343" transform="rotate(-90 45.578 59.8839)" fill="#13C296" />
												<circle cx="45.578" cy="16.3018" r="1.66343" transform="rotate(-90 45.578 16.3018)" fill="#13C296" />
												<circle cx="60.2162" cy="59.8839" r="1.66343" transform="rotate(-90 60.2162 59.8839)" fill="#13C296" />
												<circle cx="74.6634" cy="59.8839" r="1.66343" transform="rotate(-90 74.6634 59.8839)" fill="#13C296" />
												<circle cx="60.2162" cy="16.3017" r="1.66343" transform="rotate(-90 60.2162 16.3017)" fill="#13C296" />
												<circle cx="74.6634" cy="16.3017" r="1.66343" transform="rotate(-90 74.6634 16.3017)" fill="#13C296" />
												<circle cx="1.66343" cy="45.2455" r="1.66343" transform="rotate(-90 1.66343 45.2455)" fill="#13C296" />
												<circle cx="1.66343" cy="1.66347" r="1.66343" transform="rotate(-90 1.66343 1.66347)" fill="#13C296" />
												<circle cx="16.3016" cy="45.2455" r="1.66343" transform="rotate(-90 16.3016 45.2455)" fill="#13C296" />
												<circle cx="16.3016" cy="1.66347" r="1.66343" transform="rotate(-90 16.3016 1.66347)" fill="#13C296" />
												<circle cx="30.9398" cy="45.2455" r="1.66343" transform="rotate(-90 30.9398 45.2455)" fill="#13C296" />
												<circle cx="30.9398" cy="1.66347" r="1.66343" transform="rotate(-90 30.9398 1.66347)" fill="#13C296" />
												<circle cx="45.578" cy="45.2455" r="1.66343" transform="rotate(-90 45.578 45.2455)" fill="#13C296" />
												<circle cx="45.578" cy="1.66347" r="1.66343" transform="rotate(-90 45.578 1.66347)" fill="#13C296" />
												<circle cx="60.2162" cy="45.2457" r="1.66343" transform="rotate(-90 60.2162 45.2457)" fill="#13C296" />
												<circle cx="74.6634" cy="45.2457" r="1.66343" transform="rotate(-90 74.6634 45.2457)" fill="#13C296" />
												<circle cx="60.2162" cy="1.66371" r="1.66343" transform="rotate(-90 60.2162 1.66371)" fill="#13C296" />
												<circle cx="74.6634" cy="1.66371" r="1.66343" transform="rotate(-90 74.6634 1.66371)" fill="#13C296" />
											</svg>
										</span>
										<span className="absolute -top-7 -right-4">
											<svg width={58} height={60} viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M23 59.2671C23 44.8581 23 33.1774 23 33.1774C39.0163 33.1774 52 44.8581 52 59.2671C52 59.2671 52 59.2671 23 59.2671Z" fill="#13C296" />
												<path fillRule="evenodd" clipRule="evenodd" d="M57 49.7009C57 22.8041 57 1 57 1C26.0721 1 1 22.8041 1 49.7009C1 49.7009 1 49.7009 57 49.7009Z" stroke="#3758F9" strokeWidth="1.5" />
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div x-show="activeItem === 2">
								<div className="relative items-center rounded-lg bg-[#F8F9FF] dark:bg-dark-2 py-10 px-10 md:flex lg:px-[70px]">
									<div className="relative z-10 mb-12 h-[165px] w-full max-w-[165px] rounded-full md:mb-0">
										<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/testimonials/testimonial-03/image-01.png" alt="image" className="w-full rounded-full" />
										<div className="absolute left-0 top-0 z-[-1]">
											<svg width={160} height={160} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect x="-6.88525" y="18.9728" width="36.731" height="209.602" rx="18.3655" transform="rotate(-45 -6.88525 18.9728)" fill="#13C296" />
											</svg>
										</div>
										<div className="absolute -left-2 top-5 z-[-2]">
											<svg width={152} height={152} viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect x={-5} y="12.5433" width="24.9386" height="204.237" rx="12.4693" transform="rotate(-45 -5 12.5433)" fill="#3758F9" />
											</svg>
										</div>
									</div>
									<div className="w-full pl-0 md:pl-14">
										<p className="mb-6 text-base text-body-color dark:text-dark-6">But the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage.</p>
										<h4 className="mb-1 text-lg font-semibold text-primary">Kamala Harish</h4>
										<h6 className="text-sm italic font-normal text-body-color dark:text-dark-6">Founder - ProductHunt</h6>
									</div>
									<div>
										<span className="absolute -left-5 -bottom-5 z-[-1]">
											<svg width={77} height={77} viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="1.66343" cy="74.5221" r="1.66343" transform="rotate(-90 1.66343 74.5221)" fill="#13C296" />
												<circle cx="1.66343" cy="30.94" r="1.66343" transform="rotate(-90 1.66343 30.94)" fill="#13C296" />
												<circle cx="16.3016" cy="74.5221" r="1.66343" transform="rotate(-90 16.3016 74.5221)" fill="#13C296" />
												<circle cx="16.3016" cy="30.94" r="1.66343" transform="rotate(-90 16.3016 30.94)" fill="#13C296" />
												<circle cx="30.9398" cy="74.5221" r="1.66343" transform="rotate(-90 30.9398 74.5221)" fill="#13C296" />
												<circle cx="30.9398" cy="30.94" r="1.66343" transform="rotate(-90 30.9398 30.94)" fill="#13C296" />
												<circle cx="45.578" cy="74.5221" r="1.66343" transform="rotate(-90 45.578 74.5221)" fill="#13C296" />
												<circle cx="45.578" cy="30.94" r="1.66343" transform="rotate(-90 45.578 30.94)" fill="#13C296" />
												<circle cx="60.2162" cy="74.5216" r="1.66343" transform="rotate(-90 60.2162 74.5216)" fill="#13C296" />
												<circle cx="74.6634" cy="74.5216" r="1.66343" transform="rotate(-90 74.6634 74.5216)" fill="#13C296" />
												<circle cx="60.2162" cy="30.9398" r="1.66343" transform="rotate(-90 60.2162 30.9398)" fill="#13C296" />
												<circle cx="74.6634" cy="30.9398" r="1.66343" transform="rotate(-90 74.6634 30.9398)" fill="#13C296" />
												<circle cx="1.66343" cy="59.8839" r="1.66343" transform="rotate(-90 1.66343 59.8839)" fill="#13C296" />
												<circle cx="1.66343" cy="16.3017" r="1.66343" transform="rotate(-90 1.66343 16.3017)" fill="#13C296" />
												<circle cx="16.3016" cy="59.8839" r="1.66343" transform="rotate(-90 16.3016 59.8839)" fill="#13C296" />
												<circle cx="16.3016" cy="16.3018" r="1.66343" transform="rotate(-90 16.3016 16.3018)" fill="#13C296" />
												<circle cx="30.9398" cy="59.8839" r="1.66343" transform="rotate(-90 30.9398 59.8839)" fill="#13C296" />
												<circle cx="30.9398" cy="16.3018" r="1.66343" transform="rotate(-90 30.9398 16.3018)" fill="#13C296" />
												<circle cx="45.578" cy="59.8839" r="1.66343" transform="rotate(-90 45.578 59.8839)" fill="#13C296" />
												<circle cx="45.578" cy="16.3018" r="1.66343" transform="rotate(-90 45.578 16.3018)" fill="#13C296" />
												<circle cx="60.2162" cy="59.8839" r="1.66343" transform="rotate(-90 60.2162 59.8839)" fill="#13C296" />
												<circle cx="74.6634" cy="59.8839" r="1.66343" transform="rotate(-90 74.6634 59.8839)" fill="#13C296" />
												<circle cx="60.2162" cy="16.3017" r="1.66343" transform="rotate(-90 60.2162 16.3017)" fill="#13C296" />
												<circle cx="74.6634" cy="16.3017" r="1.66343" transform="rotate(-90 74.6634 16.3017)" fill="#13C296" />
												<circle cx="1.66343" cy="45.2455" r="1.66343" transform="rotate(-90 1.66343 45.2455)" fill="#13C296" />
												<circle cx="1.66343" cy="1.66347" r="1.66343" transform="rotate(-90 1.66343 1.66347)" fill="#13C296" />
												<circle cx="16.3016" cy="45.2455" r="1.66343" transform="rotate(-90 16.3016 45.2455)" fill="#13C296" />
												<circle cx="16.3016" cy="1.66347" r="1.66343" transform="rotate(-90 16.3016 1.66347)" fill="#13C296" />
												<circle cx="30.9398" cy="45.2455" r="1.66343" transform="rotate(-90 30.9398 45.2455)" fill="#13C296" />
												<circle cx="30.9398" cy="1.66347" r="1.66343" transform="rotate(-90 30.9398 1.66347)" fill="#13C296" />
												<circle cx="45.578" cy="45.2455" r="1.66343" transform="rotate(-90 45.578 45.2455)" fill="#13C296" />
												<circle cx="45.578" cy="1.66347" r="1.66343" transform="rotate(-90 45.578 1.66347)" fill="#13C296" />
												<circle cx="60.2162" cy="45.2457" r="1.66343" transform="rotate(-90 60.2162 45.2457)" fill="#13C296" />
												<circle cx="74.6634" cy="45.2457" r="1.66343" transform="rotate(-90 74.6634 45.2457)" fill="#13C296" />
												<circle cx="60.2162" cy="1.66371" r="1.66343" transform="rotate(-90 60.2162 1.66371)" fill="#13C296" />
												<circle cx="74.6634" cy="1.66371" r="1.66343" transform="rotate(-90 74.6634 1.66371)" fill="#13C296" />
											</svg>
										</span>
										<span className="absolute -top-7 -right-4">
											<svg width={58} height={60} viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M23 59.2671C23 44.8581 23 33.1774 23 33.1774C39.0163 33.1774 52 44.8581 52 59.2671C52 59.2671 52 59.2671 23 59.2671Z" fill="#13C296" />
												<path fillRule="evenodd" clipRule="evenodd" d="M57 49.7009C57 22.8041 57 1 57 1C26.0721 1 1 22.8041 1 49.7009C1 49.7009 1 49.7009 57 49.7009Z" stroke="#3758F9" strokeWidth="1.5" />
											</svg>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full pt-12">
							<div className="flex items-center justify-center">
								<button className="w-2 h-2 mx-4 rounded-full hover:bg-secondary" />
								<button className="w-2 h-2 mx-4 rounded-full hover:bg-secondary" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Testimonials Section End */}
			{/* ====== Blog Section Start */}
			<section className="pt-20 lg:pt-[120px] dark:bg-dark">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center -mx-4">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
								<span className="block mb-2 text-lg font-semibold text-primary">Our Blogs</span>
								<h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">Our Recent News</h2>
								<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="w-full mb-10">
								<div className="mb-8 overflow-hidden rounded">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
								</div>
								<div>
									<span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">Dec 22, 2023</span>
									<h3>
										<a href="javascript:void(0)" className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
											Meet AutoManage, the best AI management tools
										</a>
									</h3>
									<p className="text-base text-body-color dark:text-dark-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="w-full mb-10">
								<div className="mb-8 overflow-hidden rounded">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/blogs/blog-01/image-02.jpg" alt="image" className="w-full" />
								</div>
								<div>
									<span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">Mar 15, 2023</span>
									<h3>
										<a href="javascript:void(0)" className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
											How to earn more money as a wellness coach
										</a>
									</h3>
									<p className="text-base text-body-color dark:text-dark-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="w-full mb-10">
								<div className="mb-8 overflow-hidden rounded">
									<img src="https://demo.tailgrids.com/templates/business/build/src/assets/images/blogs/blog-01/image-03.jpg" alt="image" className="w-full" />
								</div>
								<div>
									<span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">Jan 05, 2023</span>
									<h3>
										<a href="javascript:void(0)" className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
											The no-fuss guide to upselling and cross selling
										</a>
									</h3>
									<p className="text-base text-body-color dark:text-dark-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Blog Section End */}
			{/* ====== Call To Action Section Start */}
			<section className="pt-20 lg:pt-[120px] dark:bg-dark">
				<div className="container mx-auto">
					<div className="relative z-10 overflow-hidden rounded bg-dark dark:bg-dark-2 py-12 px-8 md:p-[70px]">
						<div className="flex flex-wrap items-center -mx-4">
							<div className="w-full px-4 lg:w-1/2">
								<span className="mb-2 text-base font-semibold text-white">Find Your Next Dream App</span>
								<h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
									Get started with <br className="hidden xs:block" />
									our free trial
								</h2>
							</div>
							<div className="w-full px-4 lg:w-1/2">
								<div className="flex flex-wrap lg:justify-end">
									<a href="javascript:void(0)" className="my-1 mr-4 inline-block rounded bg-white bg-opacity-[15%] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 hover:text-primary md:px-9 lg:px-6 xl:px-9">
										Get Pro Version
									</a>
									<a href="javascript:void(0)" className="inline-block px-6 py-4 my-1 text-base font-medium text-white transition rounded bg-primary hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9">
										Start Free Trial
									</a>
								</div>
							</div>
						</div>
						<div>
							<span className="absolute top-0 left-0 z-[-1]">
								<svg width={189} height={162} viewBox="0 0 189 162" fill="none" xmlns="http://www.w3.org/2000/svg">
									<ellipse cx={16} cy="-16.5" rx={173} ry="178.5" transform="rotate(180 16 -16.5)" fill="url(#paint0_linear)" />
									<defs>
										<linearGradient id="paint0_linear" x1={-157} y1="-107.754" x2="98.5011" y2="-106.425" gradientUnits="userSpaceOnUse">
											<stop stopColor="white" stopOpacity="0.07" />
											<stop offset={1} stopColor="white" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</span>
							<span className="absolute bottom-0 right-0 z-[-1]">
								<svg width={191} height={208} viewBox="0 0 191 208" fill="none" xmlns="http://www.w3.org/2000/svg">
									<ellipse cx={173} cy="178.5" rx={173} ry="178.5" fill="url(#paint0_linear)" />
									<defs>
										<linearGradient id="paint0_linear" x1="-3.27832e-05" y1="87.2457" x2="255.501" y2="88.5747" gradientUnits="userSpaceOnUse">
											<stop stopColor="white" stopOpacity="0.07" />
											<stop offset={1} stopColor="white" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</span>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Call To Action Section End */}
			{/* ====== Contact Section Start */}
			<section>
				<div className="bg-white dark:bg-dark pt-20 pb-10 lg:pt-[110px] lg:pb-[70px]">
					<div className="container mx-auto">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4 md:w-1/3">
								<div className="mb-10 text-center">
									<div className="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-tg-bg dark:bg-white/5 text-primary sm:h-[130px] sm:w-[130px]">
										<svg width={43} height={42} viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M37.25 6.30005H5.75001C3.51876 6.30005 1.61563 8.13755 1.61563 10.4344V31.6969C1.61563 33.9282 3.45313 35.8313 5.75001 35.8313H37.25C39.4813 35.8313 41.3844 33.9938 41.3844 31.6969V10.3688C41.3844 8.13755 39.4813 6.30005 37.25 6.30005ZM37.25 9.25317C37.3156 9.25317 37.3813 9.25317 37.4469 9.25317L21.5 19.4907L5.55313 9.25317C5.61876 9.25317 5.68438 9.25317 5.75001 9.25317H37.25ZM37.25 32.7469H5.75001C5.09376 32.7469 4.56876 32.2219 4.56876 31.5657V12.1407L19.925 21.9844C20.3844 22.3125 20.9094 22.4438 21.4344 22.4438C21.9594 22.4438 22.4844 22.3125 22.9438 21.9844L38.3 12.1407V31.6313C38.4313 32.2875 37.9063 32.7469 37.25 32.7469Z"
												fill="currentColor"
											/>
										</svg>
									</div>
									<div className="text-center">
										<h4 className="mb-3 text-lg font-semibold text-dark dark:text-white">Email Address</h4>
										<p className="text-base text-body-color dark:text-dark-6">info@example.com</p>
										<p className="text-base text-body-color dark:text-dark-6">support@example.com</p>
									</div>
								</div>
							</div>
							<div className="w-full px-4 md:w-1/3">
								<div className="mb-10 text-center">
									<div className="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-tg-bg dark:bg-white/5 text-primary sm:h-[130px] sm:w-[130px]">
										<svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M31.8937 40.8843C30.1219 40.8843 28.0875 40.425 25.8563 39.5718C21.3938 37.8 16.4719 34.3875 12.075 29.9906C7.67812 25.5937 4.26563 20.6718 2.49375 16.1437C0.525 11.2875 0.721875 7.28433 3.01875 5.05308C3.08438 4.98745 3.21563 4.92183 3.28125 4.8562L8.79375 1.57495C10.1719 0.787455 11.9438 1.1812 12.8625 2.4937L16.7344 8.2687C17.6531 9.64683 17.2594 11.4843 15.9469 12.4031L13.5844 14.0437C15.2906 16.8 20.1469 23.5593 27.8906 28.4156L29.3344 26.3156C30.45 24.7406 32.2219 24.2812 33.6656 25.2656L39.4406 29.1375C40.7531 30.0562 41.1469 31.8281 40.3594 33.2062L37.0781 38.7187C37.0125 38.85 36.9469 38.9156 36.8813 38.9812C35.7 40.2281 33.9937 40.8843 31.8937 40.8843ZM4.9875 7.28433C3.74063 8.66246 3.80625 11.4843 5.25 15.0937C6.89063 19.2281 10.0406 23.7562 14.175 27.8906C18.2437 31.9593 22.8375 35.1093 26.9062 36.75C30.45 38.1937 33.2719 38.2593 34.7156 37.0125L37.8656 31.6312C37.8656 31.5656 37.8656 31.5656 37.8656 31.5L32.0906 27.6281C32.0906 27.6281 31.9594 27.6937 31.8281 27.8906L30.3844 29.9906C29.4656 31.3031 27.6938 31.6968 26.3813 30.8437C18.1125 25.725 12.9938 18.5718 11.1563 15.6843C10.3031 14.3062 10.6313 12.5343 11.9438 11.6156L14.3062 9.97495V9.90933L10.4344 4.13433C10.4344 4.0687 10.3688 4.0687 10.3031 4.13433L4.9875 7.28433Z"
												fill="currentColor"
											/>
											<path d="M38.4562 18.7031C37.6688 18.7031 37.0781 18.1125 37.0125 17.325C36.4875 10.6969 31.0406 5.38126 24.3469 4.92189C23.5594 4.85626 22.9031 4.20001 22.9688 3.34689C23.0344 2.55939 23.6906 1.90314 24.5438 1.96876C32.6813 2.49376 39.3094 8.92501 39.9656 17.0625C40.0313 17.85 39.4406 18.5719 38.5875 18.6375C38.5875 18.7031 38.5219 18.7031 38.4562 18.7031Z" fill="currentColor" />
											<path d="M31.9594 19.2938C31.2375 19.2938 30.5812 18.7688 30.5156 17.9813C30.1219 14.4375 27.3656 11.6813 23.8219 11.2219C23.0344 11.1563 22.4437 10.3688 22.5094 9.58127C22.575 8.79377 23.3625 8.20315 24.15 8.26877C29.0719 8.8594 32.8781 12.6656 33.4687 17.5875C33.5344 18.375 33.0094 19.0969 32.1562 19.2282C32.025 19.2938 31.9594 19.2938 31.9594 19.2938Z" fill="currentColor" />
										</svg>
									</div>
									<div className="text-center">
										<h4 className="mb-3 text-lg font-semibold text-dark dark:text-white">Phone Number</h4>
										<p className="text-base text-body-color dark:text-dark-6">+88 (800) 123 4567</p>
										<p className="text-base text-body-color dark:text-dark-6">+99 094 5445 433</p>
									</div>
								</div>
							</div>
							<div className="w-full px-4 md:w-1/3">
								<div className="mb-10 text-center">
									<div className="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-tg-bg dark:bg-white/5 text-primary sm:h-[130px] sm:w-[130px]">
										<svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M21 1.18127C11.9437 1.18127 4.59375 8.26877 4.59375 16.9969C4.59375 23.625 13.3875 34.125 18.5719 39.7688C19.2281 40.4907 20.0813 40.8188 21 40.8188C21.9188 40.8188 22.7719 40.425 23.4281 39.7688C28.6125 34.125 37.4062 23.625 37.4062 16.9969C37.4062 8.26877 30.0562 1.18127 21 1.18127ZM21.2625 37.8C21.1313 37.9313 20.9344 37.9313 20.7375 37.8C14.3719 30.8438 7.54688 21.7875 7.54688 16.9969C7.54688 9.9094 13.5844 4.1344 21 4.1344C28.4156 4.1344 34.4531 9.9094 34.4531 16.9969C34.4531 21.7875 27.6281 30.8438 21.2625 37.8Z"
												fill="currentColor"
											/>
											<path d="M21 10.3031C17.0625 10.3031 13.8469 13.5187 13.8469 17.4562C13.8469 21.3937 17.0625 24.675 21 24.675C24.9375 24.675 28.1531 21.4594 28.1531 17.5219C28.1531 13.5844 24.9375 10.3031 21 10.3031ZM21 21.7218C18.6375 21.7218 16.8 19.8187 16.8 17.5219C16.8 15.225 18.7031 13.3219 21 13.3219C23.2969 13.3219 25.2 15.225 25.2 17.5219C25.2 19.8187 23.3625 21.7218 21 21.7218Z" fill="currentColor" />
										</svg>
									</div>
									<div className="text-center">
										<h4 className="mb-3 text-lg font-semibold text-dark dark:text-white">Our Address</h4>
										<p className="text-base text-body-color dark:text-dark-6">82 12th Street, Office 14,</p>
										<p className="text-base text-body-color dark:text-dark-6">Edinburgh, UK</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-tg-bg dark:bg-dark-2 py-20 lg:py-[120px]">
					<div className="container mx-auto">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4">
								<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
									<span className="block mb-2 text-lg font-semibold text-primary">Contact Us</span>
									<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">How Can We Help You?</h2>
									<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
								</div>
							</div>
						</div>
						<div>
							<form>
								<div className="flex flex-wrap justify-center -mx-4">
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-7 lg:mb-9">
											<label className="block mb-3 text-base font-medium text-dark dark:text-white md:mb-5">
												<span>Your Name</span> <span className="text-red-500">*</span>
											</label>
											<input type="text" className="w-full rounded border border-stroke dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-white py-3 px-[14px] text-base leading-relaxed text-body-color outline-none focus:border-primary dark:focus:border-primary focus-visible:shadow-none md:py-4 md:px-[18px]" />
										</div>
									</div>
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-7 lg:mb-9">
											<label className="block mb-3 text-base font-medium text-dark dark:text-white md:mb-5">
												<span>Your Email</span>
												<span className="text-red-500">*</span>
											</label>
											<input type="email" className="w-full rounded border border-stroke dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-white py-3 px-[14px] text-base leading-relaxed text-body-color outline-none focus:border-primary dark:focus:border-primary focus-visible:shadow-none md:py-4 md:px-[18px]" />
										</div>
									</div>
									<div className="w-full px-4">
										<div className="mb-7 lg:mb-9">
											<label className="block mb-3 text-base font-medium text-dark dark:text-white md:mb-5">
												<span>Your Message</span>
												<span className="text-red-500">*</span>
											</label>
											<textarea rows={4} className="w-full resize-none rounded border border-stroke dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-white py-3 px-[14px] text-base leading-relaxed text-body-color outline-none focus:border-primary dark:focus:border-primary focus-visible:shadow-none md:py-4 md:px-[18px]" defaultValue={""} />
										</div>
									</div>
									<div className="w-full px-4">
										<label htmlFor="checkboxLabelTwo" className="mb-12 flex cursor-pointer items-center text-base text-body-color md:mb-[70px]">
											<div className="relative">
												<input type="checkbox" id="checkboxLabelTwo" className="sr-only" />
												<div className="flex items-center justify-center w-5 h-5 mr-4 bg-white border rounded box border-stroke dark:bg-dark dark:border-dark-3">
													<span className="opacity-0 text-primary dark:text-white">
														<svg width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path
																d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
																fill="currentColor"
																stroke="currentColor"
																strokeWidth="0.4"
															/>
														</svg>
													</span>
												</div>
											</div>
											<span>I agree that my submitted data is being collected and stored.</span>
										</label>
									</div>
									<div className="w-full px-4 sm:w-8/12 lg:w-4/12">
										<div className="text-center">
											<button type="submit" className="block w-full px-10 py-5 text-base font-medium text-center text-white transition rounded-md bg-primary hover:bg-opacity-90">
												Send Message
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* ====== Contact Section End */}
			{/* ====== Footer Section Start */}
		</>
	);
}

export default Home;
