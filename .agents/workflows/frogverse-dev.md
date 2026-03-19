---
description: Quy trình phát triển frontend Frogverse — dùng khi convert Figma screen hoặc tạo component mới
---

// turbo-all

## Bước 1: Kiểm tra component đã có
- Mở `pages/component-preview.html` để xem component catalog hiện tại
- Kiểm tra `styles/components.css` cho CSS đã viết
- Kiểm tra `assets/` cho SVG/WebP đã export

## Bước 2: Quy ước bắt buộc
- **KHÔNG chuyển đổi** bottom navigation bar và profile section
- **Dùng assets đã export** trong `assets/` — KHÔNG tự tạo SVG mới
- **Component-first**: build component riêng trước → ghép vào page sau

## Bước 3: Components đã sẵn sàng
| Component | Class | Cách dùng |
|---|---|---|
| Gold Button | `.game-btn .game-btn--gold` | JS auto-inject SVG, chỉ cần HTML |
| Green Button | `.game-btn .game-btn--green` | Tương tự |
| Gray Button | `.game-btn .game-btn--gray` | Tương tự |
| Frame Border | `.game-frame` | Pure CSS border-image, dùng `Frame.svg` |
| FrogInfoHome | `.frog-info-home` | 2-layer SVG + XP bar HTML |
| HomeButton | `.home-button` | Circular icon button |
| ProfileCard | `.profile-card` | Avatar + badge + emotion + stats (horizontal) |
| FrogRentalCell | `.frog-rental-cell` | Vertical card: frog avatar + badge + details + Rent btn (192px) |
| FrogRentalCell2 | `.frog-rental-cell2` | Ranked card: image + gradient + #N + title + details + Rent btn (165px) |
| MyFrogCard | `.my-frog-card` | Personal card: frog avatar + emotion + name + ID (164×265px) |
| FrogCard (shared) | `.frog-rental-cell__frog-card` | Sub-component: gold-framed frog avatar + rank badge |
| LeaderboardCell | `.lb-cell` | Ticket-notch row: avatar + name/level + XP score. Variants: `--gold`, `--silver`, `--bronze`, `--you` |

## Bước 4: Khi tạo component mới
1. Lấy design context từ Figma (MCP tool)
2. Export SVG assets nếu cần (hoặc hỏi user export)
3. Viết CSS vào `styles/components.css`
4. Thêm demo vào `pages/component-preview.html`
5. Tạo HTML snippet trong `components/`

## Bước 5: Khi convert page
1. Dùng layout shell đã có (header, main, feed section)
2. Ghép components từ catalog
3. Include `scripts/game-btn.js` cho button auto-inject
4. Test ở mobile viewport (402px width)
