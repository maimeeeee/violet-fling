/*
  Warnings:

  - You are about to drop the column `parerentid` on the `FileTree` table. All the data in the column will be lost.
  - Added the required column `parentid` to the `FileTree` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FileTree` DROP COLUMN `parerentid`,
    ADD COLUMN     `parentid` INT NOT NULL;
