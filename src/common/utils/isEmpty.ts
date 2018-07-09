// 判断对象是否为空，一般情况下可以替代lodash的isEmpty
export default function isEmpty(v) {
  if (v == null) {
    return true
  }
  if (Array.isArray(v)) {
    return !v.length
  }
  for (const i in v) {
    if (v.hasOwnProperty.call(v, i)) {
      return false
    }
  }
  return true
}
