import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  TrendingUp, 
  TrendingDown,
  Activity,
  Settings,
  Play,
  Pause,
  BarChart3,
  AlertTriangle,
  DollarSign,
  Target,
  Clock,
  Zap
} from "lucide-react";

const CryptoBot = () => {
  const [botActive, setBotActive] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState("");

  const indicators = [
    { name: "SMA", fullName: "Simple Moving Average", active: true },
    { name: "EMA", fullName: "Exponential Moving Average", active: true },
    { name: "RSI", fullName: "Relative Strength Index", active: false },
    { name: "MACD", fullName: "Moving Average Convergence Divergence", active: true },
    { name: "BBANDS", fullName: "Bollinger Bands", active: false },
    { name: "VWAP", fullName: "Volume Weighted Average Price", active: false },
    { name: "Stoch", fullName: "Stochastic Oscillator", active: false },
    { name: "ADX", fullName: "Average Directional Index", active: false },
  ];

  const strategies = [
    { name: "Trend Takip", desc: "EMA crossover ile trend takibi", risk: "Orta" },
    { name: "Mean Reversion", desc: "RSI ile aşırı alım/satım tespiti", risk: "Düşük" },
    { name: "Breakout", desc: "Bollinger Bands breakout stratejisi", risk: "Yüksek" },
    { name: "Scalping", desc: "Kısa vadeli hızlı işlemler", risk: "Çok Yüksek" },
  ];

  const positions = [
    { pair: "BTC/USDT", type: "LONG", entry: "42,350", current: "43,120", pnl: "+1.82%", pnlColor: "text-green-500" },
    { pair: "ETH/USDT", type: "SHORT", entry: "2,580", current: "2,520", pnl: "+2.33%", pnlColor: "text-green-500" },
    { pair: "ADA/USDT", type: "LONG", entry: "0.485", current: "0.478", pnl: "-1.44%", pnlColor: "text-red-500" },
  ];

  const performanceData = [
    { metric: "Toplam Kar/Zarar", value: "+2,450 USDT", color: "text-green-500" },
    { metric: "Win Rate", value: "68.5%", color: "text-blue-500" },
    { metric: "Maksimum Drawdown", value: "-3.2%", color: "text-red-500" },
    { metric: "Toplam İşlem", value: "127", color: "text-foreground" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Kripto Bot Motoru
            </h1>
            <p className="text-muted-foreground mt-2">
              Yapay zeka destekli otomatik alım-satım sistemleri
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant={botActive ? "default" : "secondary"} className="bg-gradient-accent text-accent-foreground">
              <Activity className="w-3 h-3 mr-1" />
              {botActive ? "Aktif" : "Pasif"}
            </Badge>
            <Button 
              onClick={() => setBotActive(!botActive)}
              className={botActive ? "bg-red-500 hover:bg-red-600" : "bg-gradient-primary hover:shadow-glow-primary"}
            >
              {botActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {botActive ? "Durdur" : "Başlat"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bot Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Strategy Selection */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Strateji Seçimi
                </CardTitle>
                <CardDescription>Alım-satım stratejinizi seçin ve yapılandırın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategies.map((strategy, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-smooth ${
                        selectedStrategy === strategy.name 
                          ? 'border-primary bg-gradient-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedStrategy(strategy.name)}
                    >
                      <h4 className="font-medium text-card-foreground">{strategy.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{strategy.desc}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-2 text-xs ${
                          strategy.risk === 'Düşük' ? 'border-green-500 text-green-500' :
                          strategy.risk === 'Orta' ? 'border-yellow-500 text-yellow-500' :
                          'border-red-500 text-red-500'
                        }`}
                      >
                        Risk: {strategy.risk}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Indicators Configuration */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Teknik İndikatörler
                </CardTitle>
                <CardDescription>Kullanılacak indikatörleri seçin ve ayarlayın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {indicators.map((indicator, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div>
                        <Label className="font-medium text-card-foreground">{indicator.name}</Label>
                        <p className="text-xs text-muted-foreground">{indicator.fullName}</p>
                      </div>
                      <Switch defaultChecked={indicator.active} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm text-card-foreground">RSI Periyodu</Label>
                    <Input placeholder="14" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-card-foreground">EMA Periyodu</Label>
                    <Input placeholder="21" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-card-foreground">Stop Loss %</Label>
                    <Input placeholder="2.5" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Positions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Aktif Pozisyonlar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant={position.type === 'LONG' ? 'default' : 'destructive'}>
                          {position.type}
                        </Badge>
                        <span className="font-medium text-card-foreground">{position.pair}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-card-foreground">
                          {position.entry} → {position.current}
                        </div>
                        <div className={`text-sm font-medium ${position.pnlColor}`}>
                          {position.pnl}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Stats */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Performans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {performanceData.map((data, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{data.metric}</span>
                      <span className={`text-sm font-medium ${data.color}`}>{data.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Risk Management */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Risk Yönetimi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm text-card-foreground">Maksimum Pozisyon Boyutu</Label>
                    <Input placeholder="1000 USDT" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-card-foreground">Günlük Maksimum Kayıp</Label>
                    <Input placeholder="5%" className="mt-1" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-card-foreground">Otomatik Stop Loss</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-card-foreground">Take Profit</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Status */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Piyasa Durumu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">BTC/USDT</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-sm text-green-500">+2.1%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">ETH/USDT</span>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-3 h-3 text-red-500" />
                      <span className="text-sm text-red-500">-0.8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Son Güncelleme</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">2 sn önce</span>
                    </div>
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

export default CryptoBot;