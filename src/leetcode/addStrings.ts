function addStrings (num11: string, num22: string) {
  const result: number[] = []
  let num1 = num11.split('').reverse().map(v => parseInt(v))
  const num2 = num22.split('').reverse().map(v => parseInt(v))
  let isTen = false
  let i = 0
  for (; i < Math.min(num1.length, num2.length); i++) {
    let tem = num1[i] + num2[i] + (isTen ? 1 : 0)
    if (tem >= 10) {
      isTen = true
      tem = tem - 10
    } else {
      isTen = false
    }
    result.push(tem)
  }
  num1 = num1.length > i ? num1 : num2
  if (i < num1.length) {
    for(;i < num1.length; i++) {
      let tem = num1[i] + (isTen ? 1: 0)
      if (tem >= 10) {
        isTen = true
        tem = tem - 10
      } else {
        isTen = false
      }
      result.push(tem)
    }
  }
  if (isTen) {
    result.push(1)
  }
  return result.reverse().join('')
}

console.log(addStrings('99', '1'))
console.log(addStrings('99', '11'))
