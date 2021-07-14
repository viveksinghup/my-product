import { useEffect, useState } from 'react';
import leftArrow from "./../../assets/images/arrow.svg";
import yoga from "./../../assets/images/yoga-white.svg";
import shareIcon from "./../../assets/images/share.svg";
import cameraIcon from "./../../assets/images/video.svg";
import mailIcon from "./../../assets/images/mail.svg";
import timeIcon from "./../../assets/images/time.svg";
import sessionImg from "./../../assets/images/session.svg";
import { useHistory, useParams } from "react-router";
import { getSelectedProduct } from "../../utils/productUtils";

export function PlanDetails(props: any) {
	const history = useHistory();
	const urlData: any = useParams();
	const [readMore, setReadMore] = useState(false)
	const [selectedProduct, setProduct] = useState(props.selectedProduct)
	if (!urlData.id) {
		history.push('/')
	}
	useEffect(() => {
		fetch("../products.json")
			.then((data) => data.json())
			.then((response) => {
				setProduct(getSelectedProduct(response, urlData.id));
			});
	}, [urlData.id])


	const routeToList = (): void => {
		history.goBack();
	}

	const handleReadMore = (): void => {
		setReadMore(true)
	}

	
	return (
		<>
			<div className="pb-14">
				<div className="relative bg-gray-200 h-48 overflow-hidden">
					<img
						src="https://picsum.photos/200/300"
						className="object-fill w-full"
					/>
					<div className=" absolute left-0 top-0 w-full p-4 flex justify-between">
						<div className="w-8 flex justify-center items-center rounded-full h-8 bg-white" onClick={routeToList}>
							<img src={leftArrow} alt="back" />
						</div>
						<div className="w-8 flex justify-center items-center rounded-full h-8 bg-white">
							<img src={shareIcon} alt="share" />
						</div>
					</div>
				</div>
				<div className="px-4">
					<div className="w-full -mt-5 relative">
						<div className="w-10 h-10 rounded-full shadow-md bg-orange flex justify-center items-center">
							<img src={yoga} alt="yoga" className="w-7" />
						</div>
					</div>
					<div className="mt-2">
						<div className="text-xl font-bold">
							{selectedProduct?.product_name}
						</div>
						<div className="text-xs mt-1 flex justify-between">
							<span className="opacity-50">{selectedProduct?.product_academy}</span>
							<span className="text-orange">{selectedProduct?.enrolled_qty} +Enrolled</span>
						</div>
					</div>
				</div>
				<hr className="my-6" />
				<div className="px-4">
					<div className="text-xl font-bold mb-3">
						What to expect from this session
					</div>
					<div className="text-sm opacity-50">
						{ readMore ? selectedProduct?.product_description : (selectedProduct?.product_description || '').slice(0,100)}
					</div>
					{ !readMore ? <span className=" font-bold text-xs text-blue" onClick={handleReadMore}>
						READ MORE
					</span> : null }
				</div>
				<hr className="my-6" />
				<div className="px-4">
					<div className="flex">
						<img src={sessionImg} alt="yoga" className="w-6 -mt-2 mr-3" />
						<div className="text-xl font-bold mb-3">
							Session Flow {selectedProduct?.session_duration ? <span className="opacity-50 text-xs">({selectedProduct?.session_duration})</span> : null }
						</div>
					</div>
					<div className="relative ml-2 left-bar-wrapper">
						{
							selectedProduct  ? selectedProduct.session_flow.map((item: any) => {
									return (
										<div className="pl-8 pb-2 left-bar relative" key={item.title}>
											<div className="font-medium">{item.title}</div>
											<span className="opacity-50 text-xs">
												{item.time}
											</span>
										</div>
									)
							}) : null
						}
					</div>
				</div>
				<hr className="my-6" />
				<div className="px-4 list-disc">
					<div className="text-xl font-bold">Benefits</div>
					<ul className="list-outside list-disc">
					{
						selectedProduct  ? selectedProduct.product_benefits.map((item: string) => {
							return (
								<li className="ml-4 mt-2 opacity-50 text-15" key={item}>
									{item}
								</li>
							)
						}) : null 
						}
					</ul>
				</div>
				<hr className="my-6" />
				<div className="px-4 pb-8">
					<div className="text-xl font-bold">How this works</div>
					<div className="flex mt-3">
						<div className="w-5 mt-1 flex h-5 flex-shrink-0 mr-3">
							<img src={cameraIcon} alt="share" />
						</div>
						<span className="opacity-50">
							This session will be conducted via zoom video.
						</span>
					</div>
					<div className="flex mt-3">
						<div className="w-5 mt-1 flex h-5 flex-shrink-0 mr-3">
							<img src={mailIcon} alt="share" />
						</div>
						<span className="opacity-50">
							On booking, you will be provided with details on email.
						</span>
					</div>
					<div className="flex mt-3">
						<div className="w-5 mt-1 flex h-5 flex-shrink-0 mr-3">
							<img src={timeIcon} alt="share" />
						</div>
						<span className="opacity-50">
							Prior to the session, you will receive a link that you need
							to connect via stable internet connection.
						</span>
					</div>
				</div>
				<button className="text-15 z-10 outline-none focus:outline-none fixed bottom-0 w-full left-0 font-bold text-white bg-green text-center py-5">
					Book Now for Rs. {selectedProduct?.discounted_price}
				</button>
			</div>
		</>
	);
}
