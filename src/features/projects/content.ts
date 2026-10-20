/**
 * Project copy (English). Every number below is taken from the canonical repository of the
 * project it describes (paper, README, or verification ledger) and must not be edited without
 * re-checking that source. Language-neutral numbers used in the "At a glance" strip live in
 * service.ts as `highlights`.
 */
export const projectsContent = {
  sgxMultifactorFyp: {
    title: 'Multi-Factor Equities on SGX',
    description: 'Factor signals on Singapore stocks are real, but spreads and borrow take the 1.66% a month edge down to 0.37%.',
    headline: 'Real factor structure on Singapore stocks, removed by trading costs: the edge falls from 1.66% to 0.37% a month once spreads and borrow are paid.',
    imageAltText: 'Cost waterfall for the SGX composite strategy',
    categoryText: 'Quantitative Research',
    dateText: 'October 2026',
    detailedDescription: 'Do the standard stock-picking factors (value, momentum, quality, size, liquidity) work on Singapore stocks, and can anyone actually capture them? My NTU final-year project, built on a point-in-time universe that keeps every delisted firm, with every number traced to a run in a verification ledger.',
    whyItMatters: '',
    methodology: [
      'Point-in-time universe from Compustat Global, 1991 to 2026, keeping all 338 delisted firms; exits checked against SDC deal records.',
      'Eight factors combined with weights fixed in advance and never fitted to this universe; fundamentals lagged four months.',
      'Costs from Corwin-Schultz spreads on the names traded, Markit borrow availability and Markit fees.',
      'A 65-test specification grid with Bonferroni, BHY and bootstrap corrections, Newey-West t-statistics throughout, and the strategy frozen on 17 Oct 2026.',
    ],
    findings: [
      'The signal is real: composite IC 0.049 (t = 5.2) and a long-short alpha of 1.32% a month (t = 3.8).',
      'Costs take it away: 1.66% gross, 0.92% after spreads, 0.61% after the borrow screen and 0.37% (t = 1.1) after fees. The long side alone keeps 0.09%.',
      'Survivorship bias runs backwards on SGX. 59% of exits are takeovers at a premium, so dropping dead firms lowers measured returns by 0.89 pp a year.',
      'A six-name STI book earns 10.1% a year against 5.3% for its benchmark (alpha t = 2.26), explained by its value and momentum tilt.',
    ],
    caveats: [
      'None of the 65 grid tests survives BHY, so the claim is structure, not alpha.',
      'The survivorship figure is an upper bound until the last 115 delisting exits are adjudicated.',
    ],
    keyFeatures: {},
    galleryImages: {
      cost_waterfall: {
        alt: 'Cost waterfall for the SGX composite strategy',
        caption: 'Decile long-short on the composite, 2003 to 2026, with spreads charged on the names traded each month.',
      },
      exit_mix: {
        alt: 'SGX delisting exit mix',
        caption: 'Most SGX delistings are takeovers, and takeovers pay on the way out. That is why the bias runs backwards.',
      },
      sti_core: {
        alt: 'STI-core book against the equal-weight STI',
        caption: 'The six-name STI book against the equal-weight STI, net of costs.',
      },
    },
    challenges: '',
    learnings: '',
  },

  fxOptionsVrp: {
    title: 'Volatility Risk Premia in CME FX Options',
    description: 'Sixteen years of CME FX options. Implied vol beats realised in 6 of 7 currencies, and the payoff looks like insurance.',
    headline: 'FX options cost more than the volatility that follows in 6 of 7 currencies. Sellers get paid most years and give it back in years like 2022.',
    imageAltText: 'Implied minus realised volatility by currency',
    categoryText: 'Derivatives Research',
    dateText: 'July 2026',
    detailedDescription: 'Does implied volatility on CME FX options exceed the volatility that actually follows, and does picking the most expensive currency help? Sixteen years of exchange data, June 2010 to June 2026, from Databento.',
    whyItMatters: '',
    methodology: [
      'Seven currencies at 30, 60 and 90 days from Databento CME data: 986 files, 11 GB raw, 440,467 at-the-money rows.',
      'Black-76 implied vol against the realised vol of each option\'s own futures contract, with the 2017 CME symbol change handled explicitly.',
      'Twelve short-vol payoff proxies with Newey-West and non-overlapping t-statistics; signals use trailing data only.',
    ],
    findings: [
      'Implied beats realised in 6 of 7 currencies. Yen is highest at +0.87 vol points and NZD is flat.',
      'Selling vol across the board earns 0.28 vol points a day (non-overlapping t = 2.27). Picking the most expensive currency each day lifts it to 0.51 (t = 2.71).',
      'The payoff is shaped like insurance: skew −1.69, excess kurtosis 7.0, and 2022 loses in all seven currencies.',
    ],
    caveats: [
      'Payoff proxies on settlement marks, not P&L: no costs, delta hedging or margin.',
      'NZD is thin even after 2014, and its pre-2014 series is excluded as an artefact.',
    ],
    keyFeatures: {},
    galleryImages: {
      premium_by_currency: {
        alt: 'Implied minus realised volatility by currency',
        caption: 'Median at-the-money implied minus forward realised vol by currency, 2010 to 2026 (NZD from 2014).',
      },
      cumulative_payoff: {
        alt: 'Cumulative payoff proxy',
        caption: 'Cumulative payoff proxy: selling everything against picking the most expensive currency each day.',
      },
      premium_by_year: {
        alt: 'The premium by year and currency',
        caption: 'Positive most years, negative almost everywhere in 2022.',
      },
    },
    challenges: '',
    learnings: '',
  },

  treasuryCurve: {
    title: 'Treasury Futures: Momentum vs Mean Reversion',
    description: 'The same hedged 2s10s trade earns a Sharpe of +0.71 with mean reversion and −0.79 with momentum. Levels trend, spreads revert.',
    headline: 'The same hedged 2s10s trade earns a net Sharpe of +0.71 with mean reversion and −0.79 with momentum.',
    imageAltText: 'Same DV01-neutral 2s10s book under momentum and mean-reversion signals',
    categoryText: 'Rates Research',
    dateText: 'July 2026',
    detailedDescription: 'Momentum works on Treasury duration. Does it work on the shape of the curve? US Treasury futures from January 2010 to July 2026, every curve trade DV01-neutral and net of costs.',
    whyItMatters: '',
    methodology: [
      'Six futures contracts from Bloomberg, rebuilt into continuous series so roll gaps are never booked as returns.',
      'Curve trades hedged with the daily cheapest-to-deliver DV01; signals use the previous day\'s data.',
      'One tick per contract per side in costs, and Diebold-Mariano tests against outright duration momentum.',
    ],
    findings: [
      'Same book, opposite signals: momentum −0.79, mean reversion +0.71. The book\'s P&L does not move with the 10-year yield, so the gap is the signal, not the hedge.',
      'Net Sharpe: duration momentum 0.68, 2s10s reversion 0.71, 5s30s reversion 0.66, butterfly 0.07.',
      'Neither curve trade beats outright momentum (Diebold-Mariano p = 0.41 and 0.49).',
    ],
    caveats: [
      'The reversion direction was confirmed on the full sample and still needs a walk-forward test.',
      'A cost-loader bug made the first published table gross of costs. It was fixed on 23 Aug 2026 and no conclusion changed.',
    ],
    keyFeatures: {},
    galleryImages: {
      signal_contrast: {
        alt: 'Same DV01-neutral 2s10s book under opposite signals',
        caption: 'One DV01-neutral 2s10s book, two signals.',
      },
      equity_curves: {
        alt: 'Net cumulative performance of the four strategies',
        caption: 'Net cumulative performance of the four strategies, 2010 to 2026.',
      },
    },
    challenges: '',
    learnings: '',
  },

  macroVarResearchLab: {
    title: 'Macro VAR Research Lab',
    description: 'One question asked three ways: over 1,000 forecasting models for US GDP and inflation, and none reliably beats a simple autoregression.',
    headline: 'Across 1,000+ models and five estimator classes, nothing reliably beats a simple autoregression out of sample.',
    imageAltText: 'Forecast error of each model class against a univariate AR',
    categoryText: 'Econometrics',
    dateText: 'July 2026',
    detailedDescription: 'What actually forecasts US GDP, inflation and interest rates once look-ahead, overfitting and multiple comparisons are controlled? One study in three stages on public US data: first which specification and estimator, then whether constructed shocks help, then whether the shock idea survives at scale and in real time. One consolidated paper, with the three stage papers behind it.',
    whyItMatters: '',
    methodology: [
      'Stage 1: a disciplined specification search and a horse race of OLS, Bayesian VAR, ridge, LASSO and elastic net, judged with the Model Confidence Set.',
      'Stage 2: Bayesian VARs with constructed shocks, scored on density forecasts.',
      'Stage 3: 1,014 VARX models in an expanding walk-forward, rebuilt on real-time ALFRED data.',
    ],
    findings: [
      'No estimator class beats a univariate AR by a Model Confidence Set margin.',
      'A full-sample HP filter leaks the future: the cycle is revised by 66% of its own standard deviation at the endpoint.',
      'Shocks cut one-quarter GDP error by about 12%, but only 4.0% of specifications beat the core VAR at the 5% level, which is what chance delivers.',
      'A naively coded Minnesota prior left the model explosive (eigenvalue 1.068); dummy observations fix it (0.96).',
    ],
    caveats: [
      'Short samples (100 to 130 quarters) limit the power of every test.',
      'The three stages use different samples and transforms, stated in the paper; some Stage 2 shock inputs come from spreadsheet exports that cannot be redistributed.',
    ],
    keyFeatures: {},
    galleryImages: {
      models_vs_ar: {
        alt: 'Forecast error of each model class against a univariate AR',
        caption: 'Mean one-quarter-ahead RMSE across four variables, relative to a univariate AR.',
      },
      hp_lookahead: {
        alt: 'HP-filter look-ahead',
        caption: 'The two-sided HP filter knows the future near the endpoint; a real-time filter does not.',
      },
    },
    challenges: '',
    learnings: '',
  },

  lstmEquityForecasting: {
    title: 'LSTM vs Classical ML for Equity Returns',
    description: 'An LSTM against eleven simpler models on 518 S&P 500 stocks. Nothing materially beats predicting zero, and the one real signal dies at 10 bp costs.',
    headline: 'Nothing materially beats predicting a zero return. The one real signal appears on stress days, where trading costs the most.',
    imageAltText: 'Long-short Sharpe before and after costs on calm and stress days',
    categoryText: 'Machine Learning',
    dateText: 'July 2026',
    detailedDescription: 'Does an LSTM forecast daily US stock returns better than simpler models? 518 S&P 500 stocks from March 2005 to July 2026, with a leakage alarm on every run.',
    whyItMatters: '',
    methodology: [
      'A Bloomberg panel of 518 S&P 500 stocks, checked against a free mirror.',
      'Chronological split only (train to 2021, validation 2022, test from 2023); a shuffled-target model runs every time as a leakage alarm.',
      'An LSTM against eleven classical models, then a cross-sectional test split by a VIX regime fixed before the test, with a costed decile long-short.',
    ],
    findings: [
      'On 466,426 test stock-days the best model is 0.16% better than predicting zero, close to the shuffled control. The LSTM is 3.6% worse.',
      'On stress days LightGBM reaches a rank IC of 0.044 (t = 3.17), against 0.005 on calm days.',
      'Its long-short earns a gross Sharpe of 2.09 on stress days and loses after 10 bp a side. Turnover is about 2.7 times a day.',
    ],
    caveats: [
      'Current S&P 500 members, so survivorship bias is present.',
      'One LSTM architecture with ablations, not a full search.',
    ],
    keyFeatures: {},
    galleryImages: {
      stress_vs_calm: {
        alt: 'Long-short Sharpe before and after costs on calm and stress days',
        caption: 'LightGBM decile long-short, before and after costs, on calm and stress days.',
      },
      rmse_vs_zero: {
        alt: 'Test error of each model against predicting zero',
        caption: 'Test error of each model against predicting a zero return.',
      },
      xs_ls_equity_curve: {
        alt: 'Ridge long-short, gross and net',
        caption: 'Ridge long-short over the test period, gross and net of 10 bp a side, stress days shaded.',
      },
    },
    challenges: '',
    learnings: '',
  },

  lowlatMm: {
    title: 'Low-Latency Market-Making Engine',
    description: 'A C++ market-making engine tested on 21 days of E-mini futures data. It loses money, and most of the daily swing is market direction.',
    headline: 'Over 21 real sessions of E-mini S&P 500 futures the quotes lose money under every fill rule, and most of the daily swing is market direction.',
    imageAltText: 'Daily PnL against the ES move over 21 sessions',
    categoryText: 'Systems / C++',
    dateText: 'October 2026',
    detailedDescription: 'How much of a market-making backtest is the strategy, and how much is the fill assumption? A C++20 event-driven engine and a second, independent replay engine, run on real CME order-book data from Databento.',
    whyItMatters: '',
    methodology: [
      'C++20 engine: order book, OMS, pre-trade risk gate with a kill switch, exchange simulator with latency, and an inventory-skewed market maker on one deterministic event bus.',
      'The replay engine runs the same quotes under four fill rules: on touch, on trades through the price, and two rules that make each order wait its turn in the queue.',
      '21 regular sessions of ESZ6, 18 Sep to 16 Oct 2026, each starting flat, with fill markouts from 0 ms to 5 minutes.',
    ],
    findings: [
      'Every fill rule loses on average: −US$7,310 a day filling on touch and −US$4,451 with queue position, neither significant.',
      'Direction drives it. The quotes end up short in rallies and long in selloffs, so each point ES rises costs about US$500 and the move explains 58% of daily PnL.',
      'The one standout day, 16 Oct, was the biggest selloff in the sample: +US$30,125 on touch and −US$4,663 once orders wait in the queue.',
      'The two engines produce byte-identical fills on the real data, and the cross-check exposed an entry-price bug in the OMS.',
      'A smarter rule (microprice fair value, quoting at the touch, an imbalance guard), tuned on 10 days and tested on 11, is far worse: −US$70,928 a day with queue position (t = −4.87). It trades about 30 times the volume, and those fills are picked off within a second.',
    ],
    caveats: [
      'Queue position is estimated from top of book and trade prints; order-level data would make it exact.',
      'One contract, no fees, and a requote rate far above what an exchange would allow.',
    ],
    keyFeatures: {},
    galleryImages: {
      pnl_vs_move: {
        alt: 'Daily PnL against the ES move over 21 sessions',
        caption: 'Daily PnL against ES\'s open-to-close move, 21 sessions.',
      },
      pnl_by_rule: {
        alt: 'Mean daily PnL by fill rule',
        caption: 'Mean daily PnL by fill rule, with 16 Oct marked.',
      },
      pnl_sample: {
        alt: 'ESZ6 on 16 Oct 2026: price, position and PnL',
        caption: 'ESZ6 on 16 Oct 2026, filling on touch: price, net position and PnL.',
      },
    },
    challenges: '',
    learnings: '',
  },
} as const;
