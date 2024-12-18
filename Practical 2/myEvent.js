//Create an application to demonstrate various Node.js Events

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
function openDoor(person) {
  console.log(`${person} opened the door.`);
  eventEmitter.emit("enter", person);
}
eventEmitter.on("enter", (person) => {
  console.log(`${person} has entered the room.`);
});
eventEmitter.on("leave", (person) => {
  console.log(`${person} has left the room.`);
});
openDoor("Anish");
setTimeout(() => {
  eventEmitter.emit("leave", "Anish");
}, 2000);
