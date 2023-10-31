const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 88 fahrenheit outside, so :insertx: decided to enjoy a crisp pool day. They wanted the best pool possible so they took a private jet to :inserty:, they got their supplies and started to lounge when all of a sudden they were shocked to there very core at the sight of Ctuhulu. With a powerful screech and great power exerted they were :insertz:. Bob saw the whole thing and was shocked, so he went on his phone and went to safari and was not surprised — :insertw: weighs 700 pounds, and it was a great day to see that kind of thing biblical destruction.";

let insertW = ["Lebron James", "Micheal Jordan", "Kobe Bryant"];

let insertX = ["Micheal Jackson", "Elvis Presley", "Prince"];

let insertY = ["Africa", "Europe", "America"];

let insertZ = ["destroyed by the weight of a thousand suns", "sent to the shadow realm", "turned into a goldfish"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    let wItem = randomValueFromArray(insertW);

    let xItem = randomValueFromArray(insertX);

    let yItem = randomValueFromArray(insertY);

    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertw:", wItem);

    newStory = newStory.replace(":insertx:", xItem);

    newStory = newStory.replace(":inserty:", yItem);

    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(700) + " stone";
    const temperature =  Math.round((88-34) * (5 / 9)) + " centigrade";
    newStory = newStory.replace("700 pounds", weight);
    newStory = newStory.replace("88 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}