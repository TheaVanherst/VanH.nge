
const altTextRequest = (obj) => {
  let arr = [];
  for (let i = 0; i < obj.length; i++){
    if (obj[i]?.alt){
      arr[i] = ` ${i}: ${obj[i].alt}`;}}

  if(arr.length > 1) {
    return "Alt texts: [" + arr + "]"
  } else if (arr.length === 1) {
    return "Alt text: [" + arr + "]"
  } if (arr.length === 0) {
    return "No alternative text provided."
  }
}

export { altTextRequest }