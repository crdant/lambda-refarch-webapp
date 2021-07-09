// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7r7vgeu0k4hfv6rjuoiak6330m",     // CognitoClientID
  "api_base_url": "https://5zqz78ftsi.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "cda-todo-cda-lambda-refarch-app.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d23uhvki77nsky.amplifyapp.com"                                      // AmplifyURL
};

export default config;
