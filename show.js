const sleep = require("./sleep");
const {
  DEC_LEFT,
  DEC_RIGHT,
  L,
  MESSAGE_ITERATIONS,
  SEPARATOR,
} = require("./config.js");

const spaceString = (l) => {
  let s = "";
  for (let i = 0; i < l; i++) {
    s += " ";
  }
  return s;
};

var state = spaceString(L);

const showMessage = (msg) => {
  let itrs = 0;
  let pointer = 0;
  state = spaceString(L);
  const fm = msg + SEPARATOR;
  while (itrs < MESSAGE_ITERATIONS) {
    console.clear();
    console.log(DEC_LEFT + state + DEC_RIGHT);
    if (pointer >= fm.length) {
      pointer = 0;
      itrs++;
    }
    state = state.slice(1) + fm[pointer];
    pointer++;
    sleep(200);
  }
};

const updateAnimation = () => {
  let phase = true;
  let speed = 30;
  let pointer = 0;
  state = state.slice(0, state.length - 1) + " ";

  ended = false;
  while (!ended) {
    console.clear();
    if (pointer >= L && phase) {
      pointer = 0;
      phase = false;
    } else if (pointer >= L && !phase) {
      ended = true;
    } else if (phase) {
      state = state.slice(1) + (pointer % 2 == 0 ? "/" : "\\");
    } else {
      state = state.slice(1) + " ";
    }
    pointer++;

    console.log(DEC_LEFT + state + DEC_RIGHT);
    sleep(speed);
  }
};

const shower = (messages) => {
  while (true) {
    for (let msg of messages) {
      showMessage(msg);
      updateAnimation();
    }
  }
};

module.exports = shower;
