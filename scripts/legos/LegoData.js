let apiLegos = [];

export const useLegos = () => {
  return [...apiLegos]
}

export const loadLegos = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos = legoArray.LegoColorss;
      return legoArray.LegoColorss;
    })
};

export const removeData = (arr) => {
  return arr.filter(item => item.LegoName !== "" && item.LegoId !== "301")
}