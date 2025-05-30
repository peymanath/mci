'use client';

import { cn } from '@/lib/utils';
// import { MagnifyingGlass } from '../icons/magnifyingGlassIcon';
import { Input } from '../ui/input';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'جست و جو',
  className,
}: SearchInputProps) {
  return (
    <div className="relative w-1/2">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-lg border border-gray-200 bg-white py-3 pl-12 pr-4',
          'text-right text-base text-gray-900 placeholder:text-gray-500',
          'focus:border-gray-300 focus:outline-none focus:ring-0',
          'transition-colors duration-200',
          className
        )}
      />
      <div className="top-2.75 left-0.75 z-1 absolute flex items-center justify-center rounded-l-lg bg-[var(--primary-200)] p-3">
        {/* <MagnifyingGlass className="pointer-events-none h-5 w-5 text-white" /> */}
      </div>
    </div>
  );
}
