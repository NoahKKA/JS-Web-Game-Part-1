const newImage = (src, left, bottom) => {
    let name = document.createElement('img')
    name.src = src;
    name.style.position = 'fixed';
    name.style.left = left + 'px'
    name.style.bottom = bottom + 'px';
    document.body.append(name);
    return name
}

let greenCharacter = newImage('assets/green-character.gif', 100, 100)
let pineTree = newImage('assets/pine-tree.png', 450, 200)
let tree = newImage('assets/tree.png', 200, 300)
let pillar = newImage('assets/pillar.png', 350, 100)
let crate = newImage('assets/crate.png', 150, 200)
let well = newImage('assets/well.png', 500, 425)


const newItem = (src, left, bottom) => {
    let item = newImage(src, left, bottom);

    item.addEventListener("dblclick", function() {
        item.remove();
    });
}


let sword = newItem('assets/sword.png', 500, 405)
let shield = newItem('assets/sheild.png', 165, 185)
let staff = newItem('assets/staff.png', 600, 100)


let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

