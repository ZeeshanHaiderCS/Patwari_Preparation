const questions = [
  { q: "Identify the noun: 'Ali is a good boy'", options: ["Ali", "good", "is", "boy"], answer: 0 },
  { q: "Choose the correct verb: She ___ playing.", options: ["is", "are", "am", "be"], answer: 0 },
  { q: "Fill in the blank: He ___ to school daily.", options: ["go", "goes", "gone", "going"], answer: 1 },
  { q: "Synonym of 'Happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1 },
  { q: "Antonym of 'Big'?", options: ["Large", "Huge", "Small", "Wide"], answer: 2 },

  { q: "Idiom: 'Break the ice' means?", options: ["Start conversation", "Break glass", "Get angry", "Run away"], answer: 0 },
  { q: "Idiom: 'Piece of cake' means?", options: ["Very easy", "Very hard", "Delicious", "Expensive"], answer: 0 },
  { q: "Choose adjective: She is a ___ girl.", options: ["beauty", "beautiful", "beautify", "beautyful"], answer: 1 },
  { q: "Plural of 'Child'?", options: ["Childs", "Children", "Childes", "Childrens"], answer: 1 },
  { q: "Past tense of 'Go'?", options: ["Goed", "Gone", "Went", "Going"], answer: 2 },

  { q: "Active voice: Ali wrote a letter → Passive?", options: ["A letter was written by Ali", "Ali was written", "Letter writes Ali", "Ali writes letter"], answer: 0 },
  { q: "Direct: He said, 'I am happy' → Indirect?", options: ["He said he was happy", "He said I am happy", "He said happy", "He says he was happy"], answer: 0 },
  { q: "Fill: She ___ not come yesterday.", options: ["did", "do", "does", "done"], answer: 0 },
  { q: "Verb in 'They play cricket'", options: ["They", "play", "cricket", "none"], answer: 1 },
  { q: "Preposition: Book is ___ the table.", options: ["on", "in", "at", "by"], answer: 0 },

  { q: "Translate: 'Kitab'?", options: ["Pen", "Book", "Chair", "Table"], answer: 1 },
  { q: "Translate: 'Pani'?", options: ["Milk", "Water", "Juice", "Tea"], answer: 1 },
  { q: "Fill: I ___ a student.", options: ["is", "am", "are", "be"], answer: 1 },
  { q: "Choose correct: He ___ eating.", options: ["is", "are", "am", "be"], answer: 0 },
  { q: "Opposite of 'Hot'?", options: ["Warm", "Cold", "Cool", "Heat"], answer: 1 },

  { q: "Idiom: 'Hit the nail on the head'?", options: ["Exactly right", "Miss target", "Hit hard", "Break nail"], answer: 0 },
  { q: "Plural of 'Mouse'?", options: ["Mouses", "Mice", "Mousees", "Mices"], answer: 1 },
  { q: "Past of 'Eat'?", options: ["Ate", "Eated", "Eat", "Eating"], answer: 0 },
  { q: "Fill: They ___ playing.", options: ["is", "are", "am", "be"], answer: 1 },
  { q: "Pronoun: ___ is my book.", options: ["This", "These", "Those", "Them"], answer: 0 },

  { q: "Choose adverb: He runs ___.", options: ["quick", "quickly", "quicker", "quickest"], answer: 1 },
  { q: "Future: I ___ go tomorrow.", options: ["will", "shall", "am", "is"], answer: 0 },
  { q: "Fill: She ___ cooking now.", options: ["is", "are", "am", "be"], answer: 0 },
  { q: "Opposite of 'Early'?", options: ["Late", "Soon", "Quick", "Fast"], answer: 0 },
  { q: "Synonym of 'Fast'?", options: ["Quick", "Slow", "Lazy", "Weak"], answer: 0 },

  { q: "Direct: He said, 'I will come' → Indirect?", options: ["He said he would come", "He says I will come", "He said come", "He will come"], answer: 0 },
  { q: "Active: She sings a song → Passive?", options: ["A song is sung by her", "Song sings", "She sung song", "Song is singing"], answer: 0 },
  { q: "Fill: We ___ friends.", options: ["is", "are", "am", "be"], answer: 1 },
  { q: "Translate: 'Dost'?", options: ["Enemy", "Friend", "Neighbor", "Brother"], answer: 1 },
  { q: "Translate: 'Ghar'?", options: ["House", "Car", "Shop", "Road"], answer: 0 },

  { q: "Idiom: 'Once in a blue moon'?", options: ["Rarely", "Daily", "Weekly", "Always"], answer: 0 },
  { q: "Plural of 'Foot'?", options: ["Foots", "Feet", "Feets", "Footes"], answer: 1 },
  { q: "Past of 'Run'?", options: ["Runned", "Ran", "Run", "Running"], answer: 1 },
  { q: "Fill: He ___ a car.", options: ["have", "has", "had", "having"], answer: 1 },
  { q: "Opposite of 'Good'?", options: ["Bad", "Nice", "Great", "Fine"], answer: 0 },

  { q: "Adjective: This is a ___ place.", options: ["beauty", "beautiful", "beautify", "beaut"], answer: 1 },
  { q: "Fill: I ___ finished my work.", options: ["have", "has", "had", "having"], answer: 0 },
  { q: "Future: She ___ travel next week.", options: ["will", "shall", "is", "are"], answer: 0 },
  { q: "Synonym of 'Smart'?", options: ["Clever", "Dull", "Weak", "Slow"], answer: 0 },
  { q: "Opposite of 'Strong'?", options: ["Weak", "Powerful", "Heavy", "Tough"], answer: 0 },

  { q: "Fill: They ___ gone home.", options: ["has", "have", "had", "having"], answer: 1 },
  { q: "Translate: 'Kitna'?", options: ["How much", "Why", "Where", "When"], answer: 0 },
  { q: "Idiom: 'Spill the beans'?", options: ["Reveal secret", "Cook food", "Make mess", "Throw beans"], answer: 0 },
  { q: "Direct: She said, 'I am tired' → Indirect?", options: ["She said she was tired", "She says tired", "She tired", "She said I tired"], answer: 0 },
  { q: "Active: He kicked the ball → Passive?", options: ["The ball was kicked by him", "Ball kicked him", "He was kicked", "Ball is kicking"], answer: 0 }
];

const quizDiv = document.getElementById("quiz");

questions.forEach((item, index) => {
  let div = document.createElement("div");
  div.classList.add("question");

  let question = document.createElement("p");
  question.innerText = (index + 1) + ". " + item.q;
  div.appendChild(question);

  let answered = false; // 👈 ek baar select hone ke baad lock

  item.options.forEach((opt, i) => {
    let btn = document.createElement("div");
    btn.classList.add("option");
    btn.innerText = opt;

    btn.onclick = () => {
      if (answered) return; // 👈 dobara click disable

      answered = true;

      if (i === item.answer) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");

        // 👇 correct answer ko green karo
        div.querySelectorAll(".option")[item.answer].classList.add("correct");
      }
    };

    div.appendChild(btn);
  });

  quizDiv.appendChild(div);
});