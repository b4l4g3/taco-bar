const scroll = (target) => {
    window.scrollTo({
        top: target.current.offsetTop + 1,
        left: 0,
        behavior: 'smooth'
    })
}

export { scroll }