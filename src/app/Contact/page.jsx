import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 m-4 rounded-lg">
      <div className="max-w-2xl w-full bg-slate-800 p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-200 text-sm font-bold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
