import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const { createUser, setReload, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('createPassword');
        const confirmPassword = form.get('confirmPassword');

        console.log(name, photo, email, password);


        if (!/[A-Z]/.test(password)) {
            return toast.warning('You Must use an uppercase in the password')
        }

        if (!/[a-z]/.test(password)) {
            return toast.warning('You Must use a Lowercase in the password')
        }

        if (password.length < 6) {
            return toast.warning('Password Must be at least 6 character')
        }

        if (password !== confirmPassword) {
            toast.warning('Password did not match')
            return
        }
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(
                        setReload(true),
                        toast.success("Successfully create your account"),
                        navigate(location?.state || "/"),
                    )

                e.target.reset();

            })
            .catch(error => {
                toast.warning(error.message)
            })

    }

    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex mx-auto mt-7 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-200 dark:text-gray-800">
                <Helmet>
                    <title>Elite View | Register</title>
                </Helmet>
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register Now</h1>
                </div>
                <form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" required name="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" required name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <h1 className="flex items-center gap-1">
                                        hide <FaEyeSlash />
                                    </h1>
                                ) : (
                                    <h1 className="flex items-center gap-1">
                                        show <FaEye />
                                    </h1>
                                )}
                            </span>
                            <label htmlFor="createPassword" className="block mb-2 text-sm">Create Password</label>
                            <input type={showPassword ? "text" : "password"} required name="createPassword" placeholder="Create Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm">Confirm Password</label>
                            <input type="text" required name="confirmPassword" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className=" btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                            <Link to="/login" className="hover:underline font-bold dark:text-violet-600">Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;