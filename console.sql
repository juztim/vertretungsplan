create table teacher(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
teacher_shortname varchar(255),
teacher_name varchar(255)
);

create table classes(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
hour TINYINT NOT NULL,
classroom varchar(255) NOT NULL,
subject varchar(255) NOT NULL,
reason varchar(255),
teacher_id INT UNSIGNED NOT NULL,
date varchar(255) NOT NULL
);

drop table classes;

INSERT INTO teacher (teacher_name, teacher_shortname) VALUES ("Fr. Rudolph", "rud"), ("Fr. Loebbert", "loeb"), ("Fr. Tetzlaff", "tz"), ("Fr. Peter", "pet"), ("Fr. Störmer", "sto"), ("Hr. Engels", "eng");

DELETE FROM teacher WHERE id IN (3, 4);

select * FROM teacher;
select * FROM classes;