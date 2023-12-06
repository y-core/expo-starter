import { apiConfig } from '§/constants';
import authRoutes from '§/routes/auth';
import app from '§/utils';

app.get('/', (c) => {
  console.debug('200 OK => /');
  return c.text('200 OK');
});

app.route(apiConfig.api.paths.auth.route, authRoutes);

export default app;
