var names = [
  "― Oscar Wilde",
  "― Frank Zappa",
  "― Mark Twain",
  "― John Green, The Fault in Our Stars",
  "We are all in the gutter, but some of us are looking at the stars.",
  "Life is what happens to us while we are making other plans.",
];

var quote = [
  " Be yourself; everyone else is already taken. ",
  "So many books, so little time.",
  "Good friends, good books, and a sleepy conscience: this is the ideal life.",
  "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
  "― Oscar Wilde, Lady Windermere's Fan ",
  "― Allen Saunders ",
];

function auto() {
  randomNum = Math.floor(Math.random() * quote.length);

  document.getElementById("quote").innerHTML = quote[randomNum];
  document.getElementById("name").innerHTML = names[randomNum];
}
