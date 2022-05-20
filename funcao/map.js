function getAdmins(map){
    let Admins = [];

    for ([key, value] of map) {
        if(value === 'Admin'){
            Admins.push(key);
        }
        
    }
    return Admins

}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('António','Admin');
usuarios.set('Zeca','Admin');
usuarios.set('armando','user');

console.log(getAdmins(usuarios));