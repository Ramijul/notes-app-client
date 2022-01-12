const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-bucket",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://5qjckrlxni.execute-api.us-east-2.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_BHiVflbeT",
        APP_CLIENT_ID: "51rlh60o8g2mcjtlpv2lc02p6n",
        IDENTITY_POOL_ID: "us-east-2:2d6b1115-22d8-4ad2-a8e9-c8996a017410",
    },
};
export default config;
