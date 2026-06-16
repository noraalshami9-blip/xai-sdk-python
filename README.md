# SAIFANA.AI

![SAIFANA.AI Logo](/logo/saifana-logo.png)

SAIFANA.AI - منصة عربية لإنشاء قصص مصورة ومتحركة باستخدام الذكاء الاصطناعي بأعلى المعايير العالمية مع ميزة تحريك الصور.

## المميزات
- واجهة عربية كاملة (RTL)
- توليد صور + تحريك (Image-to-Video)
- دعم Grok Imagine / Runway / Kling
- جاهزة للتوسع مع Supabase

## التشغيل

```bash
npm install
npm run dev
```

## Workflow فعال
1. User inputs prompt
2. Backend calls AI image gen
3. Calls video animation API
4. Returns ready video + assets
5. Optional: Save to user library (future)

## نشر على Cloudflare Pages (موصى به)

### خطوات النشر:

1. **أنشئ حساب على Cloudflare** (إذا لم يكن لديك).
2. **ارفع المشروع إلى GitHub** (موصى به).
3. في Cloudflare Dashboard → Pages → Create a project → Connect to Git.
4. اختر الـRepo الخاص بـ SAIFANA.AI.
5. **Build settings**:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output directory: `.next` أو `out` (حسب الإعداد)

### بديل سريع (بدون Git):
استخدم Wrangler CLI.

```bash
npm install -g wrangler
wrangler pages deploy . --project-name saifana-ai
```

## الخطوات القادمة
- ✅ تم إضافة مفتاح xAI API الخاص بك
- ربط Runway Gen-3 أو Kling لتحريك الصور (Image-to-Video)
- Auth + Storage بـ Supabase
- Export to TikTok/YouTube

## إعداد API Key
تم إضافة مفتاحك `xai-...gWOT` في `.env`.  
لا ترفع `.env` إلى GitHub (مضاف إلى .gitignore).
