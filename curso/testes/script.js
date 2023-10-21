function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY
    for (let num of nums) {
        if (num > max_num) {
            max_num += 1
        }
    }
    return max_num;
    console.log(find_max)
}

console.log(find_max)