/**
 * 获取屏幕高度
 */
export const getClientHeight = () => {
  let winHeight
  if (window.innerHeight) {
    winHeight = window.innerHeight
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight
  } else if (
    document.documentElement &&
    document.documentElement.clientHeight &&
    document.documentElement.clientWidth
  ) {
    winHeight = document.documentElement.clientHeight
  }
  return winHeight
}
/**
 * 获取屏幕宽度
 */
export const getClientWidth = () => {
  let winWidth
  if (window.innerWidth) {
    winWidth = window.innerWidth
  } else if (document.body && document.body.clientWidth) {
    winWidth = document.body.clientWidth
  } else if (
    document.documentElement &&
    document.documentElement.clientWidth &&
    document.documentElement.clientHeight
  ) {
    winWidth = document.documentElement.clientWidth
  }
  return winWidth
}
