/* eslint-disable import/prefer-default-export */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const Env = createEnv({
  server: {
    RECAPTCHA_VERIFY_URL: z.string().min(1),
    RECAPTCHA_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_DEFAULT_SYMBOL: z.string().min(3).max(3),
    NEXT_PUBLIC_DEFAULT_PAGE: z.string().min(1),
    NEXT_PUBLIC_LAST_SYM_KEY: z.string().min(1),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(10),
    NEXT_PUBLIC_TOKEN_AL: z.string().min(1),
    NEXT_PUBLIC_TOKEN_FORMAT: z.string().min(1),
    NEXT_PUBLIC_TOKEN_SK: z.string().min(1),
    NEXT_PUBLIC_TOKEN_IV: z.string().min(1),
    NEXT_PUBLIC_PREFIX_ACCOUNT: z.string().min(1),
    NEXT_PUBLIC_ROOT_URL: z.string().min(1),
    NEXT_PUBLIC_TOKEN_COOKIE_NAME: z.string().min(1),
    NEXT_PUBLIC_REFRESH_TOKEN_COOKIE_NAME: z.string().min(1),
    NEXT_PUBLIC_IDLE_STO_NAME: z.string().min(1),
    NEXT_PUBLIC_MIN_IDLE_TIME: z.string().min(1),
    NEXT_PUBLIC_MAX_IDLE_TIME: z.string().min(1),
    NEXT_PUBLIC_API_URL: z.string().min(1),
    NEXT_PUBLIC_NODE_ENV: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DEFAULT_SYMBOL: process.env.NEXT_PUBLIC_DEFAULT_SYMBOL,
    NEXT_PUBLIC_DEFAULT_PAGE: process.env.NEXT_PUBLIC_DEFAULT_PAGE,
    NEXT_PUBLIC_LAST_SYM_KEY: process.env.NEXT_PUBLIC_LAST_SYM_KEY,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_TOKEN_AL: process.env.TOKEN_AL,
    NEXT_PUBLIC_TOKEN_FORMAT: process.env.TOKEN_FORMAT,
    NEXT_PUBLIC_TOKEN_SK: process.env.TOKEN_SK,
    NEXT_PUBLIC_TOKEN_IV: process.env.TOKEN_IV,
    NEXT_PUBLIC_PREFIX_ACCOUNT: process.env.NEXT_PUBLIC_PREFIX_ACCOUNT,
    NEXT_PUBLIC_ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL,
    NEXT_PUBLIC_TOKEN_COOKIE_NAME: process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME,
    NEXT_PUBLIC_REFRESH_TOKEN_COOKIE_NAME:
      process.env.NEXT_PUBLIC_REFRESH_TOKEN_COOKIE_NAME,
    NEXT_PUBLIC_IDLE_STO_NAME: process.env.NEXT_PUBLIC_IDLE_STO_NAME,
    NEXT_PUBLIC_MIN_IDLE_TIME: process.env.NEXT_PUBLIC_MIN_IDLE_TIME,
    NEXT_PUBLIC_MAX_IDLE_TIME: process.env.NEXT_PUBLIC_MAX_IDLE_TIME,
    RECAPTCHA_VERIFY_URL: process.env.RECAPTCHA_VERIFY_URL,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  },
});
