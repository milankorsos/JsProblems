/*
  A crack team of love scientists from OkEros (a hot new dating site) have devised a way to
  represent dating profiles as rectangles on a two-dimensional plane.
  They need help writing an algorithm to find the intersection of two users' love rectangles.
  They suspect finding that intersection is the key to a matching algorithm so powerful it will
  cause an immediate acquisition by Google or Facebook or Obama or something.

  Two rectangles overlapping a little. It must be love.
  Write a function to find the rectangular intersection of two given love rectangles.

  As with the example above, love rectangles are always "straight" and never "diagonal."
  More rigorously: each side is parallel with either the x-axis or the y-axis.

  They are defined as objects ↴ like this :

    var myRectangle = {

      // coordinates of bottom-left corner
      leftX: 1,
      bottomY: 5,

      // width and height
      width: 10,
      height: 4,

  };

  Your output rectangle should use this format as well.

  https://www.interviewcake.com/question/javascript/rectangular-love
*/

/*

  A ******** B
  *          *
  *          *
  C ******** D

  A: [leftX, bottomY + height]
  B: [leftX + width, bottomY + height]
  C: [leftX, bottomY]
  D: [leftX + width, bottomY]

  When is an intersection?

    Is any side intersects any perpendicular sides
      - AB intersects AC or BD
      - CD intersects AC or BD

    Is rect1 includes rect2 or rect2 included rect1 (or equals)

*/



const rectangle = function(rect1, rect2) {
  const rect = {};

  // // get corner coordinates
  // const a1 = [rect1.leftX, rect1.bottomY + rect1.height];
  // const b1 = [rect1.leftX + rect1.width, rect1.bottomY + rect1.height];
  // const c1 = [rect1.leftX, rect1.bottomY];
  // const d1 = [rect1.leftX+ rect1.width, rect1.bottomY];

  // const a2 = [rect2.leftX, rect2.bottomY + rect2.height];
  // const b2 = [rect2.leftX + rect2.width, rect2.bottomY + rect2.height];
  // const c2 = [rect2.leftX, rect2.bottomY];
  // const d2 = [rect2.leftX+ rect2.width, rect2.bottomY];

  return rect;
}

export default rectangle;
