const config = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-store-phil-1",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://mktm05obb7.execute-api.eu-west-1.amazonaws.com",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_9bs3THqzU",
    APP_CLIENT_ID: "7p75jkv38acevke9lhhjisf90s",
    IDENTITY_POOL_ID: "eu-west-1:afd3b49f-838a-4315-ab7e-c8d11911be0c",
  },
};

export default config;
