const BASE_URL = 'https://jsonplaceholder.typicode.com';

function getUsers(callback) {
  return fetch(`${BASE_URL}/users`)
    .then((resp) => resp.json())
    .then((data) => {
      // turim data
      console.log('data ===', data);
      callback(data);
    })
    .catch((err) => console.log(err));
}
getUsers(getIdOfUser);

function getIdOfUser(users) {
  const found = users.find((u) => u.name === 'Patricia Lebsack');
  console.log('found ===', found);
  findPostsById(found.id);
}

// tarp useriu surandam ''Patricia Lebsack'' gaunam jos id

// su gautu id ieskom postu kurie priklauso tam user
function findPostsById(id) {}
