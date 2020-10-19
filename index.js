function submitData(name, email) {
  let userData = {
    name: name,
    email: email
  };
  
  let postObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  };
  
  return fetch('http://localhost:3000/users', postObj)
    .then(function(response) {
      
    })
}
