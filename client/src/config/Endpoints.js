export const AllCoins = () => "https://api.coingecko.com/api/v3/coins/";

export const AllExchanges = () => "https://api.coingecko.com/api/v3/exchanges/";

export const SelectedCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const CoinChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const GlobalStats = () => `https://api.coingecko.com/api/v3/global`;

export const GetPortfolios = () =>
  `https://crypto-moon-mark.herokuapp.com/api/v1/portfolio/all-portfolios`;

export const GetUserByPortfolio = (uid) =>
  `https://crypto-moon-mark.herokuapp.com/api/v1/portfolio/user/${uid}`;

export const GetAUserById = (uid) =>
  `https://crypto-moon-mark.herokuapp.com/api/v1/users/${uid}`;
