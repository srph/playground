function loadUsers() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './users.json');
    xhr.onreadystatechange = () => {
      if ( xhr.status === 200 && xhr.readyState === 4 ) {
        const res = JSON.parse(xhr.responseText);
        resolve(res);
      }
    };
    xhr.send();
  });
}

loadUsers()
  .then((res) => {
    console.log(typeof res);
    return res.data.map(user => ({ username: user }));
  })
  .then((users) => {
    console.log(users);
  });