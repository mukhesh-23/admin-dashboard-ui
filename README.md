# Admin Dashboard UI (Figma → React)

This project is a **Frontend Assignment** where selected components from a provided **Figma dashboard design** are converted into **pixel-perfect React components**.

The purpose of this assignment is **not to build the entire dashboard**, but to evaluate UI accuracy, component structure, and clean frontend implementation.

---

## Assignment Objective

The main objective of this assignment is to:
- Convert selected Figma components into React components
- Match the design accurately in terms of layout, spacing, colors, and typography
- Write clean, reusable, and well-structured code

The Figma design file was treated as the **single source of truth**.

---

## Design Input (Figma)

- A `.fig` file was imported into Figma
- **Figma Dev Mode** was used to inspect:
  - Measurements
  - Colors
  - Typography
  - Spacing
  - Assets and icons

---

## Components Implemented

### Mandatory Components
- **Header (Top Navigation)**
- **Footer**

### Additional Components (More than 3 implemented)
- **Sidebar**
- **Stat Cards**
- **Transactions Table**
- **Payment Transactions**
- **Activity Timeline**

> Bonus requirement is satisfied by implementing more than the required components.

---

## Tech Stack Used

- React
- TypeScript
- Vite
- Tailwind CSS

No ready-made dashboard templates were used.

---

## How This Project Was Done (Project Flow)

### 1. Requirement Understanding
The assignment requirements were carefully reviewed to understand what was mandatory and what was optional. The focus was kept strictly on UI accuracy and component quality.

---

### 2. Figma Analysis
The Figma design was analyzed in detail using Dev Mode to understand:
- Layout structure
- Spacing between elements
- Font sizes and weights
- Color usage

This helped in achieving a pixel-perfect UI.

---

### 3. Project Setup
The project was set up using **Vite with React and TypeScript** for fast development and type safety.  
**Tailwind CSS** was chosen to maintain consistent styling and spacing.

---

### 4. Component-Based Development
Each UI section was developed as a **separate reusable component**, such as Header, Sidebar, Stat Cards, Tables, and Timeline.

This approach improved:
- Code readability
- Reusability
- Maintainability

---

### 5. Styling Approach
Tailwind CSS was used to:
- Maintain consistent spacing and typography
- Closely match the Figma design
- Keep the styling clean and minimal

---

### 6. Layout Integration
All components were composed inside the main layout to form the dashboard structure:
- Header at the top
- Sidebar on the left
- Main content area in the center
- Footer at the bottom

---

### 7. Code Quality
Special care was taken to ensure:
- Clean folder structure
- Meaningful component names
- No unnecessary code
- Proper use of props and composition

---

### 8. Deployment (Optional)
The project was deployed on **Vercel** to provide a live preview, making it easy to review the UI without local setup.

---

## Project Structure (Simplified)

src/
├── assets/
├── components/
│ ├── Header
│ ├── Footer
│ ├── Sidebar
│ ├── StatCard
│ ├── TransactionsTable
│ ├── PaymentTransactions
│ └── ActivityTimeline
├── App.tsx
├── main.tsx
└── index.css

yaml
Copy code

---

## How to Run the Project

```bash
git clone https://github.com/mukhesh-23/admin-dashboard-ui.git
cd admin-dashboard-ui
npm install
npm run dev
The application runs at:

arduino
Copy code
http://localhost:5173
Build Command
bash
Copy code
npm run build
Live Preview (Optional)
https://admin-dashboard-ui.vercel.app

Evaluation Focus
Accuracy compared to Figma design

Component clarity and reusability

Code cleanliness and structure

Overall UI polish

Author
Mukhesh Naraparaju
GitHub: https://github.com/mukhesh-23

Note
This project was created for assignment and learning purposes.

markdown
Copy code

---

### ✅ This README is:
- Simple English ✔️  
- Detailed but not lengthy ✔️  
- Matches assignment instructions exactly ✔️  
- Interview-ready ✔️  

If you want next:
- **2-minute interview explanation**
- **Short HR version**
- **Submission email text**

Just say the word 👍
