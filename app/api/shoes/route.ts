import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const brand = searchParams.get('brand'); // Mendapatkan parameter "brand" dari URL

    // Data sepatu dengan harga dan ukuran
    const shoes: Record<string, Array<{ id: string; name: string; image: string; price: number; sizes: string[] }>> = {
      adidas: [
        { id: 'adidas 1', name: 'adidas Mens Run Falcon 5 Sneaker', image: '/shoes/adidas/adidas 1.jpg', price:  1051700, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'adidas 2', name: 'adidas Mens Run 84 Sneaker', image: '/shoes/adidas/adidas 2.jpg', price:  1051700, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'adidas 3', name: 'adidas Mens Response Running Sneaker', image: '/shoes/adidas/adidas 3.jpg', price:  692342, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'adidas 4', name: 'adidas Mens Duramo SL Running Sneaker', image: '/shoes/adidas/adidas 4.jpg', price:  647200, sizes: ['40', '41', '42', '43', '44','45'] },
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
        { id: '1', name: 'SALOMON MENS ULTRA FLOW GROTEX ', image: '/shoes/salomon/1salomon.jpg', price:1862517, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '2', name: 'SALOMON MENS Speedcross  ', image: '/shoes/salomon/2salomon.jpg', price:1625687, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '3', name: 'SALOMON MENS Speedcross PEAK SHOE ', image: '/shoes/salomon/3salomon.jpg', price:2110052, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '4', name: 'SALOMON MENS Speedcross EXLIXIR TOUR SNEAKER ', image: '/shoes/salomon/4salomon.jpg', price: 1894472, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '5', name: 'SALOMON MENS ULTRA FLOW GTX SNEAKER ', image: '/shoes/salomon/5 salomon.jpg', price: 2035435, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '6', name: 'SALOMON MENS OUTPULSE MID GORE TEX HIKING BOOT CLIMBING SHOE ', image: '/shoes/salomon/6 salomon.jpg', price: 2676496, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '7', name: 'SALOMON MENS WANDER ', image: '/shoes/salomon/7 salomon.jpg', price:  1703225, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '8', name: 'SALOMON MENS ULTRA FLOW GORE TEX ', image: '/shoes/salomon/8salomon.jpg', price:  1757890., sizes: ['39', '40', '41', '42', '43','44','45'] },





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
