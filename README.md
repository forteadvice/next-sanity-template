# Next-Sanity Base Template

This template preconfigures:

- An embedded Sanity Studio with basic documents and objects
- A desk-strucure enabling for singletons and a preview-pane
- A React-component for LivePreviews
- An API for handling path revalidation based on document types

## Contents

- [Setup Guide](#setup-guide)
- [Configure Vercel deploy-hook](#configure-vercel-deploy-hook)
- [Important Files](#important-files)

<br>

---

<br>

## Setup guide

### 1. Deploy Next-Sanity template to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmjthias%2Fnext-sanity-template&env=NEXT_PUBLIC_SANITY_API_VERSION,NEXT_PUBLIC_PREVIEW_TOKEN,SANITY_REVALIDATE_SECRET&envDescription=Read%20about%20the%20variable%20requirments%20here%3A&envLink=https%3A%2F%2Fgithub.com%2Fmjthias%2Fnext-sanity-template%232-configure-missing-environment-variables-vercel&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

<br>

### 2. Configure missing environment variables (Vercel)

```yaml
# Add the following to Vercel
NEXT_PUBLIC_SANITY_API_VERSION='YYYY-MM-DD' # Date of project start
NEXT_PUBLIC_PREVIEW_TOKEN='generated-token'
SANITY_REVALIDATE_SECRET='generated-token'
```

[Generate PREVIEW token 🔗](https://it-tools.tech/token-generator?length=32) <br>
[Generate REVALIDATION token 🔗](https://it-tools.tech/token-generator?length=128) <br>

<br>

### 3. Configure revalidation webhook at Sanity.io

| Key         | Value                                |
| ----------- | ------------------------------------ |
| Name        | _Some name_                          |
| URL         | https:// DOMAIN.COM /api/revalidate  |
| Dataset     | production                           |
| Trigger on  | Create, Update, Delete               |
| Projection  | _{\_type}_                           |
| HTTP method | POST                                 |
| API version | Select the newest                    |
| Secret      | _SANITY_REVALIDATE_SECRET_ from .env |

<br>

### 4. Clone repository and configure _.env.local_

Copy the .env.local.example file to .env.local

```bash
cp .env.local.example .env.local
```

Insert the missing values

```yaml
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_REVALIDATE_SECRET=
NEXT_PUBLIC_PREVIEW_TOKEN=
```

> Even though Vercel might have more variables, only these are needed.

<br>

### 5. Install and run local environment

Install dependencies ⚙️

```bash
pnpm run install
```

<br>

Run environment 🏃‍♀️

```bash
pnpm run dev
```

<br>

---

<br>

## Configure Vercel deploy-hook

Go to /studio, click dashboard and create a new connection.

1. Vercel Account Token <br>
   This can be created in Vercel under Account > Settings > Tokens.

2. Vercel Project ID <br>
   This can be retrieved via the web UI on -> Settings -> General -> Scroll down to Project ID.

3. Vercel Team ID <br>
   This can be retrieved via the web UI on -> Settings -> General -> Scroll down to Project ID.

4. Deploy hook <br>
   These can be created in Vercel by going to Project > Settings > Git > Deploy Hooks.

<br>

Read docs [here](https://www.sanity.io/plugins/vercel-dashboard-widget)

<br>

## Configure Vercel deploy-hook

If needed, Vercel deploy-hook can be set up as following:

| Key         | Value                      |
| ----------- | -------------------------- |
| Name        | _Some name_                |
| URL         | _Deploy-hook URL_          |
| Dataset     | production                 |
| Trigger on  | Create, Update, Delete     |
| Filter      | _\_type == 'affectedType'_ |
| HTTP method | POST                       |
| API version | Newest                     |

<br>

---

<br>

## Built in components & functionality

### Live preview

Live previewing compenents can be achived by wrapping them inside the _PreivewWrapper-component_. <br>
_PreviewWrapper_ takes the following props:

```jsx
<PreviewWrapper
  preview={ preview } // getPreview()
  query={ groqQuery }
  params={ groqParams } // paramsObject || undefined
  initialData={ fethedData }
  // ...rest
  >
    // Child gets 'data' prop from PreviewWrapper
    <ChildComponent />
<PreviewWrapper>
```

> Since the previewed child component will be rerendered client side, this direct child must have _"use client"_ declared. <br> For that reason, the template includes the _components/views_ directory to keep intire page views.

#### Full example

```JSX
// src/(site)/(page)/[slug]/page.jsx
import PreviewWrapper from '@/components/preview/PreviewWrapper'
import PageView from '@/components/views/PageView'
import { getCachedClient } from '@/lib/getClient'
import { pageQuery } from '@/lib/queries'
import getPreview from '@/lib/getPreview'
// Other imports

export async function generateStaticParams() {...}
export async function generateMetadata({ params }) {...}

export default async function Page({ params }) {
  const preview = getPreview()
  const data = await getCachedClient(preview)(pageQuery, params)

  return (
    <PreviewWrapper
      initialData={data}
      preview={preview}
      query={pageQuery}
      params={params}
      >
      <PageView />
    </PreviewWrapper>
  )
}
```

<br>

### Revalidate

TODO...

<br>

---

<br>

## Important files

| File           | Description                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| .eslintrc.json | ESLint configuration. _"import/no-anonymous-default-export": "off"_ are set for _src/sanity/\*_, to follow Sanity standards |
| .prettierrc    | Prettier linting configuration. Aligns Prettier config across dev-devices                                                   |

<br>

---

<br>

## TODOS

- [Dynamic image heights - unstable_getImgProps()](https://github.com/vercel/next.js/discussions/19880) Next 13.4.8 needed
