export const projects = [
  {
    id: 1,
    name: "Canvas, Shapes & Colors in p5.js",
    description:
      "Self-portrat illustrating emotional state after ICE murders multiple citizens in Minneapolis, with dropped jaw and tearing eyes.  Layering was key to planning out, as it is an additive process: pupil on top of iris on top of eye on top of face.  Achieving the the subtractive effect of the lower lids of the eyes required adding arcs using the skin tone color, but the alignment with the eye was challenging. This supported the welling of the eyes (arcs)  and the tear (an ellipse). ",
    url: "https://editor.p5js.org/natisdale/full/NLpPcTeEb",
    image: "images/self-portrait.png",
  },
  {
    id: 2,
    name: "Variables and Interactivity",
    description:
      "Animated self-portrait with (1) added animation to the tear drop with two rates of movement.  slower while traveling down face, and then quickly as it drops below chin, (2) slight opening and closing of the mouth, representing speachlessness, and (3)Interactivity with the eye position based on movement of mouse along the x-axis",
    url: "https://editor.p5js.org/natisdale/full/NLpPcTeEb",
    image: "images/self-portrait.gif",
  },
  {
    id: 3,
    name: "Functions and Parameters",
    description:
      "Draws field of flowers with overloaded function based on this drawFlower function. Uses arc to draw sun, with random stroke color for flicker at edge of sun. Export to Gif doesn't work due to how I used background() in setup(), not draw(). Export to PNG captures the scene correctly, but won't show the animated sun flicker",
    url: "https://editor.p5js.org/natisdale/full/AnotherProject",
    image: "images/flower_scene.png",
  },
  {
    id: 4,
    name: "Conditional Statements",
    description:
      "A simple implementation of the classic Pong game for a single player. Instructions are displayed before and after each game. User chooses level 1-9 to start game, and can control paddle with either mouse or arrow keys. Initial ball direction is randomly toward left or right. ",
    url: "https://editor.p5js.org/natisdale/full/eUYf_zBp-",
    image: "images/pong_game.gif",
  },
  {
    id: 5,
    name: "For Loops, push(), pop(), and translate()",
    description:
      "Randomly sized and placed ladybugs.  Each mouse click calls drawBugs(), which calls drawBug() in a loop.  Translate() and scale() are used for position and sizing of each lady bug.",
    url: "https://editor.p5js.org/natisdale/full/wcniMR2UX",
    image: "images/lady-bugs.png",
  },
  {
    id: 6,
    name: "Nested and While Loops",
    description:
      "This sketch plays with the idea of what a Vera Molnár Squares app might look like on a mobile device.  The draw function automatically triggers a redraw for purpose of capturing a GIF, based on a counter incremented and reset based on frame count.   A single button that can be pressed to a 2 x 6 grid of squares with random colors.  The color of the button changes when pressed (or simulated press is triggered by counter).",
    url: "https://editor.p5js.org/natisdale/full/wpB1qEGho",
    image: "images/vmsquares.gif",
    featured: true,
  },
  {
    id: 7,
    name: "Iterables, Strings and DOM",
    description:
      "A Ceasar [de]cipher tool (sketch Links to an external site.) will take plain text or cipher text string, split it into a character array, and shift three to the right or left depending on whether encrypting or decrypting. If no text is provided, then a hint will appear when the action button is pressed.  I leveraged style.css for layout and styles.  A div is used as the entry component container, and is parent to input, label, button, and hint elements. Initially a default canvas was getting created, creating a large gap above the heading.  I used the developer tools to identify it, and then removed it by adding noCanvas().",
    url: "https://editor.p5js.org/natisdale/full/XnVWp91FM",
    image: "images/ceasar-cipher.png",
    featured: true,
  },
  {
    id: 8,
    name: "Arrays, Methods, and Algorithms",
    description:
      "Bar chart of Top 10 MotoGP Grand Prix winners (1949-2022) The strings are read in from top-10-motogp-winners.csv by preload(), and then parsed and saved into an array in setup() by loadData().  The draw() funnction calls drawTitle() and drawBars().  Each bar has a barHeight property, which is initialized to 0, and then increased each frame up to the appropriate value proportional to the chart area.",
    url: "https://editor.p5js.org/natisdale/full/S4ahfF_p8",
    image: "images/motogp-bar-chart.gif",
    featured: true,
  },
  {
    id: 9,
    name: "Objects and Object Literals",
    description:
      "Game where you are a motorcyclist splitting lanes on highway.  Use left and right arrow keys to move. Press r to ride again after crashing",
    url: "https://editor.p5js.org/natisdale/full/HAUUyr4SK",
    image: "images/lane-splitting.gif",
  },
  {
    id: 10,
    name: "Classes and Object-Oriented Programming",
    description:
      "Updated version of lane-splitting game with classes and OOP. Game can be played on mobile using the Site link below.",
    url: "https://editor.p5js.org/natisdale/full/LUwYOZU5B",
    image: "images/lanesplitter.gif",
    githubPagesUrl: "https://natisdale.github.io/lanesplitter.us/",
    featured: true,
  },
];
