import { useState } from "react";
import InputField from "../field/input-field";
import SelectField from "../field/select-field";
import { Checkbox } from "@mui/material";

export default function KtpSection() {
    const [formData, setFormData] = useState({
        provinsi: "",
        kota: "",
    });

    const handleSelectChange = (name, value) => {
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    return (
        <div>
            <div className="border border-[#C1C1C1]">
                <div className="bg-dark-blue py-3 px-4">
                    <div className="font-semibold text-lg text-white">Data KTP</div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-x-10 p-5">
                    <InputField label="Alamat Lengkap (Jalan, Komplek, RT/RW)" placeholder="--Isi Alamat Lengkap--" />
                    <InputField label="Kode POS" placeholder="--Isi Kode POS--" />
                    <SelectField onChange={handleSelectChange} label="Provinsi" placeholder="--Pilih Provinsi--" />
                    <SelectField onChange={handleSelectChange} label="Kabupaten / Kota" placeholder="--Pilih Kota--" />
                    <SelectField onChange={handleSelectChange} label="Kecamatan" placeholder="--Pilih Kecamatan--" />
                    <SelectField onChange={handleSelectChange} label="Kelurahan" placeholder="--Pilih Kelurahan--" />
                </div>
            </div>
            <div className="flex justify-between mt-3">
                <div className="flex items-center -ml-3">
                    <Checkbox sx={{
                        color: "#C1C1C1",
                        '&.Mui-checked': {
                            color: "#17A9E2",
                        },
                    }} />
                    <div className="font-semibold">Domisili Sesuai KTP</div>
                </div>
                <button type="button" className=" text-white bg-red-500 font-medium rounded-lg text-sm px-8 py-1 text-center">
                    <div className="text-nowrap">CLEAR</div>
                </button>
            </div>
        </div>
    )
}