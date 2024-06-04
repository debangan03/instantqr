"use client"
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import {toast,Toaster} from 'react-hot-toast';

function Page() {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState(null);
    const qrRef = useRef();

    const generateQRCode = () => {
        if (url.trim() !== '' ) {
            setQrCode(url);
            toast.success('QR code generated successfully!');
        }
        else{
            toast.error('Please enter a valid URL.')
        }
    };

    const downloadQR = () => {
        const canvas = qrRef.current.querySelector('canvas');  // Find the canvas element in the QRCode component
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = image;
        link.click();
        toast.success('QR code downloaded successfully!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 m-4 rounded-lg">
            <Toaster/>
            <div className="bg-slate-900 shadow-xl rounded-lg p-8">
                <h1 className="text-xl font-semibold text-gray-100 mb-6">QR Code Generator</h1>
                <input
                    type="text"
                    className="form-input mt-1 block w-full px-3 py-2 bg-black border border-gray-300 text-white rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Enter URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button
                    className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow"
                    onClick={generateQRCode}
                >
                    Generate
                </button>
                {qrCode && (
                    <div className="mt-8" ref={qrRef}>
                        <QRCode value={qrCode} size={256} level="H" includeMargin={true} />
                        <button
                            className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-md shadow"
                            onClick={downloadQR}
                        >
                            Download QR
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
