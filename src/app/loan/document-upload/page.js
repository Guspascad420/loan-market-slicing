"use client";
import AdditionalDataForm from "@/components/document-upload/additional-data-form";
import CollateralDataForm from "@/components/document-upload/collaterral-data-form";
import FinanceDataForm from "@/components/document-upload/finance-data-form";
import PersonalDataForm from "@/components/document-upload/personal-data-form";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Application from "@/components/timeline/application";
import save from "../../../components/images/save.svg"
import Image from "next/image";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import useIsDesktop from "@/utils/is-desktop";
import { useEffect, useState } from "react";

export default function DocumentUploadForm() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} productVisible={true} active="loan" />
            <div className="lg:ml-56">
                <Navbar title="Edit Application" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="border-b border-[#C1C1C1] pl-10 py-5">
                    <Application current={6} />
                </div>
                <div className="bg-[#F2F2F2] pl-10 pr-8 py-5">
                    <div className="flex justify-between items-center">
                        <a href="/loan/address" className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowBack />
                        </a>
                        <div className="text-center">
                            <div className="font-bold text-2xl">Upload Dokumen</div>
                            <div className="font-semibold text-gray-700 text-lg">Silahkan pilih produk bank yang sesuai</div>
                        </div>
                        <a href="/loan/bank-products" className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowForward />
                        </a>
                    </div>
                    <div className="bg-white mt-5 p-5 rounded-lg shadow-md">
                        <PersonalDataForm />
                        <CollateralDataForm />
                        <FinanceDataForm />
                        <AdditionalDataForm />
                        <div className="flex justify-end mt-3">
                            <button type="button" className="text-white cursor-pointer bg-dark-blue flex items-center font-medium rounded-lg text-sm px-4 py-2 text-center">
                                <Image src={save} width={25} height={25} alt="sort" className="mr-3" />
                                <div className="text-nowrap">UPDATE</div>
                            </button>
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