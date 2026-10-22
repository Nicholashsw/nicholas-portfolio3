// Project registry. Copy lives in ./content.ts (imported into i18n/ui.ts); this file holds the
// language-neutral metadata: assets, links, curation flags, and headline numbers.
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';

// SGX
import sgx_waterfall from '@/assets/sgx/cost_waterfall.png';
import sgx_exit_mix from '@/assets/sgx/surv_exit_mix.png';
import sgx_core from '@/assets/sgx/sti_core.png';

import vrp_premium from '@/assets/vrp/premium_by_currency.png';
import vrp_cumulative from '@/assets/vrp/chart_6_cumulative_payoff.png';
import vrp_by_year from '@/assets/vrp/premium_by_year.png';

import tsy_signal from '@/assets/treasury/fig1_signal_contrast.png';
import tsy_equity from '@/assets/treasury/fig2_equity_curves.png';

import mv_models from '@/assets/macrovar/models_vs_ar.png';
import mv_hp from '@/assets/macrovar/hp_lookahead.png';

import lstm_stress from '@/assets/lstm/stress_vs_calm.png';
import lstm_rmse from '@/assets/lstm/rmse_vs_zero.png';
import lstm_ls from '@/assets/lstm/xs_ls_equity_curve.png';

import lowlat_move from '@/assets/lowlat/pnl_vs_move.png';
import lowlat_rules from '@/assets/lowlat/pnl_by_rule.png';
import lowlat_pnl from '@/assets/lowlat/pnl_sample.png';

import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const GH = 'https://github.com/Nicholashsw';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'sgxMultifactor',
    slug: 'sgx-multifactor',
    imageUrl: sgx_waterfall,
    codeUrl: `${GH}/sgx-multifactor`,
    paperUrl: '/papers/sgx-multifactor-research-report.pdf',
    paperLabel: 'Research report (PDF)',
    papers: [
      {
        label: 'Verification ledger',
        url: `${GH}/sgx-multifactor/blob/main/VERIFICATION_LEDGER.md`,
      },
      {
        label: 'Exclusions',
        url: `${GH}/sgx-multifactor/blob/main/EXCLUSIONS.md`,
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
        value: '1.66 → 0.37 %/mo',
      },
      { label: 'Specification-grid tests surviving BHY', value: '0 of 65' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'cost_waterfall', src: sgx_waterfall },
      { id: 'exit_mix', src: sgx_exit_mix },
      { id: 'sti_core', src: sgx_core },
    ],
  },
  {
    id: 'fxOptionsVrp',
    slug: 'fx-options-vrp',
    imageUrl: vrp_premium,
    codeUrl: `${GH}/fx-options-vrp`,
    paperUrl: '/papers/fx-options-vrp.pdf',
    paperLabel: 'Read paper',
    tags: ['Options', 'Volatility', 'Databento'],
    category: 'Derivatives Research',
    capability: 'Derivatives / volatility',
    date: '2026-07-07',
    featured: true,
    featuredRank: 3,
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
      { id: 'premium_by_currency', src: vrp_premium },
      { id: 'cumulative_payoff', src: vrp_cumulative },
      { id: 'premium_by_year', src: vrp_by_year },
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
    featuredRank: 4,
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
    ],
  },
  {
    id: 'macroVarResearchLab',
    slug: 'macro-var-research-lab',
    imageUrl: mv_models,
    codeUrl: `${GH}/macro-var-research-lab`,
    paperUrl: '/papers/macro-var-consolidated.pdf',
    paperLabel: 'Read paper',
    papers: [
      {
        label: 'Stage 1 working paper: specification and estimator',
        url: '/papers/macro-var-01-var-selection-horserace.pdf',
      },
      {
        label: 'Stage 2 working paper: BVAR with constructed shocks',
        url: '/papers/macro-var-02-bvar-shocks-density.pdf',
      },
      {
        label: 'Stage 3 working paper: VARX permutation study',
        url: '/papers/macro-var-03-varx-permutation-study.pdf',
      },
    ],
    tags: ['Econometrics', 'Forecasting', 'Bayesian'],
    category: 'Econometrics',
    capability: 'Macro / econometrics',
    date: '2026-07-10',
    featured: true,
    featuredRank: 6,
    status: 'published',
    stack: ['Python', 'statsmodels', 'scikit-learn', 'arch', 'FRED', 'ALFRED'],
    highlights: [
      { label: 'Stages, one question', value: '3' },
      { label: 'Unique models in walk-forward', value: '1,014' },
      { label: 'Estimators beating a univariate AR (MCS)', value: '0' },
      { label: 'HP-filter endpoint look-ahead', value: '66% of cycle std' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'models_vs_ar', src: mv_models },
      { id: 'hp_lookahead', src: mv_hp },
    ],
  },
  {
    id: 'lstmEquityForecasting',
    slug: 'lstm-equity-forecasting',
    imageUrl: lstm_stress,
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
      { id: 'stress_vs_calm', src: lstm_stress },
      { id: 'rmse_vs_zero', src: lstm_rmse },
      { id: 'xs_ls_equity_curve', src: lstm_ls },
    ],
  },
  {
    id: 'lowlatMm',
    slug: 'lowlat-mm',
    imageUrl: lowlat_move,
    codeUrl: `${GH}/lowlat-mm`,
    tags: ['C++20', 'Market Making', 'Low Latency'],
    category: 'Systems / C++',
    capability: 'Systems / market microstructure',
    date: '2026-10-19',
    featured: true,
    featuredRank: 2,
    status: 'published',
    stack: ['C++20', 'CMake', 'Catch2', 'Python', 'Databento'],
    highlights: [
      { label: 'Mean daily PnL, touch / queue', value: '−US$7,310 / −US$4,451' },
      { label: 'Daily PnL explained by ES move', value: '58%' },
      { label: 'Best day, touch vs queue', value: '+US$30,125 vs −US$4,663' },
      { label: 'Data', value: '21 sessions of ESZ6, Databento' },
    ],
    keyFeatures: [],
    galleryImages: [
      { id: 'pnl_vs_move', src: lowlat_move },
      { id: 'pnl_by_rule', src: lowlat_rules },
      { id: 'pnl_sample', src: lowlat_pnl },
    ],
  },
];

// Flagships first by rank, then the rest by rank.
export const projectsList: Array<ProjectData> = projectsListUnsorted
  .filter((p) => p.status !== 'archived')
  .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));

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
