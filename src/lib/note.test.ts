import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock the rss-parser module with a factory using vi.hoisted to ensure it runs before imports
const { mockParseURL } = vi.hoisted(() => {
  return {
    mockParseURL: vi.fn(),
  };
});

vi.mock('rss-parser', () => {
  // Create a mock constructor function
  const MockParser = function(this: any) {
    this.parseURL = mockParseURL;
  };

  return {
    default: MockParser,
  };
});

// Import after mocking
import { getLatestNoteArticles } from './note';
import type { NoteArticle } from './note';

describe('getLatestNoteArticles', () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Clear the mock before each test
    mockParseURL.mockClear();

    // Spy on console methods to suppress output and verify logs
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe('successful RSS parsing', () => {
    it('should fetch and parse RSS feed with complete data', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article 1',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            contentSnippet: 'This is a test article snippet',
            thumbnail: 'https://example.com/image1.jpg',
          },
          {
            title: 'Test Article 2',
            link: 'https://note.com/example/n/def456',
            pubDate: '2024-01-14T10:00:00Z',
            contentSnippet: 'Another test article',
            thumbnail: 'https://example.com/image2.jpg',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(mockParseURL).toHaveBeenCalledWith('https://note.com/example/rss');
      expect(consoleLogSpy).toHaveBeenCalledWith('Fetching RSS feed from: https://note.com/example/rss');
      expect(consoleLogSpy).toHaveBeenCalledWith('Successfully fetched 2 items from RSS.');

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        title: 'Test Article 1',
        link: 'https://note.com/example/n/abc123',
        pubDate: '2024-01-15T10:00:00Z',
        contentSnippet: 'This is a test article snippet',
        thumbnail: 'https://example.com/image1.jpg',
      });
    });

    it('should use default limit of 3 when not specified', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
          { title: 'Article 2', link: 'https://note.com/2', pubDate: '2024-01-14T10:00:00Z' },
          { title: 'Article 3', link: 'https://note.com/3', pubDate: '2024-01-13T10:00:00Z' },
          { title: 'Article 4', link: 'https://note.com/4', pubDate: '2024-01-12T10:00:00Z' },
          { title: 'Article 5', link: 'https://note.com/5', pubDate: '2024-01-11T10:00:00Z' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss');

      expect(result).toHaveLength(3);
      expect(result[0].title).toBe('Article 1');
      expect(result[1].title).toBe('Article 2');
      expect(result[2].title).toBe('Article 3');
    });

    it('should respect custom limit parameter', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
          { title: 'Article 2', link: 'https://note.com/2', pubDate: '2024-01-14T10:00:00Z' },
          { title: 'Article 3', link: 'https://note.com/3', pubDate: '2024-01-13T10:00:00Z' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 2);

      expect(result).toHaveLength(2);
      expect(result[0].title).toBe('Article 1');
      expect(result[1].title).toBe('Article 2');
    });

    it('should return all items when feed has fewer items than limit', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 5);

      expect(result).toHaveLength(1);
    });

    it('should handle limit of 0 by returning empty array', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 0);

      expect(result).toHaveLength(0);
    });
  });

  describe('thumbnail extraction', () => {
    it('should extract thumbnail from item.thumbnail field', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            thumbnail: 'https://example.com/thumbnail.jpg',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].thumbnail).toBe('https://example.com/thumbnail.jpg');
    });

    it('should extract thumbnail from enclosure when item.thumbnail is not available', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            enclosure: {
              url: 'https://example.com/enclosure.jpg',
              type: 'image/jpeg',
            },
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].thumbnail).toBe('https://example.com/enclosure.jpg');
    });

    it('should prioritize item.thumbnail over enclosure', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            thumbnail: 'https://example.com/thumbnail.jpg',
            enclosure: {
              url: 'https://example.com/enclosure.jpg',
              type: 'image/jpeg',
            },
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].thumbnail).toBe('https://example.com/thumbnail.jpg');
    });

    it('should not use enclosure if type is not an image', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            enclosure: {
              url: 'https://example.com/file.pdf',
              type: 'application/pdf',
            },
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].thumbnail).toBe('');
    });

    it('should handle various image MIME types in enclosure', async () => {
      const imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];

      for (const type of imageTypes) {
        const mockFeed = {
          items: [
            {
              title: 'Test Article',
              link: 'https://note.com/example/n/abc123',
              pubDate: '2024-01-15T10:00:00Z',
              enclosure: {
                url: `https://example.com/image.${type.split('/')[1]}`,
                type,
              },
            },
          ],
        };

        mockParseURL.mockResolvedValue(mockFeed);

        const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

        expect(result[0].thumbnail).toBe(`https://example.com/image.${type.split('/')[1]}`);
      }
    });

    it('should return empty string for thumbnail when none is available', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].thumbnail).toBe('');
    });

    it('should handle enclosure without type field', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            enclosure: {
              url: 'https://example.com/image.jpg',
            },
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].thumbnail).toBe('');
    });
  });

  describe('fallback values for missing fields', () => {
    it('should use "無題" (Untitled) when title is missing', async () => {
      const mockFeed = {
        items: [
          {
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].title).toBe('無題');
    });

    it('should use "#" when link is missing', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            pubDate: '2024-01-15T10:00:00Z',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].link).toBe('#');
    });

    it('should use empty string when pubDate is missing', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].pubDate).toBe('');
    });

    it('should use empty string when contentSnippet is missing', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].contentSnippet).toBe('');
    });

    it('should handle item with all fields missing', async () => {
      const mockFeed = {
        items: [
          {},
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0]).toEqual({
        title: '無題',
        link: '#',
        pubDate: '',
        contentSnippet: '',
        thumbnail: '',
      });
    });

    it('should handle null and undefined values', async () => {
      const mockFeed = {
        items: [
          {
            title: null,
            link: undefined,
            pubDate: null,
            contentSnippet: undefined,
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0]).toEqual({
        title: '無題',
        link: '#',
        pubDate: '',
        contentSnippet: '',
        thumbnail: '',
      });
    });

    it('should handle empty string values', async () => {
      const mockFeed = {
        items: [
          {
            title: '',
            link: '',
            pubDate: '',
            contentSnippet: '',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0]).toEqual({
        title: '無題',
        link: '#',
        pubDate: '',
        contentSnippet: '',
        thumbnail: '',
      });
    });
  });

  describe('error handling', () => {
    it('should return empty array when parser throws network error', async () => {
      mockParseURL.mockRejectedValue(new Error('Network error'));

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to fetch Note RSS feed:',
        expect.any(Error)
      );
    });

    it('should return empty array when parser throws parse error', async () => {
      mockParseURL.mockRejectedValue(new Error('Invalid XML'));

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to fetch Note RSS feed:',
        expect.any(Error)
      );
    });

    it('should return empty array when parser throws timeout error', async () => {
      mockParseURL.mockRejectedValue(new Error('Request timeout'));

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should handle parser returning invalid feed structure', async () => {
      mockParseURL.mockResolvedValue({ items: null });

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should return empty array when feed has no items', async () => {
      const mockFeed = {
        items: [],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result).toEqual([]);
      expect(consoleLogSpy).toHaveBeenCalledWith('Successfully fetched 0 items from RSS.');
    });
  });

  describe('edge cases', () => {
    it('should handle very large limit values', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
          { title: 'Article 2', link: 'https://note.com/2', pubDate: '2024-01-14T10:00:00Z' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 1000);

      expect(result).toHaveLength(2);
    });

    it('should handle negative limit values by returning empty array', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', -1);

      expect(result).toHaveLength(0);
    });

    it('should handle special characters in article data', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test & "Special" <Characters> 日本語テスト',
            link: 'https://note.com/example/n/abc123?param=value&other=test',
            pubDate: '2024-01-15T10:00:00Z',
            contentSnippet: 'Content with émojis 🎉 and symbols ©️®️™️',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].title).toBe('Test & "Special" <Characters> 日本語テスト');
      expect(result[0].contentSnippet).toBe('Content with émojis 🎉 and symbols ©️®️™️');
    });

    it('should handle very long article titles and snippets', async () => {
      const longTitle = 'A'.repeat(1000);
      const longSnippet = 'B'.repeat(5000);

      const mockFeed = {
        items: [
          {
            title: longTitle,
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            contentSnippet: longSnippet,
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(result[0].title).toBe(longTitle);
      expect(result[0].contentSnippet).toBe(longSnippet);
    });

    it('should handle different date formats', async () => {
      const mockFeed = {
        items: [
          { title: 'Article 1', link: 'https://note.com/1', pubDate: '2024-01-15T10:00:00Z' },
          { title: 'Article 2', link: 'https://note.com/2', pubDate: 'Mon, 15 Jan 2024 10:00:00 GMT' },
          { title: 'Article 3', link: 'https://note.com/3', pubDate: '2024-01-15' },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 5);

      expect(result[0].pubDate).toBe('2024-01-15T10:00:00Z');
      expect(result[1].pubDate).toBe('Mon, 15 Jan 2024 10:00:00 GMT');
      expect(result[2].pubDate).toBe('2024-01-15');
    });
  });

  describe('return type validation', () => {
    it('should return array of NoteArticle objects with correct structure', async () => {
      const mockFeed = {
        items: [
          {
            title: 'Test Article',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            contentSnippet: 'Test snippet',
            thumbnail: 'https://example.com/image.jpg',
          },
        ],
      };

      mockParseURL.mockResolvedValue(mockFeed);

      const result = await getLatestNoteArticles('https://note.com/example/rss', 3);

      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toHaveProperty('title');
      expect(result[0]).toHaveProperty('link');
      expect(result[0]).toHaveProperty('pubDate');
      expect(result[0]).toHaveProperty('contentSnippet');
      expect(result[0]).toHaveProperty('thumbnail');
      expect(typeof result[0].title).toBe('string');
      expect(typeof result[0].link).toBe('string');
      expect(typeof result[0].pubDate).toBe('string');
    });
  });
});
