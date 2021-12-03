// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7l5fn7bje2nst2use07hmdmnu2",     // CognitoClientID
  "api_base_url": "https://e12q0il3r2.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "cda-todo-crdant-lambda-refarch.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1bgf0mx4v9vm6.amplifyapp.com"                                      // AmplifyURL
};

export default config;
