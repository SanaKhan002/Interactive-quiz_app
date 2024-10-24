
const technicalQuestions = [
  {
    question: "What does CSS stand for?",
    a: "Colorful Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    correct: "b",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<css>",
    b: "<script>",
    c: "<style>",
    d: "<link>",
    correct: "c",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    a: "<lb>",
    b: "<br>",
    c: "<break>",
    d: "<newline>",
    correct: "b",
  },
  {
    question: "Which property is used in CSS to change the background color?",
    a: "background-color",
    b: "color",
    c: "bg-color",
    d: "background",
    correct: "a",
  },
  {
    question: "How can you add a comment in JavaScript?",
    a: "// This is a comment",
    b: "' This is a comment",
    c: "/* This is a comment */",
    d: "# This is a comment",
    correct: "a",
  },
  {
    question: "Which attribute is used to specify the character encoding in HTML?",
    a: "encoding",
    b: "charset",
    c: "meta",
    d: "lang",
    correct: "b",
  },
  {
    question: "Which CSS property controls the text color?",
    a: "font-color",
    b: "text-color",
    c: "color",
    d: "font-style",
    correct: "c",
  },
  {
    question: "How do you declare a JavaScript variable?",
    a: "var myVar;",
    b: "variable myVar;",
    c: "v myVar;",
    d: "myVar;",
    correct: "a",
  },
  {
    question: "What is the purpose of the <head> element in HTML?",
    a: "To create a header",
    b: "To include metadata and links",
    c: "To store the main content",
    d: "To define the footer",
    correct: "b",
  },
  {
    question: "Which method is used to round a number to the nearest integer in JavaScript?",
    a: "Math.floor()",
    b: "Math.ceil()",
    c: "Math.round()",
    d: "Math.trunc()",
    correct: "c",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "class",
    b: "font",
    c: "styles",
    d: "style",
    correct: "d",
  },
  {
    question: "What is the correct syntax for referring to an external script called 'main.js'?",
    a: "<script src='main.js'>",
    b: "<script href='main.js'>",
    c: "<script ref='main.js'>",
    d: "<script name='main.js'>",
    correct: "a",
  },
  {
    question: "How do you select all <p> elements on a page in CSS?",
    a: "p.all",
    b: ".p",
    c: "#p",
    d: "p",
    correct: "d",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onmouseclick",
    b: "onclick",
    c: "onchange",
    d: "onmouseover",
    correct: "b",
  },
  {
    question: "Which HTML element is used for the largest heading?",
    a: "<h6>",
    b: "<heading>",
    c: "<head>",
    d: "<h1>",
    correct: "d",
  },
  {
    question: "How can you make a numbered list in HTML?",
    a: "<ul>",
    b: "<dl>",
    c: "<ol>",
    d: "<list>",
    correct: "c",
  },
  {
    question: "Which CSS property is used to change the font size?",
    a: "text-size",
    b: "font-size",
    c: "font-weight",
    d: "font-style",
    correct: "b",
  },
  {
    question: "What does JSON stand for?",
    a: "JavaScript Object Notation",
    b: "JavaScript Online Notation",
    c: "Java Style Object Notation",
    d: "Java Syntax Object Network",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to display a picture?",
    a: "<picture>",
    b: "<image>",
    c: "<img>",
    d: "<graphic>",
    correct: "c",
  },
  {
    question: "How do you create a function in JavaScript?",
    a: "function:myFunction()",
    b: "function = myFunction()",
    c: "function myFunction()",
    d: "func myFunction()",
    correct: "c",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    a: "<link>",
    b: "<hyperlink>",
    c: "<a>",
    d: "<href>",
    correct: "c",
  },
  {
    question: "How do you make text bold in CSS?",
    a: "text-weight: bold;",
    b: "font-weight: bold;",
    c: "font-style: bold;",
    d: "text-style: bold;",
    correct: "b",
  },
  {
    question: "What is the default display value for the <div> element?",
    a: "inline",
    b: "block",
    c: "inline-block",
    d: "flex",
    correct: "b",
  },
  {
    question: "Which method is used to find an element by its ID in JavaScript?",
    a: "getElementById()",
    b: "getElementsByClass()",
    c: "findElement()",
    d: "getElement()",
    correct: "a",
  },
  {
    question: "Which CSS property is used to change the text alignment?",
    a: "align-text",
    b: "text-align",
    c: "text-alignments",
    d: "font-align",
    correct: "b",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    a: "To create a menu",
    b: "To add metadata",
    c: "To create a table",
    d: "To format text",
    correct: "b",
  },
  {
    question: "Which symbol is used for comments in HTML?",
    a: "// comment",
    b: "# comment",
    c: "<!-- comment -->",
    d: "/* comment */",
    correct: "c",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "The global object",
    b: "The current object",
    c: "The previous function",
    d: "A new object",
    correct: "b",
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Model",
    c: "Document Operation Mode",
    d: "Data Operation Module",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<list>",
    correct: "a",
  }
  ];
  
  const englishQuestions = [
    {
      question: "What is the antonym of 'brave'?",
      a: "Courageous",
      b: "Cowardly",
      c: "Bold",
      d: "Fearless",
      correct: "b",
    },
    {
      question: "Choose the correctly spelled word:",
      a: "Recieve",
      b: "Recieve",
      c: "Receive",
      d: "Recive",
      correct: "c",
    },
    {
      question: "Which of these sentences is correct?",
      a: "She have gone to school.",
      b: "She has go to school.",
      c: "She is gone to school.",
      d: "She has gone to school.",
      correct: "d",
    },
    {
      question: "Which is a synonym of 'beautiful'?",
      a: "Ugly",
      b: "Attractive",
      c: "Dull",
      d: "Unpleasant",
      correct: "b",
    },
    {
      question: "What is the plural of 'mouse'?",
      a: "Mouses",
      b: "Mouse",
      c: "Mice",
      d: "Mices",
      correct: "c",
    },
    {
      question: "Which word is a homonym for 'sea'?",
      a: "See",
      b: "Sew",
      c: "Say",
      d: "Seam",
      correct: "a",
    },
    {
      question: "Choose the correct form: 'She __ a book every day.'",
      a: "read",
      b: "reads",
      c: "reading",
      d: "readed",
      correct: "b",
    },
    {
      question: "What is the opposite of 'ancient'?",
      a: "Old",
      b: "Modern",
      c: "Historic",
      d: "Medieval",
      correct: "b",
    },
    {
      question: "What is the noun form of 'decide'?",
      a: "Deciding",
      b: "Decision",
      c: "Decider",
      d: "Decide",
      correct: "b",
    },
    {
      question: "Which is the correct passive voice: 'She writes a letter.'?",
      a: "A letter is written by her.",
      b: "She wrote a letter.",
      c: "A letter has been written by her.",
      d: "She is writing a letter.",
      correct: "a",
    },
    {
      question: "Which sentence uses a simile?",
      a: "The stars danced playfully in the sky.",
      b: "She was as brave as a lion.",
      c: "The wind whispered softly.",
      d: "He is a shining star.",
      correct: "b",
    },
    {
      question: "Identify the type of noun: 'happiness'.",
      a: "Concrete",
      b: "Abstract",
      c: "Proper",
      d: "Collective",
      correct: "b",
    },
    {
      question: "What is the synonym of 'quick'?",
      a: "Slow",
      b: "Swift",
      c: "Lazy",
      d: "Careful",
      correct: "b",
    },
    {
      question: "What part of speech is the word 'quickly'?",
      a: "Noun",
      b: "Adjective",
      c: "Verb",
      d: "Adverb",
      correct: "d",
    },
    {
      question: "What is the past tense of 'run'?",
      a: "Ran",
      b: "Run",
      c: "Running",
      d: "Runned",
      correct: "a",
    },
    {
      question: "Which word is an antonym of 'calm'?",
      a: "Peaceful",
      b: "Restless",
      c: "Quiet",
      d: "Tranquil",
      correct: "b",
    },
    {
      question: "Which is the correct plural form of 'child'?",
      a: "Childs",
      b: "Children",
      c: "Childes",
      d: "Childrens",
      correct: "b",
    },
    {
      question: "Choose the word that best completes the sentence: 'He is very __ in his work.'",
      a: "Care",
      b: "Careful",
      c: "Caring",
      d: "Carefully",
      correct: "b",
    },
    {
      question: "What is the correct comparative form of 'happy'?",
      a: "More happy",
      b: "Happier",
      c: "Happiest",
      d: "Most happy",
      correct: "b",
    },
    {
      question: "Which sentence is an example of alliteration?",
      a: "The cat chased the mouse.",
      b: "She sells seashells by the seashore.",
      c: "The sun is bright.",
      d: "He is taller than her.",
      correct: "b",
    },
    {
      question: "What is a synonym for 'lazy'?",
      a: "Industrious",
      b: "Energetic",
      c: "Idle",
      d: "Active",
      correct: "c",
    },
    {
      question: "Which is the correct indirect speech: 'He said, \"I am coming.\"'?",
      a: "He said that he was coming.",
      b: "He said he is coming.",
      c: "He said that I am coming.",
      d: "He said to be coming.",
      correct: "a",
    },  {
      question: "What is the opposite of 'increase'?",
      a: "Rise",
      b: "Grow",
      c: "Reduce",
      d: "Multiply",
      correct: "c",
    },
    {
      question: "Which word is spelled correctly?",
      a: "Definate",
      b: "Definite",
      c: "Defenate",
      d: "Defanite",
      correct: "b",
    },
    {
      question: "Choose the correct article: '_ apple a day keeps the doctor away.'",
      a: "A",
      b: "An",
      c: "The",
      d: "No article needed",
      correct: "b",
    },
    {
      question: "What is a collective noun for 'a group of lions'?",
      a: "Flock",
      b: "Pack",
      c: "Herd",
      d: "Pride",
      correct: "d",
    },
    {
      question: "Which is the correct form of the verb: 'I __ the car yesterday.'?",
      a: "Wash",
      b: "Washed",
      c: "Washing",
      d: "Washes",
      correct: "b",
    },
    {
      question: "What is the opposite of 'accept'?",
      a: "Agree",
      b: "Take",
      c: "Refuse",
      d: "Receive",
      correct: "c",
    },
    {
      question: "Which sentence uses correct grammar?",
      a: "I enjoys to play football.",
      b: "She like to dance.",
      c: "We are going to the market.",
      d: "He do his homework every day.",
      correct: "c",
    },
    {
      question: "Which of these is an adjective?",
      a: "Running",
      b: "Quick",
      c: "Carefully",
      d: "Swim",
      correct: "b",
    }
  ];
  
  const mathsQuestions = [
    {
      question: "What is the value of π (pi) to two decimal places?",
      a: "3.12",
      b: "3.14",
      c: "3.16",
      d: "3.18",
      correct: "b",
    },
    {
      question: "What is 25% of 200?",
      a: "25",
      b: "50",
      c: "75",
      d: "100",
      correct: "b",
    },
    {
      question: "What is the square root of 144?",
      a: "10",
      b: "11",
      c: "12",
      d: "13",
      correct: "c",
    },
    {
      question: "What is the next prime number after 7?",
      a: "9",
      b: "11",
      c: "13",
      d: "17",
      correct: "b",
    },
    {
      question: "Solve for x: 5x = 20.",
      a: "2",
      b: "3",
      c: "4",
      d: "5",
      correct: "c",
    },
    {
      question: "What is 9 cubed (9³)?",
      a: "729",
      b: "81",
      c: "243",
      d: "512",
      correct: "a",
    },
    {
      question: "What is 15 × 15?",
      a: "200",
      b: "210",
      c: "220",
      d: "225",
      correct: "d",
    },
    {
      question: "How many degrees are in a right angle?",
      a: "45",
      b: "60",
      c: "90",
      d: "180",
      correct: "c",
    },
    {
      question: "If a triangle has sides 3, 4, and 5, what type of triangle is it?",
      a: "Equilateral",
      b: "Isosceles",
      c: "Scalene",
      d: "Right-angled",
      correct: "d",
    },
    {
      question: "What is the median of the numbers: 5, 8, 12, 14, 16?",
      a: "8",
      b: "12",
      c: "10",
      d: "14",
      correct: "b",
    },
    {
      question: "What is 7 × 6?",
      a: "36",
      b: "42",
      c: "45",
      d: "49",
      correct: "b",
    },
    {
      question: "How many sides does a pentagon have?",
      a: "3",
      b: "4",
      c: "5",
      d: "6",
      correct: "c",
    },
    {
      question: "Solve: 3 + 6 × (5 + 4) ÷ 3 - 7",
      a: "10",
      b: "11",
      c: "12",
      d: "13",
      correct: "a",
    },
    {
      question: "What is the sum of the interior angles of a triangle?",
      a: "90°",
      b: "180°",
      c: "270°",
      d: "360°",
      correct: "b",
    },
    {
      question: "What is 10% of 500?",
      a: "5",
      b: "10",
      c: "50",
      d: "100",
      correct: "c",
    },
    {
      question: "What is the hypotenuse of a right triangle with legs of length 6 and 8?",
      a: "8",
      b: "9",
      c: "10",
      d: "12",
      correct: "c",
    },
    {
      question: "Solve for x: 2x + 5 = 13.",
      a: "2",
      b: "3",
      c: "4",
      d: "5",
      correct: "c",
    },
    {
      question: "What is the greatest common divisor (GCD) of 18 and 24?",
      a: "3",
      b: "6",
      c: "9",
      d: "12",
      correct: "b",
    },
    {
      question: "What is 1000 divided by 25?",
      a: "20",
      b: "30",
      c: "40",
      d: "50",
      correct: "c",
    },
    {
      question: "What is the area of a circle with radius 7?",
      a: "154",
      b: "44",
      c: "66",
      d: "77",
      correct: "a",
    },
    {
      question: "Convert 0.75 to a fraction.",
      a: "1/4",
      b: "1/3",
      c: "3/4",
      d: "5/6",
      correct: "c",
    },
    {
      question: "What is the smallest two-digit prime number?",
      a: "10",
      b: "11",
      c: "13",
      d: "15",
      correct: "b",
    },
    {
      question: "What is the slope of a line parallel to the line y = 3x + 2?",
      a: "0",
      b: "1",
      c: "3",
      d: "2",
      correct: "c",
    },
    {
      question: "What is the perimeter of a rectangle with length 8 and width 3?",
      a: "16",
      b: "18",
      c: "22",
      d: "24",
      correct: "c",
    },
    {
      question: "If 5x = 25, what is x?",
      a: "2",
      b: "3",
      c: "4",
      d: "5",
      correct: "d",
    },
    {
      question: "What is 2⁴?",
      a: "8",
      b: "12",
      c: "16",
      d: "20",
      correct: "c",
    },
    {
      question: "What is the value of 7 × 8?",
      a: "48",
      b: "54",
      c: "56",
      d: "64",
      correct: "c",
    },
    {
      question: "What is 1/2 + 1/3?",
      a: "2/3",
      b: "1/5",
      c: "5/6",
      d: "1/6",
      correct: "c",
    },
    {
      question: "What is the value of 81 divided by 9?",
      a: "7",
      b: "8",
      c: "9",
      d: "10",
      correct: "c",
    },
    {
      question: "What is 15 minus 7?",
      a: "6",
      b: "7",
      c: "8",
      d: "9",
      correct: "c",
    }
  ];
  
  const generalAptitudeQuestions = [
    {
      question: "If 5 workers can build 5 tables in 5 days, how many days would it take 1 worker to build 1 table?",
      a: "1",
      b: "5",
      c: "10",
      d: "25",
      correct: "b",
    },
    {
      question: "What comes next in the series: 2, 6, 12, 20, 30, _?",
      a: "40",
      b: "42",
      c: "48",
      d: "50",
      correct: "b",
    },
    {
      question: "A train travels 60 km in 1.5 hours. What is its speed in km/h?",
      a: "30",
      b: "40",
      c: "45",
      d: "60",
      correct: "c",
    },
    {
      question: "If 3 pens cost $18, how much do 5 pens cost?",
      a: "$25",
      b: "$28",
      c: "$30",
      d: "$35",
      correct: "c",
    },
    {
      question: "What is the next number in the pattern: 1, 4, 9, 16, 25, _?",
      a: "30",
      b: "32",
      c: "36",
      d: "40",
      correct: "c",
    },
    {
      question: "If a car travels 300 km in 5 hours, what is the average speed in km/h?",
      a: "50",
      b: "55",
      c: "60",
      d: "65",
      correct: "c",
    },
    {
      question: "If you save $10 every week, how much will you have saved in 6 months?",
      a: "$120",
      b: "$240",
      c: "$260",
      d: "$300",
      correct: "b",
    },
    {
      question: "Which of the following fractions is the largest?",
      a: "1/2",
      b: "3/4",
      c: "5/8",
      d: "2/3",
      correct: "b",
    },
    {
      question: "How many minutes are there in 3 hours?",
      a: "120",
      b: "150",
      c: "160",
      d: "180",
      correct: "d",
    },
    {
      question: "If the price of an item is increased by 20% and then decreased by 20%, the final price is:",
      a: "The same as the original",
      b: "Higher than the original",
      c: "Lower than the original",
      d: "Cannot be determined",
      correct: "c",
    },
    {
      question: "If 8x = 64, what is x?",
      a: "6",
      b: "7",
      c: "8",
      d: "9",
      correct: "c",
    },
    {
      question: "If two dice are rolled, what is the probability of getting a sum of 7?",
      a: "1/12",
      b: "1/9",
      c: "1/8",
      d: "1/6",
      correct: "d",
    },
    {
      question: "Find the odd one out: 4, 9, 16, 21, 25.",
      a: "9",
      b: "16",
      c: "21",
      d: "25",
      correct: "c",
    },
    {
      question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      a: "0°",
      b: "7.5°",
      c: "30°",
      d: "37.5°",
      correct: "d",
    },
    {
      question: "If a person walks 5 km north, then 3 km east, what is the shortest distance back to the start?",
      a: "5 km",
      b: "6 km",
      c: "7 km",
      d: "8 km",
      correct: "c",
    },
    {
      question: "How many months have 28 days?",
      a: "1",
      b: "2",
      c: "12",
      d: "6",
      correct: "c",
    },
    {
      question: "What comes next in the sequence: 2, 3, 5, 7, 11, _?",
      a: "13",
      b: "14",
      c: "15",
      d: "16",
      correct: "a",
    },
    {
      question: "If a box contains 12 red balls and 8 blue balls, what is the probability of picking a blue ball?",
      a: "1/2",
      b: "2/5",
      c: "1/3",
      d: "4/5",
      correct: "b",
    },
    {
      question: "What is the average of the numbers 6, 8, 12, 14, and 20?",
      a: "10",
      b: "12",
      c: "14",
      d: "16",
      correct: "b",
    },
    {
      question: "If 7x + 5 = 26, what is x?",
      a: "2",
      b: "3",
      c: "4",
      d: "5",
      correct: "c",
    },
    {
      question: "In a family of 6 members, each shakes hands with every other member. How many handshakes are there in total?",
      a: "12",
      b: "15",
      c: "18",
      d: "21",
      correct: "b",
    },
    {
      question: "If 3 people can complete a task in 4 hours, how long will it take 6 people to complete the same task?",
      a: "1 hour",
      b: "2 hours",
      c: "3 hours",
      d: "4 hours",
      correct: "b",
    },
    {
      question: "Which number is a perfect square?",
      a: "50",
      b: "60",
      c: "64",
      d: "70",
      correct: "c",
    },
    { question: "If the perimeter of a square is 20 cm, what is the length of one side?",
      a: "4 cm",
      b: "5 cm",
      c: "6 cm",
      d: "7 cm",
      correct: "b",
    },
    {
      question: "How many degrees are there in the sum of angles in a pentagon?",
      a: "360°",
      b: "540°",
      c: "720°",
      d: "900°",
      correct: "b",
    },
    {
      question: "If a car moves at a constant speed of 60 km/h for 3 hours, how far does it travel?",
      a: "120 km",
      b: "150 km",
      c: "180 km",
      d: "200 km",
      correct: "c",
    },
    {
      question: "If a basket contains 20 apples and you take away 5, how many do you have?",
      a: "5",
      b: "15",
      c: "20",
      d: "25",
      correct: "a",
    },
    {
      question: "What is the next term in the series: 1, 4, 9, 16, 25, _?",
      a: "30",
      b: "32",
      c: "35",
      d: "36",
      correct: "d",
    },
    {
      question: "Which of these is not a prime number?",
      a: "7",
      b: "9",
      c: "11",
      d: "13",
      correct: "b",
    },
    {
      question: "In a group of 10 people, each person shakes hands with every other person. How many handshakes are there?",
      a: "40",
      b: "45",
      c: "50",
      d: "55",
      correct: "b",
    }
  ];
  
 
let currentSection = [];
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quizContainer = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

document.getElementById('technicalBtn').addEventListener('click', () => {
    startQuiz(technicalQuestions);
});

document.getElementById('englishBtn').addEventListener('click', () => {
    startQuiz(englishQuestions);
});

document.getElementById('mathsBtn').addEventListener('click', () => {
    startQuiz(mathsQuestions);
});

document.getElementById('generalAptitudeBtn').addEventListener('click', () => {
    startQuiz(generalAptitudeQuestions);
});

// Start Quiz Function
function startQuiz(questions) {
    currentSection = questions;
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    deselectAnswers();
    const currentQuestion = currentSection[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
}


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}


function getSelected() {
    let selectedAnswer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id.charAt(0); // Get the first character of the ID ('a', 'b', 'c', 'd')
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === currentSection[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < currentSection.length) {
            loadQuestion();
        } else {
            
            quizContainer.innerHTML = `
                <h2>You scored ${score} out of ${currentSection.length}.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert("Please select an answer before proceeding!");
    }
});