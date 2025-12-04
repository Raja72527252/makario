# 🛍️ Product Form - Quick Reference Guide

## Access Point
**Admin Panel → Products → Add Product** button

---

## Tab-by-Tab Guide

### 1️⃣ **Basic Info** 📝
Essential product information

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Product Title | Text | ✅ Yes | Max 255 characters |
| Description | Textarea | ❌ No | HTML supported, plain text accepted |
| Category | Dropdown | ❌ No | Premium / Organic / Flavored / Gifting |
| Visibility | Dropdown | ❌ No | Public / Hidden / B2B Only |
| Tags | Multi-input | ❌ No | Press Enter to add, click × to remove |

---

### 2️⃣ **Details** ⭐ [NEW]
Brand and customer review information

| Field | Type | Range | Notes |
|-------|------|-------|-------|
| Brand | Text | — | E.g., "Makario" |
| Rating | Number | 0-5 | Decimal allowed (e.g., 4.7) |
| Number of Reviews | Number | 0+ | Integer only |
| Key Features & Benefits | Multi-input | — | Dynamic list with checkmark icon |

**Example Features:**
- 100% Natural
- Pack of 1
- Crunchy Texture
- High protein, low calorie
- Naturally gluten-free

---

### 3️⃣ **Media** 🖼️
Product images

**Capabilities:**
- ✅ Multiple image upload (drag & drop supported)
- ✅ Set featured image (with ⭐ badge)
- ✅ Add alt text for each image
- ✅ Delete images individually
- ✅ Reorder by hovering and using featured button

**Best Practices:**
- Upload high-quality product photos
- First image becomes featured by default
- Add descriptive alt text for SEO

---

### 4️⃣ **Pricing** 💰
Product pricing and cost management

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Selling Price | Number | ✅ Yes | Decimal allowed (e.g., 125.50) |
| Compare At Price | Number | ❌ No | Original price (for strikethrough) |
| Cost Price | Number | ❌ No | Internal cost for profit tracking |

**Automatic Calculations:**
- Profit per unit: Selling Price - Cost Price
- Profit Margin: (Profit / Selling Price) × 100%

**Example:**
- Selling Price: ₹125
- Cost Price: ₹80
- Profit: ₹45
- Margin: 36.0%

---

### 5️⃣ **Inventory** 📦
Stock and SKU management

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| SKU | Text | ✅ Yes | E.g., MAKH-500-CLS |
| Barcode | Text | ❌ No | Optional barcode number |
| Stock Quantity | Number | ❌ No | Integer only |

**Stock Status Indicator:**
- ✅ **In Stock**: > 50 units
- ⚠️ **Low Stock**: 1-50 units
- ❌ **Out of Stock**: 0 units

---

### 6️⃣ **Shipping** 🚚
Physical product dimensions

| Field | Type | Unit | Notes |
|-------|------|------|-------|
| Weight | Number | g/kg/lb | Required for shipping calculation |
| Unit | Dropdown | — | Grams / Kilograms / Pounds |
| Length | Number | cm | Optional |
| Width | Number | cm | Optional |
| Height | Number | cm | Optional |

---

### 7️⃣ **Nutrition** 🥗 [NEW]
Per-serving nutritional information (optional)

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| Calories | Text | 350 | kcal per serving |
| Protein | Text | 12g | Per serving |
| Carbohydrates | Text | 65g | Per serving |
| Fat | Text | 1.5g | Per serving |
| Fiber | Text | 5g | Per serving |

**When to use:**
- For food/snack products
- Include "g" or "kcal" in the value
- All fields are optional

---

### 8️⃣ **SEO** 🔍
Search engine optimization

| Field | Type | Limit | Notes |
|-------|------|-------|-------|
| SEO Title | Text | 60 chars | Page title tag |
| Meta Description | Text | 160 chars | Search result snippet |
| Meta Keywords | Text | — | Comma-separated keywords |

**Best Practices:**
- Use primary keyword in title
- Make description compelling
- Include 3-5 relevant keywords

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add Tag | Type + Press Enter |
| Add Feature | Type + Press Enter |
| Save Product | Click "Save Product" button |
| Close Modal | Click "Cancel" or X button |

---

## Form Validation

**Required Fields:**
- ✅ Product Title
- ✅ Selling Price
- ✅ SKU

**Optional Fields:**
All others are optional for flexibility

**Error Handling:**
- Alert shown if required fields missing
- Form prevents save with incomplete data
- All data persisted in real-time

---

## Example: Complete Product Entry

```
📝 Basic Info
├─ Title: "Makhana 100g Pack of 1"
├─ Description: "Fresh and crunchy makhana..."
├─ Category: Premium
├─ Visibility: Public
└─ Tags: [snack, healthy, pack]

⭐ Details
├─ Brand: Makario
├─ Rating: 4.7
├─ Reviews: 5
└─ Features: [100% Natural, Pack of 1, Crunchy Texture]

🖼️ Media
├─ Images: [4 product photos]
└─ Featured: Image 1 (with ⭐)

💰 Pricing
├─ Selling: ₹125
├─ Compare At: ₹150
└─ Cost: ₹80
    └─ Profit: ₹45 (36.0%)

📦 Inventory
├─ SKU: MAKH-100-CLS
├─ Barcode: (leave blank)
└─ Stock: 3

🚚 Shipping
├─ Weight: 100
├─ Unit: g
└─ Dimensions: (optional)

🥗 Nutrition
├─ Calories: 350
├─ Protein: 12g
├─ Carbs: 65g
├─ Fat: 1.5g
└─ Fiber: 5g

🔍 SEO
├─ Title: "Makhana 100g - Fresh & Crunchy"
├─ Description: "Shop premium makhana..."
└─ Keywords: makhana, snack, healthy
```

---

## Tips & Tricks

✨ **Pro Tips:**
1. Save features in a specific order (most important first)
2. Use consistent naming for similar products
3. Fill nutrition info for food products (helps with ranking)
4. Add high-quality images (affects conversion rate)
5. Use SEO keywords your customers search for

⚠️ **Common Mistakes:**
- Forgetting to set featured image
- Missing alt text on images
- Not updating stock quantity
- Inconsistent category naming
- Incomplete SEO information

---

## Support

**Need Help?**
- Check the field descriptions/placeholders
- Hover over labels for tooltips
- Blue info boxes provide context

**Issues?**
- All form data auto-saves while editing
- Use browser back button to return
- Contact admin support for database sync

---

**Last Updated**: November 29, 2025
**Version**: 2.0 (with Details & Nutrition tabs)
