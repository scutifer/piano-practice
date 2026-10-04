import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
export const sets = sqliteTable("practice_sets", {id:text("id").primaryKey(),userId:text("user_id").notNull(),level:integer("level").notNull(),count:integer("count").notNull(),created:text("created").notNull(),music:text("music").notNull()},t=>[index("idx_sets_user_created").on(t.userId,t.created)]);
