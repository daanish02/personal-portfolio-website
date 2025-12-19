# Azure Deployment Guide

Step-by-step instructions for deploying this portfolio to **Azure Static Web Apps**.

## 1. Prerequisites
- A GitHub repository containing the source code.
- An Azure account with an active subscription.

## 2. GitHub Actions Setup
Azure Static Web Apps uses GitHub Actions for continuous deployment. The project is already optimized for a static export.

### Build Configuration Settings
When setting up the resource in the Azure Portal, use these exact values in the **Build Details** section:
- **Build Preset**: `Next.js` (or `Custom` if Next.js isn't auto-detected)
- **App location**: `/`
- **Output location**: `out`
- **Build command**: `npm run build`

## 3. Environment Variables
To enable Google Analytics, you must add your Measurement ID to the Azure Configuration:
1. Go to your Static Web App in the **Azure Portal**.
2. Navigate to **Settings** > **Configuration**.
3. Add a new Application Setting:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX` (Your GA4 measurement ID)

## 4. Key Deployment Files
### `next.config.mjs`
This file is critical for Azure compatibility. It ensures we generate a static `out/` folder rather than a Node server:
```javascript
const nextConfig = {
    output: 'export',
    images: { unoptimized: true }
};
```

## 5. Troubleshooting
- **404 on Refresh**: Static Web Apps might return 404 for sub-routes (like `/background`) if navigation happens directly. This is handled by Azure's default routing, but if issues persist, ensure a `staticwebapp.config.json` is present with navigation fallbacks.
- **Build Failures**: Ensure you are using **Node.js 20+**. This is now specified in the `package.json` `engines` field, which the Azure Oryx build engine uses to select the correct version. If issues persist, check the GitHub runner settings in the workflow file.
