// paths to emoji images
const emojiImgs = {
  happy: "figures/grinning-face.png",
  sad: "figures/crying-face.png",
  shocked: "figures/shocked-face.png",
  hangry: "figures/hangry-face.png",
  scared: "figures/scared-face.png",
};

/**
 * Main app code
 */
fakeMoodRequest();

/**
 * This function will simulate fetching David's current Mood from the internet
 * There will be a random delay up to 3 seconds, followed by an (fake) "attempt"
 * to fetch David's mood. In this "attempt", there is a 20% chance that it rejects
 * with the message "unavailable". If it successfully fetches, then one of
 * ["hangry", "sad", "shocked", "happy", "scared"] will be resolved.
 */
function fakeMoodRequest() {
  let delay = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    // this is the code that runs after the delay
    if (Math.random() < 0.2) {
      console.log("unavailable");
    } else {
      const moods = ["hangry", "sad", "shocked", "happy", "scared"];
      console.log(moods[Math.floor(Math.random() * moods.length)]);
    }
  }, delay);
}
