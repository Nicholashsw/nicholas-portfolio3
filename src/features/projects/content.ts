/**
 * Project copy (English). Every number below is taken from the canonical repository of the
 * project it describes (paper, README, or verification ledger) and must not be edited without
 * re-checking that source. Language-neutral numbers used in the "At a glance" strip live in
 * service.ts as `highlights`.
 */
export const projectsContent = {
  sgxMultifactor: {
    title: 'Multi-Factor Equities on SGX',
    description: 'Classic stock-picking factors work in Singapore. Trading costs take almost all of it.',
    headline: 'The signal is real, but after spreads and borrowing costs, 1.66% a month becomes 0.37%.',
    imageAltText: 'Cost waterfall for the SGX composite strategy',
    categoryText: 'Quantitative Research',
    dateText: 'October 2026',
    detailedDescription: 'Do value, momentum and quality predict Singapore stocks, and can you actually trade them?',
    whyItMatters: '',
    methodology: [
      'Singapore stocks from 1991 to 2026, including the 338 that delisted.',
      'Eight factors with weights fixed in advance.',
      'Real bid-ask spreads, borrow availability and borrow fees.',
      '65 variations tested, corrected for multiple testing, strategy frozen before writing up.',
    ],
    findings: [
      'The factors predict returns (t = 5.2).',
      'Costs remove most of it: 1.66% → 0.92% after spreads → 0.61% after borrow limits → 0.37% after fees (t = 1.1).',
      'Survivorship bias runs the other way in Singapore: most delistings are takeovers, which pay out.',
    ],
    caveats: [
      'Nothing survives multiple-testing correction.',
      '115 delistings are still being checked.',
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
    title: 'FX Options VRP',
    description: 'Sixteen years of CME currency options. They cost more than the volatility that follows, like insurance.',
    headline: 'Options are overpriced in 6 of 7 currencies. Sellers win most years, then lose it all in a year like 2022.',
    imageAltText: 'Implied minus realised volatility by currency',
    categoryText: 'Derivatives Research',
    dateText: 'July 2026',
    detailedDescription: 'Do currency options cost more than the volatility that actually follows, and does picking the most expensive one help? CME data, 2010 to 2026.',
    whyItMatters: '',
    methodology: [
      'Seven currencies, 30 to 90-day options, from Databento.',
      'Each option\'s implied vol against the realised vol of its own futures contract.',
      'Twelve simple ways to sell volatility, using only past data.',
    ],
    findings: [
      'Overpriced in 6 of 7 currencies, most of all yen.',
      'Selling the most expensive currency each day nearly doubles the payoff (t = 2.7).',
      'Losses are rare but large: 2022 lost in every currency.',
    ],
    caveats: [
      'Payoffs from settlement prices, not tradeable P&L.',
      'No costs, hedging or margin.',
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
    title: 'Treasury Futures',
    description: 'Same hedged Treasury curve trade, two signals: it makes money betting on reversal and loses betting on trend.',
    headline: 'Yields trend, but the curve snaps back.',
    imageAltText: 'Same DV01-neutral 2s10s book under momentum and mean-reversion signals',
    categoryText: 'Rates Research',
    dateText: 'July 2026',
    detailedDescription: 'Trend-following works on Treasury yields. Does it work on the shape of the curve? US Treasury futures, 2010 to 2026, hedged and net of costs.',
    whyItMatters: '',
    methodology: [
      'Six Treasury futures, stitched into continuous series.',
      'Curve trades hedged daily against parallel moves in yields.',
      'One tick per side in costs.',
    ],
    findings: [
      'Same trade: +0.71 Sharpe on reversal, −0.79 on trend.',
      'Plain duration momentum earns 0.68.',
      'The curve trades don\'t statistically beat it.',
    ],
    caveats: [
      "Out of sample testing: mean reversion still works. When the curve leans too steep or inverted, the Fed's own next move tends to pull it back, and betting on that pull-back is what makes money.",
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
    title: 'Macro VAR',
    description: 'Over 1,000 models to forecast US growth and inflation. None reliably beats the simplest one.',
    headline: 'After 1,000+ models, nothing reliably beats a simple autoregression.',
    imageAltText: 'Forecast error of each model class against a univariate AR',
    categoryText: 'Econometrics',
    dateText: 'July 2026',
    detailedDescription: 'What actually forecasts US growth, inflation and rates once the models can\'t peek at the future? One study in three stages.',
    whyItMatters: '',
    methodology: [
      'Stage 1: which variables and which estimator.',
      'Stage 2: whether adding economic shocks helps.',
      'Stage 3: the same idea across 1,014 models, using data as it was first published.',
    ],
    findings: [
      'No model family beats a simple autoregression.',
      'A standard filter quietly uses future data, by two-thirds of the cycle\'s own size.',
      'The best shock models look 12% better, but that\'s no more than luck would give.',
    ],
    caveats: [
      'About 30 years of quarterly data, so every test has limited power.',
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
    title: 'LSTM',
    description: 'An LSTM against eleven simpler models on 518 S&P 500 stocks. None beats guessing zero.',
    headline: 'Nothing beats guessing a zero return. The one real signal shows up on stressful days, when trading costs the most.',
    imageAltText: 'Long-short Sharpe before and after costs on calm and stress days',
    categoryText: 'Machine Learning',
    dateText: 'July 2026',
    detailedDescription: 'Does an LSTM predict daily stock returns better than simple models? 518 S&P 500 stocks, 2005 to 2026.',
    whyItMatters: '',
    methodology: [
      'Strict time order: train to 2021, test from 2023.',
      'A model trained on shuffled data runs every time as a leak check.',
      'Then a stock-ranking test split into calm and stressful days, with costs.',
    ],
    findings: [
      'The best model barely matches guessing zero. The LSTM does worse.',
      'On stressful days, LightGBM ranks stocks with real skill (t = 3.2).',
      'That edge earns a 2.1 Sharpe before costs and loses money after them.',
    ],
    caveats: [
      'Today\'s S&P 500 members only, so survivorship bias is present.',
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
    title: 'Market Making',
    description: 'A C++ market maker tested on 21 days of S&P 500 futures. It loses money, and the market\'s direction explains most of why.',
    headline: 'It loses money under every fill assumption. The one great day was luck: the biggest selloff in the sample.',
    imageAltText: 'Daily PnL against the ES move over 21 sessions',
    categoryText: 'Systems / C++',
    dateText: 'October 2026',
    detailedDescription: 'How much of a market-making backtest is the strategy, and how much is the fill assumption? Built in C++ and replayed on real CME order-book data.',
    whyItMatters: '',
    methodology: [
      'C++20 engine: order book, order management, risk limits, an exchange simulator with latency, and an inventory-aware quoter.',
      'A second engine replays the same quotes under four fill rules, from "filled on touch" to "wait your turn in the queue".',
      '21 trading days of E-mini futures, Sep to Oct 2026.',
    ],
    findings: [
      'It loses on average under every rule.',
      'It gets short in rallies and long in selloffs; the day\'s move explains 58% of PnL.',
      'Quoting more aggressively loses 14 times more, because those fills get picked off within a second.',
      'The two engines match fill for fill, which caught an accounting bug.',
    ],
    caveats: [
      'Queue position is estimated, not exact.',
      'One contract, no fees.',
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
