import Recipe from "../interfaces/recipeInterface";

const data: Recipe[] = [
  {
    id: 1,
    protein: "meat",
    recipeImage:
      "https://www.matratt.se/wp-content/uploads/2021/07/DSC09555-2-1536x1536.jpg",
    recipeName: "Sausage with rice",
    recipeDescription:
      "Put a pot of water on the boil, and then add rice, which is best after about 11 minutes. In the meantime, shred the sausage to the desired size and fry in oil together with chopped yellow onion. When this starts to colour, add the other ingredients, then leave to simmer for a few minutes. If you want a lighter consistency on the sauce, it's always good to add a little extra water, just keep in mind that a little more spices may also be needed in the case of ice. Serve with the cooked rice",
    recipeIngridients:
      "3/4 dl (60g) Basmati rice, 3 pcs Natural sausage or 150g food sausage Food Right, 1 1/2 dl Mild food light 4%, 2/3 dl Water, 2 tbsp Chilli sauce unsweetened Felix, 2 tsp Tomato puree, 2 tsp Japanese soy , 1/2 dl Yellow onion, 2/3 tsp Oil, 1 crm Black pepper, 1/3 crm White pepper, 1 crm Salt",
  },
  {
    id: 2,
    protein: "fish",
    recipeImage:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    recipeName: "Salmon with green salad",
    recipeDescription:
      "Salad: Wash and cut the potatoes into wedges. Boil the potato wedges in a little salted water for about 10 minutes, or until they feel cooked. Ready. Boil the eggs so that the yolk is still a little soft, about 7-8 min from the time the water has started to boil. This varies slightly depending on the stove. Then rinse them cold, peel and cut them into slices. Done. Rinse and halve the tomatoes and rinse and cut the cucumber into pieces. Rinse the salad. Ready. Cut each salmon fillet into 4 pieces so that you get large cubes. Salt and pepper both sides. Fry the salmon cubes in oil in a hot frying pan for about 3-4 minutes on both sides. Continued after the ad Done. Dressing: Whisk together oil, balsamic vinegar, mustard and honey in a bowl. Season with a pinch of salt and pepper. Assembly: Mix boiled potatoes, lettuce, tomato, olives and cucumber with the dressing. Place on a plate and top with salmon and egg.",
    recipeIngridients:
      "Dressing 1/2 dl, olive oil 2 tbsp, balsamic vinegar, white 2 tbsp, Dijon mustard, 1 tsp, honey, salt, black pepper, Salad 600 g, potato(s) 2 pcs, egg, 500 g salmon fillet, thawed, olive oil, 1/ 2 can cocktail tomato(s), 1/2 cucumber, 1 can salad mix, 1 can olives salt black pepper",
  },
  {
    id: 3,
    protein: "meat",
    recipeImage:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
    recipeName: "Hamburger",
    recipeDescription:
      "Dressing: Mix together mayonnaise, sour cream, chilli sauce and Boston gherkins. Season with curry, soy, salt and pepper. Refrigerate until serving. Hamburger: Stir the minced meat with salt, and it will become a little tough and hold together nicely. Season with Worcestershire sauce, salt and pepper. Roll into a roll and cut into 4 slices. Flatten each slice into a thin hamburger. Cut a grid pattern into the mince. Grill or fry for 3 minutes per side. Put together in true American fashion: Toast the cut surface of the bread in a hot pan. Put ketchup and mustard on one side of each bread. Put the top and bottom together, so that the ketchup and mustard are distributed in an even layer. Open again, put salad and dressing on the lower parts. Place the hamburgers on top. Add tomato, cucumber and onion. Place the tops on and squeeze lightly. Serve immediately. Tip: Hamburgers can be topped with cheese, bacon or fried egg. Different dressings also go well with it, as does mashed avocado.",
    recipeIngridients:
      "4 portioner 500 g grovmalen nötfärs 1 tsk salt 1 tsk worcestershiresås 1 krm malen vitpeppar 1 krm malen svartpeppar 1 msk smör Tillbehör: 4 hamburgerbröd 4 msk ketchup 4 tsk senap ½ huvud isbergssallat 2 mogna tomater, skivade 2 inlagda gurkor, skivade ½ gul lök, finhackad ½ gul lök, finhackad, stekt Dressing: ½ dl majonnäs 1 dl gräddfil ½ dl chilisås 2 tsk bostongurka 1 krm curry ½ krm kinesisk soja salt och malen vitpeppar",
  },
  {
    id: 4,
    protein: "meat",
    recipeImage:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    recipeName: "Fillet of pork",
    recipeDescription:
      "Mix together the ingredients for the marinade. Clean the pork fillet, put it in the marinade, at least an hour before. Peel and split the beets. Fry the pork fillet in a heated frying pan to get a nice surface. Place the pork tenderloin in an ovenproof dish along with the beetroot and a few sprigs of thyme. The meat will be juiciest if you cook it at a low temperature in the oven. 125 degrees in a normal oven and 100 degrees in a convection oven. Let go until the meat has an internal temperature of 65-68 degrees. Take the meat out and let it rest in aluminum foil for about 10 minutes. Then the meat is ready and the meat retains its juiciness. Break off the woody part of the asparagus. Then boil the asparagus in salted water for about 5-8 minutes.",
    recipeIngridients:
      "550 g pork fillet 1 bunch fresh thyme 65 g salad mix (1 bag) 250 g green asparagus 8 beets, small 2 green onions Marinade for pork fillet 2 tablespoons rapeseed oil 1 tablespoon sweet chili sauce 1 tablespoon honey, liquid 1 clove of garlic 1 tablespoon balsamic vinegar 1 tbsp Japanese soy 1 tsp salt 1 tsp ground black pepper",
  },
  {
    id: 5,
    protein: "vegetarian",
    recipeImage:
      "https://cdn.pixabay.com/photo/2016/01/15/06/57/vegetarian-1141242_960_720.jpg",
    recipeName: "Veggie wok",
    recipeDescription:
      "Cook rice according to the instructions on the package. Cut the tofu into pieces. Shred the white cabbage, peel and cut the carrots into fine sticks. Rinse and shred the leek and rinse and cut the broccoli into florets. Continuation after the ad. Peel and grate ginger and garlic. Rinse and shred the chili. Heat rapeseed oil in a large frying pan or wok and fry the tofu pieces golden brown. Add a little salt and place the tofu on a plate. Add the sesame oil to the pan and stir-fry all the vegetables together with the ginger, garlic and chilli. Continuation after the ad. Add coconut milk, zest and lime juice and soy.  Allow to boil quickly and serve immediately with freshly cooked rice.",
    recipeIngridients:
      "500 g ris Wok 1 paket Tofu 200 g vitkål 200 g morot 1/2 st purjolök(ar) 1 st Broccoli 1 msk ingefära 2 st vitlöksklyfta(or) 1 st chilipeppar 1 krm salt 1 msk rapsolja 2 tsk sesamolja 1 burk kokosmjölk 1 st lime 1,5 msk soja, japansk",
  },
  {
    id: 6,
    protein: "vegetarian",
    recipeImage:
      "https://cdn.pixabay.com/photo/2016/11/02/16/51/broccoli-1792236_960_720.jpg",
    recipeName: "Salad",
    recipeDescription:
      "Boil honey, white wine vinegar and water. Add the saffron and whisk until dissolved. Then add the oil while whisking, season with salt and pepper. Split and remove all the seeds from the pomegranate and place them in a bowl. Rinse the kale and place it in a large bowl or on a plate. Top with the pomegranate seeds and walnuts. Finally pour over the saffron vinaigrette and mix around.",
    recipeIngridients:
      "200 g kale (1 bag) 1 pomegranate 0.5 bag Chef's saffron 1 tbsp water 1 tablespoon honey 1 tablespoon white wine vinegar 1 dl rapeseed oil salt and pepper",
  },
  {
    id: 7,
    protein: "meat",
    recipeImage:
      "https://cdn.pixabay.com/photo/2019/05/21/15/21/noodle-4219235_960_720.jpg",
    recipeName: "Chicken with noodles",
    recipeDescription:
      "Cook egg noodles according to package. Meanwhile, brown shredded chicken in oil for about 2 minutes. Peel and cut carrots into smaller pieces - preferably into sticks a few mm thick, like matchsticks. Rinse and cut the broccoli into small florets. Rinse and slice the green onion diagonally. Fry carrots, broccoli and green onions for about 2 minutes in a tablespoon of oil. Drain noodles. Mix vegetables and chicken with the noodles. Add and stir in hoisin sauce and 1 tablespoon sesame oil. Reheat and serve.",
    recipeIngridients:
      "250 grams of egg noodles 300 grams of shredded chicken 2 tbsp vegetable oil 6 green onions approx. 70 grams of broccoli, two small florets 2 carrots 0.5 can hoisin sauce (250 grams) 1 tablespoon sesame oil",
  },
  {
    id: 8,
    protein: "vegetarian",
    recipeImage:
      "https://cdn.pixabay.com/photo/2017/05/05/19/06/tomato-soup-2288056_960_720.jpg",
    recipeName: "Tomato soup",
    recipeDescription:
      "Whisk together vinegar, oil, salt and pepper in a large bowl. eason with salt and pepper. Stir in all the vegetables, including the tomatoes, and leave to soak for a minute. Mix the vegetable mixture and dilute with water to the desired consistency. Season with salt and pepper. Serve it with a few drops of olive oil and croutons.",
    recipeIngridients:
      "about 2 tablespoons of butter 1 yellow onion approx. 800-1,000 g of good tomatoes or 800-1,000 g of crushed tomatoes 1 dl water 1 dl whipping cream or 1 dl milk 1 crm ground black pepper 2 diced vegetable broth 0-1 tsp salt",
  },
  {
    id: 9,
    protein: "fish",
    recipeImage:
      "https://eu-central-1.linodeobjects.com/tasteline/2021/06/lax-i-kramig-sas-med-soltorkad-tomat-och-spenat-foto-nurlan-mathem.jpg",
    recipeName: "Salmon in creamy sauce",
    recipeDescription:
      "1. Cut the salmon fillet into 8 cubes. Season with salt and pepper all over. Heat some oil in a frying pan and quickly brown the salmon pieces all around so that they get a nice golden frying surface. Lift out the salmon pieces and place on a plate.  Peel and grate garlic. Saute the garlic until soft in a little new oil in the frying pan. Add cream, fish stock and white wine vinegar to the pan and let the sauce simmer for 5 minutes. Clear Strain the oil from the sun-dried tomatoes. Rinse and finely chop the green onions. Add sun-dried tomatoes, half of the green onions and spinach to the cream sauce. Dilute with water if the sauce feels too thick and simmer for 2 minutes. Season with salt and pepper. Put the salmon pieces in the sauce and let them simmer in the sauce for 2 min. Sprinkle over the rest of the scallions. Serve the salmon with rice, boiled grits or potatoes.",
    recipeIngridients:
      "600 g laxfilé(er) 3 dl vispgrädde 100 g soltorkad tomat 100 g salladslök 65 g färsk spenat Från ditt skafferi 1/2 tsk salt 2 krm svartpeppar 1 klyfta vitlök 1 msk olivolja 1 msk fiskfond 1/2 msk vitvinsvinäger 1/2 dlvatten",
  },
  {
    id: 10,
    protein: "fish",
    recipeImage:
      "https://eu-central-1.linodeobjects.com/tasteline/2021/12/Sesampanerad-tonfisk-foto-Johanna-akerberg-kassel-800x800.jpg",
    recipeName: "Sesame breaded tuna",
    recipeDescription:
      " Grate the carrots coarsely, if you have time you can shred them super thin. 9 carrots Shred the pak choi and sugar snap peas. 250 g pak choi, 150 g sugar snap peas Chop the tomatoes into smaller pieces. Finely chop the herbs. Clear  Mix mayonnaise with tabasco and chili flakes in a bowl. 1.5 dl mayonnaise, 2 tsp tabasco, 1 teaspoon chili flakes Sesame breaded tuna Mix sesame seeds, curry, salt and pepper. Turn the tuna in the sesame mixtur  3/4 cup white sesame seeds, 1/2 teaspoon curry, 1 tsp salt, 1 tsp black pepper, 900 g tuna fillet Heat up a frying pan. Fry the fish for 1–2 minutes per side in rapeseed oil over high heat.",
    recipeIngridients:
      "Salad 9 pcs carrots, preferably different colors 250 g pak choi 150 g sugar snap peas 3 pcs tomatoes 1 pot fresh coriander 1 pot Thai basil 1 dl Japanese soy, (light soy) 1.5 tbsp liquid honey 3 tablespoons rice vinegar Chilli mayonnaise 1.5 dl mayonnaise, of high quality 2 tsp Tabasco 1 tsp chili flakes Sesame breaded tuna 3/4 dl white sesame seeds 1/2 tsp Curry 1 tsp salt 1 tsp black pepper, freshly ground 900 g tuna fillet, in 4-5 pieces, choose one with a green marking in the fish counter   tablespoon rapeseed oil",
  },
  {
    id: 11,
    protein: "vegetarian",
    recipeImage:
      "https://www.valdigtvego.se/wp-content/uploads/2018/03/so%CC%88tpotatishummus3.jpg",
    recipeName: "flat bread with filling",
    recipeDescription:
      "Peel the sweet potato and cut it into small pieces. Place the sweet potatoes in a saucepan and cover with water. Salt the water and let the potatoes boil until soft (about 10-15 minutes). Pour off the water. Drain and rinse the chickpeas (and don't forget to use the spade! You can even freeze it).  Mix all the ingredients (except the flatbreads) and mix in a food processor or with a hand blender until you have a smooth and creamy hummus. If you use a stick blender, you need to press the garlic clove and coarsely chop the parsley before you start mixing. Dilute with more water if you want a thinner consistency.  When the mixture has cooled slightly, spread over thin bread and roll up from the short side. Cut each flatbread into five pieces. Ready to serve!",
    recipeIngridients:
      "5 flatbreads 1 large sweet potato (approx. 450 g) 1 tetra chickpea (400 g) ½ pot parsley (including sprigs) 3/4 lemon, juice 3 tbsp olive oil (+ more for serving) 4 tbsp water 2 tbsp tahini 1 1/2 cloves of garlic 1 teaspoon cumin (+ more for serving) ½ tsp salt a pinch of cayenne pepper possibly 1 tsp agave syrup",
  },
];

export { data };
