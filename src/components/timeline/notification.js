export default function Notification() {
    return (
        <ol>
            <div className="flex">
                <div className="text-gray-500 font-medium text-sm w-14">2 hrs</div>
                <div className="border-s-[3.5px] border-gray-300 dark:border-gray-700 ">
                    <li className="ms-4 relative">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -start-6.5 top-1 dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="font-semibold text-sm w-32 text-gray-900 dark:text-white">admin_branch has updated</div>
                        <p className="mb-4 w-36 text-sm text-gray-500 dark:text-gray-400">Harry Handoko - Contact|MYCRM</p>
                    </li>
                </div>
            </div>
            <div className="flex">
                <div className="text-gray-500 font-medium text-sm w-14">2 hrs</div>
                <div className="border-s-[3.5px] border-gray-300 dark:border-gray-700 ">
                    <li className="ms-4 relative">
                        <div className="absolute w-4 h-4 bg-gray-700 rounded-full -start-6.5 top-1 dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="font-semibold text-sm w-32 text-gray-900 dark:text-white">admin_branch has updated</div>
                        <p className="mb-4 w-36 text-sm text-gray-500 dark:text-gray-400">Harry Handoko - Application|MYCRM</p>
                    </li>
                </div>
            </div>
            <div className="flex">
                <div className="text-gray-500 font-medium text-sm w-14">4 hrs</div>
                <div className="border-s-[3.5px] border-gray-300 dark:border-gray-700 ">
                    <li className="ms-4 relative">
                        <div className="absolute w-4 h-4 bg-gray-700 rounded-full -start-6.5 top-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="font-semibold text-sm w-32 text-gray-900 dark:text-white">admin_branch has updated</div>
                        <p className="mb-4 w-36 text-sm text-gray-500 dark:text-gray-400">Harry Handoko - Application|MYCRM</p>
                    </li>
                </div>
            </div>
            <div className="flex">
                <div className="text-gray-500 font-medium text-sm w-14 -mt-2">4 hrs</div>
                <div>
                    <li className="ms-5 -mt-2 relative">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -start-6.5 top-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="font-semibold text-sm w-32 text-gray-900 dark:text-white">admin_branch has updated</div>
                        <p className="mb-4 w-36 text-sm text-gray-500 dark:text-gray-400">Harry Handoko - Application|MYCRM</p>
                    </li>
                </div>
            </div>
        </ol>
    )
}