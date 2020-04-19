

function age(years) {
 return 2020 - years; 
}

function person(name, age) {
    const message =
      "My Name is " + name + " and I was born in " + age ;
    return message;
    
  }
 console.log(person('Sulaiman', age(27)));
