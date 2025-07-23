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
    title: "권진아 - 위로",
    genre: "K-POP",
    videoId: "iHrbq8DWm24"
  },
  {
    title: "Lofi Hip-hop Chill Mix",
    genre: "Hip-hop",
    videoId: "5qap5aO4i9A"
  },
  {
    title: "Jazz Vibes for Relaxing",
    genre: "Jazz",
    videoId: "Dx5qFachd3A"
  }
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
