import Binance from "node-binance-api";
import environments from "../constant/Configuration.js";

export default class LBinance {
  constructor() {
    this.client = new Binance().options({
      APIKEY: environments.apiKey,
      APISECRET: environments.apiSecret,
    });
  }

  async instance() {
    return await this.client;
  }

  async getPrice() {
    const value = await this.client.futuresPrices();
    const now = new Date().toISOString();

    console.info(`\n\nBinance Crypto Future Price @[${now}]`);
    console.table(value);
  }
}
