function Dog() {
    this.name = 'Bel';
    this.age = 5;
    this.bark = function() {
      console.log('Big Dog');
    };
  }
  
  const hound = new Dog();
  
  console.log(hound.name); 
  console.log(hound.age);  
  hound.bark();  
  module.exports = hound;