import React from 'react';

interface KolaborasiBannerProps {
  onOpenCustomContact: () => void;
}

export const KolaborasiBanner: React.FC<KolaborasiBannerProps> = ({ onOpenCustomContact }) => {
  const whatsappUrl =
    'https://wa.me/6287745452908?text=Halo%20Fafa%2C%0D%0A%0D%0APerkenalkan%2C%20saya%20(Nama)%20dari%20(Instansi).%20Saya%20ingin%20mengajak%20Zahid%20Ibrahim%20untuk%20berkolaborasi%20dalam%20(campaign%2Fplatform%2Fmenjadi%20speaker).%20Berikut%20ini%20adalah%20proposal%2Fbrief%2FToR%20untuk%20mendapatkan%20detail%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih%2C%0D%0A(Nama)%0D%0A(Informasi%20Kontak)';

  return (
    <section id="kolaborasi" className="px-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="bg-dark-pattern relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ingin menciptakan impact bersama?
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Apakah kamu bagian dari bisnis yang ingin menjangkau lebih banyak orang ataupun panitia event yang membutuhkan seseorang untuk mengisi acaramu? Hubungi timku di bawah untuk mencari tahu tentang kesempatan berkolaborasi.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] shadow-md duration-300 ease-official hover:-translate-y-0.5 hover:bg-gray-100 sm:w-auto"
            >
              <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>WhatsApp Only</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:halo@zahidibr.com"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-md duration-300 ease-official hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              <span>halo@zahidibr.com</span>
            </a>

            {/* Custom Contact Form Link */}
            <button
              onClick={onOpenCustomContact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-400/40 bg-transparent px-6 py-3.5 text-sm font-medium text-gray-200 duration-300 hover:border-white hover:text-white sm:w-auto cursor-pointer"
            >
              <span>Isi Form Brief Proyek →</span>
            </button>
          </div>

          <div className="mt-8 text-center sm:text-right">
            <span className="text-xs text-gray-400 font-medium">
              *kecepatan respon rata-rata di bawah 24 jam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
