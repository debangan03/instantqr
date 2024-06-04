import React from 'react';

function page() {
  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center py-12 m-4 rounded-lg">
      <div className="max-w-4xl bg-slate-900 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-100">About Us</h1>
        <p className="mt-4 text-gray-200 text-lg">
          Welcome to Instantqr, where we believe in providing quality solutions that make a difference. Established in 2024, our goal has been to offer products and services that meet the highest standards of excellence.
        </p>
        
        <h2 className="mt-6 text-2xl font-semibold text-gray-200">Our Mission</h2>
        <p className="text-gray-200">
          Our mission is to empower our clients by providing top-notch solutions that increase efficiency, enhance productivity, and drive growth.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-200">Our Team</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Debangan</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-600">Jane has over 5 years of experience in the industry and believes in leading by example.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Bibaswan</h3>
            <p className="text-gray-600">CTO</p>
            <p className="text-gray-600">John is a tech enthusiast with a deep passion for developing innovative solutions.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Pritam</h3>
            <p className="text-gray-600">CMO</p>
            <p className="text-gray-600">Alice brings creativity and strategic thinking to the team, driving our marketing efforts forward.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
