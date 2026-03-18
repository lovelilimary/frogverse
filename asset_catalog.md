# Frogverse — Asset Elements Catalog

Danh sách tất cả elements (hình ảnh, icon, SVG) được sử dụng trên từng trang. Cột **Đường dẫn hiện tại** là path đang dùng trong code, cột **Đường dẫn export** để bạn điền path chính xác từ folder assets đã export.

---

## 📁 Cấu trúc assets/ hiện có

```
assets/
├── Frame.svg
├── FrogInfoHome.svg / FrogInfoHome-back.svg / FrogInfoHome-front.svg
├── Main image.webp
├── bg-main.webp
├── logo.webp
├── badges/
│   ├── 1ST PLACE.svg
│   ├── 2ND PLACE.svg
│   ├── 3RD PLACE.svg
│   ├── CONSORT.svg
│   ├── KING.svg
│   ├── PRINCE.svg
│   ├── PRINCESS.svg
│   └── QUEEN.svg
├── emotions/
│   ├── Angry.svg
│   ├── Dead.svg
│   ├── Happy.svg
│   └── Hungry.svg
├── icons/
│   ├── 3dFrog.svg, 3dbag.svg, 3dboard.svg, 3dchest.svg
│   ├── 3dcup.svg, 3dmap.svg, 3dmedal1.svg, 3dmedal2.svg
│   ├── 3dmoneybag.svg, 3dsetting.svg, 3dstore.svg, 3dyou.svg
│   ├── Arrow.svg, Chart.svg, Chart2.svg, Checkmark.svg
│   ├── Coin.svg, Cup.svg, Cup Green.svg, Cup1 1.svg, Cup2 1.svg, Cup3 1.svg
│   ├── Date1.svg, Date2.svg, Doc.svg
│   ├── Eating.svg, Eating2.svg
│   ├── Gift.svg, Gift2.svg, Heart.svg, Hourglass.svg
│   ├── Info.svg, Leaf.svg, Lock.svg, MoneyBag.svg
│   ├── Question.svg, Rectangle 19.svg, Star1.svg
│   ├── bg-HomeButtons.svg, bg-icon-1.svg, bg-icon-2.svg
│   ├── bolt.svg, box.svg, card.svg
│   ├── coin-1.svg, coin-2.svg, coin-3.svg, coin-4.svg
│   ├── gear.svg, power.svg, reset.svg, time1.svg
├── loading-screen/
│   ├── bg-curtain.webp
│   ├── king.webp, prince.webp, princess.webp, prince consort.webp
│   ├── left-curtain.webp, right-curtain.webp
├── thumbs/
│   ├── king.webp, prince.webp, princess.webp, queen.webp
└── (68 hash-named files — chưa dùng trong code)
```

---

## 🌐 Global (tất cả trang)

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Card border frame | [assets/Frame.svg](file:///d:/Projects/frogverse/assets/Frame.svg) | |
| Background image | [assets/bg-main.webp](file:///d:/Projects/frogverse/assets/bg-main.webp) | |

---

## 🏠 home.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Frog info panel (front) | [assets/FrogInfoHome-front.svg](file:///d:/Projects/frogverse/assets/FrogInfoHome-front.svg) | |
| Frog info panel (back) | [assets/FrogInfoHome-back.svg](file:///d:/Projects/frogverse/assets/FrogInfoHome-back.svg) | |
| Frog info panel (combined) | [assets/FrogInfoHome.svg](file:///d:/Projects/frogverse/assets/FrogInfoHome.svg) | |
| Main character image | [assets/Main image.webp](file:///d:/Projects/frogverse/assets/Main%20image.webp) | |
| Logo | [assets/logo.webp](file:///d:/Projects/frogverse/assets/logo.webp) | |
| Home buttons bg | [assets/icons/bg-HomeButtons.svg](file:///d:/Projects/frogverse/assets/icons/bg-HomeButtons.svg) | |
| Icon bg-1 | [assets/icons/bg-icon-1.svg](file:///d:/Projects/frogverse/assets/icons/bg-icon-1.svg) | |
| Icon bg-2 | [assets/icons/bg-icon-2.svg](file:///d:/Projects/frogverse/assets/icons/bg-icon-2.svg) | |
| 3D Frog icon | [assets/icons/3dFrog.svg](file:///d:/Projects/frogverse/assets/icons/3dFrog.svg) | |
| 3D Bag icon | [assets/icons/3dbag.svg](file:///d:/Projects/frogverse/assets/icons/3dbag.svg) | |
| 3D Board icon | [assets/icons/3dboard.svg](file:///d:/Projects/frogverse/assets/icons/3dboard.svg) | |
| 3D Chest icon | [assets/icons/3dchest.svg](file:///d:/Projects/frogverse/assets/icons/3dchest.svg) | |
| 3D Cup icon | [assets/icons/3dcup.svg](file:///d:/Projects/frogverse/assets/icons/3dcup.svg) | |
| 3D Map icon | [assets/icons/3dmap.svg](file:///d:/Projects/frogverse/assets/icons/3dmap.svg) | |
| 3D Money bag icon | [assets/icons/3dmoneybag.svg](file:///d:/Projects/frogverse/assets/icons/3dmoneybag.svg) | |
| 3D Setting icon | [assets/icons/3dsetting.svg](file:///d:/Projects/frogverse/assets/icons/3dsetting.svg) | |
| 3D Store icon | [assets/icons/3dstore.svg](file:///d:/Projects/frogverse/assets/icons/3dstore.svg) | |
| 3D You icon | [assets/icons/3dyou.svg](file:///d:/Projects/frogverse/assets/icons/3dyou.svg) | |
| Coin-1 icon | [assets/icons/coin-1.svg](file:///d:/Projects/frogverse/assets/icons/coin-1.svg) | |
| Coin-2 icon | [assets/icons/coin-2.svg](file:///d:/Projects/frogverse/assets/icons/coin-2.svg) | |
| Coin-3 icon | [assets/icons/coin-3.svg](file:///d:/Projects/frogverse/assets/icons/coin-3.svg) | |
| Coin-4 icon | [assets/icons/coin-4.svg](file:///d:/Projects/frogverse/assets/icons/coin-4.svg) | |
| Checkmark icon | [assets/icons/Checkmark.svg](file:///d:/Projects/frogverse/assets/icons/Checkmark.svg) | |
| Gift icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |

> **Note**: [home.html](file:///d:/Projects/frogverse/pages/home.html) uses CSS backgrounds + inline SVGs for most elements. Các icon navigation (close/back) dùng inline `<svg>` chứ không dùng `<img>`.

---

## 🐸 my-frog.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Back arrow icon | [assets/icons/Arrow.svg](file:///d:/Projects/frogverse/assets/icons/Arrow.svg) | |
| Frog thumbnails | _(inline SVG placeholders)_ | |

---

## 🐸 my-frog-detail.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Chart icon | [assets/icons/Chart.svg](file:///d:/Projects/frogverse/assets/icons/Chart.svg) | |
| Info icon | [assets/icons/Info.svg](file:///d:/Projects/frogverse/assets/icons/Info.svg) | |
| Gear icon | [assets/icons/gear.svg](file:///d:/Projects/frogverse/assets/icons/gear.svg) | |
| Power icon | [assets/icons/power.svg](file:///d:/Projects/frogverse/assets/icons/power.svg) | |
| Reset icon | [assets/icons/reset.svg](file:///d:/Projects/frogverse/assets/icons/reset.svg) | |
| Eating emotion | [assets/icons/Eating.svg](file:///d:/Projects/frogverse/assets/icons/Eating.svg) | |
| Heart emotion | [assets/icons/Heart.svg](file:///d:/Projects/frogverse/assets/icons/Heart.svg) | |
| Angry emotion | [assets/emotions/Angry.svg](file:///d:/Projects/frogverse/assets/emotions/Angry.svg) | |
| Dead emotion | [assets/emotions/Dead.svg](file:///d:/Projects/frogverse/assets/emotions/Dead.svg) | |
| Happy emotion | [assets/emotions/Happy.svg](file:///d:/Projects/frogverse/assets/emotions/Happy.svg) | |
| Hungry emotion | [assets/emotions/Hungry.svg](file:///d:/Projects/frogverse/assets/emotions/Hungry.svg) | |

> **Note**: [my-frog-detail.html](file:///d:/Projects/frogverse/pages/my-frog-detail.html) uses mostly inline SVG for close/back buttons. Asset references are in CSS backgrounds.

---

## 📋 rental.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Back arrow | [assets/icons/Arrow.svg](file:///d:/Projects/frogverse/assets/icons/Arrow.svg) | |
| Gift promo icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |
| Arrow (promo banner) | [assets/icons/Arrow.svg](file:///d:/Projects/frogverse/assets/icons/Arrow.svg) | |
| Frog King thumb | [assets/thumbs/king.webp](file:///d:/Projects/frogverse/assets/thumbs/king.webp) | |
| Frog Queen thumb | [assets/thumbs/queen.webp](file:///d:/Projects/frogverse/assets/thumbs/queen.webp) | |
| Frog Prince thumb | [assets/thumbs/prince.webp](file:///d:/Projects/frogverse/assets/thumbs/prince.webp) | |
| Frog Princess thumb | [assets/thumbs/princess.webp](file:///d:/Projects/frogverse/assets/thumbs/princess.webp) | |
| Eating mood icon | [assets/icons/Eating.svg](file:///d:/Projects/frogverse/assets/icons/Eating.svg) | |
| Heart mood icon | [assets/icons/Heart.svg](file:///d:/Projects/frogverse/assets/icons/Heart.svg) | |
| Date icon | [assets/icons/Date1.svg](file:///d:/Projects/frogverse/assets/icons/Date1.svg) | |
| Coin icon | [assets/icons/Coin.svg](file:///d:/Projects/frogverse/assets/icons/Coin.svg) | |
| Eating2 icon | [assets/icons/Eating2.svg](file:///d:/Projects/frogverse/assets/icons/Eating2.svg) | |
| Gift stat icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |
| Star icon | [assets/icons/Star1.svg](file:///d:/Projects/frogverse/assets/icons/Star1.svg) | |

---

## 🎁 rental-promotion.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Gift promo icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |
| Princess thumb | [assets/thumbs/princess.webp](file:///d:/Projects/frogverse/assets/thumbs/princess.webp) | |
| Box icon | [assets/icons/box.svg](file:///d:/Projects/frogverse/assets/icons/box.svg) | |
| Coin icon | [assets/icons/Coin.svg](file:///d:/Projects/frogverse/assets/icons/Coin.svg) | |
| Card icon | [assets/icons/card.svg](file:///d:/Projects/frogverse/assets/icons/card.svg) | |
| Gift icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |
| Star1 icon | [assets/icons/Star1.svg](file:///d:/Projects/frogverse/assets/icons/Star1.svg) | |
| Time icon | [assets/icons/time1.svg](file:///d:/Projects/frogverse/assets/icons/time1.svg) | |
| MoneyBag icon | [assets/icons/MoneyBag.svg](file:///d:/Projects/frogverse/assets/icons/MoneyBag.svg) | |

---

## ✅ confirm-rental.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Princess thumb | [assets/thumbs/princess.webp](file:///d:/Projects/frogverse/assets/thumbs/princess.webp) | |
| Coin icon | [assets/icons/Coin.svg](file:///d:/Projects/frogverse/assets/icons/Coin.svg) | |
| Date icon | [assets/icons/Date1.svg](file:///d:/Projects/frogverse/assets/icons/Date1.svg) | |
| Eating2 icon | [assets/icons/Eating2.svg](file:///d:/Projects/frogverse/assets/icons/Eating2.svg) | |
| Star1 icon | [assets/icons/Star1.svg](file:///d:/Projects/frogverse/assets/icons/Star1.svg) | |
| Gift icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |

---

## 🎉 confirm-rental-success.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Princess thumb | [assets/thumbs/princess.webp](file:///d:/Projects/frogverse/assets/thumbs/princess.webp) | |
| Coin icon | [assets/icons/Coin.svg](file:///d:/Projects/frogverse/assets/icons/Coin.svg) | |
| Date1 icon | [assets/icons/Date1.svg](file:///d:/Projects/frogverse/assets/icons/Date1.svg) | |
| Eating2 icon | [assets/icons/Eating2.svg](file:///d:/Projects/frogverse/assets/icons/Eating2.svg) | |
| Star1 icon | [assets/icons/Star1.svg](file:///d:/Projects/frogverse/assets/icons/Star1.svg) | |
| Gift icon | [assets/icons/Gift.svg](file:///d:/Projects/frogverse/assets/icons/Gift.svg) | |

---

## 📊 dashboard.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Info icon | [assets/icons/Info.svg](file:///d:/Projects/frogverse/assets/icons/Info.svg) | |
| 3D Cup icon | [assets/icons/3dcup.svg](file:///d:/Projects/frogverse/assets/icons/3dcup.svg) | |

---

## 💰 frog-wallet.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| _(Không có img trực tiếp, dùng inline SVG cho icons)_ | — | |

---

## 🏆 leaderboard.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| 1st Place badge | [assets/badges/1ST PLACE.svg](file:///d:/Projects/frogverse/assets/badges/1ST%20PLACE.svg) | |
| 2nd Place badge | [assets/badges/2ND PLACE.svg](file:///d:/Projects/frogverse/assets/badges/2ND%20PLACE.svg) | |
| 3rd Place badge | [assets/badges/3RD PLACE.svg](file:///d:/Projects/frogverse/assets/badges/3RD%20PLACE.svg) | |
| Cup1 icon | [assets/icons/Cup1 1.svg](file:///d:/Projects/frogverse/assets/icons/Cup1%201.svg) | |
| Cup2 icon | [assets/icons/Cup2 1.svg](file:///d:/Projects/frogverse/assets/icons/Cup2%201.svg) | |
| Cup3 icon | [assets/icons/Cup3 1.svg](file:///d:/Projects/frogverse/assets/icons/Cup3%201.svg) | |
| King badge | [assets/badges/KING.svg](file:///d:/Projects/frogverse/assets/badges/KING.svg) | |
| Queen badge | [assets/badges/QUEEN.svg](file:///d:/Projects/frogverse/assets/badges/QUEEN.svg) | |
| Prince badge | [assets/badges/PRINCE.svg](file:///d:/Projects/frogverse/assets/badges/PRINCE.svg) | |
| Princess badge | [assets/badges/PRINCESS.svg](file:///d:/Projects/frogverse/assets/badges/PRINCESS.svg) | |
| Consort badge | [assets/badges/CONSORT.svg](file:///d:/Projects/frogverse/assets/badges/CONSORT.svg) | |
| 3D Medal1 | [assets/icons/3dmedal1.svg](file:///d:/Projects/frogverse/assets/icons/3dmedal1.svg) | |
| 3D Medal2 | [assets/icons/3dmedal2.svg](file:///d:/Projects/frogverse/assets/icons/3dmedal2.svg) | |

---

## ⏳ pending-rewards.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Hourglass icon | [assets/icons/Hourglass.svg](file:///d:/Projects/frogverse/assets/icons/Hourglass.svg) | |
| Date2 icon | [assets/icons/Date2.svg](file:///d:/Projects/frogverse/assets/icons/Date2.svg) | |
| Leaf icon | [assets/icons/Leaf.svg](file:///d:/Projects/frogverse/assets/icons/Leaf.svg) | |
| Lock icon | [assets/icons/Lock.svg](file:///d:/Projects/frogverse/assets/icons/Lock.svg) | |
| Doc icon | [assets/icons/Doc.svg](file:///d:/Projects/frogverse/assets/icons/Doc.svg) | |
| Gift2 icon | [assets/icons/Gift2.svg](file:///d:/Projects/frogverse/assets/icons/Gift2.svg) | |
| Cup Green icon | [assets/icons/Cup Green.svg](file:///d:/Projects/frogverse/assets/icons/Cup%20Green.svg) | |
| Chart2 icon | [assets/icons/Chart2.svg](file:///d:/Projects/frogverse/assets/icons/Chart2.svg) | |
| Bolt icon | [assets/icons/bolt.svg](file:///d:/Projects/frogverse/assets/icons/bolt.svg) | |

---

## ⏳ loading.html

| Element | Đường dẫn hiện tại | Đường dẫn export |
|---|---|---|
| Background curtain | [assets/loading-screen/bg-curtain.webp](file:///d:/Projects/frogverse/assets/loading-screen/bg-curtain.webp) | |
| Left curtain | [assets/loading-screen/left-curtain.webp](file:///d:/Projects/frogverse/assets/loading-screen/left-curtain.webp) | |
| Right curtain | [assets/loading-screen/right-curtain.webp](file:///d:/Projects/frogverse/assets/loading-screen/right-curtain.webp) | |
| Logo | [assets/logo.webp](file:///d:/Projects/frogverse/assets/logo.webp) | |
| King frog | [assets/loading-screen/king.webp](file:///d:/Projects/frogverse/assets/loading-screen/king.webp) | |
| Prince frog | [assets/loading-screen/prince.webp](file:///d:/Projects/frogverse/assets/loading-screen/prince.webp) | |
| Princess frog | [assets/loading-screen/princess.webp](file:///d:/Projects/frogverse/assets/loading-screen/princess.webp) | |
| Prince Consort frog | [assets/loading-screen/prince consort.webp](file:///d:/Projects/frogverse/assets/loading-screen/prince%20consort.webp) | |

---

## 🔤 Inline SVG Elements (không cần file)

Các trang sau dùng inline `<svg>` cho các icon nhỏ (close/back/arrow) — **không cần file riêng**:

- Close button (X) — inline SVG trên mọi trang
- Back arrow — inline SVG trên nhiều trang
- Question mark icon — inline SVG trong some modals

---

## 📦 Hash-Named Files (chưa dùng)

Có **68 file** với tên hash (ví dụ `00732acab3...svg`, `24b1fd5e...png`) trong thư mục `assets/` gốc. Đây có thể là file đã export từ Figma nhưng chưa được map vào code. Bạn có thể kiểm tra và rename lại cho phù hợp.
