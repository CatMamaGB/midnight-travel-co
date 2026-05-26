# Blog Authoring Guide

The blog now uses a **one-post-per-file** structure so articles are easier to maintain over time.

## Where Posts Live

- Content files live in `src/content/blog/`
- Shared blog types live in `src/content/blog/types.ts`
- The post list is assembled in `src/content/blog/index.ts`

## How To Add a New Post

1. Duplicate one of the existing post files in `src/content/blog/`
2. Update the post object fields:
   - `slug`
   - `title`
   - `seoTitle`
   - `excerpt`
   - `category`
   - `publishedAt`
   - `readingTime`
   - `heroKicker`
   - `heroSubtitle`
   - `intro`
   - `sections`
   - `finalThoughts`
   - `seoKeywords`
3. Export the new post from `src/content/blog/index.ts`
4. Run:

```bash
npm run lint
npm run test
```

## Content Structure Notes

- Use `intro` for opening paragraphs.
- Use `sections` for the main article flow.
- Use `subSections` when a section needs nested supporting content.
- Use `comparisonTable` only when a side-by-side comparison is genuinely helpful.

## Editorial Guidelines

- Write for real travelers first, SEO second.
- Keep advice specific and actionable.
- Avoid credential or supplier claims that cannot be substantiated.
- Prefer clear recommendations over keyword-heavy filler.
