import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone,
  Monitor,
  Tablet,
  Plus,
  Play,
  Save,
  Download,
  Layout,
  Palette,
  Settings,
  Layers,
  MousePointer2,
  Zap
} from "lucide-react";

const AppBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [devicePreview, setDevicePreview] = useState("desktop");

  const templates = [
    { 
      name: "E-Ticaret", 
      desc: "Online mağaza için hazır şablon", 
      category: "İş",
      preview: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    { 
      name: "Blog Sitesi", 
      desc: "Kişisel blog için modern tasarım", 
      category: "İçerik",
      preview: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    { 
      name: "Portföy", 
      desc: "Profesyonel portföy sitesi", 
      category: "Kişisel",
      preview: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    { 
      name: "SaaS Landing", 
      desc: "Yazılım ürünü tanıtım sayfası", 
      category: "İş",
      preview: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    { 
      name: "Restoran", 
      desc: "Restoran menü ve rezervasyon", 
      category: "Hizmet",
      preview: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    { 
      name: "Eğitim", 
      desc: "Online kurs platformu", 
      category: "Eğitim",
      preview: "bg-gradient-to-br from-indigo-500 to-blue-600"
    },
  ];

  const components = [
    { name: "Başlık", icon: Layout, category: "Metin" },
    { name: "Buton", icon: MousePointer2, category: "Etkileşim" },
    { name: "Resim", icon: Layers, category: "Medya" },
    { name: "Form", icon: Settings, category: "Etkileşim" },
    { name: "Kart", icon: Layout, category: "Düzen" },
    { name: "Menü", icon: Layout, category: "Navigasyon" },
  ];

  const pages = [
    { name: "Ana Sayfa", status: "active", lastModified: "2 dk önce" },
    { name: "Hakkımızda", status: "draft", lastModified: "1 saat önce" },
    { name: "İletişim", status: "published", lastModified: "1 gün önce" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Uygulama Oluşturucu
            </h1>
            <p className="text-muted-foreground mt-2">
              Sürükle-bırak ile kolayca web sitesi ve uygulama oluşturun
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Kaydet
            </Button>
            <Button variant="outline">
              <Play className="w-4 h-4 mr-2" />
              Önizleme
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow-primary">
              <Download className="w-4 h-4 mr-2" />
              Yayınla
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Templates & Components */}
          <div className="space-y-6">
            {/* Templates */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Şablonlar</CardTitle>
                <CardDescription>Hazır tasarımlarla hızlı başlayın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {templates.slice(0, 4).map((template, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-smooth ${
                        selectedTemplate === template.name 
                          ? 'border-primary bg-gradient-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedTemplate(template.name)}
                    >
                      <div className={`w-full h-16 ${template.preview} rounded mb-2`}></div>
                      <h4 className="font-medium text-card-foreground text-sm">{template.name}</h4>
                      <p className="text-xs text-muted-foreground">{template.desc}</p>
                      <Badge variant="outline" className="text-xs mt-1">{template.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Components */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Bileşenler</CardTitle>
                <CardDescription>Sürükle-bırak ile ekle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {components.map((component, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 cursor-grab transition-smooth"
                      draggable
                    >
                      <component.icon className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-card-foreground">{component.name}</div>
                        <div className="text-xs text-muted-foreground">{component.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Editor Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Device Preview Controls */}
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant={devicePreview === "desktop" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDevicePreview("desktop")}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={devicePreview === "tablet" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDevicePreview("tablet")}
                    >
                      <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={devicePreview === "mobile" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDevicePreview("mobile")}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">100%</span>
                    <Badge variant="outline">1920x1080</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Canvas */}
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className={`
                  bg-white border-2 border-dashed border-border/30 rounded-lg mx-4 my-4 min-h-96 flex items-center justify-center
                  ${devicePreview === 'desktop' ? 'max-w-full' : 
                    devicePreview === 'tablet' ? 'max-w-2xl mx-auto' : 'max-w-sm mx-auto'}
                `}>
                  <div className="text-center text-muted-foreground">
                    <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">Tasarım Alanı</h3>
                    <p className="text-sm">Soldaki bileşenleri buraya sürükleyin</p>
                    <p className="text-sm">veya bir şablon seçin</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Plus className="w-5 h-5" />
                <span className="text-xs">Yeni Sayfa</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Palette className="w-5 h-5" />
                <span className="text-xs">Tema</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Settings className="w-5 h-5" />
                <span className="text-xs">Ayarlar</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-xs">AI Yardım</span>
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Pages & Properties */}
          <div className="space-y-6">
            {/* Pages */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground text-lg">Sayfalar</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pages.map((page, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 cursor-pointer transition-smooth">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-card-foreground">{page.name}</span>
                        <Badge 
                          variant={page.status === 'active' ? 'default' : page.status === 'published' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {page.status === 'active' ? 'Aktif' : page.status === 'published' ? 'Yayında' : 'Taslak'}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{page.lastModified}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Properties */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Özellikler</CardTitle>
                <CardDescription>Seçili öğe ayarları</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Genişlik</label>
                    <Input placeholder="100%" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Yükseklik</label>
                    <Input placeholder="auto" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Arka Plan</label>
                    <div className="flex gap-2 mt-1">
                      <Input placeholder="#ffffff" className="flex-1" />
                      <div className="w-10 h-10 bg-white border rounded"></div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Metin Rengi</label>
                    <div className="flex gap-2 mt-1">
                      <Input placeholder="#000000" className="flex-1" />
                      <div className="w-10 h-10 bg-black border rounded"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Layer Structure */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Katmanlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
                    <Layers className="w-4 h-4" />
                    <span>Container</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 ml-4">
                    <Layout className="w-4 h-4" />
                    <span>Header</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 ml-4">
                    <Layout className="w-4 h-4" />
                    <span>Content</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 ml-4">
                    <Layout className="w-4 h-4" />
                    <span>Footer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBuilder;