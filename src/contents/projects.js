export default {
  projects: [
    {
      name: "This Website (About)",
      date: '8/2018',
      onGoing: true,
      tech: "React,Redux,React-scroll,React-reveal".split(','),
      url: "Look at the URL:)",
      synopsis: `
        You read the name right: The project is not called "This website", but this website you're looking at!
        In fact I don't even know how should this website be called, so I will just put it into a repo called "about"
        so that the URL on GitHub pages can be "***.github.io/travistang/about",
        which suits the purpose of this site!
        This website has multiple audiences, my friends, my potential employers, and whoever curious about me.
        It is designed to give you a brief introduction about me, on both technical side and non-technical side.
        It is also used to showcase my frontend development skills:)
      `
    },
    {
      name: "MVGDashboard",
      date: '7 / 2018',
      onGoing: true,
      tech: 'Electron,React,Cheerio'.split(','),
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
