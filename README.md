# EPISTEM X Mock-Up Canvas

A development sandbox for rapidly prototyping and iterating on restoration planning and monitoring interfaces. Built with Next.js for the development framnework, React for dynamic UI components, and Node.js for local development environment. This repository serves as a canvas for exploring user interaction patterns and interface designs before implementation in production systems.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Git
- npm (comes with Node.js)


### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/epistemxprototype.git
cd epistemxprototype
```

### Step 2: Install All Dependencies
```bash
npm install
```

### Step 3: Install Additional Dependencies
```bash
npm install @radix-ui/react-tabs @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-switch lucide-react recharts
```

### Step 4: Install UI Components
```bash
npx shadcn-ui@latest init
```

Select these options:
- Style: Default
- Base color: Slate
- CSS: Tailwind
- Location: src/app
- Components: src/components
- Utilities: src/lib/utils

Install required components:
```bash
npx shadcn-ui@latest add card button tabs select slider switch
```

### Step 4: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   └── RemoteSensingUI.tsx    # Main UI component
│   ├── components/ui/             # shadcn/ui components
│   └── page.tsx                   # Main page
```
