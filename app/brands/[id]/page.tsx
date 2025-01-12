"use client";
import { useEffect, useState } from 'react';

type Shoe = {
  id: string;
  name: string;
  image: string;
  price: number;
  sizes: string[];
};

export default function BrandDetail({ params }: { params: { id: string } }) {
    const [shoes, setShoes] = useState<Shoe[]>([]);
    const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchShoes = async () => {
        const res = await fetch(`/api/shoes?brand=${params.id}`);
        const data = await res.json();
        setShoes(data);
      };
  
      fetchShoes();
    }, [params.id]);
  
    const handleShoeClick = (shoe: Shoe) => {
      setSelectedShoe(shoe);
      setIsModalOpen(true); // Show the modal
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <main className="container mx-auto p-6">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Sepatu {params.id}</h1>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {shoes.map((shoe) => (
              <div
                key={shoe.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => handleShoeClick(shoe)}
              >
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">{shoe.name}</h2>
                  <p className="mt-2 text-xl font-bold text-black">Rp {shoe.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
    
          {/* Modal for selected shoe */}
          {isModalOpen && selectedShoe && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                <button
                  className="absolute top-4 right-4 text-black font-bold text-2xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  <img
                    src={selectedShoe.image}
                    alt={selectedShoe.name}
                    className="w-72 h-72 object-contain mb-4 transition-transform duration-300 transform hover:scale-110"
                  />
                  <h2 className="text-2xl font-semibold text-gray-800">{selectedShoe.name}</h2>
                  <p className="text-xl mt-2 text-center text-black">Harga: Rp {selectedShoe.price.toLocaleString()}</p>
                  <p className="text-xl mt-2 text-center text-black">Ukuran Tersedia: {selectedShoe.sizes.join(', ')}</p>
                </div>
              </div>
            </div>
          )}
        </main>
      );

}