import { notFound } from "next/navigation";
import ClientPage from "./ClientPage";

// 1. THE DATA
// We keep your project data here.
// You can add more projects to this list later.
const projects = [
  {
    slug: "freedom2hear",
    title: "Freedom2Hear",
    url: "https://www.freedom2hear.com",
    tagline: "High-Fidelity Presentation Design & Visual Assets",
    tech: ["Illustrator", "Photoshop"],
    challenge:
      "The client needed a pitch deck that matched the high energy and visual impact of a major sports partnership. Standard presentation tools were too restrictive; they required magazine-quality layouts and bespoke imagery that could still be presented within a corporate environment.",
    solution:
      "Bypassing standard templates, I designed the core visual narrative in Adobe Illustrator to ensure pixel-perfect typography and composition. The final assets were exported as high-resolution backdrops into a master slide system, giving the client a 'locked' visual foundation that maintains brand integrity while allowing for text edits.",
    year: "2026",
    image: "/images/F2H-UA/F2H-UA-1.jpg",
    processImage: "/images/F2H-UA/process.jpg",
    processTitle: "The Build",
    processText:
      "Constructing the grid system in vector format (Illustrator) prior to export. This ensures pixel-perfect alignment and allows for complex masking techniques that remain editable in the master template.",
    moreImagesTitle: "More from the Deck",
    images: [
      "/images/F2H-UA/F2H-UA-1.jpg",
      "/images/F2H-UA/F2H-UA-2.jpg",
      "/images/F2H-UA/F2H-UA-3.jpg",
      "/images/F2H-UA/F2H-UA-4.jpg",
      "/images/F2H-UA/F2H-UA-5.jpg",
      "/images/F2H-UA/F2H-UA-6.jpg",
    ],
  },
  {
    slug: "personalyze-ai",
    title: "personalyze.ai",
    tagline: "Modern infographics and designs for marketing",
    tech: [
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "Cinema 4D",
    ],
    challenge:
      "Personalyze.ai creates powerful profiling technology that processes unique personal data across the media ecosystem. However, their groundbreaking backend technology lacked a frontend identity to match. To capture the attention of leading media agencies and premium publishers, they needed to move beyond spreadsheets and code. They required a visual identity that felt alive, intelligent, and future-forward—capable of holding an audience's attention during live demos and media events.",
    solution:
      "I developed a dynamic visual language designed to resonate with creative agencies and data partners alike. This included a modern logo to anchor the brand and a suite of high-impact presentation decks for client acquisition. Crucially, I utilized motion graphics to translate raw data into fluid visual narratives. This allowed personalyze.ai to demonstrate their complex analytics in real-time at tech events, turning static figures into a compelling story that agencies could immediately understand.",
    year: "2024",
    image: "/images/personalyze/personalyze-1.jpg",
    processImage: "/images/personalyze/personalyze-5.jpg",
    processSectionTitle: "Visualizing Audience Intelligence",
    processTitle: "Concept: The Digital Mind",
    processText:
      "This visualization translates complex machine-learning processes into a clear, approachable narrative. By mapping the relationship between the central AI 'brain' and specific interest verticals, the design demonstrates how the platform turns chaotic behavioral data into structured, actionable audience segments.",
    moreImagesTitle: "More from the Decks",
    images: [
      "/images/personalyze/personalyze-4.jpg",
      "/images/personalyze/personalyze-2.jpg",
      "/images/personalyze/personalyze-8.jpg",
      "/images/personalyze/personalyze-3.jpg",
    ],
    videos: [
      "https://player.vimeo.com/video/1160177154?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    slug: "attic-cellar",
    title: "The Attic Cellar Treatment Rooms",
    url: "https://www.theatticcellar.com",
    tagline: "Inviting Beauty and Holistic Health Site",
    tech: [
      "Illustrator",
      "Photoshop",
      "Next.js",
      "React",
      "Tailwind CSS",
      "daisyUI",
    ],
    challenge:
      "Sherry, owner of The Attic Cellar Treatment Rooms in St Ives, Cornwall, wanted a clean, friendly website that mirrored her business's welcoming atmosphere. She specifically opted against an automated booking system to maintain a personal connection with clients. The challenge was to design a site that clearly displayed individual practitioners and their prices using a masonry layout, while creating a contact workflow that captured specific preferences—practitioner and treatment—to facilitate a helpful follow-up call.",
    solution:
      "I developed a custom theme that balances aesthetic appeal with functionality. The practitioner pages utilize a responsive masonry layout to organize treatments and pricing clearly. For the contact page, I implemented a dynamic form where selecting a preferred practitioner filters the treatment dropdown options. This ensures Sherry receives all the necessary details upfront, allowing her to personally book clients and maintain the friendly service she is known for.",
    year: "2025",
    image: "/images/actr/actr-1.jpg",
    processSections: [
      {
        image: "/images/actr/actr-2.jpg",
        sectionTitle: "Custom Illustration",
        title: "A Personal Touch",
        text: "I hand-sketched the treatment rooms to infuse the digital experience with the same warmth found in the physical space. This personal touch invites clients in, reinforcing the friendly, non-corporate atmosphere that Sherry values.",
      },
      {
        image: "/images/actr/actr-3.png",
        sectionTitle: "Practitioner Page",
        title: "Visual Treatment Menu",
        text: "Individual practitioner pages feature a responsive masonry layout that clearly presents treatments and pricing. This clean organization helps clients easily explore the specific holistic services available from each therapist.",
      },
    ],
  },
  {
    slug: "morgan-stanley",
    title: "Morgan Stanley",
    tagline: "Building entry application for mobile",
    tech: ["Illustrator", "Figma", "After Effects"],
    challenge:
      "Morgan Stanley needed to modernize property access for thousands of employees across multiple global locations. The goal was to reduce friction at entry points while maintaining strict security protocols and logging standards.",
    solution:
      "A geolocation-enabled entry system designed for rapid turnaround. The interface uses clear visual cues and automation to reduce user input, creating a 'zero-touch' entry experience for authorized personnel.",
    year: "2024",
    image: "/images/morgan-stanley/morgan-stanley-1.jpg",
    processSections: [
      {
        image: "/images/morgan-stanley/morgan-stanley-3.jpg",
        sectionTitle: "Core Interface & Features",
        title: "Geo-Fencing and Digital Audit Trails",
        text: "High-fidelity screens designed to simplify complex security protocols. The 'Auto Check-in' feature utilizes background location services to detect when an employee approaches a property, triggering a secure login without requiring the app to be open. The design prioritizes transparency - Smart Configuration: Users can toggle geo-fencing permissions per their privacy comfort. Access Logs: A searchable history view provides users and security teams with a verifiable record of entry and exit times across all data centers and exchange points.",
      },
      {
        image: "/images/morgan-stanley/morgan-stanley-4.jpg",
        sectionTitle: "Visual Status Indicators",
        title: "Instant Feedback Loops",
        text: "Mapping the user journey from authentication to building access. In a high-volume entry environment, clarity is speed. The design utilizes a bold 'Traffic Light' system to provide instant visual feedback.",
      },
    ],
  },
  {
    slug: "higgs-yard",
    title: "Higgs Yard",
    tagline: "Interactive Touchscreen Experience for Property Sales",
    tech: ["Illustrator", "Photoshop"],
    challenge:
      "Peabody required a centerpiece for their Higgs Yard marketing suite—a digital interface that would allow prospective buyers to intuitively explore the development. The challenge was to design a touchscreen application that could present complex inventory data and floor plans with clarity and elegance, ensuring the digital experience matched the high architectural standards of the physical development.",
    solution:
      "I delivered a high-fidelity UI design tailored for large-format touchscreens. The interface prioritizes ease of navigation, allowing users to seamlessly filter apartments, view interactive floorplates, and access detailed property specifications. The visual language utilizes clean typography and ample whitespace to let the architectural imagery breathe, creating a sophisticated sales tool that enhances the buyer's journey from discovery to selection.",
    year: "2024",
    image: "/images/higgs-yard/higgs-yard-1.jpg",
    moreImagesTitle: "Interface Design",
    images: [
      "/images/higgs-yard/higgs-yard-2.jpg",
      "/images/higgs-yard/higgs-yard-3.jpg",
      "/images/higgs-yard/higgs-yard-6.jpg",
      "/images/higgs-yard/higgs-yard-5.jpg",
    ],
    processImage: "/images/higgs-yard/higgs-yard-4.jpg",
    processSectionTitle: "Apartment Finder",
    processTitle: "Advanced Filtering",
    processText:
      "This detailed view of the filter page enables users to find their ideal home by refining results based on bedrooms, floor level, aspect, and price range.",
  },
];

// 2. STATIC PARAMS
// This tells Next.js which pages to build (e.g., /work/fintech-dashboard)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 3. THE COMPONENT
// In .jsx, we don't need to specify types for 'params'
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  // Find the project that matches the URL slug
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // If no project matches, show the 404 page
  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <ClientPage project={project} nextProject={nextProject} />;
}
