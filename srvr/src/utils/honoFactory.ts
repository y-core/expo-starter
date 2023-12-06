import { Hono } from 'hono';
export { cors } from 'hono/cors';
export { validator } from 'hono/validator';
import { Bindings, Variables } from '§/@types';

const hono = new Hono<{ Bindings: Bindings; Variables: Variables }>();

export default hono;
