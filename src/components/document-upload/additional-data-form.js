import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UploadField from '../field/upload-field';

export default function AdditionalDataForm() {
    return (
        <div className="border border-[#C1C1C1] mb-5">
            <div className="flex items-center bg-dark-blue py-3 px-4">
                <ArrowDropDownIcon className='text-white' />
                <div className="ml-3 font-semibold text-lg text-white">Data Keuangan</div>
            </div>
            <div className="px-5 pt-3">
                <UploadField label="File Kekurangan 1" placeholder="--Upload File Kekurangan 1--"/>
                <UploadField label="File Kekurangan 2" placeholder="--Upload File Kekurangan 2--"/>
            </div>
        </div>
    )
}