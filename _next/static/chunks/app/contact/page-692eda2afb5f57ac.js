(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{1383:function(e,r,t){Promise.resolve().then(t.bind(t,4042))},4042:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var a=t(7437),s=t(2265),n=e=>{let{head:r,discription:t}=e;return(0,a.jsxs)("div",{className:"relative mb-36 h-[65vh] bg-cover bg-center md:h-[70vh]",style:{backgroundImage:"url(https://techspira.co.in/cdn/image/page-banner.jpg)"},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gray-900 opacity-50"}),(0,a.jsxs)("div",{className:"relative z-10 mx-auto flex h-full flex-col justify-center text-center",children:[(0,a.jsx)("h2",{className:"mb-3 text-[46px] font-semibold text-white md:text-[60px] lg:text-[72px]",children:r}),t?(0,a.jsx)("li",{className:"text-[16px] text-white",children:t}):(0,a.jsxs)("ul",{className:"flex justify-center space-x-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"text-white hover:underline",children:"Home"})}),(0,a.jsx)("li",{className:"text-[16px] text-white",children:"/"}),(0,a.jsx)("li",{className:"text-[16px] text-white",children:r})]})]})]})},l=t(2200),o=t(3712),d=t(8214);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...n}=e;return(0,a.jsx)("input",{type:s,className:(0,d.cn)("flex h-10 w-full rounded-md border border-border bg-background px-3 py-6 text-sm text-text ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});i.displayName="Input";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("textarea",{className:(0,d.cn)("flex min-h-[130px] w-full rounded-md border border-input bg-background px-2 py-4 text-sm text-text ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});c.displayName="Textarea";var m=t(8030);/**
 * @license lucide-react v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let x=(0,m.Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),u=(0,m.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),f=(0,m.Z)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),p=[{title:"Telephone",dec:"+91 9035778342"},{title:"Mail Address",dec:"contactus@techspira.co.in"},{title:"Location",dec:" Bengaluru, Karnataka"}];var b=()=>{let[e,r]=(0,s.useState)({name:"",email:"",phone:"",subject:"",message:""}),t=t=>{r({...e,[t.target.name]:t.target.value})},d=async t=>{t.preventDefault(),(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(alert("Message sent successfully!"),r({name:"",email:"",phone:"",subject:"",message:""})):alert("Failed to send message.")};return(0,a.jsxs)("div",{children:[(0,a.jsx)(n,{head:"Contact Us"}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 gap-y-28 px-4 md:grid-cols-3 md:px-24",children:null==p?void 0:p.map((e,r)=>(0,a.jsxs)(o.Zb,{className:"bg-background px-6 py-8",children:[(0,a.jsxs)("div",{class:"mx-auto -mt-[100px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#005de0] text-white",children:[0==r&&(0,a.jsx)(x,{}),1==r&&(0,a.jsx)(u,{}),2==r&&(0,a.jsx)(f,{})]}),(0,a.jsx)("h5",{className:"mt-[15px] text-center text-[18px] font-semibold leading-[36px]",children:null==e?void 0:e.title}),(0,a.jsx)("p",{className:"text-center text-[22px] leading-[36px]",children:null==e?void 0:e.dec})]},r))}),(0,a.jsx)("form",{onSubmit:d,children:(0,a.jsxs)("div",{className:"mx-auto max-w-3xl px-4 py-16",children:[(0,a.jsx)("h2",{className:"text-center text-[28px] font-medium leading-[48px] text-text",children:"Get Support from our Team"}),(0,a.jsxs)("div",{className:"mt-8 grid grid-cols-1 gap-6 md:grid-cols-2",children:[(0,a.jsx)(i,{type:"text",name:"name",placeholder:"Your Name",className:"border border-transparent bg-[#f6f7f9]",value:e.name,onChange:t,required:!0}),(0,a.jsx)(i,{type:"email",name:"email",placeholder:"Your Email",className:"border border-transparent bg-[#f6f7f9]",value:e.email,onChange:t,required:!0}),(0,a.jsx)(i,{type:"tel",name:"phone",placeholder:"Your Number",className:"border border-transparent bg-[#f6f7f9]",value:e.phone,onChange:t}),(0,a.jsx)(i,{type:"text",name:"subject",placeholder:"Your Subject",className:"border border-transparent bg-[#f6f7f9]",value:e.subject,onChange:t,required:!0}),(0,a.jsx)("div",{className:"md:col-span-2",children:(0,a.jsx)(c,{placeholder:"Write A Message",className:"border border-transparent bg-[#f6f7f9]",name:"message",value:e.message,onChange:t,required:!0})}),(0,a.jsx)("div",{className:"text-center md:col-span-2",children:(0,a.jsx)(l.z,{size:"md",type:"submit",className:"font-manrope font-medium",children:"Send Message"})})]})]})}),(0,a.jsx)("div",{className:"-mb-16 py-16",children:(0,a.jsx)("iframe",{src:"https://maps.google.com/maps?q=New%20York%20University%20&t=m&z=10&output=embed&iwloc=near",title:"New York University","aria-label":"New York University",className:"h-96 w-full border-0",allowFullScreen:!0})})]})}},2200:function(e,r,t){"use strict";t.d(r,{z:function(){return i}});var a=t(7437),s=t(2265),n=t(1538),l=t(2218),o=t(8214);let d=(0,l.j)("relative z-10 overflow-hidden rounded-[5px] border-2 border-primary bg-primary px-[1.8em] py-[0.8em] text-center text-[16px]  text-white transition duration-1000 ease-in-out before:absolute before:bottom-0 before:left-[-20%] before:right-[-20%] before:top-[-4%] before:z-[-1] before:h-[150%] before:w-[150%] before:skew-x-[45deg] before:scale-x-0 before:scale-y-100 before:transform before:border-2 before:border-primary before:bg-white before:transition-all before:duration-700 hover:bg-white hover:text-primary hover:before:scale-x-100",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-13 rounded-md px-10",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,r)=>{let{className:t,variant:s,size:l,asChild:i=!1,...c}=e,m=i?n.g7:"button";return(0,a.jsx)(m,{className:(0,o.cn)(d({variant:s,size:l,className:t})),ref:r,...c})});i.displayName="Button"},3712:function(e,r,t){"use strict";t.d(r,{Zb:function(){return l},aY:function(){return o}});var a=t(7437),s=t(2265),n=t(8214);let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,n.cn)("rounded-lg border border-slate-100 bg-card text-card-foreground shadow-md",t),...s})});l.displayName="Card",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",t),...s})}).displayName="CardHeader",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("h3",{ref:r,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})}).displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("p",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",t),...s})});o.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter"},8214:function(e,r,t){"use strict";t.d(r,{cn:function(){return n}});var a=t(4839),s=t(6164);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,a.W)(r))}}},function(e){e.O(0,[950,971,23,744],function(){return e(e.s=1383)}),_N_E=e.O()}]);