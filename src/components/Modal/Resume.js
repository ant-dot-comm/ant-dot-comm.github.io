import classNames from "classnames"
import { Button } from "semantic-ui-react"


export function Resume(props) {
  const {
    className,
  } = props

  const resumeContentClasses = classNames(className, "resume-content")

  return (
    <div className={resumeContentClasses}>
        <h1 className="heading-1 mb">Resume</h1>
        <p>Front-End Developer with 7+ years of experiece building efficient, scalable, and well-documented code used by millions everyday on the GoFundMe platform. I am passionate about blending the art of design and the skill of programming to deliver engaging user experiences.</p>

        <h2 className="heading-2 mb">Gofundme</h2>
        <h3 className="heading-3">UX Design System Engineer II</h3>
        <p>Led the development of components for our internal design system called Heart using ReactJS, Typescript, Sass, React Testing Library, and Jest.</p>
        <p>Developed all documentation for Heart using Storybook as a single source of truth for development teams to reference and help them build faster while maintaining product consistency.</p>
        <p>Led office hours to communicate new Heart features and collaborate with development teams on integration and iteration of Heart releases.</p>
        <h3 className="heading-3">Front-End Engineer</h3>
        <p>As we migrated into ReactJS I was responsible for building, maintaining, and setting up testing for the shared component library using ReactJS, Foundation, Jest, and Enzyme.</p>
        <p>Developed and maintained components and layouts for the create flow and campaign page teams using ReactJS, Redux, and React Final Form.</p>
        <Button className="mr primary large mb show-for-medium" href="https://www.figma.com/proto/GcKjFaH6nQjGF4aliNKRDE/Antoni-%40-GFM?node-id=105%3A16&scaling=contain&page-id=0%3A1&starting-point-node-id=105%3A16" target="_blank" rel="noreferrer">Campaign Page Presentation</Button>
        <p>Led front-end development of the homepage and other marketing pages using PHP, JavaScript, and CSS.</p>
        <p>Designed and developed reusable components and page layouts for the Internal Tools team using Vue.</p>
        
        <h2 className="heading-2 mb">LiveEdit</h2>
        <h3 className="heading-3">Web Designer / Front-End Developer</h3>
        <p>Designed and presented site designs for clients and led constructive feedback discussions to achieve final design approval.</p>
        <p>Integrated the approved site designs into the LiveEdit Aurora CMS using HTML, CSS, JS, and Bootstrap and led LiveEdit Aurora CMS training for clients once development was complete.</p>
    </div>
  );
}