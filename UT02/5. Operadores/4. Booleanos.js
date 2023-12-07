//  resultado =  false
console.log(!true);
//  resultado =  false   
console.log(!(10  >  5));
//  resultado =  true
console.log(!(10  <  5));
//  resultado =  true
console.log(!("gato"  ==  "pato"));

//  resultado =  true
console.log(5  >  1  &&  50  >  10);
//  resultado  =  false
console.log(5  >  1  &&  50  <  10);
//  resultado  =  false
console.log(5  <  1  &&  50  >  10);
//  resultado  =  false
console.log(5  <  1  &&  50  <  10);

//  resultado =  true
console.log(5  >  1  ||  50  >  10);   //  resultado  =  true
//  resultado =  true
console.log(5  >  1  ||  50  <  10);  //  resultado  =  true
//  resultado =  true
console.log(5  <  1  ||  50  >  10);  //  resultado  =  true
//  resultado =  false
console.log(5  <  1  ||  50  <  10);  //  resultado  =  false