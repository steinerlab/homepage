export const profile = {
    fullName: "Steiner Lab",
    title: "",
    institute: "",
    author_name: "Steiner Lab",
    research_areas: [],
    lab_members: [
      {
        name: "Nicholas Steiner",
        role: "Principal Investigator",
        bio: "<TODO: insert bio>.",
        photo: "/assets/nicholas_steiner.jpg",
        socials: {
        linkedin: "https://www.linkedin.com/in/steinernick"
      }
    },
          {
        name: "Nicole West",
        role: "Graduate Assistant",
        bio: "<TODO: insert bio>.",
        // photo: "/assets/west.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/nicole-a-west-4677103/"
      }
    },
    // Add more members as needed
  ],
};

export const social = {
    email: "",
    linkedin: "",
    x: "https://www.x.com/",
    github: "",
    gitlab: "",
    scholar: "",
    inspire: "",
    arxiv: ""
};

export const template = {
    website_url: "https://steinerlab.github.io/homepage/",
    base: "/homepage/",
    menu_left: false,
    transitions: true,
    lightTheme: "light",
    darkTheme: "dark",
    excerptLength: 200,
    postPerPage: 5
};

export const seo = {
    default_title: "Steiner Lab",
    default_description: "<Insert description>",
    default_image: "/images/astro-academia.png"
};
