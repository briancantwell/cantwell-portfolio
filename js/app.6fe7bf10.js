(function(){"use strict";var e={4841:function(e,t,r){const a={soundcloud:{id:1,category:"Design",url:"soundcloud",title:"SoundCloud Redesign",description:{objective:"As a group, analyze a website interface, conduct interviews and surveys about user experience and redesign the website based on analysis results. Write a blog post detailing our design process.",contribution:[{text:"Created mockups of low, medium, and high fidelity for the Support Page"}],techs:["Concpets(iPad)","Figma"],extlinks:[{text:"Soundcloud Article",url:"https://medium.com/inf-132-group-17/soundcloud-redesign-b7ec659abecb"}]},logourl:r(2661),demourl:"",data:[{imgurl:r(2803),description:"This was the live support page that was my responsibility to redesign. While it fulfilled its function, it did so in a not so user-friendly way.   Aside from the nearly illegible color scheme, we discovered through user testing that tasks were difficult to complete if they could even be completed at all. In the middle of our redesign, SoundCloud had actually updated the support page, but had managed to make it more confusing than what they originally had."},{imgurl:r(8197),description:"I began my redesign with some rough sketches. I wanted to make sure simple tasks could be completed quickly. For example, I added columns to the left and right to provide at-a-glance Frequently Asked Questions or Status Blog for updates on site issues. Centrally located at the top was the standard search bar that SoundCloud had actually removed when they updated the support page during our analysis. I also added large buttons for the four most common issues centered on the page."},{imgurl:r(5654),description:"After the rough sketch I utilized Figma to create a more precise wireframe mockup. I was able to refine this a bit more to get a better idea for how everything would look at the scale it needed to be. This was a desktop-first design so this provided significant real estate for the sections I was including."},{imgurl:r(8445),description:"All that was left was to begin filling in content and further refinement. We decided on a dark mode color style as we felt the contrast between the background and text was far more legible, especially for the density of the text. Suitable iconography was chosen to help with the at-a-glace design to further reduce confusion and enhance visibility of each item."}]},spec_story:{id:2,category:"Design",url:"spec_story",title:"Speculative Story",description:{objective:"Envision three new forms of interaction with a non-traditional computational system.",techs:["Google Slides","Google Drawings"]},logourl:r(2897),data_text:"I chose augmented reality as the interface to work on. I began by searching the internet for current and proposed ideas related to augmented reality interaction and devices.\n\nDesign Goals\n I made some design goals to adhere to for my own ideals on interacting with augmented reality:\n1) The 3 primary types of input would be verbal, hand tracking, and eye tracking. \n2) The device should require minimal physical interaction for operation. \n3) Interactions should be natural and easy to learn.\n\n These design decisions were inspired by current common interactions and developing technologies. Verbal commands are already commonplace with mobile and smart home devices. Hand tracking technology is still young. The Oculus Quest platform has implemented hand tracking input for their VR headset. Eye tracking technology is still young as well. The required hardware is still relatively bulky. However, Tobii Technology has created glasses capable of eye tracking and are now developing augmented reality glasses similar to the hypothetical Gadget Glasses I proposed for this assignment.",data:[{imgurl:r(1978)},{imgurl:r(857)},{imgurl:r(5797)},{imgurl:r(3174)},{imgurl:r(3749)},{imgurl:r(3738)},{imgurl:r(8646)},{imgurl:r(5151)},{imgurl:r(8182)},{imgurl:r(4840)},{imgurl:r(9617)},{imgurl:r(6348)},{imgurl:r(1153)},{imgurl:r(1945)},{imgurl:r(2030)},{imgurl:r(5203)},{imgurl:r(5560)}]},runkeeper:{id:3,category:"Web Application",url:"runkeeper",title:"Runkeeper",description:{objective:"Utilize Javascript and Typescript",details:[{text:"A large collection of tweets was provided for analysis."},{text:"Determine the number of tweets that contained user-written text."},{text:"Tweets followed a similar phrase structure that we had to identify so that user-written text was identifiable."},{text:"Only analyze tweets with the #Runkeeper hashtag."},{text:"Identify the most popular activities."},{text:"Once the phrase structure was identified, the activity type and the distance needed to be extracted and stored."},{text:"Stored activity data needed to be processed and graphed utilizing Vega-Lite."},{text:"Create a text search interface to enable searching the collection of tweets and display a list."}],techs:["HTML","CSS","Javascript","Typescirpt","Vega-Lite","VS Code"],extlinks:[{text:"Assignment Description",url:"https://inf133-fa19.depstein.net/assignments/a2"},{text:"Github",url:"https://github.com/llama-anteater/runkeeper-tweet-report.git"},{text:"Demo Video",url:"https://youtu.be/hVNjF1yy0XE"}]},logourl:r(5386),demourl:"https://www.youtube.com/embed/hVNjF1yy0XE",data:[{imgurl:r(5940),description:"The 'About the Data' page had several fields that needed to be dynamically calculated based on the provided data set. Tweets had to be filtered for those with user-entered text, and specfic types such as completed or live events."},{imgurl:r(2664),description:"Vega-Lite was used for the graph visualizations. The data is sorted by most popular activities, the distance traveled, and the days of the week they were performed.  I utilized RegEx for parsing the data from the tweets."},{imgurl:r(9853),description:"The search function needed to work in real-time. As letters were added to the search bar, the results table would update."}]},spotify:{id:4,category:"Web Application",url:"spotify",title:"Spotify API",description:{objective:"Utilize the Spotify API to authenticate and retrieve data and then use Angular to create a frontend to display retrieved data",techs:["HTML","CSS","Javascript","Typescript","Angular","Spotify API","VS Code"],extlinks:[{text:"Assignment Description",url:"https://inf133-fa19.depstein.net/assignments/a3"},{text:"Github",url:"https://github.com/llama-anteater/spotify-browser.git"},{text:"Demo Video",url:"https://youtu.be/6Cvc3NetUSA"}]},logourl:r(8597),demourl:"https://www.youtube.com/embed/6Cvc3NetUSA",data:[{imgurl:r(9008),description:"The initial page would load with no data displayed with only blank place-holders for images. Clicking the 'Log in' button uses a Spotify developer account's client_id and client_secret to authenticate with the Spotify API. These variables are stored in webserver/client_secret.json. These are private data hence the file is not included in the repository. Additionally the webserver/tokens.json file, which stores the access token after authentication, is also not included in the repository. \n\nThe 'Search Spotify' section features a text input, a dropdown menu with options artist, album, and track, and the 'Search' button. Searching for either an artist or album will populate the image carousel with an image of an album and allow navigation with arrows to the left and right. Searching for a track will replace the image carousel with a list populated with the search results."},{imgurl:r(8162),description:"Clicking on an artists image will navigate to the artist profile page. This page provides an image of the artist, a list of their top tracks, a carousel of the artists albums, and a carousel of similar artists. The top track list provides information about each track including track name, duration, the primary artist, and the album that it is in."},{imgurl:r(9406),description:"Clicking on a track name will navigate to the track page. The track page includes information about the track including track name, duration, artist, and the audio metrics such as danceability, speechiness, or valence."}]}};t["Z"]=a},2879:function(e,t,r){var a=r(9963),o=r(6252),n=r(3577);const i=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function s(e,t,r,s,l,d){const c=(0,o.up)("AppHeader"),u=(0,o.up)("router-view"),p=(0,o.up)("back-to-top"),m=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([e.appTheme,"pt-0.5"])},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(p,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(m)],2)}var l=r(8508),d=r.n(l),c=r.p+"img/profile.074ce9bc.svg";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},m={class:"flex justify-between items-center px-4 sm:px-0"},g={key:0,src:c,class:"object-contain w-20 rounded-2xl",alt:"Dark Logo"},h={key:1,src:c,class:"w-20 bg-slate-200 rounded-2xl",alt:"Light Logo"},f={class:"sm:hidden"},y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},b={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},x={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},w={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"};function v(e,t,r,a,n,i){const s=(0,o.up)("router-link"),l=(0,o.up)("theme-switcher"),d=(0,o.up)("AppHeaderLinks");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",p,[(0,o._)("div",m,[(0,o._)("div",null,[(0,o.Wm)(s,{to:"/"},{default:(0,o.w5)((()=>["light"===n.theme?((0,o.wg)(),(0,o.iD)("img",g)):((0,o.wg)(),(0,o.iD)("img",h))])),_:1})]),(0,o.Wm)(l,{theme:n.theme,onThemeChanged:i.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",f,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",y,[n.isOpen?((0,o.wg)(),(0,o.iD)("path",b)):(0,o.kq)("",!0),n.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",x))]))])])]),(0,o.Wm)(d,{showModal:i.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"]),(0,o._)("div",w,[(0,o.Wm)(l,{theme:n.theme,onThemeChanged:i.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])])])}const k={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},j={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function _(e,t,r,n,i,s){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>s.toggleTheme&&s.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",k)):((0,o.wg)(),(0,o.iD)("i",j))])}var S={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},T=r(3744);const C=(0,T.Z)(S,[["render",_]]);var A=C;const P=(0,o.Uk)("Home"),D=(0,o.Uk)("Projects"),I=(0,o.Uk)("About Me");function O(e,t,r,a,i,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none bg-sky-500/0"])},[(0,o.Wm)(l,{to:"/",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Home"},{default:(0,o.w5)((()=>[P])),_:1}),(0,o.Wm)(l,{to:"/projects/",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Projects"},{default:(0,o.w5)((()=>[D])),_:1}),(0,o.Wm)(l,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[I])),_:1})],2)}var H={props:["showModal","isOpen"]};const W=(0,T.Z)(H,[["render",O]]);var z=W,E={components:{ThemeSwitcher:A,AppHeaderLinks:z},data(){return{isOpen:!1,theme:"",modal:!1}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const L=(0,T.Z)(E,[["render",v],["__scopeId","data-v-694e3dec"]]);var M=L;const F={class:"container mx-auto"},Z={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},B={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},q=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow me ",-1),N={class:"flex gap-4 sm:gap-8"},V=["href"],U=["data-feather"];function G(e,t,r,a,n,i){const s=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",F,[(0,o._)("div",Z,[(0,o._)("div",B,[q,(0,o._)("ul",N,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,U)],8,V)))),128))])]),(0,o.Wm)(s)])])}const R={class:"flex justify-center items-center text-center"},Y={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},J={href:"#",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},K=(0,o.Uk)(" Developed by "),$={href:"https://github.com/briancantwell/",target:"__blank",class:"font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function Q(e,t,r,a,i,s){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("div",Y,[(0,o.Uk)(" © "+(0,n.zw)(e.copyrightDate)+". ",1),(0,o._)("a",J,(0,n.zw)(e.projectName),1),K,(0,o._)("a",$,(0,n.zw)(e.author),1)])])}var X={data:()=>({copyrightDate:(new Date).getFullYear(),projectName:"Portfolio",author:"Cantwell"})};const ee=(0,T.Z)(X,[["render",Q]]);var te=ee,re={components:{FooterCopyright:te},data(){return{socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/llama-anteater/"},{id:2,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/brian-m-cantwell"}]}},mounted(){d().replace()},updated(){d().replace()}};const ae=(0,T.Z)(re,[["render",G]]);var oe=ae,ne={components:{AppHeader:M,AppFooter:oe},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){d().replace()},updated(){d().replace()}};const ie=(0,T.Z)(ne,[["render",s]]);var se=ie,le=r(2119);const de={class:"container mx-auto"};function ce(e,t,r,a,n,i){const s=(0,o.up)("AppBanner"),l=(0,o.up)("ProjectsGrid");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o.Wm)(s,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(l)])}const ue={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},pe=(0,o._)("div",{class:"w-full md:w-1/3 text-left"},[(0,o._)("h1",{class:"font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"}," Brian Cantwell "),(0,o._)("p",{class:"font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"}," Web Developer ")],-1),me=[pe];function ge(e,t,r,a,n,i){return(0,o.wg)(),(0,o.iD)("section",ue,me)}var he={name:"Home",data:()=>({theme:""}),created(){this.theme=localStorage.getItem("theme")||"light"},methods:{}};const fe=(0,T.Z)(he,[["render",ge]]);var ye=fe,be=r(2526),xe={name:"Home",components:{AppBanner:ye,ProjectsGrid:be.Z}};const we=(0,T.Z)(xe,[["render",ce]]);var ve=we;const ke=[{path:"/",name:"Home",component:ve,meta:{title:"Cantwell - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,202)),meta:{title:"Cantwell - About"}},{path:"/projects",name:"Projects",component:()=>r.e(773).then(r.bind(r,3773)),props:!0,meta:{title:"Cantwell - Projects"}},{path:"/projects/:projectId",component:()=>r.e(27).then(r.bind(r,3027))}],je=(0,le.p7)({history:(0,le.PO)("/cantwell-portfolio/"),routes:ke,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var _e=je;je.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var Se=r(617);const Te=r(8508);Te.replace(),(0,a.ri)(se).use(_e).use(Se.Z).mount("#app");const Ce=localStorage.getItem("theme");"dark"===Ce&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},2526:function(e,t,r){r.d(t,{Z:function(){return M}});var a=r(6252),o=r(3577),n=r(9963);const i={class:"pt-10 sm:pt-14"},s={class:"text-center"},l={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},d={class:"mt-10 sm:mt-10"},c=(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects by title or filter by category ",-1),u={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},p={class:"flex justify-between gap-2"},m=(0,a._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,a._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function h(e,t,r,h,f,y){const b=(0,a.up)("ProjectsFilter"),x=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",s,[(0,a._)("p",l,(0,o.zw)(e.projectsHeading),1)]),(0,a._)("div",d,[c,(0,a._)("div",u,[(0,a._)("div",p,[m,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchProject=t),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[n.nr,e.searchProject]])]),(0,a.Wm)(b,{onFilter:t[1]||(t[1]=t=>e.selectedCategory=t)})])]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(x,{key:e.id,project:e},null,8,["project"])))),128))])])}r(6699);var f=r(8508),y=r.n(f);const b=["name","id"],x=(0,a._)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),w=["value"];function v(e,t,r,n,i,s){return(0,a.wg)(),(0,a.iD)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[x,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.selectOptions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,o.zw)(e),9,w)))),128))],40,b)}var k={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:()=>["Web Application","Mobile Application","API Spring boot","Spring Microservice"]}}},j=r(3744);const _=(0,j.Z)(k,[["render",v]]);var S=_;const T={class:"grid overflow-hidden grid-lines grid-cols-1 auto-rows-auto gap-2.5 gap-y-0"},C={class:"text-center px-4 py-6"},A={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},P={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"},D=["src","alt"];function I(e,t,r,n,i,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(l,{to:"/projects/"+r.project.url,class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.w5)((()=>[(0,a._)("div",T,[(0,a._)("div",C,[(0,a._)("p",A,(0,o.zw)(r.project.title),1),(0,a._)("span",P,(0,o.zw)(r.project.category),1)]),(0,a._)("div",null,[(0,a._)("img",{src:r.project.logourl,alt:r.project.title,class:"rounded-2xl border-none m-auto p-2"},null,8,D)])])])),_:1},8,["to"])}var O={props:["project"]};const H=(0,j.Z)(O,[["render",I]]);var W=H,z=r(4841),E={components:{ProjectSingle:W,ProjectsFilter:S},data:()=>({projects:z.Z,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){y().replace()}};const L=(0,j.Z)(E,[["render",h]]);var M=L},5386:function(e,t,r){e.exports=r.p+"img/running.39b3cb7a.svg"},5940:function(e,t,r){e.exports=r.p+"img/Screenshot_1.0f3317b4.png"},2664:function(e,t,r){e.exports=r.p+"img/Screenshot_2.76d9d037.png"},9853:function(e,t,r){e.exports=r.p+"img/Screenshot_3.16e4d813.png"},8445:function(e,t,r){e.exports=r.p+"img/high-fidelity-mockup.2e2a4c6e.png"},8197:function(e,t,r){e.exports=r.p+"img/low-fidelity-mockup.a2c74daf.png"},5654:function(e,t,r){e.exports=r.p+"img/mid-fidelity-mockup.7f14bde3.png"},2803:function(e,t,r){e.exports=r.p+"img/original_support_page.4ebb682b.png"},2661:function(e,t,r){e.exports=r.p+"img/soundcloud-logo.326f26b1.png"},1978:function(e,t,r){e.exports=r.p+"img/0.906fffd8.jpg"},857:function(e,t,r){e.exports=r.p+"img/1.bd6abf3a.jpg"},9617:function(e,t,r){e.exports=r.p+"img/10.fb476b04.jpg"},6348:function(e,t,r){e.exports=r.p+"img/11.1b66d58b.jpg"},1153:function(e,t,r){e.exports=r.p+"img/12.ed9af80f.jpg"},1945:function(e,t,r){e.exports=r.p+"img/13.99ef604a.jpg"},2030:function(e,t,r){e.exports=r.p+"img/14.36758551.jpg"},5203:function(e,t,r){e.exports=r.p+"img/15.30d085c3.jpg"},5560:function(e,t,r){e.exports=r.p+"img/16.e7efdb77.jpg"},5797:function(e,t,r){e.exports=r.p+"img/2.4909cbb0.jpg"},3174:function(e,t,r){e.exports=r.p+"img/3.ebe99724.jpg"},3749:function(e,t,r){e.exports=r.p+"img/4.b6383a60.jpg"},3738:function(e,t,r){e.exports=r.p+"img/5.4e310199.jpg"},8646:function(e,t,r){e.exports=r.p+"img/6.1c8edd29.jpg"},5151:function(e,t,r){e.exports=r.p+"img/7.dae9cce8.jpg"},8182:function(e,t,r){e.exports=r.p+"img/8.286be3e8.jpg"},4840:function(e,t,r){e.exports=r.p+"img/9.4647745d.jpg"},2897:function(e,t,r){e.exports=r.p+"img/spec-story-logo.c7495a67.png"},9008:function(e,t,r){e.exports=r.p+"img/Screenshot_1.5470a39c.png"},8162:function(e,t,r){e.exports=r.p+"img/Screenshot_2.eb93410a.png"},9406:function(e,t,r){e.exports=r.p+"img/Screenshot_3.b7330737.png"},8597:function(e,t,r){e.exports=r.p+"img/spotify-logo.e9390242.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+(443===e?"about":e)+"."+{27:"d3d276c8",443:"542c2996",773:"fc679773"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Cantwell-portfolio:";r.l=function(a,o,n,i){if(e[a])e[a].push(o);else{var s,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[o];var p=function(t,r){s.onerror=s.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/cantwell-portfolio/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var i=r.p+r.u(t),s=new Error,l=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],s=a[1],l=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var c=l(r)}for(t&&t(a);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkCantwell_portfolio"]=self["webpackChunkCantwell_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2879)}));a=r.O(a)})();
//# sourceMappingURL=app.6fe7bf10.js.map