/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores
 */

/*
const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3 ;

const avgDolpins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);

function checkWinner(avgDolpins, avgKoalas){
    if(avgDolpins >= avgKoalas * 2){
        console.log(`The winner is Dolphins team by reaching ${avgDolpins} points againts Koals ${avgKoalas} points`);
    }else if(avgKoalas >= avgDolpins * 2){
        console.log(`The winner is Dolphins team by reaching ${avgKoalas} points againts Dolphins ${avgDolpins} points `);
    }
    else{
        console.log("No one win ");
    }

}

checkWinner(avgDolpins,avgKoalas);
*/



/*
Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console


function describeCountry(country,population,capitalCity){
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}` );
    }
    const countryOne = describeCountry("Finland", 6, "Helenski");
    const countryTwo = describeCountry("Israel", 8, "Jerusalem");
    const countryThree = describeCountry("Russia", 120, "Moscow");
    
    console.log(countryOne);
    console.log(countryTwo);
    console.log(countryThree);1
    */
    


    /*
    1. The world population is 7900 million people. Create a function declaration
    called 'percentageOfWorld1' which receives a 'population' value, and
    returns the percentage of the world population that the given population
    represents. For example, China has 1441 million people, so it's about 18.2% of
    the world population
    2. To calculate the percentage, divide the given 'population' value by 7900
    and then multiply by 100
    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    store the results into variables, and log them to the console
    4. Create a function expression which does the exact same thing, called
    'percentageOfWorld2', and also call it with 3 country populations (can be
    the same populations)
    */
    
    
    ///////////////////////////  1////////////////////////////
    /*
    function percentageOfWorld1(population){
    return (population/7900)*100
    }
    const countryOne = percentageOfWorld1(120);
    const countryTne = percentageOfWorld1(30);
    const countryThree = percentageOfWorld1(1441);
    
    console.log(`Israel has ${countryOne}% of the world population`);
    console.log(`Israel has ${countryTne}% of the world population`);
    console.log(`Israel has ${countryThree}% of the world population`);
    */
    
    
    ///////////////////////////   2  ///////////////////////////////////////
    /*
    const percentageOfWorld2 = function(population){
       return (population/7900)*100
    }
    const countryOne = percentageOfWorld2(120);
    const countryTne = percentageOfWorld2(1920);
    const countryThree = percentageOfWorld2(1441);
    
    console.log(`Israel has ${countryOne}% of the world population`);
    console.log(`Israel has ${countryTne}% of the world population`);
    console.log(`Israel has ${countryThree}% of the world population`);
    */
    
    
    //////////////////////////  3   ///////////////////////////
    // 1. Recreate the last assignment, but this time create an arrow function called
    // 'percentageOfWorld3'
    
    /*
    const percentageOfWorld3 = (population) => (population/7900)*100 ;
    const countryOne = percentageOfWorld3(5000);
    const countryTne = percentageOfWorld3(1212);
    const countryThree = percentageOfWorld3(1441);
    
    console.log(`Israel has ${countryOne}% of the world population`);
    console.log(`Israel has ${countryTne}% of the world population`);
    console.log(`Israel has ${countryThree}% of the world population`);
    */