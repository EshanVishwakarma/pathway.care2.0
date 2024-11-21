import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Lock, Mail, User } from 'lucide-react';
import { cn } from '../../lib/utils';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const registerSchema = loginSchema
  .extend({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type LoginInputs = z.infer<typeof loginSchema>;
type RegisterInputs = z.infer<typeof registerSchema>;

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: LoginInputs | RegisterInputs) => void;
}

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const schema = mode === 'login' ? loginSchema : registerSchema;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const inputClasses = (hasError: boolean) =>
    cn(
      'w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none',
      hasError ? 'border-red-500' : 'border-gray-300'
    );

  const renderInput = (
    name: keyof RegisterInputs,
    type: string,
    placeholder: string,
    Icon: React.ComponentType
  ) => (
    <div>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={inputClasses(!!errors[name])}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-sm"
    >
      {mode === 'register' && renderInput('name', 'text', 'Full Name', User)}
      {renderInput('email', 'email', 'Email', Mail)}
      {renderInput('password', 'password', 'Password', Lock)}
      {mode === 'register' &&
        renderInput('confirmPassword', 'password', 'Confirm Password', Lock)}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting
          ? 'Please wait...'
          : mode === 'login'
          ? 'Sign In'
          : 'Sign Up'}
      </button>
    </form>
  );
}
