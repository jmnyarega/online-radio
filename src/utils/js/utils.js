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

  increasevolume = () => {
    const ctx = document.getElementsByClassName("player-audio")[0];
    this.negativePress = 0;
    this.positivePress += 1;
    const newVolume = (this.volume + this.positivePress) / 10;
    ctx.volume = newVolume <= 1 ? newVolume : 1;
    this.volume = (newVolume <= 1 ? newVolume : 1) * 10;
  };

  decreasevolume = () => {
    const ctx = document.getElementsByClassName("player-audio")[0];
    this.positivePress = 0;
    this.negativePress += 1;
    const newVolume = (this.volume - this.negativePress) / 10;
    ctx.volume = newVolume >= 0 ? newVolume : 0;
    this.volume = (newVolume >= 0 ? newVolume : 0) * 10;
  };

  mute = () => {
    const ctx = document.getElementsByClassName("player-audio")[0];
    ctx.muted ? (ctx.muted = false) : (ctx.muted = true);
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
