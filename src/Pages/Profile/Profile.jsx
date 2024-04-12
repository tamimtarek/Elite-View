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
                <img src={user.photoURL} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2 className="text-xl font-semibold">{user.displayName}</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;