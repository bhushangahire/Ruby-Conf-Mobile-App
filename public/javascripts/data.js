Ext.regModel('RubyConf', {
    fields: ['speaker', 'event', 'date', 'time']
});

ListDemo.ListStore = new Ext.data.Store({
    model: 'RubyConf',
    sorters: 'date',
    getGroupString : function(record) {
        return record.get('date');
    },
    data: [
        { speaker: "", task: "Registration",     date: "24/03/2012", time : "0815 - 0900" },
        { speaker: "Ajey Gore", task: "Welcome",     date: "24/03/2012", time : "0900 - 0930" },
        { speaker: "Charles Nutter", task: "Keynote",     date: "24/03/2012", time : "0930 - 1015" },
        { speaker: "Matz", task: "Video Keynote",     date: "24/03/2012", time : "1015 - 1100" },
        { speaker: "", task: "Break",     date: "24/03/2012", time : "1100 - 1130" },
        { speaker: "Nikhil Mungel and Shishir Das", task: "Using Ruby to Craft and Test Beautiful Command Line Applications",     date: "24/03/2012", time : "1130 - 1215" },
        { speaker: "Shabbir Sohel Merchant", task: "Open Source Software Licenses 101 for Ruby Programmers",     date: "24/03/2012", time : "1130 - 1215" },
	{ speaker: "Jiren Patel and Sricharan Sunder", task: "From Ruby to English",  date: "24/03/2012", time : "1215 - 1300" },
	{ speaker: "Tejas Dinkar and Jasim A Basheer", task: "Sandboxing Ruby Code - Lessons from the battlefield",  date: "24/03/2012", time : "1215 - 1300" },
	{ speaker: "", task: "Lunch",  date: "24/03/2012", time : "1300 - 1400" },
	{ speaker: "Ajey Gore", task: "Everything Ruby",  date: "24/03/2012", time : "1400 - 1445" },
	{ speaker: "Arpan CJ", task: "Responsive Design: now 90% easier with SASS!",  date: "24/03/2012", time : "1400 - 1445" },
	{ speaker: "Steven Deobald", task: "Clojure is my favourite ruby",  date: "24/03/2012", time : "1445 - 1530" },
	{ speaker: "Habibullah Pagarkar and Chandan Jog", task: "Sending out an SMS: Ruby Stings!",  date: "24/03/2012", time : "1445 - 1530" },
	{ speaker: "Arun Tomar", task: "Unity",  date: "24/03/2012", time : "1530 - 1615" },
	{ speaker: "Sandip Ransing and Shailesh Patil", task: "VoIP on Rails in India",  date: "24/03/2012", time : "1530 - 1615" },
        { speaker: "", task: "Break",     date: "24/03/2012", time : "1615 - 1645" },
        { speaker: "", task: "Lightning Talks",     date: "24/03/2012", time : "1645 - 1800" },


        { speaker: "Ajey Gore", task: "Welcome",     date: "25/03/2012", time : "0930 - 1000" },
        { speaker: "Mikel Lindsaar", task: "Keynote",     date: "25/03/2012", time : "1000 - 1045" },
        { speaker: "", task: "Break",     date: "25/03/2012", time : "1045 - 1115" },
        { speaker: "Darshan Subhash Karandikar", task: "JRuby on Rails - RoR's Simplicity Meets Java's Class: A Case in Point for a Highly Productive and Scalable Enterprise Application Development Platform with JRoR",     date: "25/03/2012", time : "1115 - 1200" },
        { speaker: "Chang Sau Sheong", task: "Sex, Money and Evolution - Simulation and Data Analysis with Ruby and Rails",     date: "25/03/2012", time : "1115 - 1200" },
        { speaker: "Gautam Rege", task: "Push it push it some more",     date: "25/03/2012", time : "1200 - 1245" },
        { speaker: "Niranjan Prabhakar Sarade", task: "What lies beneath the beautiful code ?",     date: "25/03/2012", time : "1200 - 1245" },
        { speaker: "", task: "Lunch",     date: "25/03/2012", time : "1245 - 1330" },
        { speaker: "Ravindra R. Jaju", task: "JVM Polyglot Programming: JRuby FTW!",     date: "25/03/2012", time : "1330 - 1415" },
        { speaker: "Thorben Schroder", task: "Improving Inter Service Communication",     date: "25/03/2012", time : "1330 - 1415" },
        { speaker: "Rocky Jaiswal and Arun Agrawal", task: "When Ruby Meets Java - The power of Torquebox",     date: "25/03/2012", time : "1415 - 1500" },
        { speaker: "Karunakar", task: "Large scale Ruby project, challenges and Pitfalls.",     date: "25/03/2012", time : "1415 - 1500" },
        { speaker: "Abhishek Parolkar", task: "Ruby for the soul of Big Data nerds",     date: "25/03/2012", time : "1500 - 1545" },
        { speaker: "Matthew Kirk", task: "'method_missing' Should be Missing",     date: "25/03/2012", time : "1500 - 1545" },
        { speaker: "", task: "Break",     date: "25/03/2012", time : "1545 - 1615" },
        { speaker: "", task: "Closing Video Keynote",     date: "25/03/2012", time : "1615 - 1700" },
        { speaker: "", task: "Closing and Networking",     date: "25/03/2012", time : "1700 - EOD" }

    ]
});

