import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import GenericPage from './components/GenericPage';
import Home from './pages/Home';

// Lazy Load Pages for Performance
const Chairman = lazy(() => import('./pages/Chairman'));
const Secretary = lazy(() => import('./pages/Secretary'));
const PrincipalDesk = lazy(() => import('./pages/PrincipalDesk'));
const Agri = lazy(() => import('./pages/departments/Agri'));
const Biomedical = lazy(() => import('./pages/departments/Biomedical'));
const AIDS = lazy(() => import('./pages/departments/AIDS'));
const CSE = lazy(() => import('./pages/departments/CSE'));
const EEE = lazy(() => import('./pages/departments/EEE'));
const Mechanical = lazy(() => import('./pages/departments/Mechanical'));
const Civil = lazy(() => import('./pages/departments/Civil'));
const ECE = lazy(() => import('./pages/departments/ECE'));
const Library = lazy(() => import('./pages/facilities/Library'));
const Hostel = lazy(() => import('./pages/facilities/Hostel'));
const Transport = lazy(() => import('./pages/facilities/Transport'));
const Cafeteria = lazy(() => import('./pages/facilities/Cafeteria'));
const Placement = lazy(() => import('./pages/Placement'));
const Events = lazy(() => import('./pages/Events'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Administration = lazy(() => import('./pages/Administration'));
const Admission = lazy(() => import('./pages/Admission'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Section */}
            <Route path="/about" element={
              <GenericPage title="About College" subtitle="KSK College of Engineering & Technology" backgroundImage="/images/banners/about.jpg">
                <div className="space-y-6 text-justify">
                  <p>
                    <strong>K.S.K College of Engineering and Technology</strong> is providing quality education with a dedicated service to Technical Education. The College has earned a status for Technical expertise, excellent facilities, well discipline and pioneering students.
                  </p>
                  <p>
                    KSKCET believes in creating and disseminating knowledge and skills in core and front line disciplines through innovative education programs, industrial training, research and developing a novel cadre of professional with a high level of skills, deep sense of social commitment and ethics.
                  </p>
                  <p>
                    KSKCET is a self-financing Engineering College. It was established in the year 2011 by <strong>K.S.Krishna Educational Charitable Trust</strong>, serves as one of the organization of higher education. The College is approved by AICTE, New Delhi and Affiliated to Anna University, Chennai. The College offers 8 UG Programmes. The biggest assets of Our College is its committed administration and a devoted team of faculty members.
                  </p>
                </div>
              </GenericPage>
            } />

            <Route path="/chairman" element={<Chairman />} />
            <Route path="/secretary" element={<Secretary />} />
            <Route path="/principal-desk" element={<PrincipalDesk />} />

            {/* New Pages */}
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />

            {/* Administration Routes */}
            <Route path="/administration" element={<Administration />} />
            <Route path="/governing-body" element={<Administration />} />
            <Route path="/iqac" element={<Administration />} />
            <Route path="/grievance" element={<Administration />} />

            {/* Facility Routes */}
            <Route path="/programs-offered" element={
              <GenericPage title="Programs Offered" subtitle="Undergraduate Courses (B.E. / B.Tech)">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "B.E. Computer Science and Engineering",
                    "B.E. Electronics and Communication Engineering",
                    "B.E. Electrical and Electronics Engineering",
                    "B.E. Mechanical Engineering",
                    "B.E. Civil Engineering",
                    "B.Tech Artificial Intelligence and Data Science",
                    "B.E. Bio-Medical Engineering",
                    "B.E. Agriculture Engineering"
                  ].map((course, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-white border border-gray-200 rounded-sm hover:border-blue-500 hover:shadow-md transition-all">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="font-medium text-gray-800">{course}</span>
                    </div>
                  ))}
                </div>
              </GenericPage>
            } />
            <Route path="/vision-mission" element={
              <GenericPage title="Vision & Mission" subtitle="Guiding Principles" backgroundImage="/images/banners/vision.jpg">
                <div className="grid gap-12">
                  <div className="bg-blue-50 p-8 rounded-sm border-t-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="text-4xl mr-3 opacity-50">01.</span> Vision
                    </h3>
                    <p className="text-lg leading-relaxed">
                      To be a premier institution of engineering education, producing globally recognized professionals with strong moral values. We aim to transform students into technically skilled and ethically strong individuals who can contribute effectively to society.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-gray-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-4xl mr-3 opacity-50">02.</span> Mission
                    </h3>
                    <ul className="space-y-3 list-none">
                      <li className="flex items-start"><span className="text-blue-600 mr-2">➤</span> To impart value-based technical education, especially to students from rural areas.</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">➤</span> To develop students into competent professionals ready to meet industrial challenges.</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">➤</span> To foster administrative ability, proficiency, and social responsibility in our graduates.</li>
                    </ul>
                  </div>
                </div>
              </GenericPage>
            } />

            {/* Administration Section */}
            <Route path="/administration" element={<Navigate to="/governing-body" replace />} />
            <Route path="/governing-body" element={<GenericPage title="Governing Body" subtitle="Administrative Council" backgroundImage="/images/banners/governing.jpg"><p>The Governing Body ensures the effective management and strategic planning of the institution.</p></GenericPage>} />
            <Route path="/iqac" element={<GenericPage title="IQAC" subtitle="Internal Quality Assurance Cell" backgroundImage="/images/banners/iqac.jpg"><p>IQAC works towards maintaining and enhancing the quality of education and institutional processes.</p></GenericPage>} />
            <Route path="/grievance" element={<GenericPage title="Grievance / Suggestions" subtitle="Student & Staff Support" backgroundImage="/images/banners/grievance.jpg"><p>A dedicated cell to address grievances and suggestions from students and staff to ensure a harmonious campus environment.</p></GenericPage>} />

            {/* Academics Section - Departments */}
            <Route path="/departments" element={<Navigate to="/cse" replace />} />
            <Route path="/cse" element={<CSE />} />
            <Route path="/ece" element={<ECE />} />
            <Route path="/eee" element={<EEE />} />
            <Route path="/mech" element={<Mechanical />} />
            <Route path="/civil" element={<Civil />} />
            <Route path="/ai-ds" element={<AIDS />} />
            <Route path="/bme" element={<Biomedical />} />
            <Route path="/agri" element={<Agri />} />

            {/* Other Links */}
            <Route path="/placement" element={<Placement />} />
            <Route path="/placements" element={<Placement />} /> {/* Alias for safety */}
            <Route path="/facilities" element={<Library />} />
            <Route path="/library" element={<Library />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/cafeteria" element={<Cafeteria />} />

            {/* Student Support */}
            <Route path="/events" element={<Events />} />
            <Route path="/iedc" element={<GenericPage title="IEDC" subtitle="Innovation & Entrepreneurship" backgroundImage="/images/banners/iedc.jpg"><p>The Innovation and Entrepreneurship Development Centre (IEDC) nurtures the entrepreneurial spirit among students.</p></GenericPage>} />
            <Route path="/nss" element={<GenericPage title="NSS" subtitle="National Service Scheme" backgroundImage="/images/banners/nss.jpg"><p>The NSS unit encourages students to engage in community service and social activities.</p></GenericPage>} />
            <Route path="/clubs" element={<GenericPage title="Clubs" subtitle="Student Clubs" backgroundImage="/images/banners/clubs.jpg"><p>Various clubs like the Science Club, fine Arts Club, and Tech Club provide platforms for students to showcase their talents.</p></GenericPage>} />

            <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold bg-gray-50">Page Not Found</div>} />
          </Routes>
        </Suspense>
      </Layout >
    </Router >
  );
}

export default App;
