import {EventEmitter} from "node:events";

const emitter = new EventEmitter;
console.info(emitter);

// add new listener
emitter.on("jalan", (getData) => {
    console.info("this your " + getData);
})

// add more listener
emitter.on("jalan", function coba(first, second, third) {
    const result = first + second + third;
    console.info(`${first} + ${second} + ${third} = ${result}`)
})

emitter.emit("jalan", 4, 9, 3);
