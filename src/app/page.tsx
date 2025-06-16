'use client'

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar, Users, TreePine, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showFooter, setShowFooter] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      setScrollY(scrollPosition)
      
      // フッターを表示するかどうかを判定（画面の2倍スクロールしたら表示）
      setShowFooter(scrollPosition > windowHeight * 1.5)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // アニメーション無効化（動画を完全に覆うため）
  const getSlideUpTransform = () => {
    return `translateY(0px)` // 動かさない
  }

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
            opacity: isClient 
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

              {/* Language Toggle */}
              <div className="flex items-center space-x-1 text-sm font-light">
                <span className="text-white font-semibold px-2 py-1 bg-white/20 rounded">JP</span>
                <span className="text-white/60">|</span>
                <span className="text-white/60 hover:text-white cursor-pointer transition-colors">EN</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 text-sm font-light">
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">体験</a>
                <a href="#accommodation" className="text-white/80 hover:text-white transition-colors">宿泊</a>
                <a href="#facilities" className="text-white/80 hover:text-white transition-colors">施設</a>
                <a href="#access" className="text-white/80 hover:text-white transition-colors">アクセス</a>
                
        <Link href="/reservation">
                  <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 text-sm font-light">
                    ご予約
                  </Button>
                </Link>
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
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">体験</a>
                <a href="#accommodation" className="text-white/80 hover:text-white transition-colors">宿泊</a>
                <a href="#facilities" className="text-white/80 hover:text-white transition-colors">施設</a>
                <a href="#access" className="text-white/80 hover:text-white transition-colors">アクセス</a>
                <Link href="/reservation">
                  <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 text-sm font-light w-full">
                    ご予約
                  </Button>
                </Link>
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
            <span className="text-sm mb-2 font-light">スクロール</span>
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
              廃校から生まれた<br />
              新しい体験
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  それぞれの時間や体験に合わせてやさしく寄り添いやすい施設として、宿泊から日帰りまで、カフェや貸切風呂、サウナ利用のみの小休憩や近隣施設踏まえて宿泊までご堪能いただけます。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  また、奥房総みらいプロジェクトならではの、地元食材を活用した食プランから、貸切足湯付きサイトなど普段では体験ができない時間をご提供。
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
        </section>

      {/* Dynamic Image Gallery - 横スライド・ゆっくり自動 */}
      <section 
        className="py-16 overflow-hidden bg-black z-20 -mt-5"
      >
        <div className="relative w-full">
          <div 
            className="flex space-x-6 gallery-slide will-change-transform" 
            style={{ 
              width: 'max-content'
            }}
          >
            {[
              '/20250527041351.JPEG',
              '/20250527041332.JPEG',
              '/20250527041256.JPEG',
              '/20250527041143.JPEG',
              '/20250430044800.JPEG',
              '/20250430044445.JPEG',
              '/20250430044233.JPEG',
              '/20250430043740.JPEG',
              '/20250429045836.JPEG',
              '/20250429045817.JPEG',
              '/20250429045802.JPEG',
              '/20250430043855.JPEG',
              '/20250527020429.JPEG',
              '/20250527020306.JPEG',
            // ループ感を出すために同じ画像をもう一度
              '/20250527041351.JPEG',
              '/20250527041332.JPEG',
              '/20250527041256.JPEG',
              '/20250527041143.JPEG',
              '/20250430044800.JPEG',
              '/20250430044445.JPEG',
              '/20250430044233.JPEG',
              '/20250430043740.JPEG',
            ].map((src, i) => (
              <div key={i} className="relative w-80 h-64 flex-shrink-0 rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Styles */}
      <section 
        id="experience" 
        className="py-24 bg-black z-20 -mt-5"
      >
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">体験スタイル</h2>
              <p className="text-xl text-gray-300">あなたにぴったりの過ごし方を見つけよう</p>
              </div>
              
            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "初めてのキャンプ",
                  subtitle: "STYLE 01",
                  description: "キャンプが初めての方でも安心して楽しめるよう、最高のおもてなしと共に丁寧にご案内いたします。",
                  image: "/20250527041351.JPEG",
                  features: ["手ぶらプラン", "スタッフサポート", "初心者向け設備"]
                },
                {
                  title: "家族との時間",
                  subtitle: "STYLE 02", 
                  description: "家族みんなが笑顔になれる場所。子供たちは遊具エリアで自由に遊んだり、家族の絆を深める贅沢な時間が待っています。",
                  image: "/20250527041332.JPEG",
                  features: ["遊具エリア", "ファミリーサイト", "貸切風呂"]
                },
                {
                  title: "愛犬との旅",
                  subtitle: "STYLE 03",
                  description: "広々としたドッグランサイトで、愛犬が思う存分駆け回れます。愛犬との絆を深める体験をお楽しみください。",
                  image: "/20250527041256.JPEG", 
                  features: ["ドッグランサイト", "ペット同伴OK", "足湯スペース"]
                },
                {
                  title: "日帰りの癒し",
                  subtitle: "STYLE 04",
                  description: "短時間でも自然に囲まれた静かな空間で贅沢な日帰り体験を提供します。都会では味わえないリフレッシュを。",
                  image: "/20250527041143.JPEG",
                  features: ["貸切サウナ", "BBQプラン", "日帰り温泉"]
                }
              ].map((style, index) => (
                  <div key={index} className="group cursor-pointer">
                  <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm font-light mb-2 opacity-80">{style.subtitle}</div>
                      <h3 className="text-2xl font-bold">{style.title}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{style.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {style.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">
                          {feature}
                        </span>
                ))}
            </div>
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
        className="py-24 bg-black z-20 -mt-5"
      >
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">施設・設備</h2>
              <p className="text-xl text-gray-300">充実した設備でお客様をお迎えします</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { icon: "🛁", name: "貸切露天風呂", desc: "自然に囲まれた癒しの空間" },
                { icon: "🧖‍♂️", name: "貸切サウナ", desc: "プライベートなサウナ体験" },
                { icon: "🎪", name: "遊具エリア", desc: "お子様も安心して遊べる" },
                { icon: "⛺", name: "キャンプサイト", desc: "様々なタイプをご用意" },
                { icon: "🐕", name: "ドッグランサイト", desc: "愛犬と一緒に過ごせる" },
                { icon: "🎒", name: "手ぶらプラン", desc: "初心者も安心のプラン" },
                { icon: "🍖", name: "食サービス", desc: "地元食材を活用" },
                { icon: "🔒", name: "ALSOK", desc: "24時間セキュリティ" }
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
        className="py-24 bg-black z-20 -mt-5"
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
                        <p className="text-white font-semibold">奥房総みらいプロジェクト</p>
                        <p className="text-gray-300">〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="text-gray-300">0475-78-3050</p>
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
                        いすみ鉄道「大多喜駅」よりタクシー約10分<br />
                        ※送迎サービスもございます（要予約）
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
                  className="w-full h-full grayscale contrast-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-black z-20 -mt-5"
      >
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              あなたの特別な時間を<br />
              お待ちしています
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              日常を離れ、自然の中で心も体もリフレッシュ。<br />
              奥房総みらいプロジェクトで、忘れられない思い出を作りませんか？
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/reservation">
                <Button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  今すぐ予約する
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-white border-2 border-white/50 hover:bg-white/10 px-12 py-4 text-lg font-light rounded-full transition-all duration-300"
              >
                資料請求
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
                  {['体験スタイル', '宿泊プラン', '施設案内', 'アクセス', 'よくある質問'].map((link) => (
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
                    <span className="text-gray-400">0475-78-3050</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">jifgv.tools@gmail.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <span className="text-gray-400 text-sm">〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</span>
                  </div>
                </div>
            </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 奥房総みらいプロジェクト. All rights reserved.
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
