import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ContactCTA = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 font-display">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-6">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
