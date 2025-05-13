import { isEmail } from "validator"
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"
const formData = {
	email: "",
	message: "",
}
const form = document.querySelector(".feedback-form")
const checkValidity = () => {
	return (
		formData.email.trim() === "" ||
		!isEmail(formData.email) ||
		formData.message.trim() === ""
	)
}
form.addEventListener("input", e => (formData[e.target.name] = e.target.value))
form.addEventListener("submit", e => {
	e.preventDefault()
	if (checkValidity()) {
		iziToast.error({
			title: "Hey",
			message: "Incorrect data presented, try again!",
		})
		return
	}
	iziToast.success({
		title: "Yoopeee",
		message: "Thank you for sending your message! 😊",
	})
})
