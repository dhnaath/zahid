import React, { useState, useMemo } from 'react';
import { Article, ARTICLES_DATA } from '../data/content';

export const ArsipPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // In-page quick subscribe form
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const categories = ['Semua', 'Produktivitas', 'Refleksi Diri', 'Kuliah & Jepang', 'Buku & Mindset'];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'Semua' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subName.trim() && subEmail.includes('@')) {
      setSubSuccess(true);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen">
      {/* Top Hero Section matching original /arsip */}
      <section className="px-4 pb-12 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left Content & Mini Subscription */}
            <div className="w-full lg:max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3.5 py-1 text-xs font-semibold text-gray-700 shadow-xs">
                <span>The Multiidentitas Files</span>
                <span className="text-gray-400">•</span>
                <span className="text-emerald-600">Arsip Mingguan</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl leading-tight">
                Bergabung dengan lebih dari 15.000 pembaca.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Dapatkan rekomendasi buku, podcast, dan pembelajaran terbaikku lainnya di kotak masuk email-mu, setiap minggu.
              </p>

              <div className="mt-6">
                {subSuccess ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                    ✓ Terima kasih telah bergabung! Cek kotak masukmu setiap hari Minggu.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 sm:max-w-md">
                    <div>
                      <label htmlFor="arsip-name" className="block text-xs font-medium text-gray-700 mb-1">
                        Nama <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="arsip-name"
                        type="text"
                        required
                        value={subName}
                        onChange={(e) => setSubName(e.target.value)}
                        placeholder="Ariq Wibowo"
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#242424] focus:outline-hidden focus:ring-1 focus:ring-[#242424]"
                      />
                    </div>
                    <div>
                      <label htmlFor="arsip-email" className="block text-xs font-medium text-gray-700 mb-1">
                        Alamat Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="arsip-email"
                        type="email"
                        required
                        value={subEmail}
                        onChange={(e) => setSubEmail(e.target.value)}
                        placeholder="wibowo.ariq@gmail.com"
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#242424] focus:outline-hidden focus:ring-1 focus:ring-[#242424]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[#242424] px-5 py-3 text-sm font-medium text-white shadow-xs duration-300 ease-official hover:bg-black hover:shadow-md"
                    >
                      <div className="relative h-4 w-4 overflow-hidden">
                        <img
                          src="/apple-emoji/envelope.png"
                          alt="Envelope"
                          className="absolute inset-0 h-4 w-4 object-contain duration-300 ease-official group-hover:-translate-y-8"
                        />
                        <img
                          src="/apple-emoji/love-letter.png"
                          alt="Love letter"
                          className="absolute inset-0 h-4 w-4 translate-y-8 object-contain duration-300 ease-official group-hover:translate-y-0"
                        />
                      </div>
                      <span>Berlangganan Gratis</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center w-full lg:w-auto">
              <img
                src="/undraw_mail_re_duel.svg"
                alt="Mail illustration"
                className="max-h-72 w-auto object-contain sm:max-h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Archive Header & Filter Controls */}
      <section className="px-4 pt-10 border-t border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1a1a]">
                Baca edisi sebelumnya...
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Koleksi esai mingguan, rangkuman buku, dan catatan pemikiran dari Zahid Ibrahim.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik atau judul..."
                className="w-full rounded-full border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-hidden focus:ring-1 focus:ring-black"
              />
              <svg
                className="absolute left-3.5 top-3 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#242424] text-white shadow-xs'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500">
              <p className="text-base">Tidak ada tulisan yang cocok dengan pencarianmu.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-semibold text-black underline cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-medium text-gray-700">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-black leading-snug">
                      {article.title}
                    </h3>

                    {article.subtitle && (
                      <p className="mt-1 text-xs font-medium text-gray-500 italic">
                        {article.subtitle}
                      </p>
                    )}

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
                    <span className="text-gray-400">{article.date}</span>
                    <span className="font-semibold text-gray-900 group-hover:underline flex items-center gap-1">
                      Baca Tulisan →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs">
          <div className="max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-800">
                  {selectedArticle.category}
                </span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                aria-label="Tutup artikel"
              >
                ✕
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug">
              {selectedArticle.title}
            </h1>

            {selectedArticle.subtitle && (
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-500 italic">
                {selectedArticle.subtitle}
              </p>
            )}

            <div className="my-6 border-l-4 border-gray-800 bg-gray-50 pl-4 py-2 text-sm italic text-gray-700">
              {selectedArticle.excerpt}
            </div>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed font-serif">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/avatar.png" alt="Zahid" className="h-10 w-10 rounded-full object-cover" />
                <div className="text-xs">
                  <p className="font-bold text-gray-900">Ditulis oleh Zahid Ibrahim</p>
                  <p className="text-gray-500">YouTuber, podcaster, dan penulis</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {selectedArticle.substackUrl && (
                  <a
                    href={selectedArticle.substackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50 duration-200"
                  >
                    Buka di Substack ↗
                  </a>
                )}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-full bg-[#242424] px-5 py-2 text-xs font-semibold text-white hover:bg-black cursor-pointer"
                >
                  Selesai Membaca
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
