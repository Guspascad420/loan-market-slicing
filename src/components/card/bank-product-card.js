import { Checkbox, Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function BankProductCard({ image, promo, description }) {
    const [checked, setChecked] = useState(false);

    const handleCardClick = () => {
        setChecked((checked) => !checked);
    };

    return (
        <div onClick={handleCardClick} className="bg-white min-h-80 py-5 px-5 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <Checkbox
                checked={checked}
                onChange={() => {
                    setChecked((checked) => !checked);
                }}
                onClick={(e) => e.stopPropagation()}
                sx={{
                    "&.Mui-checked": {
                        color: "#17A9E2",
                    },
                }}
            />
            <Image className="mx-auto" src={image} width={150} height={150} alt="" />
            <div className="flex justify-center">
                <Rating
                    name="half-rating-read"
                    precision={0.5}
                    sx={{
                        fontSize: {
                            xs: '1.3rem',
                            sm: '2rem',
                            md: '2.5rem',
                            lg: '1.7rem',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#FFDF56',
                        },
                    }}
                    value={3.5}
                    readOnly
                />
            </div>
            <div className="mb-1 text-xs text-center">
                1456 Reviews
            </div>
            <div className="font-semibold text-primary text-sm md:text-md wrap-break-word">
                {promo}
            </div>
            <div className="text-xs line-clamp-3 md:line-clamp-none">
                {description}
            </div>
        </div>
    )
}