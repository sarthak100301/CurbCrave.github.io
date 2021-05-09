
new TypeIt("#simpleUsage", {
  speed: 50,
  loop: true,
  waitUntilVisible: true,
})
  .type(
    "<b>Hi! This is Sarthak Gulati. I am a Student at Vellore Institute of Technology eager to gain new insights and experience. Personally, enjoys learning and does not fail, either wins or learns. On my pathway to success. A never quit attitude and want to break ceilings and the only thing that bothers is mediocrity. </b>"
  )
  .break({ delay: 500 })
  .type(
    "<br><i>''Design is not just what it looks like and feels like.<br>Design is how it works.Innovation distinguishes between leader and a follower''</i>",
    { delay: 300 }
  )
  .pause(500)
  .break({ delay: 500 })
  .type("<em>-Steve Jobs</em>")
  .go();