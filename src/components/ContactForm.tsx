import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset after showing success state
      setTimeout(() => {
        toast(
          "Message sent successfully! I'll get back to you as soon as possible."
        );

        setName("");
        setEmail("");
        setMessage("");
        setIsSuccess(false);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      toast(
        "Something went wrong. Please try again later or contact me directly via email."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-card p-6 rounded-lg border border-border/50"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          className="transition-all duration-200"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
          className="transition-all duration-200"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message..."
          className="min-h-[150px] resize-none transition-all duration-200"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full transition-all duration-300"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Sent!
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
