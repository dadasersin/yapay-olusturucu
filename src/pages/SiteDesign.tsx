import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Layout,
  Type,
  Image,
  Smartphone,
  Monitor,
  Tablet,
  Eye,
  Download,
  Save,
  Share,
  Zap,
  Grid,
  Layers
} from "lucide-react";

const SiteDesign = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [deviceView, setDeviceView] = useState("desktop");

  const templates = [
    { 
      name: "Minimalist", 
      desc: "Temiz ve sade tasarım", 
      category: "Business",
      colors: ["#ffffff", "#000000", "#f0f0f0"],
      preview: "bg-gradient-to-br from-gray-100 to-gray-300"
    },
    { 
      name: "Modern Dark", 
      desc: "Koyu tema ile şık görünüm", 
      category: "Tech",
      colors: ["#1a1a1a", "#333333", "#4f46e5"],
      preview: "bg-gradient-to-br from-slate-800 to-slate-900"
    },
    { 
      name: "Colorful", 
      desc: "Canlı renklerle dikkat çekici", 
      category: "Creative",
      colors: ["#ff6b6b", "#4ecdc4", "#45b7d1"],
      preview: "bg-gradient-to-br from-pink-400 to-purple-500"
    },
    { 
      name: "Corporate", 
      desc: "Profesyonel kurumsal görünüm", 
      category: "Business",
      colors: ["#2563eb", "#1e40af", "#ffffff"],
      preview: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    { 
      name: "Nature", 
      desc: "Doğa temalı yeşil tonlar", 
      category: "Organic",
      colors: ["#10b981", "#059669", "#ecfdf5"],
      preview: "bg-gradient-to-br from-green-400 to-green-600"
    },
    { 
      name: "Sunset", 
      desc: "Gün batımı renkleri", 
      category: "Creative",
      colors: ["#f59e0b", "#ef4444", "#fef3c7"],
      preview: "bg-gradient-to-br from-orange-400 to-red-500"
    },
  ];

  const designElements = [
    { name: "Renk Paleti", icon: Palette, desc: "Marka renklerinizi seçin" },
    { name: "Tipografi", icon: Type, desc: "Font ailesi ve büyüklükler" },
    { name: "Layout", icon: Layout, desc: "Sayfa düzeni ve grid sistem" },
    { name: "Componentler", icon: Grid, desc: "UI bileşenleri kütüphanesi" },
    { name: "Görseller", icon: Image, desc: "Resim ve ikon yönetimi" },
    { name: "Animasyonlar", icon: Zap, desc: "Geçiş ve hover efektleri" },
  ];

  const recentProjects = [
    { name: "E-Ticaret Sitesi", status: "Yayında", lastEdit: "2 saat önce", template: "Modern Dark" },
    { name: "Portföy Sitesi", status: "Taslak", lastEdit: "1 gün önce", template: "Minimalist" },
    { name: "Blog Sitesi", status: "İnceleme", lastEdit: "3 gün önce", template: "Colorful" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3">
              <Palette className="w-8 h-8 text-primary" />
              Site Tasarım Stüdyosu
            </h1>
            <p className="text-muted-foreground mt-2">
              Profesyonel web siteleri tasarlayın ve yönetin
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Kaydet
            </Button>
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Önizleme
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow-primary">
              <Share className="w-4 h-4 mr-2" />
              Yayınla
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Templates Section */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Tasarım Şablonları</CardTitle>
                <CardDescription>Hazır tasarımlarla hızlı başlangıç</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {templates.map((template, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-smooth ${
                        selectedTemplate === template.name 
                          ? 'border-primary bg-gradient-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedTemplate(template.name)}
                    >
                      <div className={`w-full h-12 ${template.preview} rounded mb-2`}></div>
                      <h4 className="font-medium text-card-foreground text-sm">{template.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{template.desc}</p>
                      <div className="flex gap-1">
                        {template.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full border"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">{template.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Elements */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Tasarım Araçları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {designElements.map((element, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 cursor-pointer transition-smooth"
                    >
                      <element.icon className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-card-foreground">{element.name}</div>
                        <div className="text-xs text-muted-foreground">{element.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Design Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Device Preview Controls */}
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant={deviceView === "desktop" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDeviceView("desktop")}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={deviceView === "tablet" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDeviceView("tablet")}
                    >
                      <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={deviceView === "mobile" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDeviceView("mobile")}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Zoom: 100%</Badge>
                    <Badge variant="outline">
                      {deviceView === "desktop" ? "1920x1080" : 
                       deviceView === "tablet" ? "768x1024" : "375x667"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Canvas */}
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className={`
                  bg-white mx-4 my-4 min-h-96 rounded-lg border-2 border-dashed border-border/30 
                  flex flex-col items-center justify-center
                  ${deviceView === 'desktop' ? 'max-w-full' : 
                    deviceView === 'tablet' ? 'max-w-2xl mx-auto' : 'max-w-sm mx-auto'}
                `}>
                  {selectedTemplate ? (
                    <div className="w-full h-full p-8">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                          {selectedTemplate} Teması
                        </h2>
                        <p className="text-gray-600">
                          Bu tema ile özelleştirmeye başlayabilirsiniz
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Ana Başlık</h3>
                          <p className="text-sm text-gray-600">
                            Buraya sitenizin ana mesajı gelecek
                          </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Özellikler</h3>
                          <p className="text-sm text-gray-600">
                            Ürün veya hizmet özellikleri
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button className="bg-primary text-primary-foreground">
                          Harekete Geç
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Layers className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-medium mb-2">Tasarım Tuvali</h3>
                      <p className="text-sm mb-4">Başlamak için sol taraftan bir şablon seçin</p>
                      <p className="text-sm">veya sıfırdan tasarlamaya başlayın</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Color Palette */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Renk Paleti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-8 gap-2">
                  {['#1f2937', '#374151', '#6b7280', '#9ca3af', '#d1d5db', '#e5e7eb', '#f3f4f6', '#ffffff'].map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-lg border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Projects */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Son Projeler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 cursor-pointer transition-smooth">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-card-foreground">{project.name}</span>
                        <Badge 
                          variant={project.status === 'Yayında' ? 'default' : 
                                  project.status === 'Taslak' ? 'outline' : 'secondary'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{project.template}</p>
                      <p className="text-xs text-muted-foreground">{project.lastEdit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Properties */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Tasarım Özellikleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Ana Renk</label>
                    <div className="flex gap-2 mt-1">
                      <Input placeholder="#4f46e5" className="flex-1" />
                      <div className="w-10 h-10 bg-indigo-600 border rounded"></div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Font Ailesi</label>
                    <Input placeholder="Inter, sans-serif" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Kenar Yuvarlaklığı</label>
                    <Input placeholder="8px" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Gölge Yoğunluğu</label>
                    <Input placeholder="medium" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground text-lg">Dışa Aktar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    HTML/CSS Kodu
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Figma Dosyası
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    React Bileşenleri
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDesign;