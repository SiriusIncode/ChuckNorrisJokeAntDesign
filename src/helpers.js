const generateRandomColor = () => {
  return `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(
    Math.random() * 255
  )}, ${Math.trunc(Math.random() * 255)})`;
};

export const dateToString = (date) => {
  return `${date
    .getDate()
    .toString()
    .padStart(2, "0")} ${date
    .getMonth()
    .toString()
    .padStart(2, "0")} ${date.getFullYear()}
    `;
};

export default generateRandomColor;
