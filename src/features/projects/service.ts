// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/placeholder.webp';
import sgx_cumulative from '@/assets/sgx/fig1_cumulative.png';
import sgx_ic from '@/assets/sgx/fig2_ic.png';
import sgx_annual from '@/assets/sgx/fig3_annual.png';
import sgx_tercile from '@/assets/sgx/fig4_tercile.png';
import sgx_regime from '@/assets/sgx/fig5_regime.png';
import sgx_rolling from '@/assets/sgx/fig6_rolling_sharpe.png';
import sgx_capm from '@/assets/sgx/fig7_capm.png';
import sgx_dist from '@/assets/sgx/fig8_distribution.png';
import sgx_weights from '@/assets/sgx/fig9_weights.png';
import sgx_heatmap from '@/assets/sgx/fig10_heatmap.png';
import mv_winner from '@/assets/macrovar/winner_forecasts.png';
import mv_winner_allyoy from '@/assets/macrovar/winner_forecasts_allyoy.png';
import mv_winner_aug from '@/assets/macrovar/winner_forecasts_augmented.png';
import mv_winner_reer from '@/assets/macrovar/winner_forecasts_reer_yoy.png';
import mv_relrmse from '@/assets/macrovar/relrmse_heatmap.png';
import mv_relrmse_allyoy from '@/assets/macrovar/relrmse_heatmap_allyoy.png';
import mv_relrmse_aug from '@/assets/macrovar/relrmse_heatmap_augmented.png';
import mv_relrmse_reer from '@/assets/macrovar/relrmse_heatmap_reer_yoy.png';
import mv_gap from '@/assets/macrovar/gap_vs_level_heatmap.png';
import mv_hp from '@/assets/macrovar/hp_lookahead.png';
import mv_phase2 from '@/assets/macrovar/phase2_heatmap.png';

import type { ProjectData, TranslatedProject } from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: "sgxMultifactorFyp",
    slug: "sgx-multifactor-fyp",
    imageUrl: sgx_cumulative,
    codeUrl: "https://github.com/Nicholashsw/sgx-multifactor-fyp",
    tags: ["Factor Investing", "Quant", "Python"],
    category: "Quantitative Research",
    date: "2026-06-28",
    keyFeatures: [],
    galleryImages: [
      { id: "fig1_cumulative", src: sgx_cumulative },
      { id: "fig2_ic", src: sgx_ic },
      { id: "fig3_annual", src: sgx_annual },
      { id: "fig4_tercile", src: sgx_tercile },
      { id: "fig5_regime", src: sgx_regime },
      { id: "fig6_rolling_sharpe", src: sgx_rolling },
      { id: "fig7_capm", src: sgx_capm },
      { id: "fig8_distribution", src: sgx_dist },
      { id: "fig9_weights", src: sgx_weights },
      { id: "fig10_heatmap", src: sgx_heatmap },
    ],
  },
  {
    id: "macroVarResearchLab",
    slug: "macro-var-research-lab",
    imageUrl: mv_winner,
    codeUrl: "https://github.com/Nicholashsw/macro-var-research-lab",
    tags: ["Econometrics", "Forecasting", "Bayesian"],
    category: "Quantitative Research",
    date: "2026-06-21",
    keyFeatures: [],
    galleryImages: [
      { id: "winner_forecasts", src: mv_winner },
      { id: "winner_forecasts_allyoy", src: mv_winner_allyoy },
      { id: "winner_forecasts_augmented", src: mv_winner_aug },
      { id: "winner_forecasts_reer_yoy", src: mv_winner_reer },
      { id: "relrmse_heatmap", src: mv_relrmse },
      { id: "relrmse_heatmap_allyoy", src: mv_relrmse_allyoy },
      { id: "relrmse_heatmap_augmented", src: mv_relrmse_aug },
      { id: "relrmse_heatmap_reer_yoy", src: mv_relrmse_reer },
      { id: "gap_vs_level_heatmap", src: mv_gap },
      { id: "hp_lookahead", src: mv_hp },
      { id: "phase2_heatmap", src: mv_phase2 },
    ],
  },
  {
    id: "alphaResearchLab",
    slug: "alpha-research-lab",
    imageUrl: placeholderImage,
    codeUrl: "https://github.com/Nicholashsw/alpha-research-lab",
    tags: ["Volatility", "Options", "Backtesting"],
    category: "Quantitative Research",
    date: "2026-06-14",
    keyFeatures: [],
    galleryImages: [],
  },
  {
    id: "financialMlLab",
    slug: "financial-ml-lab",
    imageUrl: placeholderImage,
    codeUrl: "https://github.com/Nicholashsw/financial-ml-lab",
    tags: ["Event Study", "Alt Data", "Python"],
    category: "Machine Learning / Quant Research",
    date: "2026-04-15",
    keyFeatures: [],
    galleryImages: [],
  },
  {
    id: "lowlatMm",
    slug: "lowlat-mm",
    imageUrl: placeholderImage,
    codeUrl: "https://github.com/Nicholashsw/lowlat-mm",
    tags: ["C++", "Market Making", "Low Latency"],
    category: "Systems / C++",
    date: "2026-03-01",
    keyFeatures: [],
    galleryImages: [],
  },
];

export const projectsContent = {
  sgxMultifactorFyp: {
    title: "Multi-Factor Equity Strategy — SGX",
    description: `Systematic multi-factor long-short equity on SGX with a point-in-time survivorship correction (NTU FYP).`,
    imageAltText: "SGX multi-factor strategy cumulative performance",
    categoryText: "Quantitative Research",
    dateText: "June 2026",
    detailedDescription: `A systematic multi-factor long-short strategy on Singapore equities, built as my final-year project. Value, momentum, quality, size and liquidity signals combined into an IC-weighted composite, tested with Fama-MacBeth pricing, a regime overlay, and a point-in-time survivorship correction. The survivorship work is the core finding: rebuilding the universe to include delisted names cuts the long-only Sharpe from 0.98 to 0.61, a ~1.6%/yr survivorship premium the naive survivor-only universe hides. Composite factor IC 0.075 (t=5.05); value carries the signal, momentum and quality don't.`,
    keyFeatures: {},
    galleryImages: {
      fig1_cumulative: { alt: "Cumulative strategy performance vs STI", caption: "Cumulative performance of the multi-factor strategy vs the STI benchmark" },
      fig2_ic: { alt: "Factor information coefficients", caption: "Information coefficient by factor" },
      fig3_annual: { alt: "Annual returns", caption: "Annual return breakdown" },
      fig4_tercile: { alt: "Tercile portfolio sorts", caption: "Performance by factor tercile" },
      fig5_regime: { alt: "Regime-conditioned performance", caption: "Performance under the macro regime overlay" },
      fig6_rolling_sharpe: { alt: "Rolling Sharpe ratio", caption: "Rolling Sharpe ratio over time" },
      fig7_capm: { alt: "CAPM regression", caption: "CAPM alpha/beta regression" },
      fig8_distribution: { alt: "Return distribution", caption: "Distribution of strategy returns" },
      fig9_weights: { alt: "Factor weights", caption: "IC-weighted factor allocation" },
      fig10_heatmap: { alt: "Factor correlation heatmap", caption: "Cross-factor correlation heatmap" },
    },
    challenges: `Building point-in-time index membership to remove survivorship bias, handling delisted names, and aligning fundamentals with a 45-day reporting lag to avoid look-ahead.`,
    learnings: `Factor construction and Fama-MacBeth testing, and how much measured performance is an artifact of survivorship if you don't correct for it.`,
  },
  macroVarResearchLab: {
    title: "Macro Forecasting Horse Race",
    description: `An honest out-of-sample horse race across five macro forecasting model classes.`,
    imageAltText: "Winner-model out-of-sample forecasts",
    categoryText: "Quantitative Research",
    dateText: "June 2026",
    detailedDescription: `A reproducible out-of-sample horse race across five model classes — random walk, AR, VAR, Bayesian VAR, and shrinkage methods — over 128 quarters of US macro data. Judged honestly with Clark-West, Diebold-Mariano, and the Model Confidence Set. The BVAR edges the naive benchmarks on most targets, but only the real exchange rate beats them significantly (DM p=0.026), and the random walk survives the Model Confidence Set everywhere. The finding is the restraint: macro variables are genuinely hard to forecast beyond no-change, and the framework refuses to overclaim it.`,
    keyFeatures: {},
    galleryImages: {
      winner_forecasts: { alt: "Winner-model forecasts", caption: "Out-of-sample forecasts from the selected model" },
      winner_forecasts_allyoy: { alt: "Winner forecasts (all-YoY)", caption: "Winner forecasts, all-YoY specification" },
      winner_forecasts_augmented: { alt: "Winner forecasts (augmented)", caption: "Winner forecasts, augmented specification" },
      winner_forecasts_reer_yoy: { alt: "Winner forecasts (REER-YoY)", caption: "Winner forecasts, REER-YoY specification" },
      relrmse_heatmap: { alt: "Relative-RMSE heatmap", caption: "Relative RMSE vs benchmark by model and target" },
      relrmse_heatmap_allyoy: { alt: "Relative-RMSE heatmap (all-YoY)", caption: "Relative RMSE, all-YoY specification" },
      relrmse_heatmap_augmented: { alt: "Relative-RMSE heatmap (augmented)", caption: "Relative RMSE, augmented specification" },
      relrmse_heatmap_reer_yoy: { alt: "Relative-RMSE heatmap (REER-YoY)", caption: "Relative RMSE, REER-YoY specification" },
      gap_vs_level_heatmap: { alt: "Gap vs level heatmap", caption: "Output-gap vs level RMSE comparison" },
      hp_lookahead: { alt: "HP-filter look-ahead diagnostic", caption: "HP-filter end-point look-ahead diagnostic" },
      phase2_heatmap: { alt: "Model-class heatmap", caption: "Phase-2 model-class comparison" },
    },
    challenges: `Implementing a leakage-safe walk-forward protocol, the Minnesota BVAR with a sum-of-coefficients prior, and the Model Confidence Set to guard against data-mining.`,
    learnings: `Bayesian time-series, formal forecast evaluation, and that an honest negative result is worth more than an overfit positive one.`,
  },
  alphaResearchLab: {
    title: "Volatility & Systematic Strategy Lab",
    description: `A multi-strategy lab around the volatility risk premium, with a Black-76 options engine.`,
    imageAltText: "Volatility risk premium strategy",
    categoryText: "Quantitative Research",
    dateText: "June 2026",
    detailedDescription: `A multi-strategy research lab built around the volatility risk premium. A VRP strategy across FX spot, futures and options (defined-risk spreads, 200-day trend filter) backtested 2005–2026: gold and yen clear breakeven (Sharpe ~0.40, win rate ~73%), while EUR-correlated pairs sit just below, reflecting structurally thinner premium. Plus a Black-76 options-on-futures pricing engine (greeks, American binomial, 11/11 self-tests), Johansen/VECM relative-value pairs, and mean-reversion and momentum modules.`,
    keyFeatures: {},
    galleryImages: {},
    challenges: `Building an event-driven backtester, aligning option-chain expiries, and pricing options on futures correctly with early-exercise.`,
    learnings: `Derivatives greeks, the macro-volatility interplay, and that the VRP is real but thin and asset-dependent.`,
  },
  financialMlLab: {
    title: "Congressional-Trade Alpha — An Event Study",
    description: `An event study on whether copying congressional trades is an edge (it isn't).`,
    imageAltText: "Congressional trade event study",
    categoryText: "Machine Learning / Quant Research",
    dateText: "April 2026",
    detailedDescription: `An event study testing whether copying US congressional stock trades is an edge. 5,763 House disclosures, 2022–2025, with a proper market-model estimation window and SPY benchmark. The answer is no: sign-adjusted abnormal returns are roughly zero to slightly negative at every horizon a copy-trader could actually act on. The only signal with a pulse is committee relevance — members trading their own committee's sector — but the t-stats are weak and costs would eat it. A clean, well-powered null result.`,
    keyFeatures: {},
    galleryImages: {},
    challenges: `Parsing messy disclosure filings, building a leakage-safe event window, and resisting the urge to torture a non-result into a signal.`,
    learnings: `Event-study methodology, and that proving a negative rigorously is its own kind of result.`,
  },
  lowlatMm: {
    title: "Low-Latency Market-Making Engine",
    description: `A C++20 event-driven market-making and execution engine.`,
    imageAltText: "Low-latency market-making engine",
    categoryText: "Systems / C++",
    dateText: "March 2026",
    detailedDescription: `A C++20 event-driven market-making and execution engine: limit order book, order management, a pre-trade risk gate with kill switch, and an exchange simulator, on a fully deterministic single-queue event loop. 28 unit tests, ~109 assertions. Against a random-walk feed the sample run loses money by design, to adverse selection, which is the point: it's the engine and the microstructure that are the work, not a tuned PnL.`,
    keyFeatures: {},
    galleryImages: {},
    challenges: `Designing clean module boundaries (book / OMS / risk / simulator), keeping the event loop deterministic, and modelling fills and latency realistically.`,
    learnings: `Market microstructure, low-latency systems design in C++, and how adverse selection punishes a naive quoting strategy.`,
  },
};

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  // Remove problematic type assertion and use string for key
  const currentProjectId = project.id as string;

  // Use 'as any' for ui to bypass index type errors
  const langUi = ui as any;
  const projectContentSource =
    lang in langUi && langUi[lang]?.projectsContent?.[currentProjectId]
      ? langUi[lang].projectsContent
      : langUi[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
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
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
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
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

