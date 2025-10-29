"use client"
import BankServiceCard from "@/components/card/bank-service-card";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import kpr from "../../../components/images/kpr.svg";
import person from "../../../components/images/person.svg";
import creditCard from "../../../components/images/credit-card.svg";
import piggyBank from "../../../components/images/piggy-bank.svg";
import organization from "../../../components/images/organization.svg";
import alphaSort from "../../../components/images/alpha-sort.svg";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import BankSummaryCard from "@/components/card/bank-summary-card";
import { banks } from "@/data/banks";
import { useEffect, useState } from "react";
import useIsDesktop from "@/utils/is-desktop";

export default function Product() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} productVisible={true} active="bank-product" />
            <div className="lg:ml-56">
                <Navbar title="Product" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="flex justify-center items-center border-b border-[#C1C1C1]">
                    <div className="font-bold text-primary mr-10 px-10 py-4 border-b-2 border-primary">Bank</div>
                    <div className="font-medium">Developer</div>
                </div>
                <div className="bg-[#F2F2F2] pl-5 lg:pl-10 pt-4 pb-10">
                    <div className="grid grid-cols-2 lg:flex gap-2">
                        <BankServiceCard image={kpr} title={"KPR dan Multiguna"} />
                        <BankServiceCard image={person} title={"Refinancing"} />
                        <BankServiceCard image={creditCard} title={"Kredit Modal Usaha dan Investasi"} />
                        <BankServiceCard image={piggyBank} title={"Deposito"} />
                        <BankServiceCard image={organization} title={"Take Over dan Bridging Loan"} />
                    </div>
                    <div className="flex flex-wrap mt-5 gap-x-5 gap-y-3 pr-5">
                        <div className="relative">
                            <input type="text" id="first_name" className="bg-gray-50 shadow-lg border w-80 border-gray-300 text-sm rounded-lg py-2.5 px-4 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari berdasarkan nama" />
                            <div className="absolute end-4 lg:bottom-4 bottom-3 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center border border-[#C1C1C1] bg-white px-5 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                            <div className="font-medium mr-5">Kredit Pemilikan...</div>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </div>
                        <div className="flex-1 flex items-center border mr-2 border-[#C1C1C1] bg-white pl-3 pr-7 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                            <Image src={alphaSort} width={30} height={30} alt="sort" />
                            <div className="font-medium ml-5">Sort</div>
                        </div>
                        <button type="button" className="flex-1 text-white bg-primary font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2">
                            <Add className="mr-3" />
                            Tambah Product
                        </button>
                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        {banks.map((bank, i) => (
                            i < 11 && <BankSummaryCard key={i} {...bank} />
                        ))}
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