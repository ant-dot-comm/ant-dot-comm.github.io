import classNames from "classnames"

export function Resume(props) {
  const {
    className,
  } = props

  const resumeContentClasses = classNames(className, "resume-content")

  return (
    <div className={resumeContentClasses}>
        <h1 className="heading-1 mb">Resume</h1>
        <p>Front-End Developer with over 10 years of experiece building efficient, scalable, and well-documented code used by millions everyday on the GoFundMe and LeagueSpot platforms. I am passionate about blending the art of design and the skill of programming to deliver engaging user experiences.</p>

        <h2 className="heading-2 mb">LeagueSpot</h2>
        <h3 className="heading-3">Senior UI Developer</h3>
        <p>Led the inception and continual refinement of LeagueSpot's comprehensive design system, meticulously crafting guidelines, components, and patterns from scratch while maintaining alignment with brand identity and user experience goals.</p>
        <p>Identified opportunities for existing UI improvement, designing and developing strategic enhancements to elevate the user experience and maintain design system integrity.</p>
        <p>Designed and developed a new B2B-focused public-facing website, leveraging Strapi headless CMS. This involved conceptualizing and executing the website's architecture, user interface, and user experience to effectively communicate our brand message and cater to our target audience's needs. By utilizing Strapi's headless CMS capabilities, I ensured seamless content management and flexibility, empowering our team to deliver timely and relevant content to our audience.</p>

        <h2 className="heading-2 mb">Gofundme</h2>
        <h3 className="heading-3">UI Design System Engineer II</h3>
        <p>Led the development of robust design system components for the internal Heart design system at GoFundMe. Leveraged ReactJS, Typescript, Sass, React Testing Library, and Jest to ensure product consistency and efficiency in development.</p>
        <p>Developed comprehensive documentation for Heart using Storybook as a central reference point. Empowered designers and development teams to build faster while maintaining cohesive product experiences.</p>
        <p>Conducted office hours sessions to communicate new Heart features and collaborated closely with development teams for seamless integration and iterative improvements of Heart releases.</p>
        <h3 className="heading-3">Front-End Engineer</h3>
        <p>Played a pivotal role in the migration to ReactJS, responsible for building, maintaining, and testing the shared component library. Utilized ReactJS, Foundation, Jest, and Enzyme for streamlined development.</p>
        <p>Developed and managed components and layouts for the create flow and campaign page teams, employing ReactJS, Redux, and React Final Form for optimal user experiences.</p>
        <p>Led front-end development efforts for the homepage and other marketing pages using PHP, JavaScript, and CSS, contributing to GoFundMe's impactful online presence.</p>
        <p>Designed and developed reusable components and page layouts for the Internal Tools team using Vue, ensuring a smooth and efficient workflow.</p>
        
        <h2 className="heading-2 mb">LiveEdit</h2>
        <h3 className="heading-3">Web Designer / Front-End Developer</h3>
        <p>Designed and presented site designs for clients and led constructive feedback discussions to achieve final design approval.</p>
        <p>Integrated the approved site designs into the LiveEdit Aurora CMS using HTML, CSS, JS, and Bootstrap and led LiveEdit Aurora CMS training for clients once development was complete.</p>
    </div>
  );
}