import { Button } from "@/components/ui/button";

interface LinkedInShareProps {
  url: string;
  title: string;
  summary?: string;
  className?: string;
}

export function LinkedInShare({ url, title, summary = "", className = "" }: LinkedInShareProps) {
  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
    window.open(linkedInUrl, '_blank', 'width=570,height=520');
  };

  return (
    <Button
      onClick={handleLinkedInShare}
      variant="outline"
      size="sm"
      className={`text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white ${className}`}
      data-testid="button-linkedin-share"
    >
      <i className="fab fa-linkedin mr-2"></i>
      Share on LinkedIn
    </Button>
  );
}

interface LinkedInProfileProps {
  profileUrl: string;
  className?: string;
}

export function LinkedInProfile({ profileUrl, className = "" }: LinkedInProfileProps) {
  const handleLinkedInProfile = () => {
    window.open(profileUrl, '_blank');
  };

  return (
    <Button
      onClick={handleLinkedInProfile}
      variant="ghost"
      size="sm"
      className={`text-blue-600 hover:bg-blue-50 ${className}`}
      data-testid="button-linkedin-profile"
    >
      <i className="fab fa-linkedin text-xl"></i>
    </Button>
  );
}