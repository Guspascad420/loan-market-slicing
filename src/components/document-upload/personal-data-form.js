import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UploadField from '../field/upload-field';

export default function PersonalDataForm() {
    return (
        <div className="border border-[#C1C1C1] mb-5">
            <div className="flex items-center bg-dark-blue py-3 px-4">
                <ArrowDropDownIcon className='text-white' />
                <div className="ml-3 font-semibold text-lg text-white">Data Pribadi</div>
            </div>
            <div className="px-5 pt-3">
                <UploadField label="Fotokopi KTP Pemohon" placeholder="--Upload Fotokopi KTP Pemohon--"/>
                <UploadField label="Fotokopi KTP Suami/Istri" placeholder="--Upload Fotokopi KTP Suami/Istri--"/>
                <UploadField label="Fotokopi Kartu Keluarga" placeholder="--Upload Fotokopi Kartu Keluarga--"/>
                <UploadField label="Fotokopi Akte Nikah/Cerai" placeholder="--Upload Fotokopi Akte Nikah/Cerai--"/>
                <UploadField label="Fotokopi NPWP Pemohon" placeholder="--Upload Fotokopi NPWP Pemohon--"/>
                <UploadField label="Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)" placeholder="--Upload Akta Pisah Harga Notaril--"/>
            </div>
        </div>
    )
}