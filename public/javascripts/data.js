Ext.regModel('RubyConf', {
    fields: ['speaker', 'event', 'date', 'time', 'description']
});


/*

<article><div class=photo><img src="images/user_blank.png"><h3>Mitchell Hashimoto</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>Rack Middleware as a General Purpose Abstraction</h3><p>We've all seen monolithic Rails models, pages and pages of methods all dumped into one class. Inevitably, someone starts moving things around just to feel about the line count, but doesn't make any real difference to the overall structure of the code. How can we reify actions on an object and simplify our classes?</p><p>In this talk I'll speak about using the concept of ""middleware"" (in the way Rack uses ""middleware"") as a general purpose abstraction for improving the organization, testability, and maintainability of complex pieces of code. I'll use my first hand experience of using middleware to power Vagrant (http://vagrantup.com), which is used by thousands of developers worldwide, as a foundation for the talk and for real world examples.</p><p>Some specific topics I'll cover with regards to middleware as a general purpose tool:</p><ul><li>What is Rack Middleware?</li><li>How do I integrate the concept into my non-Rack project? Why would I?</li><li>How has it been to maintain a large codebase with middleware?</li><li>How do I test middleware?</li><li>How does middleware improve the long-term maintainibility of the code?</li></ul><p></p></article>
*/












ListDemo.ListStore = new Ext.data.Store({
    model: 'RubyConf',
    sorters: 'date',
    getGroupString : function(record) {
        return record.get('date');
    },
    data: [
        { speaker: "", task: "Registration",     date: "24/03/2012", time : "0815 - 0900" },
        { speaker: "Ajey Gore", task: "Welcome",     date: "24/03/2012", time : "0900 - 0930" },
        { speaker: "Charles Nutter", task: "Keynote",     date: "24/03/2012", time : "0930 - 1015", description: '<article><div class="photo"><img src="images/charles_nutter.jpeg"><h3>Charles Oliver Nutter</h3><span class="links">	<a href="http://twitter.com/#!/headius" class="twitter">twitter</a><a href="http://blog.headius.com/" class="website">website</a></span></div><div class="wrap">&nbsp;</div><h3>Keynote</h3>	    <p>Charles Oliver Nutter, aka "The <a href="http://jruby.org/">JRuby</a> Guy" aka <a href="https://twitter.com/#!/headius">@headius</a> will be delivering this year\'s keynote. Stay tuned for more updates!</p>	  </article>' },
        { speaker: "Matz", task: "Video Keynote",     date: "24/03/2012", time : "1015 - 1100" },
        { speaker: "", task: "Break",     date: "24/03/2012", time : "1100 - 1130" },
        { speaker: "Nikhil Mungel and Shishir Das", task: "Using Ruby to Craft and Test Beautiful Command Line Applications",     date: "24/03/2012", time : "1130 - 1215", description : '<article><div class=photo><img src="https://si0.twimg.com/profile_images/1121694845/withcat_reasonably_small.jpg"><h3>Nikhil Mungel</h3><span class=links><a class=twitter href="https://twitter.com/#!/hyfather">twitter</a><a class=website href="http://blog.hyfather.com/">website</a></span></div><div class="photo copresenter"><img src="images/shishir.jpeg"><h3>Shishir Das</h3><span class=links><a class=twitter href="https://twitter.com/#!/shishirdas/">twitter</a></span></div><div class="wrap copresenter">&nbsp;</div><h3>Using Ruby to Craft and Test Beautiful Command Line Applications</h3><p>In any *nix system, the command line is the standard method of reliably interacting with the system. We are used to the exhaustive, fast and predictable nature of core-utils as well as the shell itself.</p><p>Yet most user-space CLI tools leave much to be desired in terms of the user experience design and playing nicely with other CLI tools.</p><p>Ruby\'s powerful abilities of dealing with textual data as well as its ability to directly interface with POSIX libraries and the underlying system itself makes it a great candidate for writing CLI apps.</p><p>Drawing from our experiences, we will discuss -- how to model CLI apps in Ruby; how to test CLI apps; standards to follow while accepting commands, arguments and options; making CLI apps fit nicely into the *nix ecosystem; and delighting users with self-documented, easy-to-use, powerful CLI apps.</p></article>' },
        { speaker: "Shabbir Sohel Merchant", task: "Open Source Software Licenses 101 for Ruby Programmers",     date: "24/03/2012", time : "1130 - 1215", description : '<article><div class=photo><img src="images/user_blank.png"><h3>Shabbir Sohel Merchant</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>Open Source Software Licenses 101 for Ruby Programmers</h3><p>Software has been finding its way in all kinds of devices large and small including Mobile, Television, refrigerators, Cars and the list goes on. A large percentage of the software present contains open source tools and technologies.</p><p>OSS licensing has always been a mystery for large number of developers, managers and stakeholders. But it could pose a serious risk when you are distributing the software as well as when posting a software product as a SaaS service. Risks includes license incompatilities, lawsuits and forceful declaration of the source code to compettitors.</p><p>In this talk I will discuss the various OSS licenses and highlight some of the incompatilities risks whcih can be posed to the software. We will discuss why compliance is important and how can it be achieved. We will also look in to licesning obligrations of the Ruby and Rails language, gems and plugins.</p></article>' },
	{ speaker: "Jiren Patel and Sricharan Sunder", task: "From Ruby to English",  date: "24/03/2012", time : "1215 - 1300", description : '<article><div class=photo><img src="https://twimg0-a.akamaihd.net/profile_images/1835534003/sc_dp.jpg"><h3>Sricharan Sunder</h3><span class=links><a href="https://twitter.com/sricharan92" class=twitter>twitter</a></span></div><div class="photo copresenter"><img src="http://2.gravatar.com/avatar/dde56ce7a6860df43fc2eee1336552dc?size=420"><h3>Jiren Patel</h3><span class=links><a href="https://github.com/jiren" class=github>github</a></span></div><div class="wrap copresenter">&nbsp;</div><h3>From Ruby to English</h3><p>Its often said that ""Ruby is a human language"". It should then be easy to transition from Ruby to English!</p><p>Imagine a weather report saying ""Pune has an equitable climate of 24 degrees Celsius as opposed to extremely cold weather in Simla, which is as low as 3 degrees Celsius"". That looks much better than ""Pune has a temperature of 24 degrees Celsius. Simla has a temperature of 3 degrees Celsius"", right?</p><p>Natural Language Generation is the art of generating paragraphs and sentences from structured data. No - this does not use any templates for rendering but generates grammatically correct english sentences. We have developed ""nlg"", a ruby gem which does exactly this. This gem can be used in any stand-alone ruby program or put straight into ActiveModel and can even process JSON schema.</p><p>In this talk we shall discuss briefly what is Natural Language Generation (this is different from Natural Language Processing!!). We shall then highlight some use-cases, discuss ""Entities"" (the sentence generators) and then play around with generating some paragraphs from some live data!</p></article>' },
	{ speaker: "Tejas Dinkar and Jasim A Basheer", task: "Sandboxing Ruby Code - Lessons from the battlefield",  date: "24/03/2012", time : "1215 - 1300", description : '<article><div class=photo><img src="images/tejas.jpeg"><h3>Tejas Dinkar</h3><span class=links><a class=twitter href="https://twitter.com/#!/tdinkar">twitter</a></span></div><div class="photo copresenter"><img src="images/jasim.jpeg"><h3>Jasim A Basheer</h3><span class=links><a class=twitter href="https://twitter.com/#!/jasim_ab">twitter</a><a class=website href="http://www.jasimabasheer.com/">website</a></span></div><div class="wrap copresenter">&nbsp;</div><h3>Sandboxing Ruby Code - Lessons from the battlefield</h3><p>Sometime you want to run untrusted code on your server. Our expirements with sandboxing started with the creation of a hosted continuous integration service called Goldberg Pro, and then continued on with<a href="http://RubyMonk.com" title="RubyMonk - Interactive ruby tutorials to learn Ruby">RubyMonk</a>, which needed to prevent users from performing potentially dangerous operations in code they submitted via the website.</p><p>Here we discuss various system level, language level, and application level techniques that we tried (and we plan to try in the future) to ensure that the user does not bring down the entire system. Some techniques we plan to speak about include LXC (Linux Containers), Chroots, Ruby\'s SAFE levels, Kernel level limits, SELinux and PTrace.</p><p>Some of our learnings are published in the form of the Open Source ruby gem -<a href="https://github.com/c42/secure">secure</a>.</p></article>' },
	{ speaker: "", task: "Lunch",  date: "24/03/2012", time : "1300 - 1400" },
	{ speaker: "Ajey Gore", task: "Everything Ruby",  date: "24/03/2012", time : "1400 - 1445", description : '<article><div class=photo><img src="images/ajey.jpeg"><h3>Ajey Gore</h3><span class=links><a href="https://twitter.com/#!/ajeygore" class=twitter>twitter</a><a href="http://ajeygore.in" class=website>website</a></span></div><div class=wrap>&nbsp;</div><h3>Everything Ruby</h3><p>Compared to 2 - 3 years back today\'s eco-system around IT Operations has changed significantly, The definitive responsibility line between infrastructure administrators and developers has been blurring continuously. We have experienced that developers want to experience same level of ease as its publicly available in form of commodity hardware, computing, monitoring, deployment and source control systems. Lots of IT organizations still go through lot of manual process for provisioning, monitoring, analysis, setup and do not take advantage new age tools. We had these issues in our existing environment as well. WE have been managing our servers using new age configuration management tools but thats not sufficient as we did not bring that advantage to our end users. Earlier 2011, we started working on an internal project called DevCloud - with sole aim to provide self serving / signup environments like popular SCM systems or cloud provider or monitoring system.</p><p>The reason I have title ""Everything Ruby"" - because we choose to use Ruby every where for Ops world and as well as Dev world. We used puppet to manage our system, mcollective to create work flows, how did we use open source technologies to create our own enterprise private cloud based on OpenStack and OpenVZ/LXC containers - how did we create build system which scales on demand. In this talk I will be showcasing that how did we manage our infrastructure using Puppet and mcollective, how did we create self serving and self sign up environment. What are the challenges for adminsitrators for moving to Ruby and how developers can take advantage of existing OpenSource toolset built around Ruby to explore deployment patterns, scaling on demand, fireup more containers if required - In summary - how can you create a private cloud for your end users which provides end to end development ecosystem on demand.</p><p>I will be showcasing live demo, puppet recipes, mcollective agents and workflows, different virtualization technologies and containers and how everything works when knit together with Ruby, creates a fine example for well managed IT infrastructure. I have been blogging about this in my four part series at<a href="http://ajeygore.in" title="Code, Deploy, Automate! - Ajey Gore\'s thoughts on continuous delivery">ajeygore.in</a></p></article>' },
	{ speaker: "Arpan CJ", task: "Responsive Design: now 90% easier with SASS!",  date: "24/03/2012", time : "1400 - 1445", description : '<article><div class=photo><img src="images/arpancj.jpg"><h3>Arpan CJ</h3><span class=links><a class=twitter href="https://twitter.com/#!/arpancj">twitter</a></span></div><div class=wrap>&nbsp;</div><h3>Responsive Design: now 90% easier with SASS!</h3><p>Most of us, when designing a website or a webapp, design for a specific size and resolution. But today, users access the site from various devices including their laptops, tablets and smart phones. ""Responsive Design"" is a solution to optimize and display content for a variety of screen sizes and resolutions.</p><p>Responsive design is quite simple, all you need is a flexible layout grid, flexible images, and CSS media queries. All right, it\'s not that simple! It\'s a downright nuisance trying to figure out the precise percentages required for the width of a container, the margins, the padding ... and once you\'re done, you still need to do it all over again for a different resolution!</p><p>But it does not have to be tough. SASS takes care of all the heavy lifting and calculations, so that you can focus on what matters, getting your work done. I\'ll show you how you can use the new tools introduced in Rails 3.1 to easily implement a responsive design that works across devices (smartphone, tablet and laptop). Along the way, I\'ll also cover current best practices and explain the reasoning behind them.</p></article>' },
	{ speaker: "Steven Deobald", task: "Clojure is my favourite ruby",  date: "24/03/2012", time : "1445 - 1530", description : '<article><div class=photo><img src="images/steven.jpeg"><h3>Steven Deobald</h3><span class=links><a class=twitter href="https://twitter.com/#!/deobald">twitter</a><a class=website href="http://www.deobald.ca/">website</a></span></div><div class=wrap>&nbsp;</div><h3>clojure is my favourite ruby</h3><p>Riffing on Michael Fogus\'s commentary in his post ""All in the family"" (April 6, 2011) where he questions the classification of languages into families, this talk will discuss why those qualities which make Ruby appealing to us might make Clojure even more so. Broadly, I\'ll discuss language features and idioms in Clojure as they relate to Ruby, contrast of their respective programming environments, and periodically touch on harmonious aspects between the two.</p><p>Within the scope of language, Ruby gives the imperative programmer a toe-dip in the vast pool of functional programming. I\'ll explore the power provided by purely functional language constructs in a language with true higher-order functions as they extend the basic FP-like constructs we already know and love in Ruby. Because Clojure is (optionally) functional it contains unique immutable concurrency constructs I will briefly introduce, compare to Ruby\'s available concurrency strategies, and then demonstrate as data types imported into a JRuby program. On the more aesthetic side of the equation, I\'ll compare declarative Ruby programming (which often necessitates metaprogramming) to declarative Clojure code and use that as a segue into a brief overview of Clojure\'s simple and powerful metaprogramming facilities. This portion will include a conversation regarding the ""when do I turn this Ruby hash into a class?"" dilemma and how that question is answered at the language level by Clojure.</p><p>Moving on to programming environments, the conversation will continue with a comparison of CoffeeScript and ClojureScript: a quick overview of their respective implementations and the interesting consequences of ClojureScript\'s Clojure-subset status (i.e. Clojure macros are available in ClojureScript, shared client/server code, etc.). Second, exploratory programming in IRB vs. the Clojure REPL, with emacs ""live coding"" and ClojureScript REPL-in-the-browser demonstrations. The last topic will cover build and deploy environments, where Rake and Rubygems still have a distinct maturity and usability advantage over the present Clojure alternatives, Leinigen/Cake and Clojars.</p></article>' },
	{ speaker: "Habibullah Pagarkar and Chandan Jog", task: "Sending out an SMS: Ruby Stings!",  date: "24/03/2012", time : "1445 - 1530", description : '<article><div class=photo><img src="https://si0.twimg.com/profile_images/1458191599/184090_602798385095_5410810_34451773_7405707_n_reasonably_small.jpg"><h3>Habibullah Pagarkar</h3><span class=links><a class=twitter href="https://twitter.com/#!/mhabibp"></a><a class=website href="http://habib.posterous.com/">website</a></span></div><div class="photo copresenter"><img src="images/chandan.png"><h3>Chandan Jog</h3><span class=links><a class=twitter href="https://twitter.com/#!/jog_chandan">twitter</a><a class=website href="http://chandanjog.blogspot.com/">website</a></span></div><div class="wrap copresenter">&nbsp;</div><h3>Sending out an SMS: Ruby Stings!</h3><p>Building a SMS based application involves dealing with 3rd party service providers and mobile network operators. As you can imagine, this is time consuming and, given the cost structures in place, expensive. For quick prototypes it isn\'t worth the hassle. While waiting for your own short code, only hope would keep you together. However, we\'ve seen the tremendous power and reach of SMS - especially for applications around a social theme at ThoughtWorks\' Social Impact Program.</p><p>EzSMS is our attempt at providing a SMS gateway that can be setup in minutes. Of course it runs on Ruby! All you need is an Android powered phone, a sim-card and data access. Thus it is very easy to prototype your apps. Gone are the days when we, Android owners, would feel alone. With Android activations outpacing births it seems that a hundred billion phones have found homes.</p><p>In this talk we\'ll explore Ruboto and JRuby and quickly explain how to create a simple Android application. We\'ll explore the internals of our application and then compare Ruboto and other Ruby flavoured mobile app development frameworks. We\'ll also apologize to Sting for mishearing his song<a href="http://www.youtube.com/watch?v=ObL3L6MRvN4">"Message in a bottle"</a>.</p></article>' },
	{ speaker: "Arun Tomar", task: "Unity",  date: "24/03/2012", time : "1530 - 1615", description : '<article><div class=photo><img src="https://twimg0-a.akamaihd.net/profile_images/1201659826/DSC_0002.JPG"><h3>Arun Tomar</h3><span class=links><a class=twitter href="https://twitter.com/#!/aruntomar">twitter</a><a class=website href="http://www.linuxguy.in/">website</a></span></div><div class=wrap>&nbsp;</div><h3>Unity</h3><p>Today organizations, including SMEs, have multiple internet connections (ISP) for failover capabilities. However, they can use only one of them at a time. We smelt an opportunity here and realized that it would be really helpful and cost effective if we could use all the internet connections simultaneously - balance the load over different connections and also have a failover incase any ISP goes down. This increases the internet bandwidth and provides failover - we get best of both worlds! There are devices which do this but they are limited only to 2 ISPs and are also expensive and picky about the internet connection (only lease lines).</p><p>We have built the gem ""isp-unity"" which is a gem for managing multiple heterogeneous (broadband, wifi, lease line, data-card etc) connections from multiple internet providers. This also has advanced features like quality of service (QoS) for scheduling, prioritizing of traffic and managing bandwidth.</p><p>How did we do this? The solution exists in linux kernel but it\'s very hard to configure and manage and requires lot of technical and networking knowledge. We\'ve built a gem that makes all this very easy. Using chef, we plans to deploy this as an ""Enterprise Gateway Solution"" along with other necessary services like proxy, dns, firewall, vpn, ldap etc, replacing or complementing existing appliances/routers.</p></article>' },
	{ speaker: "Sandip Ransing and Shailesh Patil", task: "VoIP on Rails in India",  date: "24/03/2012", time : "1530 - 1615", description : '<article><div class=photo><img src="http://m3.licdn.com/media/p/4/000/13c/3c3/22c2961.jpg"><h3>Shailesh Patil</h3><span class=links><a class=twitter href="https://twitter.com/#!/patilshailesh">twitter</a><a class=website href="http://www.linkedin.com/in/shaileshspatil">website</a></span></div><div class="photo copresenter"><img src="http://m3.licdn.com/media/p/1/000/00f/2ae/194e10f.jpg"><h3>Sandip Ransing</h3><span class=links><a href="https://twitter.com/#!/sandipransing" class=twitter>twitter</a><a href="http://www.funonrails.com/" class=website>website</a></span></div><div class="wrap copresenter">&nbsp;</div><h3>VoIP on Rails in India</h3><p>In India, VoIP is not commercially legalized. You cannot terminate a VoIP call to a PSTN or mobile! What does that mean for Indian clients? This talk is very relevant for most companies having a support center, a call center or a helpline in India, since infrastructure costs for the traditional way are sky high! This talk is about how we built a hosted Rails solution for SMEs in India to serve out-bound and in-bound calls (including IVR) in India.</p><p>We used Asterisk (the software EPABX) and Adhearsion (a Ruby framework) to build a fully-featured framework for supporting VoIP over a PRI line with QoS integrated. This is not only legal but also a commercially cost-effective solution. In this talk we are going to see the live demo of how we can did this. It includes:</p><ul><li>Managing Audit logs of each call.</li><li>Recording calls, checking the audio logs, finding anomalies.</li><li>QoS Resource utilization - we can verify that all the calls were for business, find out calls which were private etc. and validate the performance of a Tele-caller!</li><li>Routing of each call to specific extensions of Tele-callers.</li><li>Playing sound files for each call function (busy, ringing, dropped)</li><li>Click to call from the web browser using twinkle</li></ul><p></p></article>' },
        { speaker: "", task: "Break",     date: "24/03/2012", time : "1615 - 1645" },
        { speaker: "", task: "Lightning Talks",     date: "24/03/2012", time : "1645 - 1800" },


        { speaker: "Ajey Gore", task: "Welcome",     date: "25/03/2012", time : "0930 - 1000" },
        { speaker: "Mikel Lindsaar", task: "Keynote",     date: "25/03/2012", time : "1000 - 1045", description : '<article><div class=photo><img src="images/mikel-lindsaar.jpg"><h3>Mikel Lindsaar</h3><span class=links><a href="http://twitter.com/#!/raasdnil" class=twitter>twitter</a></span></div><div class=wrap>&nbsp;</div><h3>Keynote - How to win</h3><p>After running his consultancy for several years and helping many other businesses succeed, Mikel has interesting and practical insights on how to improve your game, whatever it might be, from being a ruby development consultant, running a development shop, or being part of a larger in house development team. This talk will give you ideas and tools on how to increase your value and therefore your pay packet.</p></article>' },
        { speaker: "", task: "Break",     date: "25/03/2012", time : "1045 - 1115" },
        { speaker: "Darshan Subhash Karandikar", task: "JRuby on Rails - RoR's Simplicity Meets Java's Class: A Case in Point for a Highly Productive and Scalable Enterprise Application Development Platform with JRoR",     date: "25/03/2012", time : "1115 - 1200", description : '<article><div class=photo><img src="images/darshan.jpg"><h3>Darshan Karandikar</h3><span class=links><a class=twitter href="https://twitter.com/#!/dkarandikar">twitter</a><a class=website href="http://in.linkedin.com/in/darshankarandikar">website</a></span></div><div class=wrap>&nbsp;</div><h3>JRuby on Rails - RoR\'s Simplicity Meets Java\'s Class: A Case in Point for a Highly Productive and Scalable Enterprise Application Development Platform with JRoR</h3><p>When we started to architect an enterprise micro-blogging solution as part of the internal collaboration platform for a large customer (henceforth referred by dummy name \'CustCollab\'), the next immediate question was "Which web application development framework to use?". Simplicity, productivity, ability to deliver high quality of service (QoS), especially performance and scalability (can\'t ignore that when you\'re talking about 200,000+ users and expect high concurrency!), and alignment with CustCollab\'s technology stack were our top criteria for framework selection. After considerable research on state-of-the-art, we zeroed in on 2 frameworks – 1) "Ruby on Rails" (RoR) for its super simplicity and productivity and 2) "Java Enterprise Edition" (JEE) for its obvious "enterprise" class, high QoS and greater alignment with CustCollab\'s technology stack. But we just couldn\'t rule out either one, since each framework had been proven to deliver qualities not so proven in the other framework. Naturally, we started dreaming of a framework which can deliver best of both worlds! And in reality, there lived such a framework – \'JRuby on Rails\'!</p><p>JRuby is the Java implementation of the Ruby programming language. It enables calling Ruby components from Java code and vice versa, thus giving Ruby, and hence RoR, the power of Java Virtual Machine (JVM). In this presentation we focus more on our experience of how JRuby, and hence JRoR, can do a fantastic job of delivering best of RoR and JEE worlds to an enterprise application w.r.t multiple \'quality of service\' attributes like scalability (parallel processing, Garbage Collection, compilation, caching, advanced database connection pooling etc.), extensibility, productivity as well as constraints such as \'alignment with existing/preferred technology stack\' etc.</p><p>With the help of the real world \'CustCollab Micro-blogging\' case in point, this presentation highlights the constraints and tradeoffs involved in deploying RoR in a typical large scale enterprise environment such as that of CustCollab, and demonstrates how the distant, isolated worlds of RoR and JEE can synergize with the help of the JRuby bridge to result in a highly productive and scalable enterprise application development platform. Without the psychological comfort of a long list of well known, time tested large JRuby/JRoR implementations or availability of/access to any large scale enterprise JRuby/JRoR case study, within or outside TCS/CustCollab, which could have decisively supported the early adaption of JRuby in CustCollab, our decision to build CustCollab\'s enterprise micro-blogging platform on JRoR relied on our time tested confidence on Java/JEE, RoR\'s assurance of simplicity and productivity, and the faith on JRuby core developers\' promise of synergizing the Java and Ruby worlds. And we are pleased to say that JRuby fulfilled its promise!</p><p>After successful deployment of CustCollab Micro-blogging platform on JRoR, it is time to share our experience on the JRuby capabilities and the new possibilities. This presentation gives access to a real world JRuby case study of a large scale enterprise implementation. We hope it encourages others to adapt JRuby as well as helps other early adapters to support their choice of JRuby. After all, the JRuby improvisation is well capable of delivering the best of both Java and Ruby worlds, and hence deserves greater attention in the enterprise world!</p></article>' },
        { speaker: "Chang Sau Sheong", task: "Sex, Money and Evolution - Simulation and Data Analysis with Ruby and Rails",     date: "25/03/2012", time : "1115 - 1200", description : '<article><div class=photo><img src="images/user_blank.png"><h3>Chang Sau Sheong</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>Sex, Money and Evolution - Simulation and Data Analysis with Ruby and R</h3><p>This talk describes a series of agent-based modeling simulations with Ruby, where the data is collected to be analysed with a set of R scripts. The simulations model an artificial society in which matters on economic inequality, the environment and evolution are evaluated.</p></article>' },
        { speaker: "Gautam Rege", task: "Push it push it some more",     date: "25/03/2012", time : "1200 - 1245", description : '<article><div class=photo><img src="https://si0.twimg.com/profile_images/366182874/gautam_reasonably_small.jpg"><h3>Gautam Rege</h3><span class=links><a href="https://twitter.com/#!/gautamrege" class=twitter>twitter</a></span></div><div class=wrap>&nbsp;</div><h3>Push it push it some more</h3><p>Push notifications for web applications can change the way web applications behave - Real time updates, chat services, stock alerts, etc. This was achieved earlier using XMPP, polling or long polling is sometimes too tedious, cumbersome or complicated for Do It Yourself approach.</p><p>Welcome Websockets, node.js, backbone.js and Redis pubsub for different ways to push notifications. This talk is about how we use all these in Ruby. I will also briefly touch upon Pusher.com - the online API that can do this on production sites without any setup required! A Live demo is in the offing!</p></article>' },
        { speaker: "Niranjan Prabhakar Sarade", task: "What lies beneath the beautiful code ?",     date: "25/03/2012", time : "1200 - 1245", description : '<article><div class=photo><img src="images/user_blank.png"><h3>Niranjan Sarade</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>What lies beneath the beautiful code?</h3><p>Ruby is a pure object oriented and really a beautiful language to learn and practice. But most of us do not bother to know or care about what happens behind the scene when we write some ruby code. Say creating a simple Array, Hash, class, module or any object. How does this map internally to C code ?</p><p>Ruby interpreter is implemented in C and I will talk about the Interpreter API that we as ruby developers should be aware of. The main purpose of the presentation is to understand the efforts and complexity behind the simplicity offered. I would also like to touch upon the difference in implementation of some core data structures in different ruby versions. Having known a part of C language implementation behind Ruby, I would also like to throw some light upon when and why would we need to write some ruby extensions in C.</p><p>Who knows in future someone can come up with one more pure object oriented and even more simpler language written on top of Ruby ? Until that time, let\'s praise the existing backstage artist behind a beautiful Ruby drama !</p></article>' },
        { speaker: "", task: "Lunch",     date: "25/03/2012", time : "1245 - 1330" },
        { speaker: "Ravindra R. Jaju", task: "JVM Polyglot Programming: JRuby FTW!",     date: "25/03/2012", time : "1330 - 1415", description : '<article><div class=photo><img src="images/user_blank.png"><h3>Ravindra R. Jaju</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>JVM Polyglot Programming: JRuby FTW!</h3><p>The Ruby language has a very robust and high-performance implementation on the JVM - JRuby. While JRuby by itself brings a lot of (implicit) benefits of the JVM to the Ruby world, the rest-of-the-world isn\'t without its share of excitement!</p><p>Scala, Clojure, Mirah et al have a host of features which make them very expressive and powerful for certain classes of problems. For example, type-safety combined with the compilation phase bring in performance improvements. Or immutability allows for easy-to-reason-about concurrent implementations. Lazy evaluation allows for easier expression and solution of still another class of problems. And for situations requiring you to handle asynchronous situations, there are Actor libraries.</p><p>With JRuby, there are two ways to leverage the benefits of these languages. Since everything boils down to classes (and typically, JAR-libraries), one can directly call into these libraries with Ruby\'s syntactic sugar-coating as well as the smooth-as-butter maven integration! And for those situations that are expressed better in these other languages, one can embed that code directly in (J)Ruby and just enjoy the perks of being on the JVM!</p><p>In this talk, I will present some initiating material on JRuby\'s JVM basis, and then proceed to show how JRuby projects can leverage the benefits of the new, shiny JVM languages that have arrived on the scene.</p></article>' },
        { speaker: "Thorben Schroder", task: "Improving Inter Service Communication",     date: "25/03/2012", time : "1330 - 1415" },
        { speaker: "Rocky Jaiswal and Arun Agrawal", task: "When Ruby Meets Java - The power of Torquebox",     date: "25/03/2012", time : "1415 - 1500", description : '<article><div class=photo><img src="https://si0.twimg.com/profile_images/1139158474/rocky_jaiswal_sq_reasonably_small.png"><h3>Rocky Jaiswal</h3><span class=links><a class=twitter href="https://twitter.com/#!/whatsuprocky">twitter</a><a class=website href="http://rockyj.in/">website</a></span></div><div class="photo copresenter"><img src="https://si0.twimg.com/profile_images/1260688649/182896_10150152976369954_560559953_8324860_4599885_n_reasonably_small.jpg"><h3>Arun Agrawal</h3><span class=links><a href="https://twitter.com/#!/arunagw" class=twitter>twitter</a><a href="http://agrawalarun.com/" class=website>website</a></span></div><div class="wrap copresenter">&nbsp;</div><h3>When Ruby Meets Java - The power of Torquebox</h3><p>We all know the strengths of JRuby. It utilizes the scalability of JVM and provides real OS threads to Ruby. However, there are very few application servers that marry the expressiveness of JRuby with the power of Java. Torquebox is an application server which build upon the JBoss Server and provides enterprise features in Ruby.</p><p>In this session we will demonstrate a working application on Torquebox, and also demonstrate Torquebox features such as long running services, messaging and caching with live examples. We believe, these features offer the missing link between Ruby and enterprise integration. We will also offer some insight into the scalability / clustering features of Torquebox.</p></article>' },
        { speaker: "Karunakar", task: "Large scale Ruby project, challenges and Pitfalls.",     date: "25/03/2012", time : "1415 - 1500", description : '<article><div class=photo><img src="images/user_blank.png"><h3>Karunakar</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>Large scale Ruby project, challenges and Pitfalls.</h3><p>I am planning to talk on this topic because this topic is very useful for most us and I will basically talk from my experience of coding for Large ruby on rails project, which has approx. 35 engineers working at the code base same time.</p><p>My plan is to talk about managing large scale projects and test suite of a large project and how to not let the technical debt run too high.Managing large scale projects code quality, scalability and running Test Suite of a large Rails project can be a challenge. Getting metrics, running selenium with cucumber can eat up lot of time.</p><p>I cover some of the below topics,</p><ul><li>How to maintain the code quality between the developers on large scale projects</li><li>Paring environments</li><li>Code reviews</li><li>Maintaining the test suite , etc</li></ul><p></p><p>We also cover below libraries</p><ul><li><strong>Borg:</strong>distributed Test Suite runner for Rails, using Eventmachine and Redis) which is developed by me</li><li><strong>New Relic:</strong>a performance management system</li></ul><p></p></article>' },
        { speaker: "Abhishek Parolkar", task: "Ruby for the soul of Big Data nerds",     date: "25/03/2012", time : "1500 - 1545", description : '<article><div class=photo><img src="images/abhishek-parolkar.jpg"><h3>Abhishek Parolkar</h3><span class=links><a href="https://twitter.com/#!/parolkar" class=twitter>twitter</a></span></div><div class=wrap>&nbsp;</div><h3>Ruby for the soul of Big Data nerds</h3><p>The term Big Data is associated to anything where scale of the data is part of the problem. Today\'s internet companies (Youtube,Facebook,ViKi etc) face challenges surrounding analysis and management of this data. In this talk I am going to show you how myself and others have solved these problems and built analytics systems all with Ruby and related technologies.</p></article>' },
        { speaker: "Matthew Kirk", task: "'method_missing' Should be Missing",     date: "25/03/2012", time : "1500 - 1545", description : '<article><div class=photo><img src="images/user_blank.png"><h3>Matthew Kirk</h3><span class=links></span></div><div class=wrap>&nbsp;</div><h3>\'method_missing\' Should be Missing</h3><p>Meta programming can be disastrous. While it is cleaner in many cases, it must be used with prudence. This talk will cover the issues that arise from irresponsible meta-programming like overuse of method_missing, ""monkey patching"", and eval.</p><p>\'method_missing\' can be used to create methods on the fly. What people don\'t realize is that method_missing is called when you typed in an error, and you may define error handling code for this. While it may be easy to create dynamic methods this way, those methods are never actually defined and therefore cannot be documented properly. Instead I will explain the use of define_method which is much more suitable in 80% of cases.</p><p>Monkey Patching, or adding methods to an existing class, is also dangerous. Being able to override functions like ""freeze"" is extremely dangerous. Instead I suggest a better way of overriding methods on single objects instead of classes.</p><p>Eval which is also prevalent in javascript is a major offender. Being able to say eval(""@#{variable}"") in most cases is due to someone not reading the existing methods out there. Eval also decreases performance substantially. We will look at some bad examples of eval and why you should never use this.</p><p>Join me on a meta-programming safari where we will learn responsible meta-programming</p></article>' },
        { speaker: "", task: "Break",     date: "25/03/2012", time : "1545 - 1615" },
        { speaker: "", task: "Closing Video Keynote",     date: "25/03/2012", time : "1615 - 1700" },
        { speaker: "", task: "Closing and Networking",     date: "25/03/2012", time : "1700 - EOD" }

    ]
});

