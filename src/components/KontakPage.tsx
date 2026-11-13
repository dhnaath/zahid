import React, { useState } from 'react';

const INTEREST_OPTIONS = [
  'IG Story',
  'IG Feeds',
  'IG Reels',
  'Youtube Integrated Video',
  'Youtube Dedicated Video',
  'Youtube Shorts',
  'Tiktok Video',
  'Seminar',
  'Webinar',
  'Other'
];

const BUDGET_OPTIONS = [
  'Dibawah 3jt',
  '3-5jt',
  '5-7jt',
  '7-10jt',
  '10-13jt',
  '13-20jt',
  'Diatas 20jt'
];

export const KontakPage: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleInterest = (val: string) => {
    if (selectedInterests.includes(val)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== val));
    } else {
      setSelectedInterests([...selectedInterests, val]);
    }
  };

  const generateWhatsAppUrl = () => {
    const interestStr = selectedInterests.length > 0 ? selectedInterests.join(', ') : 'Belum ditentukan';
    const text = `Halo Tim Zahid Ibrahim (Fafa),

Perkenalkan, saya ${name || '(Nama)'} dari (Instansi/Brand).
Saya ingin mengajak Zahid Ibrahim untuk berkolaborasi dalam:
• Layanan/Format: ${interestStr}
• Anggaran Estimasi: ${selectedBudget || 'Diskusi lebih lanjut'}

Deskripsi Proyek:
${description || 'Detail proposal terlampir.'}

Nomor Kontak/WhatsApp: ${phone || '-'}

Terima kasih,
${name || 'Partner Kolaborasi'}`;

    return `https://wa.me/6287745452908?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Mohon isi nama atau instansi kamu.');
      return;
    }
    if (!phone.trim()) {
      setError('Mohon isi nomor WhatsApp yang bisa dihubungi.');
      return;
    }
    if (selectedInterests.length === 0) {
      setError('Pilih minimal 1 jenis kolaborasi yang kamu minati.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-36 pb-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Authentic Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3.5 py-1 text-xs font-semibold text-gray-700 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Brands & Speaking Engagements</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-none">
            <i className="font-serif font-light italic">Hey!</i> Tell us all the things
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-500">
            Isi formulir di bawah ini dengan lengkap untuk mendiskusikan peluang kolaborasi campaign, video sponsorship, atau pembicara event.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 shadow-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">Brief Berhasil Dibuat!</h2>
            <p className="mt-2 text-base text-gray-600 max-w-lg mx-auto">
              Terima kasih, <span className="font-semibold text-gray-900">{name}</span>. Tim Zahid Ibrahim akan mereview penawaranmu dalam kurun waktu kurang dari 24 jam.
            </p>

            {/* Generated Proposal Summary */}
            <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6 text-left text-xs sm:text-sm text-gray-700 space-y-2 max-w-xl mx-auto font-mono">
              <p><span className="text-gray-400">Pengirim:</span> {name} ({phone})</p>
              <p><span className="text-gray-400">Peminatan:</span> {selectedInterests.join(', ')}</p>
              <p><span className="text-gray-400">Alokasi Anggaran:</span> {selectedBudget || 'Diskusi lebih lanjut'}</p>
              {description && (
                <p className="pt-2 border-t border-gray-200 text-gray-600"><span className="text-gray-400">Deskripsi:</span> &ldquo;{description}&rdquo;</p>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>Langsung Kirim via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedInterests([]);
                  setName('');
                  setPhone('');
                  setDescription('');
                  setSelectedBudget('');
                }}
                className="rounded-full border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-100 duration-200 cursor-pointer"
              >
                Buat Formulir Baru
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Step 1: Interests */}
            <div>
              <label className="mb-3 block text-base sm:text-xl font-normal text-gray-900">
                Aku tertarik dengan ... <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {INTEREST_OPTIONS.map((item) => {
                  const isChecked = selectedInterests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-medium duration-200 ${
                        isChecked
                          ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                          isChecked
                            ? 'border-white bg-white text-black'
                            : 'border-gray-300 bg-white text-transparent'
                        }`}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Name */}
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-base sm:text-xl font-normal text-gray-900">
                Nama saya ... <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ariq Wibowo (Brand Manager PT ABC)"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a1a1a] focus:outline-hidden focus:ring-1 focus:ring-[#1a1a1a]"
              />
            </div>

            {/* Step 3: Phone/WhatsApp */}
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-base sm:text-xl font-normal text-gray-900">
                Nomor WhatsApp saya ... <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="081234567890"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a1a1a] focus:outline-hidden focus:ring-1 focus:ring-[#1a1a1a]"
              />
            </div>

            {/* Step 4: Description */}
            <div>
              <label htmlFor="contact-desc" className="mb-2 block text-base sm:text-xl font-normal text-gray-900">
                Deskripsi dari proyek yg ingin saya tawarkan
              </label>
              <textarea
                id="contact-desc"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ceritakan detail yang menarik tentang proyekmu (timeline, tujuan campaign, atau tema sesi pembicara)"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a1a1a] focus:outline-hidden focus:ring-1 focus:ring-[#1a1a1a]"
              />
            </div>

            {/* Step 5: Budget allocation */}
            <div>
              <label className="mb-3 block text-base sm:text-xl font-normal text-gray-900">
                Alokasi anggaran (IDR) ...
              </label>
              <div className="flex flex-wrap gap-2.5">
                {BUDGET_OPTIONS.map((budget) => {
                  const isSelected = selectedBudget === budget;
                  return (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-medium duration-200 ${
                        isSelected
                          ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`h-3.5 w-3.5 rounded-full border ${
                          isSelected ? 'border-white bg-white' : 'border-gray-300 bg-transparent'
                        }`}
                      />
                      <span>{budget}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1a1a1a] px-8 py-4 text-base font-semibold text-white shadow-lg duration-300 ease-official hover:-translate-y-0.5 hover:bg-black focus:outline-hidden sm:w-auto sm:min-w-64"
              >
                <div className="relative h-5 w-5 overflow-hidden">
                  <img
                    src="/apple-emoji/rocket.png"
                    alt="Rocket"
                    className="absolute inset-0 h-5 w-5 object-contain duration-300 ease-official group-hover:-translate-y-8"
                  />
                  <img
                    src="/apple-emoji/love-letter.png"
                    alt="Letter"
                    className="absolute inset-0 h-5 w-5 translate-y-8 object-contain duration-300 ease-official group-hover:translate-y-0"
                  />
                </div>
                <span>Kirim Pesan</span>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                * Tim Zahid Ibrahim akan menghubungi kembali melalui email atau WhatsApp dalam 24 jam kerja.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
