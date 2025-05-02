# Henophilia Ventures Website

A professional single-page website for Henophilia Ventures, designed to present their approach to funding and engineering interdependent startup economies that focus on regenerative economic infrastructure.

## Overview

The Henophilia Ventures website serves as a digital presence for a venture funding organization with a unique approach to economic infrastructure development. The site features a clean, professional aesthetic with a focus on typography and clarity, gradually transitioning from technocratic language to values-based messaging around sustainability and regenerative economics.

## Features

- Responsive, mobile-first design
- Clean, typography-driven layout
- Interactive founder application form with multi-step process
- Contact form with mailto functionality
- Dark/light mode support

## Technology Stack

- [Next.js 14](https://nextjs.org/) - React framework for server-side rendering
- [TypeScript](https://www.typescriptlang.org/) - Type safety and developer experience
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Geist Font](https://vercel.com/font) - Modern, clean typography

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hermesloom/henophilia.ventures.git
   cd henophilia.ventures
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
henophilia-ventures/
├── app/
│   ├── apply/                 # Application page
│   ├── components/            # Reusable components
│   │   ├── application-form.tsx
│   │   ├── contact-form.tsx
│   │   └── header.tsx
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```


## Development Guidelines

### Component Structure

- Use functional components with TypeScript interfaces
- Follow modular design principles
- Maintain separation of concerns

### Styling

- Use Tailwind CSS utility classes for styling
- Follow the established color palette:
  - Primary text: Neutral-800 (#1F2937)
  - Background: White (#FFFFFF)
  - Accents: Sand (rgb(246, 243, 238))
  - Buttons: Neutral-800 with hover state Neutral-700

### Form Handling

- Use controlled components for form inputs
- Implement client-side validation
- Follow accessibility best practices

## Deployment

This site is designed to be deployed to platforms like Vercel or Netlify:

```bash
# Build the project
npm run build

# Start the production server
npm start
```


For Vercel deployment:
```bash
vercel
```


## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

For any inquiries related to this project, please contact:
info@henophilia.ventures

---

© 2025 Henophilia Ventures - Economic Infrastructure, Rebuilt From First Principles
