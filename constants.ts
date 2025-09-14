import { Badge } from './types';

export const TECHNIQUES = [
    { id: 1, title: 'Teknik 1', subtitle: 'Tetapkan Sasaran Pengguna', description: 'Kenalpasti pembaca sasaran dan gaya pembelajaran mereka untuk menyesuaikan kandungan ebook anda.', gradient: 'from-red-500 to-pink-500', icon: '🎯' },
    { id: 2, title: 'Teknik 2', subtitle: 'Kumpul Sumber Rujukan', description: 'Sediakan sumber rujukan berkualiti untuk menyokong kandungan dan meningkatkan kredibiliti ebook.', gradient: 'from-green-500 to-teal-500', icon: '📚' },
    { id: 3, title: 'Teknik 3', subtitle: 'Pemilihan Tajuk Buku', description: 'Cipta tajuk yang menarik perhatian dan menggambarkan kandungan ebook dengan jelas.', gradient: 'from-yellow-500 to-orange-500', icon: '📝' },
    { id: 4, title: 'Teknik 4', subtitle: 'Rancang Idea Penulisan', description: 'Buat peta minda dan susun idea untuk memastikan aliran kandungan yang logik dan menarik.', gradient: 'from-purple-500 to-indigo-500', icon: '💡' },
    { id: 5, title: 'Teknik 5', subtitle: 'Susun Atur Aset Interaktif', description: 'Pilih dan susun elemen multimedia yang sesuai untuk meningkatkan pengalaman pembelajaran.', gradient: 'from-pink-500 to-red-500', icon: '🧩' },
    { id: 6, title: 'Teknik 6', subtitle: 'Jadual Isi Kandungan', description: 'Susun struktur bab dan topik untuk memastikan kandungan tersusun dengan baik.', gradient: 'from-indigo-500 to-blue-500', icon: '📅' },
    { id: 7, title: 'Teknik 7', subtitle: 'Proses Edaran & Promosi', description: 'Tentukan platform dan strategi untuk menyebarkan ebook kepada pembaca sasaran.', gradient: 'from-teal-500 to-green-500', icon: '📤' },
];

export const STEP_NAMES: { [key: number]: string } = {
    1: 'Tetapkan Sasaran Pengguna', 2: 'Kumpul Sumber Rujukan', 3: 'Pemilihan Tajuk Buku',
    4: 'Rancang Idea Penulisan', 5: 'Susun Atur Aset Interaktif', 6: 'Jadual Isi Kandungan',
    7: 'Proses Edaran & Promosi'
};

export const BADGES: Badge[] = [
    { id: 'new-writer', name: 'Penulis Baru', icon: '✍️', stepToUnlock: 1 },
    { id: 'content-planner', name: 'Perancang Konten', icon: '🗺️', stepToUnlock: 4 },
    { id: 'digital-publisher', name: 'Penerbit Digital', icon: '🏆', stepToUnlock: 7 },
];

export const FLASHCARD_DATA: { [key: number]: { title: string; cards: { q: string; a: string; q_grad: string; a_grad: string }[] } } = {
    1: {
        title: '🎯 Flashcard: Tetapkan Sasaran Pengguna',
        cards: [
            { q: 'Apakah maksud "sasaran pengguna"?', a: 'Kumpulan pembaca yang menjadi fokus penulisan ebook.', q_grad: 'from-red-500 to-pink-500', a_grad: 'from-emerald-500 to-teal-500' },
            { q: 'Nyatakan 3 kumpulan sasaran yang biasa dipilih.', a: 'Pelajar sekolah, pelajar politeknik/IPT, guru.', q_grad: 'from-blue-500 to-indigo-600', a_grad: 'from-orange-500 to-amber-500' },
            { q: 'Apakah 3 gaya pembelajaran dominan?', a: 'Visual, Auditori, Kinestetik.', q_grad: 'from-purple-500 to-violet-600', a_grad: 'from-cyan-500 to-blue-500' },
            { q: 'Kenapa penting kenal pasti tahap pendidikan sasaran?', a: 'Supaya bahasa, isi kandungan dan contoh sesuai.', q_grad: 'from-green-500 to-emerald-600', a_grad: 'from-rose-500 to-pink-500' },
            { q: 'Apa yang berlaku jika sasaran pengguna tidak jelas?', a: 'Kandungan jadi terlalu umum dan kurang berfokus.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-indigo-500 to-purple-500' },
            { q: 'Contoh minat pembaca sasaran yang boleh dijadikan tema?', a: 'Teknologi, sukan, kerjaya, hobi, atau isu semasa.', q_grad: 'from-teal-500 to-cyan-500', a_grad: 'from-lime-500 to-green-500' }
        ]
    },
    2: {
        title: '📚 Flashcard: Kumpul Sumber Rujukan',
        cards: [
            { q: 'Nyatakan 2 contoh sumber rujukan berkualiti.', a: 'Buku teks dan jurnal ilmiah.', q_grad: 'from-green-500 to-teal-500', a_grad: 'from-blue-500 to-indigo-600' },
            { q: 'Apakah kelebihan guna artikel ilmiah?', a: 'Memberi fakta sahih & terkini.', q_grad: 'from-blue-500 to-indigo-600', a_grad: 'from-green-500 to-teal-500' },
            { q: 'Bagaimana cara menyusun rujukan dengan kemas?', a: 'Simpan dalam folder khas atau aplikasi reference manager.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-purple-500 to-violet-600' },
            { q: 'Mengapa perlu gunakan sumber atas talian yang sah?', a: 'Elak maklumat palsu dan tidak sahih.', q_grad: 'from-purple-500 to-indigo-500', a_grad: 'from-pink-500 to-red-500' },
            { q: 'Apa jenis rujukan visual boleh disertakan?', a: 'Gambarajah, carta, infografik.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-indigo-500 to-blue-500' },
            { q: 'Apa kesan jika rujukan tidak berkualiti?', a: 'Ebook jadi kurang dipercayai & tidak profesional.', q_grad: 'from-indigo-500 to-blue-500', a_grad: 'from-teal-500 to-green-500' }
        ]
    },
    3: {
        title: '📝 Flashcard: Pemilihan Tajuk Buku',
        cards: [
            { q: 'Apakah ciri utama tajuk ebook yang baik?', a: 'Ringkas, menarik, dan relevan.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-purple-500 to-indigo-500' },
            { q: 'Apa tujuan tajuk mesti “catchy”?', a: 'Untuk tarik minat pembaca.', q_grad: 'from-purple-500 to-indigo-500', a_grad: 'from-pink-500 to-red-500' },
            { q: 'Alat apa boleh digunakan cari tajuk trending?', a: 'Google Trends.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-teal-500 to-green-500' },
            { q: 'Bagaimana tajuk boleh beri nilai tambah pada pembaca?', a: 'Dengan menjelaskan manfaat atau penyelesaian masalah.', q_grad: 'from-teal-500 to-green-500', a_grad: 'from-red-500 to-pink-500' },
            { q: 'Beri contoh tajuk yang tidak sesuai.', a: '“Nota Saja” (tidak jelas dan tidak menarik).', q_grad: 'from-red-500 to-pink-500', a_grad: 'from-blue-500 to-indigo-600' },
            { q: 'Contoh tajuk sesuai untuk pelajar sekolah?', a: '“13 Rahsia Power Matematik".', q_grad: 'from-blue-500 to-indigo-600', a_grad: 'from-yellow-500 to-orange-500' }
        ]
    },
    4: {
        title: '💡 Flashcard: Rancang Idea Penulisan',
        cards: [
            { q: 'Apa teknik brainstorming popular?', a: 'Peta minda, senarai topik, 5W1H.', q_grad: 'from-purple-500 to-indigo-500', a_grad: 'from-pink-500 to-red-500' },
            { q: 'Apa itu 5W1H?', a: 'What, Why, When, Where, Who, How.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-teal-500 to-green-500' },
            { q: 'Mengapa penting bina objektif pembelajaran?', a: 'Supaya penulisan lebih fokus & jelas.', q_grad: 'from-teal-500 to-green-500', a_grad: 'from-yellow-500 to-orange-500' },
            { q: 'Apa peranan naratif dalam ebook?', a: 'Menjadikan isi lebih menarik & mudah diikuti.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-red-500 to-pink-500' },
            { q: 'Contoh soalan brainstorming “Why”.', a: '“Kenapa topik ini penting untuk pembaca saya?”', q_grad: 'from-red-500 to-pink-500', a_grad: 'from-blue-500 to-indigo-600' },
            { q: 'Apakah hasil akhir sesi brainstorming?', a: 'Senarai idea atau struktur kandungan awal.', q_grad: 'from-blue-500 to-indigo-600', a_grad: 'from-yellow-500 to-orange-500' }
        ]
    },
    5: {
        title: '🧩 Flashcard: Aset & Kandungan Interaktif',
        cards: [
            { q: 'Apa maksud microlearning?', a: 'Kandungan dalam segmen kecil & fokus.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-indigo-500 to-blue-500' },
            { q: 'Beri 2 contoh elemen multimedia.', a: 'Audio narasi & video penerangan.', q_grad: 'from-indigo-500 to-blue-500', a_grad: 'from-green-500 to-teal-500' },
            { q: 'Fungsi kuiz interaktif dalam ebook?', a: 'Menguji kefahaman pembaca.', q_grad: 'from-green-500 to-teal-500', a_grad: 'from-yellow-500 to-orange-500' },
            { q: 'Apakah kelebihan drag & drop activity?', a: 'Meningkatkan penglibatan pelajar secara aktif.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-purple-500 to-indigo-500' },
            { q: 'Aplikasi apa boleh digunakan hasilkan ebook interaktif?', a: 'PowerPoint, Canva, Genially, ePub Editor.', q_grad: 'from-purple-500 to-indigo-500', a_grad: 'from-pink-500 to-red-500' },
            { q: 'Kenapa butang navigasi penting?', a: 'Memudahkan pembaca bergerak antara bahagian.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-teal-500 to-green-500' }
        ]
    },
    6: {
        title: '📅 Flashcard: Jadual Isi Kandungan',
        cards: [
             { q: 'Apakah fungsi utama Jadual Isi Kandungan (TOC)?', a: 'Memberi gambaran keseluruhan struktur ebook kepada pembaca.', q_grad: 'from-indigo-500 to-blue-500', a_grad: 'from-green-500 to-teal-500' },
             { q: 'Berapa bab yang ideal untuk ebook permulaan?', a: 'Antara 3 hingga 5 bab sudah memadai.', q_grad: 'from-blue-500 to-indigo-600', a_grad: 'from-yellow-500 to-orange-500' },
             { q: 'Apakah komponen utama dalam setiap bab?', a: 'Pengenalan, isi utama, dan rumusan ringkas.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-purple-500 to-indigo-500' },
             { q: 'Mengapa perlu ada kesinambungan antara bab?', a: 'Untuk memastikan aliran pembacaan yang lancar dan logik.', q_grad: 'from-purple-500 to-indigo-500', a_grad: 'from-pink-500 to-red-500' },
             { q: 'Apakah tajuk bab terakhir yang sesuai?', a: 'Rumusan, Kesimpulan, atau Langkah Seterusnya.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-teal-500 to-green-500' },
             { q: 'Bagaimana TOC boleh dijadikan interaktif?', a: 'Dengan menambah pautan (hyperlink) ke setiap bab.', q_grad: 'from-teal-500 to-green-500', a_grad: 'from-indigo-500 to-blue-500' }
        ]
    },
    7: {
        title: '📤 Flashcard: Proses Edaran & Promosi',
        cards: [
            { q: 'Apakah platform global paling popular untuk terbitkan ebook?', a: 'Amazon Kindle (KDP – Kindle Direct Publishing).', q_grad: 'from-teal-500 to-green-500', a_grad: 'from-blue-500 to-indigo-600' },
            { q: 'Apakah platform lokal Malaysia untuk jual ebook?', a: 'IndieUSM dan Ordersini.com.', q_grad: 'from-blue-500 to-indigo-600', a_grad: 'from-green-500 to-teal-500' },
            { q: 'Apa kelebihan jual di Amazon Kindle?', a: 'Akses pasaran global, royalti fleksibel, pembaca antarabangsa.', q_grad: 'from-yellow-500 to-orange-500', a_grad: 'from-purple-500 to-violet-600' },
            { q: 'Apa kelebihan IndieUSM untuk penulis tempatan?', a: 'Platform mesra penulis, pasaran sasaran Malaysia, sokongan komuniti.', q_grad: 'from-purple-500 to-indigo-500', a_grad: 'from-pink-500 to-red-500' },
            { q: 'Bagaimana Ordersini bantu jual ebook?', a: 'Sediakan sistem kedai online + pembayaran automatik.', q_grad: 'from-pink-500 to-red-500', a_grad: 'from-indigo-500 to-blue-500' },
            { q: 'Strategi promosi tambahan selepas terbit di webstore?', a: 'Kongsi link jualan di media sosial, email marketing, Telegram/WhatsApp group', q_grad: 'from-indigo-500 to-blue-500', a_grad: 'from-teal-500 to-green-500' }
        ]
    }
};
