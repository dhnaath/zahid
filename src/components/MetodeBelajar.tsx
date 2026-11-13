import React, { useState } from 'react';
import { YOUTUBE_VIDEOS, PODCAST_EPISODES } from '../data/content';

interface MetodeBelajarProps {
  onNavigateToArchive: () => void;
}

export const MetodeBelajar: React.FC<MetodeBelajarProps> = ({ onNavigateToArchive }) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'none' | 'video' | 'audio'>('none');

  return (
    <section id="metode-belajar" className="bg-dark-pattern py-20 sm:py-28 text-white relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Rocket Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white p-1.5 pr-4 text-gray-900 shadow-sm sm:mb-8 sm:pr-5">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#f3f4f6]">
            <img
              src="/apple-emoji/rocket.png"
              alt="Rocket"
              className="h-5 w-5 object-contain"
            />
          </div>
          <span className="text-sm font-medium">Belajar Bersamaku</span>
        </div>

        {/* Section Heading */}
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
          Aku membagikan ilmu dan pengalamanku melalui 3 medium utama, yaitu…
        </h2>

        {/* 3 Main Medium Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:mt-14">
          {/* Card 1: Video */}
          <div
            onClick={() => setActiveMediaTab(activeMediaTab === 'video' ? 'none' : 'video')}
            className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 duration-300 cursor-pointer ${
              activeMediaTab === 'video'
                ? 'border-white/40 bg-white/10 shadow-lg'
                : 'border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]'
            }`}
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <img
                      src="/apple-emoji/clapper-board.png"
                      alt="Video"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Video</h3>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-60 duration-300 group-hover:opacity-100 group-hover:bg-white group-hover:text-black">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              <p className="text-base text-gray-300 sm:text-lg leading-relaxed">
                Aku mengunggah video di YouTube setiap minggu.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-medium text-gray-400">
              <span>{activeMediaTab === 'video' ? 'Sembunyikan Cuplikan' : 'Lihat Top Video'}</span>
              <span className="text-red-400">@zahidibr • 600K+ Sub</span>
            </div>
          </div>

          {/* Card 2: Audio */}
          <div
            onClick={() => setActiveMediaTab(activeMediaTab === 'audio' ? 'none' : 'audio')}
            className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 duration-300 cursor-pointer ${
              activeMediaTab === 'audio'
                ? 'border-white/40 bg-white/10 shadow-lg'
                : 'border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]'
            }`}
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <img
                      src="/apple-emoji/headphone.png"
                      alt="Audio"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Audio</h3>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-60 duration-300 group-hover:opacity-100 group-hover:bg-white group-hover:text-black">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              <p className="text-base text-gray-300 sm:text-lg leading-relaxed">
                Aku merupakan host dari podcast Spotify yang terbit setiap hari Jumat.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-medium text-gray-400">
              <span>{activeMediaTab === 'audio' ? 'Sembunyikan Episode' : 'Dengarkan Podcast'}</span>
              <span className="text-emerald-400">Udah Jumat Lagi</span>
            </div>
          </div>

          {/* Card 3: Tulisan */}
          <div
            onClick={onNavigateToArchive}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 duration-300 cursor-pointer hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <img
                      src="/apple-emoji/writing-hand.png"
                      alt="Tulisan"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tulisan</h3>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-60 duration-300 group-hover:opacity-100 group-hover:bg-white group-hover:text-black">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              <p className="text-base text-gray-300 sm:text-lg leading-relaxed">
                Nikmatilah artikel dari situs ini dan juga newsletter baruku yang dikirimkan setiap minggu.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-medium text-gray-400">
              <span className="text-blue-300 group-hover:underline">Buka Arsip Tulisan →</span>
              <span>15.000+ Pembaca</span>
            </div>
          </div>
        </div>

        {/* Video Drawer preview */}
        {activeMediaTab === 'video' && (
          <div className="mt-10 rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                  Video Populer di YouTube (@zahidibr)
                </h4>
                <p className="text-sm text-gray-300 mt-1">
                  Konten seputar teknik belajar, produktivitas berbasis neurosains, dan student life di Jepang.
                </p>
              </div>
              <a
                href="https://youtube.com/@zahidibr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white duration-200"
              >
                Kunjungi YouTube
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {YOUTUBE_VIDEOS.map((vid) => (
                <div
                  key={vid.id}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/30 duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-gray-300">{vid.category}</span>
                      <span>{vid.duration}</span>
                    </div>
                    <h5 className="font-semibold text-white text-base leading-snug line-clamp-2">{vid.title}</h5>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{vid.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400">{vid.views}</span>
                    <a
                      href="https://youtube.com/@zahidibr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-medium"
                    >
                      Tonton di YouTube →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Audio Drawer preview */}
        {activeMediaTab === 'audio' && (
          <div className="mt-10 rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Podcast Spotify: &ldquo;Udah Jumat Lagi&rdquo;
                </h4>
                <p className="text-sm text-gray-300 mt-1">
                  Rilis rutin setiap hari Jumat. Diskusi santai namun berbobot tentang kehidupan, karir, dan self-growth.
                </p>
              </div>
              <a
                href="https://spotify.link/uM66OlI1IDb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white duration-200"
              >
                Dengarkan di Spotify
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {PODCAST_EPISODES.map((ep) => (
                <div
                  key={ep.id}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-emerald-500/40 duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span className="font-mono text-emerald-400 font-semibold">EPISODE #{ep.episode}</span>
                      <span>{ep.duration} • {ep.date}</span>
                    </div>
                    <h5 className="font-semibold text-white text-lg leading-snug">{ep.title}</h5>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">{ep.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-emerald-300 font-medium">Free di Spotify</span>
                    <a
                      href={ep.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white bg-emerald-700 hover:bg-emerald-600 px-3 py-1.5 rounded-full font-medium duration-200"
                    >
                      Play Episode
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
