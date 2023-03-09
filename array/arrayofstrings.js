const tweets = [
  {
    id: 10512,
    message: "Hello Twitter 👋",
    created_at: "2020-01-03 11:46:00",
    stats: {
      likes: 41,
      retweets: 54
  }
  },
  {
    id: 41241,
    message: "How do you keep track of your notes?",
    created_at: "2021-02-19 15:32:00",
    stats: {
      likes: 14,
      retweets: 20
  }
  }
];

tweets.forEach(tweet => { //object destructuring
  const {likes, retweets} = tweet.stats; // const { property } = object
  console.log(likes, retweets);
});

// const findId = tweets.find(tweet => tweet.id === 41241);
// console.log(findId); // {id: 41241, message: "How do you keep track of your notes?", created_at: "2021-02-19 15:32:00", stats: {…}

// const messages = tweets.map(tweet => tweet.message);
// console.log(messages); // ["Hello Twitter 👋", "How do you keep track of your notes?"]

// const stats = tweets.filter(tweet => tweet.stats.likes > 20);
// console.log(stats); // [{id: 10512, message: "Hello Twitter 👋", created_at: "2020-01-03 11:46:00", stats: {…}}, {id: 1080777336298195435, message: "How do you keep track of your notes?", created_at: "2021-02-19 15:32:00", stats: {…}}]

// const csv = tweets.map(tweet => tweet.message).join(', ');
// console.log(csv); // ["Hello Twitter 👋", "How do you keep track of your notes?"]
