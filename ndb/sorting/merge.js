//병합정렬 - 분할 정복 알고리즘 기반
function mergeSort(arr) {
  //길이가 1 이하인 경우 그대로 리턴
  if (arr.length <= 1) {
    return arr;
  }

  //중간을 기준으로 분할
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (j < left.length && j < right.length) {
    //왼쪽 오른쪽 배열 비교해가며 작은걸 먼저 추가
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //left, right 비교 후 남은 요소가 있을 수 있어 결과배열에 합쳐준다
  return result.concat(left.slice(i)).concat(right.slice(j));
}
