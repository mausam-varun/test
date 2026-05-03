# Currency System Debug Guide

## Steps to Debug & Verify

### 1. Hard Refresh Browser
**Mac**: `Cmd + Shift + R`  
**Windows**: `Ctrl + Shift + R`

### 2. Open Developer Console
- **Mac**: `Cmd + Option + I` or `Cmd + J`
- **Windows**: `Ctrl + Shift + I` or `F12`

### 3. Check the Console for These Logs

After the page loads, you should see these debug messages in the console:

```
🚀 App initializing... Syncing currency with system timezone
🌍 Detected TimeZone: Asia/Kolkata
✅ India timezone detected, using INR
📊 Price multiplier loaded: 1x
🎯 Auto-detected currency: INR
📍 Displaying INR for amount: 18.06
💱 USD $18.06 → INR ₹1499.98 (rate: 1:83)
```

### 4. What Each Log Means

| Log | Meaning | 
|-----|---------|
| 🚀 App initializing | App started |
| 🌍 Detected TimeZone | Shows your system timezone |
| ✅ India timezone detected | Your timezone is India (good!) |
| 📊 Price multiplier loaded | Multiplier setting loaded (should be 1x by default) |
| 🎯 Auto-detected currency | Currency set to INR |
| 📍 Displaying INR | Using INR for this price |
| 💱 USD $X → INR ₹Y | Shows conversion calculation |

### 5. Expected Results for India Users

After hard refresh, you should see:

```
Before: $18.06 (USD - WRONG)
After:  ₹1499.98 (INR - CORRECT)
```

### 6. Clear LocalStorage Completely (If Still Not Working)

Open DevTools Console and run:

```javascript
localStorage.clear()
location.reload()
```

Then check console logs again.

### 7. Verify Timezone Detection

Run in DevTools Console:

```javascript
console.log('Your timezone:', Intl.DateTimeFormat().resolvedOptions().timeZone)
```

Should show: `Asia/Kolkata` or `Asia/Calcutta`

---

## If INR is Still Not Showing

1. ✅ Close ALL browser tabs with divara-craft.com
2. ✅ Do hard refresh (`Cmd+Shift+R` or `Ctrl+Shift+R`)
3. ✅ Clear localStorage completely: `localStorage.clear()`
4. ✅ Reload: `location.reload()`
5. ✅ Check DevTools Console for the logs above

If timezone shows something OTHER than Asia/Kolkata:
- Your system timezone is incorrect
- Contact your system admin to set timezone to Asia/Kolkata (India)

---

## Admin Panel - Set Price Multiplier

If products should display at different prices (e.g., 2x or 3x):

1. Go to Admin Panel: `http://localhost:4200/admin`
2. Click **💰 Price Multiplier** button
3. Select multiplier (1x, 2x, 3x, etc.)
4. Click **Apply Multiplier**

Then customers will see:
- India (INR): No change - still shows ₹ conversion
- Other countries (USD): Will show $18.06 × multiplier

---

## Console Log Reference

```
// App startup
🚀 App initializing... Syncing currency with system timezone
🔄 Cleared cached currency preference, will auto-detect...
🌍 Detected TimeZone: Asia/Kolkata
✅ India timezone detected, using INR

// Multiplier loading
📊 Price multiplier loaded: 1x

// Currency setting
🎯 Auto-detected currency: INR

// Price display (happens for each product)
📍 Displaying INR for amount: 18.06
💱 USD $18.06 → INR ₹1499.98 (rate: 1:83)

// If setting multiplier in admin
💰 USD $18.06 × 2x multiplier → $36.12
```

---

## What Happens Behind the Scenes

1. **App loads** → Clears old cached currency → Detects timezone → Sets to INR
2. **Multiplier loads** → Reads from localStorage `usd_display_multiplier`
3. **Each product displays** → Uses `displayCurrency` pipe
4. **Pipe checks** → Currency is INR? → Show ₹ (multiply by 83) → Format with Indian locale
5. **Result** → ₹1499.98 displays on product card

---

## Multiplier Logic

- **India users** (INR detected): Multiplier has NO effect. Always shows ₹ conversion.
- **Non-India users** (USD): Multiplier APPLIES. So $18.06 × 3x = $54.18

This ensures fair pricing worldwide!
