import Parser from 'rss-parser';

export type NoteArticle = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  thumbnail?: string;
};

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'thumbnail'],
    ],
  },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8'
  }
});

export async function getLatestNoteArticles(feedUrl: string, limit: number = 3): Promise<NoteArticle[]> {
  console.log(`Fetching RSS feed from: ${feedUrl}`);
  try {
    const feed = await parser.parseURL(feedUrl);
    console.log(`Successfully fetched ${feed.items.length} items from RSS.`);

    // Transform items to match our type and limit the count
    const articles = feed.items.map((item) => {
      // Extract thumbnail if available in different common RSS formats for Note
      let thumbnail = '';
      if (item.thumbnail) {
        thumbnail = item.thumbnail;
      } else if (item.enclosure && item.enclosure.url && item.enclosure.type?.startsWith('image/')) {
        thumbnail = item.enclosure.url;
      }

      return {
        title: item.title || '無題',
        link: item.link || '#',
        pubDate: item.pubDate || '',
        contentSnippet: item.contentSnippet || '',
        thumbnail,
      };
    });

    return articles.slice(0, limit);
  } catch (error) {
    console.error('Failed to fetch Note RSS feed:', error);
    return [];
  }
}
