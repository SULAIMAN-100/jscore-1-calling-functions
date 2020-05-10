

function getYearOfBirth(year) {
 return 2020 - year; 
}

function personInfo(name, age) {
 const getAge = getYearOfBirth(age)
    const message =
      "My Name is " + name + " and I was born in " + getAge ;
    return message;
    
  }
 console.log(person('Sulaiman', age(27)));
