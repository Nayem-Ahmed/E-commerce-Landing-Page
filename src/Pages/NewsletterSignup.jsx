import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateEmail(email)) {
            // Handle successful email submission
            console.log('Email submitted:', email);
            setSuccess(true);
            setError('');
        } else {
            // Set error message if email is invalid
            setError('Please enter a valid email address.');
            setSuccess(false);
        }
    };

    return (
        <div className=' bg-gradient-to-r from-blue-400 via-purple-200 to-blue-900 py-5 '>

            <div className="max-w-lg mx-auto mt-10 p-5  ">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up for Our Newsletter</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded mb-4"
                    />
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {success && <p className="text-green-500 mb-4">Thank you for signing up!</p>}
                    <button type="submit" className="bg-[#58B19F] text-white py-2 px-4 rounded hover:bg-[#3a8269] transition duration-200">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSignup;
