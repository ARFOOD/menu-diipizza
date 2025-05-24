// ─── 0) Dictionnaire de traductions & helpers ─────────────────────────────────
const i18n = {
  
 // --- BOISSONS ---
"item_boissons-coca_original_name": {
  fr: "Coca-Cola goût original (Taille au choix)",
  en: "Coca-Cola Original Taste (Any size)",
  es: "Coca-Cola Sabor original (Tamaño a elegir)",
  it: "Coca-Cola gusto originale (Dimensione a scelta)"
},

  "item_boissons-coca_original_desc": {
    fr: "Boisson rafraîchissante aux extraits de cola. Taille au choix.",
    en: "Refreshing cola drink. Any size.",
    es: "Refresco de cola. Tamaño a elegir.",
    it: "Bevanda rinfrescante al gusto cola. Dimensione a scelta."
  },
  "item_boissons-coca_light_name": {
    fr: "Coca-Cola light taste (Taille au choix)",
    en: "Coca-Cola Light Taste (Any size)",
    es: "Coca-Cola Sabor light (Tamaño a elegir)",
    it: "Coca-Cola gusto light (Dimensione a scelta)"
  },
  "item_boissons-coca_light_desc": {
    fr: "Boisson rafraîchissante aux extraits de cola. Taille au choix.",
    en: "Refreshing light cola drink. Any size.",
    es: "Refresco de cola light. Tamaño a elegir.",
    it: "Bevanda rinfrescante al gusto cola light. Dimensione a scelta."
  },
  "item_boissons-coca_cherry_name": {
    fr: "Coca-Cola Cherry (Taille au choix)",
    en: "Coca-Cola Cherry (Any size)",
    es: "Coca-Cola Cherry (Tamaño a elegir)",
    it: "Coca-Cola Cherry (Dimensione a scelta)"
  },
  "item_boissons-coca_cherry_desc": {
    fr: "Boisson rafraîchissante aux extraits de cola. Taille au choix.",
    en: "Refreshing cherry-flavored cola. Any size.",
    es: "Refresco de cola sabor cereza. Tamaño a elegir.",
    it: "Bevanda rinfrescante al gusto cola ciliegia. Dimensione a scelta."
  },
  "item_boissons-fanta_orange_name": {
    fr: "Fanta Orange (Taille au choix)",
    en: "Fanta Orange (Any size)",
    es: "Fanta Naranja (Tamaño a elegir)",
    it: "Fanta Arancia (Dimensione a scelta)"
  },
  "item_boissons-fanta_orange_desc": {
    fr: "Boisson rafraîchissante au jus d'orange, avec sucre. Taille au choix.",
    en: "Refreshing orange juice drink with sugar. Any size.",
    es: "Refresco de zumo de naranja, con azúcar. Tamaño a elegir.",
    it: "Bevanda rinfrescante al succo d'arancia, zuccherata. Dimensione a scelta."
  },
  "item_boissons-sprite_name": {
    fr: "Sprite citron-citron vert",
    en: "Sprite Lemon-Lime",
    es: "Sprite limón-lima",
    it: "Sprite limone-lime"
  },
  "item_boissons-sprite_desc": {
    fr: "Taille au choix.",
    en: "Any size.",
    es: "Tamaño a elegir.",
    it: "Dimensione a scelta."
  },
  "item_boissons-orangina_name": {
    fr: "Orangina",
    en: "Orangina",
    es: "Orangina",
    it: "Orangina"
  },
  "item_boissons-orangina_desc": {
    fr: "Taille au choix.",
    en: "Any size.",
    es: "Tamaño a elegir.",
    it: "Dimensione a scelta."
  },
  "item_boissons-redbull_name": {
    fr: "Red Bull",
    en: "Red Bull",
    es: "Red Bull",
    it: "Red Bull"
  },
  "item_boissons-redbull_desc": {
    fr: "25 cl.",
    en: "25 cl.",
    es: "25 cl.",
    it: "25 cl."
  },
  "item_boissons-eau_plate_name": {
    fr: "Eau plate",
    en: "Still Water",
    es: "Agua sin gas",
    it: "Acqua naturale"
  },
  "item_boissons-eau_plate_desc": {
    fr: "50 cl.",
    en: "50 cl.",
    es: "50 cl.",
    it: "50 cl."
  },
  "item_boissons-eau_gazeuse_name": {
    fr: "Eau gazeuse",
    en: "Sparkling Water",
    es: "Agua con gas",
    it: "Acqua frizzante"
  },
  "item_boissons-eau_gazeuse_desc": {
    fr: "50 cl.",
    en: "50 cl.",
    es: "50 cl.",
    it: "50 cl."
  },

// --- MENUS BURGERS (avec menu) ---
"item_menus-burger-menu_chicken_burger_name": {
  fr: "Menu chicken burger",
  en: "Chicken Burger Menu",
  es: "Menú chicken burger",
  it: "Menu chicken burger"
},
"item_menus-burger-menu_chicken_burger_desc": {
  fr: "Poulet pané, pain boulanger, salade, tomate, oignons, œuf et cheddar. Servi avec frites.",
  en: "Breaded chicken, bakery bun, lettuce, tomato, onions, egg and cheddar. Served with fries.",
  es: "Pollo empanado, pan artesanal, lechuga, tomate, cebolla, huevo y cheddar. Servido con patatas.",
  it: "Pollo impanato, pane artigianale, lattuga, pomodoro, cipolla, uovo e cheddar. Servito con patatine."
},
"item_menus-burger-menu_double_cheeseburger_name": {
  fr: "Menu double cheeseburger",
  en: "Double Cheeseburger Menu",
  es: "Menú doble cheeseburger",
  it: "Menu double cheeseburger"
},
"item_menus-burger-menu_double_cheeseburger_desc": {
  fr: "Double steak boucher, pain boulanger, salade, tomate, oignons, cheddar et cornichons. Servi avec frites.",
  en: "Double butcher's steak, bakery bun, lettuce, tomato, onions, cheddar and pickles. Served with fries.",
  es: "Doble carne de res, pan artesanal, lechuga, tomate, cebolla, cheddar y pepinillos. Servido con patatas.",
  it: "Doppio hamburger di manzo, pane artigianale, lattuga, pomodoro, cipolla, cheddar e cetriolini. Servito con patatine."
},
"item_menus-burger-menu_cheeseburger_name": {
  fr: "Menu cheeseburger",
  en: "Cheeseburger Menu",
  es: "Menú cheeseburger",
  it: "Menu cheeseburger"
},
"item_menus-burger-menu_cheeseburger_desc": {
  fr: "Steak boucher, pain boulanger, salade, tomate, oignons, cheddar. Servi avec frites.",
  en: "Butcher's steak, bakery bun, lettuce, tomato, onions, cheddar. Served with fries.",
  es: "Carne de res, pan artesanal, lechuga, tomate, cebolla, cheddar. Servido con patatas.",
  it: "Hamburger di manzo, pane artigianale, lattuga, pomodoro, cipolla, cheddar. Servito con patatine."
},
"item_menus-burger-menu_selfish_burger_name": {
  fr: "Menu selfish burger",
  en: "Selfish Burger Menu",
  es: "Menú selfish burger",
  it: "Menu selfish burger"
},
"item_menus-burger-menu_selfish_burger_desc": {
  fr: "Filet de poisson pané, pain boulanger, salade, tomate, oignons et cheddar. Servi avec frites.",
  en: "Breaded fish fillet, bakery bun, lettuce, tomato, onions and cheddar. Served with fries.",
  es: "Filete de pescado empanado, pan artesanal, lechuga, tomate, cebolla y cheddar. Servido con patatas.",
  it: "Filetto di pesce impanato, pane artigianale, lattuga, pomodoro, cipolla e cheddar. Servito con patatine."
},
"item_menus-burger-menu_veggie_burger_name": {
  fr: "Menu veggie burger",
  en: "Veggie Burger Menu",
  es: "Menú veggie burger",
  it: "Menu veggie burger"
},
"item_menus-burger-menu_veggie_burger_desc": {
  fr: "Galette de légumes, pain boulanger, salade, tomate, mozzarella et oignons rouges. Servi avec frites.",
  en: "Vegetable patty, bakery bun, lettuce, tomato, mozzarella and red onions. Served with fries.",
  es: "Hamburguesa vegetal, pan artesanal, lechuga, tomate, mozzarella y cebolla roja. Servido con patatas.",
  it: "Burger di verdure, pane artigianale, lattuga, pomodoro, mozzarella e cipolla rossa. Servito con patatine."
},
"item_menus-burger-menu_chevre_miel_burger_name": {
  fr: "Menu chèvre miel burger",
  en: "Goat Cheese & Honey Burger Menu",
  es: "Menú burger queso de cabra y miel",
  it: "Menu burger caprino e miele"
},
"item_menus-burger-menu_chevre_miel_burger_desc": {
  fr: "Steak boucher, pain boulanger, chèvre, miel et salade. Servi avec frites et boisson.",
  en: "Butcher's steak, bakery bun, goat cheese, honey and lettuce. Served with fries and a drink.",
  es: "Carne de res, pan artesanal, queso de cabra, miel y lechuga. Servido con patatas y bebida.",
  it: "Hamburger di manzo, pane artigianale, formaggio di capra, miele e lattuga. Servito con patatine e bibita."
},
"item_menus-burger-menu_forestiere_burger_name": {
  fr: "Menu forestière burger",
  en: "Forestière Burger Menu",
  es: "Menú burger forestière",
  it: "Menu burger forestiera"
},
"item_menus-burger-menu_forestiere_burger_desc": {
  fr: "Steak boucher, pain boulanger, salade, tomates, oignons confits, mozzarella et champignons. Servi avec frites.",
  en: "Butcher's steak, bakery bun, lettuce, tomato, caramelized onions, mozzarella and mushrooms. Served with fries.",
  es: "Carne de res, pan artesanal, lechuga, tomate, cebolla caramelizada, mozzarella y champiñones. Servido con patatas.",
  it: "Hamburger di manzo, pane artigianale, lattuga, pomodoro, cipolla caramellata, mozzarella e funghi. Servito con patatine."
},
"item_menus-burger-menu_montagnard_burger_name": {
  fr: "Menu montagnard burger",
  en: "Montagnard Burger Menu",
  es: "Menú burger montañés",
  it: "Menu burger montanaro"
},
"item_menus-burger-menu_montagnard_burger_desc": {
  fr: "Steak boucher, pain boulanger, salade, tomate, bacon, raclette, oignons et galette de pommes de terre.",
  en: "Butcher's steak, bakery bun, lettuce, tomato, bacon, raclette, onions and potato pancake.",
  es: "Carne de res, pan artesanal, lechuga, tomate, bacon, raclette, cebolla y torta de patata.",
  it: "Hamburger di manzo, pane artigianale, lattuga, pomodoro, bacon, raclette, cipolla e tortino di patate."
},
"item_menus-burger-menu_dii_burger_name": {
  fr: "Menu DII burger",
  en: "DII Burger Menu",
  es: "Menú DII burger",
  it: "Menu DII burger"
},
"item_menus-burger-menu_dii_burger_desc": {
  fr: "Steak boucher, pain boulanger, mozzarella, œuf, avocat, roquette, tomate et oignons rouges. Servi avec frites.",
  en: "Butcher's steak, bakery bun, mozzarella, egg, avocado, arugula, tomato and red onions. Served with fries.",
  es: "Carne de res, pan artesanal, mozzarella, huevo, aguacate, rúcula, tomate y cebolla roja. Servido con patatas.",
  it: "Hamburger di manzo, pane artigianale, mozzarella, uovo, avocado, rucola, pomodoro e cipolla rossa. Servito con patatine."
},

// --- BURGERS SEULS (sans menu) ---
"item_menus-burger-french_burger_name": {
  fr: "French burger",
  en: "French Burger",
  es: "French burger",
  it: "French burger"
},
"item_menus-burger-french_burger_desc": {
  fr: "Steak boucher, pain boulanger, raclette, salade, pommes de terre, tomate et oignons.",
  en: "Butcher's steak, bakery bun, raclette, lettuce, potatoes, tomato and onions.",
  es: "Carne de res, pan artesanal, raclette, lechuga, patatas, tomate y cebolla.",
  it: "Hamburger di manzo, pane artigianale, raclette, lattuga, patate, pomodoro e cipolla."
},
"item_menus-burger-cheese_burger_name": {
  fr: "Cheese burger",
  en: "Cheese Burger",
  es: "Cheese burger",
  it: "Cheese burger"
},
"item_menus-burger-cheese_burger_desc": {
  fr: "Steak boucher, pain boulanger, salade, tomate, oignons, cheddar et cornichons.",
  en: "Butcher's steak, bakery bun, lettuce, tomato, onions, cheddar and pickles.",
  es: "Carne de res, pan artesanal, lechuga, tomate, cebolla, cheddar y pepinillos.",
  it: "Hamburger di manzo, pane artigianale, lattuga, pomodoro, cipolla, cheddar e cetriolini."
},
"item_menus-burger-double_cheese_burger_name": {
  fr: "Double cheese burger",
  en: "Double Cheese Burger",
  es: "Doble cheese burger",
  it: "Double cheese burger"
},
"item_menus-burger-double_cheese_burger_desc": {
  fr: "Double steak boucher, pain boulanger, salade, tomate et oignons.",
  en: "Double butcher's steak, bakery bun, lettuce, tomato and onions.",
  es: "Doble carne de res, pan artesanal, lechuga, tomate y cebolla.",
  it: "Doppio hamburger di manzo, pane artigianale, lattuga, pomodoro e cipolla."
},
"item_menus-burger-chicken_burger_name": {
  fr: "Chicken burger",
  en: "Chicken Burger",
  es: "Chicken burger",
  it: "Chicken burger"
},
"item_menus-burger-chicken_burger_desc": {
  fr: "Poulet pané, pain boulanger, salade, tomate, oignons, œuf et cheddar.",
  en: "Breaded chicken, bakery bun, lettuce, tomato, onions, egg and cheddar.",
  es: "Pollo empanado, pan artesanal, lechuga, tomate, cebolla, huevo y cheddar.",
  it: "Pollo impanato, pane artigianale, lattuga, pomodoro, cipolla, uovo e cheddar."
},
"item_menus-burger-chevre_burger_name": {
  fr: "Chèvre burger",
  en: "Goat Cheese Burger",
  es: "Burger queso de cabra",
  it: "Burger caprino"
},
"item_menus-burger-chevre_burger_desc": {
  fr: "Steak boucher, pain boulanger, chèvre, miel et salade.",
  en: "Butcher's steak, bakery bun, goat cheese, honey and lettuce.",
  es: "Carne de res, pan artesanal, queso de cabra, miel y lechuga.",
  it: "Hamburger di manzo, pane artigianale, formaggio di capra, miele e lattuga."
},
"item_menus-burger-selfish_burger_name": {
  fr: "Selfish burger",
  en: "Selfish Burger",
  es: "Selfish burger",
  it: "Selfish burger"
},
"item_menus-burger-selfish_burger_desc": {
  fr: "Filet de poisson pané, pain boulanger, salade, tomate, oignons et cheddar.",
  en: "Breaded fish fillet, bakery bun, lettuce, tomato, onions and cheddar.",
  es: "Filete de pescado empanado, pan artesanal, lechuga, tomate, cebolla y cheddar.",
  it: "Filetto di pesce impanato, pane artigianale, lattuga, pomodoro, cipolla e cheddar."
},
"item_menus-burger-veggie_burger_name": {
  fr: "Veggie burger",
  en: "Veggie Burger",
  es: "Veggie burger",
  it: "Veggie burger"
},
"item_menus-burger-veggie_burger_desc": {
  fr: "Galette de légumes, pain boulanger, salade, tomate, mozzarella et oignons rouges.",
  en: "Vegetable patty, bakery bun, lettuce, tomato, mozzarella and red onions.",
  es: "Hamburguesa vegetal, pan artesanal, lechuga, tomate, mozzarella y cebolla roja.",
  it: "Burger di verdure, pane artigianale, lattuga, pomodoro, mozzarella e cipolla rossa."
},
"item_menus-burger-forestiere_burger_name": {
  fr: "Forestière burger",
  en: "Forestière Burger",
  es: "Burger forestière",
  it: "Burger forestiera"
},
"item_menus-burger-forestiere_burger_desc": {
  fr: "Steak boucher, pain boulanger, salade, tomate, oignons confits, mozzarella et champignons.",
  en: "Butcher's steak, bakery bun, lettuce, tomato, caramelized onions, mozzarella and mushrooms.",
  es: "Carne de res, pan artesanal, lechuga, tomate, cebolla caramelizada, mozzarella y champiñones.",
  it: "Hamburger di manzo, pane artigianale, lattuga, pomodoro, cipolla caramellata, mozzarella e funghi."
},
"item_menus-burger-montagnard_burger_name": {
  fr: "Montagnard burger",
  en: "Montagnard Burger",
  es: "Burger montañés",
  it: "Burger montanaro"
},
"item_menus-burger-montagnard_burger_desc": {
  fr: "Steak boucher, pain boulanger, salade, tomate, bacon.",
  en: "Butcher's steak, bakery bun, lettuce, tomato, bacon.",
  es: "Carne de res, pan artesanal, lechuga, tomate y bacon.",
  it: "Hamburger di manzo, pane artigianale, lattuga, pomodoro e bacon."
},
"item_menus-burger-dii_burger_name": {
  fr: "DII burger",
  en: "DII Burger",
  es: "DII burger",
  it: "DII burger"
},
"item_menus-burger-dii_burger_desc": {
  fr: "Steak boucher, pain boulanger, mozzarella, œuf et avocat.",
  en: "Butcher's steak, bakery bun, mozzarella, egg and avocado.",
  es: "Carne de res, pan artesanal, mozzarella, huevo y aguacate.",
  it: "Hamburger di manzo, pane artigianale, mozzarella, uovo e avocado."
},

  // --- SALADES ---
  "item_salades-nicoise_name": {
    fr: "Salade niçoise",
    en: "Niçoise Salad",
    es: "Ensalada niçoise",
    it: "Insalata nizzarda"
  },
  "item_salades-nicoise_desc": {
    fr: "Salade mixte, tomates cerises, anchois, thon, poivrons.",
    en: "Mixed salad, cherry tomatoes, anchovies, tuna, peppers.",
    es: "Ensalada mixta, tomates cherry, anchoas, atún, pimientos.",
    it: "Insalata mista, pomodorini, acciughe, tonno, peperoni."
  },
  "item_salades-campagnarde_name": {
    fr: "Salade campagnarde",
    en: "Country Salad",
    es: "Ensalada campestre",
    it: "Insalata campagnola"
  },
  "item_salades-campagnarde_desc": {
    fr: "Salade mixte, tomates cerises, chèvre, lardons et noix.",
    en: "Mixed salad, cherry tomatoes, goat cheese, bacon bits and walnuts.",
    es: "Ensalada mixta, tomates cherry, queso de cabra, bacon y nueces.",
    it: "Insalata mista, pomodorini, formaggio di capra, pancetta e noci."
  },
  "item_salades-cesar_name": {
    fr: "Salade César",
    en: "Caesar Salad",
    es: "Ensalada César",
    it: "Insalata Caesar"
  },
  "item_salades-cesar_desc": {
    fr: "Salade mixte, poulet, tomates cerises, parmesan, croûtons.",
    en: "Mixed salad, chicken, cherry tomatoes, parmesan, croutons.",
    es: "Ensalada mixta, pollo, tomates cherry, parmesano, picatostes.",
    it: "Insalata mista, pollo, pomodorini, parmigiano, crostini."
  },
  "item_salades-tomates_mozza_name": {
    fr: "Salade tomates et mozzarella",
    en: "Tomato & Mozzarella Salad",
    es: "Ensalada de tomate y mozzarella",
    it: "Insalata pomodoro e mozzarella"
  },
  "item_salades-tomates_mozza_desc": {
    fr: "Roquette, tomates, mozzarella et huile de basilic.",
    en: "Rocket, tomatoes, mozzarella and basil oil.",
    es: "Rúcula, tomates, mozzarella y aceite de albahaca.",
    it: "Rucola, pomodori, mozzarella e olio al basilico."
  },
  "item_salades-cesar_revisitee_name": {
    fr: "Salade César revisitée",
    en: "Revisited Caesar Salad",
    es: "Ensalada César reinterpretada",
    it: "Caesar Salad rivisitata"
  },
  "item_salades-cesar_revisitee_desc": {
    fr: "Salade mixte, poulet grillé, copeaux de parmesan, croûtons maison.",
    en: "Mixed salad, grilled chicken, parmesan shavings, homemade croutons.",
    es: "Ensalada mixta, pollo a la parrilla, lascas de parmesano, picatostes caseros.",
    it: "Insalata mista, pollo grigliato, scaglie di parmigiano, crostini fatti in casa."
  },

  // --- PIZZAS ---
  "item_pizzas-chevre_miel_name": {
    fr: "Pizza chèvre miel",
    en: "Goat Cheese & Honey Pizza",
    es: "Pizza de queso de cabra y miel",
    it: "Pizza caprino e miele"
  },
  "item_pizzas-chevre_miel_desc": {
    fr: "Base crème fraîche, fromage chèvre et miel. Taille au choix.",
    en: "Crème fraîche base, goat cheese and honey. Any size.",
    es: "Base de crema fresca, queso de cabra y miel. Tamaño a elegir.",
    it: "Base panna, formaggio di capra e miele. Dimensione a scelta."
  },
  "item_pizzas-paysanne_name": {
    fr: "Pizza paysanne",
    en: "Country Pizza",
    es: "Pizza campesina",
    it: "Pizza contadina"
  },
  "item_pizzas-paysanne_desc": {
    fr: "Base crème fraîche, mozzarella, lardons, oignons, œuf, olives et origan. Taille au choix.",
    en: "Crème fraîche base, mozzarella, bacon, onions, egg, olives and oregano. Any size.",
    es: "Base de nata fresca, mozzarella, bacon, cebollas, huevo, aceitunas y orégano. Tamaño a elegir.",
    it: "Base di panna fresca, mozzarella, pancetta, cipolle, uovo, olive e origano. Dimensione a scelta."
  },
  "item_pizzas-dii_name": {
    fr: "Pizza Dii",
    en: "Dii Pizza",
    es: "Pizza Dii",
    it: "Pizza Dii"
  },
  "item_pizzas-dii_desc": {
    fr: "Base sauce tomate, mozzarella, jambon, roquette, tomates cerises.",
    en: "Tomato sauce base, mozzarella, ham, arugula, cherry tomatoes.",
    es: "Base de salsa de tomate, mozzarella, jamón, rúcula, tomates cherry.",
    it: "Base di salsa di pomodoro, mozzarella, prosciutto, rucola, pomodorini."
  },
  "item_pizzas-supreme_kebab_name": {
    fr: "Pizza suprême kebab",
    en: "Supreme Kebab Pizza",
    es: "Pizza kebab suprema",
    it: "Pizza kebab suprema"
  },
  "item_pizzas-supreme_kebab_desc": {
    fr: "Base crème fraîche, mozzarella, kebab, tomates fraîches, oignons, sauce blanche, olives et origan.",
    en: "Crème fraîche base, mozzarella, kebab, fresh tomatoes, onions, white sauce, olives and oregano.",
    es: "Base de nata fresca, mozzarella, kebab, tomates frescos, cebollas, salsa blanca, aceitunas y orégano.",
    it: "Base di panna fresca, mozzarella, kebab, pomodori freschi, cipolle, salsa bianca, olive e origano."
  },
  "item_pizzas-nicoise_name": {
    fr: "Pizza niçoise",
    en: "Niçoise Pizza",
    es: "Pizza niçoise",
    it: "Pizza nizzarda"
  },
  "item_pizzas-nicoise_desc": {
    fr: "Base sauce tomate, mozzarella, thon, oignons, poivrons, œuf et olives.",
    en: "Tomato sauce base, mozzarella, tuna, onions, peppers, egg and olives.",
    es: "Base de salsa de tomate, mozzarella, atún, cebollas, pimientos, huevo y aceitunas.",
    it: "Base di salsa di pomodoro, mozzarella, tonno, cipolle, peperoni, uovo e olive."
  },
  "item_pizzas-chorizo_name": {
    fr: "Pizza chorizo",
    en: "Chorizo Pizza",
    es: "Pizza de chorizo",
    it: "Pizza al chorizo"
  },
  "item_pizzas-chorizo_desc": {
    fr: "Base sauce tomate, mozzarella, chorizo, champignons.",
    en: "Tomato sauce base, mozzarella, chorizo, mushrooms.",
    es: "Base de salsa de tomate, mozzarella, chorizo, champiñones.",
    it: "Base di salsa di pomodoro, mozzarella, chorizo, funghi."
  },
  "item_pizzas-texmex_name": {
    fr: "Pizza Tex Mex",
    en: "Tex Mex Pizza",
    es: "Pizza Tex Mex",
    it: "Pizza Tex Mex"
  },
  "item_pizzas-texmex_desc": {
    fr: "Base sauce tomate, mozzarella, chorizo, viande hâchée, poivrons.",
    en: "Tomato sauce base, mozzarella, chorizo, ground beef, peppers.",
    es: "Base de salsa de tomate, mozzarella, chorizo, carne picada, pimientos.",
    it: "Base di salsa di pomodoro, mozzarella, chorizo, carne macinata, peperoni."
  },
  "item_pizzas-chicken_name": {
    fr: "Pizza chicken",
    en: "Chicken Pizza",
    es: "Pizza de pollo",
    it: "Pizza pollo"
  },
  "item_pizzas-chicken_desc": {
    fr: "Base sauce tomate, mozzarella, poulet, champignons, oignons et origan.",
    en: "Tomato sauce base, mozzarella, chicken, mushrooms, onions and oregano.",
    es: "Base de salsa de tomate, mozzarella, pollo, champiñones, cebollas y orégano.",
    it: "Base di salsa di pomodoro, mozzarella, pollo, funghi, cipolle e origano."
  },
  "item_pizzas-fruits_de_mer_name": {
    fr: "Pizza fruits de mer",
    en: "Seafood Pizza",
    es: "Pizza de mariscos",
    it: "Pizza ai frutti di mare"
  },
  "item_pizzas-fruits_de_mer_desc": {
    fr: "Base sauce tomate, mozzarella, fruits de mer, persillade et origan.",
    en: "Tomato sauce base, mozzarella, seafood, parsley and oregano.",
    es: "Base de salsa de tomate, mozzarella, mariscos, perejil y orégano.",
    it: "Base di salsa di pomodoro, mozzarella, frutti di mare, prezzemolo e origano."
  },
  "item_pizzas-kebab_name": {
    fr: "Pizza kebab",
    en: "Kebab Pizza",
    es: "Pizza kebab",
    it: "Pizza kebab"
  },
  "item_pizzas-kebab_desc": {
    fr: "Base sauce tomate, mozzarella, kebab, oignons et origan.",
    en: "Tomato sauce base, mozzarella, kebab, onions and oregano.",
    es: "Base de salsa de tomate, mozzarella, kebab, cebollas y orégano.",
    it: "Base di salsa di pomodoro, mozzarella, kebab, cipolle e origano."
  },
  "item_pizzas-thon_name": {
    fr: "Pizza thon",
    en: "Tuna Pizza",
    es: "Pizza de atún",
    it: "Pizza tonno"
  },
  "item_pizzas-thon_desc": {
    fr: "Base sauce tomate, mozzarella, thon et origan.",
    en: "Tomato sauce base, mozzarella, tuna and oregano.",
    es: "Base de salsa de tomate, mozzarella, atún y orégano.",
    it: "Base di salsa di pomodoro, mozzarella, tonno e origano."
  },
  "item_pizzas-cannibale_name": {
    fr: "Pizza cannibale",
    en: "Cannibal Pizza",
    es: "Pizza caníbal",
    it: "Pizza cannibale"
  },
  "item_pizzas-cannibale_desc": {
    fr: "Base sauce tomate, mozzarella, viande hâchée, oignons et origan.",
    en: "Tomato sauce base, mozzarella, ground beef, onions and oregano.",
    es: "Base de salsa de tomate, mozzarella, carne picada, cebollas y orégano.",
    it: "Base di salsa di pomodoro, mozzarella, carne macinata, cipolle e origano."
  },
  "item_pizzas-vegetarienne_name": {
    fr: "Pizza végétarienne",
    en: "Vegetarian Pizza",
    es: "Pizza vegetariana",
    it: "Pizza vegetariana"
  },
  "item_pizzas-vegetarienne_desc": {
    fr: "Base sauce tomate, mozzarella, artichauts et champignons.",
    en: "Tomato sauce base, mozzarella, artichokes and mushrooms.",
    es: "Base de salsa de tomate, mozzarella, alcachofas y champiñones.",
    it: "Base di salsa di pomodoro, mozzarella, carciofi e funghi."
  },
  "item_pizzas-saumon_name": {
    fr: "Pizza saumon",
    en: "Salmon Pizza",
    es: "Pizza de salmón",
    it: "Pizza al salmone"
  },
  "item_pizzas-saumon_desc": {
    fr: "Base crème fraîche, mozzarella, saumon et olives.",
    en: "Crème fraîche base, mozzarella, salmon and olives.",
    es: "Base de nata fresca, mozzarella, salmón y aceitunas.",
    it: "Base di panna fresca, mozzarella, salmone e olive."
  },
  "item_pizzas-napoli_name": {
    fr: "Pizza Napoli",
    en: "Napoli Pizza",
    es: "Pizza napolitana",
    it: "Pizza Napoli"
  },
  "item_pizzas-napoli_desc": {
    fr: "Base sauce tomate, mozzarella, anchois et câpres.",
    en: "Tomato sauce base, mozzarella, anchovies and capers.",
    es: "Base de salsa de tomate, mozzarella, anchoas y alcaparras.",
    it: "Base di salsa di pomodoro, mozzarella, acciughe e capperi."
  },
  "item_pizzas-gorgonzola_name": {
    fr: "Pizza gorgonzola",
    en: "Gorgonzola Pizza",
    es: "Pizza gorgonzola",
    it: "Pizza gorgonzola"
  },
  "item_pizzas-gorgonzola_desc": {
    fr: "Base crème fraîche, mozzarella, jambon et gorgonzola.",
    en: "Crème fraîche base, mozzarella, ham and gorgonzola.",
    es: "Base de nata fresca, mozzarella, jamón y gorgonzola.",
    it: "Base di panna fresca, mozzarella, prosciutto e gorgonzola."
  },
  "item_pizzas-4_fromages_name": {
    fr: "Pizza 4 fromages",
    en: "Four Cheese Pizza",
    es: "Pizza 4 quesos",
    it: "Pizza 4 formaggi"
  },
  "item_pizzas-4_fromages_desc": {
    fr: "Base sauce tomate, mozzarella et 4 fromages.",
    en: "Tomato sauce base, mozzarella and four cheeses.",
    es: "Base de salsa de tomate, mozzarella y 4 quesos.",
    it: "Base di salsa di pomodoro, mozzarella e 4 formaggi."
  },
  "item_pizzas-calzone_name": {
    fr: "Pizza calzone",
    en: "Calzone Pizza",
    es: "Pizza calzone",
    it: "Pizza calzone"
  },
  "item_pizzas-calzone_desc": {
    fr: "Base sauce tomate, mozzarella, champignons et jambon.",
    en: "Tomato sauce base, mozzarella, mushrooms and ham.",
    es: "Base de salsa de tomate, mozzarella, champiñones y jamón.",
    it: "Base di salsa di pomodoro, mozzarella, funghi e prosciutto."
  },
  "item_pizzas-4_saisons_name": {
    fr: "Pizza 4 saisons",
    en: "Four Seasons Pizza",
    es: "Pizza cuatro estaciones",
    it: "Pizza quattro stagioni"
  },
  "item_pizzas-4_saisons_desc": {
    fr: "Base sauce tomate, mozzarella, jambon et champignons.",
    en: "Tomato sauce base, mozzarella, ham and mushrooms.",
    es: "Base de salsa de tomate, mozzarella, jamón y champiñones.",
    it: "Base di salsa di pomodoro, mozzarella, prosciutto e funghi."
  },
  "item_pizzas-reine_name": {
    fr: "Pizza Reine",
    en: "Queen Pizza",
    es: "Pizza reina",
    it: "Pizza Regina"
  },
  "item_pizzas-reine_desc": {
    fr: "Base sauce tomate, mozzarella, jambon et champignons.",
    en: "Tomato sauce base, mozzarella, ham and mushrooms.",
    es: "Base de salsa de tomate, mozzarella, jamón y champiñones.",
    it: "Base di salsa di pomodoro, mozzarella, prosciutto e funghi."
  },
  "item_pizzas-margherita_name": {
    fr: "Pizza Margherita",
    en: "Margherita Pizza",
    es: "Pizza Margarita",
    it: "Pizza Margherita"
  },
  "item_pizzas-margherita_desc": {
    fr: "Base sauce tomate, mozzarella, olives et origan.",
    en: "Tomato sauce base, mozzarella, olives and oregano.",
    es: "Base de salsa de tomate, mozzarella, aceitunas y orégano.",
    it: "Base di salsa di pomodoro, mozzarella, olive e origano."
  },
// -------- MENUS TACOS (suite) --------

"item_menus-tacos-menu_tacos_1_viande_name": {
  fr: "Menu tacos 1 viande",
  en: "1 Meat Tacos Menu",
  es: "Menú tacos 1 carne",
  it: "Menu tacos 1 carne"
},
"item_menus-tacos-menu_tacos_1_viande_desc": {
  fr: "1 viande + 1 sauce. Servi avec frites + boisson 33 cl.",
  en: "1 meat + 1 sauce. Served with fries + 33cl drink.",
  es: "1 carne + 1 salsa. Servido con patatas y bebida 33cl.",
  it: "1 carne + 1 salsa. Servito con patatine e bibita da 33cl."
},

"item_menus-tacos-menu_tacos_2_viandes_name": {
  fr: "Menu tacos 2 viandes",
  en: "2 Meats Tacos Menu",
  es: "Menú tacos 2 carnes",
  it: "Menu tacos 2 carni"
},
"item_menus-tacos-menu_tacos_2_viandes_desc": {
  fr: "2 viandes + 1 sauce. Servi avec frites + boisson 33 cl.",
  en: "2 meats + 1 sauce. Served with fries + 33cl drink.",
  es: "2 carnes + 1 salsa. Servido con patatas y bebida 33cl.",
  it: "2 carni + 1 salsa. Servito con patatine e bibita da 33cl."
},
"item_menus-tacos-menu_tacos_3_viandes_name": {
  fr: "Menu tacos 3 viandes",
  en: "3 Meats Tacos Menu",
  es: "Menú tacos 3 carnes",
  it: "Menu tacos 3 carni"
},
"item_menus-tacos-menu_tacos_3_viandes_desc": {
  fr: "3 viandes + 1 sauce. Servi avec frites + boisson 33 cl.",
  en: "3 meats + 1 sauce. Served with fries + 33cl drink.",
  es: "3 carnes + 1 salsa. Servido con patatas y bebida 33cl.",
  it: "3 carni + 1 salsa. Servito con patatine e bibita da 33cl."
},
"item_menus-tacos-tacos_1_viande_name": {
  fr: "Tacos 1 viande",
  en: "Tacos 1 Meat",
  es: "Tacos 1 carne",
  it: "Tacos 1 carne"
},
"item_menus-tacos-tacos_1_viande_desc": {
  fr: "1 viande au choix.",
  en: "1 meat of your choice.",
  es: "1 carne a elegir.",
  it: "1 carne a scelta."
},
"item_menus-tacos-tacos_2_viandes_name": {
  fr: "Tacos 2 viandes",
  en: "Tacos 2 Meats",
  es: "Tacos 2 carnes",
  it: "Tacos 2 carni"
},
"item_menus-tacos-tacos_2_viandes_desc": {
  fr: "2 viandes au choix.",
  en: "2 meats of your choice.",
  es: "2 carnes a elegir.",
  it: "2 carni a scelta."
},
"item_menus-tacos-tacos_3_viandes_name": {
  fr: "Tacos 3 viandes",
  en: "Tacos 3 Meats",
  es: "Tacos 3 carnes",
  it: "Tacos 3 carni"
},
"item_menus-tacos-tacos_3_viandes_desc": {
  fr: "3 viandes au choix.",
  en: "3 meats of your choice.",
  es: "3 carnes a elegir.",
  it: "3 carni a scelta."
},

// -------- TEX MEX --------
"item_tex-mex-mix_tapas_name": {
  fr: "Mix tapas",
  en: "Tapas Mix",
  es: "Mix de tapas",
  it: "Mix tapas"
},
"item_tex-mex-mix_tapas_desc": {
  fr: "2 wings, 4 nuggets, 2 tenders, 4 onion rings, 1 sauce au choix et 4 sticks mozzarella.",
  en: "2 wings, 4 nuggets, 2 tenders, 4 onion rings, 1 sauce of your choice, and 4 mozzarella sticks.",
  es: "2 alitas, 4 nuggets, 2 tenders, 4 aros de cebolla, 1 salsa a elegir y 4 palitos de mozzarella.",
  it: "2 ali di pollo, 4 nuggets, 2 tenders, 4 anelli di cipolla, 1 salsa a scelta e 4 bastoncini di mozzarella."
},
"item_tex-mex-stick_mozza_name": {
  fr: "Stick mozza",
  en: "Mozzarella Stick",
  es: "Palito de mozzarella",
  it: "Stick di mozzarella"
},
"item_tex-mex-stick_mozza_desc": {
  fr: "Sauce au choix, 5 pièces.",
  en: "Sauce of your choice, 5 pieces.",
  es: "Salsa a elegir, 5 unidades.",
  it: "Salsa a scelta, 5 pezzi."
},
"item_tex-mex-tenders_name": {
  fr: "Tenders",
  en: "Chicken Tenders",
  es: "Tiras de pollo",
  it: "Tenders di pollo"
},
"item_tex-mex-tenders_desc": {
  fr: "Sauce au choix, 4 pièces.",
  en: "Sauce of your choice, 4 pieces.",
  es: "Salsa a elegir, 4 unidades.",
  it: "Salsa a scelta, 4 pezzi."
},
"item_tex-mex-mini_camembert_pane_name": {
  fr: "Mini camembert pané",
  en: "Mini Breaded Camembert",
  es: "Mini camembert empanado",
  it: "Mini camembert impanato"
},
"item_tex-mex-mini_camembert_pane_desc": {
  fr: "Sauce au choix, 5 pièces.",
  en: "Sauce of your choice, 5 pieces.",
  es: "Salsa a elegir, 5 unidades.",
  it: "Salsa a scelta, 5 pezzi."
},
"item_tex-mex-onion_rings_name": {
  fr: "Onion rings",
  en: "Onion Rings",
  es: "Aros de cebolla",
  it: "Anelli di cipolla"
},
"item_tex-mex-onion_rings_desc": {
  fr: "Sauce au choix, 5 pièces.",
  en: "Sauce of your choice, 5 pieces.",
  es: "Salsa a elegir, 5 unidades.",
  it: "Salsa a scelta, 5 pezzi."
},
"item_tex-mex-wings_name": {
  fr: "Wings",
  en: "Chicken Wings",
  es: "Alitas de pollo",
  it: "Ali di pollo"
},
"item_tex-mex-wings_desc": {
  fr: "Sauce au choix, 5 pièces.",
  en: "Sauce of your choice, 5 pieces.",
  es: "Salsa a elegir, 5 unidades.",
  it: "Salsa a scelta, 5 pezzi."
},
"item_tex-mex-nuggets_name": {
  fr: "Nuggets",
  en: "Nuggets",
  es: "Nuggets",
  it: "Nuggets"
},
"item_tex-mex-nuggets_desc": {
  fr: "Sauce au choix, 5 pièces.",
  en: "Sauce of your choice, 5 pieces.",
  es: "Salsa a elegir, 5 unidades.",
  it: "Salsa a scelta, 5 pezzi."
},
"item_tex-mex-frite_maison_name": {
  fr: "Frite maison",
  en: "Homemade Fries",
  es: "Patatas fritas caseras",
  it: "Patatine fatte in casa"
},
"item_tex-mex-frite_maison_desc": {
  fr: "Petite portion.",
  en: "Small portion.",
  es: "Porción pequeña.",
  it: "Porzione piccola."
},

// -------- DESSERTS & GLACES --------
"item_desserts-glaces-brownie_name": {
  fr: "Brownie",
  en: "Brownie",
  es: "Brownie",
  it: "Brownie"
},
"item_desserts-glaces-brownie_desc": {
  fr: "Gâteau fondant au chocolat et noix « gâteau emblématique de l'Amérique ».",
  en: "Moist chocolate and walnut cake — an American classic.",
  es: "Bizcocho de chocolate y nueces, el pastel emblemático de América.",
  it: "Torta al cioccolato e noci, il dolce simbolo dell’America."
},
"item_desserts-glaces-pizza_nutella_name": {
  fr: "Pizza Nutella",
  en: "Nutella Pizza",
  es: "Pizza de Nutella",
  it: "Pizza alla Nutella"
},
"item_desserts-glaces-pizza_nutella_desc": {
  fr: "",
  en: "",
  es: "",
  it: ""
},
"item_desserts-glaces-tiramisu_name": {
  fr: "Tiramisu",
  en: "Tiramisu",
  es: "Tiramisú",
  it: "Tiramisù"
},
"item_desserts-glaces-tiramisu_desc": {
  fr: "Dessert fondant à base de mascarpone, biscuit, café…",
  en: "Soft dessert with mascarpone, biscuit and coffee.",
  es: "Postre cremoso a base de mascarpone, bizcocho y café.",
  it: "Dessert morbido a base di mascarpone, biscotto e caffè."
},
"item_desserts-glaces-cheesecake_name": {
  fr: "Cheesecake",
  en: "Cheesecake",
  es: "Tarta de queso",
  it: "Cheesecake"
},
"item_desserts-glaces-cheesecake_desc": {
  fr: "Dessert sucré au cream cheese sur un lit de miettes…",
  en: "Sweet dessert with cream cheese on a cookie base.",
  es: "Postre dulce de queso crema sobre una base de galleta.",
  it: "Dolce al formaggio su base di biscotto."
},
"item_desserts-glaces-tarte_au_daim_name": {
  fr: "Tarte au Daim",
  en: "Daim Tart",
  es: "Tarta de Daim",
  it: "Crostata Daim"
},
"item_desserts-glaces-tarte_au_daim_desc": {
  fr: "Tarte sablée, crème aux Daims et ganache chocolat.",
  en: "Shortcrust tart, Daim cream and chocolate ganache.",
  es: "Tarta de masa sableada, crema de Daim y ganache de chocolate.",
  it: "Crostata sablé, crema Daim e ganache al cioccolato."
},
"item_desserts-glaces-muffin_name": {
  fr: "Muffin",
  en: "Muffin",
  es: "Muffin",
  it: "Muffin"
},
"item_desserts-glaces-muffin_desc": {
  fr: "Petit gâteau moelleux anglo-saxon.",
  en: "Small soft Anglo-Saxon cake.",
  es: "Pastelito blando de origen anglosajón.",
  it: "Dolcetto soffice di origine anglosassone."
},
"item_desserts-glaces-haagen_dazs_name": {
  fr: "Häagen-Dazs",
  en: "Häagen-Dazs",
  es: "Häagen-Dazs",
  it: "Häagen-Dazs"
},
"item_desserts-glaces-haagen_dazs_desc": {
  fr: "Taille au choix.",
  en: "Size of your choice.",
  es: "Tamaño a elegir.",
  it: "Dimensione a scelta."
},

// --- ACCOMPAGNEMENTS ---
"item_accompagnements-frites_cheddar_name": {
  fr: "Frites cheddar",
  en: "Cheddar Fries",
  es: "Fritas con cheddar",
  it: "Patatine al cheddar"
},
"item_accompagnements-frites_cheddar_desc": {
  fr: "Pommes de terre maison, cheddar fondant.",
  en: "Homemade potatoes, melted cheddar.",
  es: "Patatas caseras, cheddar fundido.",
  it: "Patate fatte in casa, cheddar fuso."
},

"item_accompagnements-potatoes_name": {
  fr: "Potatoes",
  en: "Potato Wedges",
  es: "Gajos de patata",
  it: "Patate a spicchi"
},
"item_accompagnements-potatoes_desc": {
  fr: "Pommes de terre rôties aux herbes.",
  en: "Herb-roasted potatoes.",
  es: "Patatas asadas con hierbas.",
  it: "Patate arrosto alle erbe."
},

"item_accompagnements-frites_maison_name": {
  fr: "Frites maison",
  en: "Homemade Fries",
  es: "Patatas fritas caseras",
  it: "Patatine fatte in casa"
},
"item_accompagnements-frites_maison_desc": {
  fr: "Frites coupées main, croustillantes à souhait.",
  en: "Hand-cut fries, perfectly crispy.",
  es: "Patatas fritas cortadas a mano, muy crujientes.",
  it: "Patatine tagliate a mano, croccanti al punto giusto."
},


// -------- MENU SANDWICHES --------
"item_menu-sandwiches-club_sandwich_name": {
  fr: "Club Sandwich",
  en: "Club Sandwich",
  es: "Club sandwich",
  it: "Club sandwich"
},
"item_menu-sandwiches-club_sandwich_desc": {
  fr: "Poulet, bacon, salade, tomate, sauce mayo.",
  en: "Chicken, bacon, lettuce, tomato, mayo sauce.",
  es: "Pollo, bacon, lechuga, tomate, salsa mayonesa.",
  it: "Pollo, bacon, lattuga, pomodoro, salsa maionese."
},
"item_menu-sandwiches-panini_poulet_name": {
  fr: "Panini Poulet",
  en: "Chicken Panini",
  es: "Panini de pollo",
  it: "Panino al pollo"
},
"item_menu-sandwiches-panini_poulet_desc": {
  fr: "Poulet grillé, mozzarella, pesto.",
  en: "Grilled chicken, mozzarella, pesto.",
  es: "Pollo a la plancha, mozzarella, pesto.",
  it: "Pollo alla griglia, mozzarella, pesto."
},
"item_menu-sandwiches-sandwich_jambon_beurre_name": {
  fr: "Sandwich Jambon Beurre",
  en: "Ham & Butter Sandwich",
  es: "Bocadillo jamón-mantequilla",
  it: "Panino prosciutto e burro"
},
"item_menu-sandwiches-sandwich_jambon_beurre_desc": {
  fr: "Jambon blanc, beurre, cornichons.",
  en: "White ham, butter, pickles.",
  es: "Jamón cocido, mantequilla, pepinillos.",
  it: "Prosciutto cotto, burro, cetriolini."
},
"item_menu-sandwiches-sandwich_veggie_name": {
  fr: "Sandwich Veggie",
  en: "Veggie Sandwich",
  es: "Bocadillo vegetal",
  it: "Panino vegetariano"
},
"item_menu-sandwiches-sandwich_veggie_desc": {
  fr: "Légumes grillés, fromage frais, roquette.",
  en: "Grilled vegetables, fresh cheese, arugula.",
  es: "Verduras a la plancha, queso fresco, rúcula.",
  it: "Verdure grigliate, formaggio fresco, rucola."
},
  // --- CATÉGORIES ---
  "category_salades": {
    fr: "Salades",
    en: "Salads",
    es: "Ensaladas",
    it: "Insalate"
  },
  "category_menus-burger": {
    fr: "Menus Burger",
    en: "Burger Menus",
    es: "Menús Burger",
    it: "Menu Burger"
  },
  "category_pizzas": {
    fr: "Pizzas",
    en: "Pizzas",
    es: "Pizzas",
    it: "Pizze"
  },
  "category_accompagnements": {
    fr: "Accompagnements",
    en: "Sides",
    es: "Acompañamientos",
    it: "Contorni"
  },
  "category_boissons": {
    fr: "Boissons",
    en: "Drinks",
    es: "Bebidas",
    it: "Bevande"
  },
  "category_menus-tacos": {
    fr: "Menus Tacos",
    en: "Tacos Menus",
    es: "Menús Tacos",
    it: "Menu Tacos"
  },
  "category_tex-mex": {
    fr: "Tex Mex",
    en: "Tex Mex",
    es: "Tex Mex",
    it: "Tex Mex"
  },
  "category_desserts-glaces": {
    fr: "Desserts & Glaces",
    en: "Desserts & Ice Cream",
    es: "Postres y Helados",
    it: "Dessert & Gelati"
  },
  "category_menu-sandwiches": {
    fr: "Menu Sandwiches",
    en: "Sandwich Menus",
    es: "Menús de Sándwiches",
    it: "Menu Sandwich"
  }
};
let currentLang = localStorage.getItem('arfood_lang') || "fr";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    // Fallback FR si clé manquante
    if (i18n[key]) {
      el.textContent = i18n[key][currentLang] || i18n[key]['fr'] || el.textContent;
    }
  });
}

// ─── 1) Préloader ─────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    pre.style.transition = 'opacity 0.5s ease';
    pre.style.opacity = '0';
    setTimeout(() => pre.remove(), 500);
  }, 3000);
});

// ─── 2) Dynamique : fetch + render + navigation ───────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const grid     = document.getElementById('menu-grid');
  const sections = document.querySelectorAll('.carousel-section');
  const langBtn  = document.getElementById('lang-dropdown-toggle');
  const wrapper  = document.getElementById('lang-toggle-wrapper');
  const menu     = document.getElementById('lang-menu');
  const flagSpan = langBtn?.querySelector('.lang-flag');
  const arrow    = langBtn?.querySelector('.arrow');

  
  
  // ── 2.0) Dropdown langue ────────────────────────────────────────────────────
  if (langBtn && wrapper && menu && flagSpan && arrow) {
    // a) Ouvrir / fermer
    langBtn.addEventListener('click', e => {
      e.stopPropagation();
      const willOpen = menu.hidden;
      menu.hidden = !willOpen;
      wrapper.setAttribute('aria-expanded', willOpen);
      langBtn.setAttribute('aria-expanded', willOpen);
      arrow.textContent = willOpen ? '▲' : '▼';
    });

    // b) Swap sur choix d'une langue
    menu.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();

        // --- SWAP drapeaux & data ---
        // Ce qui était affiché
        const oldLang   = flagSpan.dataset.lang || "fr";
        const oldFlag   = flagSpan.textContent;
        const oldLabel  = flagSpan.getAttribute('aria-label');

        // Ce qui vient d'être cliqué
        const newLang   = btn.dataset.lang;
        const newFlagEl = btn.querySelector('.flag-icon');
        const newFlag   = newFlagEl.textContent;
        const newLabel  = newFlagEl.getAttribute('aria-label');

        // SWAP flag principal <-> flag bouton
        flagSpan.textContent          = newFlag;
        flagSpan.setAttribute('aria-label', newLabel);
        flagSpan.dataset.lang         = newLang;

        newFlagEl.textContent         = oldFlag;
        newFlagEl.setAttribute('aria-label', oldLabel);
        btn.dataset.lang              = oldLang;

        // Met à jour la langue, la sauvegarde et ferme le menu
        currentLang = newLang;
        localStorage.setItem('arfood_lang', currentLang); // Sauvegarde
        menu.hidden = true;
        wrapper.setAttribute('aria-expanded', false);
        langBtn.setAttribute('aria-expanded', false);
        arrow.textContent = '▼';
        translatePage();
      });
    });

    // c) Clic en dehors pour fermer
    document.addEventListener('click', e => {
      if (!wrapper.contains(e.target) && !menu.hidden) {
        menu.hidden = true;
        wrapper.setAttribute('aria-expanded', false);
        langBtn.setAttribute('aria-expanded', false);
        arrow.textContent = '▼';
      }
    });
  }

  // ── 2.1) Fetch des catégories ───────────────────────────────────────────────
  fetch('categories.json')
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .then(cats => {
      renderCategories(cats);
      attachCategoryEvents();
      sections.forEach(s => s.classList.remove('active'));
      grid.style.display = 'grid';
      translatePage(); // Traduction immédiate après fetch
    })
    .catch(err => console.error('Erreur fetch categories :', err));

  // 2.2) Affichage des catégories
  function renderCategories(categories) {
    grid.innerHTML = '';
    categories.forEach(cat => {
      const slug = cat.id.toLowerCase().replace(/\s+/g,'-').replace(/_/g,'-');
      const a = document.createElement('a');
      a.href      = `#${slug}`;
      a.className = 'menu-card';
      a.innerHTML = `
        <img src="${cat.imageUrl}" alt="${cat.label}">
        <span data-i18n="category_${slug}">${cat.label}</span>
      `;
      grid.appendChild(a);
    });
  }

  // 2.3) Interactions carte→section + carousels + filtres
  function attachCategoryEvents() {
    grid.querySelectorAll('.menu-card').forEach(card => {
      card.addEventListener('click', e => {
        e.preventDefault();
        grid.style.display = 'none';
        sections.forEach(s => s.classList.remove('active'));
        const id  = card.getAttribute('href').slice(1);
        const sec = document.getElementById(id);
        if (!sec) return;
        sec.classList.add('active');
        window.scrollTo(0,0);
        // reset carousel
        const track = sec.querySelector('.menu-items');
        if (track) track.scrollTo({ left: 0, behavior: 'instant' });
        translatePage();

        // filtre Chaud/Froid pour sandwiches
        (function(){
          const section = sec.querySelector('#menu-sandwiches');
          if (!section) return;
          const toggleBtns = section.querySelectorAll('.sandwich-toggle-btn');
          const cards      = section.querySelectorAll('.menu-item-card');
          toggleBtns.forEach(btn => btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.toggle('active', b===btn));
            const filter = btn.dataset.filter;
            cards.forEach(c => c.style.display = c.dataset.type===filter ? '' : 'none');
            translatePage(); // Si boutons dynamiques
          }));
          const activeBtn = section.querySelector('.sandwich-toggle-btn.active');
          if(activeBtn) activeBtn.click();
        })();
      });
    });

    // Bouton retour
    document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sections.forEach(s => s.classList.remove('active'));
        grid.style.display = 'grid';
        window.scrollTo(0,0);
        translatePage();
      });
    });

    // Navigation flèches
    sections.forEach(sec => {
      const track = sec.querySelector('.menu-items');
      const prev  = sec.querySelector('.prev-btn');
      const next  = sec.querySelector('.next-btn');
      if (prev) prev.addEventListener('click', () => {
        track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
      });
      if (next) next.addEventListener('click', () => {
        track.scrollBy({ left:  track.clientWidth * 0.8, behavior: 'smooth' });
      });
    });
  }

  // Appel initial pour la bonne langue au chargement !
  translatePage();
});

// ─── 3) Toggle “Avec menu” / “Sans menu” global pour Tacos & Burgers ─────────────
// Tacos
document.querySelectorAll('#menus-tacos .sandwich-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#menus-tacos .sandwich-toggle-btn')
            .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#menus-tacos .menu-item-card')
            .forEach(card => card.style.display = card.dataset.type===filter ? '' : 'none');
    translatePage();
  });
});
// Burgers
(function(){
  const section = document.getElementById('menus-burger');
  if (!section) return;
  const btns  = section.querySelectorAll('.sandwich-toggle-btn');
  const cards = section.querySelectorAll('.menu-item-card');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.toggle('active', b===btn));
    const filter = btn.dataset.filter;
    cards.forEach(c => c.style.display = c.dataset.type===filter ? 'flex' : 'none');
    translatePage();
  }));
  const activeBtn = section.querySelector('.sandwich-toggle-btn.active');
  if(activeBtn) activeBtn.click();
})();
