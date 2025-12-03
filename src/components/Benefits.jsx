import React from 'react';

const benefits = [
    {
        title: 'Smart Scheduling',
        description: 'AI-powered calendar that automatically finds the best time for your deep work sessions.',
        icon: '🧠',
    },
    {
        title: 'Distraction Blocking',
        description: 'Silence notifications and block distracting apps across all your devices with one click.',
        icon: '🛡️',
    },
    {
        title: 'Insightful Analytics',
        description: 'Visualize your productivity patterns and understand where your time actually goes.',
        icon: '📊',
    },
];

const Benefits = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Why FocusFlow?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Everything you need to reclaim your attention and get more done in less time.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-2xl">
                                        {benefit.icon}
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {benefit.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
