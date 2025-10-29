export default function InputField({ label, placeholder }) {
    return (
        <div className="mb-3">
            <label className="block mb-1 font-semibold">{label}</label>
            <input
                placeholder={placeholder}
                className="w-full border border-[#C1C1C1] rounded-md px-3 py-2 focus:ring focus:ring-primary"
            />
        </div>
    )
}