

let n = 5;

let linea = ''
for (let i = 1; i <= n; i++) {
    linea += '*'
    console.log(linea);
}

for (let i = n - 1; i > 0; i--) {
    let linea = '';
    for (let j = 0; j < i; j++) {
        linea += '*';
    }
    console.log(linea);
}