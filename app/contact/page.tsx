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
                    <div className="flex flex-col items-center">
                    <p className="font-semibold text-gray-800">Nike</p>
                        <div className="flex space-x-4 mt-2">
                            {/* Tautan Website Nike */}
                            <a
                                href="https://www.nike.com/w/mens-shoes-3yaepznik1zy7ok"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Website
                            </a>
                            {/* Tautan Instagram Nike */}
                            <a
                                href="https://www.instagram.com/nike/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                    <p className="font-semibold text-gray-800">New Balance</p>
                    <div className="flex space-x-4 mt-2">
                            {/* Tautan Website New Balance */}
                            <a
                                href="https://www.newbalance.com/shoes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Website
                            </a>
                            {/* Tautan Instagram New Balance */}
                            <a
                                href="https://www.instagram.com/newbalance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Instagram
                            </a>
                         </div>
                    </div>

                    <div className="flex flex-col items-center">
                    <p className="font-semibold text-gray-800">Ortus</p>
                    <div className="flex space-x-4 mt-2">
                            {/* Tautan Website Ortus */}
                            <a
                                href="https://ortuseight.com/catalog/footwear"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Website
                            </a>
                            {/* Tautan Instagram Ortus */}
                            <a
                                href="https://www.instagram.com/ortuseight/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                    <p className="font-semibold text-gray-800">Salomon</p>
                    <div className="flex space-x-4 mt-2">
                            {/* Tautan Website Salomon */}
                            <a
                                href="https://www.salomon.com/en-us/shop/shoes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Website
                            </a>
                            {/* Tautan Instagram Salomon */}
                            <a
                                href="https://www.instagram.com/salomon/"
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