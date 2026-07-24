const stringA = "Hello, ";
const stringB = "World!";
const combinedString = stringA + stringB;

const numberA = 10;
const numberB = 20;

const concatenatedNumbers = `${numberA} ${numberB} ${combinedString}`; //string interpolation


console.log(concatenatedNumbers);


//like parsse Int we have parseFloat to convert string to float number
//but Number() is a better way to convert string to number because it can convert both integer and float numbers


//truthy and falsy values are not recommended to use in production code because they can lead to unexpected behavior. It's better to use explicit checks for values rather than relying on truthy or falsy evaluations.



let number = 0;
while(number < 100){

    if(number % 3 === 0 && number % 5 === 0){
        console.log('FOOBAR')
    }

    else if(number %3 === 0){
        console.log('FOO')

    }else if(number %5 === 0){
        console.log('BAR')
    }
    else{
        console.log(number)
    }
    number++;
}