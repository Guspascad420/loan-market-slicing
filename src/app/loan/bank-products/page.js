"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Application from "@/components/timeline/application";
import alphaSort from "../../../components/images/alpha-sort.svg";
import question from "../../../components/images/question.svg";
import { ArrowBack, ArrowForward, QuestionMark } from "@mui/icons-material";
import Image from "next/image";
import { Checkbox, FormControlLabel } from "@mui/material";
import BankProductCard from "@/components/card/bank-product-card";
import { banks } from "@/data/banks";
import useIsDesktop from "@/utils/is-desktop";
import { useEffect, useState } from "react";

export default function BankProductSelection() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isDesktop = useIsDesktop();

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} productVisible={true} active="loan" />
            <div className="lg:ml-56">
                <Navbar title="Edit Application" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="border-b border-[#C1C1C1] pl-10 py-5">
                    <Application current={8} />
                </div>
                <div className="bg-[#F2F2F2] pl-10 pr-8 py-5">
                    <div className="flex justify-between items-center">
                        <a href="/loan/document-upload" className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowBack />
                        </a>
                        <div className="text-center">
                            <div className="font-bold text-2xl">Pilihan Produk & Bank</div>
                            <div className="font-semibold text-gray-700 text-lg">Silahkan pilih produk bank yang sesuai</div>
                        </div>
                        <div className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowForward />
                        </div>
                    </div>
                    <div className="bg-white mt-5 p-5 rounded-lg shadow-md">
                        <div className="flex mb-3">
                            <div className="flex-4 relative mr-5">
                                <input type="text" id="first_name" className="bg-gray-50 w-full shadow-lg border-[1.5px] border-[#C1C1C1] text-sm rounded-lg py-3 px-4 focus:ring-blue-500 focus:border-blue-500" placeholder={isDesktop ? 'Cari berdasarkan nama' : 'Cari...'} />
                                <div className="absolute inset-y-0 right-3 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center border-[1.5px] border-[#C1C1C1] bg-white pl-3 pr-7 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                                <Image src={alphaSort} width={0} height={0} className="w-5 md:w-7" alt="sort" />
                                <div className="font-medium ml-3 md:ml-5">Sort</div>
                            </div>
                        </div>
                        <div className="flex">
                            <FormControlLabel sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontWeight: 600,

                                },
                            }} control={<Checkbox sx={{
                                color: "#C1C1C1",
                                '&.Mui-checked': {
                                    color: "#17A9E2",
                                },
                            }} />} label="Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan Market)" />
                            <Image src={question} width={30} height={30} alt="sort" />
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {banks.map((bank, i) => (
                                bank.title != "Commonwealth" && <BankProductCard key={i} {...bank} />
                            ))}
                        </div>
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