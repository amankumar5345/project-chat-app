/**
 * Environments variables declared here.
 */

export default {
  NodeEnv: process.env.NODE_ENV ?? '',
  Port: process.env.PORT ?? 0,
  CookieProps: {
    Key: 'QuizMaster',
    Secret: process.env.COOKIE_SECRET ?? '',
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
      path: process.env.COOKIE_PATH ?? '',
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      secure: process.env.SECURE_COOKIE === 'true',
      sameSite: process.env.SECURE_COOKIE === 'true' ? 'none' : 'lax',
    },
  },
  Jwt: {
    Secret: process.env.JWT_SECRET ?? '',
    Exp: Math.floor(Number(process.env.COOKIE_EXP ?? 0) / 1000),
  },
} as const;
