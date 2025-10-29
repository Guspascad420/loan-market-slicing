"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import phone from "../components/images/Phone.svg"
import office from "../components/images/office.svg"
import contact from "../components/images/contact.svg"
import securedLetter from "../components/images/secured-letter.svg"
import profilePicture from "../components/images/profile-picture.png"
import InfoCard from "@/components/card/info-card";
import file from "../components/images/file.svg"
import shoppingBag from "../components/images/shopping-bag.svg"
import bank from "../components/images/bank-building.svg"
import edit from "../components/images/edit.svg"
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Notification from "@/components/timeline/notification";
import BankChart from "@/components/chart/bank-chart";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import useIsDesktop from "@/utils/is-desktop";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} active="dashboard" />
      <div className="lg:ml-56">
        <Navbar title="Dashboard" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="md:px-7 mt-10 pb-7 border-b border-[#C1C1C1]">
          <div className="flex flex-col md:flex-row">
            <Image src={profilePicture} width={150} height="auto" className="size-[135px] mx-auto md:mx-0" alt="profile picture" />
            <div className="md:ml-10">
              <div className="font-semibold text-primary text-xl text-center md:text-start mt-3 md:mt-0 md:text-3xl mb-3">YOHANNES AFFANDY (JOJO)</div>
              <div className="flex pl-10 md:pl-0">
                <div className="md:pr-15 pr-5 border-r border-[#C1C1C1]">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary inline-block mr-3 rounded-full p-1">
                      <Image src={office} className="w-7 h-auto md:w-7"
                        width={0}
                        height={0} alt="" />
                    </div>
                    <div className="text-sm md:text-md w-24 md:w-full">Loan Market Office Dev</div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary inline-block mr-3 rounded-full py-1 px-1.5 ">
                      <div className="font-semibold text-lg text-primary">ID:</div>
                    </div>
                    <div className="text-sm md:text-md">LM9990001</div>
                  </div>
                </div>
                <div className="pl-5 md:pl-15">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary inline-block mr-3 rounded-full p-1">
                      <Image src={securedLetter} width={0} height={0} className="w-6 h-auto md:w-7" alt="email" />
                    </div>
                    <div className="wrap-break-word text-sm md:text-md">it@loanmarket.co.id</div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-secondary inline-block mr-3 rounded-full p-1">
                      <Image src={phone} width={0} height={0} className="w-6 h-auto md:w-7" alt="phone" />
                    </div>
                    <div className="text-sm md:text-md">6281234567890</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F2F2] md:px-7 pt-10 pb-10">
          <div className="flex flex-col lg:flex-row">
            <div>
              <div className="flex flex-wrap gap-5 justify-center md:gap-0 md:justify-normal md:flex-nowrap">
                <InfoCard title="CONTACT" number={51} image={contact} />
                <InfoCard title="LOAN" number={56} image={file} />
                <InfoCard title="PRODUCT" number={80} image={shoppingBag} />
                <InfoCard title="BANK" number={70} image={bank} />
              </div>
              <div className="mt-10 mx-8 md:mx-0 rounded-xl shadow-xl bg-white">
                <div className="flex flex-wrap lg:flex-nowrap">
                  <div className="md:pr-12 md:ml-12 mx-auto my-5 border-b-[1.5px] md:border-b-0  md:border-r-[1.5px] md:border-[#C1C1C1]">
                    <div className="flex flex-col items-center py-5">
                      <div className="font-semibold text-2xl">PINJAMAN DISETUJUI</div>
                      <CircularProgressbar
                        value={40}
                        text={`40%`}
                        className="font-semibold size-32 my-5"
                        strokeWidth={10}
                        styles={buildStyles({
                          textColor: "#000",
                          pathColor: "#17A9E2",
                          trailColor: "##C1C1C1",
                        })}
                      />
                      <div className="font-medium">2/5 Pinjaman telah disetujui</div>
                    </div>
                  </div>
                  <div className="md:my-3 mb-7 md:mb-0">
                    <div className="flex justify-between">
                      <div></div>
                      <div className="font-semibold text-2xl pl-16 lg:pl-14 md:mt-5">TARGET</div>
                      <Image className="mr-10 md:mr-5" src={edit} width={30} height={30} alt="edit" />
                    </div>
                    <div className="px-22 flex flex-col items-center">
                      <CircularProgressbar
                        value={100}
                        text={`280%`}
                        className="font-semibold size-32 my-5"
                        strokeWidth={10}
                        styles={buildStyles({
                          textColor: "#000",
                          pathColor: "#17A9E2",
                          trailColor: "##C1C1C1",
                        })}
                      />
                      <div className="font-medium">Rp14.000.000.000,00 /</div>
                      <div className="font-medium">Rp5.000.000.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-5 pt-5 mx-7 md:mx-auto lg:mx-0 lg:max-w-full lg:ml-3 mt-5 lg:mt-0 shadow-lg rounded-lg">
              <div className="font-semibold text-xl mb-3">NOTIFICATION</div>
              <Notification />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl mt-5 pb-10 mx-7 md:mx-0 lg:w-[72%]">
            <div className="text-center font-semibold text-xl md:text-2xl pb-5 pt-7">Top 5 Bank Approval Tertinggi</div>
            <div className="flex justify-center">
              <BankChart />
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
  );
}
