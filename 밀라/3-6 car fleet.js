class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0])
        const stack = []

        for(let car of cars) {
            const t = (target - car[0]) / car[1]

            if(stack.length == 0) {
                stack.push(t)
            } else {
                const top = stack[stack.length-1]

                if(t > top) {
                    stack.push(t)
                }
            }
        }

        return stack.length
    }
}
