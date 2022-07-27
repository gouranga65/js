var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne",
    title: " The Final ",
    readingStatus: false,
  },
];
for (let i = 0; i < library.length; i++) {
    console.log(`readingStatus of ${library[i].author} is ${library[i].readingStatus}`);
    
}