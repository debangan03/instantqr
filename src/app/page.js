"use client"
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex-grow container min-h-screen mx-auto px-4 py-8">
      <Toaster/>
      <section className="text-center md:mt-16 mt-10">
        <h1 className="text-4xl font-bold text-cyan-500">InstantQR</h1>
        <p className="text-gray-200 mt-4">
          The quickest way to generate QR codes for any URL!
        </p>
      </section>
      <section className="md:mt-20 mt-5">
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="p-4 shadow-lg shadow-blue-900 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold">Easy to Use</h2>
            <p className="text-gray-200 mt-2">
              Simply enter your URL and get a QR code instantly!
            </p>
          </div>
          <div className="p-4 shadow-lg shadow-blue-900 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold">Completely Free</h2>
            <p className="text-gray-200 mt-2">
              No fees or subscriptions required.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center md:mt-10 mb-10">
        <Link
          href="/Createqr"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Your QR Code
        </Link>
      </section>
      <section className="mt-24 text-center md:text-3xl  text-xl">
        <span>Get Api For Your Website or App</span>
        <button onClick={()=>toast("feature comming soon stay tuned")}>&nbsp;&nbsp;&nbsp;&rarr;</button>
      </section>
    </main>
  );
}
