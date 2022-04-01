import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
import { SettingsProvider } from "@contexts/settings-context";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from "./aws-exports";
import { AuthProvider } from "@contexts/auth-context";

Amplify.configure(awsconfig);



Amplify.configure({
    Auth: {


        
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',

        

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_bxGQCsNoZ',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '4udkge376jabh8cr8s6cqr2g4d',

       
    }
});






export default function App(): ReactElement {
    return (
        <AuthProvider>
        <AppBootstrap>
            <SettingsProvider>
                <Navigator />
            </SettingsProvider>
        </AppBootstrap>
        </AuthProvider>
    );
}