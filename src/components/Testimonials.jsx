import React from 'react';

const testimonials = [
    {
        content: "FocusFlow completely transformed how I manage my day. I'm getting 2x more done.",
        author: "Sarah J.",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        content: "The distraction blocking feature is a game changer. Finally, I can focus.",
        author: "David K.",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Trusted by Productivity Enthusiasts
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <img
                                    className="h-12 w-12 rounded-full object-cover"
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                />
                                <div className="ml-4">
                                    <div className="text-lg font-bold text-gray-900">{testimonial.author}</div>
                                    <div className="text-sm text-primary">{testimonial.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
