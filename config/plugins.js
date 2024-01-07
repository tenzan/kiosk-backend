module.exports = ({ env }) => ({
  // ... other plugin configurations
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN'),
        // Optional: You can add additional Mailgun options here
      },
      settings: {
        defaultFrom: env('MAILGUN_DEFAULT_FROM'),
        defaultReplyTo: env('MAILGUN_REPLY_TO'),
      },
    },
  },
});
