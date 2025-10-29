import { useState } from "react";
import SelectField from "../field/select-field";
import InputField from "../field/input-field";

export default function WorkAddressSection() {
    const [formData, setFormData] = useState({
        provinsi: "",
        kota: "",
    });

    const handleSelectChange = (name, value) => {
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    return (
        <div className="mt-5">
            <div className="border border-[#C1C1C1]">
                <div className="bg-dark-blue py-3 px-4">
                    <div className="font-semibold text-lg text-white">Data Alamat Tempat Bekerja</div>
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
        </div>
    )
}