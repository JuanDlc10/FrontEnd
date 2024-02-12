fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(res => res.json())
  .then(({ results }) => {
    results.map(async ({ url }) => {
      let datosPokemon = await fetch(url);
      let { abilities, stats, base_experience, name, weight } = await datosPokemon.json();
      console.log(`Nombre: ${name}`);
      console.log(`Habilidades: ${abilities.map(a => a.ability.name).join(', ')}`);
      console.log(`Estadísticas: ${stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}`);
      console.log(`Experiencia base: ${base_experience}`);
      console.log(`Peso: ${weight}`);
      console.log('<====================================>');
    });
  })
  .catch(error => {
    console.log(`Se ha producido el siguiente error: ${error}`);
  });
