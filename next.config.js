import withCloud from "@serverless/cloud/nextjs";

export default withCloud({
  reactStrictMode: true,
  images:{
    domains: ["rickandmortyapi.com"],
    loader: "custom",
    path: "/"
  }
});
