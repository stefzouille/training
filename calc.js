// add sub mul div

const add = (n1, n2) => {
  return n1 + n2
}

const sub = (n1, n2) => {
  return n1 - n2
}

const mul = (n1, n2) => {
  return n1 * n2
}

const div = (n1, n2) => {
  return n1 / n2
}

// const calc = (op, n1, n2) => {
//   switch (op) {
//     case '+': return add(n1, n2)
//     break
//     case '-': return sub(n1, n2)
//     break
//     case '*': return mul(n1, n2)
//     break
//     case '/': return div(n1, n2)
//     break
//     default :
//     return 'your operator not fine,change it and retry please'
//   }
// }

const calc = (op, n1, n2) => {
  switch(op) {
    case '+': return add(n1, n2)
    break
    case '-': return sub(n1, n2)
    break
    case '*': return mult(n1, n2)
    break
    case '/': return div(n1, n2)
    break
    default : 
    return 'not good operator,please retry or not.'
  }
}
console.log(calc('m', 10, 6))