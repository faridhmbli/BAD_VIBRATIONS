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
        { id: 'adidas 5', name: 'adidas Womens Cloudfoam Pure Sportswear Sneaker', image: '/shoes/adidas/adidas 5.jpg', price: 618237, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'adidas 6', name: 'adidas Mens Racer TR23 Sneaker', image: '/shoes/adidas/adidas 6.jpg', price: 711272, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'adidas 7', name: 'adidas Mens UBounce DNA Sneaker', image: '/shoes/adidas/adidas 7.jpg', price: 970800, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'adidas 8', name: 'adidas Mens Supernova Rise Sneaker', image: '/shoes/adidas/adidas 8.jpg', price: 970800, sizes: ['40', '41', '42', '43', '44','45'] },

     
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
        { id: 'nike 1', name: 'Nike mens Pegasus 39 Road Running', image: '/shoes/nike/nike 1.jpg', price:1941600, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nike 2', name: 'Nike Mens Downshifter Sneaker', image: '/shoes/nike/nike 2.jpg', price: 1207513, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nike 3', name: 'Nike Mens Sneaker Running Shoes', image: '/shoes/nike/nike 3.jpg', price:  1647306, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nike 4', name: 'Nike Pegasus 41 Blueprint', image: '/shoes/nike/nike 4.png', price:  2099000, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nike 5', name: 'Nike Vaporfly 3', image: '/shoes/nike/nike 5.jpeg', price: 3399000, sizes: ['40', '41', '42', '43'] },
        { id: 'nike 6', name: 'Nike Invincible 3 Electric', image: '/shoes/nike/nike 6.png', price:2999000, sizes: ['40', '41', '42', '43', '44'] },
        { id: 'nike 7', name: 'Nike Pegasus 41 By You', image: '/shoes/nike/nike 7.png', price: 2248000, sizes: ['40', '41', '42', '43', '44'] },
        { id: 'nike 8', name: 'Nike Pegasus 41 Premium', image: '/shoes/nike/nike 8.jpeg', price: 2199000, sizes: ['40', '41', '42', '43', '44'] },

      ],
      newbalance: [
        { id: 'nb 1', name: 'New Balance Womens Fresh Foam Arishi V4 Running Shoe', image: '/shoes/new_balance/nb 1.jpg', price:1064482, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 2', name: 'New Balance Mens Fresh Foam X 1080 V13 Running Shoe', image: '/shoes/new_balance/nb 2.jpg', price: 2831338, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 3', name: 'New Balance Mens 520 V8 Running Shoe', image: '/shoes/new_balance/nb 3.jpg', price: 1131791, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 4', name: 'New Balance Mens Fresh Foam X More V4 Running Shoe', image: '/shoes/new_balance/nb 4.jpg', price: 2426838, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 5', name: 'New Balance Womens Fresh Foam ROAV V1 Sneaker', image: '/shoes/new_balance/nb 5.jpg', price: 1197000, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 6', name: 'New Balance Womens Fresh Foam X 1080 V13 Running Shoe', image: '/shoes/new_balance/nb 6.jpg', price: 2698000, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 7', name: 'New Balance Mens Fresh Foam Roav V1 Sneaker', image: '/shoes/new_balance/nb 7.jpg', price: 1374000, sizes: ['40', '41', '42', '43', '44','45'] },
        { id: 'nb 8', name: 'New Balance Mens Fresh Foam X 880 V14 Running Shoe', image: '/shoes/new_balance/nb 8.jpg', price: 1779638, sizes: ['40', '41', '42', '43', '44','45'] },





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
        { id: '1', name: 'ON WOMENS CLOUDSWIFT SNEAKERS ', image: '/shoes/oncloud/1 oncloud.jpg', price:  3502602., sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '2', name: 'ON MENS CLOUD SNEAKERS ', image: '/shoes/oncloud/2 oncloud.jpg', price:  3247150., sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '3', name: 'HAWKWELL WOMENS CLOUD ZERO ', image: '/shoes/oncloud/3 oncloud.jpg', price:974226., sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '4', name: 'ON MENS CLOUDSURFER SNEAKER ', image: '/shoes/oncloud/4 oncloud.jpg', price:3083940., sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '5', name: 'ON MENS CLOUDMONSTER SNEAKER ', image: '/shoes/oncloud/5 ouncloud.jpg', price:2515546, sizes: ['39', '40', '41', '42', '43','44','45'] },
        { id: '6', name: 'ORTHOCOMFOOT MOWENS SNEAKERS ', image: '/shoes/oncloud/6 oncloud.jpg', price: 1623818, sizes: ['39', '40', '41', '42', '43','44','45'] },
        

      ]

    };

    
    const shoeData = brand && shoes[brand] ? shoes[brand] : [];

    return NextResponse.json(shoeData);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}
