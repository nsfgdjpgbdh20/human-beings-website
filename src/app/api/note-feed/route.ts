import { NextRequest, NextResponse } from 'next/server';
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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const feedUrl = searchParams.get('url');
  const limit = parseInt(searchParams.get('limit') || '3', 10);

  if (!feedUrl) {
    return NextResponse.json(
      { error: 'Feed URL is required' },
      { status: 400 }
    );
  }

  // Validate that the URL is from note.com for security
  try {
    const url = new URL(feedUrl);
    if (!url.hostname.endsWith('note.com')) {
      return NextResponse.json(
        { error: 'Only note.com feeds are allowed' },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL' },
      { status: 400 }
    );
  }

  try {
    const feed = await parser.parseURL(feedUrl);

    const articles: NoteArticle[] = feed.items.map((item) => {
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

    return NextResponse.json({
      articles: articles.slice(0, limit)
    });
  } catch (error) {
    console.error('Failed to fetch Note RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed', articles: [] },
      { status: 500 }
    );
  }
}
