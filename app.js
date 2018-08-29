// here is a comment
/* multi line
    jay
    */
    let a = 3.14;
    console.log(a);

    const temp1 = 36.9;
    const temp2 = 37.6;
    const temp3 = 37.1;
    console.log(temp1, temp2, temp3);
    a = a + temp2;
    console.log("a plus temp2 = " + a);
    console.log();
    console.log(temp1 + 9);
    console.log(); console.log();
    // increment a number variable
    let c = 0;
    c += 1;
    c++;
    console.log(c);

     console.log(); console.log();

    console.log('variable scope');
    let num1 = 0;
    {
        num1 = 1; // OK num1 is declared in the parent blcok
        const num2 = 0;
        console.log(num1);
    }
    // console.log(num2);
    console.log("order of precedence");
    let f = 3 + 2 * 4;
    console.log(f);
    f = (3 + 2) * 4;
    console.log(f);

     console.log(); console.log();
     console.log("template literal");   console.log("evauate the literals in string then print string");
     const country = "France";
     console.log(`I live in ${country}`);  
     const x = 3;
     const y = 7;
     console.log(`${x} + ${y} = ${x + y}`);

     console.log(); console.log();
     // conversions
     console.log(4 + 5);
     console.log("4 + 5");
     console.log("4" + "5");
     console.log(4 + "5");

          console.log(); console.log();
     
     
     // NAN

     const g = "five" * 2;
     console.log(g);

     const h = 5;
     console.log (h + 1);
     
     const i = Number(h);
     console.log(i + 1);
     const j = 6;
     console.log("5" + String(j));
    console.log(Number("dog"));  // Not a Number  

    console.log(" strict equality using ===");
    let num = 0;
    let str = "0";
    console.log(num === num); //true
    console.log(str === str); // true
    console.log(num === str); // false
    console.log(num == str);  // true

    console.log();  console.log(); console.log("SWITCH statement");

    const xx = "abc";
    switch (xx) {
        case "abc":
            console.log("xx = abc");
            //break;  comment this out and it will evaluate everything.

        case "def":
            console.log("xx = def");
            break;
        default:
            console.log("otherwise");

    }
    console.log(" FOR LOOP");
    console.log();
    for (let ii = 1; ii <=5; ii++)
        {
            console.log(ii);  //OK
        }  