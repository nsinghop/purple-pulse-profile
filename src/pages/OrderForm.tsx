
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const selectedPlan = searchParams.get('plan') || 'basic';

  const planDetails = {
    basic: { name: 'Basic', price: 499 },
    standard: { name: 'Standard', price: 999 },
    pro: { name: 'Pro', price: 1999 },
  };

  const selectedPlanDetails = planDetails[selectedPlan as keyof typeof planDetails];

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectDescription: '',
      references: '',
      timeline: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    console.log('Selected plan:', selectedPlan);
    
    // Show success toast
    toast({
      title: "Order Submitted!",
      description: "We'll contact you shortly to discuss your project.",
    });
    
    // In a real app, you would send this data to your backend
    // and then redirect to payment processing
    setTimeout(() => {
      navigate('/payment', { 
        state: { 
          plan: selectedPlan,
          planName: selectedPlanDetails.name,
          price: selectedPlanDetails.price,
          formData: data
        } 
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neon-darker text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tell Us About Your <span className="gradient-text glow">Project</span>
            </h1>
            <p className="text-gray-400">
              You've selected the <span className="text-neon-purple font-bold">{selectedPlanDetails.name}</span> plan (${selectedPlanDetails.price}).
              Please provide details about your project requirements.
            </p>
          </div>
          
          <div className="glass-panel p-8 rounded-xl border border-white/10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-white/5 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-white/5 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} className="bg-white/5 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} className="bg-white/5 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your project, goals, and requirements" 
                          {...field} 
                          rows={5}
                          className="bg-white/5 border-white/10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="references"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reference Websites (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List any websites you like or that inspire your vision" 
                          {...field} 
                          rows={3}
                          className="bg-white/5 border-white/10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timeline</FormLabel>
                      <FormControl>
                        <Input placeholder="When do you need this project completed?" {...field} className="bg-white/5 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* File Upload UI would go here - simplified for now */}
                <div className="bg-white/5 border border-dashed border-white/20 rounded-lg p-6 text-center">
                  <p className="text-gray-400 mb-2">Upload reference images or documents (coming soon)</p>
                  <p className="text-sm text-gray-500">Drag files here or click to browse</p>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-gradient-to-r from-neon-purple to-neon-purple3 hover:opacity-90 py-6">
                    Continue to Payment
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderForm;
