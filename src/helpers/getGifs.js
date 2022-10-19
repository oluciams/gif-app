export const getGifs = async (category) =>{

  const API_KEY ='cmVedNVZroYjpG7a0qlQmSzV1WUckVYT';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
  const resp = await fetch( url );
  const {data} = await resp.json();

  const gifs = data.map( img => ({ //este map es para traer solo los datos que quiero de la api
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  
  return gifs;
}