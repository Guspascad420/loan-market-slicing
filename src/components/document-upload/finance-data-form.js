import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UploadField from '../field/upload-field';

export default function FinanceDataForm() {
    return (
        <div className="border border-[#C1C1C1] mb-5">
            <div className="flex items-center bg-dark-blue py-3 px-4">
                <ArrowDropDownIcon className='text-white' />
                <div className="ml-3 font-semibold text-lg text-white">Data Keuangan</div>
            </div>
            <div className="px-5 pt-3">
                <UploadField label="Fotokopi SPT/PPh21" placeholder="---Upload Fotokopi SPT/PPh21--"/>
                <UploadField label="Asli Slip Gaji/Surat Keterangan Penghasilan 1 Bulan Terakhir" placeholder="--Upload Asli Slip Gaji 1 Bulan Terakhir--"/>
                <UploadField label="Fotokopi R/K atau tabungan 6 bulan terakhir" placeholder="--Upload Fotokopi R/K 6 Bulan Terakhir--"/>
                <UploadField label="Surat Keterangan/Rekomendasi Perusahaan" placeholder="--Upload Surat Keterangan Perusahaan--"/>
            </div>
        </div>
    )
}