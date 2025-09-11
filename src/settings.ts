export const profile = {
    fullName: "Steiner Lab",
    title: "",
    institute: "",
    author_name: "Steiner Lab",
    research_areas: [
      {
        title: "Area 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod ultricies enim eget tincidunt. In eu mi iaculis, pulvinar augue eu, consectetur sapien. Nullam in risus ut erat lobortis aliquet. In aliquet quam nibh, sed finibus elit suscipit a. Nullam finibus pellentesque ornare. Curabitur ac diam euismod, dapibus eros a, pellentesque enim. Nulla et scelerisque neque. Aenean in magna consectetur, sodales arcu vel, luctus nisl. Nulla facilisi. Mauris quis tempus enim. Donec a porta sapien, a consequat est. Proin egestas, ipsum eu eleifend pretium, arcu leo viverra elit, nec consequat nunc ex nec quam. Nulla in luctus elit, ac suscipit nibh. Quisque consequat metus quis lorem pellentesque, at imperdiet ante varius."
    },
    {
        title: "Area 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod ultricies enim eget tincidunt. In eu mi iaculis, pulvinar augue eu, consectetur sapien. Nullam in risus ut erat lobortis aliquet. In aliquet quam nibh, sed finibus elit suscipit a. Nullam finibus pellentesque ornare. Curabitur ac diam euismod, dapibus eros a, pellentesque enim. Nulla et scelerisque neque. Aenean in magna consectetur, sodales arcu vel, luctus nisl. Nulla facilisi. Mauris quis tempus enim. Donec a porta sapien, a consequat est. Proin egestas, ipsum eu eleifend pretium, arcu leo viverra elit, nec consequat nunc ex nec quam. Nulla in luctus elit, ac suscipit nibh. Quisque consequat metus quis lorem pellentesque, at imperdiet ante varius."
      },
    ],
    publications: [
      {
        title: "Pub 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod ultricies enim eget tincidunt. In eu mi iaculis, pulvinar augue eu, consectetur sapien. Nullam in risus ut erat lobortis aliquet. In aliquet quam nibh, sed finibus elit suscipit a. Nullam finibus pellentesque ornare. Curabitur ac diam euismod, dapibus eros a, pellentesque enim. Nulla et scelerisque neque. Aenean in magna consectetur, sodales arcu vel, luctus nisl. Nulla facilisi. Mauris quis tempus enim. Donec a porta sapien, a consequat est. Proin egestas, ipsum eu eleifend pretium, arcu leo viverra elit, nec consequat nunc ex nec quam. Nulla in luctus elit, ac suscipit nibh. Quisque consequat metus quis lorem pellentesque, at imperdiet ante varius."
    },
    {
        title: "Pub 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod ultricies enim eget tincidunt. In eu mi iaculis, pulvinar augue eu, consectetur sapien. Nullam in risus ut erat lobortis aliquet. In aliquet quam nibh, sed finibus elit suscipit a. Nullam finibus pellentesque ornare. Curabitur ac diam euismod, dapibus eros a, pellentesque enim. Nulla et scelerisque neque. Aenean in magna consectetur, sodales arcu vel, luctus nisl. Nulla facilisi. Mauris quis tempus enim. Donec a porta sapien, a consequat est. Proin egestas, ipsum eu eleifend pretium, arcu leo viverra elit, nec consequat nunc ex nec quam. Nulla in luctus elit, ac suscipit nibh. Quisque consequat metus quis lorem pellentesque, at imperdiet ante varius."
      },
    ],
    lab_members: [
      {
        name: "Nicholas Steiner",
        role: "Principal Investigator",
        bio: "Bio coming soon...",
        photo: "/assets/nicholas_steiner.jpg",
        socials: {
        linkedin: "https://www.linkedin.com/in/steinernick"
      }
    },
          {
        name: "Nicole West",
        role: "Graduate Assistant",
        bio: "Bio coming soon...",
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
    // x: "https://www.x.com/",
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
