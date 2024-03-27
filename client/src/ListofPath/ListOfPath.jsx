import Home from '../Pages/Home/Home'
import SavedJobs from '../Pages/SavedJobs/SavedJobs'
import About from '../Pages/About/About'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Jobs from '../Pages/Jobs/Jobs'
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SignUp/SignUp'
export const Path = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/savedjobs',
        component: <SavedJobs />
    },
    {
        path: '/about',
        component: <About />
    },
    {
        path: '/contact-us',
        component: <ContactUs />
    },
    {
        path: '/jobs',
        component: <Jobs />
    },
    {
        path: '/login',
        component: <SignIn />
    },
    {
        path: '/signup',
        component: <SignUp />
    },
]