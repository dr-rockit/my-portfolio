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
    processImage: "/images/F2H-UA/F2H-UA-7.jpg",
    processTitle: "The Build",
    processText:
      "Constructing the grid system in vector format (Illustrator) prior to export. This ensures pixel-perfect alignment and allows for complex masking techniques that remain editable in the master template.",
    moreImagesTitle: "More from the Deck",
    images: [
      "/images/F2H-UA/F2H-UA-2.jpg",
      "/images/F2H-UA/F2H-UA-3.jpg",
      "/images/F2H-UA/F2H-UA-4.jpg",
      "/images/F2H-UA/F2H-UA-5.jpg",
      "/images/F2H-UA/F2H-UA-6.jpg",
      "/images/F2H-UA/F2H-UA-8.jpg",  
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
    image: "/images/personalyze/personalyze-6.jpg",
    moreImagesTitle: "More from the Decks",
    images: [
      "/images/personalyze/personalyze-4.jpg",
      "/images/personalyze/personalyze-2.jpg",
      "/images/personalyze/personalyze-7.jpg",
      "/images/personalyze/personalyze-3.jpg",
      "/images/personalyze/personalyze-5.jpg",
    ],
    videos: [
      "https://player.vimeo.com/video/1160177154?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    slug: "attic-cellar",
    title: "Attic Cellar Treatment Rooms",
    url: "https://www.theatticcellar.com",
    tagline: "Designing a Sanctuary for Beauty & Health",
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
      {
        image: "/images/actr/actr-4.jpg",
        sectionTitle: "Mobile Optimization",
        title: "Seamless on Small Screens",
        text: "The site was built with a mobile-first approach, ensuring that the rich visual content and masonry layouts translate perfectly to handheld devices. This responsiveness guarantees that clients have the same seamless experience whether they are booking from a desktop or their phone.",
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
      "/images/higgs-yard/higgs-yard-6.jpg",
      "/images/higgs-yard/higgs-yard-3.jpg",
      "/images/higgs-yard/higgs-yard-5.jpg",
      "/images/higgs-yard/higgs-yard-7.jpg",
    ],
    processImage: "/images/higgs-yard/higgs-yard-4.jpg",
    processSectionTitle: "Apartment Finder",
    processTitle: "Advanced Filtering",
    processText:
      "This detailed view of the filter page enables users to find their ideal home by refining results based on bedrooms, floor level, aspect, and price range.",
  },
    {
    slug: "lampton-parkside",
    title: "Lampton Parkside",
    tagline: "Interactive Property Sales App",
    tech: ["Illustrator", "Sketch"],
    challenge:
      "Notting Hill Genesis required a high-fidelity digital sales tool for the Lampton Parkside marketing suite. The objective was to translate complex architectural data and availability lists into an intuitive experience. The interface needed to allow sales agents and potential buyers to explore the development, visualize unbuilt apartments, and understand the lifestyle offering on a large-format touchscreen.",
    solution:
      "I designed and developed a bespoke interactive application that serves as the centerpiece of the sales journey. The solution features a rotatable 3D site model, a powerful apartment finder, and detailed floor plan visualization. The UI was crafted to be elegant and unobtrusive, ensuring the high-quality CGI assets and architectural details remain the focal point while providing a seamless user experience.",
    year: "2022",
    image: "/images/lampton-parkside/lampton-parkside-1.jpg",
    processSections: [
      {
        image: "/images/lampton-parkside/lampton-parkside-2.jpg",
        sectionTitle: "Filter Search & Availability",
        title: "Intuitive Controls",
        text: "To streamline the sales process, I implemented a robust filtering engine. Users can refine their search by specific criteria—such as price range, number of bedrooms, and floor level. The results populate a data table in real-time, allowing for quick comparison of unit specifications and immediate access to availability status.",
      },
      {
        image: "/images/lampton-parkside/lampton-parkside-3.jpg",
        sectionTitle: "Interactive Floor Plans",
        title: "Detailed Visualization",
        text: "Each unit features a dedicated interactive floor plan view. This high-detail interface allows users to inspect the layout, room dimensions, and orientation of the specific apartment. The clean UI ensures technical information is presented clearly without overwhelming the user, helping them visualize the flow of their potential new home.",
      },
            {
        image: "/images/lampton-parkside/lampton-parkside-6.jpg",
        sectionTitle: "Immersive Gallery Experience",
        title: "Visual Storytelling",
        text: "Emotional connection is key to off-plan sales. The gallery section utilizes a full-screen layout to showcase high-resolution CGI renders of the exterior architecture and interior finishes. This immersive view helps prospective buyers visualize the atmosphere and quality of the finished development",
      },
            {
        image: "/images/lampton-parkside/lampton-parkside-4.jpg",
        sectionTitle: "Amenities & Local Area",
        title: "Contextual Location Mapping",
        text: "Location context is vital. I integrated an interactive area map that highlights the development’s connectivity. Users can explore the proximity to local transport links, green spaces, schools, and shopping districts, effectively demonstrating the lifestyle benefits of the Lampton Parkside location.",
      },
    ],
  },
  {
    slug: "lazenby-square",
    title: "Lazenby Square",
    tagline: "Mobile Property Sales App",
    tech: ["Illustrator", "Sketch"],
    challenge:
      "Commissioned by Peabody for their Lazenby Square development, the goal was to create a dedicated mobile application for their sales team and prospective buyers. The challenge was to condense complex inventory data and detailed architectural floor plans into a seamless handheld experience. The interface needed to be intuitive on a smaller screen while maintaining the elegance and high architectural standards of the physical development.",
    solution:
      "I delivered a high-fidelity mobile UI tailored specifically for iOS and Android devices. The design prioritizes thumb-friendly navigation, allowing users to effortlessly filter apartments, view interactive floor plans, and access property specs on the go. The visual language utilizes a refined dark mode and clean typography to maximize screen real estate, creating a sophisticated, pocket-sized sales tool that enhances the buyer's journey.",
    year: "2022",
    image: "/images/lazenby-square/lazenby-square-1.jpg",
    processImage: "/images/lazenby-square/lazenby-square-2.jpg",
    processSectionTitle: "Smart Inventory Filtering",
    processTitle: "INTUITIVE CONTROLS",
    processText:
      "To manage the extensive inventory, I developed a streamlined filtering system. Users can isolate units based on block, bedroom count, and price range using tactile sliders. The interface also introduces a 'Favourites' feature, allowing buyers to curate a personal list of potential homes for future reference.",
  },
    {
    slug: "sarah-freer",
    title: "Sarah Freer",
    tagline: "Continuous Flow: A Digital Sanctuary for Holistic Healing",
    tech: ["Illustrator", "Photoshop", "React", "Next.js", "TailwindCSS", "daisyUI"],
    challenge:
      "Sarah is a practitioner with over three decades of expertise, but her previous digital presence didn't reflect the premium, serene experience of her physical clinic. The primary hurdle was managing high information density—presenting over 15 distinct treatments—without causing \"choice paralysis\" for the visitor. I also needed to solve for atmospheric translation, finding a way to bridge the gap between a standard clinical website and the tranquil, hands-on reality of her practice at Tir Y Coed Country House in the heart of Snowdonia National Park.",

    solution:
      "I designed and built a bespoke, long-scroll experience titled \"Continuous Flow,\" intended to act as a digital extension of a physical treatment session. By utilizing a split-screen layout and a sticky accordion navigation, I guided the user through a rhythmic journey that prioritizes a digestible hierarchy over a cluttered interface. I intentionally divided the extensive treatment menu into two distinct sections to maintain a clean aesthetic and prevent scroll fatigue, while grounding the entire experience in the Conwy Valley landscape and action-oriented imagery. This culminated in a low-friction conversion path that replaces cold, clinical forms with a warm, high-contrast invitation to connect.",
    year: "2025",
    image: "/images/sarah-freer/sarah-freer-1.jpg",
    processImage: "/images/sarah-freer/sarah-freer-2.jpg",
    processSectionTitle: "Leaflet Design",
    processTitle: "DL Leaflet for In-Person Distribution",
    processText:
      "To complement the digital experience, I designed a DL leaflet that distills the essence of the website into a tangible format. The layout mirrors the split-screen design of the site, with one side dedicated to evocative imagery and the other to concise, reassuring copy. This physical touchpoint serves as a bridge between the online sanctuary and the real-world clinic, allowing Sarah to connect with potential clients in person while maintaining brand consistency.",
        longPage: {
  title: "Continuous Flow",
  slices: [
    { 
      image: "/images/sarah-freer/slice-1.jpg",
      alt: "Close-up of the website hero section featuring elegant serif typography and a translucent navigation bar.",
      label: "The Hook",
      text: "I designed the hero section to establish an immediate sense of \"Zen\". By pairing minimalist navigation with ethereal imagery, I set the tone for a premium, holistic experience. My goal was to lower the user's heart rate the moment the page loads." 
    },
    { 
      image: "/images/sarah-freer/slice-2.jpg",
      alt: "A photograph of Sarah performing a foot treatment, demonstrating professional massage techniques and hands-on expertise.",
      label: "About Sarah",
      text: "Trust is the primary currency in massage therapy. Rather than a standard headshot, I chose to feature Sarah in action, immediately establishing her as a practitioner with \"hands-on\" authority. By placing this imagery alongside a summary of her 30 years of experience, I bridged the gap between professional clinical skill and the tangible, human care she provides." 
    },
    { 
      image: "/images/sarah-freer/slice-3.jpg",
      alt: "A landscape photograph of a lone tree in Snowdonia National Park, used to establish the clinic's tranquil geographical location.",
      label: "The Location",
      text: "Logistics meet aesthetics. I highlighted the clinic's setting in Rowen, nestled in the heart of Snowdonia National Park. By pairing landscape photography with clear arrival details for Tir Y Coed Country House, I wanted to show that the \"wind down\" begins before the client even walks through the door. The goal was to frame the quiet drive through the valley as the first step in the treatment process."
    },
        { 
      image: "/images/sarah-freer/slice-4.jpg",
      alt: "An interior view of the Garden Room treatment space showing a large window overlooking lush green gardens and nature.",
      label: "The Garden Room",
      text: "This section highlights the specific treatment space. I chose to emphasize the Garden Room's unique vantage point overlooking the grounds. By showcasing the connection to nature and the \"lovely garden\" views, I positioned the environment not just as a room, but as a key part of the healing process—a private sanctuary removed from the outside world." 
    },
    { 
      image: "/images/sarah-freer/slice-5.jpg",
      alt: "A section of the website titled 'Treatments Information' featuring clean typography and professional imagery of a treatment room.",
      label: "Treatments Information",
      text: "Before diving into specifics, I built this \"pre-flight\" section to manage expectations. I structured the copy to be reassuring and informative, ensuring the client feels safe and informed before they ever click \"Book.\"" 
    },
    { 
      image: "/images/sarah-freer/slice-6.jpg", 
      alt: "A card-based UI layout displaying different massage services with high-quality photography and concise descriptions.",
      label: "Treatments",
      text: "To avoid \"choice paralysis,\" I utilized a card-based layout. This first group of treatments uses evocative imagery and tight, descriptive copy, allowing users to browse services without feeling overwhelmed by technical jargon." 
    },
        { 
      image: "/images/sarah-freer/slice-7.jpg",
      alt: "A continuation of the treatment menu showing a consistent, rhythmic grid of holistic and remedial therapy cards.", 
      label: "Treatments (Continued)",
      text: "Consistency is key to the \"Continuous Flow\" theme. I maintained the visual rhythm for this second tier of services, ensuring that deeper remedial treatments receive the same high-end, editorial presentation as the signature sessions." 
    },
    { 
      image: "/images/sarah-freer/slice-8.jpg",
      alt: "The testimonials section of the website with a minimalist design, focusing on client feedback and white space.", 
      label: "Testimonials",
      text: "Social proof is essential for conversion. I designed the testimonial section with a minimalist layout that lets client voices breathe. By stripping away distracting UI elements, I kept the focus entirely on the emotional impact of Sarah's work." 
    },
        { 
      image: "/images/sarah-freer/slice-9.jpg",
      alt: "The contact and booking enquiry section featuring a high-contrast dark theme and a simple, user-friendly contact form.", 
      label: "Contact & Enquiries",
      text: "The final \"destination\" of the scroll. I replaced the standard, cold contact form with a warm invitation for booking enquiries. I kept the layout high-contrast and low-friction to convert a casual browser into a scheduled client." 
    },
  ]
},
  },
];

// 2. STATIC PARAMS
// This tells Next.js which pages to build (e.g., /work/freedom2hear, /work/personalyze-ai, etc.)
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
