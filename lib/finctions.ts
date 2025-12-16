export const createList = (imageNumber: number) => {
  let idList = []
  for (let i = 1; i <= imageNumber / 2; i++) {
    let number = Math.floor(Math.random()*8 + 1)
    idList.push(number);
    idList.push(number);
  }
  idList.sort((a, b) => (Math.random() < 0.5 ? -1 : 1));
  return idList
};