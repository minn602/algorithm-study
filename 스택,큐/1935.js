/**
 * 알고리즘 분류: 큐
 * 문제번호 : 1935
 * 
 * 후위 표기식2
후위 표기식과 각 피연산자에 대응하는 값들이 주어져 있을 때, 그 식을 계산하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, exp, ...numbers] = input
const nums = numbers.map(Number)

function solution(n, exp, nums) {
  let ASCII = 65
  const stack = []
  const operators = ["+", "-", "*", "/"]
  const transformer = {}
  
  const calc = {
    "+": (a, b) => a+b,
    "-": (a, b) => a-b,
    "*": (a, b) => a*b,
    "/": (a, b) => a/b
  }
  
  for(let i = 0; i < n; i++) {
    const alphabet = String.fromCharCode(ASCII++)
    transformer[alphabet] = nums[i]
  }
  
  const transformExp = exp.split('').map(v => !operators.includes(v) ? transformer[v] : v)
  
  for(let i = 0; i < transformExp.length; i++) {
    let pushV = transformExp[i]
    if(operators.includes(pushV)) {
      const second = stack.pop()
      const first = stack.pop()
      pushV = calc[pushV](first, second)
    }
    stack.push(pushV)
  }
  
  return (Math.floor(stack[0] * 100) / 100).toFixed(2)
}

console.log(solution(n, exp, nums))