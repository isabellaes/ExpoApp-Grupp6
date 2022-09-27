import Recept from "../Interfaces/receptInterface";

const data: Recept[] = [
  {
    id: 1,
    protein: "meat",
    receptImage:
      "https://www.matratt.se/wp-content/uploads/2021/07/DSC09555-2-1536x1536.jpg",
    receptName: "Sausage with rice",
    receptDescription:
      "Put a pot of water on the boil, and then add rice, which is best after about 11 minutes. In the meantime, shred the sausage to the desired size and fry in oil together with chopped yellow onion. When this starts to colour, add the other ingredients, then leave to simmer for a few minutes. If you want a lighter consistency on the sauce, it's always good to add a little extra water, just keep in mind that a little more spices may also be needed in the case of ice. Serve with the cooked rice",
    receptIngridients:
      "3/4 dl (60g) Basmati rice, 3 pcs Natural sausage or 150g food sausage Food Right, 1 1/2 dl Mild food light 4%, 2/3 dl Water, 2 tbsp Chilli sauce unsweetened Felix, 2 tsp Tomato puree, 2 tsp Japanese soy , 1/2 dl Yellow onion, 2/3 tsp Oil, 1 crm Black pepper, 1/3 crm White pepper, 1 crm Salt",
  },
  {
    id: 2,
    protein: "fish",
    receptImage:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    receptName: "Salmon with green salad",
    receptDescription:
      "Salad: Wash and cut the potatoes into wedges. Boil the potato wedges in a little salted water for about 10 minutes, or until they feel cooked. Ready. Boil the eggs so that the yolk is still a little soft, about 7-8 min from the time the water has started to boil. This varies slightly depending on the stove. Then rinse them cold, peel and cut them into slices. Done. Rinse and halve the tomatoes and rinse and cut the cucumber into pieces. Rinse the salad. Ready. Cut each salmon fillet into 4 pieces so that you get large cubes. Salt and pepper both sides. Fry the salmon cubes in oil in a hot frying pan for about 3-4 minutes on both sides. Continued after the ad Done. Dressing: Whisk together oil, balsamic vinegar, mustard and honey in a bowl. Season with a pinch of salt and pepper. Assembly: Mix boiled potatoes, lettuce, tomato, olives and cucumber with the dressing. Place on a plate and top with salmon and egg.",
    receptIngridients:
      "Dressing 1/2 dl, olive oil 2 tbsp, balsamic vinegar, white 2 tbsp, Dijon mustard, 1 tsp, honey, salt, black pepper, Salad 600 g, potato(s) 2 pcs, egg, 500 g salmon fillet, thawed, olive oil, 1/ 2 can cocktail tomato(s), 1/2 cucumber, 1 can salad mix, 1 can olives salt black pepper",
  },
  {
    id: 3,
    protein: "meat",
    receptImage:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
    receptName: "Hamburger",
    receptDescription:
      "Dressing: Mix together mayonnaise, sour cream, chilli sauce and Boston gherkins. Season with curry, soy, salt and pepper. Refrigerate until serving. Hamburger: Stir the minced meat with salt, and it will become a little tough and hold together nicely. Season with Worcestershire sauce, salt and pepper. Roll into a roll and cut into 4 slices. Flatten each slice into a thin hamburger. Cut a grid pattern into the mince. Grill or fry for 3 minutes per side. Put together in true American fashion: Toast the cut surface of the bread in a hot pan. Put ketchup and mustard on one side of each bread. Put the top and bottom together, so that the ketchup and mustard are distributed in an even layer. Open again, put salad and dressing on the lower parts. Place the hamburgers on top. Add tomato, cucumber and onion. Place the tops on and squeeze lightly. Serve immediately. Tip: Hamburgers can be topped with cheese, bacon or fried egg. Different dressings also go well with it, as does mashed avocado.",
    receptIngridients:
      "4 portioner 500 g grovmalen nötfärs 1 tsk salt 1 tsk worcestershiresås 1 krm malen vitpeppar 1 krm malen svartpeppar 1 msk smör Tillbehör: 4 hamburgerbröd 4 msk ketchup 4 tsk senap ½ huvud isbergssallat 2 mogna tomater, skivade 2 inlagda gurkor, skivade ½ gul lök, finhackad ½ gul lök, finhackad, stekt Dressing: ½ dl majonnäs 1 dl gräddfil ½ dl chilisås 2 tsk bostongurka 1 krm curry ½ krm kinesisk soja salt och malen vitpeppar",
  },
  {
    id: 4,
    protein: "pork",
    receptImage:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    receptName: "Fillet of pork",
    receptDescription:
      "Mix together the ingredients for the marinade. Clean the pork fillet, put it in the marinade, at least an hour before. Peel and split the beets. Fry the pork fillet in a heated frying pan to get a nice surface. Place the pork tenderloin in an ovenproof dish along with the beetroot and a few sprigs of thyme. The meat will be juiciest if you cook it at a low temperature in the oven. 125 degrees in a normal oven and 100 degrees in a convection oven. Let go until the meat has an internal temperature of 65-68 degrees. Take the meat out and let it rest in aluminum foil for about 10 minutes. Then the meat is ready and the meat retains its juiciness. Break off the woody part of the asparagus. Then boil the asparagus in salted water for about 5-8 minutes.",
    receptIngridients:
      "550 g pork fillet 1 bunch fresh thyme 65 g salad mix (1 bag) 250 g green asparagus 8 beets, small 2 green onions Marinade for pork fillet 2 tablespoons rapeseed oil 1 tablespoon sweet chili sauce 1 tablespoon honey, liquid 1 clove of garlic 1 tablespoon balsamic vinegar 1 tbsp Japanese soy 1 tsp salt 1 tsp ground black pepper",
  },
  {
    id: 5,
    protein: "tofu",
    receptImage:
      "https://cdn.pixabay.com/photo/2016/01/15/06/57/vegetarian-1141242_960_720.jpg",
    receptName: "Veggie wok",
    receptDescription:
      "Cook rice according to the instructions on the package. Cut the tofu into pieces. Shred the white cabbage, peel and cut the carrots into fine sticks. Rinse and shred the leek and rinse and cut the broccoli into florets. Continuation after the ad. Peel and grate ginger and garlic. Rinse and shred the chili. Heat rapeseed oil in a large frying pan or wok and fry the tofu pieces golden brown. Add a little salt and place the tofu on a plate. Add the sesame oil to the pan and stir-fry all the vegetables together with the ginger, garlic and chilli. Continuation after the ad. Add coconut milk, zest and lime juice and soy.  Allow to boil quickly and serve immediately with freshly cooked rice.",
    receptIngridients:
      "500 g ris Wok 1 paket Tofu 200 g vitkål 200 g morot 1/2 st purjolök(ar) 1 st Broccoli 1 msk ingefära 2 st vitlöksklyfta(or) 1 st chilipeppar 1 krm salt 1 msk rapsolja 2 tsk sesamolja 1 burk kokosmjölk 1 st lime 1,5 msk soja, japansk",
  },
  {
    id: 6,
    protein: "salad",
    receptImage:
      "https://cdn.pixabay.com/photo/2016/11/02/16/51/broccoli-1792236_960_720.jpg",
    receptName: "Salad",
    receptDescription:
      "Boil honey, white wine vinegar and water. Add the saffron and whisk until dissolved. Then add the oil while whisking, season with salt and pepper. Split and remove all the seeds from the pomegranate and place them in a bowl. Rinse the kale and place it in a large bowl or on a plate. Top with the pomegranate seeds and walnuts. Crumble over the feta cheese and finally pour over the saffron vinaigrette and mix around.",
    receptIngridients:
      "200 g kale (1 bag) 1 pomegranate 150 g feta cheese 0.5 bag Chef's saffron 1 tbsp water 1 tablespoon honey 1 tablespoon white wine vinegar 1 dl rapeseed oil salt and pepper",
  },
  {
    id: 7,
    protein: "chicken",
    receptImage:
      "https://cdn.pixabay.com/photo/2019/05/21/15/21/noodle-4219235_960_720.jpg",
    receptName: "Chicken with noodles",
    receptDescription:
      "Cook egg noodles according to package. Meanwhile, brown shredded chicken in oil for about 2 minutes. Peel and cut carrots into smaller pieces - preferably into sticks a few mm thick, like matchsticks. Rinse and cut the broccoli into small florets. Rinse and slice the green onion diagonally. Fry carrots, broccoli and green onions for about 2 minutes in a tablespoon of oil. Drain noodles. Mix vegetables and chicken with the noodles. Add and stir in hoisin sauce and 1 tablespoon sesame oil. Reheat and serve.",
    receptIngridients:
      "250 grams of egg noodles 300 grams of shredded chicken 2 tbsp vegetable oil 6 green onions approx. 70 grams of broccoli, two small florets 2 carrots 0.5 can hoisin sauce (250 grams) 1 tablespoon sesame oil",
  },
  {
    id: 8,
    protein: "tomato",
    receptImage:
      "https://cdn.pixabay.com/photo/2017/05/05/19/06/tomato-soup-2288056_960_720.jpg",
    receptName: "Tomato soup",
    receptDescription:
      "Whisk together vinegar, oil, salt and pepper in a large bowl. eason with salt and pepper. Stir in all the vegetables, including the tomatoes, and leave to soak for a minute. Mix the vegetable mixture and dilute with water to the desired consistency. Season with salt and pepper. Serve it with a few drops of olive oil and croutons.",
    receptIngridients:
      "about 2 tablespoons of butter 1 yellow onion approx. 800-1,000 g of good tomatoes or 800-1,000 g of crushed tomatoes 1 dl water 1 dl whipping cream or 1 dl milk 1 crm ground black pepper 2 diced vegetable broth 0-1 tsp salt",
  },
];

export { data };
