/**
 * The Global Event Bus
 * ===================== */

function checkFilter(category, genre, checked) {
  // filter movies based on payload received from filter buttons
  if (checked) {
    // if checked, the movie genre is added to the genre data array
    this[category].push(genre);
  } else {
    let index = this[category].indexOf(genre);
    if (index > -1) {
      this[category].splice(index, 1);
    }
  }
}

function setDay (day) {
   this.day = day
};

export { checkFilter, setDay };
