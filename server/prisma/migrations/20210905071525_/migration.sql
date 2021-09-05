/*
  Warnings:

  - You are about to drop the `FileTree` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `FileTree`;

-- CreateTable
CREATE TABLE `FileInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contentname` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `manageid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FileManage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parentid` INTEGER NOT NULL,
    `position` INTEGER NOT NULL,
    `depth` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FileInfo` ADD FOREIGN KEY (`manageid`) REFERENCES `FileManage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
