const handleError = (response) => {
  if(!response.ok) {
    throw `${response.status} ${response.statusText}`
  } else {
    return response.json()
  }
}

export const getFilteredSeeds = (name) => {
  return fetch(`https://planty-api.herokuapp.com/api/v1/seeds?name=${name}`)
  .then(response => handleError(response))
}

export const registerUser = (user) => {
  return fetch('https://planty-api.herokuapp.com/api/v1/users', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    user: {
      nickname: user.nickname,
      email: user.email,
      zipcode: user.zipcode,
      password: user.password,
      password_confirmation: user.confirmation
    }
  })
})
.then(response => handleError(response))
}

export const login = (user) => {
  return fetch('https://planty-api.herokuapp.com/api/v1/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
     user: {
       email: user.userEmail,
       password: user.userPassword
     }
   })
  })
  .then(response => handleError(response))
}

export const logout = (token) => {
  return fetch('https://planty-api.herokuapp.com/api/v1/users/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${token}`
    }
  })
    .then(response => handleError(response))
}

export const addToCatalogue = (token, seedId) => {
  return fetch('https://planty-api.herokuapp.com/api/v1/seed_catalogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${token}`
    },
    body: JSON.stringify({
      seed_catalog: {
        seed_id: seedId
      }
    })
  })
  .then(response => handleError(response))
}

export const getCatalogue = (token) => {
  return fetch('https://planty-api.herokuapp.com/api/v1/seed_catalogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${token}`
    }
  })
  .then(response => handleError(response))
}

export const patchPlant = (token, id) => {
  return fetch(`https://planty-api.herokuapp.com/api/v1/seed_catalogs/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${token}`
    },
    body: JSON.stringify({
      seed_catalog: {
        planted: true
      }
    })
  })
  .then(response => handleError(response))
}

export const patchUser = (user) => {
  return fetch(`https://planty-api.herokuapp.com/api/v1/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${user.token}`
    },
    body: JSON.stringify({
      user: {
        email: user.email,
        nickname: user.nickname,
        zipcode: user.zipcode
    }
  })
  })
  .then(response => handleError(response))
}
