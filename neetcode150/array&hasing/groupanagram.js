//해쉬맵
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    //해쉬맵에 key: 각 문자별 갯수를 합한 문자열, value: 원래 단어 원본
    const res = {};

    for (let s of strs) {
      //단어가 영어소문자로만 이루어져 있기때문에 a-z 26개의 빈배열생성
      //이렇게 되면 아나그램 문자여도 한 문자 순서대로 키가 만들어짐
      const count = new Array(26).fill(0);

      //단어의 한 문자마다 순환하면서 알파벳의 카운트 세기
      for (let c of s) {
        count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }
      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }
    return Object.values(res);
  }
}
