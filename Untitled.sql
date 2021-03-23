CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "password" text NOT NULL,
  "email" text NOT NULL,
  "task_id" int
);

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "title" text NOT NULL,
  "description" text,
  "priority" text NOT NULL,
  "situation" text NOT NULL
);

ALTER TABLE "users" ADD FOREIGN KEY ("task_id") REFERENCES "tasks" ("id");