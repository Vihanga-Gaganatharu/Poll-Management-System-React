import {AuthImageComponent} from "../components/image/AuthImageComponent.tsx";
import {AuthInputComponent} from "../components/input/AuthInputComponent.tsx";
import {AuthButtonComponent} from "../components/button/AuthButtonComponent.tsx";

export const UserSignInPage = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#D9F4FC] p-4">
                <div className="flex w-full max-w-5xl bg-white rounded-[10px] shadow-lg overflow-hidden">
                    <AuthImageComponent src="src/assets/login-img.png" alt="Sign In Illustration"/>

                    <div className="w-full md:w-1/2 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl uppercase font-bold text-[#1FCEFF]">Sign In</h2>
                            <p className="text-gray-600 mt-2">Enter your email and password to sign in</p>
                        </div>

                        <form className="space-y-6">
                            <AuthInputComponent id="email" type="email" placeholder="name@gmail.com"
                                                label="Your Email"/>
                            <AuthInputComponent id="password" type="password" placeholder="••••••••" label="Password"/>

                            <div className="text-right">
                                <a href="#" className="text-sm text-[#1FCEFF] hover:text-blue-500"> Forgot
                                    password
                                </a>
                            </div>

                            <AuthButtonComponent type="submit" text="Login"/>
                            <div className="space-y-3">
                                <button type="button"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[60px] shadow-sm text-sm font-bold text-white bg-[#A4EBFF] hover:bg-[#00C8FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <img src="src/assets/google-logo-24.png" className="mx-2" alt="google-logo"/>
                                    SIGN IN WITH GOOGLE
                                </button>
                            </div>

                            <p className="text-center text-sm text-gray-600"> Not registered?{' '}
                                <a href="/signup" className="text-[#1FCEFF] font-semibold hover:text-[#1FCEFF]"> Create
                                    account </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};