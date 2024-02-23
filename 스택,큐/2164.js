/**
 * 알고리즘 분류: 연결리스트
 * 문제번호 : 2164
 * 
 * 카드2
 * N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.

이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.
 */

//첫번째 풀이 -> 메모리 초과
// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

// let nums = Array.from({length: input}, (_, i) => i+1)

// while(nums.length > 1) {
//   const remains = nums.slice(2, nums.length)
//   remains.push(nums[1])
//   nums = remains
  
//   if(nums.length == 1) break;
// }

// console.log(nums[0])

// //두번째 풀이 -> 시간초과
// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

// let nums = Array.from({length: input}, (_, i) => i+1)

// while(nums.length > 1) {
//   nums.reverse()
//   nums.pop()
//   const second = nums.pop()
//   nums = nums.reverse()
//   nums.push(second)
//   if(nums.length == 1) break;
// }

// console.log(nums[0])

// 배열을 사용하는 과정에서 삽입, 삭제가 많아지면 시간복잡도가 커질 수 밖에 없다. 이를 해결하기 위해 Linked List 자료구조를 사용해야한다.
// Linked List는 배열의 요소들에 인덱스 번호를 따로 붙이지 않고, 각 노드들의 포인터로 연결하는 구조이다. 
// 처음 노드를 가르키는 HEAD, 마지막 노드를 가르키는 TAIL, 리스트의 총 길이를 나타내는 LENGTH, 각 노드들 사이를 연결하는 포인터를 안내하는 NEXT 요소를 가진다. 

const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// LinkedList 클래스 설정
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    getHead() { // 첫 노드(head) 가져오기
        return this.head.val;
    }

    removeHead() { // 첫 노드(head)를 연결리스트에서 지우기
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getLength() { // 연결리스트의 길이 알기
        return this.length;
    }
}

const cards = new LinkedList();

//주어진 숫자만큼 순회하여 연결리스트 생성
for (let i = 1; i <= input; i++) {
    cards.push(i);
}

while (cards.getLength() !== 1) { // 길이가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
    cards.removeHead(); // 다시 맨 앞 노드를 지우고
}
console.log(cards.getHead());