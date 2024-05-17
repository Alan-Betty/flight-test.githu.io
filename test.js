new TypeIt("#typing", {
    lifeLike: false, 
    deleteSpeed: 50,
    loop: true,
    // cursorChar: "✈",
    waitUntilVisible: true,
  })
         .type("Ever ")
         .pause(384)
         .type("Wondered ")
         .pause(384)
         .type("What ")
         .pause(384)
         .type("This is ")
         .pause(384)
         .type("And H")
         .pause(384)
         .type("ow An ")
         .pause(384)
         .type("Air")
         .type("crsft ")
         .pause(384)
         .type("works ")
         .pause(484)
         .move(-9, {speed: 1024})
         .pause(384)
         .delete(1,)
         .pause(200)
         .type("a")
         .pause(200)
         .move(9, {speed: 1024})
         .type(".")
         .pause(384)
         .delete(1,)
         .type ("?")
         .pause(2000)
         .break({ delay: 500 })
         .type("Click The Text To ")
         .pause(200)
         .type("Know More.")
         .pause(2000)
         .go();
//   strings: ["Ever Wondered What This is And How it Works?", "Well This is An Aircraft.","But, What Is An Aircraft ?","I'm Going to tell you all about it", "               "],