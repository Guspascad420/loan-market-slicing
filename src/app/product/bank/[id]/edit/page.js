"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ValueAdjuster from "@/components/value-adjuster";
import editWhite from "../../../../../components/images/edit-white.svg";
import { banks } from "@/data/banks";
import { Add, ArrowBack, ArrowForward, CalendarMonth, CalendarToday, Remove } from "@mui/icons-material";
import { Checkbox, createTheme, FormControlLabel } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EditBank() {
    const { id } = useParams();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const bank = banks.find((b) => b.id == id);
    const router = useRouter();

    const handleClick = () => {
      router.back();
    };

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} productVisible={false} />
            <div className="lg:ml-56">
                <Navbar title="Product" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="flex justify-between items-center border-b border-[#C1C1C1]">
                    <div className="flex items-center pl-10 py-3">
                        <div onClick={() => handleClick()} className="bg-primary cursor-pointer p-2 rounded-full text-white">
                            <ArrowBack />
                        </div>
                        <div className='text-xl text-gray400 ml-5'>Edit Product</div>
                    </div>
                </div>
                <div className="bg-[#F2F2F2] lg:pl-10 pt-4 pb-10">
                    <div className="bg-white py-5 lg:px-10 lg:mr-5 mx-5 pl-5 pr-3 rounded-lg shadow-md flex flex-wrap lg:flex-nowrap">
                        <div className="md:flex-1 lg:mr-10 mr-5">
                            <div className="font-semibold">Bank</div>
                            <div className="mt-1 border-[1.5px] rounded-lg border-[#C1C1C1] px-5 py-2 flex items-center justify-between">
                                <div>{bank.title}</div>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="#646567" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            <div className="font-semibold mt-4">Jenis Product</div>
                            <div className="mt-1 border-[1.5px] rounded-lg border-[#C1C1C1] px-5 py-2 flex items-center justify-between">
                                <div>{bank.promo}</div>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="#646567" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            <FormControlLabel control={<Checkbox sx={{
                                color: "#C1C1C1",
                                '&.Mui-checked': {
                                    color: "#17A9E2",
                                },
                            }} />} label="Promotional Product" />
                            <div className="mt-1 rounded-lg px-5 py-2 flex justify-between bg-[#DEDEDE] border-[#C1C1C1] border">
                                <div className="flex items-center">
                                    <div className="text-gray-600">22/01/2010</div>
                                    <div className="mx-6 lg:mx-12">
                                        <ArrowForward className="text-gray-600" />
                                    </div>
                                    <div className="text-gray-600">22/02/2010</div>
                                </div>
                                <CalendarToday className="text-gray-600" />
                            </div>
                            <div className="font-semibold mt-4">Jaminan</div>
                            <div className="grid grid-cols-2">
                                <FormControlLabel control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Ruko" />
                                <FormControlLabel control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Rukan" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Rumah" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Apartemen" />
                                <FormControlLabel className="-mt-2 lg:-mt-4"
                                    sx={{
                                        '& .MuiFormControlLabel-label': {
                                            lineHeight: 1
                                        },
                                    }}
                                    control={<Checkbox sx={{
                                        color: "#C1C1C1",
                                        '&.Mui-checked': {
                                            color: "#17A9E2",
                                        },
                                    }} />} label="Kendaraan Pribadi" />
                                <FormControlLabel className="-mt-2 lg:-mt-4"
                                    sx={{
                                        '& .MuiFormControlLabel-label': {
                                            lineHeight: 1
                                        },
                                    }}
                                    control={<Checkbox sx={{
                                        color: "#C1C1C1",
                                        '&.Mui-checked': {
                                            color: "#17A9E2",
                                        },
                                    }} />} label="Sertifikat Perusahaan" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Slip Gaji" />
                            </div>
                            <div className="font-semibold mt-4">Target Market</div>
                            <div className="grid grid-cols-2">
                                <FormControlLabel control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Pengusaha" />
                                <FormControlLabel control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Karyawan" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Professional" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="Millenial" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="ASN" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="POLRI" />
                                <FormControlLabel className="-mt-4" control={<Checkbox sx={{
                                    color: "#C1C1C1",
                                    '&.Mui-checked': {
                                        color: "#17A9E2",
                                    },
                                }} />} label="TNI" />
                                <FormControlLabel
                                    className="-mt-4" control={<Checkbox sx={{
                                        color: "#C1C1C1",
                                        '&.Mui-checked': {
                                            color: "#17A9E2",
                                        },
                                    }} />} label="Lainnya" />
                            </div>
                            <ValueAdjuster title="Komisi" value={bank.commission} />
                            <ValueAdjuster title="Appraisal" />
                            <ValueAdjuster title="Floating" />

                        </div>
                        <div className="flex-1 flex flex-col">
                            <ValueAdjuster title="Loan to Value" value={bank.loanToValue} />
                            <ValueAdjuster title="Interest Rate" value="3,65%" />
                            <ValueAdjuster title="Fix Rate" value="3,88%" />
                            <ValueAdjuster title="Fix Rate (Year)" value={bank.fixRate} />
                            <ValueAdjuster title="Max Tenor (Year)" value="12" />
                            <div className="font-semibold mb-1">Keterangan</div>
                            <div className="border-[1.5px] rounded-md px-3 pt-1 pb-5 border-[#C1C1C1]">
                                {bank.description}
                            </div>
                            <div className="font-semibold mt-4 mb-1">URL</div>
                            <div className="border-[1.5px] rounded-md px-3 py-1 border-[#C1C1C1]">
                                null
                            </div>
                            <button type="button" className="mb-3 mt-5 self-end lg:mt-auto text-white bg-dark-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                                <Image src={editWhite} width={20} height={20} alt="sort" className="mr-7" />
                                UPDATE
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