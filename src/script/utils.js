class Utils {
  static emptyElement(element){
    element.innerHTML = '';
  }
  static showElement(element) {
    element.style.display = 'block';
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = 'none';
    element.hidden = true;
  }

  static isValidInteger(value) {
    // Checks if the value is a finite number, correctly returning false for NaN, Infinity.
    return Number.isFinite(value);
  }
}

export default Utils;
