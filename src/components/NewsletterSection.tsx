import React, { useState } from 'react';

interface NewsletterSectionProps {
  onNavigateToArchive: () => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onNavigateToArchive }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Mohon isi nama kamu.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Mohon masukkan alamat email yang valid.');
      return;
    }

    setErrorMessage('');
    setIsSubscribed(true);
    setShowPreviewModal(true);
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Info & Value Props */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white p-1.5 pr-4 shadow-xs sm:pr-5">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#f3f4f6]">
                <img
                  src="/apple-emoji/love-letter.png"
                  alt="Newsletter"
                  className="h-5 w-5 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-800">Newsletter</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl leading-tight">
              Bergabung dengan lebih dari 15.000 pembaca.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Dapatkan rekomendasi buku, podcast, dan pembelajaran terbaikku lainnya di kotak masuk email-mu, setiap minggu.
            </p>

            {/* Benefit Items with Apple Emojis */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xs border border-gray-100">
                  <img
                    src="/apple-emoji/rocket.png"
                    alt="Tips Produktivitas"
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <span className="text-base font-medium text-gray-800">Tips Produktivitas</span>
              </li>

              <li className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xs border border-gray-100">
                  <img
                    src="/apple-emoji/books.png"
                    alt="Rangkuman Buku"
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <span className="text-base font-medium text-gray-800">Rangkuman Buku</span>
              </li>

              <li className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xs border border-gray-100">
                  <img
                    src="/apple-emoji/wrapped-gift.png"
                    alt="Dan masih banyak yang lainnya..."
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <span className="text-base font-medium text-gray-800">Dan masih banyak yang lainnya...</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Form Card */}
          <div>
            <div className="rounded-2xl border border-gray-200/80 bg-white p-7 sm:p-9 shadow-lg">
              {isSubscribed ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Terima kasih, {name}!</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Email konfirmasi dan edisi perdana telah dikirimkan ke <span className="font-semibold text-gray-800">{email}</span>.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setShowPreviewModal(true)}
                      className="rounded-full bg-[#242424] px-5 py-2.5 text-xs font-semibold text-white hover:bg-black duration-200 cursor-pointer"
                    >
                      Buka Pratinjau Email Sambutan
                    </button>
                    <button
                      onClick={() => {
                        setIsSubscribed(false);
                        setName('');
                        setEmail('');
                      }}
                      className="rounded-full border border-gray-300 px-5 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 duration-200 cursor-pointer"
                    >
                      Daftarkan Email Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="mb-4 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="mb-4">
                    <label htmlFor="newsletter-name" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Nama <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="newsletter-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ariq Wibowo"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#242424] focus:outline-hidden focus:ring-1 focus:ring-[#242424] duration-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="newsletter-email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="wibowo.ariq@gmail.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#242424] focus:outline-hidden focus:ring-1 focus:ring-[#242424] duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#242424] px-6 py-3.5 text-sm font-medium text-white shadow-md duration-300 ease-official hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-lg focus:outline-hidden"
                  >
                    <div className="relative h-5 w-5 overflow-hidden">
                      <img
                        src="/apple-emoji/envelope.png"
                        alt="Envelope"
                        className="absolute inset-0 h-5 w-5 object-contain duration-300 ease-official group-hover:-translate-y-8"
                      />
                      <img
                        src="/apple-emoji/love-letter.png"
                        alt="Love letter"
                        className="absolute inset-0 h-5 w-5 translate-y-8 object-contain duration-300 ease-official group-hover:translate-y-0"
                      />
                    </div>
                    <span>Berlangganan Gratis</span>
                  </button>

                  <p className="mt-4 text-center text-sm text-gray-500">
                    Baca tulisan-tulisan sebelumnya{' '}
                    <button
                      type="button"
                      onClick={onNavigateToArchive}
                      className="font-semibold text-gray-900 underline hover:text-black cursor-pointer"
                    >
                      di sini
                    </button>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Email Modal Preview */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center gap-2">
                <img src="/avatar.png" alt="Zahid" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Zahid Ibrahim</h4>
                  <p className="text-xs text-gray-500">halo@zahidibr.com</p>
                </div>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-medium cursor-pointer"
              >
                ✕ Tutup
              </button>
            </div>

            <div className="space-y-3 text-sm text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p className="font-semibold text-gray-900">Halo {name || 'Teman'}, senang kamu di sini!</p>
              <p>
                Selamat datang di lingkaran kecil pembaca newsletter mingguan. Setiap hari Minggu, aku mengirimkan 1 ide produktivitas praktis, 1 rangkuman buku yang sedang kubaca, dan 1 refleksi hidup yang sedang kupikirkan.
              </p>
              <div className="rounded-lg bg-gray-50 p-3 border border-gray-200 text-xs text-gray-600 italic">
                &ldquo;Produktivitas bukanlah tentang melakukan sebanyak mungkin hal dalam sehari, melainkan tentang melakukan hal yang benar dengan pikiran yang tenang.&rdquo;
              </div>
              <p>
                Kamu juga bisa langsung membaca arsip tulisan sebelumnya di website kapan saja.
              </p>
              <p className="pt-2 font-medium">Salam hangat,<br />Zahid Ibrahim</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="rounded-full bg-[#242424] px-5 py-2 text-xs font-semibold text-white hover:bg-black cursor-pointer"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
