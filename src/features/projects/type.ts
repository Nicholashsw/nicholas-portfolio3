export type KeyFeature = {
  id: string; // for i18n key
};

export type TechnologyDetail = {
  id: string;
  name: string;
};

export type GalleryImage = {
  id: string;
  src: ImageMetadata;
  alt: string;
  caption?: string;
};

/** Publication status drives where a project is shown and how it is labelled. */
export type ProjectStatus = 'published' | 'negative-result' | 'in-progress';

/** A headline number shown in the "At a glance" strip of a project page. */
export type Highlight = {
  label: string;
  value: string;
};

export type PaperLink = {
  label: string;
  url: string;
};

export type ProjectData = {
  id: string; // i18n key and internal reference
  slug: string; // URL segment; equals the GitHub repository name
  imageUrl?: ImageMetadata; // main / card image
  projectUrl?: string;
  codeUrl?: string;
  tags: Array<string>;
  category?: string;
  date: string;

  // Curation
  featured?: boolean; // shown on the homepage
  featuredRank?: number; // homepage and /projects ordering (lower first)
  status?: ProjectStatus; // defaults to 'published'
  capability?: string; // the distinct capability this project demonstrates

  // Research metadata
  paperUrl?: string; // primary paper or report, served from /public/papers
  paperLabel?: string; // e.g. "Read paper", "Research report"
  papers?: Array<PaperLink>; // additional papers for multi-study repos
  stack?: Array<string>; // language/library/data stack shown as badges
  highlights?: Array<Highlight>; // language-neutral numbers for the at-a-glance strip

  galleryImages?: Array<{ id: string; src: ImageMetadata }>;
  keyFeatures?: Array<KeyFeature>;
  technologiesUsed?: Array<TechnologyDetail>;
};

export type TranslatedKeyFeature = KeyFeature & {
  title: string;
  description: string;
};

export type TranslatedGalleryImage = GalleryImage & {};

export type TranslatedProject = ProjectData & {
  title: string;
  description: string;
  imageAltText: string;
  categoryText?: string;
  dateText?: string;
  headline?: string; // one-line finding shown on cards
  detailedDescription?: string;
  whyItMatters?: string;
  methodology?: Array<string>;
  findings?: Array<string>;
  caveats?: Array<string>;
  galleryImagesTranslated?: Array<{
    id: string;
    src: ImageMetadata;
    alt: string;
    caption: string;
  }>;
  keyFeaturesTranslated?: Array<TranslatedKeyFeature>;
  challenges?: string;
  learnings?: string;
};

// Skills
export type Technology = {
  id: string;
  name: string;
};

export type SkillData = {
  id: string;
  iconName: string;
  technologies: Array<Technology>;
};

export type TranslatedSkill = SkillData & {
  title: string;
  description: string;
};
