const sleep = (ms) => {
    const date = Date.now()
    while (true) {
      if (Date.now() >= date + ms) {
        break;
      }
    }
  }

module.exports = sleep