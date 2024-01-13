

var contentful = require("contentful");
const {space} = require("postcss/lib/list")

const client = contentful.createClient({
  accessToken : process.env.CONTENTFUL_ACCESS_TOKEN ,
  space : process.env.CONTENTFUL_SPACE_ID,
  environment : process.env.CONTENTFUL_ENVIRONMENT
})

export default client;
