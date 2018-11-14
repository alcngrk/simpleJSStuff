function hardCp1(obj){
    const before = process.hrtime();
    const newObj = {
        ...obj,
    };

    const elapsedTime = ((process.hrtime()[1] - before[1])/1000000).toFixed(4);
    return {
        newObj, 
        elapsedTime,
    };
}

function hardCp2(obj){
    const before = process.hrtime();
    const newObj = JSON.parse(JSON.stringify(obj));

    const elapsedTime = ((process.hrtime()[1] - before[1])/1000000).toFixed(4);
    return {
        newObj, 
        elapsedTime,
    };
}

function shallowCp(obj){
    const before = process.hrtime();
    const newObj = obj;

    const elapsedTime = ((process.hrtime()[1] - before[1])/1000000).toFixed(4);
    return {
        newObj, 
        elapsedTime,
    };
}

// Don't mind the long console.log 
function printComparison(obj1, str1, obj2, str2, time){
    console.log(`\x1b[32m%s\x1b[0m and \x1b[32m%s\x1b[0m are the same : ? \x1b[31m%s\x1b[0m, time took to copy: \x1b[35m%s\x1b[0m ms`, str1, str2, (obj1 === obj2), time);
}

const originalObj = {
    x: 1,
    y: 2,
    z: 3,
};

const cp1Obj = hardCp1(originalObj);
const cp1 = cp1Obj.newObj;

const cp2Obj = hardCp2(originalObj);
const cp2 = cp2Obj.newObj;

const cp3Obj = shallowCp(originalObj);
const cp3 = cp3Obj.newObj;

printComparison(cp1, 'cp1', originalObj, 'originalObj', cp1Obj.elapsedTime);
printComparison(cp2, 'cp2', originalObj, 'originalObj', cp2Obj.elapsedTime);
printComparison(cp3, 'cp3', originalObj, 'originalObj', cp3Obj.elapsedTime);