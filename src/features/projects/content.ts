/**
 * Project copy (English). Every number below is taken from the canonical repository of the
 * project it describes (paper, README, or verification ledger) and must not be edited without
 * re-checking that source. Language-neutral numbers used in the "At a glance" strip live in
 * service.ts as `highlights`.
 */
export const projectsContent = {
  sgxMultifactorFyp: {
    title: 'Multi-Factor Equity Strategy — SGX',
    description:
      'Systematic multi-factor equities on SGX, consolidated and verified: real cross-sectional structure, removed by real-world frictions (NTU FYP).',
    headline:
      'Real, correctly signed factor structure on SGX; spreads and borrow remove it before it becomes a strategy.',
    imageAltText:
      'SGX multi-factor strategy performance, point-in-time universe',
    categoryText: 'Quantitative Research',
    dateText: 'August 2026',
    detailedDescription:
      'A systematic multi-factor strategy on Singapore equities, my NTU final-year project, consolidated from ten research branches into one verified body of work: every published number traces to an executed run on real vendor data, catalogued claim by claim in a verification ledger, with superseded and contaminated results listed in an exclusions file. Value, momentum, quality, size and liquidity signals form a composite tested with point-in-time membership, Fama-MacBeth pricing, a 65-test specification grid, and full cost and borrow modelling.',
    whyItMatters:
      'Factor premia are documented on US data with deep liquidity. SGX is small, REIT-heavy and thinly traded, so it is a clean test of whether the cross-sectional structure transports and, separately, whether it can be harvested. The answer is yes to the first and no to the second, and the gap between them is measured rather than asserted.',
    methodology: [
      'Point-in-time index membership rebuilt quarterly; 338 delistings adjudicated against deal records so that takeouts, liquidations and transfers carry the right terminal return.',
      'Fundamentals lagged with a four-month reporting embargo; forward returns by explicit point-in-time lookup after a forward-return bug was caught and corrected.',
      'Composite IC and Fama-MacBeth pricing on two universes: a 71-name point-in-time STI roster and the broad Compustat universe (1991–2026).',
      'Per-name Corwin-Schultz half-spreads with the traded-days correction, Markit borrow availability and fees on the short side, and a capacity curve at feasible participation.',
      'A 65-test specification grid on a 1995–2019 development window with Bonferroni, BHY and bootstrap reality-check corrections; a second M=55 family for the price-signal branch.',
      'Risk measured with a Merton jump-diffusion fit and compared with Gaussian expected shortfall.',
    ],
    findings: [
      'Delisting survivorship bias on SGX runs backwards: dropping dead names lowers measured universe returns by 0.89 pp/yr, because 59% of exits are takeouts at a premium.',
      'Survivor-defined backtests still flatter themselves: the naive blue-chip Sharpe of 1.00 corrects to 0.45 under quarterly point-in-time membership, and the broad-universe long-short reverses outright (survivor t = 1.0 vs point-in-time t = 3.8).',
      'Composite IC is 0.049 (t = 5.9) on the broad universe, the governing estimate, and 0.070 (t = 5.9) on the 71-name point-in-time roster; value carries the signal and part of it is a REIT effect.',
      'Fully costed with real spreads and borrow, the gross 1.66%/mo edge (t = 5.1) falls to 0.28%/mo (t = 0.85): statistically real, economically untradeable at institutional scale.',
      'The STI-core book earns +0.40%/mo (Newey-West t = 2.26) with a feasibility-bound capacity of roughly S$50M; a t+1-membership benchmark would have inflated the passive alternative by 0.40%/mo.',
      'Of the 65 tests in the specification grid, 24 clear |t| = 1.96, one clears 3.0, and zero survive BHY false-discovery control.',
    ],
    caveats: [
      'Nothing in the 65-test grid survives multiple-testing correction; the defensible claim is structure, not alpha.',
      '57.9% of strategy variance is jump risk; a Gaussian risk limit understates 99% expected shortfall by a third.',
      'The TSMOM-plus-fundamentals combination that looked additive reverses once borrow constraints and costs are applied.',
      'The project caught its own synthetic-data fallback and two look-ahead traps; the corrections are published as part of the work.',
    ],
    keyFeatures: {},
    galleryImages: {
      core_performance: {
        alt: 'STI-core strategy performance',
        caption:
          'STI-core strategy on the point-in-time roster: +0.40%/mo, Newey-West t = 2.26.',
      },
      surv_bias: {
        alt: 'Survivorship bias sign in both universes',
        caption:
          'Delisting survivorship bias is negative in both universes: dead names raise measured returns.',
      },
      exit_mix: {
        alt: 'SGX delisting exit mix',
        caption:
          '59% of SGX delistings are acquisitions, and takeouts pay: the mechanism behind the backwards bias.',
      },
      leakage_funnel: {
        alt: 'Alpha leakage funnel',
        caption:
          'Where the alpha goes: benchmark correction, costs, and the tradability screen.',
      },
      markit_borrow: {
        alt: 'Markit borrow scenarios',
        caption:
          'Real borrow fees destroy the naive short book; the availability screen rescues it into large caps.',
      },
      capacity: {
        alt: 'Capacity analysis',
        caption:
          'Feasibility-bound capacity of roughly S$50M for the concentrated STI-core book.',
      },
      benchmark_contamination: {
        alt: 'Benchmark contamination test',
        caption:
          'A t+1-membership benchmark inflates the passive alternative by 0.40%/mo.',
      },
      multiple_testing: {
        alt: 'Multiple-testing corrections on the price-signal family',
        caption:
          'Price-signal family (M = 55 tests, gross): Bonferroni passes 15, BHY 19, bootstrap reality check 12; net of costs 0 of 22 survive any correction. The separate 65-test specification grid has zero BHY survivors.',
      },
      merton_fit: {
        alt: 'Merton jump-diffusion fit',
        caption:
          '57.9% of strategy variance is jump risk; Gaussian risk limits understate 99% ES by a third.',
      },
      tsmom_combo: {
        alt: 'TSMOM combination under constraints',
        caption:
          'The TSMOM-plus-fundamentals combination reverses once borrow constraints and costs are applied.',
      },
    },
    challenges:
      'Building point-in-time index membership and adjudicating 338 delistings against SDC deal records, applying a 4-month fundamental reporting embargo, replacing a contaminated t+1-membership benchmark worth 0.40%/mo of phantom alpha, and holding every result to multiple-testing discipline.',
    learnings:
      'Verification as method: the project caught its own synthetic-data fallback, two look-ahead traps and a forward-return bug, and published the corrections as part of the contribution. In a small market the binding constraints are spreads and borrow availability, not signal.',
  },

  fxOptionsVrp: {
    title: 'Volatility Risk Premia in CME G10 FX Options',
    description:
      'A 16-year exchange-level panel of CME FX options on futures: does implied volatility exceed realised, and does selecting on high IV help?',
    headline:
      'The FX volatility premium is real, left-skewed and insurance-like; a leak-free high-IV selection rule roughly doubles the payoff proxy.',
    imageAltText: 'Strategy payoff proxies with Newey-West t-statistics',
    categoryText: 'Derivatives Research',
    dateText: 'July 2026',
    detailedDescription:
      'A research-grade panel of CME G10 FX options on futures, June 2010 to June 2026, built from Databento GLBX.MDP3 statistics and definitions (six batch jobs, 986 files, 11 GB raw) across seven currency roots at 30, 60 and 90-day tenors. Black-76 at-the-money implied volatility is compared with the forward realised volatility of each option’s own underlying futures contract, and twelve short-volatility payoff proxies are tested with Newey-West and non-overlapping inference. Every variant tested is disclosed.',
    whyItMatters:
      'Selling volatility is a core source of return for options market makers and macro funds, and FX is the asset class where the premium is least well documented at exchange level. The data work matters as much as the result: the 2017 CME symbol migration creates a false discontinuity in any naive long-horizon study, and the legacy NZD series carries an implied-volatility regime that is pure artefact.',
    methodology: [
      'Definitions and settlements joined per month through the definition-level underlying id; options mapped to the specific futures contract they reference; 0% unmatched across all 492 statistics role-months.',
      'Black-76 implied volatility per contract (r = 0, calendar-year tau); forward realised volatility over (t, t+H] from the underlying’s own settle series with a gap guard.',
      'ATM selection to 30/60/90-day targets by nearest tenor, global de-duplication and re-ranking on tenor distance, moneyness and open interest: 440,467 ATM rows, 70,714 daily root-tenor observations.',
      'The 2017 CME FX options symbol migration corrected with an explicit source rule (legacy symbols before July 2017, migrated symbols after, legacy 6N retained); the anomalous pre-2014 6N regime removed.',
      'Conditioning signal: trailing 252-observation IV z-score ending at t−1, minimum 126 observations, so no look-ahead enters any rule.',
      'Inference: Newey-West t at 5, 21 and 63 lags, non-overlapping 21-day subsamples, skew and excess kurtosis for every variant; full reproduction scorecard against the original pipeline (21 of the 22 comparable metrics identical; the one difference is 20 rows in 32.5 million).',
    ],
    findings: [
      'Median implied exceeds median forward-realised volatility for six of seven roots; JPY carries the largest premium (+0.87 vol points) and NZD is flat.',
      'A static short-volatility proxy across all roots and tenors averages 0.28 vol points per day (median 0.49, positive 65.6% of days) with NW63 t = 1.79 and non-overlapping t = 2.27; only the 30-day bucket is robustly significant on its own (t = 2.40).',
      'Selecting the single most IV-elevated root per date and tenor raises the mean to 0.51 vol points (median 0.76) with NW63 t = 2.41 and non-overlapping t = 2.71, with monotone attenuation for top-2 and top-3.',
      'Time-series threshold rules on a cell’s own z-score add little once the signal is restricted to trailing information; the improvement from conditioning is in payoff magnitude, not hit rate.',
      'The distribution is left-skewed in every variant (static skew −1.69, excess kurtosis 7.0); 2022 is a broad stress year in which short volatility loses on all seven roots.',
    ],
    caveats: [
      'Payoff proxies, not P&L: settlement marks, no transaction costs, no delta hedging, no margin.',
      'Interest rate set to zero in the Black-76 inversion; the premium is insensitive to it at these tenors but the convention is stated.',
      'NZD remains thin even after 2014 (roughly 78% of daily cells have zero open interest).',
      'Raw and derived Databento panels are licensed and not redistributed; the repository ships the full pipeline, aggregated tables and a reproduction scorecard.',
    ],
    keyFeatures: {},
    galleryImages: {
      strategy_summary: {
        alt: 'Twelve strategy payoff proxies with Newey-West t-statistics',
        caption:
          'Twelve payoff proxies, mean and median with NW63 t-statistics: the cross-sectional top-1 IV rule is the strongest and most robust.',
      },
      cumulative_payoff: {
        alt: 'Cumulative payoff proxy, static vs high-IV conditioning',
        caption:
          'Cumulative payoff proxy 2010–2026: static (blue), time-series z ≥ 0.5 (green), cross-sectional top-1 IV z (red).',
      },
      vrp_by_root: {
        alt: 'Median volatility risk premium by FX root',
        caption:
          'Median IV−RV spread by root: positive for six of seven, JPY strongest, NZD flat once its legacy regime is removed.',
      },
      yearly_heatmap: {
        alt: 'Yearly median volatility risk premium by root',
        caption:
          'Yearly median premium by root: 2015 (NZD, the thin market, with AUD and EUR also negative) and 2022 (all seven roots) are the stress years; CHF is positive in 2015.',
      },
      iv_vs_rv: {
        alt: 'Median implied vs forward realised volatility by root',
        caption:
          'Median Black-76 ATM implied against forward realised volatility by root, 2010–2026 (NZD from 2014).',
      },
      vrp_by_tenor: {
        alt: 'Median volatility risk premium by target tenor',
        caption:
          'Median premium and share of positive days by tenor. In the strategy tests (table 3) the 30-day bucket is the only one robustly significant on its own (NW63 t = 2.40).',
      },
    },
    challenges:
      'Reconstructing a consistent 16-year options panel across the 2017 CME symbol migration, detecting and removing the legacy NZD implied-volatility artefact, and keeping the conditioning signal strictly leak-free after an earlier draft had used a full-sample z-score.',
    learnings:
      'The data contributions were larger than the strategy result. The premium is a left-skewed insurance premium: conditioning changes magnitude, not hit rate, and 2022 shows what the tail looks like.',
  },

  treasuryCurve: {
    title: 'Treasury Futures Curve: Momentum and Mean Reversion',
    description:
      'Momentum in levels, reversion in spreads: systematic U.S. Treasury futures curve strategies 2010–2026, DV01-neutral and net of costs.',
    headline:
      'The same DV01-neutral 2s10s book earns a net Sharpe of −0.79 under a momentum signal and +0.71 under mean-reversion.',
    imageAltText:
      'Same DV01-neutral 2s10s book under momentum and mean-reversion signals',
    categoryText: 'Rates Research',
    dateText: 'July 2026',
    detailedDescription:
      'A systematic study of time-series momentum on outright duration and mean-reversion on DV01-neutral curve spreads (2s10s, 5s30s, 2s5s10s) in U.S. Treasury futures from January 2010 to July 2026. A carry extension was subsequently tested as a secondary study and failed its pre-specified promotion criteria, so it is documented as a null rather than folded into the headline result. Continuous, back-adjusted futures are rebuilt from the exchange roll map, curve trades are hedged to be DV01-neutral using the daily cheapest-to-deliver forward risk, and every strategy is evaluated net of tick costs with HAC Diebold-Mariano inference against a duration-momentum baseline.',
    whyItMatters:
      'Time-series momentum on outright duration is well known. The question a rates desk actually faces is whether the same signal works on the curve. It does not: the slope mean-reverts, and applying a trend signal to it is a systematic way to lose money even on a perfectly hedged book. The asymmetry is the finding; the honest part is that the curve trades do not statistically beat the outright baseline.',
    methodology: [
      'Six futures roots (TU, FV, TY, UXY, US, WN), first three generics; continuous series rebuilt from FUT_CUR_GEN_TICKER with difference back-adjustment so roll gaps are never booked as returns.',
      'DV01 from Bloomberg’s daily cheapest-to-deliver forward risk (CONVENTIONAL_CTD_FORWARD_FRSK), the real per-day sensitivity rather than a regression proxy.',
      'No look-ahead: signals use t−1 data, execution at the t settle, monthly rebalance, 126-day warm-up, leverage capped at 3×, volatility scaled to 10%.',
      'Costs of one tick per contract per side using each contract’s own tick size (the 10-year tick was halved during the sample).',
      'Diebold-Mariano with Newey-West long-run variance at a 21-day lag plus the Harvey-Leybourne-Newbold small-sample correction, cross-checked against HAC-robust OLS.',
    ],
    findings: [
      'On the identical DV01-neutral 2s10s book, momentum loses (net Sharpe −0.79) and mean-reversion earns +0.71; the book’s P&L regression slope on the 10-year yield change is −0.001, so the gap is signal, not hedge error.',
      'Net of one tick per contract per side, 2010–2026: duration momentum 0.68 (max drawdown −23%), 2s10s mean-reversion 0.71 (−20%), 5s30s mean-reversion 0.66 (−27%), 2s5s10s butterfly 0.07 (−38%).',
      'Against the baseline, HAC Diebold-Mariano gives DM = 0.83 (p = 0.41) for 2s10s and 0.68 (p = 0.49) for 5s30s: neither curve strategy statistically dominates outright momentum.',
      'Every number was re-executed from the canonical notebook against the original exports in August 2026; that re-execution exposed a transaction-cost loader bug, corrected on 2026-08-23, and the figures here are from the corrected run.',
    ],
    caveats: [
      'The mean-reversion direction for the curve is economically motivated but was confirmed on the full sample; a walk-forward out-of-sample test is still required before treating the curve results as a hard performance claim.',
      'Single country, single currency; costs are a flat tick-per-side approximation without market impact or financing.',
      'Inputs are Bloomberg Terminal exports and are not redistributed; the repository ships the exporters, the checklist and a documented free-data route.',
      'Correction (2026-08-23): the original notebook silently loaded no contract statics, so the table first published as "net" was gross of tick costs (0.71 / 0.77 / 0.73 / 0.12; same-book −0.73 / +0.77; DM p 0.32 / 0.37). The costed numbers are shown here and in the re-typeset paper; no conclusion changed — the ordering holds, both DM p-values move further from significance, and the asymmetry widens slightly.',
    ],
    keyFeatures: {},
    galleryImages: {
      signal_contrast: {
        alt: 'Same DV01-neutral 2s10s book under opposite signals',
        caption:
          'The headline: one DV01-neutral 2s10s book, two signals. Momentum earns −0.79 net Sharpe, mean-reversion +0.71.',
      },
      equity_curves: {
        alt: 'Net cumulative performance of the four strategies',
        caption:
          'Net cumulative performance 2010–2026: duration momentum 0.68, 2s10s reversion 0.71, 5s30s reversion 0.66, butterfly 0.07.',
      },
      risk_return: {
        alt: 'Net Sharpe and maximum drawdown by strategy',
        caption:
          'Net Sharpe and maximum drawdown: the curve trades are co-equal with the baseline, not better; the butterfly does not earn its risk.',
      },
    },
    challenges:
      'Rebuilding continuous futures from the exchange roll map without booking roll gaps, hedging curve trades with the true daily DV01 rather than a proxy, and resisting the temptation to read a 0.77 versus 0.71 Sharpe gap as significant when the Diebold-Mariano test says it is not.',
    learnings:
      'Levels trend, spreads revert, and the signal has to match the instrument. The statistically defensible claim is the asymmetry, not outperformance.',
  },

  macroVarResearchLab: {
    title: 'Macro VAR Research Lab',
    description:
      'Three studies, three papers: what forecasts the US macroeconomy out of sample once leakage, overfitting and multiple comparisons are controlled.',
    headline:
      'Across 1,000+ specifications and five estimator classes, no model is distinguishable from a univariate AR; shocks and identification add nothing out of sample.',
    imageAltText:
      'Relative RMSE heatmap of VAR specifications against a random walk',
    categoryText: 'Econometrics',
    dateText: 'May–July 2026',
    detailedDescription:
      'A consolidated lab of three completed studies on US quarterly data from public sources (FRED, FRBSF, NY Fed, ALFRED). Study 1 is a disciplined specification search and model-class horse race with the Model Confidence Set. Study 2 is a BVAR-with-constructed-shocks density study that exposes and fixes the common failures of that practice. Study 3 is a 1,014-model VARX permutation study with a real-time ALFRED replication, externally identified shocks, forecast combination and density evaluation, plus an interactive console.',
    whyItMatters:
      'Applied macro forecasting gives the analyst enormous freedom to search over variables, transforms, lags and estimators. These studies measure what that freedom buys when it is disciplined: very little. For anyone building macro views into a portfolio process, knowing which sophistication does not pay is as valuable as a model that does.',
    methodology: [
      'Study 1: theory-pruned block forward selection with hard validity gates (stability, residual whiteness, parsimony, conditioning); relative RMSE versus random walk and AR benchmarks; Clark-West, Diebold-Mariano and the Model Confidence Set across OLS, Minnesota BVAR, ridge, LASSO and elastic-net; a single-seed reproduce.py regenerates every number.',
      'Study 2: Minnesota BVAR via dummy observations versus a naive implementation; shocks as AR(1) surprises standardised on the training window only; expanding-window evaluation over 48 origins scored by CRPS, log score and Diebold-Mariano; stochastic-volatility BVAR; Johansen cointegration; G7 panel extension.',
      'Study 3: 16 endogenous sets × 12 shock subsets × 3 treatments × 3 lag rules = 1,632 cells, 1,014 unique models, expanding walk-forward from 2009Q4 at h = 1, 4, 8; real-time rebuild on ALFRED vintages; Kaenzig oil and Bauer-Swanson FOMC shocks as identified alternatives; forecast-encompassing tests; plug-in versus shock-uncertainty densities; Bayesian coverage decomposition.',
    ],
    findings: [
      'Study 1: the disciplined baseline is a four-variable core plus oil as an exogenous regressor; no estimator class beats a univariate AR by a Model Confidence Set margin; full-sample HP filtering of the policy rate leaks the future by 66% of the cycle’s own standard deviation at the endpoint; year-over-year transforms fail every whiteness test.',
      'Study 2: a naively coded Minnesota prior leaves the posterior unshrunk (largest companion eigenvalue 1.068) while dummy observations restore stability (0.96); stacking all shocks inflates out-of-sample error by an order of magnitude; a stochastic-volatility BVAR produces sharper, better-calibrated densities than random-walk and AR(1) benchmarks for output and inflation.',
      'Study 3: shocks cut the best GDP RMSE by about 12% at one quarter, but only 4.0% of specifications beat the core VAR at the 5% level, which is what noise delivers; the gain survives real-time vintages (16.1% → 15.9%); externally identified shocks do not beat cheap growth-rate proxies (encompassed in 22 of 24 cells); the shock model’s 90% interval covers 68% of outcomes until future-shock risk is priced.',
    ],
    caveats: [
      'Short samples (roughly 100–130 quarters) limit the power of every test; the Model Confidence Set is the guard against reading noise as discovery.',
      'Study 2’s shock inputs were constructed from spreadsheet exports of public series that are not redistributed; the series list is documented so they can be rebuilt.',
      'Study 1’s Phase C Model Confidence Set depends on the pinned arch version recorded in the results file.',
    ],
    keyFeatures: {},
    galleryImages: {
      relrmse_heatmap: {
        alt: 'Relative RMSE heatmap, base specification',
        caption:
          'Study 1: relative RMSE against a random walk at h = 1 across candidate specifications. Green beats the random walk; the core-plus-oil row is the disciplined winner.',
      },
      phase2_heatmap: {
        alt: 'Model-class comparison heatmap',
        caption:
          'Study 1: model classes × information sets. No estimator separates from the univariate AR under the Model Confidence Set.',
      },
      hp_lookahead: {
        alt: 'HP-filter look-ahead diagnostic',
        caption:
          'Study 1: the two-sided HP cycle of the fed funds rate is revised by up to 66% of its own standard deviation at the endpoint; a real-time filter does not see it.',
      },
      winner_forecasts: {
        alt: 'Out-of-sample forecasts from the winning specification',
        caption:
          'Study 1: one-quarter-ahead out-of-sample forecasts of the winner against the random walk.',
      },
      gap_vs_level_heatmap: {
        alt: 'Gap versus level rate representation',
        caption:
          'Study 1: representing the policy rate as a gap rather than a level is a tie once the gap is built without look-ahead.',
      },
      varr_gdp_sv_path: {
        alt: 'Time-varying volatility of GDP-growth shocks',
        caption:
          'Study 2: stochastic-volatility path of US GDP-growth shocks with the GFC and COVID spikes; the motivation for variable-specific volatility.',
      },
      varx_fig2_shockcount: {
        alt: 'GDP RMSE by number of exogenous shocks',
        caption:
          'Study 3: adding shocks lowers one-quarter GDP RMSE across 1,014 models, but the leaderboard order is one member of a large statistically equivalent set.',
      },
      varx_fig_rt: {
        alt: 'Real-time versus final-vintage RMSE',
        caption:
          'Study 3: the shock advantage survives an ALFRED real-time rebuild almost intact (16.1% to 15.9% RMSE reduction).',
      },
      varx_fig_id: {
        alt: 'Identified oil shock versus cheap proxy',
        caption:
          'Study 3: the Kaenzig oil-supply-news shock does not beat the raw real-oil-price growth proxy out of sample, even with a full-sample look-ahead the proxy lacks.',
      },
      varx_fig_density: {
        alt: 'Density calibration of shock-augmented forecasts',
        caption:
          'Study 3: under a plug-in density the shock model’s nominal 90% GDP interval covers 68% of outcomes; pricing future-shock risk restores 91% and removes the sharpness advantage.',
      },
    },
    challenges:
      'Implementing a leakage-safe walk-forward protocol at scale, the Minnesota BVAR with sum-of-coefficients and dummy-observation priors, the Model Confidence Set, and a real-time replication on archival vintages; then consolidating three separately built studies into one repository without rewriting any result.',
    learnings:
      'Disciplined parsimony and leakage-free evaluation dominate methodological sophistication in short macro samples. An honest negative result is worth more than an overfit positive one.',
  },

  lstmEquityForecasting: {
    title: 'LSTM vs Classical ML for Equity Returns',
    description:
      'Does an LSTM beat classical machine learning at forecasting daily US equity returns? 518 S&P 500 stocks, 2005–2026, with an explicit leakage control.',
    headline:
      'Nothing beats zero on levels; cross-sectionally there is a real stress-regime signal that does not survive transaction costs.',
    imageAltText: 'Horse race of models by test-set information coefficient',
    categoryText: 'Machine Learning',
    dateText: 'July 2026',
    detailedDescription:
      'An undergraduate research project that benchmarks a pooled-panel PyTorch LSTM against eleven classical models on 518 S&P 500 constituents from March 2005 to July 2026, with a strictly chronological protocol, a shuffled-target leakage alarm that runs on every execution, and a Bloomberg-versus-mirror parity check. After the level horse race returns a null, the task is reframed cross-sectionally and split by a pre-registered volatility regime, with a costed long-short portfolio and a horizon-decay test.',
    whyItMatters:
      'LSTM stock-prediction projects are common and usually wrong for a reason that is invisible in the headline number: leakage, survivorship or an untested baseline. This one is built to fail honestly. The interesting result is what survives the discipline: short-horizon, stress-concentrated cross-sectional predictability that is statistically real and economically useless at the frequencies where it exists.',
    methodology: [
      'Panel of 518 S&P 500 constituents exported from a Bloomberg Terminal via a staged VBA export; a yfinance mirror emits the identical schema and was checked against the Bloomberg closes (median absolute difference essentially zero).',
      'Chronological split only (train to 2021, validation 2022, test 2023+); features from information through the close of day t; scalers fit on train only; a shuffled-target ridge run every time as a leakage alarm.',
      'Eleven classical models (linear, ridge, elastic-net, polynomial ridge, tree, random forest, XGBoost, LightGBM, linear SVR, two naive baselines) and a pooled-panel LSTM with early stopping. The reported LSTM is the compact configuration (1 layer, hidden 32, dropout 0.1); a higher-capacity 2×64 variant was trained but its test metrics were not retained, so no result is claimed for it.',
      'Cross-sectional target: each stock’s next-day return minus the equal-weighted universe mean; regime: VIX 63-day z-score > 1, frozen before any test evaluation; decile long-short with turnover and 10 bp per side costs; weekly-rebalance decay test; four-factor risk adjustment.',
    ],
    findings: [
      'Level prediction: no model beats naive zero on RMSE over 466,426 test stock-days; the LSTM’s test IC is 0.004 (t = 0.76), indistinguishable from the shuffled-target control.',
      'Cross-sectional, high-volatility days: LightGBM reaches a mean daily rank IC of 0.044 (t = 3.17) versus 0.005 (t = 0.88) on calm days, and the nonlinear model overtakes the linear ones specifically under stress.',
      'A decile long-short earns a gross annualised Sharpe of 2.09 in high-volatility periods and is negative net of 10 bp per side in every configuration; turnover is roughly 2.7× per day.',
      'At a weekly rebalance the IC falls to 0.0007: slower trading removes the cost and the edge together. Four-factor alpha is insignificant (t = 1.35 all days, 0.10 high-vol).',
    ],
    caveats: [
      'Current-member universe, so survivorship bias is present and documented as a limitation.',
      'Costs modelled as a flat 10 bp per side; one LSTM architecture with four ablations rather than a search.',
      'The Bloomberg panel and the per-stock prediction files are not redistributed; summary results, checkpoint metrics and the paper are.',
      'Correction (2026-08-23): the originally typeset paper misprinted the three LightGBM net-Sharpe cells of Table II (−0.24 / −1.91 / −2.02); the correct values are −0.88 / −4.89 / −3.55. The paper served here is the re-typeset, corrected version; the conclusion that every net Sharpe is negative is unaffected.',
    ],
    keyFeatures: {},
    galleryImages: {
      test_ic_by_model: {
        alt: 'Test-set information coefficient by model',
        caption:
          'Level horse race on the 2023+ test set: cross-sectional IC by model. XGBoost leads at 0.14 (t = 1.83); the LSTM sits beside the shuffled-target control.',
      },
      regime_ic: {
        alt: 'Ridge IC by volatility regime',
        caption:
          'Ridge IC by regime, with and without macro context features: the pooled null hides a high-volatility signal (IC 0.05, t = 3.4).',
      },
      xs_ls_equity_curve: {
        alt: 'Cross-sectional long-short equity curve, gross and net',
        caption:
          'Ridge cross-sectional decile long-short, test period, high-volatility days shaded: positive gross, negative after 10 bp per side.',
      },
    },
    challenges:
      'Building a Bloomberg export pipeline that mirrors a free data source exactly, keeping an LSTM honest against a shuffled-target control, and reframing a null into the cross-sectional test that actually answers the economic question.',
    learnings:
      'A negative-but-rigorous result is the correct scientific conclusion for this setting. The detectable structure is a one-day, stress-regime phenomenon, and that is exactly where costs are highest.',
  },

  lowlatMm: {
    title: 'Low-Latency Market-Making Engine',
    description:
      'A C++20 event-driven market-making and execution engine: order book, OMS, pre-trade risk, exchange simulator, deterministic replay backtest.',
    headline:
      'A deterministic single-queue event loop with explicit latency and fill models, built so that a naive quoting strategy loses money for the right reasons.',
    imageAltText: 'lowlat-mm event-driven engine architecture',
    categoryText: 'Systems / C++',
    dateText: 'June 2026',
    detailedDescription:
      'A modular C++20 prototype of the patterns found in a production market-making stack: a top-of-book-plus-depth order book, a CSV market-data feed, an OMS with position tracking and P&L attribution, a pre-trade risk gate with a kill switch, an exchange simulator with acknowledgement and fill latency, an inventory-aware market-maker, and a replay backtest driver on a single timestamp-ordered event bus. 30 Catch2 test cases, 119 assertions. It is a learning and portfolio piece, not an HFT system, and the README says so.',
    whyItMatters:
      'Market-making economics are decided by fill assumptions, latency and adverse selection, not by the quoting formula. An engine whose modules have clean boundaries lets each of those be changed independently and tested, which is what makes the result of any strategy experiment interpretable.',
    methodology: [
      'std::variant event types dispatched through a deterministic priority queue; strategy-to-exchange and exchange-to-strategy latency are modelled explicitly and re-scheduled by the driver.',
      'Order book with top-of-book and depth, OMS state machine with acknowledgement, partial fill, cancel and rejection paths, and position and P&L attribution in ticks.',
      'Pre-trade risk gate on position, order size, open quantity and drawdown with a kill switch; exchange simulator with marketable and passive fill logic.',
      'Inventory-skewed market-maker with configurable half-spread, quote size and requote threshold; synthetic feed generators (random walk, stable, oscillating) and a PnL/inventory plotter.',
    ],
    findings: [
      'On the random-walk feed the default strategy loses money by construction, to adverse selection; the engine reports it rather than hiding it, which is the point of the exercise.',
      'The unit-test suite covers the order book, OMS, risk gate, simulator and strategy (30 cases, 119 assertions) and passes with clang++ on macOS and g++ on Linux.',
    ],
    caveats: [
      'Educational scope: synthetic top-of-book feeds, no queue-position model, no real exchange protocol, no production latency engineering.',
      'A queue-aware extension on real CME market-by-order data is planned and blocked on a paid data pull; it is not part of this repository.',
    ],
    keyFeatures: {},
    galleryImages: {
      architecture: {
        alt: 'lowlat-mm engine architecture',
        caption:
          'Event-driven module pipeline: market data, order book, strategy, OMS, risk, simulator, backtest, on one timestamp-ordered bus.',
      },
      pnl_sample: {
        alt: 'Sample backtest: mid price, net position and PnL on the random-walk feed',
        caption:
          'Sample run on the bundled random-walk feed with the default config (5,000 events, 53 fills): mid, net position and total PnL in ticks. The strategy loses to adverse selection, as a naive quoter on a random walk should.',
      },
    },
    challenges:
      'Designing clean module boundaries (book / OMS / risk / simulator), keeping the event loop deterministic, and modelling fills and latency realistically.',
    learnings:
      'Market microstructure, low-latency systems design in C++, and how adverse selection punishes a naive quoting strategy.',
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
      'A multi-strategy research lab built around the volatility risk premium. A VRP strategy across FX spot and options (defined-risk 20Δ/10Δ spreads, 200-day trend filter, 45 DTE entry) backtested 2005–2026 on Bloomberg BGN implied and realised volatility: gold and yen clear breakeven (trade-level Sharpe about 0.40, win rate about 73%), while EUR-correlated pairs sit just below, reflecting structurally thinner premium. Plus a Black-76 options-on-futures pricing engine with greeks, a CRR American pricer and self-tests, Johansen/VECM relative-value pairs, and mean-reversion and momentum modules.',
    whyItMatters:
      'This is the strategy-construction side of the volatility work: how a premium turns into a defined-risk trade with a trend filter and a lifecycle, and what win rate the payoff asymmetry requires. The exchange-level measurement of the premium itself lives in the FX options VRP project.',
    methodology: [
      'Event-driven backtester with option lifecycle (enter 45 DTE, exit at 50% profit, 2× stop or 21 DTE), 5% risk-per-trade sizing, and trade-level Sharpe to avoid daily mark-to-market noise.',
      'Black-76 pricing, greeks and implied-volatility inversion (Newton with bisection backstop), CRR American reference pricer and a European-vs-American bias report.',
      'Johansen/VECM cointegration, spread z-score and walk-forward backtest for pairs; bear-market-reversal screener and momentum dashboard as supporting modules.',
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
      pairs_dashboard: {
        alt: 'Johansen/VECM pairs dashboard',
        caption:
          'Relative-value pairs dashboard: Johansen/VECM cointegration, spread z-score and walk-forward backtest.',
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
      'BVAR posterior forecasts become Black-Litterman views with the forecast covariance as view uncertainty, so model uncertainty reaches position sizing.',
    imageAltText:
      'BVAR conditional forecast under the published severely adverse DFAST assumptions',
    categoryText: 'Macro Systems',
    dateText: 'July 2026',
    detailedDescription:
      'An end-to-end macro pipeline on public data (FRED, BEA, OECD, ACM term premium, ECB): preprocessing, a dynamic-factor nowcast, Kalman latent states, a Minnesota-prior BVAR with a scenario engine, an HMM regime classifier on BVAR residuals, an inflation block, a Taylor-rule implied path, derived signals, and a Black-Litterman layer that consumes BVAR posterior forecasts as views. The add-ons module contributes Waggoner-Zha conditional forecasting with hard and soft conditions, a stationary block bootstrap with step-down multiple-testing correction, a market-making P&L simulator, and a worked Fed DFAST 2026 severely-adverse scenario.',
    whyItMatters:
      'Most macro code stops at a forecast. A desk needs the forecast conditioned on a published policy path, with uncertainty that reflects estimation as well as shocks, and a way to turn it into positions. The engine is built around those handoffs.',
    methodology: [
      'Minnesota BVAR via dummy observations (Banbura, Giannone and Reichlin 2010) with Normal-inverse-Wishart posterior sampling; HMM regimes on residuals; ACM term premium and Taylor-rule layers.',
      'Black-Litterman with BVAR posterior means as views and forecast covariance as the view-uncertainty matrix.',
      'Conditional forecasts by Waggoner and Zha (1999): hard conditions written on future structural shocks, soft conditions by rejection sampling, parameter uncertainty propagated from a posterior sample.',
      'Stationary bootstrap (Politis and Romano 1994) with a step-down maximum-statistic correction; calibrated on iid noise (false-positive rate 0.03) and on twelve junk factors (no survivors).',
    ],
    findings: [
      'Imposing the Fed’s published 2026 severely-adverse assumptions (unemployment to 10%, 3-month bill to 0.1%) on a BVAR estimated through 2026Q1 implies real GDP falls 2.9% to trough with a 90% band of −8.6 to +3.1, against the Fed model’s −4.6%: inside the band, a weak test rather than a validation, and milder because a linear VAR misses the Okun asymmetry.',
      'Hard conditions are met to 1e−8 on every draw; conditioning visibly moves unconstrained variables; posterior draws widen the bands as they should.',
    ],
    caveats: [
      'An engine and a set of tested modules rather than a single empirical study; the VAR lab and the DSGE project carry the research findings.',
      'The market-making simulator’s Sharpe is implausibly high by construction (guaranteed arrivals, no queue); the shape of the adverse-selection trade-off is the output, not the level.',
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
      'Writing conditional forecasts on the shocks rather than overwriting the path, propagating posterior uncertainty through to scenario bands, and wiring model uncertainty into a portfolio layer without discarding it at the handoff.',
    learnings:
      'Bayesian macro time-series as infrastructure: the value is in the handoffs between models, scenarios and positions.',
  },
} as const;
