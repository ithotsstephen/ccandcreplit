#!/usr/bin/env tsx
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const API_BASE = 'http://localhost:5000';
const OUTPUT_DIR = path.join(process.cwd(), 'client', 'public', 'data');

interface ExportResult {
  success: boolean;
  file: string;
  count?: number;
  error?: string;
}

async function fetchJSON(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    throw error;
  }
}

async function saveJSON(data: any, filename: string): Promise<void> {
  const filePath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

async function exportData(): Promise<void> {
  console.log('🚀 Starting static data export...\n');
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Created directory: ${OUTPUT_DIR}\n`);
  }

  const results: ExportResult[] = [];

  // Export services
  try {
    console.log('📦 Exporting services...');
    const services = await fetchJSON(`${API_BASE}/api/services`);
    await saveJSON(services, 'services.json');
    results.push({ success: true, file: 'services.json', count: services.length });
    console.log(`✅ Exported ${services.length} services\n`);
  } catch (error) {
    results.push({ success: false, file: 'services.json', error: (error as Error).message });
    console.error('❌ Failed to export services\n');
  }

  // Export testimonials
  try {
    console.log('📦 Exporting testimonials...');
    const testimonials = await fetchJSON(`${API_BASE}/api/testimonials`);
    await saveJSON(testimonials, 'testimonials.json');
    results.push({ success: true, file: 'testimonials.json', count: testimonials.length });
    console.log(`✅ Exported ${testimonials.length} testimonials\n`);
  } catch (error) {
    results.push({ success: false, file: 'testimonials.json', error: (error as Error).message });
    console.error('❌ Failed to export testimonials\n');
  }

  // Export case studies
  try {
    console.log('📦 Exporting case studies...');
    const caseStudies = await fetchJSON(`${API_BASE}/api/case-studies`);
    await saveJSON(caseStudies, 'case-studies.json');
    results.push({ success: true, file: 'case-studies.json', count: caseStudies.length });
    console.log(`✅ Exported ${caseStudies.length} case studies\n`);
  } catch (error) {
    results.push({ success: false, file: 'case-studies.json', error: (error as Error).message });
    console.error('❌ Failed to export case studies\n');
  }

  // Export FAQs
  try {
    console.log('📦 Exporting FAQs...');
    const faqs = await fetchJSON(`${API_BASE}/api/faqs`);
    await saveJSON(faqs, 'faqs.json');
    results.push({ success: true, file: 'faqs.json', count: faqs.length });
    console.log(`✅ Exported ${faqs.length} FAQs\n`);
  } catch (error) {
    results.push({ success: false, file: 'faqs.json', error: (error as Error).message });
    console.error('❌ Failed to export FAQs\n');
  }

  // Export blog posts
  try {
    console.log('📦 Exporting blog posts...');
    const blogPosts = await fetchJSON(`${API_BASE}/api/blog-posts?published=true`);
    await saveJSON(blogPosts, 'blog-posts.json');
    results.push({ success: true, file: 'blog-posts.json', count: blogPosts.length });
    console.log(`✅ Exported ${blogPosts.length} blog posts\n`);
  } catch (error) {
    results.push({ success: false, file: 'blog-posts.json', error: (error as Error).message });
    console.error('❌ Failed to export blog posts\n');
  }

  // Export client logos
  try {
    console.log('📦 Exporting client logos...');
    const logos = await fetchJSON(`${API_BASE}/api/client-logos`);
    await saveJSON(logos, 'client-logos.json');
    results.push({ success: true, file: 'client-logos.json', count: logos.length });
    console.log(`✅ Exported ${logos.length} client logos\n`);
  } catch (error) {
    results.push({ success: false, file: 'client-logos.json', error: (error as Error).message });
    console.error('❌ Failed to export client logos\n');
  }

  // Export content types
  const contentTypes = ['hero', 'about', 'features', 'footer'];
  for (const type of contentTypes) {
    try {
      console.log(`📦 Exporting ${type} content...`);
      const content = await fetchJSON(`${API_BASE}/api/content?type=${type}`);
      await saveJSON(content, `content-${type}.json`);
      results.push({ success: true, file: `content-${type}.json`, count: content.length });
      console.log(`✅ Exported ${content.length} ${type} content items\n`);
    } catch (error) {
      results.push({ success: false, file: `content-${type}.json`, error: (error as Error).message });
      console.error(`❌ Failed to export ${type} content\n`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 EXPORT SUMMARY');
  console.log('='.repeat(60));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`\n✅ Successfully exported: ${successful.length} files`);
  successful.forEach(r => {
    console.log(`   - ${r.file} (${r.count} items)`);
  });
  
  if (failed.length > 0) {
    console.log(`\n❌ Failed to export: ${failed.length} files`);
    failed.forEach(r => {
      console.log(`   - ${r.file}: ${r.error}`);
    });
  }
  
  console.log(`\n📁 Files saved to: ${OUTPUT_DIR}`);
  console.log('='.repeat(60) + '\n');

  if (failed.length > 0) {
    process.exit(1);
  }
}

// Run the export
exportData().catch((error) => {
  console.error('Fatal error during export:', error);
  process.exit(1);
});
