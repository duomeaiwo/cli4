export function debounce(fn, delay) {
    let timer = null
    return function() {
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
export const Throttle = (fn, t) => {
    let last
    let timer
    let interval = t || 500
    return function() {
        let args = arguments
        let now = +new Date()
        if (last && now - last < interval) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = now
                fn.apply(this, args)
            }, interval)
        } else {
            last = now
            fn.apply(this, args)
        }
    }
}
