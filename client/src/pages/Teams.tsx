import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  image?: string;
}

const coreTeam: TeamMember[] = [
  {
    id: 1,
    name: "Rakesh Raushan",
    role: "Club President",
    // bio: "Cybersecurity enthusiast with expertise in penetration testing",
    github: "https://github.com/Rakesh9608",
    linkedin: "https://www.linkedin.com/in/rakeshraushan403",
    email: "rakesh@college.edu",
    image: "./images/Rakesh.jpg",
  },
  {
    id: 2,
    name: "Vicky Raj",
    role: "Vice-President",
    github: "https://github.com/catalyst2004",
    linkedin: "http://www.linkedin.com/in/vicky-raj-83982b294",
    email: "vicky@college.edu",
    image: "./images/vicky.jpg",
  },

  {
    id: 3,
    name: "Rohit Kumar",
    role: "Treasurer",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/rohit-kumar-6a7366386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "rohit@college.edu",
    image: "./images/rohit.jpg",
  },
    {
    id: 4,
    name: "Satyam Shresth",
    role: "Joint-Treasurer",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/satyam-shresth-499026295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "satyam@college.edu",
    image: "./images/Satyam.jpg",
  },
  {
    id: 5,
    name: "Aditya Pratap Singh",
    role: "Secretary",
    github: "https://github.com/Aditya9099",
    linkedin: "https://www.linkedin.com/in/aditya-pratap-singh-0538bb33b",
    email: "vicky@college.edu",
    image: "./images/adityapratap.jpeg",
  },
   {
    id: 6,
    name: "Diksha Mishra",
    role: "Chief Event-Coordinator",
    github: "https://github.com/Diksha-2005",
    linkedin:
      "https://www.linkedin.com/in/diksha-mishra-24b375289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "diksha@college.edu",
    image: "./images/Diksha.jpg",
  },
  {
    id: 7,
    name: "Ankit Kar",
    role: "Editorial & Photography Lead",
    github: "https://github.com/Ankit018-kar",
    linkedin: "https://www.linkedin.com/in/ankit-kar-653771247/",
    email: "ankit@college.edu",
    image: "./images/ankit.jpg",
  },
  {
    id: 8,
    name: "Aritra Samui",
    role: "Event Management Lead",
    github: "https://github.com/aritrasamui536",
    linkedin: "https://www.linkedin.com/in/aritra-samui-0aaaa9330",
    email: "aritra@college.edu",
    image: "./images/aritra12.jpeg",
  },
];

const websiteContentTeam: TeamMember[] = [
  {
    id: 1,
    name: "Ayush Bhardwaj",
    role: "Website Design",
    github: "https://github.com/bhardwajayush8210",
    linkedin: "https://www.linkedin.com/in/ayush-raj-4a14b1244",
    email: "bhardwajayush909@gmail.com",
    image: "./images/AyushBharat.jpg",
  },
   {
    id: 2,
    name: "Shubhranil Kundu",
    role: "Web Design & Mgmt Lead",
    github: "https://github.com/Shubhraweb89",
    linkedin: "https://www.linkedin.com/in/shubhranil-kundu-31baaa293/",
    email: "shubhranil@college.edu",
    image: "./images/Shubhranil.jpg",
  },
  {
    id: 3,
    name: "Ankit Bajpeyee",
    role: "Website Design",
    github: "",
    linkedin: "https://www.linkedin.com/in/ankit-bajpeyee",
    email: "ankit.b@college.edu",
    image: "./images/AnkitBaj.jpg",
  },
  // {
  //   id: 3,
  //   name: "Abhishek Kumar",
  //   role: "Content Design",
  //   github: "",
  //   linkedin:
  //     "https://www.linkedin.com/in/abhishek-kumar-896198323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   email: "abhishek.k@college.edu",
  //   image: "./images/Abhishekkr.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Simran Kumari",
  //   role: "Content Design",
  //   github: "https://github.com/simrankumari20",
  //   linkedin:
  //     "https://www.linkedin.com/in/simran-kumari-771b342aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   email: "simran@college.edu",
  //   image: "./images/Simran.jpg",
  // },
   
  
];

const gdTeam: TeamMember[] = [
  {
    id: 1,
    name: "Abhishek Raj",
    role: "Content Design",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/abhishek-kumar-896198323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "abhishek.r@college.edu",
    image: "./images/Abhishekraj.jpg",
  },
  {
    id: 2,
    name: "Aditya Kumar",
    role: "Content Design",
    github: "https://github.com/AdityawithA",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-892099293",
    email: "aditya@college.edu",
    image: "./images/aditya.jpg",
  },
    {
    id: 3,
    name: "Simran Kumari",
    role: "Content Design",
    github: "https://github.com/simrankumari20",
    linkedin:
      "https://www.linkedin.com/in/simran-kumari-771b342aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "simran@college.edu",
    image: "./images/Simran.jpg",
  },
];

const otherTeams: TeamMember[] = [
  // {
  //   id: 1,
  //   name: "Diksha Mishra",
  //   role: "Event-Coordinator",
  //   github: "https://github.com/Diksha-2005",
  //   linkedin:
  //     "https://www.linkedin.com/in/diksha-mishra-24b375289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   email: "diksha@college.edu",
  //   image: "./images/Diksha.jpg",
  // },
  // {
  //   id: 2,
  //   name: "Satyam Shresth",
  //   role: "PR Management",
  //   github: "",
  //   linkedin:
  //     "https://www.linkedin.com/in/satyam-shresth-499026295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   email: "satyam@college.edu",
  //   image: "./images/Satyam.jpg",
  // },
  {
    id: 3,
    name: "Ruchi Kumari",
    role: "PR Management",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/ruchi-kumari-5b7150306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "ruchi@college.edu",
    image: "./images/Ruchi.jpg",
  },
  {
    id: 4,
    name: "Mausam Jha",
    role: "PR Management",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/mausam-jha-011a322b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mausam@college.edu",
    image: "./images/Mausam.jpg",
  },
];

const volunteersTeam: TeamMember[] = [
  {
    id: 1,
    name: "Pratyush Gupta",
    role: "Volunteer",
    github: "https://github.com/Pratyush-2006",
    linkedin:
      "https://www.linkedin.com/in/pratyush-gupta-31a2742a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "pratyush@college.edu",
    image: "./images/pratyush.jpg",
  },
  {
    id: 2,
    name: "Khushi",
    role: "Volunteer",
    github: "",
    linkedin: "http://www.linkedin.com/in/khushi-gupta-0b668731b",
    email: "khushi@college.edu",
    image: "/images/khushi.jpg",
  },
  {
    id: 3,
    name: "Aman Kumar",
    role: "Volunteer",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/aman-kumar-b16607386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "aman@college.edu",
    image: "./images/aman.jpg",
  },
  {
    id: 4,
    name: "Sumit Singh",
    role: "Volunteer",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/sumit-singh-004a6332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "sumit@college.edu",
    image: "/images/sumit.jpg",
  },
  {
    id: 5,
    name: "Pallav Kumar Mishra",
    role: "Volunteer",
    github: "https://github.com/mishrapallav8-ux",
    linkedin:
      "https://www.linkedin.com/in/pallav-mishra-000a6331b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "pallav@college.edu",
    image: "/images/pallav.jpg",
  },
  {
    id: 6,
    name: "Smriti Kumari",
    role: "Volunteer",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/smriti-kumari-a62200333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "smriti@college.edu",
    image: "/images/smriti.jpg",
  },
  {
    id: 7,
    name: "Piyush Raj",
    role: "Volunteer",
    github: "",
    linkedin:
      "https://www.linkedin.com/in/piyush-raj-63a848303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "piyush.v@college.edu",
    image: "/images/piyush2.jpg",
  },
  {
    id: 8,
    name: "Ayush Raj",
    role: "Volunteer",
    github: "https://github.com/Ayush49305",
    linkedin:
      "https://www.linkedin.com/in/ayush-raj-882070317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "ayush.r@college.edu",
    image: "/images/ayush.jpg",
  },
  {
    id: 9,
    name: "Aditya Vardhan",
    role: "Volunteer",
    github: "",
    linkedin: "",
    email: "aditya.v@college.edu",
    image: "./images/adityavar.jpg",
  },
];

// Reusable Component for Team Member Card
interface TeamCardProps {
  member: TeamMember;
  isLarge?: boolean;
}

function TeamMemberCard({ member, isLarge = false }: TeamCardProps) {
  return (
    <div
      className={`cyber-card group text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all ${!isLarge ? "p-4" : ""}`}
    >
      {/* Avatar or Image */}
      {member.image ? (
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className={`mx-auto mb-4 rounded-full object-cover border-4 border-blue-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all ${
            isLarge ? "w-24 h-24" : "w-16 h-16 mb-3"
          }`}
        />
      ) : (
        <div
          className={`mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all ${
            isLarge ? "w-24 h-24 text-2xl" : "w-16 h-16 text-lg mb-3"
          }`}
        >
          {member.name
            .split(" ")
            .map(n => n[0])
            .join("")}
        </div>
      )}

      {/* Name and Role */}
      <h3
        className={`font-bold mb-2 group-hover:text-blue-300 transition-colors ${isLarge ? "text-xl" : "text-sm"}`}
      >
        {member.name}
      </h3>
      <p
        className={`text-blue-300 font-semibold ${isLarge ? "text-sm mb-3" : "text-xs"}`}
      >
        {member.role}
      </p>

      {/* Bio */}
      {member.bio && isLarge && (
        <p className="text-foreground/70 text-sm mb-4">{member.bio}</p>
      )}

      {/* Social Links */}
      <div
        className={`flex gap-3 justify-center ${isLarge ? "pt-4 border-t border-blue-500/10" : "pt-2"}`}
      >
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all"
            title="Email"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Teams() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">Our Team</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Meet the talented individuals who lead and support CyberSleuths.
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map(member => (
              <TeamMemberCard key={member.id} member={member} isLarge={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Website & Content Creation Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Website Design Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {websiteContentTeam.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* GD Team Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center"> Content Design Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gdTeam.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Teams Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">PR Management</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherTeams.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Volunteers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {volunteersTeam.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
