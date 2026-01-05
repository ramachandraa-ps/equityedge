import { Footer } from "@/components/layout";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BarChart3, Search, Bot, Home } from "lucide-react";

const dockItems = [
  { icon: <Home className="w-5 h-5" />, label: "Home", href: "/" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Market Stats", href: "/market-statistics" },
  { icon: <Search className="w-5 h-5" />, label: "Search", href: "/company/search" },
  { icon: <Bot className="w-5 h-5" />, label: "AI Assistant", href: "/ai-assistant" },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingDock items={dockItems} />
    </div>
  );
}
