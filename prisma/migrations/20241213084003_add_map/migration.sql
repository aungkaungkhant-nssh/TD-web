-- AlterTable
ALTER TABLE "Todos" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE DATE,
ALTER COLUMN "updated_at" SET DATA TYPE DATE;
