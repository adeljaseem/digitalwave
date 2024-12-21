import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const heroSectionRef = useRef(null);
    const servicesSectionRef = useRef(null);
    const whyChooseUsSectionRef = useRef(null);
    const testimonialsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formValid = true;
        const newErrors = {
            name: '',
            email: '',
            message: ''
        };

        if (!formData.name) {
            newErrors.name = 'Name is required'
            formValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid Email'
            formValid = false;
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
            formValid = false
        }

        setErrors(newErrors)


        if (formValid) {
            toast.success('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }

    };

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="font-sans">

<nav className="bg-purple-900 py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <span className="text-white font-bold text-2xl sm:text-3xl font-['Great_Vibes'] tracking-wide text-pink-400">DigitalWave</span>
                    <div className="hidden md:flex space-x-6">
                        <button onClick={() => scrollToSection(heroSectionRef)} className="text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Home</button>
                        <button onClick={() => scrollToSection(servicesSectionRef)} className="text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Services</button>
                        <button onClick={() => scrollToSection(whyChooseUsSectionRef)} className="text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Why Choose Us</button>
                        <button onClick={() => scrollToSection(testimonialsSectionRef)} className="text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Testimonials</button>
                        <button onClick={() => scrollToSection(contactSectionRef)} className="text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Contact</button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-pink-400 focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="bg-gray-700 py-2 px-4 space-y-2">
                        <button onClick={() => scrollToSection(heroSectionRef)} className="block text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Home</button>
                         <button onClick={() => scrollToSection(servicesSectionRef)} className="block text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Services</button>
                        <button onClick={() => scrollToSection(whyChooseUsSectionRef)} className="block text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Why Choose Us</button>
                        <button onClick={() => scrollToSection(testimonialsSectionRef)} className="block text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Testimonials</button>
                        <button onClick={() => scrollToSection(contactSectionRef)} className="block text-gray-300 hover:text-white cursor-pointer font-medium italic hover:text-pink-400 transition-colors duration-300 focus:outline-none">Contact</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section ref={heroSectionRef} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 sm:py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Boost Your Business with Next-Gen Marketing Solutions!</h1>
                    <p className="text-base sm:text-lg mb-6 sm:mb-8">
                        We help young, tech-savvy businesses like yours achieve unprecedented growth through our innovative and data-driven marketing strategies. Our team of experts is dedicated to understanding your unique challenges and creating tailored solutions that drive real results. Partner with DigitalWave Marketing to take your business to the next level.
                    </p>
                    <button onClick={() => scrollToSection(contactSectionRef)} className="bg-white text-purple-500 py-2 px-4 sm:px-6 rounded-full font-bold hover:bg-purple-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesSectionRef} className="py-12 sm:py-16 bg-gradient-to-r from-purple-100 to-pink-100">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Social Media Management</h3>
                            <p className="text-gray-700 text-sm">
                                We craft engaging and strategic social media campaigns that resonate with your target audience, build brand awareness, and drive conversions. Our services include content creation, community management, and performance analysis across all major platforms.
                            </p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">SEO Optimization</h3>
                            <p className="text-gray-700 text-sm">
                                Improve your website's visibility and organic rankings with our comprehensive SEO services. We conduct keyword research, on-page optimization, and technical audits to ensure your website is search engine friendly and attracts high-quality traffic.
                            </p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Pay-Per-Click (PPC) Campaigns</h3>
                            <p className="text-gray-700 text-sm">
                                Maximize your ROI with our data-driven PPC advertising campaigns. We create targeted ads, manage bidding strategies, and monitor performance to drive qualified leads and generate measurable results for your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section ref={whyChooseUsSectionRef} className="py-12 sm:py-16 bg-gradient-to-r from-pink-100 to-purple-100 ">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Why Choose Us?</h2>
                     <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                       At DigitalWave Marketing, we are more than just a marketing agency. We are your strategic partners, committed to helping you navigate the ever-changing digital landscape and achieve your business objectives. We pride ourselves on our client-centric approach, our innovative strategies, and our unwavering commitment to delivering results.
                     </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Results-Driven</h3>
                            <p className="text-gray-700 text-sm">We are focused on achieving measurable outcomes, whether it’s increased sales, brand awareness, or lead generation. Our strategies are backed by data and continuously optimized for maximum impact.</p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Innovative Strategies</h3>
                            <p className="text-gray-700 text-sm">We stay ahead of the curve by employing the latest marketing technologies, techniques, and strategies, ensuring that your business is always at the forefront of digital marketing. </p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">24/7 Support</h3>
                             <p className="text-gray-700 text-sm">We provide responsive and reliable support to our clients. Our team is available to answer questions, address concerns, and provide regular updates, so you are never left in the dark.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section ref={testimonialsSectionRef} className="py-12 sm:py-16 bg-gradient-to-r from-purple-100 to-pink-100">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/assets/Jane.jpg"
                                alt="Customer 1"
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover  hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-gray-700 mb-2 sm:mb-4 italic text-sm">"DigitalWave really helped me boost my business, I'm so greatfull"</p>
                            <h4 className="font-bold text-gray-800 text-sm">- Jane Doe</h4>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/assets/John.jpg"
                                alt="Customer 2"
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-gray-700 mb-2 sm:mb-4 italic text-sm">"Thanks to them, my traffic increased a lot!"</p>
                            <h4 className="font-bold text-gray-800 text-sm">- John Doe</h4>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/assets/Smith.jpg"
                                alt="Customer 3"
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-gray-700 mb-2 sm:mb-4 italic text-sm">"I'm very satisfied with their services, and I will use them again"</p>
                            <h4 className="font-bold text-gray-800 text-sm">- Jane Smith</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section ref={contactSectionRef} className="py-12 sm:py-16 bg-gradient-to-r from-pink-100 to-purple-100 ">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">Contact Us</h2>
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-4 sm:mb-6">
                            <input
                                type="text"
                                className={`w-full p-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}

                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="mb-4 sm:mb-6">
                            <input
                                type="email"
                                className={`w-full p-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-4 sm:mb-6">
                            <textarea
                                className={`w-full p-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                rows="4"
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <button type='submit' className="bg-purple-500 text-white py-2 px-4 sm:px-6 rounded-full font-bold hover:bg-purple-600 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <ToastContainer />

            {/* Footer */}
            <footer className="bg-gray-800 py-4 sm:py-6 text-white">
                <div className="container mx-auto flex justify-between items-center px-4 text-sm">
                    <div>
                        <p>© {new Date().getFullYear()} DigitalWave Marketing. All Rights Reserved.</p>
                    </div>
                    <div className="flex items-center">
                        <a href="/privacy-policy" className="mr-3 sm:mr-4">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of Service</a>
                        <div className="ml-4 sm:ml-6 flex items-center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2 sm:mr-3 hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2 sm:mr-3 hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-2 sm:mr-3 hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2 sm:mr-3 hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;