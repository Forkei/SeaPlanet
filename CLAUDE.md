You are an expert full-stack web developer. Your task is to generate the complete source code for a non-profit organization's website. The website must be in French.

Please follow these detailed specifications carefully.

**1. Project Overview**
*   **Organization Name:** Planäte Mer (fictional name for this project based on the logo)
*   **Mission:** An environmental non-profit dedicated to ocean conservation.
*   **Primary Goal of the Website:** To inform visitors about the mission and encourage them to make a donation.
*   **Language:** The entire user-facing website must be in **French**.

**2. Technical Stack**
*   **Framework:** Astro
*   **Styling:** Tailwind CSS
*   **Content:** Use Markdown (.md) files for blog posts. Page content can be built directly in Astro components.

**3. Design & Visual Identity (Based on the provided PDF inspiration)**
*   **Color Palette:**
    *   Primary Orange: `#F9A825` (for key sections and highlights)
    *   Dark Blue/Navy: `#0A2342` (for the header and footer)
    *   White: `#FFFFFF`
    *   Light Beige/Orange: A very light, muted orange for some background sections (e.g., `#FFF7E6`)
*   **Typography:**
    *   Use a modern, clean, sans-serif font family. Google Fonts like 'Montserrat' for headings and 'Lato' or 'Open Sans' for body text would be appropriate.
    *   Headings are large, bold, and impactful.
    *   Body text is highly readable with good line spacing.
*   **Layout & Style:**
    *   The design should be clean, spacious, and professional.
    *   Use full-width sections with alternating background colors (Dark Blue -> White/Light Grey -> Orange -> Light Beige).
    *   Incorporate a simple wavy line element (`~~~`) as a separator under section titles, as seen in the inspiration.
    *   Buttons should be prominent with a solid background color and slightly rounded corners.
*   **Animations:**
    *   Implement subtle, elegant animations.
    *   Elements should gently fade-in as the user scrolls down the page.
    *   Buttons and links should have a slight visual feedback on hover (e.g., a slight change in brightness or scale).

**4. Site Structure & Pages**
Create the following pages and components:

**a) Header (Component)**
*   Sticky header with a dark blue background (`#0A2342`).
*   Left side: Logo (use a placeholder SVG).
*   Right side: Navigation Menu (`Accueil`, `Nos Missions`, `Blog`) and a prominent "FAIRE UN DON" button with a red background (`#DC2626`).
*   The header should include a hamburger menu icon for mobile view.

**b) Footer (Component)**
*   Dark blue background (`#0A2342`).
*   Simple layout with links: `ESPACE PRESSE | CRêDITS | MENTIONS LêGALES`.

**c) `index.astro` (Homepage - Accueil)**
Structure this page based on the inspiration PDF, section by section:
1.  **Hero Section:** Full-width image or video of the ocean (use a placeholder). The navigation header sits on top.
2.  **Introduction Section:** White background. A short text introducing the association: "PLANETE MER EST UNE ASSOCIATION D'INTêRET GêNêRAL..."
3.  **Vision Section:** Bright orange background (`#F9A825`). Large, centered heading "Notre vision", the wave separator, and the main statement: "Un OcÇan dont les Hommes vivent durablement et respectent toute forme de vie".
4.  **Context Section:** Continuing on the orange background. Centered heading "Contexte", wave separator, and a bulleted list of problems (Surpàche, Effondrement de la BiodiversitÇ, etc.).
5.  **Our Mission Section:** A new section with a different background (e.g., light beige). Centered heading "Notre Mission", wave separator, and the mission statement.
6.  **Action Areas Section:** Similar style. Heading "Nos 3 domaines d'action" and a bulleted list (Protection de la biodiversitÇ, Gestion des ressources, Restauration des milieux).
7.  **Testimonials/Quotes Section:** Light beige background. Feature two quotes in styled blocks with circular profile pictures, like in the PDF. Use placeholder images and text.

**d) `missions.astro` (Nos Missions)**
*   A page detailing the organization's missions. For now, create a simple layout with a main title and placeholder text sections for the 3 domains of action mentioned on the homepage.

**e) Blog Pages**
*   `blog/index.astro`: The main blog page. It should display a list of all blog posts with a title, a short excerpt, and a "Lire la suite" link for each.
*   `blog/[...slug].astro`: The template for individual blog posts. It should display the post title, publication date, and the full content from the Markdown file.
*   Create a `src/content/blog/` directory with 2-3 sample posts in French as `.md` files (e.g., `premier-article.md`).

**f) `don.astro` (Faire un don)**
*   This can be a simple page for now.
*   A clear title: "Soutenez nos actions".
*   Some text explaining why donations are important.
*   A very large, centered button that says "FAIRE UN DON EN LIGNE" which links to a placeholder external URL (e.g., `https://www.helloasso.com/placeholder`).

**5. Key Functionality**
*   **Fully Responsive:** The website must be perfectly usable on mobile, tablet, and desktop devices.
*   **Donation Link:** The "FAIRE UN DON" button should be a simple `<a>` tag linking to a placeholder URL. No complex payment integration is needed.
*   **No User Accounts:** No login/signup functionality is required


