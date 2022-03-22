const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getUsers() {
  const resp = await fetch(`${BASE_URL}/users`);
  const dataInJs = await resp.json();
  // console.log('dataInJs ===', dataInJs);
  return dataInJs;
}
function getIdOfUser(users) {
  const found = users.find((u) => u.name === 'Patricia Lebsack');
  console.log('found ===', found);
  return found.id;
}
async function findPostsById(id) {
  const resp = await fetch(`${BASE_URL}/posts`);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  // parsisiusti posts is https://jsonplaceholder.typicode.com/posts
  return dataInJs.filter((pObj) => pObj.userId === id);
  // atriknkti tik tuos kur userId yra lygus argunetu gautam id
}

// iffe

(async () => {
  const users = await getUsers();
  const patId = getIdOfUser(users);
  const patPosts = await findPostsById(patId);
  console.log('patPosts ===', patPosts);
})();

// tarp useriu surandam ''Patricia Lebsack'' gaunam jos id

// su gautu id ieskom postu kurie priklauso tam user
