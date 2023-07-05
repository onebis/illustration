import type {NextPage} from 'next'

const Login: NextPage = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3">
                    <h1 className="text-2xl font-bold mb-6">ログイン</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="password">Password</label>
                            <input
                                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="password" type="password" placeholder="Enter your password"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                               href="#">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
