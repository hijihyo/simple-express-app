-- 0000.sql: CREATE TABLE article and user

CREATE TABLE `posts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `content` TEXT NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT current_timestamp(),
    `last_updated` DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;