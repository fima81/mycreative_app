
import React from 'react';
import { UserData } from '../types';

interface StepProps {
    data: any;
    onDataChange: (data: any) => void;
    onNext?: () => void;
    onPrev?: () => void;
    onComplete?: () => void;
}

const StepHeader: React.FC<{ title: string, icon: string, gradient: string, description: string }> = ({ title, icon, gradient, description }) => (
    <>
        <div className={`bg-gradient-to-r ${gradient} text-white p-6 rounded-t-xl`}>
            <h2 className="text-2xl font-bold flex items-center">{icon} {title}</h2>
        </div>
        <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <p className="text-gray-600 mb-6">{description}</p>
            {/* Children will be rendered here */}
        </div>
    </>
);

const StepContainer: React.FC<{ title: string; icon: string; gradient: string; description: string; children: React.ReactNode; }> = ({ title, icon, gradient, description, children }) => (
    <div className="fade-in">
        <div className={`bg-gradient-to-r ${gradient} text-white p-6 rounded-t-xl`}>
            <h2 className="text-2xl font-bold flex items-center">{icon} {title}</h2>
        </div>
        <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <p className="text-gray-600 mb-6">{description}</p>
            {children}
        </div>
    </div>
);

// FIX: Added default properties to the 'data' prop to resolve TypeScript errors.
const Step1: React.FC<StepProps> = ({ data = { targetAudience: '', learningStyle: '' }, onDataChange, onNext }) => {
    const isComplete = data.targetAudience && data.learningStyle?.trim();
    return (
        <StepContainer title="Langkah 1: Tetapkan Sasaran Pengguna" icon="🎯" gradient="from-red-500 to-pink-500" description="Kenalpasti siapa pembaca sasaran anda dan gaya pembelajaran mereka.">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pembaca Sasaran:</label>
                    <select value={data.targetAudience || ''} onChange={e => onDataChange({...data, targetAudience: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Pilih sasaran pembaca...</option>
                        <option value="pelajar-sekolah">Pelajar Sekolah</option>
                        <option value="guru">Guru & Pendidik</option>
                        <option value="umum">Orang Awam</option>
                        <option value="profesional">Profesional</option>
                        <option value="ibu-bapa">Ibu Bapa</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gaya Pembelajaran Dominan:</label>
                    <input type="text" value={data.learningStyle || ''} onChange={e => onDataChange({...data, learningStyle: e.target.value})} placeholder="Contoh: Visual, Audio, Kinestetik, atau campuran" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
            </div>
             <div>
                <button 
                    onClick={onNext} 
                    disabled={!isComplete}
                    className={`mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Seterusnya →
                </button>
                {!isComplete && <p className="text-sm text-red-500 mt-2">Sila lengkapkan kedua-dua bahagian di atas.</p>}
            </div>
        </StepContainer>
    );
};

const Step2: React.FC<StepProps> = ({ data = {}, onDataChange, onNext, onPrev }) => {
    const isComplete = (data.reference1 && data.reference1.trim()) || (data.reference2 && data.reference2.trim()) || (data.reference3 && data.reference3.trim());
    return (
        <StepContainer title="Langkah 2: Kumpul Sumber Rujukan" icon="📚" gradient="from-green-500 to-teal-500" description="Senaraikan 3 sumber rujukan berkualiti untuk ebook anda.">
            <div className="space-y-4">
                {[1, 2, 3].map(i => (
                     <div key={i}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sumber Rujukan {i}:</label>
                        <input type="text" value={data[`reference${i}`] || ''} onChange={e => onDataChange({...data, [`reference${i}`]: e.target.value})} placeholder="Contoh: Buku, artikel, laman web, jurnal..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 mt-6">
                <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">← Sebelum</button>
                <button 
                    onClick={onNext} 
                    disabled={!isComplete}
                    className={`bg-green-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-green-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Seterusnya →
                </button>
            </div>
             {!isComplete && <p className="text-sm text-red-500 mt-2">Sila masukkan sekurang-kurangnya satu sumber rujukan.</p>}
        </StepContainer>
    );
};

// FIX: Added default properties to the 'data' prop to resolve TypeScript errors.
const Step3: React.FC<StepProps> = ({ data = { title1: '', title2: '' }, onDataChange, onNext, onPrev }) => {
    const isComplete = (data.title1 && data.title1.trim()) || (data.title2 && data.title2.trim());
    return (
        <StepContainer title="Langkah 3: Pemilihan Tajuk Buku" icon="📝" gradient="from-yellow-500 to-orange-500" description="Cadangkan 2 tajuk menarik untuk ebook anda.">
             <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tajuk Cadangan 1:</label>
                    <input type="text" value={data.title1 || ''} onChange={e => onDataChange({...data, title1: e.target.value})} placeholder="Contoh: Panduan Lengkap Pembelajaran Interaktif" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tajuk Cadangan 2:</label>
                    <input type="text" value={data.title2 || ''} onChange={e => onDataChange({...data, title2: e.target.value})} placeholder="Contoh: Revolusi Digital dalam Pendidikan" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
                </div>
            </div>
            <div className="flex gap-4 mt-6">
                <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">← Sebelum</button>
                <button 
                    onClick={onNext}
                    disabled={!isComplete}
                    className={`bg-yellow-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-yellow-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Seterusnya →
                </button>
            </div>
            {!isComplete && <p className="text-sm text-red-500 mt-2">Sila masukkan sekurang-kurangnya satu cadangan tajuk.</p>}
        </StepContainer>
    );
};

// FIX: Added default properties to the 'data' prop to resolve TypeScript errors.
const Step4: React.FC<StepProps> = ({ data = { contentIdeas: '' }, onDataChange, onNext, onPrev }) => {
    const isComplete = data.contentIdeas && data.contentIdeas.trim();
    return (
        <StepContainer title="Langkah 4: Rancang Idea Penulisan" icon="💡" gradient="from-purple-500 to-indigo-500" description="Buat peta minda ringkas atau senarai topik utama.">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Idea & Topik Penulisan:</label>
                <textarea value={data.contentIdeas || ''} onChange={e => onDataChange({...data, contentIdeas: e.target.value})} rows={6} placeholder="Contoh:&#10;• Pengenalan kepada pembelajaran digital&#10;• Teknik pembelajaran interaktif&#10;• Penggunaan teknologi dalam pendidikan&#10;• Strategi penilaian digital" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
            </div>
            <div className="flex gap-4 mt-6">
                <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">← Sebelum</button>
                <button 
                    onClick={onNext}
                    disabled={!isComplete}
                    className={`bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-purple-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Seterusnya →
                </button>
            </div>
            {!isComplete && <p className="text-sm text-red-500 mt-2">Sila tuliskan idea atau topik penulisan anda.</p>}
        </StepContainer>
    );
};

const Step5: React.FC<StepProps> = ({ data = { interactiveElements: [] }, onDataChange, onNext, onPrev }) => {
    const options = [
        { id: 'audio', label: '🎵 Audio/Narasi' }, { id: 'video', label: '🎥 Video' },
        { id: 'quiz', label: '❓ Kuiz Interaktif' }, { id: 'dragdrop', label: '🖱️ Drag & Drop' },
        { id: 'animation', label: '✨ Animasi' }, { id: 'infographic', label: '📊 Infografik' },
    ];
    const handleChange = (id: string) => {
        const currentElements = data.interactiveElements || [];
        const newElements = currentElements.includes(id) 
            ? currentElements.filter((el: string) => el !== id) 
            : [...currentElements, id];
        onDataChange({ ...data, interactiveElements: newElements });
    };
    const isComplete = data.interactiveElements && data.interactiveElements.length > 0;

    return (
        <StepContainer title="Langkah 5: Susun Atur Aset & Kandungan Interaktif" icon="🧩" gradient="from-pink-500 to-red-500" description="Pilih elemen interaktif yang ingin digunakan dalam ebook anda.">
            <div className="grid md:grid-cols-2 gap-4">
                {options.map(opt => (
                     <label key={opt.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input type="checkbox" checked={data.interactiveElements?.includes(opt.id)} onChange={() => handleChange(opt.id)} className="form-checkbox h-5 w-5 text-pink-600" />
                        <span className="text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
            <div className="flex gap-4 mt-6">
                <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">← Sebelum</button>
                <button 
                    onClick={onNext} 
                    disabled={!isComplete}
                    className={`bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-pink-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Seterusnya →
                </button>
            </div>
            {!isComplete && <p className="text-sm text-red-500 mt-2">Sila pilih sekurang-kurangnya satu elemen interaktif.</p>}
        </StepContainer>
    );
};

// FIX: Added default properties to the 'data' prop to resolve TypeScript errors.
const Step6: React.FC<StepProps> = ({ data = { chapter1: '', chapter2: '', chapter3: '', chapter4: '' }, onDataChange, onNext, onPrev }) => {
    const isComplete = (data.chapter1 && data.chapter1.trim()) && (data.chapter2 && data.chapter2.trim());
    return (
        <StepContainer title="Langkah 6: Jadual Isi Kandungan (TOC)" icon="📅" gradient="from-indigo-500 to-blue-500" description="Susun 3-4 bab utama untuk ebook anda.">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bab 1:</label>
                    <input type="text" value={data.chapter1 || ''} onChange={e => onDataChange({...data, chapter1: e.target.value})} placeholder="Contoh: Pengenalan" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bab 2:</label>
                    <input type="text" value={data.chapter2 || ''} onChange={e => onDataChange({...data, chapter2: e.target.value})} placeholder="Contoh: Konsep Asas" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bab 3:</label>
                    <input type="text" value={data.chapter3 || ''} onChange={e => onDataChange({...data, chapter3: e.target.value})} placeholder="Contoh: Aplikasi Praktik" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bab 4 (Pilihan):</label>
                    <input type="text" value={data.chapter4 || ''} onChange={e => onDataChange({...data, chapter4: e.target.value})} placeholder="Contoh: Kesimpulan & Langkah Seterusnya" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"/>
                </div>
            </div>
            <div className="flex gap-4 mt-6">
                <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">← Sebelum</button>
                <button 
                    onClick={onNext} 
                    disabled={!isComplete}
                    className={`bg-indigo-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-indigo-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Seterusnya →
                </button>
            </div>
            {!isComplete && <p className="text-sm text-red-500 mt-2">Sila masukkan sekurang-kurangnya tajuk untuk Bab 1 dan Bab 2.</p>}
        </StepContainer>
    );
};

const Step7: React.FC<StepProps> = ({ data = { distributionMethods: [] }, onDataChange, onPrev, onComplete }) => {
    const options = [
        { id: 'googledrive', label: '☁️ Google Drive' }, { id: 'lms', label: '🎓 LMS' },
        { id: 'telegram', label: '💬 Telegram' }, { id: 'qrcode', label: '📱 QR Code' },
        { id: 'website', label: '🌐 Laman Web' }, { id: 'email', label: '📧 Email' },
    ];
    const handleChange = (id: string) => {
        const currentMethods = data.distributionMethods || [];
        const newMethods = currentMethods.includes(id) 
            ? currentMethods.filter((el: string) => el !== id) 
            : [...currentMethods, id];
        onDataChange({ ...data, distributionMethods: newMethods });
    };
    const isComplete = data.distributionMethods && data.distributionMethods.length > 0;
    return (
        <StepContainer title="Langkah 7: Proses Edaran & Promosi" icon="📤" gradient="from-teal-500 to-green-500" description="Pilih cara edaran yang sesuai untuk ebook anda.">
            <div className="grid md:grid-cols-2 gap-4">
                 {options.map(opt => (
                     <label key={opt.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input type="checkbox" checked={data.distributionMethods?.includes(opt.id)} onChange={() => handleChange(opt.id)} className="form-checkbox h-5 w-5 text-teal-600" />
                        <span className="text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
            <div className="flex gap-4 mt-6">
                <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">← Sebelum</button>
                <button 
                    onClick={onComplete} 
                    disabled={!isComplete}
                    className={`bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors ${isComplete ? 'hover:bg-teal-700' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Selesai & Jana Rumusan 📊
                </button>
            </div>
            {!isComplete && <p className="text-sm text-red-500 mt-2">Sila pilih sekurang-kurangnya satu kaedah edaran.</p>}
        </StepContainer>
    );
};

interface FormulaPageProps {
    currentStep: number;
    userData: UserData;
    onDataChange: (step: number, data: any) => void;
    onNextStep: (nextStep: number) => void;
    onPrevStep: (prevStep: number) => void;
    onCompleteAll: () => void;
}

const FormulaPage: React.FC<FormulaPageProps> = ({ currentStep, userData, onDataChange, onNextStep, onPrevStep, onCompleteAll }) => {
    const renderStep = () => {
        switch (currentStep) {
            case 1: return <Step1 data={userData.step1} onDataChange={d => onDataChange(1, d)} onNext={() => onNextStep(2)} />;
            case 2: return <Step2 data={userData.step2} onDataChange={d => onDataChange(2, d)} onNext={() => onNextStep(3)} onPrev={() => onPrevStep(1)} />;
            case 3: return <Step3 data={userData.step3} onDataChange={d => onDataChange(3, d)} onNext={() => onNextStep(4)} onPrev={() => onPrevStep(2)} />;
            case 4: return <Step4 data={userData.step4} onDataChange={d => onDataChange(4, d)} onNext={() => onNextStep(5)} onPrev={() => onPrevStep(3)} />;
            case 5: return <Step5 data={userData.step5} onDataChange={d => onDataChange(5, d)} onNext={() => onNextStep(6)} onPrev={() => onPrevStep(4)} />;
            case 6: return <Step6 data={userData.step6} onDataChange={d => onDataChange(6, d)} onNext={() => onNextStep(7)} onPrev={() => onPrevStep(5)} />;
            case 7: return <Step7 data={userData.step7} onDataChange={d => onDataChange(7, d)} onPrev={() => onPrevStep(6)} onComplete={onCompleteAll} />;
            default: return <div>Langkah tidak dijumpai</div>;
        }
    };

    return <div>{renderStep()}</div>;
};

export default FormulaPage;
