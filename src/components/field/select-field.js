export default function SelectField({ label, placeholder, onChange, options = [] }) {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange && onChange(name, value);
    };

    return (
        <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <select
                value={placeholder}
                onChange={handleChange}
                className="w-full border border-[#C1C1C1] rounded-md px-5 py-2 text-gray-500"
            >
                {placeholder && (
                    <option value={placeholder} disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
