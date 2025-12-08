'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BriefcaseBusiness, CheckCircle, Mail, UserRound } from 'lucide-react';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  terms?: string;
}

const ContactUsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      terms: checked,
    }));
    if (errors.terms) {
      setErrors((prev) => ({
        ...prev,
        terms: undefined,
      }));
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Show success dialog
    setShowDialog(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      terms: false,
    });

    setIsSubmitting(false);
  };

  return (
    <>
      <div className='space-y-6'>
        <h3 className='text-4xl md:text-6xl font-semibold tracking-tight'>
          Get In Touch
        </h3>
        <form onSubmit={onSubmit} className='space-y-5'>
          <div>
            <Input
              label='Name'
              name='name'
              placeholder='Name'
              icon={<UserRound className='text-gray-400' />}
              iconPosition='start'
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
            )}
          </div>

          <div>
            <Input
              label='Email'
              name='email'
              placeholder='Email'
              type='email'
              icon={<Mail className='text-gray-400' />}
              iconPosition='start'
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              label='Company/Store Name'
              name='company'
              placeholder='company/store name'
              icon={<BriefcaseBusiness className='text-gray-400' />}
              iconPosition='start'
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Textarea
              label='Message'
              name='message'
              placeholder='Message'
              rows={6}
              className='resize-none'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <div className='flex gap-3 items-start'>
              <Checkbox
                id='terms'
                name='terms'
                checked={formData.terms}
                onCheckedChange={handleCheckboxChange}
              />
              <Label htmlFor='terms' className='text-sm block leading-tight'>
                I agree to Privacy and Terms of Use.
              </Label>
            </div>
            {errors.terms && (
              <p className='text-red-500 text-sm mt-1'>{errors.terms}</p>
            )}
          </div>

          <Button
            type='submit'
            className='w-full'
            variant='default'
            size='lg'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <div className='flex flex-col items-center gap-4'>
              <CheckCircle className='w-16 h-16 text-green-500' />
              <DialogTitle className='text-center text-2xl'>
                Thank You!
              </DialogTitle>
            </div>
          </DialogHeader>
          <DialogDescription asChild>
            <div className='text-center space-y-4'>
              <p className='text-base text-foreground'>
                Your message has been received successfully.
              </p>
              <p className='text-sm text-muted-foreground'>
                We'll get back to you as soon as possible. Thank you for
                reaching out!
              </p>
            </div>
          </DialogDescription>
          <Button
            onClick={() => setShowDialog(false)}
            className='w-full'
            variant='default'
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactUsForm;
