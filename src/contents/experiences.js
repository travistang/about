export default {
	programming: {
		JavaScript: {
			score: 90,
			tech: "Node.js,Express,Kue,Cheerio,React,Vue,Angular 1,Electron".split(
				","
			)
		},
		"HTML & CSS": {
			score: 90,
			tech: []
		},
		Python: {
			score: 90,
			tech: "Keras,Tensorflow,OpenCV,Scrapy,Flask,Django,MicroPython".split(",")
		},
		"C/C++": {
			score: 70,
			tech: "Embedded Programming,Ceres,OpenCV,Socket Programming".split(",")
		},
		TypeScript: {
			score: 60,
			tech: "Ionic, Angular 4".split(",")
		},
		Java: {
			tech: "Android,Spark,Java Swing".split(","),
			score: 70
		},
		Kotlin: {
			tech: "Android".split(","),
			score: 60
		}
	},
	language: {
		Cantonese: {
			proficiency: "Native",
			score: 100
		},
		English: {
			proficiency: "Proficient",
			grade: "~C1",
			color: "info",
			score: 80
		},
		German: {
			proficiency: "Intermediate",
			grade: "B1",
			color: "warning",
			score: 40
		},
		"Mandarin Chinese": {
			proficiency: "Proficient",
			grade: "~B2",
			color: "info",
			score: 60
		}
	},
	timeline: [
		{
			company: "Siemens",
			nature: "Working Student",
			role: "Working Student",
			date: "15/4/2019",
			technologies: "Flask,Tensorflow,OpenCV,ARKit".split(","),
			synopsis:
				"Assists in implementing softwares in research projects related to 3D reconstructions and Augmented Reality"
		},
		{
			company: "Technical University of Munich",
			nature: "Part time",
			role: "Research Assistant - Full Stack Developer",
			date: "1/1/2019",
			technologies: "Express.js,Mongoose,React.js".split(","),
			synopsis:
				"My task is to develop a web platform that enables politicians and students to communicate and participate in different project."
		},
		{
			company: "Technical University of Munich",
			nature: "Part time",
			role: "Research Assistant (HiWi)",
			date: "1/10/2018",
			technologies: "Flask,ESP8266,Raspberry Pi, Micropython".split(","),
			synopsis:
				'My task is to set up a Web of Things (WoT) network in which devices submit their "Thing Description" (TD) that describes their functionalities and API endpoints to access them.'
		},
		{
			company: "Technical University of Munich",
			nature: "Practical Course",
			role: "iPraktikum",
			date: "1/10/2018",
			technologies: "Swift,ARKit,WebRTC,flask,express.js".split(","),
			synopsis:
				"A practical course in which our team follows the scrum development pattern throughour the semester to create a video call iOS app with several Augmented Reality features."
		},
		{
			company: "Masterson",
			nature: "Part time",
			role: "Web Application Developer",
			date: "1/4/2018",
			technologies: "Vue".split(","),
			synopsis:
				"My task is to develop 2 dashboards that displays JSON data from a given API within 3 weeks. Vue is chosen to complete this task."
		},
		{
			company: "Smokeless",
			nature: "Working Student",
			role: "App Developer",
			date: "1/1/2018",
			technologies: "Vue,Cordova".split(","),
			synopsis:
				"I am responsible for developing a hybrid application for the clinical trial participants of the test conducted by this company"
		}
	]
};
