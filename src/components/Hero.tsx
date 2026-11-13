import React from 'react';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <header className="flex flex-col items-center justify-center px-4 pb-16 pt-28 sm:pb-24 sm:pt-36 md:pt-40 text-center">
      {/* Welcome Pill Badge */}
      <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gray-100 bg-white p-1.5 pr-4 shadow-sm duration-300 hover:shadow-md sm:mb-8 sm:pr-5">
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#f3f4f6]">
          <img
            src="/apple-emoji/waving-hand.png"
            alt="Waving Hand"
            className="hand-wave-icon h-5 w-5 object-contain"
          />
        </div>
        <span className="text-sm font-medium text-gray-800">
          Halo semuanya!
        </span>
      </div>

      {/* Zahid Avatar */}
      <div className="zahid-avatar mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105" />

      {/* Main Headline */}
      <h1 className="mb-4 max-w-3xl px-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl lg:text-[2.75rem] leading-[1.18]">
        Perkenalkan, namaku Zahid.{' '}
        <br className="hidden sm:inline" />
        Aku seorang YouTuber, podcaster, dan penulis.
      </h1>

      {/* Subtitle Description */}
      <p className="mx-auto max-w-2xl px-4 text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
        Melalui newsletter-ku, kamu bisa mendapatkan email berisi insights seputar produktivitas, pengembangan diri, dan pelajaran hidup lainnya setiap minggu. Bergabung dengan lebih dari 15.000 pembaca dengan mendaftarkan alamat email-mu di bawah.
      </p>

      {/* CTA Button */}
      <button
        onClick={onJoinClick}
        className="group mt-8 inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-[#242424] px-7 py-3.5 text-sm font-medium text-white shadow-md duration-300 ease-official hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-lg focus:outline-hidden"
      >
        <div className="relative h-5 w-5 overflow-hidden">
          <img
            src="/apple-emoji/envelope.png"
            alt="Envelope"
            className="absolute inset-0 h-5 w-5 object-contain duration-300 ease-official group-hover:-translate-y-8"
          />
          <img
            src="/apple-emoji/love-letter.png"
            alt="Love Letter"
            className="absolute inset-0 h-5 w-5 translate-y-8 object-contain duration-300 ease-official group-hover:translate-y-0"
          />
        </div>
        <span>Bergabung Newsletter</span>
      </button>
    </header>
  );
};
