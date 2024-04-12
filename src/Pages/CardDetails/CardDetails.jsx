import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";


const CardDetails = () => {
    const { cards } = useContext(AuthContext);
    console.log(cards)
    const { id } = useParams();
    console.log(id)
    // const idnt = parseInt(id);
    const cardContent = cards.find(card => card.id === id);
    console.log(cardContent)
    const { image, estate_title, area, segment_name, price,
        location, description, facilities, status } = cardContent;
    return (
        <div className="card lg:w-[1280px] mt-11 mx-auto bg-base-100">
            <img className="rounded-t-lg" src={image} alt="" />
            <div className="card-body">
                <h2 className="card-title flex items-center">
                    <h2 className="text-3xl font-bold">{estate_title}</h2>
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <h3  className="font-bold text-2xl">{segment_name}</h3>
                <p><span className="font-bold">Description:</span> {description}</p>
                <h3><span className="font-bold">Status:</span> {status}</h3>
                <h3><span className="font-bold">Price: </span> {price}</h3>
                <h3><span className="font-bold">Location:</span> {location}</h3>
                <h3><span className="font-bold">Facilities: </span>{facilities.slice().join(', ')}</h3>
            </div>
        </div>
    );
};

export default CardDetails;