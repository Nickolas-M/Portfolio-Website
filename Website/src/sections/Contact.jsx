import { Mail, Phone, MapPin} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nmartin.businessem@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (508) 642-3016",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Massachusetts",
  },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolite top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

             <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Contact info{" "}
                    <span className="font-serif italic font-normal text-white">
                    found below.
                    </span>
                </h2>
                </div>

                 {/* Contact Info */}
                <div className="flex justify-center animate-fade-in animation-delay-400">
                    <div className="glass rounded-3xl p-8 w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-6 text-center">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>
                                        <div className="font-medium">{item.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};