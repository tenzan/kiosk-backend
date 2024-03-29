module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'default_database'),
      user: env('DATABASE_USERNAME', 'default_user'),
      password: env('DATABASE_PASSWORD', 'default_password'),
      ssl: env.bool("DATABASE_SSL", false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
