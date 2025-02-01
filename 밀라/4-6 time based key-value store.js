class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store.has(key)) return "";

        const values = this.store.get(key);
        let left = 0, right = values.length - 1;
        let res = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (values[mid][0] <= timestamp) {
                res = values[mid][1]; // 저장된 값 갱신
                left = mid + 1; // 더 큰 timestamp를 찾기 위해 이동
            } else {
                right = mid - 1;
            }
        }

        return res;
    }
}
