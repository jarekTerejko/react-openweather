const apiKey = `d719249cdf9188c2b4935c8196104c58`;

const getCardinalDirection = angle => {
  const directions = [
    "↓ N",
    "↙ NE",
    "← E",
    "↖ SE",
    "↑ S",
    "↗ SW",
    "→ W",
    "↘ NW"
  ];
  return directions[Math.round(angle / 45) % 8];
};

const getSunriseOrSunset = (time, timezone) => {
    const a = new Date(time*1000+(timezone*1000))
    // console.log(a);
    return a.toUTCString().slice(17, 22)
}

const getSearchedPlaceTime = (time, timezone) => {
  const a = new Date(time*1000+(timezone*1000))
    // console.log(a);
    return a.toUTCString().slice(0, 22)
}

const displayCurrentDateTime = () => {
    const now = new Date()
    return now.toLocaleString().slice(0,17)
}

const roundTemp = temp => {
  return Math.round(temp);
};

export { apiKey, getCardinalDirection, getSunriseOrSunset, displayCurrentDateTime, getSearchedPlaceTime, roundTemp };
