-- AlterTable
ALTER TABLE "User" ADD COLUMN     "RefreshToken" TEXT,
ALTER COLUMN "FA_On" DROP NOT NULL,
ALTER COLUMN "XP" DROP NOT NULL,
ALTER COLUMN "badge" DROP NOT NULL,
ALTER COLUMN "draw" DROP NOT NULL,
ALTER COLUMN "loss" DROP NOT NULL,
ALTER COLUMN "win" DROP NOT NULL;