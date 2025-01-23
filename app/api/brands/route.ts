import { NextResponse } from 'next/server';
export async function GET() {
    const brands = [
      { id: 'adidas', name: 'Adidas', logo: '/images/adidas-logo.png' },
      { id: 'ortuseight', name: 'Ortuseight', logo: '/images/ortus-logo.png' },
      { id: 'salomon', name: 'Salomon', logo: '/images/salomon-logo.png' },
      { id: 'nike', name: 'Nike', logo: '/images/nike-logo.png' },
      { id: 'newbalance', name: 'New Balance', logo: '/images/newbalance-logo.png' },
      { id: 'on', name: 'On', logo: '/images/on-logo.png' },
      { id: 'asics', name: 'Asics', logo: '/images/asics-logo.png' },
    ];
  
    return NextResponse.json(brands);
  }