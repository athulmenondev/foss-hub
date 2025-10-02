import Navigation from "@/components/Navigation";
import { Code2, Heart, Users, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Code2,
      title: "Transparency",
      description: "View and modify source code. Understand exactly what your software does.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Community-reviewed code with fewer hidden vulnerabilities and backdoors.",
    },
    {
      icon: Heart,
      title: "Freedom",
      description: "Use, study, modify, and distribute software without restrictions.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Global collaboration creating better software together.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Rapid development and innovation through collaborative efforts.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Free access to powerful tools for everyone, everywhere.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Open Source</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the philosophy and power of free and open source software
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16 animate-slide-up">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                FOSShub is dedicated to promoting and showcasing the best free and open source software available. We believe in the power of collaboration, transparency, and community-driven development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is to make it easier for everyone to discover, explore, and adopt open source alternatives to proprietary software, empowering users with freedom, security, and innovation.
              </p>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Open Source?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="glass-card hover-glow rounded-xl p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What is FOSS */}
          <section className="mb-16">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">What is FOSS?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">FOSS</strong> stands for <strong className="text-foreground">Free and Open Source Software</strong>. It refers to software that respects users' freedom and community.
                </p>
                <p className="text-lg leading-relaxed">
                  The "free" in FOSS refers to freedom, not price. Users have the freedom to run, study, modify, and distribute the software. This is often summarized as the "Four Freedoms":
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>The freedom to run the program for any purpose</li>
                  <li>The freedom to study how the program works and change it</li>
                  <li>The freedom to redistribute copies</li>
                  <li>The freedom to distribute modified versions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contributing */}
          <section className="mb-16">
            <div className="glass-card rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Open source thrives on community contribution. Whether you're a developer, designer, writer, or enthusiast, there are many ways to get involved:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Contribute code, documentation, or translations to projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Report bugs and suggest improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Support others in community forums and discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Share and promote open source software</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Is open source software really free?</h3>
                <p className="text-muted-foreground">
                  Yes, in terms of freedom and usually in terms of cost. Most FOSS is available at no charge, but "free" primarily refers to the freedoms it provides.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Is open source software safe?</h3>
                <p className="text-muted-foreground">
                  Open source software is often more secure because the code is publicly available for review. Security vulnerabilities are typically found and fixed faster than in proprietary software.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Can I use open source software for commercial purposes?</h3>
                <p className="text-muted-foreground">
                  Yes! Most open source licenses allow commercial use. However, different licenses have different requirements, so always check the specific license.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
