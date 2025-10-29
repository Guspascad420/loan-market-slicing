"use client";
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import Sidebar from "@/components/sidebar";
import editWhite from "../../../../components/images/edit-white.svg";
import trash from "../../../../components/images/trash-2.svg";
import { ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import DetailItem from "@/components/detail-item";
import { banks } from "@/data/banks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BankProductDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleClick = () => {
        router.back();
    };
    const bank = banks.find((b) => b.id == id);

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} productVisible={false} />
            <div className="lg:ml-56">
                <Navbar title="Product" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center border-b border-[#C1C1C1]">
                    <div className="flex items-center lg:pl-10 pl-5 py-3">
                        <div onClick={() => handleClick()} className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowBack />
                        </div>
                        <div className='text-xl text-gray400 ml-5'>Bank Product Detail</div>
                    </div>
                    <div className="flex w-full lg:w-auto mx-5 lg:mx-0 mb-5 lg:mb-0 lg:pr-10 justify-center items-center">
                        <a href={`/product/bank/${id}/edit`} type="button" className="flex-1 mr-4 text-white bg-dark-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                            <Image src={editWhite} width={20} height={20} alt="sort" className="mr-7" />
                            Edit Product
                        </a>
                        <button type="button" className="flex-1 text-white bg-red-500 font-medium rounded-lg text-sm pl-5 pr-7 py-2.5 text-center inline-flex items-center">
                            <Image src={trash} width={20} height={20} alt="sort" className="mr-5" />
                            <div className="text-nowrap">Delete Product</div>
                        </button>
                    </div>
                </div>
                <div className="bg-[#F2F2F2] pl-10 pt-4 pb-10">
                    <div className="bg-white pb-5 px-10 mr-5 rounded-lg shadow-md">
                        <DetailItem title="Bank" value={bank.title} />
                        <DetailItem title="Nama Product" value={bank.promo} />
                        <DetailItem title="Jaminan" value={bank.guarantee} />
                        <DetailItem title="Target Market" value={bank.target} />
                        <DetailItem title="Komisi" value={`${bank.commission}%`} />
                        <DetailItem title="Appraisal" value="1%" />
                        <DetailItem title="Floating" value="1%" />
                        <DetailItem title="Loan to Value" value={bank.loanToValue} />
                        <DetailItem title="Penalty Fee" value="-" />
                        <DetailItem title="Interest Rate" value="3.65 %" />
                        <DetailItem title="Fix Rate" value="3.88 %" />
                        <DetailItem title="Fix Rate (year)" value={bank.fixRate} />
                        <DetailItem title="Max Tenor (year)" value="12" />
                        <DetailItem title="Description" value={bank.description ?? "-"} />
                        <DetailItem title="URL" value="null" />
                    </div>
                </div>
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </div>
        </div>
    )
}