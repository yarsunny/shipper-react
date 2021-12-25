export function debounce(fn, time){
  let timeout;
  return (...args) => {
    let context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.call(context, args);
    }, time);
  }
}