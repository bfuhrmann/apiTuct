/*
  Warnings:

  - Added the required column `updatedAt` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auditlog` ADD COLUMN `agendaId` INTEGER NULL;

-- AlterTable
ALTER TABLE `role` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Agenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `imageGira` VARCHAR(191) NOT NULL,
    `dateGira` DATETIME(3) NOT NULL,
    `isPublic` BOOLEAN NOT NULL DEFAULT false,
    `confirmGira` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD CONSTRAINT `AuditLog_agendaId_fkey` FOREIGN KEY (`agendaId`) REFERENCES `Agenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
