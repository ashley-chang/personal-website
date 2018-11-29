const ProjectData = [
  {
    title: "Sage Street Coffee Roasters",
    img: "/img/sage-street.png",
    desc: `This fully responsive website, made for a fictional coffee shop, was built from scratch using Node.js, Express, and MongoDB as a practice project for working with the server side. It features a working shopping cart and checkout process, user authentication, a blog with commenting capabilities, and email contact form.`,
    comment: `This website is a passion project inspired by a trip to Oregon, whose multitudes of quaint coffee shops sparked my love for coffee.`,
    tools: ["HTML", "Handlebars", "SASS", "JQuery", "Node.js", "Express", "MongoDB", "Mongoose"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/sage-street-coffee-roasters"
      }
    ]
  },
  {
    title: "Harbor Italian",
    img: "/img/harbor-spa-fine-dining.png",
    desc: "This fully responsive website, which features a fictional restaurant/spa, is built with Foundation 6, Sass, and Jquery. It is single-paged, and features a JQuery-powered slider written from scratch, smooth-scrolling and scroll reveal.",
    comment: "This project was inspired by my love for food, so I had quite a bit of fun thinking up the theme and finding inspiration for photos and the menu.",
    tools: ["HTML", "JQuery", "Foundation 6", "SASS"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/Harbor-Spa-Fine-Dining"
      }
    ]
  },
  {
    title: "Task Timer",
    img: "/img/task-timer.png",
    desc: `Task Timer is a Pomodoro-style clock built with React. With a simple settings panel and intuitive interface, it was designed to be smooth, clean, and functional to complement any workflow.`,
    comment: ``,
    tools: ["React.js", "CSS"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/react-task-timer"
      },
      {
        text : "CodeSandbox",
        href: "https://codesandbox.io/s/github/ashley-chang/react-task-timer"
      },
      {
        text: "Demo",
        href: "https://6j8wxwmloz.codesandbox.io/"
      }
    ]
  },
  {
    title: "Coffee Friends",
    img: "/img/coffee-friends.png",
    desc: `This React-based app is geared towards beginner coffee connoisseurs to explain the differences between several of the most popular types of coffee. Each coffee category features a brief explanation of how it is made, and also includes a small CSS graphic representing ingredient ratios.`,
    comment: `This was a fun project I built for myself in order to get familiar with all the different types of coffee I always saw in cafes and restaurants.`,
    tools: ["React.js", "CSS"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/coffee-friends"
      },
      {
        text: "Demo",
        href: "https://coffee-friends.herokuapp.com/"
      }
    ]
  },
  {
    title: "Redux Calculator",
    img: "/img/react-redux-calculator.png",
    desc: `This calculator was built from scratch using React and Redux. It is fully capable of basic math functions like addition, subtraction, multiplication, and division, and also handles invalid input such as repeated operators. It uses state changes to keep track of current operations, display values, and result values.`,
    comment: `While Redux may not have been absolutely necessary for this project, this calculator solidified my understanding of how React and Redux work together.`,
    tools: ["React.js", "Redux", "CSS"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/react-redux-calculator"
      },
      {
        text : "CodeSandbox",
        href: "https://codesandbox.io/s/github/ashley-chang/react-redux-calculator"
      },
      {
        text: "Demo",
        href: "https://38m4rz1w2p.codesandbox.io/"
      }
    ]
  }, {
    title: "Sustainable Energy Tribute Page",
    img: "/img/sustainable-energy-tribute-page.png",
    desc: `This simple tribute page was born out of my love for the environment. It was created simply to provide a basic explanation of sustainable energy; it includes a rundown of what sustainable energy is, what it involves, and why it is important for the future. The page itself is rather minimal, but I enjoyed playing with the layout, which includes a simple JS-powered accordion and decorative pseudo-elements.`,
    comment: `This project was inspired by Free Code Academy's front-end project ideas.`,
    tools: ["HTML", "CSS", "Javascript"],
    links: [
      {
        text: "Demo",
        href: "https://codepen.io/basilsprout/pen/ZmbrWP#0"
      }
    ]
  }, {
    title: "Chatty",
    img: "/img/node-chat-app.png",
    desc: `Chatty is a fully functioning live chat application that runs on Node.js and Socket.io. Users can create usernames as well as individual rooms to chat in, and can also send information about their location through the geolocation API. Users are also notified whenever someone enters or leaves their chat room.`,
    comment: `This project was created as a part of Andrew Mead's "The Complete Node.js Developer Course" on Udemy.`,
    tools: ["Javascript", "Node.js", "Socket.io"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/node-chat-app"
      }
    ]
  }, {
    title: "Redux Weather Forecast",
    img: "/img/redux-weather-app.png",
    desc: `This weather forecasting app, powered by Google Maps, OpenWeatherMap, and Sparklines APIs, fetches a real-time 5-day weather forecast of any given US city. Search information includes a working map, as well as temperature, humidity, and pressure trends presented in colored line graphs.`,
    comment: `This project was created a part of Stephen Grider's "Modern React with Redux" course on Udemy.`,
    tools: ["React.js", "Redux"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/redux-weather-app"
      }
    ]
  }, {
    title: "React Youtube",
    img: "/img/react-youtube.png",
    desc: `Built with React, this YouTube clone uses the YouTube API and features an instant search bar that loads videos as you type.`,
    comment: `This project was created a part of Stephen Grider's "Modern React with Redux" course on Udemy.`,
    tools: ["React.js"],
    links: [
      {
        text: "Github",
        href: "https://github.com/ashley-chang/react-youtube"
      }
    ]
  }
];

for (let i = 0 ; i < ProjectData.length; i++) {
  ProjectData[i]["id"] = i.toString();
}

export default ProjectData;
