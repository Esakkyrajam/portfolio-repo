import { useEffect, useRef } from "react";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const About = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typewriterEl = typewriterRef.current;
    if (!typewriterEl) return;

    const skills = [
      "Java",
      "MERN Stack",
      "Spring Boot",
      "React",
      "Full-Stack Developer",
    ];
    let currentSkillIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let deletingDelay = 50;
    let pauseDelay = 1000;

    const type = () => {
      const currentSkill = skills[currentSkillIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentSkill.substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndex--;
        typingDelay = deletingDelay;
      } else {
        typewriterEl.textContent = currentSkill.substring(
          0,
          currentCharIndex + 1
        );
        currentCharIndex++;
        typingDelay = 150;
      }

      if (!isDeleting && currentCharIndex === currentSkill.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingDelay = pauseDelay;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
      }

      setTimeout(type, typingDelay);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 relative bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-left">
            <div className="sticky top-32">
              <h2 className="section-heading mb-8">About Me</h2>

              <p className="text-lg mb-6 text-foreground/80">
                Hi there! I'm a passionate Full-Stack Developer specializing in
                <span className="font-medium text-primary"> Java</span> and the
                <span className="font-medium text-primary"> MERN Stack</span>.
                With a deep understanding of both frontend and backend
                technologies, I create scalable, efficient, and user-friendly
                applications.
              </p>

              <p className="text-lg mb-6 text-foreground/80">
                I'm currently specializing as a{" "}
                <span
                  ref={typewriterRef}
                  className="font-medium text-primary"
                ></span>
                <span className="font-medium text-primary border-r-2 border-primary animate-blink">
                  &nbsp;
                </span>
              </p>

              <div className="flex space-x-4 mb-8">
                <a
                  href="https://github.com/esakkyrajam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/esakkyraja-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center text-primary font-medium hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center fade-right">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
                alt="Developer in a dark workplace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
