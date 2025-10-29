export default function Application({ current }) {
    return (
        <ol className="flex justify-center">
            <li className="flex flex-col items-center">
                <div className="flex items-center">
                    <div className="lg:w-7 h-1"></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 1 ? 'bg-dark-blue' : 'bg-primary'}`}></div>
                    <div className={`w-4 md:w-7 h-1 ${current > 1 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className="hidden lg:block font-semibold text-dark-blue text-wrap text-center text-sm leading-none">Pinjaman</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className="lg:w-10 h-1 bg-dark-blue"></div>
                    <div id="circle" className="w-4 h-4 bg-dark-blue rounded-full"></div>
                    <div className="w-4 md:w-7 h-1 bg-dark-blue"></div>
                </div>
                <div className="hidden lg:block font-semibold text-dark-blue text-wrap text-center text-sm leading-none">Pekerjaan</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className={`lg:w-7 h-1 ${current > 2 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 3 ? 'bg-dark-blue' : current < 3 ? 'bg-gray-300' : 'bg-primary'}`}></div>
                    <div className={`w-4 md:w-7 h-1 ${current > 3 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className="hidden lg:block font-semibold text-dark-blue text-wrap text-center text-sm leading-none">Alamat</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className={`lg:w-10 h-1 ${current > 3 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 4 ? 'bg-dark-blue' : current < 4 ? 'bg-gray-300' : 'bg-primary'}`}></div>
                    <div className={`w-4 md:w-7 lg:w-10 h-1 ${current > 4 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`font-semibold hidden lg:block  ${current > 4 ? 'text-dark-blue' : current < 4 ? 'text-gray-300' : 'text-primary'} text-wrap text-center text-sm leading-none`}>Informasi <br />Asset</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className={`lg:w-10 h-1 ${current > 4 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 5 ? 'bg-dark-blue' : current < 5 ? 'bg-gray-300' : 'bg-primary'}`}></div>
                    <div className={`w-4 md:w-7 lg:w-10 h-1 ${current > 5 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`font-semibold hidden lg:block ${current > 5 ? 'text-dark-blue' : current < 5 ? 'text-gray-300' : 'text-primary'} text-wrap text-center text-sm leading-none`}>Informasi <br />Tambahan</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className={`lg:w-7 h-1 ${current > 5 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 6 ? 'bg-dark-blue' : current < 6 ? 'bg-gray-300' : 'bg-primary'}`}></div>
                    <div className={`lg:w-7 h-1 ${current > 6 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`font-semibold hidden lg:block  ${current > 6 ? 'text-dark-blue' : current < 6 ? 'text-gray-300' : 'text-primary'} text-wrap text-center text-sm leading-none`}>Upload <br />Dokumen</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className={`w-4 md:w-7 h-1 ${current > 6 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 7 ? 'bg-dark-blue' : current < 7 ? 'bg-gray-300' : 'bg-primary'}`}></div>
                    <div className={`lg:w-7 h-1 ${current > 7 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`font-semibold hidden lg:block ${current > 7 ? 'text-dark-blue' : current < 7 ? 'text-gray-300' : 'text-primary'} text-wrap text-center text-sm leading-none`}>Review</div>
            </li>
            <li className="flex flex-col items-center ">
                <div className="flex items-center ">
                    <div className={`w-4 md:w-7 h-1 ${current > 7 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                    <div id="circle" className={`w-4 h-4 rounded-full ${current > 8 ? 'bg-dark-blue' : current < 8 ? 'bg-gray-300' : 'bg-primary'}`}></div>
                    <div className={`lg:w-7 h-1 ${current > 8 ? 'bg-dark-blue' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`font-semibold hidden lg:block ${current > 8 ? 'text-dark-blue' : current < 8 ? 'text-gray-300' : 'text-primary'} text-wrap text-center text-sm leading-none`}>Pilihan <br /> Produk & <br /> Bank</div>
            </li>
            <li className="flex flex-col items-center">
                <div className="flex items-center">    
                    <div className="w-4 md:w-7 h-1 bg-gray-300"></div>
                    <div id="circle" className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="lg:w-7 h-1 bg-gray-300"></div>
                </div>
                <div className="font-semibold hidden lg:block text-gray-300 text-wrap text-center text-sm leading-none">Bank <br />Officer</div>
            </li>
            <li className="flex flex-col items-center">
                <div className="flex items-center">    
                    <div className="w-4 md:w-7 h-1 bg-gray-300"></div>
                    <div id="circle" className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="lg:w-7 h-1 bg-gray-300"></div>
                </div>
                <div className="font-semibold hidden lg:block  text-gray-300 text-wrap text-center text-sm leading-none">Bank <br />Officer</div>
            </li>
            <li className="flex flex-col items-center">
                <div className="flex items-center">    
                    <div className="w-4 md:w-7 h-1 bg-gray-300"></div>
                    <div id="circle" className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="lg:w-7 h-1 bg-gray-300"></div>
                </div>
                <div className="font-semibold hidden lg:block text-gray-300 text-wrap text-center text-sm leading-none">PDF CPA</div>
            </li>
            <li className="flex flex-col items-center">
                <div className="flex items-center">    
                    <div className="w-4 md:w-7 h-1 bg-gray-300"></div>
                    <div id="circle" className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-7 h-1"></div>
                </div>
                <div className="font-semibold hidden lg:block text-gray-300 text-wrap text-center text-sm leading-none">Summary</div>
            </li>

        </ol>
    )
}