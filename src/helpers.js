export const petData = (data, id) => {
  return ({
    name: data[id].name,
    seed: data[id].seed,
    image: data[id].image
  });
};

export const unknownPet = (game) => ({
  name: `Winner from ${game.name}`,
  seed: '',
  image: ''
});
