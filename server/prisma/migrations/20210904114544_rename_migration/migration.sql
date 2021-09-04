/*
  Warnings:

  - You are about to drop the column `filename` on the `FileTree` table. All the data in the column will be lost.
  - Added the required column `contentName` to the `FileTree` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FileTree` RENAME COLUMN `filename` TO `contentname`;
