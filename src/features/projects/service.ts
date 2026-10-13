// Project registry. Copy lives in ./content.ts (imported into i18n/ui.ts); this file holds the
// language-neutral metadata: assets, links, curation flags, and headline numbers.
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';

// SGX
import sgx_performance from '@/assets/sgx/core_performance.png';
import sgx_surv_bias from '@/assets/sgx/surv_bias_both_universes.png';
import sgx_exit_mix from '@/assets/sgx/surv_exit_mix.png';
import sgx_funnel from '@/assets/sgx/core_leakage_funnel.png';
import sgx_markit from '@/assets/sgx/cost_markit_ls.png';
import sgx_capacity from '@/assets/sgx/cost_capacity.png';
import sgx_benchmark from '@/assets/sgx/core_benchmark_contamination.png';
import sgx_mtest from '@/assets/sgx/px_multiple_testing.png';
import sgx_merton from '@/assets/sgx/risk_merton_fit.png';
import sgx_tsmom from '@/assets/sgx/tsmom_combo.png';
// FX options VRP
import vrp_strategy from '@/assets/vrp/chart_5_strategy_summary.png';
import vrp_cumulative from '@/assets/vrp/chart_6_cumulative_payoff.png';
import vrp_by_root from '@/assets/vrp/chart_2_vrp_by_root.png';
import vrp_heatmap from '@/assets/vrp/chart_4_yearly_vrp_heatmap.png';
import vrp_iv_rv from '@/assets/vrp/chart_1_iv_vs_rv_by_root.png';
import vrp_tenor from '@/assets/vrp/chart_3_vrp_by_tenor.png';
// Treasury
import tsy_signal from '@/assets/treasury/fig1_signal_contrast.png';
import tsy_equity from '@/assets/treasury/fig2_equity_curves.png';
import tsy_risk from '@/assets/treasury/fig3_risk_return.png';
// Macro VAR lab
import mv_relrmse from '@/assets/macrovar/relrmse_heatmap.png';
import mv_phase2 from '@/assets/macrovar/phase2_heatmap.png';
import mv_hp from '@/assets/macrovar/hp_lookahead.png';
import mv_winner from '@/assets/macrovar/winner_forecasts.png';
import mv_gap from '@/assets/macrovar/gap_vs_level_heatmap.png';
import mv_sv from '@/assets/macrovar/varr_gdp_sv_path.png';
import mv_shockcount from '@/assets/macrovar/varx_fig2_shockcount.png';
import mv_rt from '@/assets/macrovar/varx_fig_rt.png';
import mv_id from '@/assets/macrovar/varx_fig_id.png';
import mv_density from '@/assets/macrovar/varx_fig_density.png';
// LSTM
import lstm_ic from '@/assets/lstm/test_ic_by_model.png';
import lstm_regime from '@/assets/lstm/regime_ic.png';
import lstm_ls from '@/assets/lstm/xs_ls_equity_curve.png';
// lowlat-mm
import lowlat_arch from '@/assets/lowlat/architecture.png';
import lowlat_pnl from '@/assets/lowlat/pnl_sample.png';
// DSGE
import dsge_mc from '@/assets/dsge/14_model_comparison.png';
import dsge_policy from '@/assets/dsge/10_policy_progression.png';
import dsge_post from '@/assets/dsge/12_posteriors.png';
import dsge_ppc from '@/assets/dsge/16_ppc.png';
import dsge_country from '@/assets/dsge/15_country_comparison.png';
import dsge_irf from '@/assets/dsge/01_irf.png';
// Global rates RV
import grrv_oor from '@/assets/grrv/grrv_fig3_out_of_regime.png';
import grrv_screen from '@/assets/grrv/grrv_fig2_regime_screen.png';
import grrv_beta from '@/assets/grrv/grrv_fig4_beta_instability.png';
import grrv_yields from '@/assets/grrv/grrv_fig1_yields.png';
// alpha-research-lab
import alpha_vrp from '@/assets/alpha/vrp_tearsheet.png';
import alpha_pairs from '@/assets/alpha/pairs_dashboard.png';
// financial-ml-lab
import fin_car from '@/assets/financial/car_reported.png';
// quant-macro-engine
import qme_dfast from '@/assets/qme/dfast_scenario.png';

import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const GH = 'https://github.com/Nicholashsw';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'sgxMultifactorFyp',
    slug: 'sgx-multifactor-fyp',
    imageUrl: sgx_performance,
    codeUrl: `${GH}/sgx-multifactor-fyp`,
    paperUrl: '/papers/sgx-multifactor-research-report.pdf',
    paperLabel: 'Research report (PDF)',
    papers: [
      {
        label: 'Verification ledger',
        url: `${GH}/sgx-multifactor-fyp/blob/main/VERIFICATION_LEDGER.md`,
      },
      {
        label: 'Exclusions',
        url: `${GH}/sgx-multifactor-fyp/blob/main/EXCLUSIONS.md`,
      },
    ],
    tags: ['Factor Investing', 'Survivorship', 'Transaction Costs'],
    category: 'Quantitative Research',
    capability: 'Systematic equities',
    date: '2026-08-20',
    featured: true,
    featuredRank: 1,
    status: 'published',
    stack: [
      'Python',
      'pandas',
      'statsmodels',
      'Bloomberg VBA',
      'Compustat',
      'Markit',
      'CapIQ',
    ],
    highlights: [
      { label: 'Delisting bias on SGX', value: '−0.89 pp/yr' },
      {
        label: 'Blue-chip Sharpe, survivor → point-in-time',
        value: '1.00 → 0.45',
      },
      {
        label: 'Composite edge, gross → fully costed',
        value: '1.66 → 0.28 %/mo',
      },
      { label: 'Specification-grid tests surviving BHY', value: '0 of 65' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'core_performance', src: sgx_performance },
      { id: 'surv_bias', src: sgx_surv_bias },
      { id: 'exit_mix', src: sgx_exit_mix },
      { id: 'leakage_funnel', src: sgx_funnel },
      { id: 'markit_borrow', src: sgx_markit },
      { id: 'capacity', src: sgx_capacity },
      { id: 'benchmark_contamination', src: sgx_benchmark },
      { id: 'multiple_testing', src: sgx_mtest },
      { id: 'merton_fit', src: sgx_merton },
      { id: 'tsmom_combo', src: sgx_tsmom },
    ],
  },
  {
    id: 'fxOptionsVrp',
    slug: 'fx-options-vrp',
    imageUrl: vrp_strategy,
    codeUrl: `${GH}/fx-options-vrp`,
    paperUrl: '/papers/fx-options-vrp.pdf',
    paperLabel: 'Read paper',
    tags: ['Options', 'Volatility', 'Databento'],
    category: 'Derivatives Research',
    capability: 'Derivatives / volatility',
    date: '2026-07-07',
    featured: true,
    featuredRank: 2,
    status: 'published',
    stack: [
      'Python',
      'pandas',
      'pyarrow',
      'statsmodels',
      'Databento GLBX.MDP3',
      'Black-76',
    ],
    highlights: [
      { label: 'Daily root-tenor observations', value: '70,714' },
      {
        label: 'Static short-vol proxy (NW63 t)',
        value: '0.28 vol-pts (1.79)',
      },
      { label: 'Top-IV selection rule (NW63 t)', value: '0.51 vol-pts (2.41)' },
      { label: 'Roots negative in 2022', value: '7 of 7' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'strategy_summary', src: vrp_strategy },
      { id: 'cumulative_payoff', src: vrp_cumulative },
      { id: 'vrp_by_root', src: vrp_by_root },
      { id: 'yearly_heatmap', src: vrp_heatmap },
      { id: 'iv_vs_rv', src: vrp_iv_rv },
      { id: 'vrp_by_tenor', src: vrp_tenor },
    ],
  },
  {
    id: 'treasuryCurve',
    slug: 'treasury-curve-carry-momentum',
    imageUrl: tsy_signal,
    codeUrl: `${GH}/treasury-curve-carry-momentum`,
    paperUrl: '/papers/treasury-curve-carry-momentum.pdf',
    paperLabel: 'Read paper',
    tags: ['Rates', 'Futures', 'Momentum'],
    category: 'Rates Research',
    capability: 'Rates',
    date: '2026-07-10',
    featured: true,
    featuredRank: 3,
    status: 'published',
    stack: ['Python', 'pandas', 'statsmodels', 'Jupyter', 'Bloomberg VBA'],
    highlights: [
      {
        label: 'Same 2s10s book: momentum vs reversion',
        value: '−0.79 vs +0.71',
      },
      { label: 'Duration momentum, net Sharpe', value: '0.68' },
      { label: 'Curve vs baseline, DM p-values', value: '0.41 / 0.49' },
      { label: 'Sample, net of costs', value: '2010–2026' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'signal_contrast', src: tsy_signal },
      { id: 'equity_curves', src: tsy_equity },
      { id: 'risk_return', src: tsy_risk },
    ],
  },
  {
    id: 'macroVarResearchLab',
    slug: 'macro-var-research-lab',
    imageUrl: mv_relrmse,
    codeUrl: `${GH}/macro-var-research-lab`,
    paperUrl: '/papers/macro-var-01-var-selection-horserace.pdf',
    paperLabel: 'Read paper (study 1)',
    papers: [
      {
        label: 'Study 2: BVAR with constructed shocks',
        url: '/papers/macro-var-02-bvar-shocks-density.pdf',
      },
      {
        label: 'Study 3: VARX permutation study',
        url: '/papers/macro-var-03-varx-permutation-study.pdf',
      },
    ],
    tags: ['Econometrics', 'Forecasting', 'Bayesian'],
    category: 'Econometrics',
    capability: 'Macro / econometrics',
    date: '2026-07-10',
    featured: true,
    featuredRank: 4,
    status: 'published',
    stack: ['Python', 'statsmodels', 'scikit-learn', 'arch', 'FRED', 'ALFRED'],
    highlights: [
      { label: 'Studies, papers', value: '3, 3' },
      { label: 'Unique models in walk-forward', value: '1,014' },
      { label: 'Estimators beating a univariate AR (MCS)', value: '0' },
      { label: 'HP-filter endpoint look-ahead', value: '66% of cycle std' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'relrmse_heatmap', src: mv_relrmse },
      { id: 'phase2_heatmap', src: mv_phase2 },
      { id: 'hp_lookahead', src: mv_hp },
      { id: 'winner_forecasts', src: mv_winner },
      { id: 'gap_vs_level_heatmap', src: mv_gap },
      { id: 'varr_gdp_sv_path', src: mv_sv },
      { id: 'varx_fig2_shockcount', src: mv_shockcount },
      { id: 'varx_fig_rt', src: mv_rt },
      { id: 'varx_fig_id', src: mv_id },
      { id: 'varx_fig_density', src: mv_density },
    ],
  },
  {
    id: 'lstmEquityForecasting',
    slug: 'lstm-equity-forecasting',
    imageUrl: lstm_ic,
    codeUrl: `${GH}/lstm-equity-forecasting`,
    paperUrl: '/papers/lstm-equity-forecasting.pdf',
    paperLabel: 'Read paper',
    tags: ['Deep Learning', 'Cross-Sectional', 'PyTorch'],
    category: 'Machine Learning',
    capability: 'Machine learning',
    date: '2026-07-14',
    featured: true,
    featuredRank: 5,
    status: 'published',
    stack: [
      'Python',
      'PyTorch',
      'LightGBM',
      'XGBoost',
      'scikit-learn',
      'Bloomberg VBA',
    ],
    highlights: [
      { label: 'S&P 500 constituents, 2005–2026', value: '518' },
      { label: 'High-vol cross-sectional IC (t)', value: '0.044 (3.2)' },
      { label: 'Long-short Sharpe, gross → net', value: '2.09 → < 0' },
      { label: 'IC at a five-day horizon', value: '≈ 0' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'test_ic_by_model', src: lstm_ic },
      { id: 'regime_ic', src: lstm_regime },
      { id: 'xs_ls_equity_curve', src: lstm_ls },
    ],
  },
  {
    id: 'lowlatMm',
    slug: 'lowlat-mm',
    imageUrl: lowlat_arch,
    codeUrl: `${GH}/lowlat-mm`,
    tags: ['C++20', 'Market Making', 'Low Latency'],
    category: 'Systems / C++',
    capability: 'Systems / market microstructure',
    date: '2026-06-10',
    featured: true,
    featuredRank: 6,
    status: 'published',
    stack: ['C++20', 'CMake', 'Catch2', 'std::variant events'],
    highlights: [
      { label: 'Engine', value: 'C++20, event-driven' },
      { label: 'Unit tests', value: '30 cases, 119 assertions' },
      { label: 'Latency model', value: 'explicit, both directions' },
      { label: 'Sample run on a random walk', value: 'loses, by design' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'architecture', src: lowlat_arch },
      { id: 'pnl_sample', src: lowlat_pnl },
    ],
  },
  {
    id: 'nkdsge',
    slug: 'nkdsge-dsge',
    imageUrl: dsge_mc,
    codeUrl: `${GH}/nkdsge-dsge`,
    tags: ['DSGE', 'Bayesian', 'Kalman'],
    category: 'Structural Macro',
    capability: 'Structural macro',
    date: '2026-07-28',
    featured: false,
    featuredRank: 7,
    status: 'published',
    stack: ['Python', 'NumPy', 'SciPy', 'ECB Data Portal', 'FRED', 'ALFRED'],
    highlights: [
      { label: 'Solution', value: 'Klein / QZ, BK-determinate' },
      {
        label: 'Log Bayes factors: smoothing, forward-looking',
        value: '+91, +46',
      },
      { label: 'MCMC', value: '2 chains × 12,000' },
      { label: 'Posterior predictive moments passing', value: '9 of 10' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'model_comparison', src: dsge_mc },
      { id: 'policy_progression', src: dsge_policy },
      { id: 'posteriors', src: dsge_post },
      { id: 'ppc', src: dsge_ppc },
      { id: 'country_comparison', src: dsge_country },
      { id: 'irf', src: dsge_irf },
    ],
  },
  {
    id: 'quantMacroEngine',
    slug: 'quant-macro-engine',
    imageUrl: qme_dfast,
    codeUrl: `${GH}/quant-macro-engine`,
    tags: ['BVAR', 'Black-Litterman', 'Scenario Analysis'],
    category: 'Macro Systems',
    capability: 'Macro engine',
    date: '2026-07-29',
    featured: false,
    featuredRank: 8,
    status: 'published',
    stack: ['Python', 'NumPy', 'pandas', 'FRED', 'BEA', 'OECD', 'ECB'],
    highlights: [
      { label: 'Views into Black-Litterman', value: 'BVAR posterior' },
      { label: 'Conditional forecasts', value: 'Waggoner–Zha' },
      { label: 'DFAST 2026: BVAR vs Fed trough GDP', value: '−2.9% vs −4.6%' },
    ],
    keyFeatures: [],
    galleryImages: [{ id: 'dfast_scenario', src: qme_dfast }],
  },
  {
    id: 'globalRatesRv',
    slug: 'global-rates-rv',
    imageUrl: grrv_oor,
    codeUrl: `${GH}/global-rates-rv`,
    papers: [
      {
        label: 'FINDINGS.md',
        url: `${GH}/global-rates-rv/blob/main/FINDINGS.md`,
      },
    ],
    tags: ['Rates', 'Cointegration', 'Negative Result'],
    category: 'Rates Research',
    capability: 'Rates / relative value',
    date: '2026-07-29',
    featured: false,
    featuredRank: 9,
    status: 'negative-result',
    stack: [
      'Python',
      'statsmodels',
      'FRED',
      'Bundesbank',
      'Japan MoF',
      'Bank of Canada',
    ],
    highlights: [
      { label: 'Cointegrated pairs, full sample', value: '0 of 18' },
      { label: 'Within regimes pass / survive FDR', value: '11 of 144 / 6' },
      { label: 'Out-of-regime mean Sharpe', value: '−0.27' },
      { label: 'FX contamination R²', value: '≤ 0.0016' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'out_of_regime', src: grrv_oor },
      { id: 'regime_screen', src: grrv_screen },
      { id: 'beta_instability', src: grrv_beta },
      { id: 'yields', src: grrv_yields },
    ],
  },
  {
    id: 'alphaResearchLab',
    slug: 'alpha-research-lab',
    imageUrl: alpha_vrp,
    codeUrl: `${GH}/alpha-research-lab`,
    tags: ['Volatility', 'Options', 'Backtesting'],
    category: 'Quantitative Research',
    capability: 'Volatility strategies',
    date: '2026-06-14',
    featured: false,
    featuredRank: 10,
    status: 'published',
    stack: ['Python', 'pandas', 'Black-76', 'Johansen / VECM', 'Bloomberg BGN'],
    highlights: [
      { label: 'XAUUSD / USDJPY trade Sharpe', value: '0.41 / 0.40' },
      { label: 'Win rate vs breakeven', value: '73% vs 70%' },
      { label: 'Sample', value: '2005–2026' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'vrp_tearsheet', src: alpha_vrp },
      { id: 'pairs_dashboard', src: alpha_pairs },
    ],
  },
  {
    id: 'financialMlLab',
    slug: 'financial-ml-lab',
    imageUrl: fin_car,
    codeUrl: `${GH}/financial-ml-lab`,
    tags: ['Event Study', 'Alt Data', 'Python'],
    category: 'Alternative Data',
    capability: 'Alternative data',
    date: '2026-05-18',
    featured: false,
    featuredRank: 11,
    status: 'published',
    stack: ['Python', 'pandas', 'pdfplumber', 'yfinance'],
    highlights: [
      { label: 'House PTR trades, 2022–2025', value: '5,763' },
      { label: 'Transaction-date CAR(+1,+21) (t)', value: '−0.28% (−2.22)' },
      { label: 'Committee-relevant CAR (t)', value: '+0.18% (0.77)' },
    ],
    keyFeatures: [],
    galleryImages: [{ id: 'car_reported', src: fin_car }],
  },
];

// Flagships first by rank, then the rest by rank.
export const projectsList: Array<ProjectData> = [...projectsListUnsorted].sort(
  (a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99)
);

function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  const langUi = ui as any;
  const currentProjectId = project.id as keyof typeof ui.en.projectsContent;
  const projectContentSource =
    lang in langUi && langUi[lang]?.projectsContent?.[currentProjectId]
      ? langUi[lang].projectsContent
      : langUi[defaultLanguage].projectsContent;
  const i18nData = projectContentSource[currentProjectId] as any;

  if (!i18nData) {
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id,
      description: 'Description missing for this project.',
      imageAltText: 'Placeholder image',
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated: [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: '',
        })) ?? [],
      challenges: '',
      learnings: '',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: '',
      };
      return { ...kf, ...featureTranslations };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi,
        alt: imageTranslations.alt,
        caption: imageTranslations.caption ?? '',
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    headline: i18nData.headline,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription: i18nData.detailedDescription,
    whyItMatters: i18nData.whyItMatters,
    methodology: i18nData.methodology ? [...i18nData.methodology] : undefined,
    findings: i18nData.findings ? [...i18nData.findings] : undefined,
    caveats: i18nData.caveats ? [...i18nData.caveats] : undefined,
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData.challenges,
    learnings: i18nData.learnings,
  };
}

export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

/** Projects shown on the homepage: explicit curation, never "latest N". */
export function getFeaturedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  return getTranslatedProjects(lang)
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));
}

/** Projects listed on /projects: everything with something to show. In-progress work is hidden. */
export function getListedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  return getTranslatedProjects(lang).filter(
    (p) => (p.status ?? 'published') !== 'in-progress'
  );
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) return undefined;
  return translateProject(project, lang || defaultLanguage);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'languages',
    iconName: 'Code',
    technologies: [
      { id: 'python', name: 'Python' },
      { id: 'cpp', name: 'C++' },
      { id: 'sql', name: 'SQL' },
    ],
  },
  {
    id: 'quantitative',
    iconName: 'TrendingUp',
    technologies: [
      { id: 'microstructure', name: 'Market Microstructure' },
      { id: 'options', name: 'Options & Volatility' },
      { id: 'bayesian', name: 'Bayesian Time-Series' },
      { id: 'factor', name: 'Factor Modelling' },
    ],
  },
  {
    id: 'tools',
    iconName: 'Wrench',
    technologies: [
      { id: 'bloomberg', name: 'Bloomberg' },
      { id: 'databento', name: 'Databento' },
      { id: 'git', name: 'Git' },
    ],
  },
];

export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;
  const langUi = ui as any;
  return skillsList.map((skill) => {
    const c = langUi[currentLang]?.skillsContent?.[skill.id] ??
      langUi[defaultLanguage]?.skillsContent?.[skill.id] ?? {
        title: skill.id,
        description: '',
      };
    return { ...skill, title: c.title, description: c.description ?? '' };
  });
}
