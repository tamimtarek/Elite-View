import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Elite View | Profile</title>
            </Helmet>
            <div className="flex mx-auto flex-col max-w-md p-6 rounded-lg dark:bg-gray-200 dark:text-gray-800">
                <img data-aos="zoom-out"
                    data-aos-easing="linear"
                    data-aos-duration="1500" src={user.photoURL} alt="User Image" className="flex-shrink-0 rounded-full object-cover h-64 sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2><span className="text-xl font-semibold">User Name: </span>{user.displayName}</h2>
                    <p><span className="text-xl font-semibold">Email: </span>{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;