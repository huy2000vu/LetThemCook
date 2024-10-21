import { useEffect, useState } from "react";
import "./App.css";
import "/src/index.css";
import NavBar from "./Components/NavBar";
import SelectedIngredients from "./Components/SelectedIngredients";
import RecipeCard from "./Components/RecipeCard";

// const apikey = import.meta.VITE_APP_API_KEY;
const api_key = import.meta.env.VITE_APP_API_KEY;
const ingredients = `5 spice powder;1002002
acorn squash;11482
adobo sauce;6979
agave nectar;19912
ahi tuna;15117
alfredo pasta sauce;93606
almond extract;1002050
almond flour;93740
almond milk;93607
almonds;12061
amaretto;10014534
ancho chiles;10211962
anchovies;15001
andouille sausage;7064
angel food cake mix;18087
angel hair pasta;10020420
angostura bitters;93653
apple;9003
apple butter spread;19294
apple cider;1009016
apple juice;9016
apple pie spice;1042035
apricot preserves;19719
apricots;9021
arborio rice;10020052
arrowroot powder;20003
artichoke heart quarters;93828
artichokes;11007
arugula;11959
asafoetida;1032035
asafoetida powder;0
asiago cheese;1001033
asian pear;9252
asparagus spears;11011
avocado;9037
avocado oil;4581
baby bell peppers;10311821
baby bok choy;93636
baby carrots;11960
baby corn;10011168
baby spinach leaves;11457
baby-back ribs;10010204
baby-back ribs;10192
bacon;10123
bacon fat;4609
baguette;18033
baking bar;19078
baking powder;18371
baking soda;18372
balsamic glaze;98998
balsamic vinegar;2069
bamboo shoots;11028
banana;9040
basmati rice;10020444
bay leaves;2004
bbq sauce;6150
beans;16069
beef;23572
beef brisket;13023
beef broth;6008
beef chuck roast;13786
beef stock;6170
beef tenderloin;13926
beer;14003
beer;14006
beets;11080
bell pepper;10211821
berries;1009054
biscuit mix;18010
biscuits;18009
bittersweet chocolate;19903
black bean sauce;99210
black beans;16015
black olives;1059195
black pepper;1002030
black sesame seeds;10012023
blackberries;9042
blanched almonds;12062
blood orange;1009200
blue cheese;1004
blueberries;9050
bok choy;11116
boneless skinless chicken breast;1055062
bourbon;10014037
brandy;10114037
bread;18064
bread flour;10120129
breakfast links;7919
brie;1006
broccoli;11090
broccoli florets;10011090
brown rice;20040
brown rice flour;20090
brown sugar;19334
brownie mix;18632
brussel sprouts;11098
bulgur;20012
butter;1001
butterhead lettuce;11250
buttermilk;1230
butternut squash;11485
butterscotch chips;19070
cabbage;11109
caesar dressing;43015
cajun seasoning;1032028
cake flour;10020129
candy canes;93759
candy coating;98857
candy melts;93775
canned black beans;16018
canned diced tomatoes;11531
canned garbanzo beans;16058
canned green chiles;11980
canned kidney beans;16034
canned mushrooms;11264
canned pinto beans;16044
canned red kidney beans;10016034
canned tomatoes;10011693
canned tuna;10115121
canned white beans;16051
canned white cannellini beans;10016051
cannellini beans;10716050
cantaloupe;9181
capers;2054
caramel sauce;19364
caramels;19074
caraway seed;2005
cardamom;2006
cardamom pods;1002006
carp;15008
carrots;11124
cat fish filets;15010
cauliflower;11135
cauliflower florets;10011135
cauliflower rice;10111135
celery;11143
celery ribs;10111143
celery root;11141
celery salt;1052047
celery seed;2007
cereal;8029
champagne;10043155
chana dal;99236
cheddar;1009
cheese;1041009
cheese curds;98921
cheese dip;1188
cheese soup;6038
cheese tortellini;10093727
cherry;9070
cherry pie filling;19314
cherry tomatoes;10311529
chestnuts;12098
chia seeds;12006
chicken base;6080
chicken bouillon;6480
chicken bouillon granules;1006080
chicken breasts;5062
chicken broth;6194
chicken drumsticks;5066
chicken legs;5075
chicken pieces;1005006
chicken sausage;93668
chicken stock;6172
chicken tenders;1015062
chicken thighs;5091
chicken wings;5100
chickpea;16057
chile garlic sauce;93749
chili paste;6973
chili peppers;11962
chili powder;2009
chili sauce;6972
chipotle chiles in adobo;11632
chipotle chilies;98839
chipotle peppers in adobo;99223
chive & onion cream cheese spread;93748
chocolate;19081
chocolate chip cookies;28027
chocolate chunks;10419903
chocolate ice cream;19270
chocolate milk;1102
chocolate sandwich cookies;18166
chocolate syrup;14181
chocolate wafer cookies;10118157
chorizo sausage;7019
cider vinegar;2048
cilantro;11165
cinnamon roll;99020
cinnamon stick;1002010
cinnamon sugar;10219335
cinnamon swirl bread;18047
clam juice;14187
clams;15157
clarified butter;93632
clove;1002011
coarse salt;1002047
coarsely ground pepper;2035
cocoa nibs;98846
cocoa powder;19165
coconut;12104
coconut aminos;98929
coconut butter;93746
coconut cream;12115
coconut extract;1032050
coconut flour;93747
coconut milk;12118
coconut oil;4047
coconut water;12119
cod;15015
coffee;14209
cognac;10414037
cola;14400
colby jack;1011
collard greens;11161
condensed cream of celery soup;6010
condensed cream of mushroom soup;6147
confectioner's swerve;99084
cooked bacon;10862
cooked brown rice;20041
cooked chicken breast;5064
cooked ham;10802
cooked long grain rice;10220445
cooked pasta;20421
cooked polenta;1008166
cooked quinoa;20137
cooked wild rice;20088
cookies;10118192
coriander;2012
corn;11168
corn bread mix;18022
corn chips;19003
corn flakes cereal;8020
corn flour;20019
corn kernels;11172
corn oil;42289
corn tortillas;18363
cornbread;18023
corned beef;13346
cornish hens;5307
cornmeal;35137
cornstarch;20027
cotija cheese;1001019
cottage cheese;1012
country bread;10018029
courgettes;11477
couscous;20028
cow pea;16063
crabmeat;10015136
cracked pepper;2030
cranberries;9078
cranberry juice;43382
cream;1053
cream cheese;1017
cream cheese block;1186
cream of chicken soup;6016
cream of tartar;18373
creamed corn;11174
creamy peanut butter;10116098
creme fraiche;1001056
cremini mushrooms;11266
creole seasoning;1002031
crisp rice cereal;8066
croutons;18242
crystallized ginger;93751
cucumber;11206
cumin seeds;2014
cup cake;18139
currants;9085
curry leaves;93604
dairy free milk;10016223
dark brown sugar;10019334
dark chocolate;19904
dark chocolate candy bars;10019904
dark chocolate chips;10019071
dark sesame oil;1004058
dates;9087
deep dish pie crust;18945
deli ham;10010151
deli turkey;7259
dessert oats;8121
dessert wine;10014057
diced ham;99186
diet pop;14146
dijon mustard;1002046
dill;2045
dill pickles;10011937
hot dog;21118
double cream;1011053
dried apricots;9032
dried basil;2003
dried cherries;93822
dried chorizo;99233
dried cranberries;9079
dried dill;2017
dried onion;11284
dried porcini mushrooms;10011268
dried rubbed sage;1002038
dried thyme;2042
dried tomatoes;11955
dry bread crumbs;18079
dry milk;1090
dry mustard;1002024
dry red wine;14097
dry roasted peanuts;16090
duck fat;4574
dutch process cocoa powder;10019165
edamame;11212
egg substitute;1226
egg vermicelli;20409
egg whites;1124
egg yolk;1125
eggnog;1057
eggplant;11209
elbow macaroni;10120499
enchilada sauce;6599
english cucumber;10111205
english muffin;18439
erythritol;98887
escarole;11213
espresso;14210
evaporated milk;1214
extra firm tofu;16163
extra virgin olive oil;1034053
farfalle;10120420
farro;10020005
fat free mayo;42193
fat-free less-sodium chicken broth;6984
fennel;11957
fennel seeds;2018
fenugreek leaf;98963
fenugreek seeds;2019
feta cheese;1019
fettuccine;10020409
fire roasted tomatoes;98849
fish;10115261
fish sauce;6179
fish stock;6963
flank steak;23657
flax seeds;10012220
fleur de sel;1022047
flour;20081
flour tortillas;10218364
fontina cheese;1020
food dye;10711111
frank's redhot sauce;98878
free range eggs;1123
french bread;18029
fresh basil;2044
fresh bean sprouts;11043
fresh chives;11156
fresh corn;11167
fresh corn kernels;10011167
fresh figs;9089
fresh fruit;9431
fresh herbs;10111297
fresh mint;2064
fresh mozzarella;1026
fresh rosemary;2063
fresh thyme leaves;2049
fried onions;93709
frosting;19230
froyo bars;93629
frozen corn;11913
frozen spinach;11463
fudge;19100
fudge topping;10019348
fun size almond joy bar;19065
garam masala;93663
garbanzo bean flour;16157
garlic;11215
garlic paste;10111215
garlic powder;1022020
garlic powder;2020
garlic salt;1062047
gelatin;19177
gf chocolate cake mix;99040
gin;10514037
ginger;11216
ginger ale;14136
ginger paste;93754
ginger-garlic paste;10093754
gingersnap cookies;18172
gnocchi;98853
goat cheese;1159
golden raisins;9297
gorgonzola;1011004
gouda cheese;1022
graham cracker crumbs;10018617
graham cracker pie crust;18942
graham crackers;18617
grain blend;10020088
grand marnier;10314534
granny smith apples;1089003
granola;8212
granulated garlic;1002020
grape tomatoes;10111529
grapefruit;9112
grapeseed oil;4517
gravy;6997
great northern beans;16025
greek yogurt;1256
green beans;11052
green bell pepper;11333
green chili pepper;31015
green food coloring;1441111
green grapes;1019132
green olives;1029195
green onions;11291
greens;21052
grill cheese;10093624
grill seasoning;1022034
ground allspice;2001
ground ancho chili;1022009
ground beef;10023572
ground chicken;5332
ground chipotle chile pepper;1052009
ground cinnamon;1012010
ground cinnamon;2010
ground cloves;2011
ground coriander seeds;1002013
ground cumin;1002014
ground flaxseed;12220
ground ginger;2021
ground lamb;17224
ground mace;2022
ground nutmeg;2025
ground pork;10219
ground pork sausage;7063
ground veal;17142
gruyere;1023
guacamole;1009037
half n half;1049
halibut fillet;15036
ham;10151
hamburger buns;18350
hard cooked eggs;1129
harissa;1006972
hash brown potatoes;11390
hazelnuts;12120
healthy request cream of celery soup;6987
hemp seeds;93602
herbes de provence;1012042
herbs;1002044
hershey's kisses brand milk chocolates;93743
hoisin sauce;6175
honey mustard;99227
horseradish;1002055
hot sauce;6168
hummus;16158
ice;10014412
ice cream;19095
instant chocolate pudding mix;19184
instant coffee powder;14214
instant espresso powder;10014214
instant lemon pudding mix;19332
instant yeast;10118375
irish cream;93764
italian bread;10028033
italian cheese blend;93651
italian sausages;7036
italian seasoning;1022027
jaggery;99002
jalapeno;11979
jasmine rice;10120444
jelly;19297
jicama;11603
jimmies;93645
juice;1019016
jumbo shell pasta;10520420
kaffir lime leaves;93633
kahlua;93716
kalamata olives;1009195
kale;11233
ketchup;11935
kitchen bouquet;93768
kiwis;9148
kosher salt;1082047
ladyfingers;18423
lamb;10017224
lasagna noodles;10620420
lb cake;18133
lean ground beef;23557
lean ground turkey;5662
lean pork tenderloin;10060
leeks;11246
leg of lamb;17013
lemon;9150
lemon curd;93834
lemon extract;12311111
lemon juice;9152
lemon peel;9156
lemon pepper;1012030
lemon wedges;1029150
lemongrass;11972
lettuce;11252
lettuce leaves;93623
light butter;4602
light coconut milk;99009
light corn syrup;19350
light cream cheese;43274
light mayonnaise;4641
light olive oil;1054053
light soy sauce;10216124
lime;9159
lime juice;9160
lime wedges;1029159
lime zest;1009159
linguine;10720420
liquid smoke;93627
liquid stevia;10811111
liquor;14037
live lobster;15147
long-grain rice;10220444
low fat buttermilk;1088
low fat milk;1082
low fat milk;1174
low fat plain yogurt;1117
low fat ricotta cheese;1037
low fat sour cream;1179
low sodium chicken broth;6970
low sodium soy sauce;16424
low-sodium chicken stock;1006970
lower sodium beef broth;10093741
lump crab;10115136
m&m candies;19157
macadamia nuts;12131
macaroni and cheese mix;32004
madras curry powder;2015
malt drink mix;14311
mandarin orange sections;9383
mandarin oranges;9218
mango;9176
maple syrup;19911
maraschino cherries;9328
margarine;4073
marinara sauce;10111549
marjoram;2023
marsala wine;14057
marshmallow fluff;93644
marshmallows;19116
masa harina;20317
mascarpone;93820
mat beans;99144
matcha tea;98932
mayonnaise;4025
meat;1015006
meat;1065062
meatballs;10110219
medjool dates;9421
mexican cream;93772
meyer lemon juice;1009152
milk;1077
milk chocolate chips;10019146
mint chutney;98991
minute rice;20048
miracle whip;4014
mirin;93830
miso;16112
molasses;19304
monterey jack cheese;1001025
mushroom;11260
mussels;15164
mustard;2046
mustard seeds;2024
napa cabbage;11119
navel oranges;9202
nectarine;9191
new potatoes;11352
non-fat greek yogurt;1011256
nonfat cool whip;1200
nonfat milk;1085
nori;11446
nut butter;12195
nut meal;93620
nutella;19125
nutritional yeast;93690
oat flour;20132
oats;8120
oil;4582
oil packed sun dried tomatoes;11956
okra;11278
old bay seasoning;1052034
olive oil;4053
olives;9195
onion;11282
onion powder;2026
onion soup mix;6094
orange;9200
orange bell pepper;10011821
orange juice;9206
orange juice concentrate;9214
orange liqueur;10414534
orange marmalade;19303
orange oil;12511111
orange zest;9216
oregano;2027
oreo cookies;10018166
orzo;10920420
oyster sauce;6176
oysters;15167
palm sugar;93831
pancetta;10410123
paneer;98847
panko;10018079
papaya;9226
paprika;2028
parmigiano reggiano;1033
parsley;11297
parsley flakes;2029
parsnip;11298
part-skim mozzarella cheese;1028
pasta;20420
pasta salad mix;99036
pasta sauce;10011549
pastry flour;10020080
peach;9236
peanut butter;16098
peanut butter chips;93762
peanut butter cups;19150
peanut oil;4042
peanuts;16091
pear liqueur;98988
pearl barley;20005
pearl onions;10111282
peas;11304
pecan;12142
pecan pieces;10012142
pecorino;1038
penne;11120420
peperoncino;11976
pepper jack cheese;1025
peppercorns;1022030
peppermint baking chips;98858
peppermint extract;1022050
pepperoni;7057
peppers;10111333
pesto;93698
pickle relish;11944
pickles;11937
pico de gallo;27027
pie crust;18334
pimento stuffed olives;1049195
pimientos;11943
pine nuts;12147
pineapple;9266
pineapple chunks;1029354
pineapple in juice;9354
pineapple juice;9273
pink himalayan salt;1032047
pinto beans;16043
pistachios;12151
pita;18413
pizza crust;93770
pizza mix;98924
plain greek yogurt;1001256
plain nonfat yogurt;1118
plain yogurt;1001116
plantain;9277
plum;9279
plum tomatoes;10411529
poblano peppers;10011333
polenta;10035137
polish sausage;7059
pomegranate juice;9442
pomegranate molasses;10042040
pomegranate seeds;9286
popcorn;19034
poppy seeds;2033
pork;10010219
Pork & Beans;16009
pork belly;10005
pork butt;10084
pork chops;10010062
pork links;1007063
pork loin chops;10062
pork loin roast;10225
pork roast;10010225
pork shoulder;10072
pork tenderloin;10218
port;10114057
portabella mushrooms;11265
pot roast;23612
potato chips;19411
potato starch;11413
potatoes;11362
poultry seasoning;2034
powdered sugar;19336
pretzel sandwiches;19047
processed american cheese;1253
prosciutto;10010123
provolone cheese;1035
prunes;9291
puff pastry;18337
pumpkin;11422
pumpkin pie filling;11426
pumpkin pie spice;1002035
pumpkin puree;11424
pumpkin seeds;12014
queso fresco;1228
quick cooking oats;8402
quinoa;20035
quinoa flour;93773
radicchio;11952
radishes;11429
raisins;9299
rajma masala;10193663
ramen noodles;6583
ranch dressing;4639
ranch dressing mix;93733
raspberries;9302
raspberry jam;10719297
raw cashews;12087
raw shrimp;15152
ready-to-serve Asian fried rice;93721
real bacon recipe pieces;99229
red apples;1079003
red bell peppers;11821
red cabbage;11112
red chilli;11819
red delicious apples;1059003
red food coloring;1451111
red grapefruit juice;98926
red grapes;9132
red kidney beans;16033
red lentils;10016069
red onion;10011282
red pepper flakes;1032009
red pepper powder;2031
red potatoes;10011355
red velvet cookie;18157
red wine;14096
red wine vinegar;1022068
reduced fat shredded cheddar cheese;1001168
refried beans;16202
refrigerated crescent rolls;93618
refrigerated pizza dough;93610
refrigerated sugar cookie dough;18205
rhubarb;9307
rib tips;98937
rice;20444
rice flour;20061
rice krispies cereal;8065
rice milk;93761
rice noodles;20133
rice paper;10118368
rice syrup;93784
rice vinegar;1022053
rice wine;43479
ricotta salata;1036
ritz crackers;18621
roast beef;93713
roasted chicken;5114
roasted nuts;12135
roasted peanuts;16092
roasted red peppers;11916
roma tomatoes;10211529
romaine lettuce;10111251
root vegetables;10011298
rosemary;2036
rotini pasta;11320420
rotisserie chicken;5348
round steak;23617
rub;1012034
rum extract;12211111
runny honey;19296
russet potatoes;11353
rutabaga;11435
rye bread;18060
rye meal;98905
saffron threads;2037
sage;2038
sage leaves;99226
salad dressing;4114
salami;7071
salmon fillet;15076
salsa;6164
salsa verde;27028
salt;2047
salt and pepper;1102047
salted butter;1001001
saltine crackers;18228
sandwich bun;18353
sauerkraut;11439
sausage;1017063
sausage links;1037063
scotch bonnet chili;10011819
sea salt;1012047
sea scallops;10015172
seasoned bread crumbs;18376
seasoned rice vinegar;1032053
seasoned salt;1042047
seasoning;1042027
seasoning blend;1032027
seeds;93818
self-rising flour;20129
semi sweet chocolate chips;10019903
serrano chile;11977
sesame oil;4058
sesame seed hamburger buns;10018350
sesame seeds;12023
shallot;11677
sharp cheddar cheese;1031009
sheeps milk cheese;1011019
shells;11020420
sherry;10114106
sherry;10214106
sherry vinegar;1012068
shiitake mushroom caps;11238
short grain rice;10120052
short pasta;20499
short ribs;10013149
shortbread cookies;18192
shortcrust pastry;10018338
shortening;4615
shredded cheddar cheese;1001009
shredded cheese;1011026
shredded chicken;1005114
shredded coconut;12108
shredded mexican cheese blend;1001251
shredded mexican cheese blend;1251
shredded mozzarella;1001026
silken tofu;16161
sirloin steak;23625
skim milk ricotta;93630
skim vanilla greek yogurt;99033
skin-on bone-in chicken leg quarters;1005091
skinless boneless chicken breast halves;1045062
skinless boneless chicken thighs;5096
skinned black gram;93718
slaw dressing;43016
slaw mix;10011109
slivered almonds;10012061
smoked paprika;1012028
smoked salmon;15077
smoked sausage;7916
smooth peanut butter;16150
snapper fillets;15101
snow peas;11300
soda water;14121
sour cream;1056
sourdough bowl;99169
sourdough bread;10118029
soy milk;16223
soy protein powder;16122
soy sauce;16124
spaghetti;11420420
spaghetti squash;11492
sparkling wine;43155
spelt flour;93823
spicy brown mustard;1022046
spinach;10011457
sprite;14144
sprouts;11001
squash;10011485
sriracha sauce;1016168
steaks;23232
steel cut oats;93695
stevia;93628
stew meat;10023618
stew vegetables;11583
stock;1006615
store-bought phyllo;18338
stout;93619
strawberries;9316
strawberry jam;10819297
strawberry jello;10219172
stuffing;18082
stuffing mix;18081
sub rolls;98940
sugar;19335
sugar snap peas;10011300
sugar syrup;90480
sukrin sweetener;99190
summer savory;98961
summer squash;11641
sunflower oil;4584
sunflower seeds;12036
sweet chilli sauce;98962
sweet onion;11294
sweet paprika;1002028
sweet pickle juice;93640
sweet pickle relish;11945
sweet potato;11507
sweet tea;14355
sweetened coconut;12109
sweetened condensed milk;1095
sweetened shredded coconut;12179
swiss chard;11147
swiss cheese;1040
taco seasoning mix;2073
taco shells;18360
tahini;12698
tamari;10116124
tapioca flour;93696
tarragon;2041
tart apple;1029003
tea bags;10111111
tequila;10814037
teriyaki sauce;6112
thai basil;1012044
thai chiles;11670
thai red curry paste;93605
thick-cut bacon;10310123
tilapia fillets;15261
toast;18070
toffee bits;19383
tofu;16213
tomatillos;11954
tomato juice;11886
tomato paste;11887
tomato puree;11547
tomato sauce;11549
tomato soup;6159
tomatoes;11529
top blade steak;13523
top round steak;23636
Top Sirloin;23584
tortilla;18364
tortilla chips;19056
triple sec;14534
truffle oil;1024053
tuna;10015121
turbinado sugar;19908
turkey;5165
turkey breast;5696
turkey kielbasa;7955
turmeric;2043
turnips;11564
unbleached flour;10020081
unsalted butter;1145
unsmoked back bacon;10130
unsweetened applesauce;9019
unsweetened coconut milk;12117
unsweetened shredded coconut;10012108
vanilla bean;93622
vanilla bean paste;93813
vanilla essence;1012050
vanilla extract;2050
vanilla frosting;10019230
vanilla instant pudding mix;19206
vanilla protein powder;99076
vanilla wafers;18609
vanilla yogurt;1119
vegan cheese;93701
vegan chocolate chips;98848
vegan margarine;4673
vegetable broth;6615
vegetable oil;4513
vegetarian bacon;16542
vermouth;14132
vinaigrette;4135
vinegar;2053
vodka;14051
walnuts;12155
water;14412
water chestnuts;11590
water-packed tuna;15121
watercress;11591
watermelon chunks;9326
wheat bran;20077
wheat germ;20078
whipped cream;1054
whipped topping;42135
whipping cream;1001053
whiskey;14052
white balsamic vinegar;1012069
white bread;18069
white cake mix;18137
white cheddar;1011009
white chocolate;19087
white chocolate chips;10019087
white onion;10611282
white pepper;2032
white whole wheat flour;93824
white wine;14106
white wine vinegar;1002068
whole allspice berries;1002001
whole chicken;5006
whole coriander seeds;2013
whole cranberry sauce;9081
whole kernel corn;11177
whole star anise;1012002
whole wheat bread;18075
whole wheat flour;20080
whole wheat tortillas;93675
whole-grain mustard;1012046
wine;14084
wine vinegar;2068
winter squash;10111485
won ton wraps;10018368
worcestershire sauce;6971
wraps;10018364
xanthan gum;93626
yeast;18375
yellow bell pepper;11951
yellow cake mix;18144
yellow onion;10511282
yogurt;1116
yukon gold potato;10211362`;
const cleanedIngredient = ingredients.split("\n").map((item) => {
  return item.replace(/;\d+/, "");
});

export default function App() {
  const [data, setData] = useState(null);
  const [userIngredient, setUserIngredient] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // To capture user input
  const [filteredIngredients, setFilteredIngredients] = useState([]); // To hold filtered ingredients
  function removeIngredient(event) {
    const ingredients = event.target.textContent;
    setUserIngredient(userIngredient.filter((i) => i !== ingredients));
  }
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.length > 0) {
      // Filter ingredients based on input
      const filtered = cleanedIngredient
        .filter((ingredient) =>
          ingredient.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, 5);
      setFilteredIngredients(filtered);
    } else {
      setFilteredIngredients([]); // Clear the list if input is empty
    }
  };
  function ingredient_click(e) {
    const ingredient = e.target.textContent;
    if (!userIngredient.includes(ingredient)) {
      setUserIngredient([...userIngredient, ingredient]); // Add selected ingredient to user's list
    }
  }
  useEffect(() => {
    async function fetchData() {
      if (userIngredient.length > 0) {
        // Step 1: Fetch recipes based on ingredients
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userIngredient.join(
            ","
          )}&number=5&apiKey=${api_key}`
        );
        const recipes = await response.json();

        // Step 2: Fetch detailed information for each recipe, including instructions
        const detailedRecipes = await Promise.all(
          recipes.map(async (recipe) => {
            const recipeDetailsResponse = await fetch(
              `https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=${api_key}`
            );
            return await recipeDetailsResponse.json();
          })
        );

        setData(detailedRecipes);
      }
    }

    fetchData();
    console.log("Detailed recipes:", data); // This will display the array of objects.

    // console.log(`Recipes: ${recipes}`);
  }, [userIngredient]);

  // console.log(cleanedIngredient); //debug
  // console.log(userIngredient);
  return (
    <div className="main">
      <div className="sidebar">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter an ingredient..."
            value={searchTerm}
            onChange={handleInputChange}
            style={{ padding: "8px", width: "300px" }}
          />
          {filteredIngredients.length > 0 && (
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {filteredIngredients.map((ingredient, index) => (
                <li
                  onClick={ingredient_click}
                  key={index}
                  style={{ padding: "5px", cursor: "pointer" }}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
        </div>
        <SelectedIngredients
          ingredientsList={userIngredient}
          removeFunction={removeIngredient}
        />
      </div>

      <div className="recipeList">
        <h1>RECIPES LIST</h1>
        <div className="recipes">
          {data &&
            data.map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                image={recipe.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
