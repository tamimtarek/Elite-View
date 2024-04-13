
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoUrl');
       
        updateUserProfile(name, photo).then(toast.success("Successfully create your account"))


    }


    return (
        <div>
            <div className="flex mx-auto mt-7 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-200 dark:text-gray-800">
                <Helmet>
                    <title>Elite View | UpdateProfile</title>
                </Helmet>
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-lg md:text-2xl lg:text-4xl font-bold">Update Your Profile</h1>
                </div>
                <form onSubmit={handleUpdateProfile} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" required name="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className=" btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Update</button>
                        </div>

                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UpdateProfile;