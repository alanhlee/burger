document.addEventListener('click', e => {
  if (e.target.className === 'devour') {
  axios.put(`/api/burgers/${e.target.dataset.id}`, {devoured: "1"})
    let devourElem = document.createElement('li')
  devourElem.textContent = `
  ${e.target.value}
  `
  document.getElementById('devoured').append(devourElem)
  e.target.parentNode.remove()
  }
})