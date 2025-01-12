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
    };}