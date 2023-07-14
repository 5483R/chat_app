-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_WinnerId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "WinnerId" DROP NOT NULL,
ALTER COLUMN "WinnerId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_WinnerId_fkey" FOREIGN KEY ("WinnerId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;