

const Proper = ({card}) => {
    const { image, estate_title, area, segment_name, price, description } = card;
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{segment_name}</a>
                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>{price}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Proper;