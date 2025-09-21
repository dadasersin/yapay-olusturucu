import { useState } from "react";
import { 
  Bot, 
  BarChart3, 
  Palette, 
  Video, 
  Users, 
  Settings,
  Home,
  Code,
  TrendingUp,
  Zap,
  Music,
  Image,
  FileText
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Ana Panel", url: "/", icon: Home },
  { title: "AI Asistanı", url: "/ai-assistant", icon: Bot },
  { title: "Uygulama Oluşturucu", url: "/app-builder", icon: Code },
  { title: "Kripto Bot", url: "/crypto-bot", icon: TrendingUp },
  { title: "Site Tasarımı", url: "/site-design", icon: Palette },
];

const mediaItems = [
  { title: "Video İşleme", url: "/video-processing", icon: Video },
  { title: "Resim Editörü", url: "/image-editor", icon: Image },
  { title: "Müzik Stüdyosu", url: "/music-studio", icon: Music },
];

const managementItems = [
  { title: "İstek Yönetimi", url: "/request-management", icon: FileText },
  { title: "Kullanıcı Paneli", url: "/user-panel", icon: Users },
  { title: "Ayarlar", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-foreground font-medium shadow-glow-primary" 
      : "hover:bg-secondary/50 transition-smooth";

  return (
    <Sidebar
      className="bg-sidebar border-sidebar-border transition-smooth"
      collapsible="icon"
    >
      <SidebarContent>
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <span className="font-bold text-sidebar-foreground">AI Platform</span>
            )}
          </div>
        </div>

        {/* Ana Menü */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            Ana Menü
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Medya Modülleri */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            Medya Modülleri
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mediaItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Yönetim */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            Yönetim
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}