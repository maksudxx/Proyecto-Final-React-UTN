const { v4: uuidv4 } = require("uuid");

async function createData() {
  const genre = [
    { genre_id: uuidv4(), genre_name: "Accion" },
    { genre_id: uuidv4(), genre_name: "Aventura" },
    { genre_id: uuidv4(), genre_name: "Arcade" },
    { genre_id: uuidv4(), genre_name: "Deportivo" },
    { genre_id: uuidv4(), genre_name: "Estrategia" },
    { genre_id: uuidv4(), genre_name: "Simulacion" },
    { genre_id: uuidv4(), genre_name: "Rol" },
    { genre_id: uuidv4(), genre_name: "Battle Royale" },
  ];

  const platform = [
    { platform_id: uuidv4(), platform_name: "PlayStation" },
    { platform_id: uuidv4(), platform_name: "Xbox" },
    { platform_id: uuidv4(), platform_name: "Pc" },
    { platform_id: uuidv4(), platform_name: "Sega" },
    { platform_id: uuidv4(), platform_name: "Nintendo" },
  ];

  const videogame = [
      {videogame_id: uuidv4(), videogame_name: "God of War", videogame_description: "<p>It is a new beginning for Kratos. Living as a man outside the shadow of the gods, he ventures into the brutal Norse wilds with his son Atreus, fighting to fulfill a deeply personal quest. </p>\n<p>His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… And teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew. </p>\n<p>Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. </p>\n<p>From the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters, and gods. With an added emphasis on discovery and exploration, the world will draw players in to explore every inch of God of War’s breathtakingly threatening landscape—by far the largest in the franchise. </p>\n<p>With an over the shoulder free camera that brings the player closer to the action than ever before, fights in God of War mirror the pantheon of Norse creatures Kratos will face: grand, gritty, and grueling. A new main weapon and new abilities retain the defining spirit of God of War while presenting a vision of violent conflict that forges new ground in the genre</p>", videogame_release_date: "2018-04-20", videogame_rating : 4.59, platform_id: platform[0].platform_id, genre_id: genre[0].genre_id}
  ]
  return {genre, platform, videogame}
}

module.exports = { createData };
