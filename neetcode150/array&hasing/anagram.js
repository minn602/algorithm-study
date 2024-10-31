class Solution {
  /**
   * Time Complexity O(S+T)
   * Memory Complexity O(S+T)
   *
   * anagram : string that contains the exact the same characters as another string, but the order of the characters can be different.
   *
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    //2개의 hashmap 생성
    const hashS = {};
    const hashT = {};
    let result = true;

    for (let i = 0; i < s.length; i++) {
      //한 문자열을 순환하면서 각 해쉬맵에 key : 각 문자, value : 해당 문자가 등장한 횟수 추가
      if (hashS.hasOwnProperty(s[i])) {
        hashS[s[i]] += 1;
      } else {
        hashS[s[i]] = 1;
      }

      if (hashT.hasOwnProperty(t[i])) {
        hashT[t[i]] += 1;
      } else {
        hashT[t[i]] = 1;
      }
    }

    //하나의 hashMap을 순환하면서 첫번째 해쉬맵의 값이 두번째 해쉬맵의 값과 일치하는지 확인
    for (let k in hashS) {
      if (hashS[k] !== hashT[k]) {
        result = false;
        break;
      }
    }

    return result;
  }
}
