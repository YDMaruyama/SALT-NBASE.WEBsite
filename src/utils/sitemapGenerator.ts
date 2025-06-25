// 動的サイトマップ生成ユーティリティ
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapUrl[] = [];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // 末尾のスラッシュを削除
  }

  addUrl(url: SitemapUrl): void {
    // URLの正規化
    const normalizedUrl = {
      ...url,
      loc: url.loc.startsWith('http') ? url.loc : `${this.baseUrl}${url.loc}`,
      lastmod: url.lastmod || new Date().toISOString().split('T')[0],
      priority: url.priority || 0.5
    };
    
    this.urls.push(normalizedUrl);
  }

  generateXML(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlElements = this.urls.map(url => {
      return `  <url>
    <loc>${this.escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    <priority>${url.priority}</priority>
  </url>`;
    }).join('\n');

    return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
  }

  private escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        default: return c;
      }
    });
  }

  // SALT'NBASE.用の標準URLを追加
  addStandardUrls(): void {
    const standardUrls: SitemapUrl[] = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: '/#introduction',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/#initiatives',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/#services',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: '/#schedule',
        changefreq: 'weekly',
        priority: 0.7
      },
      {
        loc: '/#business-hours',
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: '/#reservation',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: '/#testimonials',
        changefreq: 'monthly',
        priority: 0.5
      }
    ];

    standardUrls.forEach(url => this.addUrl(url));
  }
}

// 使用例
export function generateSaltNBaseSitemap(): string {
  const generator = new SitemapGenerator('https://salt-nbase.vercel.app');
  generator.addStandardUrls();
  return generator.generateXML();
}