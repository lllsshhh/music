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
    videoId: "VjvzYjU1mY0"
  },
  {
    title: "언에듀 - 룰루랄라",
    genre: "Hip-hop",
    videoId: "-A6qbVttE1A"
  },
  {
    title: "Ph-1 - Good day",
    genre: "Hip-hop",
    videoId: "G9crpffgwx0"
  },
  {
    title: "호미들 - 사임쌓임",
    genre: "Hip-hop",
    videoId: "u5a1CGlLUoU"
  },
  {
    title: "버즈 - My Love",
    genre: "발라드",
    videoId: "i-TFmaRcoKs"
  },
  {
    title: "우원재 - 시",
    genre: "Hip-hop",
    videoId: "H04mbKV44so"
  },
  {
    title: "포스트맨 - 신촌을 못",
    genre: "발라드",
    videoId: "SBukflMO7O4"
  },
  {
    title: "Post Malone, Swae Lee - Sunflower",
    genre: "Pop",
    videoId: "ApXoWvfEYVU"
  },
  {
    title: "NewJeans - OMG",
    genre: "K-POP",
    videoId: "sVTy_wmn5SU"
  },
  {
    title: "V.O.S - 울어",
    genre: "발라드",
    videoId: "eXkspcN19Tg"
  },
  {
    title: "The Kid LAROI, Justin Bieber - STAY",
    genre: "Pop",
    videoId: "kTJczUoc26U"
  },
   {
    title: "창모 - 메테오",
    genre: "Hip-hop",
    videoId: "lOrU0MH0bMk"
  },
  {
    title: "NewJeans - ETA",
    genre: "K-POP",
    videoId: "jOTfBlKSQYY"
  },
  {
    title: "Aespa - Whiplash",
    genre: "K-POP",
    videoId: "-jWQx2f-CErU"
  },
  {
    title: "Potty Monkey - 남자니까",
    genre: "Hip-hop",
    videoId: "1rY2vIBPVaA"
  },
   {
    title: "오혁 - 소녀",
    genre: "발라드",
    videoId: "43Oh_-A3eI8"
  },
  {
    title: "카더가든 - 가까운 듯 먼 그대여",
    genre: "발라드",
    videoId: "CAxPgfOqtr8"
  },
  {
    title: "더 넛츠 - 사랑의 바보",
    genre: "발라드",
    videoId: "fuCmW_1_wxs"
  },
  {
    title: "Clean Bandit - Symphony",
    genre: "Pop",
    videoId: "aatr_2MstrI"
  },
   {
    title: "Wiz Khalifa - See You Again ",
    genre: "Pop",
    videoId: "RgKAFK5djSk"
  },
  {
    title: "Lukas Graham - 7 Years ",
    genre: "Pop",
    videoId: "LHCob76kigA"
  },
  {
    title: "The Weekend - Blinding lights ",
    genre: "Pop",
    videoId: "4NRXx6U8ABQ"
  },
  {
    title: "Avicii - The Nights ",
    genre: "Pop",
    videoId: "UtF6Jej8yb4"
  },
  {
    title: "10cm - 너에게 닿기를 ",
    genre: "K-POP",
    videoId: "qRdFd34gnOY"
  },
];

const VIDEOS = [
  // (동일한 videos 배열 생략 가능, 기존 내용 그대로 유지)
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

// ✅ YouTube API 연동
const API_KEY = 'AIzaSyAEqeIA70aaieKkuotNa6pNhfLvDki0DY8'; // <-- 여기에 API 키 입력
const STATS_VIDEOS = [
  { id: 'F0B7HDiY-10' },
  { id: 'nfs8NYg7yQM' },
  { id: 'VjvzYjU1mY0' }
];

function createVideoElements() {
  const container = document.getElementById('videos-container');
  STATS_VIDEOS.forEach(video => {
    const videoHTML = `
      <div class="video-item" id="video-${video.id}">
        <h3 id="title-${video.id}">제목 불러오는 중...</h3>
        <iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>
        <div class="stats">
          <p>조회수: <span id="views-${video.id}">-</span></p>
          <p>좋아요: <span id="likes-${video.id}">-</span></p>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', videoHTML);
  });
}

async function fetchVideoData() {
  const ids = STATS_VIDEOS.map(v => v.id).join(',');
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids}&key=${API_KEY}`;
}
  try {
    const res = await fetch(url);
    const data = await res.json();
  }
    data.items.forEach(item) => {
      const id = item.id;
      const stats = item.statistics;
      const snippet = item.snippet;
    }
      document.getElementById(`title-${id}`).textContent = snippet.title;
      document.getElementById(`views-${id}`).textContent = Number(stats.viewCount)
  