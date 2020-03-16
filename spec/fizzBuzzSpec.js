
describe("fizzBuzz.js", function(){
  var fizzBuzz;
  
  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });
  it("returns Fizz when 3 in passed", function(){
    expect(fizzBuzz.start(3)).toBe("Fizz");
  });

  it("returns 'Buzz' when 5 is passed", function(){
    expect(fizzBuzz.start(5)).toBe("Buzz");
  });

  it("returns 'FizzBuzz' when 15 is passed", function(){
    expect(fizzBuzz.start(15)).toBe("FizzBuzz");
  });

  it("returns 2 when passed 2", function(){
    expect(fizzBuzz.start(2)).toBe(2);
  });
 });