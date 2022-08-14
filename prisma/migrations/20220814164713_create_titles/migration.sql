-- CreateTable
CREATE TABLE "Title" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Title_title_key" ON "Title"("title");
