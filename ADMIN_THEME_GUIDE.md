# 🎨 Divara Craft Brand Theme System - Quick Start

## Access Theme Control

### 👉 Location
**Admin Dashboard** → Header Button **🎨 Brand Colors**

### 🖼️ What You Can Change
12 color variables for the entire brand:
- Primary gradient (pink → purple)
- Supporting colors (gold, etc.)
- Text colors (4 levels from dark to light)
- Border and background colors

---

## 🎯 3-Step Process

### Step 1️⃣ Open Theme Panel
```
Admin Dashboard → Click "🎨 Brand Colors" button in header
```

### Step 2️⃣ Adjust Colors
```
Click any color square → Choose new color
OR
Paste hex code directly (e.g., #FF1493)
```

### Step 3️⃣ Save & Apply
```
Click "✓ Save Theme" button
✨ Changes apply instantly to customer website!
```

---

## 🎨 Default Luxury Colors (Already Loaded)

```
🌸 Primary Gradient:  #D946EF → #9333EA (Pink to Purple)
🟣 Main Purple:       #9333EA
💜 Dark Purple:       #7E22CE (for hover effects)
💗 Pink Accent:       #D946EF
✨ Gold Accent:       #C9A45C

🖤 Headings:          #111827 (darkest)
📝 Section titles:    #1F2937
📄 Body text:         #6B7280
🔇 Light text:        #9CA3AF
▭ Borders:            #E5E7EB
▭ Soft background:    #F9FAFB
```

---

## 💡 Pro Tips

### Color Harmony
- Keep gradient colors complementary
- Use darker versions for hover states
- Maintain text contrast (dark on light)

### Luxury Feel
- Keep 90% white space, 10% gradient
- Use gold sparingly (accents only)
- Dark text on light backgrounds

### Testing
1. Save new colors
2. Refresh customer site (Cmd+Shift+R or Ctrl+Shift+R)
3. Check buttons, links, and headings

---

## 🔙 If Something Goes Wrong

### Reset to Default
```
Theme Panel → Click "↺ Reset to Default"
```

### Clear Browser Cache
```
Mac:     Cmd + Shift + R
Windows: Ctrl + Shift + R
```

### Check API Health
```bash
curl http://localhost:5002/api/settings/theme/public
```

---

## ✨ What Changes When You Update Theme?

✅ Button colors (gradients)
✅ Heading colors
✅ Link hover states
✅ Accent colors throughout
✅ Text contrast levels
✅ Border colors
✅ Background tints

**ALL automatically updated** - No coding required!

---

## 📊 Real-Time Updates

- **Save → Instant reload required:** Cmd/Ctrl+Shift+R
- **Changes visible:** Throughout entire customer site
- **Persistent:** Saved in database, survives server restarts
- **Audited:** System tracks which admin made changes

---

## 🚀 Go Live Checklist

Before launching with custom colors:

- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Check button readability
- [ ] Verify text contrast
- [ ] Test links and hover states
- [ ] Clear cache and reload
- [ ] Check in different browsers

---

## 💬 Questions?

- Theme not updating? → Clear browser cache
- Colors look wrong? → Check hex format (#RRGGBB)
- Can't access panel? → Ensure logged in as admin
- Need more colors? → Contact development team

---

**Happy Branding! 🎨✨**
