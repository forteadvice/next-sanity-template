# Next-Sanity Base Template

## Setup guide

#### 1. Deploy NextJS template to Vercel

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

<!-- Variables -->

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https://github.com/mjthias/next-sanity-template&repository-name=next-sanity-template&project-name=next-sanity-template&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx

---

#### 2. Install dependencies (App):

```bash
pnpm install
```

---

#### 3. Create _.env_ file (App)

Copy the .env.local.example file to .env.local and update the values.

```yaml
# .env.local.example
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET='production'
NEXT_PUBLIC_SANITY_API_VERSION='2023-07-14'
NEXT_PUBLIC_SANITY_PREVIEW_TOKEN='1ee7bc5c-32df-4873-b698-a89db92a9e66'
```

---

#### 4. Run environment (App)

```bash
npm run dev
```

---

#### 5. Clone Sanity base template (Studio)

```bash
git clone https://github.com/mjthias/sanity-base.git .
```

---

#### 6. Remove git connection, and connect to new repo (Studio)

Remove the git connection to the template repo by deleting the .git directory

```bash
sudo rm -r .git
```

Create and connect to a new repository

---

#### 7. Create .env file (Studio)

Copy the .env.local.example file to .env.local and update the values.

```yaml
# .env.local.example
SANITY_STUDIO_PROJECT_TITLE=
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET='production'
SANITY_STUDIO_USE_CDN=true
SANITY_STUDIO_LOCAL_PREVIEW_HOST='localhost:3000'
SANITY_STUDIO_PRODUCTION_PREVIEW_HOST=
SANITY_STUDIO_PREVIEW_TOKEN='1ee7bc5c-32df-4873-b698-a89db92a9e66'
```

---

#### 8. Deploy studio (Studio)

```bash
pnpm run deploy
```

---

## Environment settings

The following settings are the standard of the next-sanity template.<br> Please make sure to not change these when patching the template.

### Prettier linting

The environment is linted using the settings within _.prettierrc_, which will owerwrite the Prettier config of your IDE.
