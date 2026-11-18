import { describe, it, expect } from 'vitest';
import { sortNewestFirst, searchPosts, makeExcerpt, formatDate } from './posts';

const posts = [
  { id: 1, title: 'Learning React', author: 'Amina', date: '2026-11-10' },
  { id: 2, title: 'CSS Grid Tips', author: 'Brian', date: '2026-11-15' },
  { id: 3, title: 'Git Workflow', author: 'Wanjiru', date: '2026-11-01' },
];

describe('sortNewestFirst', () => {
  it('puts the most recent post first', () => {
    expect(sortNewestFirst(posts).map((p) => p.id)).toEqual([2, 1, 3]);
  });

  it('does not mutate the original array', () => {
    const copy = [...posts];
    sortNewestFirst(posts);
    expect(posts).toEqual(copy);
  });
});

describe('searchPosts', () => {
  it('matches titles case-insensitively', () => {
    expect(searchPosts(posts, 'react').map((p) => p.id)).toEqual([1]);
  });

  it('matches authors', () => {
    expect(searchPosts(posts, 'BRIAN').map((p) => p.id)).toEqual([2]);
  });

  it('returns every post for an empty or blank query', () => {
    expect(searchPosts(posts, '   ')).toHaveLength(3);
  });

  it('returns an empty array when nothing matches', () => {
    expect(searchPosts(posts, 'python')).toEqual([]);
  });
});

describe('makeExcerpt', () => {
  it('leaves short text unchanged', () => {
    expect(makeExcerpt('Short text', 50)).toBe('Short text');
  });

  it('cuts long text on a word boundary and adds an ellipsis', () => {
    expect(makeExcerpt('one two three four', 10)).toBe('one two…');
  });
});

describe('formatDate', () => {
  it('formats an ISO date as a readable string', () => {
    expect(formatDate('2026-11-18')).toBe('Nov 18, 2026');
  });
});
