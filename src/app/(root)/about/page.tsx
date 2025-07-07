import { Briefcase, Calendar, Code, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const Page = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate Frontend Developer with a strong foundation in modern
            web technologies and a drive for creating exceptional user
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className="animate-slide-in-left">
            <div className="bg-gray-800/50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#a855f7]" size={20} />
                  <span className="text-gray-300">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-[#a855f7]" size={20} />
                  <span className="text-gray-300">1.5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-[#a855f7]" size={20} />
                  <span className="text-gray-300">Frontend Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-[#a855f7]" size={20} />
                  <span className="text-gray-300">
                    Currently at Ayata Incorporation
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#a855f7] mb-6">
                What I Do
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in building scalable web applications using React,
                Next.js, and modern JavaScript technologies. My experience
                includes developing interactive learning platforms, management
                systems, and e-commerce solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m passionate about writing clean, effective code and
                creating user interfaces that are both beautiful and functional.
                I enjoy working with cross-functional teams and have experience
                with Agile development approaches.
              </p>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="animate-slide-in-right">
            <div className="bg-gray-800/50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-[#a855f7] mb-6">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-[#a855f7] pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Junior Frontend Developer
                  </h3>
                  <p className="text-[#a855f7] font-semibold">
                    Ayata Incorporation
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    May 2024 - Current • Kathmandu, Nepal
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>
                      • Developed core frontend features for Avyaas, an
                      e-learning platform, including video playback, PDF
                      viewing, live classes with Zoom, and online exams.
                    </li>
                    <li>
                      • Integrated eSewa and Khalti payment gateways for
                      seamless course purchases and subscription handling.
                    </li>
                    <li>
                      • Built responsive UI for AMS (Attendance Management
                      System) to track employee attendance, payroll, and leave
                      requests with real-time notifications via WebSockets.
                    </li>
                    <li>
                      • Implemented live chat and interactive dashboards for
                      internal communication and HR operations.
                    </li>
                    <li>
                      • Contributed to Zunun, a full-fledged school management
                      system, enabling course, assignment, and resource
                      management for teachers and students.
                    </li>
                    <li>
                      • Developed the billing interface for CEDEP&apos;s
                      internal billing system, handling invoice tracking and
                      payment summaries.
                    </li>
                  </ul>
                </div>
                <div className="border-l-2 border-[#a855f7] pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Intern - Frontend Developer
                  </h3>
                  <p className="text-[#a855f7] font-semibold">
                    Ayata Incorporation
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    Feb 2024 - Apr 2024 • Kathmandu, Nepal
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>
                      • Gained hands-on experience in frontend development
                      during an internship, focusing on building and optimizing
                      user interfaces using React, JavaScript, and CSS.
                    </li>
                    <li>
                      • Learned to collaborate effectively with mentors and team
                      members while working on real-world projects, enhancing
                      technical and communication skills.
                    </li>
                    <li>
                      • Built a strong foundation in writing clean, reusable
                      code while adhering to industry best practices.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#a855f7] mb-6">
                Education
              </h2>
              <div className="border-l-2 border-[#a855f7] pl-6">
                <h3 className="text-xl font-bold text-white">
                  Bachelor in Computer Application
                </h3>
                <p className="text-[#a855f7] font-semibold">
                  Nepal Kasthamandap College (TU Affiliation)
                </p>
                <p className="text-gray-400 text-sm">2020 - 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold text-[#a855f7] mb-4">
                Frontend Development
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>React.js & Next.js</li>
                <li>JavaScript & TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold text-[#a855f7] mb-4">
                Development Tools
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>Git & GitHub</li>
                <li>WebSockets</li>
                <li>API Integration</li>
                <li>Unit Testing & Debugging</li>
                <li>Project Management Tools</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold text-[#a855f7] mb-4">
                Specializations
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>System Architecture & Design</li>
                <li>E-commerce Development</li>
                <li>Learning Management Systems</li>
                <li>Dashboard Development</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
