const doItArray = [
  "https://giphy.com/gifs/gq-inspiration-shia-labeouf-do-it-3o85xtLX7zCyeeWGLC",
  "https://media.giphy.com/media/CpgNjk2E54p7W/giphy.gif",
  "https://media.giphy.com/media/26xBuwDvSNN9w8sda/giphy.gif",
  "https://media.giphy.com/media/26xBuwDvSNN9w8sda/giphy.gif",
  "https://media.giphy.com/media/l0HlCVuoqZU63Ug2k/giphy.gif",
  "https://media.giphy.com/media/3o7TKsXnnK5W5RELQY/giphy.gif",
  "https://media.giphy.com/media/3kHCIqabgc9kVRWFYA/giphy.gif",
  "https://media.giphy.com/media/hsOIQhiyuxRWRQtYM0/giphy.gif",
  "https://media.giphy.com/media/9PnP3QnWhxI6lMiYWY/giphy.gif",
  "https://media.giphy.com/media/f8cFBux1pgkApezJfQ/giphy.gif",
  "https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif",
  "https://media.giphy.com/media/nFjDu1LjEADh6/giphy.gif",
  "https://media.giphy.com/media/hVYVYZZBgF50k/giphy.gif",
  "https://media.giphy.com/media/hXDrTueJWAscK3xWQ2/giphy.gif"
];

const dontDoItArray = [
  "https://media.giphy.com/media/f8cFBux1pgkApezJfQ/giphy.gif",
  "https://media.giphy.com/media/SRqTQmbYdm5jgS7xH9/giphy.gif",
  "https://media.giphy.com/media/4H70hBJGFx5APMD8A8/giphy.gif",
  "https://media.giphy.com/media/9EKBsjzgzzpu0/giphy.gif",
  "https://media.giphy.com/media/xULW8Mfacg6pXs9GkE/giphy.gif",
  "https://media.giphy.com/media/5QUKIa6ovlLTILnIaK/giphy.gif",
  "https://media.giphy.com/media/xVvJkXpUdnh70mGGqn/giphy.gif",
  "https://media.giphy.com/media/Q8aXVAVUA9Pegjcp6X/giphy.gif",
  "https://media.giphy.com/media/kBloEOVQ1T1iAbuxPu/giphy.gif",
  "https://media.giphy.com/media/26kckFM7rSfdE4BgXR/giphy.gif",
  "https://media.giphy.com/media/EPe8qQ9izgDZ0GJmr4/giphy.gif"
];

const form = document.getElementById("input-form");

form.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();

    const inputText = document.getElementById("input-text");

    if (inputText.value.trim() !== "") {
      const answer = document.getElementById("p-output");
      const image = document.getElementById("image-output");
      const decision = Math.random() >= 0.5;
      let index;

      switch (decision) {
        case true:
          answer.textContent = "Do It";
          index = Math.floor(Math.random() * doItArray.length);
          console.log(index);
          image.src = doItArray[index];
          image.alt = "Do It Gift";
          break;
        default:
          answer.textContent = "Don't Do It";
          index = Math.floor(Math.random() * dontDoItArray.length);
          console.log(index);
          image.src = dontDoItArray[index];
          image.alt = "Don't Do It Gift";
      }
    }
  },
  false,
)
