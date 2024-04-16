import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Proper from "./Poper";
import { Helmet } from "react-helmet";


const Property = () => {
    const { cards } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Elite View | Property</title>
            </Helmet>
            <h3 className="text-lg md:text-2xl lg:text-4xl text-center p-10 font-bold">Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    cards.map(card => <Proper key={card.id} card={card}></Proper>)
                }
            </div>
        </div>
    );
};

export default Property;