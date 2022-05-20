function validaArray(arr, num){
    try{
            if(!arr && !num) throw new ReferenceError('envie os parametros');
            if(typeof arr !== 'object')
                throw new TypeError ('Array precisa de ser um objecto');

    return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("este erro é um Reg")
        }

        return e;

    }
    console.log(validaArray());
}
