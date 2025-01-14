import { Link } from "react-router-dom";


const Cards = ({ card }) => {
    const { image, estate_title, area, segment_name, price, id, status } = card;
    console.log(card)
    return (
        <div >
            <div  className="card bg-base-100 h-full border-2 animate__animated animate__backInUp">
                <figure><img data-aos="zoom-in-up" data-aos-duration="3000" src={image} alt="comfort" /></figure>
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
                    <Link data-aos="zoom-in-right" data-aos-duration="500" to={`/property/${id}`}><button className="btn btn-secondary w-full">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;