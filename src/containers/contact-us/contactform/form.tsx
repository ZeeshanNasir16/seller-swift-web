'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BriefcaseBusiness,  Mail, UserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ContactUsForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='space-y-6'>
      <h3 className='text-4xl md:text-6xl font-semibold tracking-tight'>
        Get In Touch
      </h3>
      <form onSubmit={onSubmit} className='space-y-5'>
        <Input
          label='Name'
          name='name'
          placeholder='Name'
          icon={<UserRound className=' text-gray-400' />}
          iconPosition='start'
          required
        />
        <Input
          label='Email'
          name='email'
          placeholder='Email'
          type='email'
          icon={<Mail  className=' text-gray-400' />}
          iconPosition='start'
          required
        />
        <Input
          label='Company/Store Name'
          name='company'
          placeholder='company/store name'
          icon={<BriefcaseBusiness   className=' text-gray-400' />}
          iconPosition='start'
          required
        />
        <Textarea
          label='Message'
          name='message'
          placeholder='Message'
          rows={6}
          className='resize-none'
          required
        />
        <div className="flex gap-3 items-start">
            <Checkbox
                id='terms'
                name='terms'
                required
            />
            <Label htmlFor='terms' className='text-sm block leading-tight'>
                I agree to Privacy and Terms of Use.
            </Label>
        </div>
        <Button
            type='submit'
            className='w-full'
            variant='default'
            size='lg'
        >
            Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
