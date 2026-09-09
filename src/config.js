// Central configuration file for romantic personal website
// Edit all names, dates, text, timeline items, memory photos, flip cards, quiz, letter & music here!

export const CONFIG = {
  // Names & Key Info
  partnerName: "Sayang 💕",
  yourName: "Aku",
  startDate: "14 Februari 2023",

  // Music Player settings (Local MP3 in public folder)
  music: {
    title: "Shape of My Heart",
    artist: "Backstreet Boys",
    src: "/Backstreet Boys - Shape of My Heart (Lyrics).mp3"
  },

  // 1. Welcome Screen
  welcomeScreen: {
    initialText: "Hei, kamu... 💗",
    typingText: "Aku bikin sesuatu khusus buat kamu.",
    delayedText: "Jangan langsung scroll ya... 😳",
    buttonText: "💗 Buka Untuk Kamu"
  },

  // 2. Hero Section
  hero: {
    badge: "THIS IS FOR YOU",
    headline: "Untuk seseorang yang selalu berhasil bikin aku senyum.",
    partnerDisplay: "Sayang 💕",
    subtext: "Website kecil ini mungkin sederhana,\ntapi semua yang ada di sini dibuat khusus untuk kamu.",
    ctaButton: "Mulai Cerita Kita ↓"
  },

  // 3. Our Little Story (Timeline)
  storyTimeline: [
    {
      step: "01",
      title: "Pertama Kali Bertemu",
      caption: "Entah kenapa dari sekian banyak orang, akhirnya kamu yang aku ingat.",
      date: "14 Feb 2023",
      image: "/1.jpg"
    },
    {
      step: "02",
      title: "Mulai Dekat",
      caption: "Awalnya biasa saja... ternyata malah jadi luar biasa.",
      date: "20 Mar 2023",
      image: "/2.jpg"
    },
    {
      step: "03",
      title: "Kita",
      caption: "Dan tanpa sadar, kamu menjadi bagian favorit dari hari-hariku.",
      date: "15 Jun 2023",
      image: "/3.jpg"
    },
    {
      step: "04",
      title: "Sekarang",
      caption: "Masih kamu. Masih orang yang sama. Tapi rasa sayangnya semakin banyak.",
      date: "Hari Ini & Seterusnya",
      image: "/4.jpg"
    }
  ],

  // 4. Photo Memory Gallery (5 Photos)
  memoryGallery: [
    {
      id: 1,
      image: "/1.jpg",
      caption: "Foto ini selalu berhasil bikin aku senyum.",
      rotate: "-3deg",
      size: "featured" // 1 large photo
    },
    {
      id: 2,
      image: "/2.jpg",
      caption: "One of my favorite memories with you.",
      rotate: "2deg",
      size: "medium"
    },
    {
      id: 3,
      image: "/3.jpg",
      caption: "Kalau bisa mengulang waktu, aku tetap memilih momen ini.",
      rotate: "-2deg",
      size: "medium"
    },
    {
      id: 4,
      image: "/4.jpg",
      caption: "Ketawa kamu di sini candid banget tapi paling manis!",
      rotate: "4deg",
      size: "accent"
    },
    {
      id: 5,
      image: "/5.jpg",
      caption: "Setiap tempat terasa lebih hangat kalau jalan sama kamu.",
      rotate: "-4deg",
      size: "accent"
    }
  ],

  // 5. 5 Things I Love About You (Cards)
  reasonsToLove: [
    {
      id: 1,
      icon: "💗",
      title: "Senyummu",
      preview: "Bisa perbaikin mood seburuk apa pun...",
      content: "Karena entah kenapa senyummu bisa memperbaiki mood aku. Cuma ngeliat kamu senyum aja rasanya beban hari ini langsung hilang."
    },
    {
      id: 2,
      icon: "🌷",
      title: "Cara kamu peduli",
      preview: "Sederhana tapi hangat banget...",
      content: "Kadang sederhana, seperti nanya hal kecil atau ngingetin makan, tapi selalu berhasil bikin aku merasa sangat diperhatikan."
    },
    {
      id: 3,
      icon: "😂",
      title: "Sisi lucumu",
      preview: "Jokes garing kamu itu...",
      content: "Walaupun kadang jokes kamu garing... tetap aku ketawain kok 😭 Sisi humoris kamu yang lucu selalu sukses bikin hari-hariku lebih ceria."
    },
    {
      id: 4,
      icon: "🫶",
      title: "Kamu yang apa adanya",
      preview: "Nggak perlu pura-pura sempurna...",
      content: "Aku suka kamu bukan karena kamu harus sempurna. Justru semua kejujuran dan keunikan kamu yang bikin kamu spesial di mata aku."
    },
    {
      id: 5,
      icon: "🏠",
      title: "Kamu",
      preview: "Rumah terbaik buat aku...",
      content: "Karena pada akhirnya, kamu adalah salah satu tempat ternyaman buat aku. Pulang ke kamu selalu jadi momen favorit dalam hidup."
    }
  ],

  // 6. Mini Interactive Game (Love Quiz)
  quizQuestions: [
    {
      id: 1,
      question: "Siapa yang lebih sering bilang kangen duluan? 😏",
      options: ["Aku 😌", "Kamu 😳"],
      reactionText: ["Hehe pengakuan jujur! Tapi emang beneran kangen terus kok 😋", "Dih ngaku-ngaku! Tapi tetep aku kangen kamu terus kok 😭❤️"]
    },
    {
      id: 2,
      question: "Kalau lagi bingung mau makan apa, biasanya siapa yang jawab 'Terserah'? 🍔",
      options: ["Pasti Kamu! 🙈", "Mana ada, Aku tahu mau makan apa 😇"],
      reactionText: ["Wkwkwk ketahuan kan! Ujung-ujungnya tetep 'terserah kamu aja' 😂", "Bohong banget! Tapi tetep aja manis sih pas bingung 💖"]
    },
    {
      id: 3,
      question: "Siapa yang paling gabisa lama-lama marahan? 🥺",
      options: ["Aku dong, ga tega 🥹", "Kamu yang ga betah marahan 😜"],
      reactionText: ["Bener banget! Kita emang ga bisa lama-lama diem-dieman ❤️", "Haha iya! Baru 5 menit diem udah kangen ketawa lagi 😭💕"]
    }
  ],

  // 7. Love Meter
  loveMeter: {
    title: "Seberapa besar aku sayang kamu?",
    buttonText: "Hitung rasa sayang 💗",
    errorText: "ERROR... rasa sayangnya kebanyakan 😭❤️"
  },

  // 8. Secret Message (Letter)
  secretLetter: {
    teaserTitle: "Ada satu hal lagi...",
    buttonText: "Buka suratnya 💌",
    paragraphs: [
      "Terima kasih sudah hadir di hidup aku.",
      "Terima kasih sudah menjadi seseorang yang selalu punya tempat spesial di hati aku.",
      "Aku mungkin nggak selalu pintar mengungkapkan semuanya lewat kata-kata, tapi satu hal yang aku tahu...",
      "Aku senang ada kamu.",
      "Dan kalau suatu hari nanti kita melihat website kecil ini lagi, semoga kita masih bisa tersenum sambil bilang:",
      "'Lucu juga ya kita dulu.' ❤️"
    ]
  },

  // 9. Special Kiss Button
  kissButton: {
    buttonText: "💋 Kirim Ciuman",
    milestone10: "Okay... cukup, aku jadi salting 😭❤️",
    milestone50: "STOPPP 😭💕"
  },

  // 10. Final Section
  finalSection: {
    line1: "Kalau suatu hari kamu lupa...",
    typingLine: "...ingat kalau ada seseorang yang selalu bersyukur pernah menemukan kamu.",
    loveDisplay: "❤️ I LOVE YOU, Sayang 💕 ❤️",
    authorText: "Made with love by Aku",
    restartButtonText: "🔄 Mulai Lagi"
  },

  // Floating messages triggered during scroll
  floatingToasts: [
    "pssst... jangan senyum-senyum sendiri 😳",
    "aku tahu kamu lagi senyum sekarang 😌",
    "makin dibaca makin sayang kan? 🙈",
    "ingat ya, kamu itu berharga banget buat aku 💕"
  ]
};
