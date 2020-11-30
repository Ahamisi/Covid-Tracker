export async function fetchByUrl (url, callback){
  await fetch(`${url}`)
  .then(response => response.json())
  .then(res => callback(res));
}


