import { IPlanProps } from "../../shared/interfaces";
import { useHistory } from "react-router";
import hot from "./../../assets/images/hot.svg";
import yoga from "./../../assets/images/yoga-white.svg";

const Plancard = (props: IPlanProps) => {
	let history = useHistory();

	const routeToDetailPage = () => {
		history.push(`/plandetails/${props.product_id}`)
	}
	
		const sessionText = props?.firstStartHr ? `${props?.firstStartHr} : 00 ${ props?.firstStartHr < 12  ? 'AM' : 'PM'} - ${props?.firstStartHr + 1} : 00 ${ props?.firstStartHr + 1 < 12  ? 'AM' : 'PM'}` : ''
	return (
		<>
			<div className="mb-4 shadow-lg rounded-lg overflow-hidden" onClick={routeToDetailPage}>
				<div className="w-full relative bg-gray-200 h-40 overflow-hidden">
				{/* <iframe className="object-fill w-full" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
					<img
						src="https://picsum.photos/200/300"
						className="object-fill w-full"
						alt={props.product_name}
					/>
					<div className=" absolute left-0 top-0 w-full p-3 flex justify-between">
						<span className="py-1 px-2 items-center font-medium bg-red text-white uppercase text-xs rounded flex justify-center">
							<img src={hot} alt="hot" className="mr-1" />
							<span className="font-bold">HOT</span>
						</span>
						<span className="py-1 font-bold px-2 font-medium bg-orange text-white uppercase text-xs rounded">
							{props.enrolled_qty} Enrolled
						</span>
					</div>
					<div className="absolute left-0 bottom-0 m-3">
						<div className="w-10 h-10 rounded-full bg-light-orange flex justify-center items-center">
							<img src={yoga} alt="yoga" />
						</div>
					</div>
				</div>
				<div className="p-4">
					<div className="text-lg font-bold text-15">
						{props.product_name}
					</div>
					<div className="flex justify-between font-medium mt-3">
						<div>
							<div className="text-xs opacity-60 tracking-wide">
								Next Session
							</div>
							<span className="font-bold text-15">
								{ sessionText }
							</span>
						</div>
						<div>
							<div className="text-xs opacity-60 text-right tracking-wide">
								Fees
							</div>
							<span className="font-bold text-15 mr-2 opacity-30 line-through">
								₹ {props.product_price}
							</span>
							<span className="font-bold text-15">
								₹ {props.discounted_price}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Plancard;
