# How to Update the Website

Changes to the website are deployed automatically — once an update is pushed to GitHub, the live site at [360degreessystemscorporation.com](https://www.360degreessystemscorporation.com/) will update within a few minutes.

---

## Adding a new project

### Step 1 — Prepare the images

- Format: **JPEG (.jpg)**
- Name them sequentially using the project slug: `{slug}-1.jpg`, `{slug}-2.jpg`, `{slug}-3.jpg`, and so on
- Example for a project called "Project Nova" with slug `project-nova`: `nova-1.jpg`, `nova-2.jpg`, etc.

### Step 2 — Add the images to the repository

Place the images in a new folder under `public/images/`:

```
public/
  images/
    project-nova/
      nova-1.jpg
      nova-2.jpg
      nova-3.jpg
```

### Step 3 — Register the project in the codebase

Open `src/app/projects/completed-projects.constant.ts` and add a new entry to the `COMPLETED_PROJECTS` array. Copy the format of any existing entry:

```ts
{
  name: 'Project Nova',
  location: 'City, Province',
  slug: 'project-nova',
  photos: [
    { src: `${IMGIX_URL}/images/project-nova/nova-1.jpg` },
    { src: `${IMGIX_URL}/images/project-nova/nova-2.jpg` },
    { src: `${IMGIX_URL}/images/project-nova/nova-3.jpg` },
  ],
},
```

Projects appear on the website in the order they are listed in this file. Add the new entry wherever it should appear in the list.

### Step 4 — Push to GitHub

Commit the new image files and the updated constants file, then push to the `main` branch. Vercel will automatically build and deploy the updated site.

---

## Updating an existing project

### Changing a project name or location

Edit the `name` or `location` field for the relevant entry in `src/app/projects/completed-projects.constant.ts`, then push to GitHub.

### Adding or removing photos

- To add: place the new image file in the project's folder under `public/images/`, then add a corresponding `src` entry in the `photos` array in `completed-projects.constant.ts`.
- To remove: delete the image file and remove its entry from the `photos` array.

Push to GitHub when done.

---

## Removing a project

Remove the project's entry from `COMPLETED_PROJECTS` in `src/app/projects/completed-projects.constant.ts`. Optionally delete the image folder from `public/images/` to keep the repository tidy. Push to GitHub.
