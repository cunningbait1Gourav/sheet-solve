//  include the Keyword Extractor
const keyword_extractor = require("keyword-extractor");

//  Opening sentence to NY Times Article at
/*
http://www.nytimes.com/2013/09/10/world/middleeast/
surprise-russian-proposal-catches-obama-between-putin-and-house-republicans.html
*/
const sentence =
"The motive of our project is to create a device to safely convert A.C. voltage into a D.C. form. Hence we used one of the most predominantly used methods of using a center-tapped rectifier for this purpose. In a general center-tapped rectifier we use a transformer to step down the A.C. voltage and then by use of two diodes we ensure that only the positive half cycle is supplied to the load. But in the case of center-tapped rectifier, we use two diodes as visible in the diagram both of them are arranged in such a way that the +ve half cycle and the negative half cycle both are attained on the load side. As the name suggests center-tapped here is referring that the secondary of the transformer has a center tapping necessary to get a reference line voltage. The diodes work based on this reference voltage only. The upper diode conducts only when the upper terminal of the secondary is at a higher potential than the center tap. Similarly, for the lower diode, it will conduct only and only when the lower terminal of the secondary has a lower potential than the center tapping.  We have used a light-emitting diode to show our response to the load. Generally, it is a good practice to use a capacitor as a filter with this system to filter out the ripple coming from the system but here in our case, we have not used one. The efficiency of a center-tapped rectifier is 81.2%."

//  Extract the keywords
const extraction_result =
keyword_extractor.extract(sentence,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: true,
});

console.log(extraction_result);

/*
  extraction result is:

  [
        "president",
        "obama",
        "woke",
        "monday",
        "facing",
        "congressional",
        "defeat",
        "parties",
        "believed",
        "hobble",
        "presidency"
    ]
*/