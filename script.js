const songs = [
  {
    title: "Love, Maybe",
    genre: "KPOP",
    artist: "MeloMance",
    image: "https://i.ytimg.com/vi/BqI0N6xOaAk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=BqI0N6xOaAk"
  },
  {
    title: "Peaches",
    genre: "R&B",
    artist: "Justin Bieber",
    image: "https://i.ytimg.com/vi/tQ0yjYUFKAE/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=tQ0yjYUFKAE"
  },
  {
    title: "밤하늘의 별을",
    genre: "발라드",
    artist: "경서",
    image: "https://i.ytimg.com/vi/g27h2z4sWzY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=g27h2z4sWzY"
  },
  {
    title: "그때 그 순간 그대로",
    genre: "KPOP",
    artist: "WSG워너비",
    image: "https://i.ytimg.com/vi/z1CvnCHjX6Q/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=z1CvnCHjX6Q"
  }
];

function displaySongs(songList) {
  const container = document.getElementById("song-container");
  container.innerHTML = "";
  songList.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.setAttribute("data-title", song.title);
    card.setAttribute("data-genre", song.genre);
    card.innerHTML = `
      <img src="${song.image}" alt="${song.title}">
      <p>${song.title} - ${song.artist}</p>
      <a href="${song.url}" target="_blank">▶ 재생</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displaySongs(songs);

  const searchBox = document.querySelector(".search-box");
  const genreTabs = document.querySelectorAll(".genre-tab");

  // 검색 필터
  searchBox.addEventListener("input", () => {
    const keyword = searchBox.value.toLowerCase();
    const filtered = songs.filter(song => song.title.toLowerCase().includes(keyword));
    displaySongs(filtered);
  });

  // 장르 필터
  genreTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.genre;
      if (selected === "all") {
        displaySongs(songs);
      } else {
        const filtered = songs.filter(song => song.genre === selected);
        displaySongs(filtered);
      }
      searchBox.value = "";
    });
  });
});

