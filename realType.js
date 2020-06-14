function realType(value){
    if(value == null){
        return 'null';
    }

    switch(typeof value){
        case(typeof 0): return 'number';
        break;
        case(typeof ''): return 'string';
        break;
        case(typeof true): return 'boolean';
        break;
        case(typeof []): return 'array';
        break;

        default: return 'Please use correct type';

    }
}

console.log(realType(null))