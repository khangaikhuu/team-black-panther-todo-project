const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

console.log(promise)

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS", "REACT"]
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject("Something wrong has happened")
        }
    }, 2000);
})

console.log(doPromise)

const res = doPromise.then((result) => {
    console.log(result)
})

console.log(doPromise)