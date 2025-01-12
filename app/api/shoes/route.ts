import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const brand = searchParams.get('brand'); // Mendapatkan parameter "brand" dari URL

    // Data sepatu dengan harga dan ukuran
    const shoes: Record<string, Array<{ id: string; name: string; image: string; price: number; sizes: string[] }>> = {
      adidas: [
        
      ],
      ortuseight: [
        { id: '1', name: 'HYPERBLAST SHADOW VantaBlack', image: '/shoes/orthus/1 ortus.jpg', price: 699000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '2', name: 'SOLAR ECLIPSE Penumbra', image: '/shoes/orthus/2 ortus.jpg', price: 2499000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '3', name: 'HYPERBLAST TOSCA ORTRANGE', image: '/shoes/orthus/3 ortus.jpg', price: 699000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '4', name: 'SHKHARA Graphite Sage', image: '/shoes/orthus/4 ortus.jpg', price: 1199000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '5', name: 'SHKHARA Olive Pine', image: '/shoes/orthus/5 ortus.jpg', price:1199000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '6', name: 'HYPERGLIDE WHITE ORTRED NAVY ', image: '/shoes/orthus/6 ortus.jpg', price:699000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '7', name: 'White CyanHYPERBLAST ', image: '/shoes/orthus/7 ortus.jpg', price:699000, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '8', name: 'HYPERBLAST Black Purple ', image: '/shoes/orthus/8 ortus.jpg', price:699000, sizes: ['39', '40', '41', '42', '43','44','45'] },



      ],
      nike: [
        
      ],
      newbalance: [

      ],
      salomon: [

      ],
      on: [

      ]

    };

    
    const shoeData = brand && shoes[brand] ? shoes[brand] : [];

    return NextResponse.json(shoeData);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}
