// Move this to a separate js file later (STORE.js) for manageability - IF I DO THAT, WILL I HAVE TO IMPORT IT INTO THE INDEX.JS FILE
// Question database (array of objects)
const STORE = [
    //1
   {question:"What proportion of the world’s land area is covered by forest and what proportion of land-based plants and animal species do forests support?",
    options: ["One third of land cover and over half of land species.","Two thirds of land cover and less than half of land species.","Ten percent of land cover and one quarter of land  species."],
    answer: "One third of land cover and over half of land species.",
    displayAnswer: "Forests cover one-third of the world’s land area and host more than half of the world’s land-based plant and animal species.",
    source: "http://www.fao.org/zhc/detail-events/en/c/1033884/"},
    //2
    {question:"Which of the following statements describes the role of forests in global climate?",
    options: ["Forests do not play a significant role in the global carbon cycle.","Trees are a carbon sink and the world’s forests remove an estimated 2.1 Gigatons of carbon dioxide annually.","Trees are a significant source of greenhouse gas, producing large amounts of carbon dioxide."],
    answer: "Trees are a carbon sink and the world’s forests remove an estimated 2.1 Gigatons of carbon dioxide annually.",
    displayAnswer: "Trees are a great carbon sink, with the world’s forests removing an estimated 2.1 Gigatons of carbon dioxide annually – that’s 2.1 billion tons! This plays a fundamental role in balancing the world’s carbon cycle and helping to combat climate change.",
    source: "http://www.fao.org/zhc/detail-events/en/c/1033884/"},
    //3
   {question:"Which of the following statements describes another important role of forests?",
    options: ["Forests lower the water table significantly, creating wetland habitat.","Forests reduce drought effects by retaining water, preventing run-off and mitigating flood damage.","Forests create natural habitat barriers, preventing the spread of native species."],
    answer: "Forests reduce drought effects by retaining water, preventing run-off and mitigating flood damage.",
    displayAnswer: "Forests can retain excess rainwater, prevent extreme run-offs and reduce the damage of flooding. They can also help mitigate the effects of droughts by releasing water in the dry season, forests can also help provide clean water and mitigate the effects of droughts",
    source: "https://www.un-redd.org/forest-facts"},
    //4
    {question:"Which of the following best  explains how trees in forests are able to serve as natural aqueducts? ",
    options: ["Tree crowns connect and form above ground water channels like those in ancient Rome.","Trees in forests hold water in the soil, prevent erosion, and later release it back into the atmosphere, producing a cooling effect.","Trees in forests form thick canopies, preventing water from penetrating and thereby shunting water to outside areas."],
    answer: "Trees in forests hold water in the soil, prevent erosion, and later release it back into the atmosphere, producing a cooling effect.",
    displayAnswer: "Trees in forests are natural aqueducts, redistributing up to 95 percent of the water they absorb to where it’s needed most. They hold water in the soil, preventing erosion, and later release it back into the atmosphere, producing a cooling effect.",
    source: "http://www.fao.org/zhc/detail-events/en/c/1033884/"},
    //5
    {question:"Which of the following describes the current estimated rate of global deforestation? ",
    options: ["Deforestation has slowed almost completely and global forest area is now stable.","The Earth loses roughly 1-hectare of forest area every week.","The Earth loses a forest area about the size of 40 football fields every minute."],
    answer: "The Earth loses a forest area about the size of 40 football fields every minute.",
    displayAnswer: "The Earth loses a forest area about the size of 40 football fields every minute. The overwhelming direct cause of deforestation is agriculture, including cattle ranching and palm oil and soy production. Subsistence farming is responsible for 48% of deforestation; commercial agriculture is responsible for 32%; logging is responsible for 14%, and production of charcoal makes up 5%. New data shows that over 15.8 million hectares (39 million acres) an area the size of Bangladesh of tree cover was lost in the tropics in 2017.",
    source: "https://www.un-redd.org/forest-facts"},
    // 6
    {question:"Which of the following statements about trees in forests is actually true?",
    options: ["Trees use a network of soil fungi to communicate their needs and aid neighboring plants.","Trees that are in distress can send chemical signals through the air to ‘warn’ other trees of the danger.","Neither is true.","Both are actually true!"],
    answer: "Both are actually true!",
    displayAnswer: "Both are actually true!",
    // This has two sources in a list and maybe that's a problem? 
    source:"https://e360.yale.edu/features/exploring_how_and_why_trees_talk_to_each_other"},
    // 7
    {question:"Evaluate the statement: Trees can help control temperatures in cities and reduce pollution.",
    options: ["True","False"],
    answer: "True",
    displayAnswer: "Trees could reduce temperatures in cities up to 8°C, lowering use of air conditioning and related emissions by up to 40 per cent.",
    source: "https://www.un-redd.org/forest-facts"},
    //8
    {question:"Which of the following is the largest (most biomass) organism on Earth? ",
    options: ["A 106 acre aspen clone named Pando in Utah.","A blue whale which can weigh upwards of 150 tons.","An 8,000 year old colony of Armillaria ostoyae (fungus)  in Oregon."],
    answer: "A 106 acre aspen clone named Pando in Utah.",
    displayAnswer: "The aspen clone is correct but this was a tricky question… The blue whale is the most massive single independent organism while the fungus is the most extensive organism. The aspen clone in Utah is by far the most massive however, it comprises 47,000 aspen trees stems that are all part of the same organism.",
    source: "https://www.npr.org/sections/krulwich/2014/05/08/310259300/a-question-of-biggitude-what-s-the-largest-creature-on-earth"},
    // 9
    {question:"Which of the following are actual study findings about the surprising benefit of trees?",
    options: ["Chicago public housing residents with nearby trees and natural landscapes reported 25% fewer acts of domestic aggression and violence.","Trees increase home property values.","Office workers with a view of trees report significantly less stress and more satisfaction.","All of the above."],
    answer: "All of the above.",
    displayAnswer: "These are all real findings!",
    source: "http://lhhl.illinois.edu/all.scientific.articles.htm"},
    // 10
    {question:"What is the estimated USD value of medicinal tropical forest plants?",
    options: ["$108 billion a year","$2 million","Tropical forest plants are no longer used for medicinal purposes."],
    answer: "$108 billion a year",
    displayAnswer: "More than a quarter of modern medicines, worth an estimated US$ 108 billion a year, originate from tropical forest plants.",
    source: "https://www.un-redd.org/forest-facts"},
];