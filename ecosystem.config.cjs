module.exports = {
  apps: [
    {
      name: "vip-networks",
      script: "./dist/index.cjs",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: "3016",
        SESSION_SECRET: "a2a9b2a4e96b3d75f4777405812dfab5008ea722ddda58c52a8aceb9df503bd591e6c2d5f66c7b625e5a7c2ff89ff808",
        // DATABASE_URL is only needed if you switch from in-memory to PostgreSQL storage.
        // Uncomment and fill in when ready:
        // DATABASE_URL: "postgresql://user:password@localhost:5432/vip_networks"
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};
