import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const [success, setSuccess] = useState('');
    const [displayError, setDisplayError] = useState('')
    const {login} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        setSuccess('');
        setDisplayError('');
        login(email, password)
        .then(()=> {
            setSuccess("Login Successfull")
        })
        .catch(error => {
            setDisplayError(error.message)
        })
    }

    return (
        <div className="flex mx-auto mt-10 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-200 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Please Login</h1>
            </div>
            <form onSubmit={handleLogin} noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    {
                        success && <p className="text-green-600 text-sm">{success}</p>
                    }
                    {
                        displayError && <p className="text-red-500 text-sm">{displayError}</p>
                    }
                </div>
                <div className="space-y-2">
                    <div>
                        <button className="btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                        <Link to="/register" className="hover:underline font-bold dark:text-violet-600">Register</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;