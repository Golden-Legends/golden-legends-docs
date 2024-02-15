"use strict";(self.webpackChunkgolden_legends_docs=self.webpackChunkgolden_legends_docs||[]).push([[6904],{6092:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(7624),s=r(2172);const o={slug:"architecture",title:"L'architecture, le d\xe9but",authors:["remi"],tags:["architecture","technique"]},i=void 0,c={permalink:"/golden-legends-docs/blog/architecture",source:"@site/blog/2024-02-14-architecture/index.md",title:"L'architecture, le d\xe9but",description:"La conception de l'architecture de notre projet est une \xe9tape cruciale. Celle-ci doit \xeatre pens\xe9e pour r\xe9pondre \xe0 nos besoins actuels, mais aussi pouvoir \xe9voluer pour nous permettre de r\xe9agir facilement aux changements que nous pourrions rencontrer. D\xe9couvrez dans cet article les choix que nous avons faits pour notre projet Golden Legends.",date:"2024-02-14T00:00:00.000Z",formattedDate:"February 14, 2024",tags:[{label:"architecture",permalink:"/golden-legends-docs/blog/tags/architecture"},{label:"technique",permalink:"/golden-legends-docs/blog/tags/technique"}],readingTime:2.035,hasTruncateMarker:!0,authors:[{name:"R\xe9mi Saurel",title:"Dev",url:"https://github.com/remisaurel",imageURL:"https://github.com/remisaurel.png",key:"remi"}],frontMatter:{slug:"architecture",title:"L'architecture, le d\xe9but",authors:["remi"],tags:["architecture","technique"]},unlisted:!1,nextItem:{title:"Bienvenue",permalink:"/golden-legends-docs/blog/bienvenue"}},a={authorsImageUrls:[void 0]},u=[{value:"\ud83c\udfd7\ufe0f Conception",id:"\ufe0f-conception",level:2},{value:"\ud83d\udda5\ufe0f Frontend",id:"\ufe0f-frontend",level:3},{value:"\ud83c\udfed Backend",id:"-backend",level:3},{value:"\u2194\ufe0f Communications",id:"\ufe0f-communications",level:3},{value:"\ud83d\udcda Documentation",id:"-documentation",level:3}];function l(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"La conception de l'architecture de notre projet est une \xe9tape cruciale. Celle-ci doit \xeatre pens\xe9e pour r\xe9pondre \xe0 nos besoins actuels, mais aussi pouvoir \xe9voluer pour nous permettre de r\xe9agir facilement aux changements que nous pourrions rencontrer. D\xe9couvrez dans cet article les choix que nous avons faits pour notre projet Golden Legends."}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-conception",children:"\ud83c\udfd7\ufe0f Conception"}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s avoir discut\xe9 avec Th\xe9o et Nicolas, et de par leur exp\xe9rience avec BabylonJS sur ",(0,t.jsx)(n.a,{href:"https://github.com/gamesonweb/be-green-daily-green",children:"leur projet de l'an dernier"}),", nous avons d\xe9cid\xe9 de construire notre projet de fa\xe7on \xe0 pouvoir travailler en parall\xe8le sur les diff\xe9rentes t\xe2ches.\nJe vais vous pr\xe9senter l'architecture en expliquant les raisons pour lesquelles nous avons choisies certaines technologies par rapport \xe0 d'autres."]}),"\n",(0,t.jsx)(n.mermaid,{value:"---\ntitle: Architecture globale du projet\n---\nclassDiagram\nnamespace Principal {\n    class Frontend {\n        BabylonJS\n        VueJS\n    }\n    class Backend {\n        AdonisJS\n        Typescript\n    }\n    class BDD {\n        PostgreSQL\n    }\n\n}\nFrontend <--\x3e Backend : REST + Websocket\nBackend <--\x3e BDD\n\nnamespace Doc {\n    class Documentation{\n        Docusaurus\n    }\n}"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez retrouver l'ensemble du code sur notre ",(0,t.jsx)(n.a,{href:"https://github.com/Golden-Legends",children:"organisation GitHub"}),". Nous avons 3 r\xe9positories principaux :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Golden-Legends/golden-legends",children:"Frontend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Golden-Legends/golden-legends-back",children:"Backend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Golden-Legends/golden-legends-docs",children:"Documentation"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-frontend",children:"\ud83d\udda5\ufe0f Frontend"}),"\n",(0,t.jsx)(n.p,{children:"Nous avons d\xe9cid\xe9 d'ajouter un frakework web frontend : VueJS. C'est une technologie que je connais bien et qui permet de cr\xe9er des interfaces utilisateurs de fa\xe7on rapide et efficace. Rien de personnel contre React et Angular qui sont \xe9galement tr\xe8s puissants, question de pr\xe9f\xe9rences ici.\\"}),"\n",(0,t.jsx)(n.h3,{id:"-backend",children:"\ud83c\udfed Backend"}),"\n",(0,t.jsxs)(n.p,{children:["C\xf4t\xe9 Backend, nous n'avions de l'exp\xe9rience qu'avec Spring Boot. Bien que celui-ci soit tr\xe8s performant et aurait tr\xe8s bien pu correspondre \xe0 nos besoins, nous avons d\xe9cid\xe9 de nous tourner vers ",(0,t.jsx)(n.a,{href:"https://adonisjs.com/",children:"AdonisJS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s \xeatre mont\xe9 en comp\xe9tence dessus via un projet personnel, j'ai \xe9t\xe9 convaincu par ce framework. Il est tr\xe8s complet et permet de rester dans l'\xe9cosyst\xe8me Javascript/Typescript. De plus, il est tr\xe8s bien document\xe9 et dispose d'une communaut\xe9 active qui pourra nous aider si nous rencontrons des difficult\xe9s."}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-communications",children:"\u2194\ufe0f Communications"}),"\n",(0,t.jsxs)(n.p,{children:["Pour la communication entre le Frontend et le Backend, nous avons choisi d'utiliser une architecture REST pour les requ\xeates classiques. \xc0 ce jour, nous commenceons \xe0 mettre en place des websockets pour les communications en temps r\xe9el qui serviront pour.... le ",(0,t.jsx)(n.strong,{children:"mode multijoueur"})," !"]}),"\n",(0,t.jsx)(n.h3,{id:"-documentation",children:"\ud83d\udcda Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["Pour la documentation (et le blog...), nous avons choisi d'utiliser ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),". C'est un outil qui permet de cr\xe9er des sites statiques \xe0 partir de fichiers Markdown. Cela nous permettra de documenter notre projet de fa\xe7on claire et efficace."]})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);