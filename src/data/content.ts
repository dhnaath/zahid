export interface Article {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  date: string;
  category: 'Produktivitas' | 'Refleksi Diri' | 'Kuliah & Jepang' | 'Buku & Mindset';
  readTime: string;
  substackUrl?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  views: string;
  duration: string;
  category: string;
  youtubeId: string;
  description: string;
}

export interface PodcastItem {
  id: string;
  title: string;
  episode: number;
  duration: string;
  date: string;
  guest?: string;
  spotifyUrl: string;
  description: string;
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'a-tale-of-two-youtubers',
    title: 'a tale of two youtubers',
    subtitle: 'Fenomena atap tak kasat mata dan refleksi di balik layar',
    excerpt: 'Ada sebuah fenomena sosial di mana seseorang yang tumbuh melampaui batas lingkungannya tiba-tiba dipandang berbeda. Bagaimana kita menyikapinya tanpa kehilangan esensi diri?',
    category: 'Refleksi Diri',
    date: '28 Oktober 2024',
    readTime: '6 min read',
    substackUrl: 'https://zahidibr.substack.com/p/a-tale-of-two-youtubers',
    content: [
      'Beberapa waktu lalu, aku sempat merenungi dinamika yang sering terjadi di industri kreatif dan dunia digital. Kita sering kali melihat dua orang yang memulai langkah dari titik yang sama persis, dengan gairah dan visi yang tampak identik, namun berakhir dengan hubungan yang sangat berbeda terhadap audiens dan diri mereka sendiri.',
      'Fenomena ini dalam sosiologi sering dihubungkan dengan "tall poppy syndrome"—ketika bunga poppy yang tumbuh paling tinggi cenderung dipotong paling awal. Di era media sosial, keterbukaan kita berbagi cerita sering kali menjadi pedang bermata dua.',
      'Pelajaran terbesarku adalah: jangan mengukur nilai karyamu dari seberapa keras tepuk tangan orang lain, tetapi dari seberapa jujur kamu menyampaikan pesan tersebut kepada satu orang yang memang membutuhkannya di saat yang tepat.'
    ]
  },
  {
    id: 'aku-benci-keputusan-hidupmu',
    title: 'Aku benci keputusan hidupmu...',
    subtitle: 'Dan akhirnya ada yang menyampaikan itu secara blak-blakan',
    excerpt: 'Kritik yang jujur dan menyakitkan sering kali lebih berharga daripada seribu pujian palsu. Bagaimana membedakan antara kebisingan dan masukan yang membangun.',
    category: 'Refleksi Diri',
    date: '14 Oktober 2024',
    readTime: '5 min read',
    substackUrl: 'https://zahidibr.substack.com',
    content: [
      'Pernahkah kamu mendengar seseorang yang kamu hormati menatap matamu dan berkata: "Aku benci keputusan yang baru saja kamu ambil"?',
      'Saat pertama kali mendengarnya, ego kita langsung membangun tembok pertahanan. Kita ingin membela diri dengan puluhan alasan rasional. Namun setelah emosi mereda, aku menyadari bahwa kritik tajam yang datang dari tempat yang peduli adalah hadiah paling langka di usia dua puluhan.',
      'Kita tidak kekurangan orang yang menepuk pundak kita; kita kekurangan cermin yang berani menunjukkan noda di wajah kita tanpa rasa takut.'
    ]
  },
  {
    id: 'my-withering-ambitions',
    title: 'My withering ambitions',
    subtitle: 'Refleksi atas ambisi yang berubah seiring bertambahnya usia',
    excerpt: 'Di awal usia 20-an, aku ingin menaklukkan dunia. Sekarang, aku hanya ingin secangkir kopi hangat, tidur 8 jam, dan menyelesaikan satu hal bermakna setiap hari.',
    category: 'Refleksi Diri',
    date: '30 September 2024',
    readTime: '7 min read',
    substackUrl: 'https://zahidibr.substack.com/p/my-withering-ambitions',
    content: [
      'Ada masa ketika kalenderku terisi penuh dari jam 6 pagi hingga jam 11 malam. Setiap jam yang tidak produktif terasa seperti dosa besar. Aku bangga menyebut diriku "hustler".',
      'Namun di Jepang, saat berjalan di pinggir pantai Beppu di bawah angin musim gugur, sebuah pertanyaan tiba-tiba menyerangku: "Jika semua ambisi ini tercapai, apakah aku akan benar-benar bahagia?"',
      'Ambisi yang matang bukan berarti menyerah pada keadaan. Ini tentang menyaring mana impian milikmu sendiri dan mana impian yang diam-diam kamu pinjam dari ekspektasi orang lain.'
    ]
  },
  {
    id: 'how-were-you-treated-as-a-child',
    title: 'How were you treated as a child?',
    subtitle: 'Cerita singkat tentang momen kecil yang berdampak besar',
    excerpt: 'Luka atau apresiasi masa kecil sering kali menjadi arsitek tak terlihat di balik cara kita memperlakukan diri sendiri saat dewasa.',
    category: 'Refleksi Diri',
    date: '16 September 2024',
    readTime: '5 min read',
    substackUrl: 'https://zahidibr.substack.com',
    content: [
      'Seorang teman pernah bertanya padaku: apa ingatan pertamamu ketika berhasil mendapatkan nilai bagus di sekolah? Apakah kamu dipeluk, diberi hadiah, atau justru diingatkan bahwa itu hal yang wajar?',
      'Banyak dari kita yang kecanduan berprestasi bukan karena kita mencintai ilmunya, tetapi karena tanpa prestasi itu kita merasa tidak pantas dicintai.',
      'Menyadari pola ini adalah langkah pertama untuk melepaskan diri dari siklus pembuktian tanpa henti.'
    ]
  },
  {
    id: 'sistem-belajar-feynman-active-recall',
    title: 'Sistem Belajar 10x Lebih Cepat Tanpa Menghafal Mati',
    subtitle: 'Menggabungkan Active Recall, Spaced Repetition, dan Teknik Feynman',
    excerpt: 'Kenapa membaca ulang buku berulang kali adalah ilusi pemahaman, dan metode apa yang benar-benar terbukti secara sains neurobiologi.',
    category: 'Produktivitas',
    date: '02 September 2024',
    readTime: '8 min read',
    content: [
      'Mayoritas murid dan mahasiswa menghabiskan 80% waktu belajar mereka dengan "passive review": menggarisbawahi buku dengan stabilo warna-warni dan membaca ulang catatan. Ini memberikan sensasi keakraban (fluency illusion), bukan pemahaman sejati.',
      'Dalam penelitian kognitif, otak kita belajar paling kuat saat "dipaksa mengeluarkan informasi" (retrieval practice). Tanyakan pertanyaan pada dirimu sendiri sebelum membuka kembali catatannya.',
      'Gunakan Feynman Technique: jelaskan konsep rumit tersebut seolah-olah kamu sedang mengajarkannya kepada anak usia 12 tahun. Jika ada bagian yang kamu tidak bisa jelaskan dengan bahasa sederhana, itulah celah pemahamanmu.'
    ]
  },
  {
    id: 'how-i-study-in-japan-notion',
    title: 'Bagaimana Aku Mengatur Hidup & Studi di Jepang Menggunakan Notion',
    subtitle: 'Membangun Second Brain untuk mahasiswa dan konten kreator',
    excerpt: 'Struktur template Notion yang kugunakan untuk mengelola tugas kampus di APU Jepang, jadwal produksi YouTube, dan refleksi harian.',
    category: 'Kuliah & Jepang',
    date: '19 Agustus 2024',
    readTime: '6 min read',
    content: [
      'Kuliah di luar negeri dengan bahasa pengantar ganda dan mengelola channel YouTube di saat yang sama menuntut manajemen waktu yang sangat ketat.',
      'Aku membagi sistem Notion-ku ke dalam 4 pilar PARA Method (Projects, Areas, Resources, Archives). Setiap proyek memiliki tanggal tenggat dan aksi berikutnya yang jelas.',
      'Sistem yang baik tidak boleh terlalu rumit. Jika butuh lebih dari 30 detik untuk mencatat ide baru, sistemmu terlalu lambat dan pada akhirnya akan ditinggalkan.'
    ]
  },
  {
    id: 'i-moved-to-jakarta-and-leaving',
    title: "I moved to Jakarta to chase my dreams (and now I'm leaving)",
    subtitle: 'Tentang ritme kota besar dan mencari ketenangan batin',
    excerpt: 'Jakarta memberi kecepatan dan peluang, tetapi kota kecil di tepi gunung dan laut memberi ruang bernapas untuk berpikir jernih.',
    category: 'Kuliah & Jepang',
    date: '05 Agustus 2024',
    readTime: '6 min read',
    substackUrl: 'https://zahidibr.substack.com',
    content: [
      'Jakarta selalu memiliki magnet yang kuat. Semua percakapan penting terasa terjadi di sini. Namun di tengah hiruk-pikuk kedai kopi Senopati dan kemacetan Sudirman, aku sering kehilangan dialog paling penting: percakapan dengan diriku sendiri.',
      'Terkadang berpindah tempat bukan berarti melarikan diri, melainkan menempatkan dirimu di tanah yang lebih subur agar akar pemikiranmu bisa tumbuh lebih dalam.'
    ]
  },
  {
    id: 'the-tuition-of-life',
    title: 'The tuition of life',
    subtitle: 'Biaya mahal dari kesalahan yang harus kita bayar sendiri',
    excerpt: 'Ada hal-hal yang tidak diajarkan di universitas terbaik mana pun: bagaimana menghadapi kegagalan bisnis pertama, pertemanan yang memudar, dan patah hati.',
    category: 'Buku & Mindset',
    date: '22 Juli 2024',
    readTime: '5 min read',
    substackUrl: 'https://zahidibr.substack.com',
    content: [
      'Kita membayar uang kuliah puluhan juta untuk teori, tetapi pelajaran kehidupan yang paling melekat selalu ditagih dalam bentuk rasa sakit, penyesalan, dan waktu yang hilang.',
      'Anggap setiap kesalahan sebagai "biaya sekolah kehidupan". Jika kamu belajar darinya, biaya itu bukan kerugian, melainkan investasi kepribadian.'
    ]
  },
  {
    id: 'kapan-bisa-menikmati-zona-nyaman',
    title: '🤔 Kapan sih kita bisa menikmati zona nyaman?',
    subtitle: 'Paradoks self-improvement culture yang tidak ada habisnya',
    excerpt: 'Budaya produktivitas modern membuat kita merasa bersalah saat beristirahat. Bagaimana menikmati apa yang telah kita capai hari ini.',
    category: 'Buku & Mindset',
    date: '08 Juli 2024',
    readTime: '6 min read',
    substackUrl: 'https://zahidibr.substack.com',
    content: [
      'Dunia terus berbisik bahwa jika kamu tidak sedang berkembang, kamu sedang sekarat. Kita diwajibkan membaca buku bisnis di akhir pekan, mendengarkan podcast edukasi saat mandi, dan bangun jam 5 pagi.',
      'Tapi apa gunanya membangun zona nyaman jika pada akhirnya kamu diharamkan tinggal di dalamnya?',
      'Istirahat bukanlah hadiah setelah kamu kelelahan total; istirahat adalah bagian integral dari ritme kerja seorang manusia.'
    ]
  }
];

export const YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Belajar Apapun 10x Lebih Cepat dengan Teknik Feynman',
    views: '1.2M views',
    duration: '14:22',
    category: 'Metode Belajar',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Cara memecah konsep tersulit menjadi bahasa sederhana yang dapat dipahami anak kecil. Panduan praktis langkah demi langkah.'
  },
  {
    id: 'video-2',
    title: 'How I Study 12+ Hours a Day without Burnout',
    views: '890K views',
    duration: '18:45',
    category: 'Produktivitas',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Rutinitas manajemen energi, teknik Pomodoro adaptif, dan nutrisi otak yang kujalani saat persiapan ujian dan proyek besar.'
  },
  {
    id: 'video-3',
    title: 'A Day in My Life as an Indonesian Student in Japan (APU)',
    views: '650K views',
    duration: '12:10',
    category: 'Student Life',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Vlog keseharian kuliah di Ritsumeikan Asia Pacific University di Beppu, Jepang: kelas internasional, masak sendiri, dan menikmati onsen.'
  },
  {
    id: 'video-4',
    title: 'Sistem Notion yang Mengubah Hidupku: Second Brain Setup',
    views: '940K views',
    duration: '21:15',
    category: 'Notion & Tools',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Tour lengkap workspace Notion pribadiku: task manager, habit tracker, reading notes, dan sistem dokumentasi kreatif.'
  },
  {
    id: 'video-5',
    title: 'Gap Year: Keputusan Terbaik yang Pernah Kubuat',
    views: '780K views',
    duration: '16:04',
    category: 'Refleksi Karir',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Cerita jujur saat memutuskan rehat setelah dari ITB sebelum akhirnya diterima beasiswa di Jepang. Mengatasi rasa tertinggal dari teman sebaya.'
  },
  {
    id: 'video-6',
    title: 'Kenapa Kamu Susah Konsisten (dan Solusi Berbasis Neurosains)',
    views: '1.1M views',
    duration: '15:30',
    category: 'Kebiasaan',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Dopamine reward loop dan cara menurunkan resistensi awal (activation energy) untuk memulai kebiasaan baik.'
  }
];

export const PODCAST_EPISODES: PodcastItem[] = [
  {
    id: 'pod-1',
    title: 'Udah Jumat Lagi #42: Melepaskan Standar Orang Lain',
    episode: 42,
    duration: '38:12',
    date: 'Jumat, 1 November 2024',
    spotifyUrl: 'https://spotify.link/uM66OlI1IDb',
    description: 'Membahas rasa cemas saat melihat pencapaian orang lain di LinkedIn & Instagram, dan bagaimana membangun definisi sukses sendiri.'
  },
  {
    id: 'pod-2',
    title: 'Udah Jumat Lagi #41: Menikmati Rasa Bosan di Era Short-Form',
    episode: 41,
    duration: '42:05',
    date: 'Jumat, 25 Oktober 2024',
    spotifyUrl: 'https://spotify.link/uM66OlI1IDb',
    description: 'Kenapa kreativitas terbaik kita muncul saat kita membiarkan otak kita bosan tanpa scrolling layar hp terus-menerus.'
  },
  {
    id: 'pod-3',
    title: 'Journal Zahid: Dari ITB ke Beppu Jepang',
    episode: 15,
    duration: '45:30',
    date: 'Jumat, 18 Oktober 2024',
    spotifyUrl: 'https://spotify.link/uM66OlI1IDb',
    description: 'Refleksi perjalanan beasiswa, belajar bahasa Jepang dari nol, dan adaptasi kultural sebagai perantau mandiri.'
  },
  {
    id: 'pod-4',
    title: 'Udah Jumat Lagi #40: Membangun Rutinitas Pagi yang Realistis',
    episode: 40,
    duration: '34:50',
    date: 'Jumat, 11 Oktober 2024',
    spotifyUrl: 'https://spotify.link/uM66OlI1IDb',
    description: 'Bukan morning routine 4 pagi para billionaire, tapi rutinitas sederhana yang membuatmu tidak merasa terburu-buru menyambut hari.'
  }
];
