-- CreateTable
CREATE TABLE `FileTree` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(191) NOT NULL,
    `parerentid` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
