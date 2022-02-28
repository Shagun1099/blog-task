import newyork from './assets/jpg/newyork.jpg';
import manhattan from './assets/jpg/manhattan.jpg';
import san from './assets/jpg/san.jpg';
import croissants from './assets/jpg/croissants.jpg';
import hamburger from './assets/jpg/hamburger.jpg';
import pizza from './assets/jpg/pizza.jpg';
import cake from './assets/jpg/cake.jpg';
import gowns from './assets/jpg/gowns.jpg';
import party from './assets/jpg/party.jpg';
import wedding from './assets/jpg/wedding.jpg';


export const APP_DATA ={
    categories:[
        {
            title:"Travel",
            id:"places",
            images: [newyork, manhattan, san],
            color:"red"
        },{
            title:"Food",
            id:"food",
            images: [hamburger, croissants, pizza, cake],
            color:"#00d600"
        },{
            title:"Fashion",
            id:"fashion",
            images: [gowns, wedding, party],
            color:"deepskyblue"
        }
    ],
    blogs:[
        {
            id:1,
            category:"places",
            title:"New York",
            subTitle:"City in New York State",
            content:"New York, often called New York City (NYC) to distinguish it from the state of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.[9] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, dining, art, fashion, and sports, and is the most photographed city in the world.[10] Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[11][12] and has sometimes been called the capital of the world. Situated on one of the world's largest natural harbors, New York City is composed of five boroughs, each of which is coextensive with a respective county of the state of New York. The five boroughs—Brooklyn (Kings County), Queens (Queens County), Manhattan (New York County), the Bronx (Bronx County), and Staten Island (Richmond County)—were created when local governments were consolidated into a single municipal entity in 1898.[15] The city and its metropolitan area constitute the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York,[16] making it the most linguistically diverse city in the world. New York is home to more than 3.2 million residents born outside the United States, the largest foreign-born population of any city in the world as of 2016.[17][18] As of 2018, the New York metropolitan area is estimated to produce a gross metropolitan product (GMP) of nearly $1.8 trillion, ranking it first in the United States. If the New York metropolitan area were a sovereign state, it would have the eighth-largest economy in the world. New York is home to the second highest number of billionaires of any city in the world",
            isMine:false,
            image:newyork
        },
        {
            id:2,
            title:"Manhattan",
            subTitle:"Boroughs of New York City",
            content:"Mangattan known regionally as The City,is the most densely populated and geographically smallest of the five boroughs of New York City. It is the urban core of the New York metropolitan area, and coextensive with New York County, one of the original counties of the U.S. state of New York. Manhattan serves as the city's economic and administrative center, cultural identifier,[7] and historical birthplace.[8] The borough consists mostly of Manhattan Island, bounded by the Hudson, East, and Harlem rivers along with several small adjacent islands, including Roosevelt, U Thant, and Randalls and Wards Islands. Manhattan additionally contains Marble Hill, a small neighborhood now on the U.S. mainland, separated from the rest of Manhattan by the Harlem Ship Canal and later connected using landfill to the Bronx. Manhattan Island is divided into three informally bounded components, each cutting across the borough's long axis: Lower, Midtown, and Upper Manhattan.Manhattan has been described as the cultural, financial, media, and entertainment capital of the world,[9][10][11][12] and the borough hosts the United Nations headquarters.Anchored by Wall Street in the Financial District of Lower Manhattan, New York City has been called both the most economically powerful city and the leading financial center of the world,[14][15][16][17] and Manhattan is home to the world's two largest stock exchanges by total market capitalization: the New York Stock Exchange and Nasdaq.[18][19] Many multinational media conglomerates are based in Manhattan, and the borough has been the setting for numerous books, films, and television shows. Manhattan real estate is among the most expensive in the world, with the value of Manhattan Island, including real estate, estimated to exceed US$3 trillion in 2013;[8][20] median residential property sale prices in Manhattan approximated US$1,600 per square foot ($17,000/m2) as of 2018,[21] with Fifth Avenue in Midtown Manhattan commanding the highest retail rents in the world, at US$3,000 per square foot ($32,000/m2) per year in 2017.",
            category:"places",
            isMine:false,
            image:manhattan
        },
        {
            id:3,
            title:"San Francisco",
            subTitle:"City in California",
            isMine:true,
            image:san,
            category:"places",
            content:"City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city proper in the United States, and the fourth most populous in California, with 873,965 residents as of 2020.[15] It covers an area of about 46.9 square miles (121 square kilometers),[20] mostly at the north end of the San Francisco Peninsula in the San Francisco Bay Area, making it the second most densely populated large U.S. city, and the fifth most densely populated U.S. county, behind only four of the five New York City boroughs. San Francisco is the 12th-largest metropolitan statistical area in the United States with 4.7 million residents, and the fourth-largest by economic output, with a GDP of $592 billion in 2019.[21] With San Jose, California, it forms the San Jose–San Francisco–Oakland, CA Combined Statistical Area, the fifth most populous combined statistical area in the United States, with 9.6 million residents as of 2019. Colloquial nicknames for San Francisco include SF, San Fran, The City, and Frisco. In 2019, San Francisco was the county with the seventh-highest income in the United States, with a per capita income of $139,405.[24] In the same year, San Francisco proper had a GDP of $203.5 billion, and a GDP per capita of $230,829.[21][25] The San Jose–San Francisco–Oakland, CA Combined Statistical Area, with a GDP of $1.09 trillion as of 2019, is the country's third-largest economy.[26] Of the 105 primary statistical areas in the U.S. with over 500,000 residents, this CSA had the highest GDP per capita in 2019, at $112,348.[26] San Francisco was ranked 5th in the world and second in the United States on the Global Financial Centres Index as of September 2021.",
        },
        {
            id:4,
            title:"Croissants",
            subTitle:"Buttery,flaky Bread",
            content:"A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] but mostly associated with France. Croissants are named for their historical crescent shape and, like other viennoiseries, are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry. Crescent-shaped breads have been made since the Renaissance, and crescent-shaped cakes possibly since antiquity.[4] Croissants have long been a staple of Austrian, Italian, and French bakeries and pâtisseries. The modern croissant was developed in the early 20th century. In the late 1970s, the development of factory-made, frozen, preformed but unbaked dough made them into a fast food that could be freshly baked by unskilled labor. The croissant bakery, notably the La Croissanterie chain, was a French response to American-style fast food,[5] and as of 2008, 30–40% of the croissants sold in French bakeries and patisseries were baked from frozen dough.",
            isMine:false,
            category:"food",
            image:croissants
        },
        {
            id:5,
            title:"The Hamburger",
            subTitle:"food consist of fillings",
            content:"The hamburger first appeared in the 19th or early 20th century.[1][2] The modern hamburger was a product of the culinary needs of a society rapidly changing due to industrialization and the emergence of the working class and the middle class with the resulting demand for mass-produced, affordable food that could be consumed outside of the home. Considerable evidence suggests that either the United States or Germany (the city of Hamburg) was the first country where two slices of bread and a ground beef steak were combined into a hamburger sandwich and sold. There is some controversy over the origin of the hamburger because its two basic ingredients, bread and beef, had been prepared and consumed separately for many years in different countries before their combination. Shortly after its creation, the hamburger quickly included all of its currently typically characteristic trimmings, including onions, lettuce, and sliced pickles. After various controversies in the 20th century, including a nutritional controversy in the late 1990s, the burger is now readily identified with the United States, and a particular style of cuisine, namely fast food.[3] Along with fried chicken and apple pie, the hamburger has become a culinary icon in the United States. The hamburger's international popularity demonstrates the larger globalization of food[6] that also includes the rise in global popularity of other national dishes, including the Italian pizza, Chinese fried rice and Japanese sushi. The hamburger has spread from continent to continent perhaps because it matches familiar elements in different culinary cultures.[7] This global culinary culture has been produced, in part, by the concept of selling processed food, first launched in the 1920s by the White Castle restaurant chain and its visionary Edgar Waldo Billy Ingram and then refined by McDonald's in the 1940s.[8][9] This global expansion provides economic points of comparison like the Big Mac Index,[10] by which one can compare the purchasing power of different countries where the Big Mac hamburger is sold.",
            isMine:true,
            category:"food",
            image:hamburger
        },
        {
            id:6,
            title:"Pizza",
            subTitle:"Italian Dish",
            content:"Pizza  is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo. In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork.[2][3] In casual settings, however, it is cut into wedges to be eaten while held in the hand. The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[5] It has become one of the most popular foods in the world and a common fast food item in Europe, North America and Australasia; available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, via pizza delivery, and as street food.[5] Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores, to be reheated in a home oven. In 2017, the world pizza market was US$128 billion, and in the US it was $44 billion spread over 76,000 pizzerias.[6] Overall, 13% of the U.S. population aged 2 years and over consumed pizza on any given day.[7]",
            isMine:false,
            category:"food",
            image:pizza
        },
        {
            id:7,
            title:"Choclate Cake",
            subTitle:"Cake flavored with melted chocolate",
            content:"Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas were added to traditional cake recipes.[2] In 1828, Coenraad van Houten of the Netherlands developed a mechanical extraction method for extracting the fat from cacao liquor resulting in cacao butter and the partly defatted cacao, a compacted mass of solids that could be sold as it was rock cacao or ground into powder.[3] The processes transformed chocolate from an exclusive luxury to an inexpensive daily snack.[3] A process for making silkier and smoother chocolate called conching was developed in 1879 by Rodolphe Lindt and made it easier to bake with chocolate, as it amalgamates smoothly and completely with cake batters.[3] Until 1890 to 1900, chocolate recipes were mostly for chocolate drinks,[3] and its presence in cakes was only in fillings and glazes.[4] In 1886, American cooks began adding chocolate to the cake batter, to make the first chocolate cakes in the US. The Duff Company of Pittsburgh, a molasses manufacturer, introduced Devil's food chocolate cake mixes in the mid-1930s, but introduction was put on hold during World War II. Duncan Hines introduced a Three Star Special (so called because a white, yellow or chocolate cake could be made from the same mix) was introduced three years after cake mixes from General Mills and Duncan Hines, and took over 48 percent of the market.[5]",
            isMine:false,
            category:"food",
            image:cake
        },
        {
            id:8,
            title:"Gowns",
            subTitle:"garment from knee- to full-length",
            content:"Gowns were worn by students attending early European universities in the 12th and 13th centuries.[3] The gowns and hoods worn would indicate their status.[3] From the 14th to the 17th centuries, the term gown was used to describe any long, loose, robe-like garment worn by both men and women. In 1500s Italy, gowns were also known as camora or by regional names in various locations.[4] The look of the camora changed over time, starting out with a high waist and low neckline at the beginning of the century and gradually becoming low-waisted and high-necked by the end.[4] Italian women also wore an overgown called a vestito or a roba.[5] In turn, these might be covered by a robone which was lined with fabrics or furs for warmth. By the late sixteenth century, gowns were no longer in style in Italy except where they were worn to denote a professional station, such as a banker or priest. In the 17th century, women's gowns in the American colonies included trimming around the neck and down the bodice, or in the case of an open gown, down front edges from hem to neck.[7] Gowns may also have borders of silk, ribbons and other decorations.[7] Women in the American colonies wore short gowns as working clothing and informal clothing during the 18th century.[8] The gowns were t-shaped and had side godets for additional volume.",
            isMine:false,
            category:"fashion",
            image:gowns
        },
        {
            id:9,
            title:"Party wear",
            subTitle:"dress worn especially for a party",
            content:"A party dress is a dress worn especially for a party. Different types of party such as children's party, cocktail party, garden party and costume party would tend to require different styles of dress.[63][64] One classic style of party dress for women in modern society is the little black dress.A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment).[1] It consists of a top piece that covers the torso and hangs down over the legs. A dress can be any one-piece garment containing a skirt of any length, and can be formal or casual. A dress can have sleeves, straps, or be held up with elastic around the chest, leaving the shoulders bare. Dresses also vary in color. The hemlines of dresses vary depending on modesty, weather, fashion or the personal taste of the wearer.",
            isMine:false,
            category:"fashion",
            image:party
        },
        {
            id:10,
            title:"Wedding Dresses",
            subTitle:"worn by the bride during a wedding ",
            content:"Weddings performed during and immediately following the Middle Ages were often more than just a union between two people. They could be a union between two families, two businesses or even two countries. Many weddings were more a matter of politics than love, particularly among the nobility and the higher social classes. Brides were therefore expected to dress in a manner that cast their families in the most favorable light and befitted their social status, for they were not representing only themselves during the ceremony. Brides from wealthy families often wore rich colors and exclusive fabrics. It was common to see them wearing bold colors and layers of furs, velvet and silk. Brides dressed in the height of current fashion, with the richest materials their families' money could buy. The poorest of brides wore their best church dress on their wedding day. The amount and the price of material a wedding dress contained was a reflection of the bride's social standing and indicated the extent of the family's wealth to wedding guests.",
            isMine:true,
            category:"fashion",
            image:wedding
        }
    ]
}