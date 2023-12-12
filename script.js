var quoteContainer = document.getElementById("quoteContainer");
var quoteParag = document.getElementById("quoteParag");
var quoteArtist = document.getElementById("quoteArtist");

var quotes = [
  {
    quoteParag: "“Be yourself; everyone else is already taken.”",
    quoteArtist: "― Oscar Wilde",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    quoteArtist: "― Marilyn Monroe",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag: "“welcome Here”",
    quoteArtist: "Me",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    quoteArtist: "― Albert Einstein",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag: "“So many books, so little time.”",
    quoteArtist: "― Frank Zappa",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag: "“A room without books is like a body without a soul.”",
    quoteArtist: "― Marcus Tullius Cicero",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    quoteArtist: "― Bernard M. Baruch",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    quoteArtist: "― William W. Purkey",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    quoteArtist: "― Dr. Seuss",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag: "“You only live once, but if you do it right, once is enough.”",
    quoteArtist: "― Mae West",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    quoteArtist: "― Robert Frost",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    quoteArtist: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      "“Dont walk in front of me… I may not follow Dont walk behind me… I may not lead    Walk beside me… just be my friend”",
    quoteArtist: "― Albert Camus",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag: "“If you tell the truth, you don't have to remember anything.”",
    quoteArtist: "― Mark Twain",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
  {
    quoteParag:
      '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
    quoteArtist: "― C.S. Lewis, The Four Loves",
    quoteId: Math.floor(Math.random() * (14 - 0 + 1)) + 0,
  },
];

function changeQuote() {
  var quoteIndex = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
  console.log(quoteIndex);

  if (quoteIndex == quotes[quoteIndex].quoteId) {
    var quoteIndexNext = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
    // console.log(quoteIndex);
    console.log(quoteIndexNext);

    quoteParag.innerHTML = quotes[quoteIndexNext].quoteParag;
    quoteArtist.innerHTML = quotes[quoteIndexNext].quoteArtist;
  } else if (quoteIndex != quotes[quoteIndex].quoteId) {
    quoteParag.innerHTML = quotes[quoteIndex].quoteParag;
    quoteArtist.innerHTML = quotes[quoteIndex].quoteArtist;
  }
}
