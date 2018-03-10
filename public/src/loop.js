function forLoop(inputOne) {
  var result = inputOne;
  var threshold = 49;

  if (result > threshold) {
    var data = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        rank: "1",
        price_usd: "10812.2",
        price_btc: "1.0",
        "24h_volume_usd": "8239930000.0",
        market_cap_usd: "182409782591",
        available_supply: "16870737.0",
        total_supply: "16870737.0",
        max_supply: "21000000.0",
        percent_change_1h: "-0.2",
        percent_change_24h: "7.67",
        percent_change_7d: "27.19",
        last_updated: "1518896967"
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: "2",
        price_usd: "966.646",
        price_btc: "0.0896934",
        "24h_volume_usd": "2449350000.0",
        market_cap_usd: "94418813127.0",
        available_supply: "97676723.0",
        total_supply: "97676723.0",
        max_supply: null,
        percent_change_1h: "-0.24",
        percent_change_24h: "3.12",
        percent_change_7d: "13.6",
        last_updated: "1518896952"
      },
      {
        id: "ripple",
        name: "Ripple",
        symbol: "XRP",
        rank: "3",
        price_usd: "1.1904",
        price_btc: "0.00011045",
        "24h_volume_usd": "1118250000.0",
        market_cap_usd: "46436570534.0",
        available_supply: "39009215838.0",
        total_supply: "99992725510.0",
        max_supply: "100000000000",
        percent_change_1h: "0.2",
        percent_change_24h: "5.46",
        percent_change_7d: "13.15",
        last_updated: "1518896941"
      },
      {
        id: "bitcoin-cash",
        name: "Bitcoin Cash",
        symbol: "BCH",
        rank: "4",
        price_usd: "1534.1",
        price_btc: "0.142346",
        "24h_volume_usd": "668032000.0",
        market_cap_usd: "26038106714.0",
        available_supply: "16972888.0",
        total_supply: "16972888.0",
        max_supply: "21000000.0",
        percent_change_1h: "-0.07",
        percent_change_24h: "2.72",
        percent_change_7d: "23.07",
        last_updated: "1518896952"
      },
      {
        id: "litecoin",
        name: "Litecoin",
        symbol: "LTC",
        rank: "5",
        price_usd: "228.449",
        price_btc: "0.0211974",
        "24h_volume_usd": "880323000.0",
        market_cap_usd: "12624276362.0",
        available_supply: "55260808.0",
        total_supply: "55260808.0",
        max_supply: "84000000.0",
        percent_change_1h: "-0.23",
        percent_change_24h: "0.04",
        percent_change_7d: "47.98",
        last_updated: "1518896941"
      }
    ];

    for (var i = 0; i < data.length; i++) {
      return data[i].id;
    }
  } else {
    return "your imput is smaller than 50";
  }
}
