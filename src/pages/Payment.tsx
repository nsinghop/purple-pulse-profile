
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const state = location.state as any;
  
  // If no state is passed (direct URL access), redirect to freelancing page
  React.useEffect(() => {
    if (!state || !state.plan) {
      navigate('/freelancing');
    }
  }, [state, navigate]);
  
  const form = useForm({
    defaultValues: {
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    }
  });
  
  const onSubmit = (data: any) => {
    console.log('Payment data:', data);
    
    // Show success toast
    toast({
      title: "Payment Successful!",
      description: "Thank you for your order. We'll be in touch shortly to begin your project.",
    });
    
    // Redirect to success page after payment
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000);
  };
  
  if (!state || !state.plan) return null;
  
  const { plan, planName, price, formData } = state;
  
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
              Complete Your <span className="gradient-text glow">Payment</span>
            </h1>
            <p className="text-gray-400">
              You're just one step away from starting your web development project
            </p>
          </div>
          
          <div className="glass-panel p-8 rounded-xl border border-white/10 mb-8">
            <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-300">Plan:</span>
                <span className="font-semibold">{planName} Package</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-300">Project:</span>
                <span className="font-semibold">{formData?.company || 'Custom Website'}</span>
              </div>
              
              <div className="flex justify-between text-xl font-bold border-t border-white/10 pt-3">
                <span>Total:</span>
                <span className="text-neon-purple">${price}.00</span>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Payment Information</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name on Card</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} className="bg-white/5 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="1234 5678 9012 3456" {...field} className="bg-white/5 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="expiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} className="bg-white/5 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} className="bg-white/5 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-gradient-to-r from-neon-purple to-neon-purple3 hover:opacity-90 py-6">
                    Pay ${price}.00
                  </Button>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    Your payment information is securely processed. We don't store your card details.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
