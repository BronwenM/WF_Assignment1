//ensure express is being used
const express = require("express");

//app creation
const app = express();

const port = 8080;

//main page
app.get('/', (req, res) => {
    res.send("Hello There!");
});

//Penguins page & display info
//Facts courtesy of WWF
const penguinsFacts = [
    "Wild Emperor penguins are only found in Antarctica. They breed and raise their young mostly on ‘fast ice’, a floating platform of frozen ocean which is connected to the land or to ice shelves. From birth, they spend their entire lives in and around the Antarctic ice, although very rarely vagrants have turned up off the coast of New Zealand.",
    "Emperors are the biggest of the 18 species of penguin found today, and one of the largest of all birds. They are approximately 120cm tall (about the height of a six year old child) and weigh in at around 40 kg, though their weight does fluctuate dramatically throughout the year. But they would be dwarfed by the ancient ‘mega-penguins’. Fossils recovered from the Antarctic Peninsula reveal that a colossus species of penguin which lived about 37 million years ago may have stood 2m tall and weighed as much as 115 kg.",
    "There are approximately 595,000 adult Emperor penguins in Antarctica. But due to a lack of research, there is still so much we don't know about these magnificent polar creatures. That's why we're funding research in the Antarctic, because the more we know, the better we can protect them. This will encourage the formation of Marine Protected Areas and will help in protecting the species in the face of climate change.",
    "Emperor penguin colonies have been discovered and counted from space. A survey led by British scientists in 2012 used satellite technology to identify emperor colonies from the poo stains left on the ice at breeding sites. They discovered a number of previously unvisited colonies and counted every individual penguin. In there are now thought to be around 54 Emperor colonies in the Antarctic.  About half of these have been discovered by satellite survey and most of these remain unvisited.",
    "Emperors incubate their eggs during the long dark southern winter months. Courtship displays are intricate but copulation is quick and the female lays a single egg in May or June. She then passes it over to her mate to incubate - and she’s off. She spends the next nine weeks at sea, feeding. The male carefully balances the egg on his feet for between 65 – 75 days to keep it warm in a specially adapted brood pouch, and off the snow surface, before it hatches. Then out pops a fluffy chick.",
    "Emperors are uniquely adapted to survive these harsh conditions when temperatures can drop down to a bone chilling -50°C and with winds of up to 200km/hr. They have two layers of feathers, a good reserve of fat and proportionally smaller beaks and flippers than other penguins to prevent heat loss. Emperors also have feathers on their legs, so their ankles don’t get too chilly. Even their feet are adapted to the icy conditions, containing special fats that prevent them from freezing and strong claws for gripping the ice. But most remarkably, colonies of adults and chicks work together to huddle for warmth. 5,000 or more tightly packed adults and chicks shuffle around, so each takes a turn - but not too long - on the outside of the huddle where it’s cold. This is in complete contrast to their quarrelsome and territorial neighbours, the Adélie penguins.",
    "Emperor penguins are the Olympic divers of the bird world. The deepest recorded dive was 564 m – that’s the equivalent of nearly 2 x the height of the Shard, Europe’s tallest building. And the longest recorded dive was nearly 28 minutes. That’s incredible!",
    "Emperors feed mostly on Antarctic silverfish as well as other species of fish, krill (like Will & Bill from Happy Feet) and some squid. An adult penguin eats about 2-3 kg per day, but on a good day they can eat twice this much to build up their store of body fat for the long winter, or for feeding their chicks.",
    "Male emperor penguins will not eat for up to four months, from the time they arrive at the colony to breed until the egg has hatched and the mother returns to feed. They lose almost half of their body weight during this time. They need to rely entirely on the reserve of body fat that they built up during the summer feast to survive the long winter.",
    "Emperor penguins can climb steep ice cliffs and have been known to breed up on ice-shelves, if the sea ice below fails. In 2013, British and Australian scientists discovered two emperor penguin colonies on ice shelves at Barrier Bay and Larsen C, with a further two temporary colonies on the Shackleton and Nickerson ice shelves. This may be a useful adaptation strategy as Antarctica warms due to climate change, but it might not help them in the long term, if the fast rate of warming continues."
];

app.get('/api/penguins', (req, res) =>{
    //here be the dummy data
    res.send("<h2>Emperor Penguin Facts</h2> <em>super cool facts about super cool birds</em><br>" + "<ol><li>" + penguinsFacts.join('</li><br><li>') + "</li></ol>");
});

app.get('/api/bears', (req, res) =>{
    //dummies abound
    res.send("LES OURS");
});

//get the app running by listening on port 8080
app.listen(port, () => {
    console.log("Connection successful! Listening on port ", port);
});