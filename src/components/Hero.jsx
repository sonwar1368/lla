import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Master Your Time,</span>{' '}
                                <span className="block text-primary xl:inline">Master Your Life</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                FocusFlow helps you achieve flow state and boost productivity with our intuitive time management system. Stop juggling, start focusing.
                            </p>
                            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                                <form className="w-full max-w-sm sm:flex sm:max-w-md">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="input-field"
                                        />
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center btn-primary"
                                        >
                                            Get Early Access
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                                Join 2,000+ early adopters. No spam, ever.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
                {/* Abstract Hero Image Placeholder */}
                <div className="w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-9xl opacity-20 select-none">⏱️</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
