
import React from 'react';

const FaqItem: React.FC<{ title: string; children: React.ReactNode; borderColor: string; }> = ({ title, children, borderColor }) => (
    <div className={`border-l-4 ${borderColor} pl-4 py-2`}>
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{children}</p>
    </div>
);

const TipItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="bg-white bg-opacity-20 rounded-lg p-4">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm">{children}</p>
    </div>
);


const FaqPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
    return (
        <div className="fade-in">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">❓ Soalan Lazim (FAQ)</h2>
                <p className="text-gray-600">Jawapan kepada soalan yang kerap ditanya tentang penulisan ebook interaktif</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                        <h3 className="text-xl font-bold">🚀 Panduan Asas Penulisan eBook</h3>
                    </div>
                    <div className="p-6 space-y-4">
                        <FaqItem title="Bagaimana cara mula menulis eBook?" borderColor="border-blue-500">→ Mula dengan rangka bab. Susun idea utama terlebih dahulu sebelum menulis kandungan penuh.</FaqItem>
                        <FaqItem title="Perlu guna bahasa formal atau santai?" borderColor="border-green-500">→ Ikut sasaran pembaca. Untuk pelajar gunakan bahasa mudah, untuk profesional boleh lebih formal.</FaqItem>
                        <FaqItem title="Format apa paling sesuai diterbitkan?" borderColor="border-yellow-500">→ PDF untuk universal. Boleh dibaca di semua peranti dan mudah dikongsi.</FaqItem>
                        <FaqItem title="Perlu guna gambar dalam eBook?" borderColor="border-purple-500">→ Ya, untuk tarik minat. Gambar dan infografik membantu pembaca faham dengan lebih baik.</FaqItem>
                        <FaqItem title="Berapa panjang ideal untuk eBook?" borderColor="border-pink-500">→ 35–55 muka surat ringkas. Cukup untuk sampaikan maklumat tanpa membosankan pembaca.</FaqItem>
                    </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">💡 Tips Tambahan</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <TipItem title="✍️ Penulisan">Tulis dalam ayat pendek dan jelas. Gunakan contoh untuk mudahkan pemahaman.</TipItem>
                        <TipItem title="🎨 Design">Pilih warna yang sesuai dengan topik. Pastikan teks mudah dibaca.</TipItem>
                        <TipItem title="📱 Interaktif">Tambah kuiz atau aktiviti untuk buat pembaca lebih terlibat.</TipItem>
                        <TipItem title="🔗 Promosi">Kongsi di media sosial dan platform pembelajaran untuk jangkauan lebih luas.</TipItem>
                    </div>
                </div>
                
                <div className="text-center">
                    <button onClick={onBackToHome} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        🏠 Kembali ke Utama
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
