let students = 
["Aaraf", "Anjum", "Rafsan", "Araz", "Arian", "Ashmit", "Ayaan", "Thinura", "Jeremy", "Ashiq", "Fardin", "Shayan", "Safwan", "Raheel", "Rehaan", "Raiyan", "Shafqat", "Nihal", "Swapnil", "Zawad"]

let body = document.getElementById('bdy')
let printer = (arr) => {
    let before = [];
    for (let i = 0; i < arr.length; i++) {
        let p = document.createElement('p')
        let x = arr[Math.floor(Math.random() * arr.length)]
        if (!before.includes(x)) {
            let txt = document.createTextNode(`${i + 1} ${x}`)
            p.append(txt)
            body.append(p)
            before.push(x)
        } else{
            i--
        }
    }
}
        
printer(students)