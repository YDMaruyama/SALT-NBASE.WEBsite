# SALT'NBASE. SEO実装ガイド

## 1. サイトマップの生成

### 静的サイトマップ vs 動的サイトマップ

#### 静的サイトマップ（推奨）
- **使用場面**: SALT'NBASE.のような比較的シンプルなサイト構造
- **メリット**: 
  - 高速な読み込み
  - サーバー負荷が少ない
  - 確実な配信
- **実装**: `/public/sitemap.xml`に配置

#### 動的サイトマップ
- **使用場面**: 頻繁にコンテンツが更新される場合
- **メリット**: 自動更新、大量のページに対応
- **実装**: `src/utils/sitemapGenerator.ts`を使用

### サイトマップに含めるURL

#### 含めるべきURL
- メインページ（/）
- 主要セクション（#services, #reservation等）
- 重要なランディングページ
- ユーザーにとって価値のあるコンテンツ

#### 除外すべきURL
- 管理画面（/admin/）
- プライベートページ
- 重複コンテンツ
- パラメータ付きURL（?utm_source等）
- エラーページ

### 更新頻度の設定

```xml
<changefreq>weekly</changefreq>  <!-- サービス情報 -->
<changefreq>monthly</changefreq> <!-- 会社情報 -->
<changefreq>daily</changefreq>   <!-- ブログ（将来的に） -->
```

## 2. Google Search Console設定手順

### Step 1: 所有権の確認

#### HTMLファイル確認（推奨）
1. Search Consoleでプロパティを追加
2. HTMLファイルをダウンロード
3. `/public/`フォルダに配置
4. デプロイ後に確認ボタンをクリック

#### HTMLタグ確認
```html
<meta name="google-site-verification" content="確認コード" />
```
※既に`index.html`に実装済み

### Step 2: サイトマップの登録
1. Search Console → サイトマップ
2. `sitemap.xml`を入力して送信
3. ステータスが「成功」になることを確認

### Step 3: インデックス登録の確認
- URL検査ツールでページの状態を確認
- 「インデックス登録をリクエスト」で手動登録
- カバレッジレポートでエラーを監視

### Step 4: エラー対応
- **404エラー**: 削除されたページのリダイレクト設定
- **クロールエラー**: robots.txtの確認
- **重複コンテンツ**: canonical設定の見直し

## 3. Canonical URL設定

### 重複コンテンツの特定

#### SALT'NBASE.で注意すべき箇所
- アンカーリンク付きURL（/#services vs /）
- パラメータ付きURL（?utm_source等）
- HTTPSとHTTPの混在
- wwwありなしの統一

### Canonical実装例

#### 基本実装
```html
<link rel="canonical" href="https://salt-nbase.vercel.app/" />
```

#### 動的実装（React）
```tsx
// MetaTags.tsxで実装済み
function updateCanonicalLink(href: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  
  element.href = href;
}
```

### ベストプラクティス

#### URL正規化ルール
1. **プロトコル**: 常にHTTPS
2. **ドメイン**: www無しで統一
3. **末尾スラッシュ**: 統一ルールを設定
4. **パラメータ**: 不要なものは除外

#### 実装チェックリスト
- [ ] 全ページにcanonical設定
- [ ] 自己参照canonical（同じページを指す）
- [ ] 絶対URLを使用
- [ ] HTTPSで統一
- [ ] 重複ページの特定と対応

## 4. 構造化データの実装

### LocalBusiness（実装済み）
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SALT'NBASE.",
  "telephone": "080-6751-3908",
  "openingHours": ["Mo 10:00-18:00", ...]
}
```

### Service（サービス情報）
```json
{
  "@context": "https://schema.org", 
  "@type": "Service",
  "serviceType": "ウェルネス・健康サービス",
  "offers": {
    "@type": "Offer",
    "price": "5000",
    "priceCurrency": "JPY"
  }
}
```

## 5. パフォーマンス最適化

### Core Web Vitals対策
- **LCP**: 画像最適化、CDN使用
- **FID**: JavaScript最適化
- **CLS**: レイアウトシフト防止

### 実装済み最適化
- 画像の遅延読み込み
- フォントの最適化
- CSS/JSの最小化

## 6. 監視とメンテナンス

### 定期チェック項目
- [ ] Search Consoleエラー確認（週1回）
- [ ] サイトマップ更新（月1回）
- [ ] ページ速度測定（月1回）
- [ ] 構造化データテスト（月1回）

### ツール
- Google Search Console
- PageSpeed Insights
- 構造化データテストツール
- Google Analytics（設定推奨）

## 7. 次のステップ

### 短期（1-2週間）
1. Google Search Console設定完了
2. サイトマップ登録
3. 初期インデックス登録

### 中期（1-3ヶ月）
1. 検索パフォーマンス分析
2. キーワード最適化
3. コンテンツ拡充

### 長期（3-6ヶ月）
1. ローカルSEO強化
2. レビュー・口コミ対策
3. ブログコンテンツ追加