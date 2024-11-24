CREATE SCHEMA tiendaOnline;

USE tiendaOnline;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email varchar(250),
usuario varchar(250),
password varchar(250),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO users (id,  email, usuario, password, createdAt, updatedAt) VALUES
(DEFAULT, "ksoler@udesa.edu.ar", "Keni Soler", "123456789", DEFAULT, DEFAULT),
(DEFAULT, "fbasavilbaso@udesa.edu.ar", "Federico Basavilbaso", "987654321", DEFAULT, DEFAULT),
(DEFAULT,  "sdelosheros@udesa.edu.ar","Salvador de los Heros", "192837465", DEFAULT, DEFAULT),
(DEFAULT, "bgomezrangel@udesa.edu.ar", "Brian Gomez", "567891234", DEFAULT, DEFAULT),
(DEFAULT, "lnavas@udesa.edu.ar", "Luis Navas",  "112233445", DEFAULT, DEFAULT);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen varchar(700) DEFAULT NULL,
producto varchar(250) DEFAULT NULL,
descripcion varchar(600) DEFAULT NULL,
usuarioId INT UNSIGNED,
FOREIGN KEY (usuarioId) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 

INSERT INTO products (id, imagen, producto, descripcion, usuarioId, createdAt, updatedAt) VALUES
(DEFAULT, "auriculares.jpg", "Auriculares Bose", "Audífono inalambrico con cancelación de ruido", 1 , DEFAULT, DEFAULT),
(DEFAULT, "joystick.jpg", "Control Playstation 5", "Joystick inalámbrico Sony para playstation 5", 2 , DEFAULT, DEFAULT),
(DEFAULT, "notebook.jpg", "Macbook Pro 14", "Macbook Pro 14 con chip M3 - 512GB", 3 , DEFAULT, DEFAULT),
(DEFAULT, "vision pro.jpg", "Vision Pro", "Headset con realidad-mixta", 4 , DEFAULT, DEFAULT),
(DEFAULT, "reloj.jpg", "Reloj Garmin", "Reloj GPS Golf Garmin approach S70 47mm", 5 , DEFAULT, DEFAULT),