
console.log('It works')

$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')
  })
})
