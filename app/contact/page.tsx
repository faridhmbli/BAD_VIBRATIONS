import './globals.css';

export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
        {/* Konten Utama */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center p-6 bg-white shadow-md rounded-lg max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-800">Contact</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
                        <p className="font-semibold text-gray-800">Adidas</p>
                        <div className="flex space-x-4 mt-2">
                            {/* Tautan Website Adidas */}
                            <a
                                href="https://www.adidas.com/shoes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Website
                            </a>
                            {/* Tautan Instagram Adidas */}
                            <a
                                href="https://www.instagram.com/adidas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    );
}