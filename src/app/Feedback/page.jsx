import React from 'react';

const page = () => {
    return (
        <div className="min-h-screen bg-gray-600 flex items-center justify-center m-4 rounded-lg">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full ">
                <h1 className="text-2xl text-black font-bold mb-4">We Value Your Feedback!</h1>
                <p className="text-gray-600 mb-8">Please fill out the form below to share your feedback with us. Your input helps us improve our services.</p>
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe 
                        src="https://forms.gle/m6TvDKE4bajJCjVm7" 
                        width="100%" 
                        height="100%" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0">
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default page;