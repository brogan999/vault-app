-- Pricing architecture: user_subscriptions, user_purchases, user_message_credits, user_reports
-- Run this ENTIRE file once in Supabase SQL Editor. user_id is TEXT to match users.id.

-- Drop existing tables so they are recreated with correct user_id type (required if you ran an older version)
DROP TABLE IF EXISTS user_reports;
DROP TABLE IF EXISTS user_message_credits;
DROP TABLE IF EXISTS user_purchases;
DROP TABLE IF EXISTS user_subscriptions;

-- 1. user_subscriptions
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan TEXT NOT NULL CHECK (plan IN ('pro_monthly', 'pro_annual')),
  status TEXT NOT NULL CHECK (status IN ('active', 'cancelled', 'past_due', 'trialing')),
  current_period_start TIMESTAMPTZ NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  stripe_subscription_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe ON user_subscriptions(stripe_subscription_id) WHERE stripe_subscription_id IS NOT NULL;

-- 2. user_purchases (report | bundle | specialty_report | credit_pack)
CREATE TABLE user_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_type TEXT NOT NULL CHECK (product_type IN ('report', 'bundle', 'specialty_report', 'credit_pack')),
  product_id TEXT NOT NULL,
  price_paid INT NOT NULL,
  purchased_at TIMESTAMPTZ DEFAULT now(),
  stripe_payment_id TEXT
);

CREATE INDEX IF NOT EXISTS idx_user_purchases_user_id ON user_purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_user_purchases_product ON user_purchases(user_id, product_type, product_id);

-- 3. user_message_credits (monthly_allowance | rollover | top_up)
CREATE TABLE user_message_credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  credit_type TEXT NOT NULL CHECK (credit_type IN ('monthly_allowance', 'rollover', 'top_up')),
  credits_remaining INT NOT NULL DEFAULT 0,
  period_start TIMESTAMPTZ,
  period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_message_credits_user_id ON user_message_credits(user_id);
CREATE INDEX IF NOT EXISTS idx_user_message_credits_user_type ON user_message_credits(user_id, credit_type);

-- 4. user_reports (which report types are unlocked per user)
CREATE TABLE user_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  framework TEXT NOT NULL CHECK (framework IN (
    'big_five', 'personality_type', 'enneagram', 'work_style',
    'western_astrology', 'vedic_astrology', 'human_design', 'numerology', 'chinese_zodiac', 'mayan_astrology',
    'career_compass', 'relationship_blueprint', 'annual_portrait'
  )),
  unlocked_via TEXT NOT NULL CHECK (unlocked_via IN ('purchase', 'subscription', 'bundle')),
  unlocked_at TIMESTAMPTZ DEFAULT now(),
  report_data JSONB
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_user_reports_user_framework ON user_reports(user_id, framework);
CREATE INDEX IF NOT EXISTS idx_user_reports_user_id ON user_reports(user_id);
