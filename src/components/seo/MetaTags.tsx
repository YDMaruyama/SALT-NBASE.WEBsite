import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export function MetaTags({
  title = "SALT'NBASE. | 心と体の調和を目指して - ソルトンベース 塩洞窟 ソルトン療法",
  description = "SALT'NBASE.(ソルトンベース)は、塩洞窟での瞑想とソルトン療法を中心とした新しい健康アプローチを提供します。チベット医学と現代医療を融合し、心と体の真の調和を目指します。",
  keywords = "ソルトンベース,SALT'NBASE,塩洞窟,ソルトン,ソルト療法,塩療法,チベット医学,瞑想,マッサージ,デトックス,ウェルネス,健康,排毒,精進料理,ヒーリング,岩塩洞窟,塩洞窟瞑想,ハロセラピー",
  ogImage = "https://salt-nbase.vercel.app/og-image.jpg",
  canonicalUrl,
  noindex = false
}: MetaTagsProps) {
  
  useEffect(() => {
    // Title
    document.title = title;
    
    // Meta description
    updateMetaTag('name', 'description', description);
    
    // Meta keywords
    updateMetaTag('name', 'keywords', keywords);
    
    // Robots
    updateMetaTag('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow');
    
    // Open Graph
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', canonicalUrl || window.location.href);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', "SALT'NBASE. (ソルトンベース)");
    updateMetaTag('property', 'og:locale', 'ja_JP');
    
    // Twitter Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);
    
    // 追加のSEOメタタグ（検索エンジン向け）
    updateMetaTag('name', 'author', "SALT'NBASE. (ソルトンベース)");
    updateMetaTag('name', 'geo.region', 'JP');
    updateMetaTag('name', 'geo.placename', '日本');
    updateMetaTag('name', 'language', 'ja');
    updateMetaTag('name', 'subject', '塩洞窟・ソルトン療法によるウェルネス・健康サービス');
    updateMetaTag('name', 'classification', 'ウェルネス,健康,療法');
    updateMetaTag('name', 'category', '健康・美容');
    updateMetaTag('name', 'coverage', '日本');
    updateMetaTag('name', 'distribution', 'global');
    updateMetaTag('name', 'rating', 'general');
    
    // Canonical URL
    if (canonicalUrl) {
      updateCanonicalLink(canonicalUrl);
    }
    
  }, [title, description, keywords, ogImage, canonicalUrl, noindex]);
  
  return null;
}

function updateMetaTag(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

function updateCanonicalLink(href: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  
  element.href = href;
}

// ページ別のメタタグ設定
export const pageMetaTags = {
  home: {
    title: "SALT'NBASE. | 心と体の調和を目指して - ソルトンベース 塩洞窟 ソルトン療法",
    description: "SALT'NBASE.(ソルトンベース)は、塩洞窟での瞑想とソルトン療法を中心とした新しい健康アプローチを提供します。チベット医学と現代医療を融合し、心と体の真の調和を目指します。",
    keywords: "ソルトンベース,SALT'NBASE,塩洞窟,ソルトン,ソルト療法,塩療法,チベット医学,瞑想,マッサージ,デトックス,ウェルネス,健康,排毒,精進料理,ヒーリング,岩塩洞窟,塩洞窟瞑想,ハロセラピー"
  },
  services: {
    title: "塩洞窟・ソルトン療法プラン・料金 | SALT'NBASE. (ソルトンベース)",
    description: "SALT'NBASE.(ソルトンベース)の塩洞窟・ソルトン療法プランをご紹介。塩洞窟単品プラン（¥5,000）から塩洞窟＋マッサージプラン（¥10,000）まで、お客様のニーズに合わせたコースをご用意。",
    keywords: "塩洞窟,ソルトン,ソルトンベース,料金,プラン,マッサージ,瞑想,ヒーリング,チベット医学,予約,ハロセラピー"
  },
  reservation: {
    title: "ご予約 | SALT'NBASE. (ソルトンベース) 塩洞窟・ソルトン療法",
    description: "SALT'NBASE.(ソルトンベース)の塩洞窟・ソルトン療法のご予約はLINE公式アカウントから24時間受付中。心と体の調和を目指す特別な時間をご一緒しませんか。",
    keywords: "ソルトンベース,塩洞窟,ソルトン,予約,LINE,営業時間,アクセス,お問い合わせ"
  }
};