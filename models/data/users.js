import "dotenv/config.js";
import "../../config/database.js";
import bcryptjs from "bcryptjs";
import User from "../user.js";

let users = [{
    email: "alejandro@mh.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 1,
    online: false,
    photo: "https://i.postimg.cc/fyJsspq8/image.png"
}, {
    email: "lucas@mh.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 1,
    online: false,
    photo: "https://i.postimg.cc/fyJsspq8/image.png"
}, {
    email: "jose@mh.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 1,
    online: false,
    photo: "https://i.postimg.cc/GhdNvZxV/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png"
}, {
    email: "eric@mh.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 1,
    online: false,
    photo: "https://i.postimg.cc/GhdNvZxV/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png"
}, {
    email: "igna@mh.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 1,
    online: false,
    photo: "https://i.postimg.cc/7Yj2FytQ/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png"
}, {
    email: "silvina@mh.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 3,
    online: false,
    photo: "https://i.postimg.cc/7Yj2FytQ/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png"
}, {
    email: "peace@team.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 2,
    online: false,
    photo: "https://i.postimg.cc/2jZbntSQ/image.png"
}, {
    email: "digital@team.com.ar",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 2,
    online: false,
    photo: "https://i.postimg.cc/2jZbntSQ/image.png"
}, {
    email: "jannus@gmail.com",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 2,
    online: false,
    photo: "https://i.postimg.cc/2jZbntSQ/image.png"
}, {
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("hola12345", 10),
    role: 3,
    online: false,
    photo: "https://i.postimg.cc/2jZbntSQ/image.png"
}]

User.insertMany(users)