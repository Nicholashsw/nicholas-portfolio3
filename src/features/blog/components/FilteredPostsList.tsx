'use client';

import * as React from 'react';
import {
  searchQueryAtom,
  selectedTagAtom,
  filteredPostIdsAtom,
  filtersInitializedAtom,
} from '@/stores/blogFilterStore';
import { BlogFilters, type BlogFiltersProps } from './BlogFilters';

export type PostDataForFilter = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags?: Array<string>;
  body: string;
  pubDate: Date;
};

export type Props = {
  allPosts: Array<PostDataForFilter>;
  texts: BlogFiltersProps['texts'] & { noPostsFound: string };
  lang: string;
  initialSearchQuery?: string;
  initialTag?: string;
};

export function FilteredPostsList({
  allPosts,
  texts,
  lang,
  initialSearchQuery = '',
  initialTag = '',
}: Props) {
  const [searchQuery, setSearchQuery] = React.useState(initialSearchQuery);
  const [selectedTag, setSelectedTag] = React.useState(initialTag);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    if (selectedTag) {
      params.set('tag', selectedTag);
    } else {
      params.delete('tag');
    }

    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    );
    searchQueryAtom.set(searchQuery);
    selectedTagAtom.set(selectedTag);
  }, [searchQuery, selectedTag]);

  const filteredPosts = React.useMemo(() => {
    let posts = allPosts;

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.description.toLowerCase().includes(lowerCaseQuery) ||
          post.body.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (selectedTag) {
      posts = posts.filter((post) => post.tags?.includes(selectedTag));
    }

    const postIds = posts.map((p) => p.id);
    filteredPostIdsAtom.set(postIds);
    if (!filtersInitializedAtom.get()) {
      filtersInitializedAtom.set(true);
    }
    return posts;
  }, [allPosts, searchQuery, selectedTag]);

  const uniqueTagsForFilter = React.useMemo(() => {
    const allTagsRaw = allPosts.flatMap((post) => post.tags || []);
    return [...new Set(allTagsRaw)].sort().map((tag) => ({
      value: tag,
      label: tag.charAt(0).toUpperCase() + tag.slice(1),
    }));
  }, [allPosts]);

  return (
    <BlogFilters
      allTags={uniqueTagsForFilter}
      currentSearchQuery={searchQuery}
      currentTag={selectedTag}
      texts={texts}
      onSearchChange={setSearchQuery}
      onTagChange={setSelectedTag}
    />
  );
}
