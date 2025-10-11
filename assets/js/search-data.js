// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-scientists-oscaward-for-all-in-meta-bcg-corona",
        
          title: "[Scientists] OSCAward for ALL-IN-META-BCG-CORONA",
        
        description: "Here I share the story of the project that motivated me to nominate it, see the nomination text below. Lessons learned in terms of the unique features of the ALL-IN approach appeared in an updated (V2) version of the ALL-IN paper: ter Schure J and Grünwald P. ALL-IN meta-analysis: breathing li...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__OSCAward_for_ALL-IN-META-BCG-CORONA-thumbnail";
          
        },
      },{id: "post-scientists-what-i-tried-to-achieve-with-a-researchequals-collection",
        
          title: "[Scientists] What I tried to achieve with a ResearchEquals collection",
        
        description: "How I did the best I could and spent a large amount of time, still gave up before fully completing it, am happy I tried it, happy I gave up, and happy with the result. ResearchEquals is a research publishing platform that is used by open science enthusiasts like myself. This blog post is...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__What_I_tried_to_achieve_with_a_ResearchEquals_collection";
          
        },
      },{id: "post-peers-e-values-have-a-wikipedia-page",
        
          title: "[Peers] E-values have a wikipedia page",
        
        description: "The research field I work in, that of anytime-valid statistics and e-values, now has a Wikipedia page! [https://en.wikipedia.org/wiki/E-values](https://en.wikipedia.org/wiki/E-values)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__E-values_have_a_wikipedia_page";
          
        },
      },{id: "post-scientists-avoidable-research-waste-caused-by-data-transfer-agreements",
        
          title: "[Scientists] Avoidable research waste caused by data transfer agreements",
        
        description: "Early summer of 2020, eight trials agreed to collaborate in a prospective meta-analysis and keep a live account of the pooled results. Each was interested in the question whether the BCG vaccine, originally develop...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Avoidable_research_waste_caused_by_data_transfer_agreements";
          
        },
      },{id: "post-peers-dataviz-matters-update-to-my-ph-d-thesis",
        
          title: "[Peers] Dataviz matters! Update to my Ph.D. thesis",
        
        description: "The final question at my Ph.D. defense was by prof. Richard Gill. He saw an easy improvement to the data visualization in the introduction of my Ph.D. thesis. Not that I was too happy about it myself. The main point of the figures was that sampling distributions and p-values depend a lot on the sample size (the number of heart attacks n, in the example) – you can only visualize them in this way given a sample size or stopping rule. That was still clear from the figure, but it was very distracting and counterintuitive that the distributions in the figure shrank, for which I had to add a long caption below Figure 1 of my Ph.D. thesis. It was October 2021, and I had set the deadline for my Ph.D. thesis to November 1st. I simply did not see the easy fix. Thanks to Richard, my Ph.D. now has better figures. Also thanks to Nicos Starreveld, who wrote a very nice article about my Ph.D. thesis that reuses the improved figure. The updated Ph.D. thesis can be found in the Amsterdam UMC repository. In this blogpost I also post the improvements to Figure 2 and Figure 3 that follow.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Dataviz_matters!_Update_to_my_Ph_D_thesis";
          
        },
      },{id: "post-general-infographic",
        
          title: "[General] Infographic!",
        
        description: "Het is echt een hardnekkig fabeltje. Zelfs tijdens een sessie over lawines beweerde een spreker uit een Alpenland: “Jullie lopen meer risico op de autobahn naar de bergen toe, dan in de sneeuw daar!”Hoe gevaarlijk is skitoeren nu echt als je het vergelijkt met autorijden? Op de VVSOR blog publiceerde ik een infographic die dat uitlegt.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Infographic_";
          
        },
      },{id: "post-general-great-summary-article-about-my-ph-d-thesis",
        
          title: "[General] Great summary article about my Ph.D. thesis",
        
        description: "Nicos Starreveld writes a fantastic series of articles in the member&#39;s magazine of the KWG (&#39;Koninklijk Wiskundig Genootschap&#39;, Royal Dutch Mathematical Society). He reads recent Ph.D. theses with great care and interviews Ph.D. candidates in mathematics that are preparing for their defense. The series is called &#39;In Defense&#39;/&#39;In de Verdediging&#39; and appears (mostly) in English. This is an article that discusses the work of my current colleague dr. Birgit Sollie and this is an article in the series on the work of my former colleague dr. Yfke Dulek. I especially like the description of mathematical work as tirelessly exploring how something can be done, resulting in constructing an impossibily proof that also makes you happy.I was very honored for my Ph.D. thesis to be featured in the piece that appeared in December. You can read it here. It provides a great summary of the main themes of my Ph.D. thesis: research waste, accumulation bias, and of course: ALL-IN meta-analysis",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Great_summary_article_about_my_Ph.D._thesis";
          
        },
      },{id: "post-peers-best-oral-presentation-evidence-based-research",
        
          title: "[Peers] Best Oral Presentation: Evidence-Based Research",
        
        description: "I received an award for a talk!The goals of EBR – or evbres: Evidence-Based Research – have been central to the work in my Ph.D. thesis on ALL-IN meta-analysis. During the EBR conference I argued that these new statistical methods could be the future of EBR, and received a Best Oral Presentation award for it. (Here&#39;s the Twitter announcement.)The great thing about online conferences is that you can still watch the presentation on the EBR conference&#39; Youtube channel.Read more about Evidence-Based Research on the EVBRES website.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Best_Oral_Presentation__Evidence-Based_Research";
          
        },
      },{id: "post-general-defense-title-and-signature",
        
          title: "[General] Defense, title and signature!",
        
        description: "On April 7th 2022, I successfully defended my Ph.D. dissertation, received my &quot;Dr.&quot; title, and signed the famous &quot;Zweetkamertje&quot; of Leiden University!Many were there with me! I want to thank my supervisors Peter Grünwald and Daniel Lakens and the reading committee that evaluated my dissertation: Jelle Goeman, Joanna in &#39;t Hout, Glenn Shafer, and Alex Sutton. It was a very inspiring discussion following the questions from the opposition committee:  Glenn Shafer, Joanna in &#39;t Hout, Henri van Werkhoven, Jelle Goeman, Hein Putter, and Richard Gill.Everything went super smooth, thanks to my wonderful paranimfs Laura Schut and Marnick van de Zande. I really couldn&#39;t have done it without them!And I want to thank my family, friends, colleagues, and CWI for their support. This was a truly great day! A news article about my defense can be found on the Leiden University website (in Dutch) and on the CWI website (in English). The complete dissertation can be found in the Leiden University Repository and the CWI Repository.I did not want to share photos unasked, but my paranimfs insisted that this diploma photo-op was made for posting:",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Defense__title_and_signature_";
          
        },
      },{id: "post-peers-my-propositions",
        
          title: "[Peers] My propositions!",
        
        description: "Photo: Leiden Academiegebouw Ten propositions, following Leiden tradition, with at least four about my dissertation, four about my field and at most four personal statements. They do not appear in the Ph.D. dissertation itself, as is custom, but on a separate sheet in the printed book. So hey are easily lost. Here, I try to make them easy to find!Propositions Ph.D. defenseJudith ter Schure – ALL-IN meta-analysis",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__My_propositions_";
          
        },
      },{id: "post-all-printed-and-dedicated-ph-d-dissertation",
        
          title: "[All] Printed and dedicated Ph.D. dissertation",
        
        description: "A very pretty collection of books. It is great to finally have the copies of your printed Ph.D. thesis in your hands! This is a link to the pdf of my dissertation: Judith ter Schure - ALL-IN meta-analysis.pdfI&#39;ve dedicated the work to Glenn Shafer, Stephen Senn, Peter Grünwald, and Daniel Lakens. Three of them are obvious, given their guidance during my Ph.D. research. One is less obvious, as I&#39;ve also dedicated my Ph.D. dissertation to Stephen Senn for professional guidance! Even though we&#39;ve hardly ever met, his books and blogs were essential in my growing appreciation for clinical trial statistics. And it thought me another valuable lesson: our profession needs storytellers that can express its beauty, especially in The Netherlands, where hardly any new statisticians prepare for a career in clinical trials.Here I post the chapter that contains my Curriculum Vitae, so it has the necessary dates and distinctions, but also how I came to love statistics, writing, and clinical trials.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/All__Printed_and_dedicated_Ph.D._dissertation";
          
        },
      },{id: "post-all-all-in-meta-analysis-i-submitted-my-ph-d-dissertation",
        
          title: "[All] ALL-IN meta-analysis: I submitted my Ph.D. dissertation!",
        
        description: "Foto credits:     Marjolein van Sommeren (conceptualization), Kilian Lafleur (digital edit), Rinske ter Schure (photographer), Thomas de Jong (photographer), Elsa ter Schure (photographer), Arnold ter Schure (encouragement)I submitted my Ph.D. dissertation to the committee! The title? ALL-IN meta-analysisIntroduction.pdfChapter 1 is based on a paper that is under review at F1000 and available on ArXiv:Judith ter Schure and Peter Grünwald. ALL-IN Meta-analysis: Breathing Life into Living Systematic Reviews. arXiv:2109.12141. 2021. Link.Chapter 2 is based on a paper that is available on ArXiv:Judith ter Schure, Muriel F. Pérez-Ortiz, Alexander Ly and Peter Grünwald. The Safe Logrank Test: Error Control under Continuous Monitoring with Unlimited Horizon.arXiv:2011.06931. 2020. Link.Chapter 3 is based on a paper that is published at F1000:Judith ter Schure and Peter Grünwald. Accumulation Bias in Meta-analysis: The Need to Consider Time in Error Control [version 1; peer review: 2 approved].F1000Research, 2019. Link.Chapter 4 is based on a blogpost at The Replication Network:Judith ter Schure. Accumulation Bias: How to Handle It ALL-IN. The Replication Network. 2020. Link.Chapter 5 is based on a blogpost at The Replication Network:Judith ter Schure and Peter Grünwald. Accumulation Bias: How to Handle It As a Bayesian. The Replication Network. 2022. Link (pdf).Chapter 6 is based on an article that is published in STAtOR, the society magazine of the Netherlands Society for Statistics and Operations Research VVSOR:Judith ter Schure, Peter Grünwald and Alexander Ly. Pandemic Preparedness in Data Sharing: Lessons Learned from Collaborating in a Live Meta-Analysis. STAtOR, 2021, 22.4: 47-52. Link.Discussion &amp; Bibliography.pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/All__ALL-IN_meta-analysis__I_submitted_my_Ph.D._dissertation_";
          
        },
      },{id: "post-peers-testing-by-betting",
        
          title: "[Peers] Testing by betting",
        
        description: "A year ago, on September 9th 2020, we experienced a first moment for our new &#39;statistical paradigm&#39;. Professor Glenn Shafer presented Testing by betting at the Royal Statistical Society (RSS) discussion session. A recording can be found here on YouTube. My colleagues at CWI and I were lucky that the Covid situation at the time allowed us to attend the virtual discussion session together while physically in the same room. You can see us for a short moment in the video at [1:19:41] with me in yellow.Since the beginning of my Ph.D., the group of researchers worldwide has grown that contributes to novel statistical techniques based on betting scores, e-values, and test martingales. The RSS discussion features, for example, dr. Aaditya Ramdas from Carnegie Mellon University [1:12:36 in the video], whose work was not familiar to us, not even to my supervisor, when I started my Ph.D. Just like Shafer and Vovk, Ramdas and his collaborators show the great mathematical results of the approach, and I like his angle in this RSS discussion: it creates new statistical possibilities that are impressive, also if you do not see the value of thinking about statistics in the language of betting. For me, however, that language of betting is the most important part because statistics needs to improve its track record of communication.Just as Professor Shafer, my supervisor Peter Grümwald and I believe that statistical communication will benefit from the notion of a betting score or e-value. In the acknowledgments of the accompanying paper, Shafer mentions that his discussion paper &quot;was inspired by conversations about game-theoretic testing and meta- analysis with Peter Grünwald, Wouter  Koolen,  and  Judith  ter  Schure  at  the  Centrum  Wiskunde  &amp;  Informatica  in  Amsterdam  in  December 2018.&quot;  It is very nice that he mentions that visit since for me, it really was a highlight of my Ph.D. We discussed why the p-value is so often misunderstood, and – with Shafer&#39;s wonderful historic knowledge – why it was introduced in the first place. His working papers on probabilityandfinance.com also go back to the early days of probability theory to show that thinking in terms of betting was very important for the groundwork of statistics.The empirical evidence that the p-value is misunderstood by doctors as well as writers of introductory textbooks served as a great introduction to  Shafer&#39;s paper. Some of the discussants participating in the RSS discussion do not believe that betting scores will fare any better, but I am still optimistic. I do not want to accept yet that statistical inference is just too difficult.I have had good experiences piloting some meta-analysis-casino analogies in front of epidemiologists and qualitative researchers at the Research Integrity Amsterdam Lunch Meeting, which Shafer mentions in his reply [starting at 1:35:59]. It would be great to go beyond such anecdotal evidence. As I state in my written contribution [p. 360-361]:&quot;I am already convinced that it will serve statistics well to replace p-values by bets, and power analyses by implied targets. But how do we know whether practitioners actually find this more intuitive? As  an  applied  statistician,  I  will  keep  that  question  from  the  chat  in  mind  as  well,  and  see  if  I  can  design an experiment to test it.&quot; In his written reply [p. 473] Shafer adds:&quot;Perhaps the most crucial choice will be the selection of participants. Will they be highly trained statisticians? Poker players, as Philip Dawid playfully suggests? Scientists, who use statistical tests? Students in statistics classes? Or perhaps teenagers? I did not play poker as a teenager, but I remember that my classmates, when disputing each others’ predictions, readily used betting taunts: ‘Wanna bet?’, ‘Put your money where your mouth is’. Imagine making these reports to teenagers:    •      Prof  Shafer  tested  your app&#39;s rainfall  predictions  over  the  past  year  by  betting  against  them  and  turned $1 into $10. He concluded that the app is not doing a good job.    •      Prof Shafer constructed a statistical model for your app&#39;s rainfall predictions over the past year. The app&#39;s predictions were inaccurate by an amount he would have expected only 1% of the time. He concluded that if his model is right, the app is not doing a good job.   Which report would the teenager be more likely to remember? Which would she be able to repeat to a classmate? If you teach statistics, which do you think your students would be able to repeat accurately? &quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Testing_by_betting";
          
        },
      },{id: "post-general-een-paper-en-een-blogpost-over-seks-en-survival-analyse",
        
          title: "[General] Een paper en een blogpost over seks en survival analyse",
        
        description: "Voor het VVSOR bloggerscollectief mocht ik weer een blogpost publiceren! Ditmaal over seks en een beetje survival analyse. Over het schatten van de leeftijd waarop jongeren hun eerste keer meemaken. Dit was een enorm interessant statistisch project dat ik heb gedaan voor het Rutgers Kennisinstituut Seksualiteit. Er was namelijk een rijke data set – het enquêteonderzoek Seks onder je 25e uit 2004, 2011 en 2016 – die vroeg om een uitgebreide statistische analyse.Over de resultaten en de uitdagingen van de analyse verscheen afgelopen zomer ons paper, dat ik schreef samen met Dr. Hanneke de Graaf van Rutgers en Dr. Geneviève van Liere van GGD Zuid-Limburg. Lees het hier op de website van de Journal of Public Health en hier in de repository van het CWI. De details, ruwe summary data, een statistisch stappenplan en lessons learned zijn hier beschikbaar op OSF.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Een_paper_en_een_blogpost_over_seks_en_survival_analyse";
          
        },
      },{id: "post-general-vvsor-blog-is-live",
        
          title: "[General] VVSOR blog is live!",
        
        description: "Vandaag mocht ik de VVSOR bloggers pagina aftrappen met een kort verhaal over coronarisico. Lees het hier!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__VVSOR_blog_is_live_";
          
        },
      },{id: "post-general-interview-academic-stories",
        
          title: "[General] Interview Academic Stories",
        
        description: "It&#39;s my final year at CWI and I was asked to reflect on my experience there: on being a PhD student, a statistician and following the footsteps of Constance van Eeden, who was the first woman to graduate with a PhD from CWI in 1958. CWI will set up a PhD fellowship for female PhD candidates in her honour.You can read the interview here on the website Academic Stories.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Interview_Academic_Stories";
          
        },
      },{id: "post-peers-scientists-accumulation-bias-how-to-handle-it-all-in",
        
          title: "[Peers/Scientists] Accumulation Bias: How to handle it ALL-IN",
        
        description: "Yesterday, members of the VVSOR received the latest issue of our society magazine STAtOR with the seven-page article above. Credits for the nice format go to the STAtOR copy-editor Monique van Hootegem and the STAtOR editorial board that encouraged me to rewrite this piece. The original article appeared as a blogpost on The Replication Network thanks to the very kind invitation of Professor Bob Reed.The article argues for ALL-IN meta-analysis, Anytime Live and Leading INterim meta-analysis. It comes with a perspective on science that does not treat a series of studies as a fixed batch, but as a growing process that allows decisions to start or stop the research effort for which the meta-analysis itself could be Leading.The article first introduces the concept of Research Waste and the need to better inform new research by past results. Yet to achieve that ideal, we need to move away from conventional meta-analysis methods, since they suffer from Accumulation Bias if data-driven decisions are made on whether new research is necessary or wasteful. The selection of which studies to replicate affects the sampling distribution underlying conventional statistical methods. ALL-IN meta-analysis handles that problem by shifting the focus from a single sample distribution (that needs to condition on the sample and study series size), to a growing series.Here you can find the STAtOR article:STAtOR 2021 1, 21-27 JterSchure LR.pdfThe references and technical details can be found in a longer version of the article that is available in the CWI repository here.The R code that runs the simulations and produces the plots can be found here: Code Accumulation Bias How to handle it ALL-IN.R",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers_Scientists__Accumulation_Bias__How_to_handle_it_ALL-IN";
          
        },
      },{id: "post-general-interview-de-psycholoog",
        
          title: "[General] Interview De Psycholoog",
        
        description: "Kortgeleden kwam er een themanummer &#39;Big Data&#39; uit van het tijdschrift De Psycholoog waarvoor journaliste Anouk Bercht een mooi interview heeft geschreven. Voor abonnees van De Psycholoog is het hier op hun website te lezen. Gelukkig mag ik voor niet-abonnees ook deze pdf delen: De Psycholoog interview.pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Interview_De_Psycholoog";
          
        },
      },{id: "post-general-ski-touring-vs-the-daily-commute-how-risky-is-the-backcountry",
        
          title: "[General] Ski touring vs the daily commute: How risky is the backcountry?",
        
        description: "1%. That is the amount of residual risk promised by snow and mountain safety guru Werner Munter. This is, of course, absurd.I first heard this percentage during a backcountry skiing course. Thankfully, I was not alone in my disbelief. A ‘one-in-a-hundred chance’ implies that we won’t survive more than a hundred skiing trips on average! Even if we planned every tour by the book – Munter’s book to be precise. Even if we base our decision on his ‘3 × 3 Filter- and Reduction&#39; methodology that should make ski-touring risk acceptable.This article concerns the risk involved in unassisted backcountry ski touring. It argues that we do not really know how much or little safety is provided by risk-reduction techniques, such as the Werner Munter method. Fortunately, this does not mean that these risk management approaches are irrelevant; merely that there is significant work yet to be done.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Ski_touring_vs_the_daily_commute__How_risky_is_the_backcountry_";
          
        },
      },{id: "post-general-artikel-arnout-jaspers-over-safe-testing",
        
          title: "[General] Artikel Arnout Jaspers over Safe Testing",
        
        description: "Journalist en wiskundige Arnout Jaspers volgt het werk van mijn promotor Professor Peter Grünwald al enkele jaren en heeft er dit artikel over geschreven voor Platform Wiskunde Nederland. Heel tof!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Artikel_Arnout_Jaspers_over_Safe_Testing";
          
        },
      },{id: "post-tijdelijke-stop-significant-help",
        
          title: "TIJDELIJKE STOP SIGNIFICANT HELP",
        
        description: "Voor iedereen: de beste wensen voor 2021!Ik  hoop dat het een jaar wordt waarin we de goede dingen weer op de rit  krijgen en de minder goede dingen blijvend de deur uit doen. Voor mij  wordt het een jaar met veel thuiswerken (valt voor mij onder de goede  dingen!) en zonder vliegreizen naar congressen (niet zo nodig  eigenlijk!). Oftewel: vollop tijd om mijn proefschrift af te schrijven.Ik mag in 2021 fulltime werken om mijn promotie af te ronden en stop daarom een jaar met mijn adviesbureau Significant Help.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/TIJDELIJKE_STOP_SIGNIFICANT_HELP";
          
        },
      },{id: "post-general-interview-in-het-parool-en-new-scientist",
        
          title: "[General] Interview in Het Parool en New Scientist",
        
        description: "Een vergroting van de foto hierboven: Het Parool.JPG.Gisteren verscheen in de zaterdagkrant van Het Parool en op de website van New Scientist een interview met mijn promotiebegeleider Prof. Peter Grünwald en mij. Heel veel dank, Fenna van der Grient, voor het mooie verhaal dat je hebt geschreven!Het stuk gaat over ALL-IN meta-analyse; het sluitstuk van mijn promotieonderzoek. ALL-IN meta-analyse staat voor Anytime, Live and Leading INterim meta-analyse en is een statistische methode om tussentijds resultaten van gerandomiseerde studies te monitoren en samen te voegen. Hiermee kunnen we sneller beslissen of een nieuwe behandeling of vaccin werkt. Het wordt gemakkelijker voor studies om samen te werken als ze niet op voorhand samen  zijn ontworpen. En hopelijk verdwijnen er daardoor minder niet afgeronde studies in een la. Grootschalige toepassing van  deze methodes kan er zelfs voor zorgen dat we beter tussentijds weten  welke onderzoekslijnen extra geld nodig hebben om hun studies uit te  breiden, en welke teleurstellen en beter kunnen stoppen.Lees het stuk op de website New Scientist hier, het stuk op de website van Het Parool hier, en een foto van de gedrukte krant hier: Het Parool.JPG.Mijn persoonlijke terugblik op het ALL-IN-META-BCG-CORONA dashboard dat we hebben gemaakt is te vinden in deze blogpost (in English).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Interview_in_Het_Parool_en_New_Scientist";
          
        },
      },{id: "post-personal-covid-19-trial-dashboard",
        
          title: "[Personal] COVID-19 trial dashboard",
        
        description: "Could all clinical trial results be monitored in a dashboard like this? We hope so: Decisions on efficacy and futility can be taken as soon as possible. Collaboration is made straightforward. Small studies can easily contribute and might be less often file-drawered. And for decisions of (funding) new research, a live account of the evidence might improve the assessment of research that needs extra trials.We call it ALL-IN meta-analysis: Anytime, Live and Leading INterim meta-analysis.Yet for such live monitoring of interim trial results, new statistical methodology had to be developed. This is what we did since the start of the corona pandemic. We went &#39;all-in&#39; on developing methods for clinical trials with time-to-event data (also known as: survival data). Ideas for live monitoring of randomized trials were in the works for ten years (e.g. already in Prof. Peter Grünwald&#39;s inaugural lecture in 2009). And for me, three years of (parttime) PhD research were exactly enough to know that we could develop this for COVID19 clinical trials. So in an amazing effort, we went from initial mathematic ideas, to software, to simulations, to tutorials, to mathematical proofs, to a paper that is soon to appear. I&#39;m very grateful to dr. Alexander Ly for working so hard with me on this, and to Muriel Perez for joining the mathematical effort.And as the proof of the pudding: a wonderful collaboration with the Utrecht and Nijmegen medical hospitals UMC Utrecht (Prof. Marc Bonten) and Radboud UMC (Prof. Mihai Netea), on trials studying the BCG vaccine as a general immune system booster. I want to specifically acknowledge dr. Henri van Werkhoven, the trial statistician of the Utrecht/Nijmegen trials on the BCG vaccine, for his confidence and nerve amid the chaos of the initial months of the pandemic. The many conversations I had with him really fine-tuned the ALL-IN approach and its presentation. He is now the Principal Investigator of ALL-IN-META-BCG-CORONA, of which I am the meta trial statistician.You can have a look at a demo version of our dashboard at https://cwi-machinelearning.shinyapps.io/ALL-IN-META-BCG-CORONA/LoginUser name: demoPassword: showDetailed materials of ALL-IN-META-BCG-CORONA can be found on https://projects.cwi.nl/safestats/. A preprint paper and more links to blogposts will appear soon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Personal__COVID-19_trial_dashboard";
          
        },
      },{id: "post-general-website-platform-for-young-meta-scientists-pyms",
        
          title: "[General] Website Platform for Young Meta-Scientists (PYMS)",
        
        description: "June 17th, PYMS launched their website! PYMS stands for Platform for Young Meta-Scientists. I&#39;m a proud member of this super cool group of young researchers!https://www.metaphant.net/Check out this website!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Website_Platform_for_Young_Meta-Scientists__PYMS_";
          
        },
      },{id: "post-peers-scientists-vvsor-covid-19-protocol-review",
        
          title: "[Peers/Scientists] VVSOR Covid-19 protocol review",
        
        description: "Statistici slaan landelijk de (virtuele) handen ineen voor de kwaliteit van klinisch onderzoek naar covid-19! Optimaal statistisch ontwerp kan betekenen dat we sneller en met meer betrouwbaarheid weten hoe we covid-19 symptomen kunnen behandelen en voorkomen.In zoommeetings met biostatistici uit het hele land hebben we een review panel kunnen opzetten met 35 statistici vanuit zowel universitair medisch centra als het bedrijfsleven!Meer informatie op https://www.vvsor.nl/articles/covid-19-protocol-review/ en in deze blogpost.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers_Scientists__VVSOR_Covid-19_protocol_review";
          
        },
      },{id: "post-general-hoe-risicovol-is-toerskiën",
        
          title: "[General] Hoe risicovol is toerskiën?",
        
        description: "Bron grafiek: SLF  (lawineslachtoffers in Zwitserland)&quot;Hoe risicovol is toerskiën?&quot; over die vraag schreef ik een stuk voor de Hoogtelijn van februari 2020: Judith ter Schure (2020) Hoe risicovol is toerskien.pdf.Dit tijdschrift ploft vandaag op de mat bij leden van de NKBV en is ook online te lezen (p. 24, 25, 27): de online editie van de Hoogtelijn 2020-1.In deze blogpost vind je links naar het bronmateriaal waarop ik mijn artikel heb gebaseerd.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Hoe_risicovol_is_toerski%C3%ABn_";
          
        },
      },{id: "post-peers-time-in-meta-analysis",
        
          title: "[Peers] Time in Meta-Analysis",
        
        description: "Workshop Design and Analysis of Replication Studies: ReproZürichThis was a very nice workshop with great speakers and interesting discussion. Please find my own abstract and slides below.Scientific knowledge accumulates and therefore always has a (partly) sequential nature. As a result, the exchangeability assumption in conventional meta-analysis cannot be met if the existence of a replication — or generally: later studies in a series  — depends on earlier results. Such dependencies arise at the study level but also at the meta-analysis level, if new studies are informed by a systematic review of existing results in order to reduce research waste. Fortunately, studies series with such dependencies can be meta-analyzed with Safe Tests. These tests preserve type I error control, even if the analysis is updated after each new study. Moreover, they introduce a novel approach to handling heterogeneity; a bottleneck in sequential meta-analysis. This strength of Safe Tests for composite null hypotheses lies in controlling type I errors over the entire set of null distributions by specifying the test statistic for a worst-case prior on the null. If for each study such a (study-specific) test statistic is provided, the combined test controls type I error even if each study is generated by a different null distribution. These properties are optimized in so-called GROW Safe Tests. Hence, they optimize the ability to reject the null hypothesis and make intermediate decisions in a growing series, without the need to model heterogeneity.A novel approach to meta-analysis testing under heterogeneityPlease find my slides here:Judith ter Schure - Time in meta-analysis.pdfAnd visit the website for abstracts and slides of other speakers:https://www.reprozurich.org/",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Time_in_Meta-Analysis";
          
        },
      },{id: "post-peers-how-can-meta-research-improve-statistical-research-and-practice",
        
          title: "[Peers] How can meta-research improve statistical research and practice?",
        
        description: "Parallel Session at the Tilburg Meta-Research DayBelow the abstract and my take-away of the discussion.How can meta-research improve statistical research/practice?Meta-research has spurred two opposing perspectives on science: one treats individual studies and study series as two separate publication types (e.g., in Ioannidis&#39; 2005 paper &#39;Why Most Published Research Findings Are False&#39;) and one treats individual studies as part of a series that needs to be informed by that series (e.g., in the Chalmers et al. 2014 paper &#39;How to increase value and reduce waste when research priorities are set&#39;). These perspectives decide what statistical methods are valid, both at the individual-study level and at the meta-analysis level. Could meta-research also inform which perspective is most appropriate and improve the corresponding statistical research and practice?Take-awayIt varies a lot per field whether scientists in their experimental design actually feel like they contribute to an accumulating series of studies. In some fields awareness exists that the results of an experiment will someday end up in a meta-analysis with existing experiments, while in others scientists aim to design experiments as &#39;refreshingly new&#39; as possible. In a table that shows series of studies together in one column if they could be meta-analyzed, this latter approach shows scientists who mainly aim to initiate new columns. This pre-experimental perspective might be different from the meta-analysis perspective, in which a systematic search and inclusion criteria might still force those experiments together in one column, even though they weren&#39;t intended that way. This practice might erode trust in meta-analyses that try to synthesize effects from too different experiments.The discussion was very hesitant towards enforcing rules (e.g. by funders or universities) on scientists in priority setting, such as whether a field needs more columns of &#39;refreshingly new&#39; experiments, or needs replications of existing studies (extra rows) so a field can settle on a specific topic in one column with a meta-analysis.In terms of statistical consequences, sequential processes might still be at play if scientists designing experiments know about the results of other experiments that might end up in the same meta-analysis. Full exchangeability in meta-analysis means that no-one would have decided differently on the feasibility or design of an experiment had the results of others been different. If that assumption cannot be met, we should consider studies as part of series in our statistical meta-analysis, even without forcing this approach in the design phase.For a full summary of the discussion, see this document:Judith ter Schure - Tilburg Meta-Research Day Parallel Session Statistics summary.pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__How_can_meta-research_improve_statistical_research_and_practice_";
          
        },
      },{id: "post-peers-talks-talks-talks",
        
          title: "[Peers] Talks Talks Talks! :)",
        
        description: "Inspired by a &#39;How to talk about mathematics&#39; presentation by Ionica Smeets in August last year, I created this outline slide for my talk at University of Amsterdam. Looking forward to this week, with three talks: in Tilburg on Tuesday, in Amsterdam (UvA) on Friday and again in Amsterdam (CWI) on Saturday.Tuesday October 1th, Tilburg ColloquiumThe rules of the game called significance testing (wink wink)If significance testing were a game, it would be dictated by chance and encourage researchers to cheat. A dominant rule would be that once you conduct a study, you go all in: you have one go at your one preregistered hypothesis — one outcome measure, one analysis plan, one sample size or stopping rule etc. — and either you win (significance!) or you lose everything. The game does not allow you to conduct a second study, unless you prespecified that as well, together with the first. Strategies that base future studies on previous results, and then meta-analyze, are not allowed. Honestly reporting the p-value next to your &#39;I lost everything&#39; result does not help; that is like reporting the margin in a winner takes all game. In a new round you have to start over again. No wonder researchers cheat this game by filedrawering and p-hacking. The best way to solve this might be to change the game. Fortunately, this is possible by preventing researchers from losing everything and allowing them to reinvest their previous earnings in new studies. This new game keeps score in terms of $-values instead of p-values, and tests with Safe Tests.Friday October 4th, University of Amsterdam Accumulation Bias in Meta-Analysis: How to Describe and How to Handle ItStudies accumulate over time and meta-analyses are mainly retrospective. These two characteristics introduce dependencies between the analysis time, at which a series of studies is up for meta-analysis, and results within the series. Dependencies introduce bias —Accumulation Bias— and invalidate the sampling distribution assumed for p-value tests, thus inflating type-I errors. But dependencies are also inevitable, since for science to accumulate efficiently, new research needs to be informed by past results. In our paper, we investigate various ways in which time influences error control in meta-analysis testing. We introduce an Accumulation Bias Framework that allows us to model a wide variety of practically occurring dependencies including study series accumulation, meta-analysis timing, and approaches to multiple testing in living systematic reviews. The strength of this framework is that it shows how all dependencies affect p-value-based tests in a similar manner. This leads to two main conclusions. First, Accumulation Bias is inevitable, and even if it can be approximated and accounted for, no valid p-value tests can be constructed. Second, tests based on likelihood ratios withstand Accumulation Bias: they provide bounds on error probabilities that remain valid despite the bias.Saturday October 5th, Weekend van de Wetenschap CWIhttps://www.weekendvandewetenschap.nl/activiteiten/2019/wiskunde-en-informaticalezingen/Zie deze video van de Nacht van de Wetenschap in Den Haag vorig jaar!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Talks_Talks_Talks____";
          
        },
      },{id: "post-general-weekend-van-de-wetenschap",
        
          title: "[General] Weekend van de Wetenschap",
        
        description: "Wiskunde- en informaticalezingen op het CWIhttps://www.cwi.nl/events/2019/open-dag-2019/cwi-open-dag-5-oktober-2019(Medische) statistiek: afwijken is het nieuwe normaalAutomatische detectie, dat willen we overal wel: verdachte personen op een vliegveld, mogelijke belastingfraude, vroege symptomen van een ziekte. Maar de techniek kan er naast zitten en ten onrechte iemand aanwijzen als terrorist, fraudeur of doodzieke patiënt. Fouten die al makkelijk door mensen worden gemaakt zijn nog veel gevaarlijker in automatische processen. Daarom is statistiek belangrijker dan ooit. Ik vertel hoe statistici kunnen meehelpen om onze samenleving veiliger, efficiënter en gezonder te maken. En waarom, ook in de statistiek, wetenschappelijk onderzoek hoognodig is.Lezingen",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Weekend_van_de_Wetenschap";
          
        },
      },{id: "post-general-peers-statistiek-al-vanaf-de-basisschool-in-het-lesprogramma",
        
          title: "[General/Peers] Statistiek al vanaf de basisschool in het lesprogramma",
        
        description: "“Het  lesprogramma moet op de schop: statistiek al vanaf de basisschool […]” Dat was een kop waarmee de pers de resultaten bracht van het Curriculum.nu voorstel om het basis- en  middelbaar onderwijs te vernieuwen. Zie hier het voorstel Rekenen &amp; Wiskunde.De VVSOR, de Vereniging voor Statistiek en Operations Research, heeft een reactie ingestuurd op de statistische inhoud van het voorstel. Deze reactie is ook besproken  in de WiskundEbrief, een nieuwmail die wordt ontvangen door zo’n 4850  wiskundeleraren en andere geïnteresseerden.Lees hier onze brief! Lees hier de samenvatting in de WiskundE-brief!Samengevat  zijn we enthousiast over de doelen van het voorstel, met name om  scholieren op te leiden tot kritische cijferconsumenten. We snijden in  onze brief wel wat kritische punten  in ons vakgebied aan waar het voorstel rekening mee moet houden: Hoe  kans en toeval in het basisonderwijs het best hun plek krijgen met een  vaste set voorbeelden (alledaagse kansen als ‘de kans op regen’ zijn  lastiger dan ze lijken). Dat p-waarde significantietoetsen  vraagt om extra voorzichtigheid, vanwege de recent opgelaaide  discussies en het empirische bewijs dat het vaak verkeerd wordt  begrepen. En hoe ook zonder de statistische cyclus plat te slaan tot  vuistregels er prachtig materiaal voorhanden is op websites als  Health News Review, Peiling Praktijken, Risk Litteracy en Understanding  Uncertainty.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General_Peers__Statistiek_al_vanaf_de_basisschool_in_het_lesprogramma";
          
        },
      },{id: "post-scientists-blogpost-about-our-paper",
        
          title: "[Scientists] Blogpost about our paper!",
        
        description: "The blog The Replication Network - Furthering the Practice of Replication in Economics published a summary of our Accumulation Bias paper by co-founder Professor Bob Reed of the University of Canterbury, New Zealand. You can read it here.It is a summary of cited sentences and provides a very nice and short overview of the most important points of the paper. I couldn&#39;t have done it better myself!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Blogpost_about_our_paper_";
          
        },
      },{id: "post-peers-accumulation-bias-in-meta-analysis",
        
          title: "[Peers] Accumulation Bias in Meta-Analysis",
        
        description: "The first paper about my Accumulation Bias research was published by F1000:Ter Schure &amp; Grünwald (2019) Accumulation Bias in Meta-Analysis: The Need to Consider Time in Error Control A popular science story about this research in ERCIM news can be found here.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Accumulation_Bias_in_Meta-Analysis";
          
        },
      },{id: "post-general-pint-of-science-utrecht",
        
          title: "[General] Pint of Science Utrecht",
        
        description: "Op dinsdagavond 21 mei vertel ik in het Louis Hartlooper over de statistiek van automatische detectie!Automatische detectie, dat willen we overal wel: verdachte personen op een vliegveld, mogelijke belastingfraude, vroege symptomen van een ziekte. Maar de techniek kan er naast zitten en ten onrechte iemand aanwijzen als terrorist, fraudeur of doodzieke patiënt. Fouten die al makkelijk door mensen worden gemaakt zijn nog veel gevaarlijker in automatische processen. Daarom is statistiek belangrijker dan ooit. Ik vertel hoe statistici kunnen meehelpen om onze samenleving veiliger, efficiënter en gezonder te maken. En waarom, ook in de statistiek, wetenschappelijk onderzoek hoognodig is.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Pint_of_Science_Utrecht";
          
        },
      },{id: "post-general-de-klassieke-denkfout",
        
          title: "[General] De Klassieke Denkfout",
        
        description: "https://nos.nl/artikel/2269875-boete-voor-appen-op-de-fiets-wordt-95-euro.htmlHet is gewoonweg niet zinnig om alleen naar de ongelukken te kijken  en daar het percentage te rapporteren waarbij appen een rol  speelde.Zie mijn artikel voor De Correspondent over hoe je risico&#39;s en het effect van risicoreductie wél berekent en lees meer over de denkfout in deze blogpost.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__De_Klassieke_Denkfout";
          
        },
      },{id: "post-general-de-correspondent",
        
          title: "[General] De Correspondent",
        
        description: "Vandaag publiceert De Correspondent mijn verhaal over risicoreductie in het verkeer en in de bergsport. Lees het hier.Zie ook mijn blogpost over de klassieke denkfout die wordt gemaakt in de mediaberichtgeving over het appverbod.In deze blogpost wat achtergrond bij mijn berekeningen.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__De_Correspondent";
          
        },
      },{id: "post-scientists-efficient-accumulation-of-science-research-waste-and-accumulation-bias",
        
          title: "[Scientists] Efficient Accumulation of Science, Research Waste and Accumulation Bias",
        
        description: "ERCIM News publiceert vandaag mijn artikel over Accumulation Bias. Lees het hier online of hier in de pdf van het magazine.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Efficient_Accumulation_of_Science__Research_Waste_and_Accumulation_Bias";
          
        },
      },{id: "post-general-sciencebattle",
        
          title: "[General] ScienceBattle",
        
        description: "Als onderdeel van ScienceBattle mag ik met mijn Nacht van de Wetenschap praatje Nederland door toeren:Woensdagavond 21 november, 20:15, in theater De Weijer in BoxmeerGratis entree voor iedereen onder de 21 jaar! De Weijer heeft ook een filmpje van een eerdere ScienceBattle.Donderdagavond 29 november, 20:30, in theater De Veste in Delft Ook te vinden op FacebookMaandagavond 10 december, 20:30, in theater CC Amstel in Amsterdam Ook te vinden op FacebookWoensdagavond 30 januari, 20:30, in theater Cultureel Studentencentrum Usva in Groningen Ook te vinden op Facebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__ScienceBattle";
          
        },
      },{id: "post-scientists-preregistratie-amp-van-start",
        
          title: "[Scientists] Preregistratie &amp; Van Start!",
        
        description: "Vandaag start Mastivax hun pilotexperiment. Mastivax ontwikkelt  alternatieven voor antibiotica in de melkveehouderij die gebruik maken  van het natuurlijke afweersysteem van de koe. Afgelopen 1,5 jaar heb ik  met Mastivax samengewerkt en een bedrijf getroffen  met een gezonde dosis wetenschappelijke nieuwsgierigheid naar de  variatie in mastitiskoeien, de verschillen tussen bacteriële infecties  in meetresultaten en de zuiverheid van experimenteel ontwerp om onder  die omstandigheden hun behandelingen te testen. Succes  in deze pilot zou een grote stap kunnen zijn voor de bestrijding van  antibioticaresistentie wereldwijd. Maar hoe dan ook gaat dit experiment  veel interessante inzichten opleveren omdat Mastivax zoveel mogelijk  onvertekende resultaten probeert te verzamelen. Dat is dankzij de strikte proefopzet, poweranalyse en het  nauwgezette analyseplan dat Mastivax twee weken geleden heeft  gepreregistreerd op preclinicaltrials.eu (onder embargo). Daarmee is  Mastivax het eerste bedrijf in het register van deze vooruitstrevende  Nederlandse website en een voorloper in de beweging voor betrouwbaarder  en minder verspillend proefdieronderzoek (Macleod  (2011), Jansen of Lorkeers et al (2014)).https://www.preclinicaltrials.eu/Macleod, Malcolm. &quot;Why animal  research needs to improve.&quot; Nature News 477.7366 (2011): 511-511.Nature  News 477.7366 (2011): 511-511.Jansen  of Lorkeers, S. J.,  Doevendans, P. A., &amp; Chamuleau, S. A. (2014). All preclinical  trials should be registered in advance in an online registry. European  journal of clinical investigation, 44(9), 891-892.European  journal of clinical investigation, 44(9),  891-892.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Preregistratie___Van_Start_";
          
        },
      },{id: "post-peers-symposium-communicating-statistics-to-different-audiences",
        
          title: "[Peers] Symposium Communicating Statistics to Different Audiences",
        
        description: "Op 10 november kwamen statistici uit heel Nederland bijeen voor het Symposium Communicating Statistics to Different Audiences. Zie voor een rapportage de website https://www.vvsor.nl/statistics-communication/. De opkomst bij het symposium was een groot compliment aan de organisatie, die met hun sectie Statistics Communication een belangrijke taak op zich gaat nemen binnen de vereniging. De vragen vanuit het publiek lieten zien dat er veel interesse is om samen na te denken over het communiceren van statistiek, en in het bijzonder onzekerheid.Over de speciale interesse die er bij het publiek was voor het communiceren van onzekerheid heb ik een stuk geschreven voor op de website van de sectie. Bij deze ook in een blogpost.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Peers__Symposium_Communicating_Statistics_to_Different_Audiences";
          
        },
      },{id: "post-general-wanneer-heb-je-een-experiment-voldoende-herhaald-om-overtuigd-te-kunnen-zijn-van-je-resultaten",
        
          title: "[General] Wanneer heb je een experiment voldoende herhaald om overtuigd te kunnen zijn...",
        
        description: "Om die vraag draait mijn praatje tijdens de Nacht van de Wetenschap. Probeer het vooral ook zelf uit, met het scorebord dat ik heb gemaakt.NAAR SCOREBORD In deze blogpost publiceer ik de tekst van mijn praatje, voor wie het nog eens wil nalezen. Je kunt tijdens het lezen de resultaten reproduceren in het scorebord.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Wanneer_heb_je_een_experiment_voldoende_herhaald_om_overtuigd_te_kunnen_zijn_van_je_resultaten_";
          
        },
      },{id: "post-scientists-symposium-het-placebo-effect-behagen-of-misleiden",
        
          title: "[Scientists] Symposium: Het placebo-effect: behagen of misleiden?",
        
        description: "Geen van beiden. Zo leerde ik op dit symposium van o.a. Andrea Evers, hoogleraar gezondheidspsychologie aan de Universiteit van Leiden. Net zoals voor Pavlovs hond de verwachting van eten bij het horen van de bel zijn speekselproductie op gang bracht, zo kan de verwachting van een behandeling ons lichaam aanzetten om ziekteverschijnselen tegen te gaan.Een heel mooi verschijnsel dus, waar artsen gebruik van kunnen maken. Maar dat kan alleen als de patient vertrouwen heeft in de arts, en in de wetenschappelijke onderbouwing van de behandeling, zo vertelde Winfried Rief, hoogleraar clinisch psychologie in Marburg, Duitsland. Wantrouwen tegenover wetenschappelijk bewijs kan werken als een immunisation strategy tegen het gunstige placeboeffect.Dus gaan we helemaal de verkeerde kant op als nota bene wetenschappers onzinnige beweringen doen over kwantitatief wetenschappelijk onderzoek. Zie mijn blogpost Gemiddelden zeggen juist iets over de individuele patient.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Symposium__Het_placebo-effect__behagen_of_misleiden_";
          
        },
      },{id: "post-general-nacht-van-de-wetenschap",
        
          title: "[General] Nacht van de Wetenschap",
        
        description: "http://www.wetenschapsnacht.nl/Tijdens de Nacht van de Wetenschap, op 5 oktober in het Stadhuis Den Haag, mag ik vertellen over mijn onderzoek naar nieuwe statistische methoden voor wetenschappers van wie wordt verwacht dat ze hun onderzoek nog eens herhalen, en misschien nog wel eens moeten doen, en nog eens..",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Nacht_van_de_Wetenschap";
          
        },
      },{id: "post-general-gemiddelden-zeggen-juist-iets-over-de-individuele-patiënt",
        
          title: "[General] Gemiddelden zeggen juist iets over de individuele patiënt",
        
        description: "Ik ben helemaal voor meer patiëntgedreven medisch onderzoek. Slimme within person repeated cross-over trials bijvoorbeeld, die nu ook aan populariteit winnen onder de noemer n=1-studies. Daarnaast kan ook kwalitatief onderzoek patiënten enorm helpen, denk ik. Kwalitatief onderzoek maakt het mogelijk de prioriteiten van patiënten mee te  wegen in het bepalen van de juiste uitkomstmaten en blocking factoren in kwantitatief onderzoek en het kan ook de relatie tussen patiënt en behandelaar verbeteren met meer kennis van de patiënt.Alleen wordt er veel onzin beweerd over kwantitatief medisch onderzoek, in de roep om meer patiëntgedreven en kwalitatief onderzoek.Toen ik deze quote voorbij zag komen in De Volkskrant had ik dit graag in dezelfde krant willen rechtzetten. De Volkskrant heeft er helaas voor gekozen mijn ingezonden stukje niet te publiceren. Daarom bij deze in een blogpost.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Gemiddelden_zeggen_juist_iets_over_de_individuele_pati%C3%ABnt";
          
        },
      },{id: "post-scientists-rutgers-nieuwsmails",
        
          title: "[Scientists] Rutgers Nieuwsmails",
        
        description: "Voor de onderzoekers van Rutgers schrijf ik een aantal keer per jaar een nieuwsmail over methoden en statistiek. Hier vind je deze nieuwsmails op een rij. Sommigen heb ik sinds ze zijn verstuurd iets geupdate.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Rutgers_Nieuwsmails";
          
        },
      },{id: "post-scientists-presentatie-op-de-nrin-research-conference-2018",
        
          title: "[Scientists] Presentatie op de NRIN Research Conference 2018",
        
        description: "&#39;Accumulation Bias&#39; Voor zover ik weet nog niet eerder beschreven: Hoe onze standaard statistiek het niet aankan als we onze wetenschap efficienter maken. En hoe we dat kunnen oplossen met een nieuw soort statistiek waar studenten en wetenschappers hopelijk ook nog iets minder een hekel aan hebben.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Scientists__Presentatie_op_de_NRIN_Research_Conference_2018";
          
        },
      },{id: "post-general-de-wiskunde-van-het-insectenarmageddon",
        
          title: "[General] De wiskunde van het insectenarmageddon",
        
        description: "Samen met mijn promotor Peter Grünwald heb ik bijgedragen aan het debat over het verdwijnen van insecten in dit artikel van Arnout Jaspers voor NEMO Kennislink:https://www.nemokennislink.nl/publicaties/de-wiskunde-van-het-insectenarmageddon/",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__De_wiskunde_van_het_insectenarmageddon";
          
        },
      },{id: "post-general-een-goede-conditie-voor-lingo",
        
          title: "[General] Een goede conditie voor Lingo",
        
        description: "Op 11 mei mocht ik tijdens de Leidse Luisteravond een column uitspreken. In deze blogpost een uitgeschreven versie.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Een_goede_conditie_voor_Lingo";
          
        },
      },{id: "post-general-tachtig-keer-zo-gevaarlijk",
        
          title: "[General] Tachtig keer zo gevaarlijk?!",
        
        description: "Mijn vorige blogpost ging over de tabel hieronder, gepubliceerd in een blogpost (26 februari 2013) van Bruce Tremper voor het Utah Avalanche Center. Om zo’n tabel te maken moet een hoop data verzameld worden. En het hangt er maar net vanaf wanneer en hoe je dat doet welke volgorde de activiteiten krijgen. Hoe kom je aan dit soort data?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Tachtig_keer_zo_gevaarlijk__";
          
        },
      },{id: "post-general-veilig-of-onveilig",
        
          title: "[General] Veilig of onveilig",
        
        description: "De tabel hierboven is gepubliceerd in een blogpost (26 februari 2013) van Bruce Tremper voor het Utah Avalanche Center. Het stuk, getiteld “What is the Risk of Riding in Avalanche Terrain?” heeft duidelijk skiërs als doelgroep. Maar een tabel als deze is voor meer mensen interessant. Velen voelen zich weleens ongemakkelijk in een opstijgend vliegtuig. Sommigen maken zich zorgen als hun kind voor het eerst alleen naar school fietst. Of we mijden concerthallen sinds de gebeurtenissen in Bataclan, Parijs.Risico’s, of beter, gevoelens van risico’s, kunnen sturend werken bij het maken van beslissingen. Dus laten we eens stilstaan bij wat risico eigenlijk is.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/General__Veilig_of_onveilig";
          
        },
      },{id: "projects-communicating-risk-statistics-popular-science-writing",
          title: 'Communicating risk statistics popular science writing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Communicating_risk_statistics_popular_science_writing";
            },},{id: "projects-sequential-a-b-testing-amp-bandits",
          title: 'Sequential A/B-testing &amp;amp; bandits',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Sequential_AB_testing_&_bandits";
            },},{id: "projects-veterinarian-phase-iii-clinical-trial-design-with-optional-stopping",
          title: 'Veterinarian Phase III clinical trial design with optional stopping',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Veterinarian_Phase_III_clinical_trial_design_with_optional_stopping";
            },},{id: "projects-measurement-device-calibration-statistical-training",
          title: 'measurement device calibration statistical training',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/measurement_device_calibration_statistical_training";
            },},{id: "projects-taylor-approximations-for-communication-cox-proportional-hazard-survival-analysis-weighted-mean-comparison-multiple-testing",
          title: 'taylor approximations for communication cox proportional hazard survival analysis, weighted mean comparison multiple...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/taylor_approximations_for_communication_cox_proportional_hazard_survival_analysis,_weighted_mean_comparison_multiple_testing";
            },},{id: "projects-veterinarian-phase-iii-clinical-trial-design",
          title: 'veterinarian phase III clinical trial design',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/veterinarian_phase_III_clinical_trial_design";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A.%61.%74%65%72%73%63%68%75%72%65 [%61%74] %61%6D%73%74%65%72%64%61%6D%75%6D%63.%6E%6C", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2147-5510", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h1t5d5gAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
