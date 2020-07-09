interface Config {
  env: string
  apiFromServer: string
  apiFromClient: string
}

const production: Config = {
  env: "production",
  apiFromServer: "http://api:4000/",
  apiFromClient: "http://localhost:4000/",
}

const development: Config = {
  env: "development",
  apiFromServer: "http://localhost:4000/",
  apiFromClient: "http://localhost:4000/",
}

const config: { [environment: string]: Config } = {
  production,
  development,
}

export default config[
  process.env.NODE_ENV === "production" ? "production" : "development"
]
