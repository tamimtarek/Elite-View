import { Link } from "react-router-dom";


const Cards = ({ card }) => {
    const { image, estate_title, area, segment_name, price, id, status } = card;
    console.log(card)
    return (
        <div >
            <Link to={`/property/${id}`}>
                <div className="card w-full bg-base-100 h-full border-2">
                    <figure><img src={image} alt="comfort" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            {estate_title}
                            <span className="bg-blue-800 text-white rounded-s-badge p-2 text-sm">{status}</span>
                        </h2>
                        <div className="text-lg font-bold flex justify-start">
                            <p>{area}</p>
                            <p>{price}</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;