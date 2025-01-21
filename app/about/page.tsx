import React from 'react';

const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">Tentang E-Katalog Sepatu Olahraga</h1>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify"> 
          Selamat datang di E-Katalog Sepatu Olahraga, platform digital yang dirancang khusus untuk para pencinta olahraga dan gaya hidup aktif! Kami menyajikan koleksi sepatu olahraga terbaik dari merek-merek ternama, lengkap dengan informasi terbaru, fitur-fitur unggulan, dan ulasan terpercaya. Dengan desain yang interaktif dan mudah digunakan, kami memastikan pengalaman belanja Anda menjadi lebih menyenangkan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-xl font-semibold text-dark blue-500">Pilihan Beragam</h2>
              <p className="text-gray-600"> Temukan sepatu yang sesuai dengan kebutuhan olahraga Anda, mulai dari lari, basket, hingga hiking. </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-xl font-semibold text-dark blue-500">Inovasi Terkini</h2>
              <p className="text-gray-600">Kami menghadirkan produk-produk dengan teknologi terbaru untuk performa optimal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;