import { json, urlencoded } from 'express';

export const parserMiddleware = [urlencoded({ extended: true }), json()];
