class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let start = 0,
      end = matrix.length - 1;

    while (start <= end) {
      const mid = parseInt((start + end) / 2);
      const firstI = matrix[mid][0];
      const lastI = matrix[mid][matrix[mid].length - 1];

      if (target >= firstI && target <= lastI) {
        const currentRow = matrix[mid];
        let left = 0,
          right = currentRow.length - 1;

        while (left <= right) {
          const mid2 = parseInt((left + right) / 2);

          if (target > currentRow[mid2]) {
            left = mid2 + 1;
          } else if (target < currentRow[mid2]) {
            right = mid2 - 1;
          } else {
            return true;
          }
        }

        return false;
      } else if (target < firstI) {
        end = mid - 1;
      } else if (target > lastI) {
        start = mid + 1;
      }
    }

    return false;
  }
}
