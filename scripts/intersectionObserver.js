export function intersectionObserver({
    element,
    func,
    options
}){
    if(typeof func !== "function"){
        throw new Error("func must be a type of function")
    }

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            if (entry.isIntersecting){
                func(entry.target)
            } else {
                // observer.unobserve()
                // entry.target.style.transform = `scale(1)`
            }
        });
    }, options)

    observer.observe(element)
}