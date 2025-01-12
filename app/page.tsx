"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Brand = {
  id: string;
  name: string;
  logo: string;
};

export default function Home() {
    const [brands, setBrands] = useState<Brand[]>([]);
  
    useEffect(() => {
      const fetchBrands = async () => {
        const res = await fetch('/api/brands');
        const data = await res.json();
        setBrands(data);
      };
  
      fetchBrands();
    }, []);
    return (
        <main className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">Step Up Your Game Discover the Best Sports Shoes Here!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.id}`}
            className="group relative bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="mx-auto w-28 h-28 object-contain p-4 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-blue-500 text-center">{brand.name}</h2>
          </Link>
        ))}
      </div>
    </main>
    );
}