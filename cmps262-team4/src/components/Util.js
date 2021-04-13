const FAKE_FIRST_NAMES = ["John", "Joe", "Mary", "Sally", "Tom"];

const FAKE_LAST_NAMES = ["Smith", "Doe", "Joseph", "Brown", "Thompson"];

class Util {
  constructor() {
    this.username = null;
  }

  generateFakeName() {
    let firstName =
      FAKE_FIRST_NAMES[Math.floor(Math.random() * FAKE_FIRST_NAMES.length)];
    let lastName =
      FAKE_LAST_NAMES[Math.floor(Math.random() * FAKE_LAST_NAMES.length)];
    return `${firstName} ${lastName}`;
  }

  isLoggedIn() {
    return this.username !== null;
  }
}

export const util = new Util();
export const MOCK_POST_COUNT = 17;
