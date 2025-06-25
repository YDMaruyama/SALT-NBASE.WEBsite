# SALT'NBASE. ウェブサイト

心と体の調和を目指すウェルネス施設「SALT'NBASE.」の公式ウェブサイトです。

## 🌟 特徴

- **塩洞窟セッション**: 微粒子塩による呼吸浄化とリラックス体験
- **チベット医学療法**: 2500年の歴史を持つ伝統医療
- **オーガニック精進料理**: 腸内環境改善に特化した食事
- **瞑想・ヒーリング**: 心身の調和を整える各種プログラム

## 🚀 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **ビルドツール**: Vite
- **デプロイ**: Vercel (GitHub連携)

## 📦 インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build
```

## 🔧 開発

### 環境要件
- Node.js 18以上
- npm または yarn

### ローカル開発
```bash
npm run dev
```
http://localhost:5173 でアクセス可能

### ビルド
```bash
npm run build
```

## 🌐 デプロイ

### GitHub + Vercel自動デプロイ
GitHubリポジトリ `YDMaruyama/SALT-NBASE.WEBsite` と連携済み

#### 現在の設定
- **リポジトリ名**: `YDMaruyama/SALT-NBASE.WEBsite`
- **ブランチ**: `main`
- **デプロイ先**: Vercel
- **自動デプロイ**: 有効
- **本番URL**: https://salt-nbase.vercel.app

#### 自動デプロイの流れ
```
コード変更 → git push origin main → GitHub → Vercel自動ビルド → デプロイ完了
```

#### デプロイ確認
- `main`ブランチへのプッシュで本番デプロイ
- プルリクエストでプレビューデプロイ
- Vercelダッシュボードでビルド状況を監視

### Vercel設定
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📱 レスポンシブ対応

- モバイル（320px〜）
- タブレット（768px〜）
- デスクトップ（1024px〜）

## 🎨 デザインシステム

### カラーパレット
- **Natural**: 自然な色合い（#f8f8f6 〜 #2b281c）
- **Sage**: セージグリーン（#f4f7f4 〜 #252d25）

### フォント
- **メイン**: Shippori Mincho（日本語セリフ）
- **サブ**: Noto Sans JP（日本語サンセリフ）

## 📊 SEO対策

- メタタグ最適化
- 構造化データ（JSON-LD）
- サイトマップ生成（`/sitemap.xml`）
- robots.txt設定（`/robots.txt`）
- Open Graph対応
- Twitter Card対応

## 📞 お問い合わせ

- **電話**: 080-6751-3908
- **メール**: info@saltnbase.jp
- **LINE**: [公式アカウント](https://lin.ee/nug2WAF)

## 📄 ライセンス

© 2024 SALT'NBASE. All rights reserved.

---

**最終更新**: 2024年12月19日  
**リポジトリ**: `YDMaruyama/SALT-NBASE.WEBsite`  
**デプロイ**: GitHub + Vercel自動デプロイ対応