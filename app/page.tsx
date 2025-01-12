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
    }, []);}