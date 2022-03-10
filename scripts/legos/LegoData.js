

let apiLegos = [];

export const useLegos = () => {
  return [...apiLegos]
}

export const loadLegos = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos = removeData(legoArray.LegoColorss);
      return removeData(legoArray.LegoColorss);
    })
};

export const removeData = (arr) => {
  return arr.filter(item => item.LegoName !== "" && item.LegoId !== "301")
}