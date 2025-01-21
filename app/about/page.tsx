import './globals.css';

export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center p-6 bg-white shadow-md rounded-lg max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-800">About</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify"> 
          Selamat datang di E-Katalog Sepatu Olahraga, platform digital yang dirancang khusus untuk para pencinta olahraga dan gaya hidup aktif! Kami menyajikan koleksi sepatu olahraga terbaik dari merek-merek ternama, lengkap dengan informasi terbaru, fitur-fitur unggulan, dan ulasan terpercaya. Dengan desain yang interaktif dan mudah digunakan, kami memastikan pengalaman belanja Anda menjadi lebih menyenangkan.
          </p>
        </div>
      </div>
    );
}