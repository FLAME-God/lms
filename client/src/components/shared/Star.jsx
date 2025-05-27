import { Star as StarIcon } from 'lucide-react';

function Star({ rating }) {
    return (
        <>
            {
                [...Array(5)].map((_, i) => (
                    <StarIcon
                        key={i}
                        size={16}
                        className={i < Math.floor(rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
                    />
                ))
            }
        </>
    );
}

export default Star;
