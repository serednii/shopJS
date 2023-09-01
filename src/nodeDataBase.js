const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1:3306",
    user: "root",
    database: "seredniimykola",
    password: ""
});

// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// закрытие подключения
connection.end(function (err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});