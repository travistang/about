export default {
  projects: [
    {
      name: "Deep Learning Course Project",
      date: "1/2018",
      onGoing: false,
      tech: "Keras,OpenAI Gym".split(','),
      url: 'https://github.com/travistang/IN2346-Porject',
      synopsis: `
        This is the project my friend and I worked on for the course Introduction to Deep Learning (IN2346) at TUM.
        In this project we compare the performance of 3 different neural networks on learning to play Atari games (Breakout),
        namely, a simple CNN, RNN (LSTM) and the Neural Turing Machine.
        Our finding is that the simple CNN performs the best (by that I mean it gives the highest score given the same amount of time of training)
        and one of the explanations is that the other two networks contain much more parameters that they take more time and 'experiences' to learn.
        This project also features an implementation of NTM with Keras backend from scratch. Which is, for me,
        a very good practice for building computational graph.
      `
    },
    {
      name: "This Website (About)",
      date: '8/2018',
      onGoing: true,
      tech: "React,React-scroll,React-reveal,".split(','),
      url: "Look at the URL:)",
      synopsis: `
        You read the name right: The project is not called "This website", but this website you're looking at!
        In fact I don't even know how should this website be called, so I will just put it into a repo called "about"
        so that the URL on GitHub pages can be travistang.github.io/about",
        which suits the purpose of this site!
        This website has multiple audiences, my friends, my potential employers, and whoever finds curious about me.
        It is designed to give you a brief introduction about me, on both technical side and non-technical side.
        It is also used to showcase my frontend development skills:)
      `
    },
    {
      name: "MVGDashboard",
      date: '7 / 2018',
      onGoing: true,
      tech: 'Electron,React,Redux,Redux-Saga,Cheerio'.split(','),
      url: "https://github.com/travistang/MVGDashboard",
      synopsis: `
        An electron application that displays the departure time and time to destination from your location
        (I bet MVV and MVG won't like it...).
        This is planned to be run on a Raspberry Pi and put in a common kitchen so every flatmates of mine can make use of it.
        I plan to integrate other features to make it even more personalized.
        Details are unfortunately a secret for now,
        but you will definitely see in the future:)
      `
    },
    {
      name: 'wg-crawler',
      date: '9 / 2017',
      onGoing: false,
      tech: 'Scrapy,Crontab,Parse.js'.split(','),
      url: 'https://github.com/travistang/wg-crawler',
      synopsis: `
        A web scraper that periodically visit some housing ads websites,
        get new offers and send a user-defined email to the landlord.
        Motivation of this project definitely comes from the difficult housing situation in Munich.
        I spent a few days to build this crawler immediately after I arrived at the city.
        Afterwards I use it to contact landlords and improve it meanwhile.
        Some time later I indeed got an offer from it, which turns out to be where I am living at now:)
      `
    },
    {
      name: "YoutubeDownloader",
      date: '3/2017',
      tech: 'Ionic 2,Express,Docker,Kue,MongoDB,RabbitMQ,Youtube-dl'.split(','),
      onGoing: true,
      url: "https://github.com/travistang/YoutubeDownloader",
      synopsis: `
        Another piece of work that challenges the TOS :)
        It is used to coorperate with a Node-based backend to download videos
        (more precisely, audios)
        from YouTube to your mobile devices for playing offline.
        Due to technical challenges from the Ionic side this project has been stuck for a few months,
        but I can assure you that it will be completed for the foreseeable future:)
      `
    },
    {
      name: "PasswordManager",
      date: '11/2017',
      onGoing: false,
      tech: "Vue.js,Nuxt.js,Parse,Docker".split(','),
      url: "https://github.com/travistang/pwmanager",
      synopsis: `
        This is my very first attempt to write a website with Vue.js.
        Turns out not only have I found this library easy to use but it also allows me to pick up other web frameworks easily.
        I started to spend time on web development seriously since then.
        This server-side-rendered site, coorperating with an easy-to-set-up Parse server,
        has served me for half a year over my personal VPN.
        Why just half a year? Because I plan to build a PasswordManager v2!
      `
    }
  ]
}
