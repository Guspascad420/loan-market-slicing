import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UploadField from '../field/upload-field';

export default function CollateralDataForm() {
    return (
        <div className="border border-[#C1C1C1] mb-5">
            <div className="flex items-center bg-dark-blue py-3 px-4">
                <ArrowDropDownIcon className='text-white' />
                <div className="ml-3 font-semibold text-lg text-white">Data Jaminan</div>
            </div>
            <div className="px-5 pt-3">
                <UploadField label="Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir" placeholder="--Upload Fotokopi Dokumen Jaminan--"/>
                <UploadField label="Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan" placeholder="--Upload PDF Surat Pengajuan Bank--"/>
                <UploadField label="Fotokopi Perjanjian Kredit (Jika Over Kredit)" placeholder="--Upload Fotokopi Perjanjian Kredit--"/>
                <UploadField label="Dokumen PPJB (Jika Developer)" placeholder="--Upload Dokumen PPJB--"/>
            </div>
        </div>
    )
}