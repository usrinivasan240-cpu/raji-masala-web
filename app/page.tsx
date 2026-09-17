import Portfolio from "../components/Portfolio";
const projects = [
 {title:"Aster Studio",type:"Brand & digital experience",description:"A refined product site for a design-led studio, balancing editorial typography with a conversion-focused interface.",stack:"Next.js · TypeScript · CMS",href:"#contact"},
 {title:"Lumen Health",type:"Product design",description:"A calm, accessible dashboard concept that turns complex information into clear, actionable workflows.",stack:"React · Figma · Accessibility",href:"#contact"},
 {title:"Atlas Notes",type:"Web application",description:"A fast knowledge workspace with keyboard-first navigation, search and a deliberately quiet visual system.",stack:"React · Node · PostgreSQL",href:"#contact"},
 {title:"Noir Objects",type:"E-commerce concept",description:"A minimal commerce experience for an independent objects label with emphasis on storytelling and product detail.",stack:"Next.js · Stripe · Motion",href:"#contact"},
 {title:"Field Journal",type:"Editorial platform",description:"A responsive publishing experience built for long-form stories, photography and thoughtful reading.",stack:"Astro · MDX · SEO",href:"#contact"},
 {title:"Orbit Identity",type:"Visual system",description:"A flexible identity and component language translated into a cohesive digital design system.",stack:"Figma · Tokens · CSS",href:"#contact"}
];
const skills=["TypeScript","React","Next.js","Node.js","UI/UX Design","Figma","Design Systems","Accessibility","SEO","Motion Design","Git & GitHub","Content Strategy"];
export default function Page(){return <Portfolio projects={projects} skills={skills}/>;}