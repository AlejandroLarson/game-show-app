// I wrote these scenes to structure the linear story. Random questions from the API are fetched in each scene.

const scenes = [
    {
        title: "Museum Entrance",
        description: "You enter the museum and take in the sights. The entire history of cat society is stored in these archives and it dawns on you how important it is to solve this case. Then it also dawns on you that you just want to go home and watch Game of Paws. You wonder, did someone steal it for money? To unlock its supposed magical nature? Is it something else?",
        categories: [22, 23, 14], // Geography, History, Television
        positiveFeedback: "You start the investigation thinking about the relevant facts and maybe still a bit distracted by that TV show."
    },
    {
        title: "Scruffy the Security Guard",
        description: "You find the only security guard taking a cat nap. He's startled when you poke him. Does he know anything? Is he pretending to sleep on a crazy night like this? Let's try being his friend. Find a good conversation starter and learn his story.",
        categories: [13, 15, 21], // Musical and Theatre, Video Games, Sports
        positiveFeedback: "The security guard has expensive hobbies. Could this be our suspect?"
    },
    {
        title: "The Crime Scene: Egyptian Exhibit",
        description: "The extremely tiny but priceless cat statue (maybe it's more of a figurine than a statue, but who's to say?) was stolen from this room. You look around for clues. How was the statue secured? Should we dust for paw prints?",
        categories: [27, 17, 9], // Animals, Science and Nature, General Knowledge
        positiveFeedback: "Nothing seems damaged. Prints are everywhere since people walk here everyday. You sense a faint trail to the office area. Inside job?"
    },
    {
        title: "Professor Whiskers the Curator",
        description: "Clues lead you from the exhibit to the museum curator's office. Could they be involved? We need to interrogate them. You notice a tattoo on their neck that looks suspiciously like the statue. Secret cult member? Then again it could be any cat. Maybe challenge them to trivia. Are they even really the curator?",
        categories: [20, 23, 25], // Mythology, History, Art
        positiveFeedback: "The curator knows their stuff, so they're real. But the tattoo, the countless books on Egyptian gods, the intense stare. Something isn't right, but there's no statue here."
    },
    {
        title: "Bartholomew the Janitor",
        description: "You find Bartholomew meticulously cleaning the royal family exhibit. He mutters to himself about how much better it was in the old days. He seems obsessed with this particular area. Learn his story.",
        categories: [24, 10, 23], // Politics, Books, History
        positiveFeedback: "Bartholomew is a traditionalist that doesn't want to see anything removed from the museum. He says it's been here longer than him, so it must stay. But he's too honorable to steal. He suggests checking the supply closet"
    },
    {
        title: "Hidden Vent",
        description: "Though he has a motive, you trust Bartholomew when they suggest there's something worth investigating in the hidden vent in the supply closet. You squeeze through and end up in a long dark tunnel. There's a faint glow at the end. What knowledge are you going to draw from to get through this?",
        categories: [17, 11, 27], // science & nature, film, animals
        positiveFeedback: "You successfully make it through the tunnel and stumble upon something incredible."
    }
]

export default scenes;