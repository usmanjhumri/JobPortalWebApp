/* eslint-disable react/no-unescaped-entities */
import UIUX from '../../assets/uiuxDesigner.jpeg'
import SE from '../../assets/jobsIMG.jpg'
import DS from '../../assets/jobsIMGDataScience.jpg'
const newsBlogArray = [
    {
        id: 0,
        img: SE,
        title: "Software Engineer",
        subtitle: "Exciting opportunity for a skilled Software Engineer to join our dynamic team at Tech Solutions Inc.",
        // description: "Are you passionate about building the digital future? At Tech Solutions Inc., we're seeking talented Software Engineers to join our dynamic team. As a Software Engineer with us, you'll have the opportunity to work on cutting-edge projects that shape the way we interact with technology. From developing innovative software solutions to tackling complex challenges, you'll be at the forefront of technological innovation. Join us and be part of a team that's shaping the future of technology."
        description: (
            <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>Join Us as a Software Engineer at Shape Solutions</h1>
                <img src={SE} alt="Software Engineer" style={{ width: '100%', marginBottom: '20px' }} />
                <div style={{ padding: '0 20px' }}>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        Are you passionate about shaping the future of technology? At Shape Solutions, we offer a unique opportunity for software developers and engineers to work on exciting projects and make a real impact in the industry.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        As an outsourcing company, we collaborate with a wide range of clients to bring their ideas to life, providing a dynamic and diverse work environment.
                    </p>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>What You'll Do:</h2>
                    <ul style={{ color: '#666', fontSize: '16px', marginBottom: '20px', paddingLeft: '20px' }}>
                        <li>Design, develop, and maintain cutting-edge software solutions.</li>
                        <li>Collaborate with cross-functional teams to deliver high-quality products.</li>
                        <li>Contribute to the full software development lifecycle, from concept to deployment.</li>
                        {/* Add more responsibilities as list items */}
                    </ul>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>What We Offer:</h2>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        Join us and be a part of a team that is dedicated to delivering high-quality software solutions to our clients and driving the advancement of technology forward.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        We offer competitive salary packages, comprehensive benefits, professional development opportunities, and a supportive work environment.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        If you're ready to take your career to the next level and make a real impact, Shape Solutions is the place for you.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 1,
        img: DS,
        title: "Data Scientist",
        subtitle: "Join our innovative team at Data Insights Co. as a Data Scientist and contribute to cutting-edge projects.",
        description: (
            <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>Join Us as a Data Scientist at Shape Solutions</h1>
                <img src={DS} alt="Data Scientist" style={{ width: '100%', marginBottom: '20px' }} />
                <div style={{ padding: '0 20px' }}>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        Are you fascinated by the power of data? Shape Solutions offers an exciting opportunity for talented Data Scientists to join our innovative team.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        As a Data Scientist with us, you'll have the chance to work on groundbreaking projects that leverage data to drive insights and inform decision-making.
                    </p>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>What You'll Do:</h2>
                    <ul style={{ color: '#666', fontSize: '16px', marginBottom: '20px', paddingLeft: '20px' }}>
                        <li>Develop and implement advanced data analytics and machine learning algorithms.</li>
                        <li>Extract, clean, and analyze large datasets to uncover valuable insights.</li>
                        <li>Collaborate with cross-functional teams to translate data into actionable strategies.</li>
                    </ul>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>What We Offer:</h2>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        Join us and be part of a team that's shaping the future of data-driven innovation.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        We provide competitive salary packages, comprehensive benefits, professional development opportunities, and a supportive work environment.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        If you're passionate about data and ready to make a real impact, Shape Solutions is the place for you.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 2,
        img: UIUX,
        title: "UX/UI Designer",
        subtitle: "Creative Designs Studio is seeking a talented UX/UI Designer to enhance user experiences for our clients.",
        description: (
            <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>Join Us as a UX/UI Designer at Shape Solutions</h1>
                <img src={UIUX} alt="UX/UI Designer" style={{ width: '100%', marginBottom: '20px' }} />
                <div style={{ padding: '0 20px' }}>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        Are you passionate about creating exceptional user experiences? Shape Solutions is seeking talented UX/UI Designers to enhance user experiences for our clients.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        As a UX/UI Designer with us, you'll have the opportunity to work on exciting projects that blend creativity with functionality.
                    </p>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>What You'll Do:</h2>
                    <ul style={{ color: '#666', fontSize: '16px', marginBottom: '20px', paddingLeft: '20px' }}>
                        <li>Create intuitive and visually appealing user interfaces for web and mobile applications.</li>
                        <li>Collaborate with stakeholders to understand user needs and business requirements.</li>
                        <li>Conduct user research and usability testing to inform design decisions.</li>
                    </ul>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>What We Offer:</h2>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        Join us and be part of a team that's shaping the future of user experience design.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        We provide competitive salary packages, comprehensive benefits, professional development opportunities, and a supportive work environment.
                    </p>
                    <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                        If you're passionate about design and ready to make a real impact, Shape Solutions is the place for you.
                    </p>
                </div>
            </div>
        )
    },
];

export default newsBlogArray
