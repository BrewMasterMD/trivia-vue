export default function getData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      else {
        return response.json();
      }
    })
    .catch ((err) => {
      console.log(err);
    });
}