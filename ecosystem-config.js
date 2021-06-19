module.exports = {
  apps: [
    // First application
    {
      name: 'app',
      script: 'server.js',
      instances: 'max',
      exec_mode: 'cluster',
      error_file: 'err.log',
      out_file: 'app.log',
      merge_logs: false,
      env: {
        NODE_ENV: 'development',
      },
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
