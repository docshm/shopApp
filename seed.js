const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "Iphone 12",
    img: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 10000,
    desc: "The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).",
  },
  {
    name: "MacBook Air",
    img: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 20000,
    desc: "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.",
  },
  {
    name: "Smart Watch",
    img: "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60",
    price: 5000,
    desc: "Measure your blood oxygen level with a revolutionary sensor and app. Take an ECG anytime, anywhere. See your fitness metrics at a glance with the enhanced Always-On Retina display. With Apple Watch Series 6 on your wrist",
  },
  {
    name: "Imac",
    img: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW1hY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 15000,
    desc: "See it all in sharp, glorious detail on the immersive 60.96-centimetre (24‑inch) 4.5K Retina display.1 The P3 wide colour gamut brings what you’re watching to life in over a billion colours. Images shine with a brilliant 500 nits of brightness. Industry-leading anti-reflective coating delivers greater comfort and readability.",
  },
  {
    name: "Samsung Tv",
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHR2fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 9000,
    desc: "Quantum Processor 4K drives all-around performance, intelligently optimizing picture, sound, and more to give you a truly breathtaking viewing experience.",
  },
  {
    name: "Air Conditioner",
    img: "https://images.unsplash.com/photo-1436473849883-bb3464c23e93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 2000,
    desc: "Introducing an immersive display on the AC with the highest level of craftsmanship and colours bold yet soothing that perfectly in-tune with your unique taste in temperature. Know your Ambience be it cold, comfort or warm with Hitachi’s first ever ambience light.",
  },
  {
    name: "Ipad Pro",
    img: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=60",
    price: 12000,
    desc: "The ultimate iPad experience. With next-level M1 performance, a breathtaking XDR display and fast wireless. Buckle up.",
  },
  {
    name: "Drone",
    img: "https://images.unsplash.com/photo-1557343569-b1d5b655b7cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 1500,
    desc: "DJI camera drones contain the best drone technology for every type of user and shooting scenario. ",
  },
  {
    name: "Headphones",
    img: "https://images.unsplash.com/photo-1560718217-69193acc0713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdHMlMjBoZWFkcGhvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 6500,
    desc: "Experience powerful, balanced sound with Solo Pro wireless on-ear headphones featuring Active Noise Cancelling",
  },
];

const seedDB = async () => {
  await Product.insertMany(products);
  console.log("DB seeded");
};

module.exports = seedDB;
