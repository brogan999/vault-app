-- Run this in Supabase SQL Editor ONLY IF your tables are currently
-- PascalCase (User, Document, ChatSession, Message, PsychProfile, Embedding).
-- If your tables are already named users, documents, etc., skip this.
--
-- Prisma @@map expects: users, documents, chatSessions, messages, psychProfile, Embedding

-- Rename tables (only runs renames for tables that exist)
-- PostgreSQL: unquoted names lowercase; use quoted for camelCase (psychProfile, chatSessions)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'User') THEN
    ALTER TABLE "User" RENAME TO users;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'PsychProfile') THEN
    ALTER TABLE "PsychProfile" RENAME TO "psychProfile";
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Document') THEN
    ALTER TABLE "Document" RENAME TO documents;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'ChatSession') THEN
    ALTER TABLE "ChatSession" RENAME TO "chatSessions";
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Message') THEN
    ALTER TABLE "Message" RENAME TO messages;
  END IF;
  -- "Embedding" stays as "Embedding" (no change)
END $$;
