export default {
  port: 9001,
  host: "localhost",
  accessTokenTtl: "2m",
  refreshTokenTtl: "1y",
  dbURI:
    "mongodb+srv://tsadmin:tsadmin@cluster0.6irkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  salt: 10,
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjCL/y67JHS0XOctoHoCEeksts
1N8ceZ9rOWcDZgIruhbom/yvu1jR4Tk1F0sAO/W54ncBgt8tZ3zv6vRqs6D7n/fe
2ShuCVxusIafG4M5eNkzbui2HYYYLYwWOPo4JxCc4mZS1X2uQBVF54cx9yKlsxYl
idMIPdPyHMHskSGsiQIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCjCL/y67JHS0XOctoHoCEeksts1N8ceZ9rOWcDZgIruhbom/yv
u1jR4Tk1F0sAO/W54ncBgt8tZ3zv6vRqs6D7n/fe2ShuCVxusIafG4M5eNkzbui2
HYYYLYwWOPo4JxCc4mZS1X2uQBVF54cx9yKlsxYlidMIPdPyHMHskSGsiQIDAQAB
AoGAJN4Bqgkqk3yuGHVYYIkRdDx1y/KHUYUfS7v7U4Vp0EGQlKFRjtuqxitMKHlP
+ImWk6ZmiuzxUu8oDYjwJIDiUiYflUSbbvTkNK5PMWPYPHUi1C4A1SDsy9qizWXR
MX/x+YSZXIEdlDgMD2gwj31GXEZJmdy22diYnMlMzWhPIJECQQD54B4tmvuf/I/v
x/6UUuEMMgCeDrVPsZCUPKrXgex2C/IU+htlej5QfMhPFnI9EGE97gyiP8PCa92s
XUVvaXnrAkEApwe7n3LaQcwMCUwj9wbh+HI/lYzE3hqCoj8ubXKkQK1xaI/rhw4x
cfmCtEler0KtQ8oxiCRBYd4kBYspW66CWwJAdji6LnuYN36IHztxUH3R6jIyJpXw
5K6vJ+N4NRRMayGFvLUEh0OJ/gy7vOdyzz9TsrhRE+a1WOQt8iIC+w5dVwJAVu0s
VOgV9GY34WLR2M6pLX5v3um6zwgm8j9Fb0pZdxuMyOkVn1zgmLtMrXz9nOJrf7sr
mfmcWU2dm5D3/jHMvwJAfo8mIWR7XLSYGUrR6GEI+LXfJC1KWET/SuCZINZaU/Ps
yuLBY8zhc5uCu9FTH5QLjnPJ12XkEoWSVIRcqGZ7UQ==
-----END RSA PRIVATE KEY-----`,
};