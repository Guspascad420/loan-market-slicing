import { Add, Remove } from "@mui/icons-material";

export default function ValueAdjuster({ title, value }) {
    return (
        <div>
            <div className="font-semibold mb-1">{ title }</div>
            <div className="flex justify-between items-center mb-4 border border-r-0 rounded-md border-[#C1C1C1]">
                <div className="bg-primary py-2 px-2 rounded-sm border-[#C1C1C1] border">
                    <Remove className="text-white" />
                </div>
                <div>
                    {value ?? "1%"}
                </div>
                <div className="bg-primary py-2 px-2 rounded-sm border-[#C1C1C1] border">
                    <Add className="text-white" />
                </div>
            </div>
        </div>
    )
}