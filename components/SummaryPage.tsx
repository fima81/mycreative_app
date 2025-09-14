
import React, { useState } from 'react';
import { UserData, WallPost } from '../types';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface SummaryPageProps {
    userName: string;
    userData: UserData;
    completedSteps: Set<number>;
    wallPosts: WallPost[];
    onAddPost: (text: string) => void;
    onSaveReflection: (reflection: { learning: string; nextSteps: string; }) => void;
    showModal: (message: string) => void;
    onBackToActivity: () => void;
}

const SummaryReport: React.FC<{ userData: UserData }> = ({ userData }) => {
    const { step1 = {}, step2 = {}, step3 = {}, step4 = {}, step5 = {}, step6 = {}, step7 = {} } = userData;
    const interactiveElements = step5.interactiveElements?.map((id: string) => ({'audio': 'Audio/Narasi', 'video': 'Video', 'quiz': 'Kuiz Interaktif', 'dragdrop': 'Drag & Drop', 'animation': 'Animasi', 'infographic': 'Infografik'}[id])).join(', ') || 'Tiada dipilih';
    const distributionMethods = step7.distributionMethods?.map((id: string) => ({'googledrive': 'Google Drive', 'lms': 'LMS', 'telegram': 'Telegram', 'qrcode': 'QR Code', 'website': 'Laman Web', 'email': 'Email'}[id])).join(', ') || 'Tiada dipilih';

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500"><h4 className="font-semibold text-red-800 mb-2">🎯 Sasaran Pembaca</h4><p className="text-red-700">{step1.targetAudience || 'Belum diisi'}</p><p className="text-red-600 text-sm mt-1">Gaya pembelajaran: {step1.learningStyle || 'Belum diisi'}</p></div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500"><h4 className="font-semibold text-green-800 mb-2">📚 Sumber Rujukan</h4><ul className="text-green-700 text-sm space-y-1">{[step2.reference1, step2.reference2, step2.reference3].filter(Boolean).map((r,i) => <li key={i}>• {r}</li>) || <li>Belum diisi</li>}</ul></div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500"><h4 className="font-semibold text-yellow-800 mb-2">📝 Tajuk Cadangan</h4><ul className="text-yellow-700 text-sm space-y-1">{[step3.title1, step3.title2].filter(Boolean).map((t,i) => <li key={i}>• {t}</li>) || <li>Belum diisi</li>}</ul></div>
                </div>
                <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500"><h4 className="font-semibold text-purple-800 mb-2">💡 Idea Penulisan</h4><p className="text-purple-700 text-sm">{step4.contentIdeas || 'Belum diisi'}</p></div>
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500"><h4 className="font-semibold text-pink-800 mb-2">🧩 Elemen Interaktif</h4><div className="text-pink-700 text-sm">{interactiveElements}</div></div>
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500"><h4 className="font-semibold text-indigo-800 mb-2">📅 Jadual Isi Kandungan</h4><ul className="text-indigo-700 text-sm space-y-1">{[step6.chapter1, step6.chapter2, step6.chapter3, step6.chapter4].filter(Boolean).map((c,i) => <li key={i}>• Bab {i+1}: {c}</li>) || <li>Belum diisi</li>}</ul></div>
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500"><h4 className="font-semibold text-teal-800 mb-2">📤 Kaedah Edaran</h4><div className="text-teal-700 text-sm">{distributionMethods}</div></div>
                </div>
            </div>
        </div>
    );
};

const Reflection: React.FC<{ onSave: (data: { learning: string; nextSteps: string; }) => void }> = ({ onSave }) => {
    const [learning, setLearning] = useState('');
    const [nextSteps, setNextSteps] = useState('');

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6"><h3 className="text-2xl font-bold text-gray-800 mb-2">✨ Refleksi Pembelajaran</h3><p className="text-gray-600">Renungkan pembelajaran anda dan rancang langkah seterusnya</p></div>
            <div className="grid md:grid-cols-2 gap-6">
                <div><h4 className="text-lg font-semibold text-gray-800 mb-4">💭 Apa yang telah anda pelajari?</h4><textarea value={learning} onChange={e => setLearning(e.target.value)} rows={6} placeholder="Tulis refleksi anda di sini..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea></div>
                <div><h4 className="text-lg font-semibold text-gray-800 mb-4">🎯 Langkah seterusnya</h4><textarea value={nextSteps} onChange={e => setNextSteps(e.target.value)} rows={6} placeholder="Apakah rancangan anda selepas ini?" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea></div>
            </div>
            <div className="text-center mt-6"><button onClick={() => onSave({ learning, nextSteps })} className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">💾 Simpan Refleksi</button></div>
        </div>
    );
};

const CommunityWall: React.FC<{ posts: WallPost[]; onAddPost: (text: string) => void }> = ({ posts, onAddPost }) => {
    const [postText, setPostText] = useState('');
    
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6"><h3 className="text-2xl font-bold text-gray-800 mb-2">🧑‍🤝‍🧑 Wall Komuniti</h3><p className="text-gray-600">Kongsi idea dan belajar daripada pengguna lain</p></div>
            <div className="mb-6"><h4 className="text-lg font-semibold text-gray-800 mb-4">📝 Kongsi Idea Anda</h4><textarea value={postText} onChange={e => setPostText(e.target.value)} rows={4} placeholder="Kongsi idea, tips, atau pengalaman anda..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-4"></textarea><button onClick={() => { onAddPost(postText); setPostText(''); }} className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors">📤 Hantar</button></div>
            <div className="space-y-4">
                {posts.map((post, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6"><div className="flex items-center mb-3"><div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">{post.userName.charAt(0).toUpperCase()}</div><div className="ml-3"><h5 className="font-semibold text-gray-800">{post.userName}</h5><p className="text-sm text-gray-500">{new Date(post.timestamp).toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })}</p></div></div><p className="text-gray-700">{post.text}</p></div>
                ))}
            </div>
        </div>
    );
};

const SummaryPage: React.FC<SummaryPageProps> = ({ userName, userData, completedSteps, wallPosts, onAddPost, onSaveReflection, showModal, onBackToActivity }) => {
    
    const downloadPDF = () => {
        // @ts-ignore
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text("Deraf Laporan Penulisan eBook Interaktif", 10, 20);
        doc.setFontSize(12);
        doc.text(`Nama Peserta: ${userName || 'Peserta'}`, 10, 35);
        doc.text(`Tarikh Dilaksanakan: ${new Date().toLocaleDateString('ms-MY')}`, 10, 45);
        doc.text(`Status: ${Math.round((completedSteps.size / 7) * 100)}% siap (${completedSteps.size}/7 teknik selesai)`, 10, 55);
        doc.setFontSize(14);
        doc.text("Ringkasan Teknik", 10, 70);
        
        const { step1 = {}, step2 = {}, step3 = {}, step4 = {}, step5 = {}, step6 = {}, step7 = {} } = userData;
        const body = [
            ['1. Sasaran Pengguna', `Pembaca: ${step1.targetAudience || 'Belum diisi'}\nGaya Pembelajaran: ${step1.learningStyle || 'Belum diisi'}`],
            ['2. Sumber Rujukan', [step2.reference1, step2.reference2, step2.reference3].filter(Boolean).map(r => `• ${r}`).join('\n') || 'Belum diisi'],
            ['3. Tajuk Buku', [step3.title1, step3.title2].filter(Boolean).map(t => `• ${t}`).join('\n') || 'Belum diisi'],
            ['4. Idea Penulisan', step4.contentIdeas || 'Belum diisi'],
            ['5. Elemen Interaktif', step5.interactiveElements?.join(', ') || 'Tiada dipilih'],
            ['6. Jadual Isi Kandungan', [step6.chapter1, step6.chapter2, step6.chapter3, step6.chapter4].filter(Boolean).map((c,i) => `Bab ${i+1}: ${c}`).join('\n') || 'Belum diisi'],
            ['7. Proses Edaran & Promosi', step7.distributionMethods?.join(', ') || 'Tiada dipilih']
        ];
        
        // @ts-ignore
        doc.autoTable({ head: [['Teknik', 'Rumusan Anda']], body, startY: 80, theme: 'striped', headStyles: { fillColor: [59, 130, 246] } });
        
        doc.save(`deraf-laporan-ebook-${(userName || 'peserta').toLowerCase().replace(/\s/g, '-')}.pdf`);
    };
    
    const shareToWall = () => {
        const summaryText = `${userName || 'Saya'} baru sahaja selesai merancang ebook interaktif menggunakan Teknik Tulis & Terbit! 7 langkah yang sangat membantu untuk mencipta kandungan yang menarik dan berkesan. 📚✨`;
        onAddPost(summaryText);
        showModal('✅ Rumusan anda telah dikongsi ke Wall Komuniti!');
    };
    
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx6-tYNXmtJ2KP0ci7rB8s7Yqstbchp0I_d_fjtlwBwoJYsm0-fZa01cXJX4nh4pk7m/exec';

    const sendDataToGoogleSheet = async () => {
        // Bina payload yang lengkap dengan semua data pengguna
        const payload = {
            userName: userName || 'Peserta Tanpa Nama',
            tarikh: new Date().toLocaleDateString('ms-MY'),
            status: Math.round((completedSteps.size / 7) * 100),
            userData: userData // Hantar keseluruhan objek userData
        };

        try {
            showModal('Menyimpan data kemajuan anda...');
            
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Penting: Diperlukan untuk permintaan POST ringkas ke Apps Script dari sisi klien
                cache: 'no-cache',
                headers: {
                    // Gunakan 'text/plain' untuk memastikan payload dihantar dengan betul dalam mod 'no-cors'
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(payload), // Tukar objek payload kepada string JSON
                redirect: 'follow',
            });

            // Dalam mod 'no-cors', kita tidak boleh membaca respons dari server.
            // Jadi, kita anggap permintaan berjaya jika tiada ralat rangkaian berlaku.
            showModal('✅ Data telah berjaya disimpan!');

        } catch (error) {
            console.error('Ralat menghantar data ke Google Sheet:', error);
            showModal('Gagal menyimpan data. Sila semak sambungan internet anda.');
        }
    };


    return (
        <div className="fade-in">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">📊 Rumusan Akhir</h2>
                <p className="text-gray-600">Laporan lengkap rancangan ebook interaktif {userName}</p>
                <button onClick={onBackToActivity} className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-semibold">
                    ↩️ Kembali ke Aktiviti
                </button>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-8">
                <SummaryReport userData={userData} />
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    <button onClick={downloadPDF} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">📄 Muat Turun PDF</button>
                    <button onClick={shareToWall} className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">🧑‍🤝‍🧑 Kongsi ke Dinding</button>
                    <button onClick={sendDataToGoogleSheet} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">💾 Simpan Data</button>
                </div>
                <Reflection onSave={onSaveReflection} />
                <CommunityWall posts={wallPosts} onAddPost={onAddPost} />
            </div>
        </div>
    );
};

export default SummaryPage;
