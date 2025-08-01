function sum(arr, target) {
    let hash = new Map()
    for (let nums of arr) {
        const comple = target - nums
        if (hash.has(comple)) {
            return [hash.get(comple), nums];
        }
        hash.set(nums, nums)
    }
}

// console.log(sum([2,5,6,4,11,15],9)) 