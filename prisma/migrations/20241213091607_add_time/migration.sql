/*
  Warnings:

  - The `created_at` column on the `Todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `Todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
