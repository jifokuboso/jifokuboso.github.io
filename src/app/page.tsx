'use client'

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar, Users, TreePine, Star } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showFooter, setShowFooter] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        
        setScrollY(scrollPosition)
        
        // フッターを表示するかどうかを判定（画面の2倍スクロールしたら表示）
        setShowFooter(scrollPosition > windowHeight * 1.5)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 w-full h-full z-0 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23000000'/%3E%3C/svg%3E"
        >
          <source src="/okuboso-mirai-pv.mov" type="video/mp4" />
        </video>
        {/* Permanent Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Progressive Overlay */}
        <div 
          className="absolute inset-0 bg-black/40"
          style={{
            opacity: isClient && typeof window !== 'undefined'
              ? Math.min(scrollY / (window.innerHeight * 0.3), 0.9)
              : 0
          }}
        />
      </div>

      {/* Fixed Navigation - Glass Effect */}
      {scrollY > 50 && (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100 
            ? 'bg-black/40 backdrop-blur-lg border-b border-white/20' 
            : 'bg-black/10 backdrop-blur-sm border-b border-white/5'
        } opacity-100 animate-fade-in`}> 
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-wide">奥房総みらい</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 text-sm font-light">
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">プラン</a>
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">体験</a>
                <a href="#facilities" className="text-white/80 hover:text-white transition-colors">施設</a>
                <a href="#access" className="text-white/80 hover:text-white transition-colors">アクセス</a>
                
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 text-sm font-light">
                  ご予約
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden mt-4 pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="flex flex-col space-y-4 text-sm font-light">
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">プラン</a>
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">体験</a>
                <a href="#facilities" className="text-white/80 hover:text-white transition-colors">施設</a>
                <a href="#access" className="text-white/80 hover:text-white transition-colors">アクセス</a>
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 text-sm font-light w-full">
                  ご予約
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center z-10 overflow-hidden">
        {/* Hero Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/okuboso-mirai-pv.mov" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-20">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-light">スクロールしてご覧ください</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="relative py-24 bg-black min-h-screen z-20 -mt-20"
        style={{
          boxShadow: '0 -20px 40px rgba(0, 0, 0, 1)',
          paddingTop: '10rem'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              大自然と懐かしい場所で<br />
              非日常の体験を
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  キャンプ場＆テントサウナ施設として生まれ変わった旧上瀑小学校。大自然に囲まれた全面芝生の広大な校庭で自由にキャンプを楽しみませんか？
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  キャンプ場利用では３つのプランから選択可能。お客様のスタイルに合わせてお選びいただけます。
                </p>
              </div>
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  日常とは違ったプライベート利用や大切な人と過ごす、温かいひとときの時間と体験を提供する場所として、心置きなく休める「あなたの休息地」として、おもてなし致します。
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "500+", label: "年間利用者数" },
                { icon: Star, number: "4.8", label: "満足度評価" },
                { icon: TreePine, number: "15", label: "キャンプサイト" },
                { icon: Calendar, number: "365", label: "営業日数" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery - Horizontal Scrolling */}
        <div className="mt-20 overflow-hidden">
          <div className="animate-slide-left-slow">
            <div className="flex space-x-6" style={{ width: 'calc(300px * 12)' }}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-72 h-48 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                  <Image
                    src={`/images/camp-${(i % 6) + 1}.jpg`}
                    alt={`キャンプ体験 ${i + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Arial' font-size='16'%3E体験 ${i + 1}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section 
        id="plans" 
        className="py-16 bg-black z-20 -mt-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">自分に合ったキャンプ体験を</h2>
              <p className="text-xl text-gray-300">初めての方から本格的なアウトドア体験を求める方まで<br/>様々なニーズに合わせた３つのプランをご用意しています。</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "ライトプラン",
                  subtitle: "気軽に学校キャンプ体験",
                  price: "¥5,000",
                  period: "/泊",
                  features: [
                    "区画サイト利用のみ",
                    "トイレ、炊事場が利用可能"
                  ],
                  recommended: false
                },
                {
                  name: "スタンダードプラン", 
                  subtitle: "手ぶらで設営らくらくキャンプ",
                  price: "¥8,000",
                  period: "/泊",
                  features: [
                    "基本キャンプギア",
                    "貸し出し付き区画サイト",
                    "トイレ、炊事場、シャワー施設が利用可能"
                  ],
                  recommended: true
                },
                {
                  name: "プレミアムプラン",
                  subtitle: "贅沢廃校グランピング",
                  price: "¥12,000",
                  period: "/泊",
                  features: [
                    "グランピングサイト",
                    "ベッド、ソファ完備",
                    "テントサウナが追加料金なしで利用可能"
                  ],
                  recommended: false
                }
              ].map((plan, index) => (
                <div key={index} className={`relative group bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                  plan.recommended ? 'border-white/30 ring-2 ring-white/20' : 'border-white/10'
                }`}>
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 text-sm font-semibold rounded-bl-xl">
                      オススメ
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{plan.subtitle}</p>
                      <div className="flex items-end justify-center mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-300 text-lg ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.recommended 
                        ? 'bg-white text-black hover:bg-gray-100' 
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}>
                      今すぐ予約
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-16 bg-black z-20 -mt-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">体験スタイル</h2>
              <p className="text-xl text-gray-300">あなたにぴったりの過ごし方を見つけよう</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  style: "STYLE 01",
                  title: "初めてのキャンプ",
                  desc: "キャンプが初めての方でも安心して楽しめるよう、キャンプ用品の貸し出しも行っています。",
                  tags: ["手ぶらキャンプ", "キャンプ用品貸出", "初心者向け設備"],
                  emoji: "初めてのキャンプ"
                },
                {
                  style: "STYLE 02", 
                  title: "家族との時間",
                  desc: "家族みんなが笑顔になれる場所。子供向け遊具エリアの利用でアクティビティも充実。",
                  tags: ["遊具エリア", "ファミリーサイト", "廃校アクティビティ"],
                  emoji: "家族との時間"
                },
                {
                  style: "STYLE 03",
                  title: "愛犬との旅", 
                  desc: "広々としたドッグランで、愛犬が思う存分駆け回れます。",
                  tags: ["ドッグラン", "ペット同伴OK", "足洗い場"],
                  emoji: "愛犬との旅"
                },
                {
                  style: "STYLE 04",
                  title: "日帰りの癒し",
                  desc: "短時間でも自然に囲まれた静かな空間で贅沢な日帰り体験を。テントサウナで身も心も整う。",
                  tags: ["テントサウナ", "BBQプラン", "日帰り温泉"],
                  emoji: "日帰りの癒し"
                }
              ].map((experience, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-gray-400 mr-4">{experience.style}</span>
                    <div className="text-sm text-gray-500">{experience.emoji}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{experience.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{experience.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Facilities Section */}
      <section 
        id="facilities" 
        className="py-16 bg-black z-20 -mt-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">施設・設備</h2>
              <p className="text-xl text-gray-300">充実した設備でお客様をお迎えします</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🧖‍♂️", name: "テントサウナ", desc: "非日常のサウナ体験" },
                { icon: "🎪", name: "遊具エリア", desc: "お子様も安心して遊べる" },
                { icon: "⛺", name: "キャンプサイト", desc: "様々なタイプをご用意" },
                { icon: "🐕", name: "ドッグラン", desc: "愛犬と一緒に過ごせる" },
                { icon: "🎒", name: "手ぶらプラン", desc: "初心者も安心のプラン" },
                { icon: "💻", name: "コワーキング", desc: "急な仕事にも対応可能" }
              ].map((facility, index) => (
                <div key={index} className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-400">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section 
        id="access" 
        className="py-16 bg-black z-20 -mt-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">アクセス</h2>
              <p className="text-xl text-gray-300">お気軽にお越しください</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">施設情報</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">上瀑キャンプ＆テントサウナ場</p>
                        <p className="text-gray-300">〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="text-gray-300">123-4567-890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="text-gray-300">jifgv.tools@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h4 className="text-lg font-semibold text-white mb-4">アクセス方法</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-semibold mb-2">🚗 お車でお越しの場合</p>
                      <p className="text-gray-300 text-sm">圏央道「市原鶴舞IC」より約30分</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">🚃 公共交通機関の場合</p>
                      <p className="text-gray-300 text-sm">
                        いすみ鉄道「大多喜駅」よりタクシー約10分
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.247591177041!2d140.24864785373208!3d35.299828964359115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022b1451ba7d83f%3A0x98bd61e58198588!2z5aSn5aSa5Zac55S656uL5LiK54Kr5bCP5a2m5qCh!5e0!3m2!1sja!2smy!4v1749694394133!5m2!1sja!2smy" 
                  width="100%" 
                  height="500" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="大多喜町立上瀑小学校 - Google マップ"
                  className="w-full h-full contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 bg-black z-20 -mt-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              大自然の中で非日常を味わいませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              日常を離れ、自然の中で心も体もリフレッシュ。<br />
              上瀑キャンプ＆テントサウナ場で、忘れられない思い出を作りませんか？
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                今すぐ予約する
              </Button>
              <Button 
                variant="ghost" 
                className="text-white border-2 border-white/50 hover:bg-white/10 px-12 py-4 text-lg font-light rounded-full transition-all duration-300"
              >
                コミュニティに参加する
              </Button>
            </div>

            {/* News */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">NEWS</span>
                <span>2025/01/20</span>
                <span>|</span>
                <span>1/20(月)PM12:00〜1/21(火)終日は、当施設お休みとなります。</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 条件付き表示 */}
      {showFooter && (
        <footer className="bg-black border-t border-white/10 transition-all duration-500 transform translate-y-0 opacity-100 z-20 -mt-5">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Footer Content */}
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <TreePine className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">奥房総みらい</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    千葉県大多喜町の廃校を活用した自然溢れるキャンプ複合施設。あなたの心の休息地として、特別な体験をお届けします。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">リンク</h4>
                  <div className="space-y-2">
                    {['プラン', '体験スタイル', '施設・設備', 'アクセス'].map((link) => (
                      <a key={link} href="#" className="block text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">お問い合わせ</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="text-gray-400">123-4567-890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="text-gray-400">jifgv.tools@gmail.com</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                      <p className="text-gray-400 text-sm">〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer Bottom */}
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  {/* © 2025 奥房総みらいプロジェクト. All rights reserved. */}
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">プライバシーポリシー</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">利用規約</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
} 