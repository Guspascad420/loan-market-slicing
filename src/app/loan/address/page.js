"use client";
import DomicileSection from "@/components/address-form/domicile-section";
import KtpSection from "@/components/address-form/ktp-section";
import WorkAddressSection from "@/components/address-form/work-address-section";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Application from "@/components/timeline/application";
import save from "../../../components/images/save.svg"
import Image from "next/image";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import useIsDesktop from "@/utils/is-desktop";
import { useEffect, useState } from "react";

export default function AddressForm() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} productVisible={true} active="loan" />
            <div className="lg:ml-56">
                <Navbar title="Edit Application" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="border-b border-[#C1C1C1] pl-10 py-5">
                    <Application current={3} />
                </div>
                <div className="bg-[#F2F2F2] pl-10 pr-8 py-5">
                    <div className="flex justify-between items-center">
                        <div className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowBack />
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-2xl">Alamat</div>
                        </div>
                        <a href="/loan/document-upload" className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowForward />
                        </a>
                    </div>
                    <div className="bg-white mt-5 p-5 rounded-lg shadow-md">
                        <KtpSection />
                        <DomicileSection />
                        <WorkAddressSection />
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