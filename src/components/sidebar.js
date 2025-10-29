import Image from "next/image"
import { useState } from 'react';
import logo from "../components/images/logo.png"
import { Home, HomeOutlined, InsertDriveFileOutlined } from "@mui/icons-material"
import contact from "../components/images/contact-inactive.svg"
import performance from "../components/images/performance.svg"
import productManagement from "../components/images/product-management.svg"
import layers from "../components/images/layers.svg"
import help from "../components/images/help.svg"
import whatsapp from "../components/images/whatsapp.svg"
import bankBuilding from "../components/images/bank-building-inactive.svg"
import shoppingBag from "../components/images/shopping-bag-inactive.svg"
import file from "../components/images/file-inactive.svg"

export default function Sidebar({ active, open, setOpen, productVisible }) {
    const [isProductVisible, setIsVisible] = useState(productVisible);

    return (
        <aside id="default-sidebar" className={`fixed z-40 shadow-lg top-0 left-0 w-60 h-screen transition-transform -translate-x-full lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
            <div className="h-full px-3 overflow-y-auto bg-white">
                <div className="flex justify-center mb-7">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </div>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className={`flex items-center ${active == "dashboard" ? "bg-primary text-white" : "bg-white text-black hover:bg-gray-100"} px-2 py-2 rounded-lg group`}>
                            <HomeOutlined fontSize="large" className={active == "dashboard" ? "text-white" : "text-black"} />
                            <span className="ms-2">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={contact} width={35} height={35} alt="contact" />
                            <span className="flex-1 ms-2 whitespace-nowrap">Contact</span>
                        </a>
                    </li>
                    <li>
                        <a href="/loan/address" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${active == "loan" ? 'bg-primary' : 'bg-white hover:bg-gray-100'}`}>
                            <InsertDriveFileOutlined fontSize="large" className={active == "loan" ? "text-white" : "text-black"} />
                            <span className={`flex-1 ms-3 whitespace-nowrap ${active == "loan" ? "text-white" : "text-black"}`}>Loan</span>
                        </a>
                    </li>
                    <li onClick={() => { setIsVisible(!isProductVisible) }}>
                        <a className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={shoppingBag} width={35} height={35} alt="product" />
                            <span className="flex-1 ms-2 whitespace-nowrap">Product</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                        {
                            isProductVisible && (
                                <div>
                                    <div className={`py-2 px-12 rounded-lg ${active == "bank-product" ? 'bg-primary rounded-lg text-white' : 'bg-white hover:bg-gray-100'}`}>
                                        <a href="/product/bank">Bank Product</a>
                                    </div>
                                    <div className="py-2 px-12 rounded-lg hover:bg-gray-100">
                                        <a href="#">Product</a>
                                    </div>
                                    <div className="py-2 px-12 rounded-lg hover:bg-gray-100">
                                        <a href="#">Category Product</a>
                                    </div>
                                </div>
                            )
                        }
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={bankBuilding} width={35} height={35} alt="bank" />
                            <span className="flex-1 ms-2 whitespace-nowrap">Bank</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2 px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={performance} width={35} height={35} alt="credit scoring" />
                            <span className="flex-1 ms-2 whitespace-nowrap">Credit Scoring</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2 px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={help} width={35} height={35} alt="FAQ" />
                            <span className="flex-1 ms-3 whitespace-nowrap">FAQ's</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2 px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={layers} width={35} height={35} alt="pipeline" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Pipeline</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2 px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={layers} width={35} height={35} alt="pipeline" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Pipeline Developer</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2 px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={productManagement} width={35} height={35} alt="marketing tools" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Marketing Tools</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2 pb-5 px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Image src={whatsapp} width={35} height={35} alt="whatsapp" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Whatsapp</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}