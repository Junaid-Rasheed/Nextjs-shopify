import Client from "shopify-buy";

export const client = Client.buildClient({
  // storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  // domain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken:'5ccf617282922f509b8d26ff9acdd2b3',
  domain:'next-leather.myshopify.com/',
  //never ever use 'https//' in domin name i struggle for almost 3 hours for this error


  // Main issue while using .env variable that use effect code dont Work..why??
  // Issue is to do with the process.env variables not being available the client browser, therefore when trying to execute the shopify SDK client-side e.g. when creating a shoping basket, it gets initialised without the required vars
});
 