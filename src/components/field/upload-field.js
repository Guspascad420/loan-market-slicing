import Image from "next/image"
import upload from "../../components/images/upload.svg"

export default function UploadField({ label, placeholder }) {
    return (
        <div className="md:flex md:justify-between md:items-center mb-3">
            <div className="text-[#2D3B57] md:w-[40%] font-semibold">{label}</div>
            <div className="border-[1.5px] md:w-[45%] border-[#C1C1C1] rounded-lg cursor-pointer px-4 py-2 flex justify-between">
                <div className="text-sm text-gray-600">{placeholder}</div>
                <Image src={upload} width={20} height={20} alt="" />
            </div>
        </div>
    )
}