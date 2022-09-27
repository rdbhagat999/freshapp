// const envObj = Deno.env.toObject();

export const DB = Deno.env.get("DB");
export const TOKEN = Deno.env.get("TOKEN");

export const API_ROOT = `https://${DB}.directus.app`;
export const APP_ROOT = `https://freshapp.deno.dev`;
