import { FcGoogle } from "react-icons/fc";

export const Signin = () => {
    return (
        <>
            <div
                className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                {/* Sign in section */}
                <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                    <h4 className="mb-2.5 text-4xl font-bold text-green-800 dark:text-white">
                        Sign In
                    </h4>
                    <p className="mb-9 ml-1 text-base text-gray-600">
                        Enter your email and password to sign in!
                    </p>
                    <div
                        className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
                        <div className="rounded-full text-xl">
                            <FcGoogle />
                        </div>
                        <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                            Sign In with Google
                        </h5>
                    </div>
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                        <p className="text-base text-gray-600 dark:text-white"> or </p>
                        <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Email*
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="mail@simmmple.com"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Password*
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Min. 8 characters"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                        />
                    </div>
                    {/* Checkbox */}
                    <div className="mb-4 flex items-center justify-between px-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="keep-logged-in"
                                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <label
                                htmlFor="keep-logged-in"
                                className="ml-2 text-sm font-medium text-green-700 dark:text-white"
                            >
                                Keep me logged In
                            </label>
                        </div>
                        <a
                            className="text-sm font-medium text-green-300 hover:text-green-600 dark:text-white"
                            href=" "
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        className="linear mt-2 w-full rounded-xl bg-green-800 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-400">
                        Sign In
                    </button>
                    <div className="mt-4">
                        <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
                            Not registered yet?
                        </span>
                        <a
                            href=" "
                            className="ml-1 text-sm font-medium text-green-300 hover:text-green-600 dark:text-white"
                        >
                            Create an account
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
