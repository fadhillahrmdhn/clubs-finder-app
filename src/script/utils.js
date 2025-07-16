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

    //Todo: make this isValidInteger function work
  static isValidInteger(newValue){
    return Number.isNaN(newValue) || Number.isFinite(newValue);
  }
}

export default Utils;
