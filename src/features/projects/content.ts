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
    description: 'Over 1,000 forecasting models for US GDP and inflation, and none reliably beats a simple autoregression.',
    headline: 'Across 1,000+ models and five estimator classes, nothing reliably beats a simple autoregression out of sample.',
    imageAltText: 'Forecast error of each model class against a univariate AR',
    categoryText: 'Econometrics',
    dateText: 'July 2026',
    detailedDescription: 'What actually forecasts US GDP, inflation and interest rates once look-ahead, overfitting and multiple comparisons are controlled? Three studies on public US data, each with its own paper.',
    whyItMatters: '',
    methodology: [
      'Study 1: a disciplined specification search and a horse race of OLS, Bayesian VAR, ridge, LASSO and elastic net, judged with the Model Confidence Set.',
      'Study 2: Bayesian VARs with constructed shocks, scored on density forecasts.',
      'Study 3: 1,014 VARX models in an expanding walk-forward, rebuilt on real-time ALFRED data.',
    ],
    findings: [
      'No estimator class beats a univariate AR by a Model Confidence Set margin.',
      'A full-sample HP filter leaks the future: the cycle is revised by 66% of its own standard deviation at the endpoint.',
      'Shocks cut one-quarter GDP error by about 12%, but only 4.0% of specifications beat the core VAR at the 5% level, which is what chance delivers.',
      'A naively coded Minnesota prior left the model explosive (eigenvalue 1.068); dummy observations fix it (0.96).',
    ],
    caveats: [
      'Short samples (100 to 130 quarters) limit the power of every test.',
      'Some Study 2 shock inputs come from spreadsheet exports that cannot be redistributed.',
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
    ],
    caveats: [
      'Queue position is estimated from top of book and trade prints; order-level data would make it exact.',
      'One contract, no fees, and a naive quoting rule that requotes far more than an exchange would allow.',
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

  nkdsge: {
    title: 'New-Keynesian DSGE: Solution, Estimation, Model Comparison',
    description:
      'A three-equation NK DSGE model solved with Klein’s method, estimated by Kalman MLE and Bayesian MCMC on live ECB and FRED data, with marginal-likelihood model comparison and posterior predictive checks.',
    headline:
      'The data decisively prefer a forward-looking, interest-rate-smoothing policy rule (log Bayes factors +91 and +46), and the canonical orthogonal-shock assumption is rejected.',
    imageAltText: 'Model comparison by marginal likelihood across policy rules',
    categoryText: 'Structural Macro',
    dateText: 'July 2026',
    detailedDescription:
      'A compact, readable Python package that builds the canonical three-equation New Keynesian model from its structural equations, solves it with the Klein (2000) generalised-Schur method, and confronts it with official euro-area data pulled keyless from the ECB Data Portal at run time, then with US data from FRED. It proceeds from calibration to Kalman-filter maximum likelihood, to three policy-rule specifications, to full Bayesian estimation and Geweke marginal-likelihood model comparison, to posterior predictive checks with a measurement-error prior anchored on 84 ALFRED data vintages.',
    whyItMatters:
      'Structural models are how central banks and macro desks reason about policy. Most public DSGE code stops at calibration and impulse responses. This one estimates, compares and tests, and reports where the model breaks: the canonical shock structure is rejected, and the forward-looking smoothed rule repairs most, not all, of it.',
    methodology: [
      'Blanchard-Kahn determinacy checked; structural residuals at machine zero; exact theoretical moments computed from the state-space form.',
      'Kalman-filter MLE of shock standard deviations and persistences; recovered structural innovations by Kalman inversion.',
      'Three policy rules (contemporaneous, backward-looking smoothed, forward-looking smoothed); random-walk Metropolis with 2 chains × 12,000 draws, 3,000 burn-in, standard Beta/Gamma/inverse-Gamma priors; R-hat diagnostics.',
      'Geweke (1999) modified harmonic mean marginal likelihoods across specifications; the same pipeline run on the United States.',
      'Posterior predictive checks on ten moments with a measurement-error prior anchored to ALFRED revision statistics; a prior-anchor sweep to show where identification breaks down.',
    ],
    findings: [
      'Under the contemporaneous rule the estimated cost-push / monetary shock correlation is about −0.94, so the canonical orthogonal-shock assumption is rejected by euro-area data; smoothing moves it to −0.63 and the forward-looking smoothed rule to about +0.20.',
      'Log marginal likelihoods of roughly −635, −544 and −498 give log Bayes factors of about +91 for smoothing and a further +46 for making the rule forward-looking; the US ordering is the same (+65 for smoothing).',
      'Posterior means are economically sensible in both economies: a Taylor coefficient clearly above one, Calvo stickiness above 0.75, and a smoothing parameter near 0.8.',
      'With a revision-anchored measurement-error prior the posterior predictive checks pass on nine of ten moments; the shock correlation is still flagged (p = 0.02) in the euro area, and anchors above 1.2 break identification.',
    ],
    caveats: [
      'Three-equation model with AR(1) shocks; no capital, no labour market, no financial block.',
      'Output gap measured by a full-sample HP filter of log real GDP for estimation purposes, a choice the VAR lab shows to be problematic for forecasting.',
      'No written paper; the README is the complete write-up and the executed notebook walks through every stage.',
    ],
    keyFeatures: {},
    galleryImages: {
      model_comparison: {
        alt: 'Model comparison by marginal likelihood',
        caption:
          'Log marginal likelihood relative to the best specification: the forward-looking smoothed rule wins by a log Bayes factor of about 46 over backward smoothing and 137 over the contemporaneous rule.',
      },
      policy_progression: {
        alt: 'Shock correlation across policy specifications',
        caption:
          'Cost-push versus monetary innovations under each rule: the correlation runs −0.94, −0.63, +0.20 as the rule is made smoothed and then forward-looking.',
      },
      posteriors: {
        alt: 'Posterior distributions with priors overlaid',
        caption:
          'Posterior distributions of the structural and policy parameters with priors overlaid and the calibrated values marked.',
      },
      ppc: {
        alt: 'Posterior predictive checks, euro area',
        caption:
          'Posterior predictive checks with a revision-anchored measurement-error prior: nine of ten moments inside the band; the shock correlation remains flagged.',
      },
      country_comparison: {
        alt: 'Structural estimates by economy',
        caption:
          'Euro-area versus United States posterior means under the forward-looking rule.',
      },
      irf: {
        alt: 'Impulse responses to one-standard-deviation shocks',
        caption:
          'Impulse responses of the output gap, inflation and the nominal rate to demand, cost-push and monetary shocks.',
      },
    },
    challenges:
      'Getting a generalised-Schur solution that satisfies the model equations to machine precision, diagnosing why a textbook shock structure is rejected by the data, and building a measurement-error prior that is disciplined by actual revision statistics rather than chosen to make the checks pass.',
    learnings:
      'Bayesian estimation and model comparison for structural models, and the difference between a model that fits and a model whose failures are located.',
  },

  globalRatesRv: {
    title: 'Global Rates Relative Value',
    description:
      'Cross-country government bond relative value: cointegration screening, DV01-neutral pairs and policy-regime analysis across the US, Germany, Japan and Canada. A negative result.',
    headline:
      'Cross-country yield spreads were not cointegrated out of regime over 2010–2026; the hedge ratio found in one regime is the wrong position in the next.',
    imageAltText:
      'Out-of-regime Sharpe of pairs fitted in one policy regime and traded in the next',
    categoryText: 'Rates Research',
    dateText: 'July 2026',
    detailedDescription:
      'A test of a common idea: that developed-market yield curves are tied by long-run equilibria that can be traded when they diverge. The pipeline screens every candidate pair for cointegration, trades survivors with a z-score state machine on DV01-neutral legs, controls the false-discovery rate, and, critically, checks whether relationships found in one monetary-policy regime survive into the next. They do not, and the repository presents the full screen table rather than a cherry-picked survivor.',
    whyItMatters:
      '2010–2026 spans divergent QE programmes, the ECB’s negative-rate era, the Bank of Japan’s yield-curve control and desynchronised post-COVID hiking. A stable long-run equilibrium between two curves is a strong assumption, and this period violates it. Without FDR control and the out-of-regime test, the 11 raw within-regime survivors (6 after FDR) would have looked like discoveries; none of them trades profitably in the next regime.',
    methodology: [
      'Free public data only: FRED (US yields), Bundesbank Svensson curves, Japan MoF JGB curve, Bank of Canada Valet, ECB FX; 3,762 aligned daily observations 2010-01-04 to 2026-06-30.',
      'Eighteen candidate pairs across 2Y/5Y/10Y/30Y levels and slopes; Engle-Granger and ADF screening on the full sample and within four policy regimes; Benjamini-Hochberg FDR control.',
      'Survivors traded with a z-score state machine on DV01-neutral legs via a shared research core (ratslib); forward test fits the hedge ratio in one regime and trades the next.',
      'FX contamination measured explicitly against the relevant currency pair.',
    ],
    findings: [
      'Full sample: 0 of 18 candidates cointegrated.',
      'Within policy regimes: 11 of 144 tests pass the screen and 6 survive FDR correction, with half-lives of 8–25 days among the FDR survivors; Canada appears in 10 of the 11 raw survivors.',
      'Fit one regime, trade the next: mean Sharpe −0.27, positive in only 5 of 12 tests. The hedge ratio for DE5Y/CA5Y runs 1.28, 0.04, 0.15, 0.95 across the four regimes and DE10Y/CA10Y swings 1.20 → 0.43 → 0.26 → 1.39.',
      'FX contamination R² is at most 0.0016, so the negative result is a rates finding, not a currency artefact.',
    ],
    caveats: [
      'Research stage complete and presented as a negative result; the repository’s own manifest still marks the project in progress because a live FX-adjusted layer and a wider market set were scoped and not built.',
      'Canada 30Y is the Bank of Canada’s generic long benchmark rather than a constant maturity; Japan 2Y has 1,106 zero-change days under yield-curve control.',
      'Rebuilt on 2026-08-23 on FRED US yields: the original run had cached a Bloomberg US export, which is not redistributable. On FRED the screen is more permissive (11 raw passes against 7; FRED publishes yields to two decimals, which flattens residuals) and the out-of-regime mean is −0.27 against −0.32, with the same conclusion.',
    ],
    keyFeatures: {},
    galleryImages: {
      out_of_regime: {
        alt: 'Out-of-regime Sharpe by pair and regime transition',
        caption:
          'The decisive test: hedge ratios fitted in one policy regime and traded in the next. Positive in 5 of 12, mean Sharpe −0.27.',
      },
      regime_screen: {
        alt: 'Cointegration screen, full sample versus within regimes',
        caption:
          'Cointegration exists within policy regimes (11 of 144 pass, 6 survive FDR) but not across the full sample (0 of 18).',
      },
      beta_instability: {
        alt: 'Cointegrating beta across regimes',
        caption:
          'The failure mechanism: the hedge ratio is not stable across regimes.',
      },
      yields: {
        alt: '10-year government yields 2010–2026',
        caption:
          'Divergent QE, negative rates and yield-curve control break any stable long-run relationship across the full sample.',
      },
    },
    challenges:
      'Building free-data loaders with rate-limit backoff across five central-bank sources, and designing a regime test strict enough to reject relationships that looked tradable within sample.',
    learnings:
      'Multiple-testing discipline earned its keep immediately. Within-regime cointegration is descriptive, not predictive.',
  },

  alphaResearchLab: {
    title: 'Volatility & Systematic Strategy Lab',
    description:
      'A multi-strategy lab around the volatility risk premium in FX and gold, with a Black-76 options engine, Johansen/VECM pairs, and momentum and mean-reversion modules.',
    headline:
      'Gold and yen clear the breakeven win rate for defined-risk spreads; EUR-correlated pairs sit just below it.',
    imageAltText: 'Volatility risk premium strategy tearsheet',
    categoryText: 'Quantitative Research',
    dateText: 'June 2026',
    detailedDescription:
      'A multi-strategy research lab built around the volatility risk premium. A VRP strategy across FX spot and options (defined-risk 20Δ/10Δ spreads, 200-day trend filter, 45 DTE entry) backtested 2005–2026 on Bloomberg BGN implied and realised volatility: gold and yen clear breakeven (trade-level Sharpe about 0.40, win rate about 73%), while EUR-correlated pairs sit just below, reflecting structurally thinner premium. Plus a Black-76 options-on-futures pricing engine with greeks, a CRR American pricer and self-tests, Johansen/VECM relative-value pairs, and a mean-reversion module.',
    whyItMatters:
      'This is the strategy-construction side of the volatility work: how a premium turns into a defined-risk trade with a trend filter and a lifecycle, and what win rate the payoff asymmetry requires. The exchange-level measurement of the premium itself lives in the FX options VRP project.',
    methodology: [
      'Event-driven backtester with option lifecycle (enter 45 DTE, exit at 50% profit, 2× stop or 21 DTE), 5% risk-per-trade sizing, and trade-level Sharpe to avoid daily mark-to-market noise.',
      'Black-76 pricing, greeks and implied-volatility inversion (Newton with bisection backstop), CRR American reference pricer and a European-vs-American bias report.',
      'Johansen/VECM cointegration, spread z-score and walk-forward backtest code for pairs, and a bear-market-reversal screener as a supporting module.',
    ],
    findings: [
      'XAUUSD and USDJPY exceed the roughly 70% win rate required to break even at a 2.35× loss-to-win ratio (trade Sharpe 0.41 and 0.40, max drawdown −11% and −6%).',
      'USDCHF and GBPUSD sit just below breakeven (trade Sharpe about zero), consistent with thinner premium in EUR-correlated pairs.',
    ],
    caveats: [
      'Bloomberg BGN implied-volatility inputs are not redistributed; the strategy is evaluated on 1M/3M vol marks rather than executable option prices.',
      'Trade-level Sharpe is the honest measure for spread strategies but is not comparable to daily-return Sharpe ratios elsewhere on this site.',
    ],
    keyFeatures: {},
    galleryImages: {
      vrp_tearsheet: {
        alt: 'VRP strategy backtest tearsheet',
        caption:
          'Volatility risk premium backtest tearsheet: CAGR, trade-Sharpe, drawdown and win rate across USDCHF, XAUUSD, GBPUSD and USDJPY.',
      },
    },
    challenges:
      'Building an event-driven backtester, aligning option-chain expiries, and pricing options on futures correctly with early exercise.',
    learnings:
      'Derivatives greeks, the macro-volatility interplay, and that the VRP is real but thin and asset-dependent.',
  },

  financialMlLab: {
    title: 'Congressional-Trade Alpha — An Event Study',
    description:
      'An event study on whether copying US congressional stock trades is an edge. It is not.',
    headline:
      'Across 5,763 House disclosures, sign-adjusted abnormal returns are roughly zero to slightly negative at every horizon a copy-trader could act on.',
    imageAltText:
      'Cumulative abnormal returns of congressional trades versus SPY',
    categoryText: 'Alternative Data',
    dateText: 'May 2026',
    detailedDescription:
      'An event study testing whether US House STOCK Act disclosures contain tradable alpha, the premise behind copy-trading apps and the NANC/KRUZ ETFs. 5,763 Periodic Transaction Report trades from mid-2022 to end-2025 are parsed from the raw PDF filings, joined to committee assignments and sector jurisdictions, and run through a market-model event study against SPY with a [−120, −20] estimation window, anchored on both the transaction date (the true informational edge) and the disclosure date (the tradable one).',
    whyItMatters:
      'The congressional-trading edge is widely publicised and widely sold. Measuring it properly, with the disclosure lag that a real copier faces and a committee-relevance split, shows how much of it survives: very little.',
    methodology: [
      'House financial-disclosure XML indexes filtered to Periodic Transaction Reports; concurrent PDF download with resume; a regex engine that handles single-line and wrapped two-line transaction formats plus options metadata.',
      'Filer-to-committee crosswalk mapped to the market sectors each committee has jurisdiction over; GICS sectors and daily prices for every traded ticker.',
      'Market-model cumulative abnormal returns against SPY, estimation window [−120, −20] trading days, anchored on transaction and on disclosure dates; t-statistics on sign-adjusted CARs.',
    ],
    findings: [
      'Transaction-date CAR(+1, +21) is −0.28% (t = −2.22); disclosure-date CAR is −0.18% (t = −1.41).',
      'Committee-relevant trades earn +0.18% (t = 0.77) against −0.30% (t = −1.94) for the rest: the right direction, weak statistics, and an edge that costs would largely eat.',
      'The post-2012 median transaction-to-disclosure lag is only 14 days, so the signal is weak, not merely stale.',
    ],
    caveats: [
      'House only; Senate eFD filings are behind a session-based portal. Committee data are current-Congress only.',
      'A raw event study, not a backtest: no costs, sizing or options execution. The presentation notebook with the original charts is pending recovery; the figure shown is rendered from the reported results.',
    ],
    keyFeatures: {},
    galleryImages: {
      car_reported: {
        alt: 'Cumulative abnormal returns by anchor and committee relevance',
        caption:
          'Sign-adjusted CAR(+1, +21) by anchor and committee relevance, as reported in the repository: roughly zero to negative, with weak t-statistics throughout.',
      },
    },
    challenges:
      'Parsing messy disclosure filings, building a leakage-safe event window, and resisting the urge to torture a non-result into a signal.',
    learnings:
      'Event-study methodology, and that proving a negative rigorously is its own kind of result.',
  },

  quantMacroEngine: {
    title: 'Quant Macro Engine',
    description:
      'A systematic macro research engine: Bayesian VARs, HMM regimes, nowcasting and a Taylor-rule layer, joined to portfolio construction through a Black-Litterman bridge, plus conditional forecasting and a DFAST scenario.',
    headline:
      'The BVAR handles a Fed stress scenario sensibly, but its forecasts make poor portfolio views: walk-forward Black-Litterman trails equal weight by 2.64% a year.',
    imageAltText:
      'BVAR conditional forecast under the published severely adverse DFAST assumptions',
    categoryText: 'Macro Systems',
    dateText: 'July 2026',
    detailedDescription:
      'An end-to-end macro pipeline on public data (FRED, BEA, OECD, ACM term premium, ECB): preprocessing, a dynamic-factor nowcast, Kalman latent states, a Minnesota-prior BVAR with a scenario engine, an HMM regime classifier on BVAR residuals, an inflation block, a Taylor-rule implied path, derived signals, and a walk-forward Black-Litterman layer that turns BVAR forecasts into asset views. The add-ons module contributes Waggoner-Zha conditional forecasting with hard and soft conditions, a stationary block bootstrap with step-down multiple-testing correction, a market-making P&L simulator, and a worked Fed DFAST 2026 severely-adverse scenario.',
    whyItMatters:
      'Most macro code stops at a forecast. A desk needs the forecast conditioned on a published policy path, with uncertainty that reflects estimation as well as shocks, and a way to turn it into positions. The engine is built around those handoffs.',
    methodology: [
      'Minnesota BVAR via dummy observations (Banbura, Giannone and Reichlin 2010) with Normal-inverse-Wishart posterior sampling; HMM regimes on residuals; ACM term premium and Taylor-rule layers.',
      'Walk-forward Black-Litterman on six ETFs (SPY, EFA, EEM, IEF, LQD, GLD): each quarter the BVAR and each ETF\'s regression on macro changes are refitted on data available at the time (macro data to t−1), the BVAR forecast for t+1 becomes one view per asset, and the regression residual variance sets the view uncertainty.',
      'Conditional forecasts by Waggoner and Zha (1999): hard conditions written on future structural shocks, soft conditions by rejection sampling, parameter uncertainty propagated from a posterior sample.',
      'Stationary bootstrap (Politis and Romano 1994) with a step-down maximum-statistic correction; calibrated on iid noise (false-positive rate 0.03) and on twelve junk factors (no survivors).',
    ],
    findings: [
      'Imposing the Fed’s published 2026 severely-adverse assumptions (unemployment to 10%, 3-month bill to 0.1%) on a BVAR estimated through 2026Q1 implies real GDP falls 2.9% to trough with a 90% band of −8.6 to +3.1, against the Fed model’s −4.6%: inside the band, a weak test rather than a validation, and milder because a linear VAR misses the Okun asymmetry.',
      'Hard conditions are met to 1e−8 on every draw; conditioning visibly moves unconstrained variables; posterior draws widen the bands as they should.',
      'Walk-forward Black-Litterman, 2015-04 to 2026-09 (47 quarterly decisions, no costs): 4.56% a year at 9.74% volatility against 7.34% at 9.73% for equal weight, Sharpe 0.51 against 0.78, max drawdown −31% against −21%. The macro views lose 2.64% a year (t = −2.11).',
    ],
    caveats: [
      'An engine and a set of tested modules rather than a single empirical study; the VAR lab and the DSGE project carry the research findings.',
      'Macro data is FRED’s current vintage, so past quarters include later revisions, a mild advantage a real-time model would not have had.',
      'The Black-Litterman backtest has no transaction costs, which would only widen the gap to equal weight.',
    ],
    keyFeatures: {},
    galleryImages: {
      dfast_scenario: {
        alt: 'BVAR conditional forecast under DFAST severely adverse assumptions',
        caption:
          'Conditional forecast under the published 2026 severely-adverse path: GDP growth, inflation, unemployment and the 3-month bill, baseline versus scenario with 90% bands.',
      },
    },
    challenges:
      'Writing conditional forecasts on the shocks rather than overwriting the path, propagating posterior uncertainty through to scenario bands, and keeping the portfolio layer strictly walk-forward, checked by recomputing weights from data cut off at past decision dates.',
    learnings:
      'Bayesian macro time-series as infrastructure: the value is in the handoffs between models, scenarios and positions.',
  },
} as const;
