const attractions = [
    {
        id: 1,
        name: "Maletsunyane Falls",
        image: "/images/maletsunyane-falls.jpg",
        location: "Semonkong, Maseru District",
        category: "Nature",
        description: "One of the highest single-drop waterfalls in southern Africa, plunging about 192 metres into a rugged gorge.",
        details: "Semonkong means 'Place of Smoke', named for the mist that rises from the falls. The area is also home to the world's longest commercially operated single-drop abseil.",
        bestTime: "November to March, when water flow is strong",
        activities: ["Hiking", "Abseiling", "Pony trekking", "Photography"],
        cost: "M50 entry, M1,200 abseiling",
    },
    {
      id: 2,
      name: "Thaba-Bosiu",
      image:"/images/Thaba-Bosiu.jpg",
      location: "Near Maseru, Maseru District",
      category: "History",
      description:
           "The mountain fortress where King Moshoeshoe I founded the Basotho nation and where he is buried.",
      details:
            "Thaba-Bosiu, meaning 'Mountain at Night', was a natural stronghold that was never captured. It is considered the birthplace of the Basotho nation and a national heritage site.",
      bestTime: "All year, mornings are best for climbing",
      activities: ["Guided history tour", "Hiking", "Sightseeing", "Cultural learning"],
      cost: "M40 per person",  
    },
    {
        id: 3,
        name: "Sani Pass",
        image: "/images/sani.jpg",
        location: "Mokhotlong District, Lesotho-South Africa border",
        category: "Adventure",
        description:
                "A dramatic mountain pass climbing to about 2,800 metres, linking KwaZulu-Natal to the Lesotho highlands.",
        details:
              "The road is steep and rough, and is best done in a 4x4 or with a guided tour. At the top you can visit the Sani Top Chalet, one of the highest pubs in Africa.",
        bestTime: "April to October for clear views and snow chances",
        activities: ["4x4 driving", "Guided tours", "Hiking", "Stargazing"],
        cost: "M600 guided tour",
    },
    {
        id: 4,
        name: "Katse Dam",
        image: "/images/Katse.jpg",
        location: "Thaba-Tseka District",
        category: "Nature",
        description: "A huge arch dam in the Highlands, part of the Lesotho Highlands Water Project and one of Africa's highest.",
        details: "The dam supplies water to South Africa and generates hydropower for Lesotho. The surrounding Bokong and Katse areas offer scenic views and a botanical garden.",
        bestTime: "March to May and September to November",
        activities: ["Dam tours", "Boat trips", "Bird watching", "Photography"],
        cost: "M80 dam tour",
    },
    {
        id: 5,
        name: "Sehlabathebe National Park",
        image: "/images/sehlabathebe.jfif",
        location: "Qacha's Nek District",
        category: "Nature",
        description:
              "A remote high-altitude park of rock arches, pools and grasslands, part of the Maloti-Drakensberg World Heritage Site.",
        details:
              "The park is quiet and unspoiled, with rare wildlife and ancient San rock art. It is reached by a long, rough road, so plan ahead.",
       bestTime: "September to May",
       activities: ["Hiking", "Camping", "Fishing", "Bird watching"],
       cost: "M60 entry, M150 camping ",
    },
    {
        id: 6,
        name: "Afriski Mountain Resort",
        image: "/images/afriskiii.jpg",
        location: "Butha-Buthe District",
        category: "Adventure",
        description:
            "One of the few ski resorts in southern Africa, offering snow sports in winter and mountain biking in summer.",
        details:
            "The resort sits at over 3,000 metres near Mahlasela Pass. It has a ski school, equipment hire, a restaurant and accommodation.",
        bestTime: "June to August for skiing, December to February for biking",
        activities: ["Skiing", "Snowboarding", "Mountain biking", "Quad biking"],
         cost: "M700 lift pass per day ",
    },
    {
       id: 7,
       name: "Liphofung Cave",
       image: "/images/liphofungg.jpg",
       location: "Buthe-Buthe District",
       category: "Culture",
       description:
          "A sandstone cave with San rock paintings, once used as a shelter by King Moshoeshoe I.",
       details:
           "Liphofung means 'Place of the Eland'. The site has a small interpretive centre, a short nature trail and guided cultural tours.",
       bestTime: "All year",
       activities: ["Rock art viewing", "Guided tours", "Nature walks", "Picnics"],
       cost: "M30 per person",
    },
    {
      id: 8,
      name: "Morija Museum and Archives",
      image: "/images/morija-museum.jpeg", 
      location: "Morija, Maseru District",
      category: "Culture",
      description:
          "Lesotho's oldest museum, showing Basotho history, traditional crafts, fossils and dinosaur footprints.",
      details:
           "Morija is also the home of the annual Morija Arts and Cultural Festival, which celebrates Basotho music, dance and food.",
      bestTime: "All year, festival in September or October",
      activities: ["Museum tour", "Dinosaur footprints visit", "Craft shopping", "Festival"],
      cost: "M30 per person",
    },
    {
        id: 9,
        name: "Ha Kome Cave Houses",
        image: "/images/Ha-Kome-Cave.jpg",
        location: "Berea District, near Teyateyaneng",
        category: "Culture",
        description:
            "Cave dwellings built into sandstone cliffs, still lived in by Basotho families.",
        details:
            "The houses were built over 200 years ago. Visitors can see how families have adapted to life in the rock and learn local history.",
        bestTime: "All year",
        activities: ["Cultural visit", "Photography", "Local storytelling", "Craft buying"],
       cost: "M50 per person " ,
    },
];

export default attractions;