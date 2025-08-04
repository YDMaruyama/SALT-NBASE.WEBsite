import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'WebSite' | 'Service';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'LocalBusiness':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SALT'NBASE.",
          "alternateName": ["ソルトンベース", "塩洞窟 SALT'NBASE", "ソルトン療法センター", "SALT'NBASE. ソルトンベース"],
          "description": "塩洞窟での瞑想とソルトン療法を中心とした排毒のテーマパーク。チベット医学と現代医療を融合させた新しい健康アプローチを提供。",
          "url": "https://salt-nbase.vercel.app",
          "telephone": "080-6751-3908",
          "email": "info@saltnbase.jp",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP",
            "addressLocality": "日本"
          },
          "openingHours": [
            "Tu 10:00-18:00", 
            "We 10:00-18:00",
            "Th 10:00-18:00",
            "Fr 10:00-18:00",
            "Sa 10:00-18:00"
          ],
          "priceRange": "¥5,000-¥9,800",
          "servesCuisine": "精進料理",
          "keywords": ["ソルトンベース", "塩洞窟", "ソルトン", "ソルト療法", "チベット医学", "瞑想", "ハロセラピー", "デトックス", "ウェルネス"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SALT'NBASE. サービス",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "塩洞窟単品プラン",
                  "description": "60分の塩洞窟セッションで呼吸浄化とリラックスを体験。ソルトン療法による自然な癒し。",
                  "keywords": ["塩洞窟", "ソルトン", "瞑想", "ハロセラピー"]
                },
                "price": "5000",
                "priceCurrency": "JPY"
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "塩洞窟＋マッサージプラン",
                  "description": "塩洞窟内でマッサージ施術を同時に受けられる贅沢なプラン。ソルトン療法とマッサージの相乗効果。",
                  "keywords": ["塩洞窟", "ソルトン", "マッサージ", "ハロセラピー"]
                },
                "price": "9800",
                "priceCurrency": "JPY"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "塩洞窟＋瞑想プラン",
                  "description": "天然岩塩に囲まれた洞窟で深いリラックス瞑想を体験。ソルトン療法による心身の浄化。",
                  "keywords": ["塩洞窟", "ソルトン", "瞑想", "ハロセラピー", "デトックス"]
                },
                "price": "9800",
                "priceCurrency": "JPY"
              }
            ]
          },
          ...data
        };
        break;
        
      case 'WebSite':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SALT'NBASE.",
          "alternateName": ["ソルトンベース", "SALT'NBASE. ソルトンベース"],
          "url": "https://salt-nbase.vercel.app",
          "description": "塩洞窟・ソルトン療法で心と体の調和を目指すウェルネス施設",
          "keywords": ["ソルトンベース", "塩洞窟", "ソルトン", "ハロセラピー", "チベット医学", "瞑想"],
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://salt-nbase.vercel.app/?search={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
        break;
        
      case 'Service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "ウェルネス・健康サービス",
          "name": "塩洞窟・ソルトン療法",
          "description": "塩洞窟での瞑想とソルトン療法による心身の浄化とリラクゼーション",
          "keywords": ["塩洞窟", "ソルトン", "ハロセラピー", "瞑想", "デトックス"],
          "provider": {
            "@type": "LocalBusiness",
            "name": "SALT'NBASE.",
            "alternateName": "ソルトンベース"
          },
          ...data
        };
        break;
        
      default:
        structuredData = data;
    }
    
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);
  
  return null;
}

// SALT'NBASE.用のプリセット構造化データ
export function SaltNBaseStructuredData() {
  return (
    <>
      <StructuredData type="LocalBusiness" data={{}} />
      <StructuredData type="WebSite" data={{}} />
      <StructuredData type="Service" data={{}} />
    </>
  );
}
