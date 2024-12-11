import 'dotenv/config.js'
import '../../config/database.js'
import Author from '../Author.js'

let authors = [{
    name: "alejandro",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6740abfde3746f32a898d131'
}, {
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6740abfde3746f32a898d132'
}, {
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6740abfde3746f32a898d133'
}, {
    name: "eric",
    city: "resistencia",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6740abfde3746f32a898d134'
}, {
    name: "igna",
    last_name: "borraz",
    city: "rosario",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6740abfde3746f32a898d135'
}, {
    name: "Jannus",
    last_name: "Largo",
    city: "Tuluá",
    country: "Colombia",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6740abfde3746f32a898d139'
}]

Author.insertMany(authors)