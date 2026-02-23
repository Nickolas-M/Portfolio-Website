import { Code2, Wrench, GlobeLock, Users} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Programming",
        description: "Python, Java, C++, Bash, Powershell, React, TailwindCSS.",
    },
    {
        icon: Wrench,
        title: "Troubleshooting",
        description: "Hardware & Network troubleshooting: TCP/IP, DNS, Wireshark, Windows, Linux.",
    },
    {
        icon: GlobeLock,
        title: "Cybersecurity",
        description: "Strong foundation in core cybersecurity principles",
    },
    {
        icon: Users,
        title: "Soft Skills",
        description: "Problem-Solving, Teamwork, Adaptive, Curious, Communication, Hard-Working."
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Improving my skills,
                            <span className="font-serif italic font-normal text-white"> 
                                {" "}
                                one project at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-100">
                            <p>
                                IT and cybersecurity professional with experience supporting 
                                complex enterprise environments in both healthcare and corporate settings. 
                                My work has given me a strong technical foundation in systems support, 
                                hardware and network troubleshooting, and project coordination.
                            </p>
                            <p>
                                I’ve worked on large-scale device deployments, system cutovers, 
                                asset management initiatives, and security-focused efforts involving 
                                threat detection, compliance support, and user awareness. Outside of 
                                production environments, I work on various personal projects that 
                                explore automation, security tooling, and practical solutions to 
                                real-world technical problems.
                            </p>
                            <p>
                                Security+ certified with a Computer Science background, I’m continually 
                                refining my skills through hands-on development and technical 
                                experimentation. This portfolio highlights the projects I build to 
                                deepen my expertise in cybersecurity and IT operations while pushing 
                                myself to learn new technologies.
                            </p>
                        </div>
                    </div>
                
                    {/* Right Column*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in" 
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};