import Image from "next/image";

export default function BankServiceCard({ image, title }) {
    return (
        <div className="bg-white flex-1 py-5 px-5 mr-5 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <div className="flex flex-col items-center">
                {image && (
                    <Image src={image} width={55} height={55} alt={title} />
                )}
                <div className="text-center mt-3">
                    <div className="font-medium text-sm text-gray-400">{title}</div>
                </div>
            </div>
        </div>
    )
}