// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2gqfnrnvuaajgngqudle1q0jvi",     // CognitoClientID
  "api_base_url": "https://er0rtbpehg.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "cda-todo-cda-lambda-refarch.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d11uhpa5r0x0wd.amplifyapp.com"                                      // AmplifyURL
};

export default config;
