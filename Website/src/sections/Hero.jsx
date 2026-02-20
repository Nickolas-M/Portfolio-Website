import {Button} from '@/components/Button';
import { ArrowRight, Download, ChevronDown, Github, Linkedin } from "lucide-react"; 

const skills = [
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
    "TEMP",
]

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img 
                src="/hero-bg.jpg" 
                alt="Hero image" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradiant-to-b from-background/20 via-background/80 to-background" />
        </div>
        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`, 
                        animation: `slow-drift ${
                            15 + Math.random() * 20
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">

                    {/* Tag above name
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                IT Professional & Cybersecurity
                        </span>
                    </div>
                    */}

                    {/* Headline */}
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                            Nickolas Martin <br />
                        </h1>
                        <h2 className="text-1xl md:text-2xl lg:text-3xl text-primary glow-text font-bold leading-tight animate-fade-in animation-delay-100">
                            IT Professional & Cybersecurity
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Welcome! Explore a summary of my professional background alongside a 
                            selection of my fun coding projects.
                        </p>
                    </div>

                    {/* Call to action */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>

                        <Button size="lg" className="relative z-10 items-center justify-center">
                            Download CV <Download className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                        {[
                            { icon: Github, href: "https://github.com/Nickolas-M"},
                            { icon: Linkedin, href: "https://www.linkedin.com/in/nickolasmartinprofile/"},
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href} 
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div 
                            className="absolute inset-0
                            rounded-3xl bg-linear-to-br
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-full p-2 glow-border">
                            <img 
                                src="/profile-photo.jpg" 
                                alt="Nickolas Martin" 
                                className="w-full aspect-4/5 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section*/}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
    );
};
