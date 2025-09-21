import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Code, 
  TrendingUp, 
  Palette,
  Video,
  Image,
  Music,
  Users,
  Activity,
  Zap,
  Target,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { title: "Aktif Projeler", value: "12", icon: Activity, change: "+2" },
    { title: "AI Sorguları", value: "1,247", icon: Bot, change: "+18%" },
    { title: "Kripto İşlemler", value: "89", icon: TrendingUp, change: "+5.2%" },
    { title: "Toplam Kullanıcı", value: "324", icon: Users, change: "+12" },
  ];

  const quickActions = [
    { title: "AI Asistana Sor", desc: "Kodlama, analiz ve strateji desteği", icon: Bot, url: "/ai-assistant", color: "bg-gradient-primary" },
    { title: "Uygulama Oluştur", desc: "Sürükle-bırak ile hızlı uygulama", icon: Code, url: "/app-builder", color: "bg-gradient-accent" },
    { title: "Kripto Bot Kur", desc: "Otomatik alım-satım stratejileri", icon: TrendingUp, url: "/crypto-bot", color: "bg-gradient-secondary" },
    { title: "Site Tasarla", desc: "Modern web siteleri oluştur", icon: Palette, url: "/site-design", color: "bg-secondary" },
  ];

  const recentActivity = [
    { action: "AI Asistanı kod analizi tamamladı", time: "2 dakika önce", icon: Bot },
    { action: "Yeni kripto bot stratejisi oluşturuldu", time: "15 dakika önce", icon: TrendingUp },
    { action: "Video işleme tamamlandı", time: "1 saat önce", icon: Video },
    { action: "Uygulama başarıyla dağıtıldı", time: "2 saat önce", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Platform Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Yapay zeka destekli tüm araçlarınız bir arada
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {new Date().toLocaleString('tr-TR')}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow-primary transition-smooth">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                <p className="text-xs text-accent font-medium">
                  {stat.change} son 24 saatte
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow-accent transition-smooth group cursor-pointer">
              <Link to={action.url}>
                <CardHeader>
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <action.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground group-hover:text-primary transition-smooth">
                    {action.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {action.desc}
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Son Aktiviteler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-smooth">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <activity.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-card-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Sistem Durumu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-card-foreground">AI Asistanı</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-500">Aktif</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-card-foreground">Kripto Bot Motoru</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-500">Çalışıyor</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-card-foreground">Medya İşleme</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-yellow-500">Hazır</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-card-foreground">API Servisleri</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-500">Online</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;