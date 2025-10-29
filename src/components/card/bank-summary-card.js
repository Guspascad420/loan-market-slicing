import { Rating } from "@mui/material";
import Image from "next/image";
import chart from "../../components/images/chart.svg";
import user from "../../components/images/user.svg";
import acute from "../../components/images/acute.svg";
import dollarSign from "../../components/images/dollar_sign.svg";
import { useRouter } from "next/navigation";
import { ScheduleOutlined, VerifiedUserOutlined } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';

export default function BankSummaryCard({ id, image, title, promo, rating, reviews,
    users, fixRate, guarantee, maxTenor, target, loanToValue, commission }) {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/product/bank/${id}`);
    };

    return (
        <div className="bg-white py-5 mr-5 rounded-lg shadow-md hover:shadow-lg">
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="lg:w-[32%] pl-5 w-full">
                    <Image src={image} width={150} height="auto" alt="" className="mx-auto my-0" />
                    <div className="lg:flex items-center justify-center hidden lg:justify-normal mr-10 lg:mr-0">
                        <div className="border-r py-2 pr-5">
                            <div className="font-medium text-gray-500 text-center text-sm">Rating: </div>
                            <Rating
                                sx={{ color: "#17A9E2" }}
                                size="large"
                                value={rating}
                                emptyIcon={<StarIcon sx={{ fontSize: '1.9rem' }} style={{ color: '#C1C1C1' }} />}
                                readOnly
                                className="py-2"
                            />
                            <div className="font-medium text-sm text-center">{reviews} Reviews</div>
                        </div>
                        <div className="py-2 lg:pl-10 pl-5">
                            <div className="font-medium text-gray-500 text-center text-sm">User: </div>
                            <div className="font-medium text-center py-3">{users}</div>
                            <div className="text-sm font-medium text-center text-nowrap">Users yearly</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:hidden">
                        <div className="py-2 pr-3 flex items-center">
                            <Rating
                                sx={{ color: "#17A9E2" }}
                                size="small"
                                value={rating}
                                emptyIcon={<StarIcon sx={{ fontSize: '1.1rem' }} style={{ color: '#C1C1C1' }} />}
                                readOnly
                                className="py-2"
                            />
                            <div className="ml-1 mt-0.5 font-medium text-sm text-center">{`(${reviews})`}</div>
                        </div>
                        <div className="pl-3 border-l-[1.5px] border-[#C1C1C1] text-sm font-medium text-center text-nowrap">{users} Users yearly</div>
                    </div>
                </div>
                <div className="ml-10">
                    <div className="font-semibold text-xl mb-3 text-gray-700">
                        {title}
                        <span className="text-primary">{promo}</span>
                    </div>
                    <div className="grid grid-cols-2 w-[90%] gap-2">
                        <div className="flex items-center ml-1">
                            <Image src={chart} width={20} height="auto" alt="" />
                            <div className="font-medium text-gray-500 text-sm ml-2">Fix Rate (Year): {fixRate}</div>
                        </div>
                        <div className="flex items-center">
                            <VerifiedUserOutlined color="#4A5055" />
                            <div className="font-medium text-gray-500 text-sm ml-2">Jaminan: {guarantee}</div>
                        </div>
                        <div className="flex items-center">
                            <ScheduleOutlined color="#4A5055" />
                            <div className="font-medium text-gray-500 text-sm ml-2">Max Tenor: {maxTenor}</div>
                        </div>
                        <div className="flex items-center">
                            <Image src={user} width={25} height="auto" alt="" className="" />
                            <div className="font-medium text-gray-500 text-sm ml-2">Target: {target}</div>
                        </div>
                        <div className="flex items-center ml-0.5">
                            <Image src={acute} width={25} height="auto" alt="" className="" />
                            <div className="font-medium text-gray-500 text-sm ml-2">Loan to Value: {loanToValue}</div>
                        </div>
                        <div className="flex items-center">
                            <Image src={dollarSign} width={25} height="auto" alt="" className="" />
                            <div className="font-medium text-gray-500 text-sm ml-2">Komisi: {commission}</div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 lg:mt-0 lg:items-center w-full lg:w-auto justify-end lg:justify-normal">
                    <button onClick={() => handleClick(id)} type="button" className="border-[#C1C1C1] cursor-pointer border text-primary shadow-xl font-semibold mr-5 rounded-md px-7 py-2 text-center">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    )
}