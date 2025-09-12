# 📝 Visual Editing Setup - Decap CMS

## ✅ Setup Steps (One-time configuration)

### 1. Enable Netlify Identity
1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Identity**
3. Click **Enable Identity**

### 2. Configure Registration
1. In Identity settings, go to **Registration**
2. Change to **Invite only** (for security)
3. Click **Save**

### 3. Enable Git Gateway
1. Still in Identity settings, scroll to **Services**
2. Click **Enable Git Gateway**
3. This connects the CMS to your GitHub repo

### 4. Invite Users
1. Go to the **Identity** tab (top menu)
2. Click **Invite users**
3. Enter email addresses for people who should edit content
4. They'll receive an invitation email

## 🎯 How to Access the CMS

Once setup is complete:

1. **Visit**: `https://your-site.netlify.app/admin`
2. **Login** with your invited email
3. **Start editing** content visually!

## 📝 What You Can Edit

### Blog Posts
- Create new articles
- Edit existing articles
- Add tags and metadata
- Upload images
- Preview before publishing

### Page Content (Limited)
- Edit some text sections
- Update links
- Modify metadata

## 🎨 CMS Features

- **Visual Editor**: See your content as you type
- **Media Library**: Upload and manage images
- **Draft/Publish Workflow**: Review changes before going live
- **Version Control**: All changes tracked in Git
- **Multi-user**: Invite team members to edit

## 🔧 Advanced Customization

To add more editable fields, modify:
- `/public/admin/config.yml` - Define what's editable
- Add new collections for other content types

## 🚀 Alternative Options

### Netlify Visual Editor (Beta)
- New official Netlify solution
- Better integration but still in beta
- Contact Netlify for access

### Stackbit (Now part of Netlify)
- More advanced visual editing
- Requires more setup
- Better for complex sites

### Other CMS Options
- **Sanity**: Real-time collaboration, generous free tier
- **Strapi**: Self-hosted, more control
- **Contentful**: Enterprise-grade, powerful

## 📚 Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Astro CMS Guide](https://docs.astro.build/en/guides/cms/)