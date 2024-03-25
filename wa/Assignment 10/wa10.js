const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const names = ['Alice', 'John', 'Emma'];
const locations = ['the airport', 'the train station', 'a bus stop'];
const emotions = ['felt excited', 'was nervous', 'couldn\'t wait to take off'];

randomize.addEventListener('click', result);

function result() {
  let newStory = "It was a sunny day, and :insertName: was going to board a plane for the first time. When they arrived at :insertLocation:, they :insertEmotion:. They checked in their luggage and proceeded to the gate. Despite the nerves, they were eager to go on this new adventure.";

  const name = customName.value !== '' ? customName.value : randomValueFromArray(names);
  const location = randomValueFromArray(locations);
  const emotion = randomValueFromArray(emotions);

  newStory = newStory.replace(':insertName:', name);
  newStory = newStory.replace(':insertLocation:', location);
  newStory = newStory.replace(':insertEmotion:', emotion);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
