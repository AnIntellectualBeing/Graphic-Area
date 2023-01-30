// Get elements
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');
const timeline = document.querySelector('section');

// Tweet template
const tweetTemplate = que => {
  return `
    <article>
      <header>
        <img src="https://picsum.photos/50/50" alt="Profile Image">
        <h3>Username</h3>
        <p>@username</p>
      </header>
      <p>${que}</p>
    </article>
  `;
};

// Add tweet to timeline
const addTweetToTimeline = que => {
  timeline.innerHTML = tweetTemplate(que) + timeline.innerHTML;
};

// Handle form submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const que = textarea.value.trim();

  if (que) {
    addTweetToTimeline(que);
    textarea.value = '';
  }
});
