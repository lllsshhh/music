const videos = [
  {
    title: "IVE - After LIKE",
    genre: "K-POP",
    videoId: "F0B7HDiY-10"
  },
  {
    title: "Charlie Puth - Attention",
    genre: "Pop",
    videoId: "nfs8NYg7yQM"
  },
  {
    title: "All day project - Famous",
    genre: "K-POP",
    videoId: "Xl4D6pZZLgByXYiU"
  },
  {
    title: "언에듀 - 룰루랄라",
    genre: "Hip-hop",
    videoId: "sv6WvFNoDJxAMiuu"
  },
  {
    title: "Ph-1 - Good day",
    genre: "Hip-hop",
    videoId: "ZPHrHhq2OBjdxOk5"
  },
  {
    title: "호미들 - 사임쌓임",
    genre: "Hip-hop",
    videoId: "bKFZ2i0gM7Hu7HMM"
  },
  {
    title: "버즈 - My Love",
    genre: "발라드",
    videoId: "KPKJjycZB7f4fTjn"
  },
  {
    title: "우원재 - 시",
    genre: "Hip-hop",
    videoId: "GLSwywT0XdlXEvE8"
  },
  {
    title: "포스트맨 - 신촌을 못",
    genre: "발라드",
    videoId: "IQChTs4y56INVenW"
  },
  {
    title: "Post Malone, Swae Lee - Sunflower",
    genre: "Pop",
    videoId: "1lX6I-aVtakkkPGk"
  },
  {
    title: "NewJeans - OMG",
    genre: "K-POP",
    videoId: "9VYshORkeZxvieDz"
  },
  {
    title: "V.O.S - 울어",
    genre: "발라드",
    videoId: "A6RyOiWjIoL8TMNH"
  },
  {
    title: "The Kid LAROI, Justin Bieber - STAY",
    genre: "Pop",
    videoId: "Jj6QSfYbfv0qX8b9"
  },
   {
    title: "창모 - 메테오",
    genre: "Hip-hop",
    videoId: "k64pu8pgfsxlMLtf"
  },
  {
    title: "NewJeans - ETA",
    genre: "K-POP",
    videoId: "FSiyJBLJuGMperVO"
  },
  {
    title: "Aespa - Whiplash",
    genre: "K-POP",
    videoId: "-m_lynjb9wIJkUcj"
  },
  {
    title: "Potty Monkey - 남자니까",
    genre: "Hip-hop",
    videoId: "nYJs_ZwRN5VR_gH9"
  },
   {
    title: "오혁 - 소녀",
    genre: "발라드",
    videoId: "OSR3-U7dRX_7RNKz"
  },
  {
    title: "카더가든 - 가까운 듯 먼 그대여",
    genre: "발라드",
    videoId: "6J08qJSxNaxvyf9P"
  },
  {
    title: "더 넛츠 - 사랑의 바보",
    genre: "발라드",
    videoId: "Tr2zh3LQLIIPiA1v"
  },
  {
    title: "Clean Bandit - Symphony",
    genre: "Pop",
    videoId: "yvq1VmE1aPG6l_b2"
  },
   {
    title: "Wiz Khalifa - See You Again ",
    genre: "Pop",
    videoId: "o8hMCKOZxQGv2OjA"
  },
  {
    title: "Lukas Graham - 7 Years ",
    genre: "Pop",
    videoId: "-3SLouxrVWJGP8rd"
  },
  {
    title: "The Weekend - Blinding lights ",
    genre: "Pop",
    videoId: "lbCq_B6EWjMAXOZO"
  },
  {
    title: "Avicii - The Nights ",
    genre: "Pop",
    videoId: "TLh0ha3dLDnCmCgm"
  },
  {
    title: "10cm - 너에게 닿기를 ",
    genre: "K-POP",
    videoId: "PQL28qfLSjgYicES"
  },
];

const searchInput = document.getElementById("searchInput");
const videoList = document.getElementById("videoList");
const genreButtons = document.querySelectorAll("#genreMenu button");
const noResults = document.getElementById("noResults");

let selectedGenre = "all";

function renderVideos() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = videos.filter(video => {
    const matchTitle = video.title.toLowerCase().includes(keyword);
    const matchGenre = selectedGenre === "all" || video.genre === selectedGenre;
    return matchTitle && matchGenre;
  });

  videoList.innerHTML = "";
  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  } else {
    noResults.style.display = "none";
  }

  filtered.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <strong>${video.title} (${video.genre})</strong>
      <iframe 
        src="https://www.youtube.com/embed/${video.videoId}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
    videoList.appendChild(card);
  });
}

searchInput.addEventListener("input", renderVideos);

genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    genreButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedGenre = button.dataset.genre;
    renderVideos();
  });
});

renderVideos(); // 초기 로딩 시 표시
