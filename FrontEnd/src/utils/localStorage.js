export function setItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

export function getItem(key) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (e) {
    console.log(e);
  }
}

export function getAllItems() {
  try {
    return window.localStorage;
  } catch (e) {
    console.log(e);
  }
}

export function removeItem(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
}
