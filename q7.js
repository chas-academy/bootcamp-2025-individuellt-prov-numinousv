// tar två nummer och returnerar det mindre numret

  export const findSmallerNumber = (a, b) => {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    return Math.min(a, b);
  }
  console.log(findSmallerNumber());
