
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if(isNaN(numAnimals)||
    isNaN(avgFood))
    {
        throw "Not a Number";
    }
    orderqty = numAnimals * avgFood;
   if (orderqty > 0)
   {return orderqty}
   else return -1;
    // IMPLEMENT THIS FUNCTION!
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the days is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of 
 the week if there is only one most popular day, and an array of the strings 
 containing the names of the most popular days if there are more than one that are 
 most popular
 */
/**
*For mostPopularDays, remember that you can use the JavaScript console 
 *as a “REPL” to create variables – including objects – and then use them 
 in invoking your functions. For instance, you can create a Weekday object 
 using the JavaScript “new” keyword with the prototype function 
 (review the lesson on functions if you don’t recall how to do that), and 
 then create an empty array and then use the array’s 
 “push” function to add objects to the array before calling mostPopularDays.*/
function mostPopularDays(days) {

                if (days == null||days.length==0)
                {
                    return null;
                }

        var largest= 0;
        for (i=0; i<days.length;i++)
        {
                if (days[i].traffic > largest)
                {
                    largest=days[i].traffic;
                }
        }
        var mostPopularDays = [];
        for (i=0;i<days.length;i++)
        {
            if (days[i].traffic == largest)
            {
                mostPopularDays.push(days[i].name)
            }
        }

        return mostPopularDays;
    // IMPLEMENT THIS FUNCTION!
}
/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    if(names == null || names.length == 0|| types ==null||types.length==0 || 
        breeds == null||breeds.length == 0)
        {
            return [];
        }

        if(names.length != types.length || names.length != breeds.length)
        {
            return new Array(); //can also use []
        }
        var animals = [];

        for (i=0; i < names.length; i++)
        {
            var name = names[i];
            var type = types[i];
            var breed = breeds[i];
            animals.push(new Animal(name, type, breed));
        }
    return animals;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
(function testcreateAnimalObjects() {
    var names = ["oscar", "mehran", "ehsan"];
    var types = ["mouse", "pig", "dog"];
    var breeds = ["rat", "lancanshire", "poodle"];

    var result = createAnimalObjects(names, types, breeds);
if(result[0].name != "oscar")
{
throw "wrong name";
}

    console.log(result);
    console.log(null);
    console.log([]);
}());

/* function testmostPopularDays() {
var days = [new Weekday("Monday", 55), new Weekday("Tuesday", 25), new Weekday("Wdnesday", 87), 
new Weekday("Thursday", 88), new Weekday("Friday",85), new Weekday("Saturday", 75), new Weekday("Sunday",88)];

var result = mostPopularDays(days);

console.log(result);
console.log(null);
console.log([]);
*/