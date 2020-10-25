class Audio {
  constructor() {
    this.volume = 1;
    this.positivePress = 0;
    this.negativePress = 0;
  }

  play = () => {
    let state = "";
    const ctx = document.getElementsByClassName("player-audio")[0];
    ctx.volume = this.volume / 10;
    if (ctx.paused) {
      ctx.play();
    } else {
      ctx.pause();
    }
    return state;
  };

  increasevolume = (volume) => {
    if (volume > -1 && volume < 11) {
      const ctx = document.getElementsByClassName("player-audio")[0];
      ctx.volume = volume / 10;
    }
  };

  decreasevolume = (volume) => {
    if (volume > -1 && volume < 11) {
      const ctx = document.getElementsByClassName("player-audio")[0];
      ctx.volume = volume / 10;
    }
  };

  setVolume = (number) => {
    const ctx = document.getElementsByClassName("player-audio")[0];
    this.volume = number;
    ctx.volume = number / 10;
  };

  mute = () => {
    const ctx = document.getElementsByClassName("player-audio")[0];
    ctx.muted ? (ctx.muted = false) : (ctx.muted = true);
    return ctx.muted;
  };

  like = (currentStation) => {
    let likedItems = JSON.parse(localStorage.getItem("liked" || "{}") || "[]");
    let itemLiked = false;
    if (this.liked(currentStation)) {
      likedItems = likedItems.filter(
        (x) => x.changeuuid !== currentStation.changeuuid
      );
    } else {
      itemLiked = true;
      likedItems !== "undefined"
        ? (likedItems = [...likedItems, currentStation])
        : (likedItems = currentStation);
    }
    localStorage.setItem("liked", JSON.stringify(likedItems));
    return itemLiked;
  };

  liked = (currentStation) => {
    let likedItems = JSON.parse(localStorage.getItem("liked" || "{}") || "[]");
    const previouslyLiked = likedItems.find((x) => {
      return x.changeuuid === currentStation.changeuuid;
    });
    return !!previouslyLiked;
  };
}

export default new Audio();
