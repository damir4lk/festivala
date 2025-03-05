document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.link button')
	const message = document.getElementById('message')

	buttons.forEach(button => {
		button.addEventListener('click', function (event) {
			event.preventDefault()

			const inputName = document.querySelector("input[type='text']").value
			const inputEmail = document.querySelector("input[type='email']").value

			message.style.visibility = 'visible' // Делаем текст видимым

			if (!inputName || !inputEmail) {
				message.style.color = 'red'
				message.textContent =
					'Please enter your name and email before proceeding.'
			} else {
				message.style.color = 'green'
				message.textContent = `Thank you, ${inputName}! Your payment method has been selected.`
			}
		})
	})
})
