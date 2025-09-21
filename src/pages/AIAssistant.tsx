import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Send, 
  Code, 
  Search, 
  Lightbulb,
  BarChart,
  Shield,
  Zap,
  MessageSquare,
  Clock,
  Star
} from "lucide-react";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "assistant",
      content: "Merhaba! Ben sizin AI asistanınızım. Kod analizi, strateji oluşturma, soru cevap ve daha fazlası için buradayım. Size nasıl yardımcı olabilirim?",
      timestamp: new Date().toLocaleTimeString('tr-TR')
    }
  ]);

  const quickPrompts = [
    { text: "Kod analizi yap", icon: Code, category: "Kod" },
    { text: "Kripto strateji öner", icon: BarChart, category: "Strateji" },
    { text: "Güvenlik kontrolü yap", icon: Shield, category: "Güvenlik" },
    { text: "Web'de araştırma yap", icon: Search, category: "Araştırma" },
    { text: "Uygulama tasarım öner", icon: Lightbulb, category: "Tasarım" },
    { text: "API entegrasyonu planla", icon: Zap, category: "Entegrasyon" },
  ];

  const capabilities = [
    { title: "Kod Analizi", desc: "Kodunuzu analiz ederim ve iyileştirme önerileri sunarım", icon: Code },
    { title: "Strateji Geliştirme", desc: "İş ve teknik stratejiler oluştururum", icon: BarChart },
    { title: "İnternet Araştırması", desc: "Güncel bilgileri araştırıp size sunarım", icon: Search },
    { title: "Problem Çözme", desc: "Karmaşık problemleri adım adım çözerim", icon: Lightbulb },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString('tr-TR')
    };

    const assistantResponse = {
      type: "assistant", 
      content: "Bu özellik henüz geliştirme aşamasında. Gerçek AI entegrasyonu için backend bağlantısı gerekiyor. Şu an için demo modunda çalışıyorum.",
      timestamp: new Date().toLocaleTimeString('tr-TR')
    };

    setChatHistory([...chatHistory, userMessage, assistantResponse]);
    setMessage("");
  };

  const handleQuickPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3">
              <Bot className="w-8 h-8 text-primary" />
              AI Asistanı
            </h1>
            <p className="text-muted-foreground mt-2">
              Kod analizi, strateji oluşturma ve araştırma konularında uzman yardımcınız
            </p>
          </div>
          <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
            <Zap className="w-3 h-3 mr-1" />
            Aktif
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2 space-y-4">
            {/* Chat Messages */}
            <Card className="bg-card border-border h-96">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Sohbet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto space-y-4 mb-4">
                  {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-gradient-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 opacity-60" />
                          <span className="text-xs opacity-60">{msg.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Sorunuzu veya isteğinizi yazın..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-input border-border text-foreground"
                  />
                  <Button onClick={handleSendMessage} className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Prompts */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Hızlı Komutlar</CardTitle>
                <CardDescription>Yaygın istekler için hazır komutlar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickPrompt(prompt.text)}
                      className="justify-start text-left h-auto p-3 hover:bg-secondary/50 transition-smooth"
                    >
                      <div className="flex items-center gap-2">
                        <prompt.icon className="w-4 h-4" />
                        <div>
                          <div className="text-xs font-medium">{prompt.text}</div>
                          <div className="text-xs text-muted-foreground">{prompt.category}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Capabilities */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Yeteneklerim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {capabilities.map((cap, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-smooth">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <cap.icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-card-foreground">{cap.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{cap.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Context Info */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Bağlam Bilgisi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dil:</span>
                    <span className="text-card-foreground">Türkçe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model:</span>
                    <span className="text-card-foreground">GPT-4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Durum:</span>
                    <Badge variant="outline" className="text-xs">Demo</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Nasıl Kullanılır?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground space-y-2">
                  <p>• Kodunuzu paylaşın, analiz edeyim</p>
                  <p>• Strateji önerisi için hedeflerinizi belirtin</p>
                  <p>• Araştırma konusunu detaylandırın</p>
                  <p>• Probleminizi net bir şekilde tanımlayın</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;