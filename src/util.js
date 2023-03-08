const filPrefix = ["a", "f", "p", "n", "μ", "m", ""]
const powerPrefix = ["", "K", "M", "G", "T", "P", "E"]

export function FilInShort(fil) {
    fil = BigInt(fil)
    const k = BigInt(1000)
    let i = 0
    while (fil >= k && i < filPrefix.length - 1) {
        fil /= k
        i++
    }
    return `${Number(fil).toFixed(2)} ${filPrefix[i]}FIL`
}

export function PowerInShort(power) {
    power = BigInt(power)
    const k = BigInt(1024)
    let i = 0
    while (power >= k && i < powerPrefix.length - 1) {
        power /= k
        i++
    }
    return `${Number(power).toFixed(2)} ${powerPrefix[i]}iB`
}
