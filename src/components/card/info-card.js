import Image from "next/image";

export default function InfoCard({ title, number, image }) {
    return (
        <div className="bg-white py-5 px-5 md:mr-5 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <div className="flex items-center">
                {image && (
                    <div className="bg-secondary inline-block mr-3 rounded-full p-2">
                        <Image src={image} width={35} height={35} alt={title} />
                    </div>
                )}
                <div className="text-center">
                    <div className="font-semibold text-md">{title}</div>
                    <div className="font-bold text-xl text-primary">{number}</div>
                </div>
            </div>
        </div>
    )
}