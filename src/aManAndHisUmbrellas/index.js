'use strict';

const minUmbrellas = weather => {
  let personHasUmbrella = false;
  let journeyAHasUmbrella = 0;
  let journeyBHasUmbrella = 0;
  let counterUmbrellas = 0;

  for (const index in weather) {
    const halfDay = weather[index];
    const journey = index % 2 === 0 ? 'home-work' : 'work-home';
    if (_requiresUmbrella(halfDay)) {
      if (!personHasUmbrella) {
        switch (journey) {
          case "home-work":
            if (journeyAHasUmbrella === 0) {
              counterUmbrellas++;
            } else {
              journeyAHasUmbrella--;
            }
            break;
          case "work-home":
            if (journeyBHasUmbrella === 0) {
              counterUmbrellas++;
            } else {
              journeyBHasUmbrella--;
            }
            break;
        }
        personHasUmbrella = true;
      }
    } else {
      switch (journey) {
        case "home-work":
          if (personHasUmbrella) {
            journeyAHasUmbrella++;
          }
          break;
        case "work-home":
          if (personHasUmbrella) {
            journeyBHasUmbrella++;
          }
          break;
      }
      personHasUmbrella = false;
    }
  }
  return counterUmbrellas;
};

const _requiresUmbrella = halfDay => {
  return halfDay === 'rainy' || halfDay === 'thunderstorms';
};

module.exports = minUmbrellas;
