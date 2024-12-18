import { UserManager } from 'oidc-client-ts';

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_cJy2c7D1Z",
    client_id: "27qos8olja983mb58agran3f52",
    redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "27qos8olja983mb58agran3f52";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-west-1cjy2c7d1z.auth.us-west-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
