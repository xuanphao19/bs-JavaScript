/*






*/

// Rating Stars: ⭐⭐⭐

const renderStars = (rating, total = 5) => {
  const $ = document.querySelector.bind(document);
  const fragment = document.createDocumentFragment();
  const container = $("#rating-stars");
  container.innerHTML = "";
  const fullStars = Math.floor(rating);
  const percent = rating % 1;

  const viewBox = "0 0 24 24";
  const spaceUrl = "http://www.w3.org/2000/svg";
  const path = `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="currentColor"/>`;

  for (let i = 0; i < total; i++) {
    const starItem = document.createElement("div");
    starItem.classList.add("star-icon");
    starItem.dataset.index = i + 1;
    const svg = document.createElementNS(spaceUrl, "svg");
    svg.setAttribute("viewBox", viewBox);
    svg.classList.add("star", "empty");
    svg.innerHTML = path;

    starItem.appendChild(svg);

    if (i < fullStars) {
      svg.setAttribute("class", `star full`);
    } else if (i === fullStars && percent > 0) {
      const partial = svg.cloneNode(true);
      partial.setAttribute("class", `star half`);

      partial.style.clipPath = `polygon(0 0, ${percent * 100}% 0, ${percent * 100}% 100%, 0 100%)`;

      starItem.appendChild(partial);
    }

    fragment.appendChild(starItem);
  }

  container.appendChild(fragment);
};

// Số lượng đánh giá cho từng sao
const ratingsCount = {
  5: 2,
  4: 2,
  3: 0,
  2: 1,
  1: 1,
};

const calculateAverageRating = (ratingsCount) => {
  const totalRatings = Object.values(ratingsCount).reduce((acc, count) => acc + count, 0);
  const totalPoints = Object.entries(ratingsCount).reduce((acc, [star, count]) => acc + star * count, 0);
  return (totalPoints / totalRatings).toFixed(4);
};

const handleStarClick = (event) => {
  const clickedStar = parseInt(event.currentTarget.dataset.index);
  ratingsCount[clickedStar] += 1;
  const newRating = calculateAverageRating(ratingsCount);
  renderStars(newRating);
};

const init = () => {
  const initialRating = calculateAverageRating(ratingsCount);
  renderStars(initialRating);
  const starContainers = document.querySelectorAll(".star-icon");
  starContainers.forEach((starContainer) => {
    starContainer.addEventListener("click", handleStarClick);
  });
};

document.addEventListener("DOMContentLoaded", init);
