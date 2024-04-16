
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const { updateUserProfile, user, setReload } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = (data) => {
        const {name, photoUrl} = data;

        updateUserProfile(name, photoUrl)
        .then(()=>{
            toast.success("User Updated Success")
            navigate(location?.state || "/"),
            setReload(true)
        })
        
    }




    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex mx-auto mt-7 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-200 dark:text-gray-800">
                <Helmet>
                    <title>Elite View | UpdateProfile</title>
                </Helmet>
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-lg md:text-2xl lg:text-4xl font-bold">Update Your Profile</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" placeholder={user.displayName} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                {...register("photoUrl", { required: true })}
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className=" btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Update</button>
                        </div>

                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;