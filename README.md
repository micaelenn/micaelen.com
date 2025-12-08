<div align="center">
  <img width="70" height="70" alt="image" src="https://github.com/user-attachments/assets/8bb86be1-0b61-49b8-a5e0-a3a2a0460554" />
</div>

# micaelen.com

This repository includes:

- **Website**: Modern web application built with Next.js.
- **API BFF**: Backend For Frontend (BFF) built with Node.js.

## Structure

```
micaelen.com/
├── apps/
│   ├── web/               # Next.js frontend
│   └── api-web/           # Node.js BFF backend
├── package.json
├── turbo.json
└── ...
```

## Site (Next.js)

- Modern and responsive interface using React and Next.js.
- Supports dynamic routing, SSR (Server-Side Rendering), and SEO optimization.
- Easy to configure and extend with new features.

## API BFF (Node.js)

- API developed with Node.js to serve data to the frontend.
- Handles integration with external services, and response orchestration.
- Provides a single communication point for the site.

## How to run the project

1. Install dependencies:

   ```
   
   npm install
   
   ```
2. Start the services:

   ```
   
   npm run dev
   
   ```

## Notes and Recommendations

- Turborepo is used for efficient package and dependency management across applications.
- Check the `apps/site` and `apps/api` folders for specific configuration details.
