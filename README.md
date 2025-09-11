## How to Update the Text on Each Page

To update the text content on any page of the Steiner Lab Homepage, follow these steps:

1. **Locate the Page File**
   - All page files are located in the `src/pages/` directory.
   - Each page corresponds to a `.astro` file (e.g., `src/pages/about.astro`, `src/pages/projects.astro`).

2. **Edit the Page File**
   - Open the desired `.astro` file in your code editor (such as VS Code).
   - Find the text you want to update and make your changes.
   - Save the file.

3. **Update Shared Content**
   - If the text is part of a shared component (like the navigation bar, footer, or sidebar), edit the relevant component in `src/components/`.
   - For example, to update navigation links, edit `src/components/ui/Navbar.astro`.

4. **Update Settings or Profile Information**
   - Some site-wide text (such as the lab name, PI name, or SEO descriptions) is stored in the `src/settings.ts` file.
   - Open `src/settings.ts` and update the relevant fields.

5. **Preview Your Changes**
   - Run the development server to preview your changes:
     ```
     npm run dev
     ```
   - Visit the local URL provided in your terminal (usually `http://localhost:4321`).

6. **Commit and Deploy**
   - After verifying your changes, commit them to your version control system and deploy as usual.

---

**Example: Updating the "About" Page**

1. Open `src/pages/about.astro`.
2. Edit the text as needed.
3. Save the file and preview your changes.

---

**Note:**  
If you add or remove pages, update the navigation links in `src/components/ui/Navbar.astro` to reflect the changes.