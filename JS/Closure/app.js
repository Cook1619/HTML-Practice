function test() {
    let num = 0

    function add(n) {
        let x = 5
        num += x + n
    }

    return add
}

let add2 = test()
add2()


class User {
    constructor() {
        this.health = 100
    }
    hit() {
        this.health -= 10
    }
}

const user = new User
user.hit()