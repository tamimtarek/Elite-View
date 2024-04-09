import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const [success, setSeccess] = useState('');
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('createPassword');
        const confirmPassword = form.get('confirmPassword');
        setError('');
        setSeccess('');
        console.log(name, photo, email, password);

        if(!/@gamil\.com$/.test(email)){
            setError('Email ends With @gmail.com')
            return
        }

        if(!/\d.*\d.*$/.test(password)){
            setError('You should use at least 2 number')
            return
        }

        if(password !==confirmPassword){
            setError('Password did not match')
            return
        }
        createUser(email, password)
        .then(() => {
            setSeccess("Successfully create your account")
        })
        .catch(error => {
            setError(error.message)
        })
        
    }

    return (
        <div className="flex mx-auto mt-7 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-200 dark:text-gray-800">
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
                        <label htmlFor="createPassword" className="block mb-2 text-sm">Create Password</label>
                        <input type="password" required name="createPassword" placeholder="Create Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm">Confirm Password</label>
                        <input type="text" required name="confirmPassword" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                   
                    {
                        success && <p className="text-green-600 text-sm">{success}</p>
                    }
                    {
                        error && <p className="text-red-500 text-sm">{error}</p>
                    }
                </div>
                <div className="space-y-2">
                    <div>
                        <button className=" btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to="/login" className="hover:underline font-bold dark:text-violet-600">Login</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;