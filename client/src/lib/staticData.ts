// Static data fetcher and hook for production build
// In development, data comes from API; in static build, data comes from JSON files

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Service, Testimonial, CaseStudy, FAQ, BlogPost } from '@shared/schema';

export interface ClientLogo {
  name: string;
  logoPath: string;
  alt: string;
}

// Check if we're in static mode (no backend available)
export const isStaticMode = import.meta.env.VITE_STATIC_BUILD === 'true';

// Helper to fetch static JSON data
async function fetchStaticJSON<T>(filename: string): Promise<T> {
  // Use BASE_URL to respect the configured base path (e.g., /newwebsitetest/)
  const basePath = import.meta.env.BASE_URL || '/';
  const url = `${basePath}data/${filename}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to fetch ${filename} from ${url}: ${response.statusText}`);
    return [] as T;
  }
  return response.json();
}

export const staticData = {
  getServices: async (): Promise<Service[]> => {
    return fetchStaticJSON<Service[]>('services.json');
  },

  getTestimonials: async (): Promise<Testimonial[]> => {
    return fetchStaticJSON<Testimonial[]>('testimonials.json');
  },

  getCaseStudies: async (): Promise<CaseStudy[]> => {
    return fetchStaticJSON<CaseStudy[]>('case-studies.json');
  },

  getFAQs: async (): Promise<FAQ[]> => {
    return fetchStaticJSON<FAQ[]>('faqs.json');
  },

  getBlogPosts: async (): Promise<BlogPost[]> => {
    return fetchStaticJSON<BlogPost[]>('blog-posts.json');
  },

  getClientLogos: async (): Promise<ClientLogo[]> => {
    return fetchStaticJSON<ClientLogo[]>('client-logos.json');
  },
};

// Hook that switches between static JSON and API based on environment
export function useStaticOrQuery<T>(
  queryKey: string | string[],
  staticLoader?: () => Promise<T>,
  options?: { enabled?: boolean; staleTime?: number }
): { data: T | undefined; isLoading: boolean; error: Error | null } {
  const [staticData, setStaticData] = useState<T | undefined>(undefined);
  const [staticLoading, setStaticLoading] = useState(isStaticMode);
  const [staticError, setStaticError] = useState<Error | null>(null);

  // In static mode, fetch from JSON files
  useEffect(() => {
    if (isStaticMode && staticLoader) {
      setStaticLoading(true);
      staticLoader()
        .then((data) => {
          setStaticData(data);
          setStaticLoading(false);
        })
        .catch((err) => {
          setStaticError(err);
          setStaticLoading(false);
        });
    }
  }, []);

  // In dynamic mode, use React Query
  const queryResult = useQuery<T>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    enabled: !isStaticMode && (options?.enabled !== false),
    staleTime: options?.staleTime,
  });

  if (isStaticMode) {
    return {
      data: staticData,
      isLoading: staticLoading,
      error: staticError,
    };
  }

  return {
    data: queryResult.data,
    isLoading: queryResult.isLoading,
    error: queryResult.error,
  };
}
