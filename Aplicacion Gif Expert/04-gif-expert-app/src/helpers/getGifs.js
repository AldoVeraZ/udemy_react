export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=jnliRlqk3W8zYtkuDJB1zpBE9qAmSwMm&q=${category}&limit=10`;
  //Peticion http
  const resp = await fetch(url);
  const { data } = await resp.json();
  // tambien se puede igualar de esta manera, sola para asegurarse que siempre tengan data
  // const { data = [] } = await resp.json();
  // console.log(data);

  // const gifs = data.map(img =>{
  //   return {

  //   }
  // })
  // forma mas simple
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};
