import { SignJWT, jwtVerify } from "jose";

const ALG = "HS256";
function getSecret() {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error("JWT_SECRET missing");
  return new TextEncoder().encode(s);
}

export type TokenPayload = { sub: string; admin?: boolean };

export async function issueToken(payload: TokenPayload, ttlSeconds = 60*60*24) {
  const now = Math.floor(Date.now()/1000);
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt(now)
    .setExpirationTime(now + ttlSeconds)
    .sign(getSecret());
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret());
  return payload as TokenPayload & { iat: number; exp: number };
}

