
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    company: "",
    message: "",
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle form submission
    toast({
      title: "Registration submitted",
      description: "We will get back to you shortly.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: checked
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Register for Brand Strategy Workshop</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            required
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
        </div>

        <div>
          <Label htmlFor="designation">Designation</Label>
          <Input
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter your designation"
          />
        </div>

        <div>
          <Label htmlFor="company">Company / Institution Name</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific requirements or questions?"
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor="terms" className="text-sm">
            I agree to receive communications about Brand Lab workshops and events
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
        Register Now
      </Button>
    </form>
  );
};

export default RegistrationForm;
