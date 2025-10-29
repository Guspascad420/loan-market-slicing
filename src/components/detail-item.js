import React from 'react';

const DetailItem = React.memo(({ title, value }) => {
    return (
        <div className="pt-5 lg:grid lg:grid-cols-4 items-center">
            <div className="font-semibold">{title}</div>
            <div className="bg-[#EBEBEB] border col-span-3 flex-5 border-[#C1C1C1] py-3 px-4 rounded-lg">
                {value}
            </div>
        </div>
    );
});

export default DetailItem;