import { cn } from '@/lib/utils';

type PageWrapperProps = {
  headingText: string;
  headingClassName?: string;
  className?: string;
};

export default function PageWrapper({
  children,
  headingText,
  className,
  headingClassName,
}: React.PropsWithChildren<PageWrapperProps>) {
  return (
    <main className={cn('flex flex-col items-center gap-10 pb-10', className)}>
      <h2 className={cn('text-center text-xl md:text-3xl', headingClassName)}>
        {headingText}
      </h2>
      {children}
    </main>
  );
}
