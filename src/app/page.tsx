'use client'

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar, Users, TreePine, Star, Globe } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// 翻訳データ
const translations = {
  ja: {
    // Header
    plans: "プラン",
    experience: "体験",
    facilities: "施設",
    access: "アクセス",
    reserve: "ご予約",
    
    // Hero
    scrollText: "スクロールしてご覧ください",
    
    // About
    aboutTitle: "大自然と懐かしい場所で\n非日常の体験を",
    aboutDesc1: "キャンプ場＆テントサウナ施設として生まれ変わった旧上瀑小学校。大自然に囲まれた全面芝生の広大な校庭で自由にキャンプを楽しみませんか？",
    aboutDesc2: "キャンプ場利用では３つのプランから選択可能。お客様のスタイルに合わせてお選びいただけます。",
    aboutDesc3: "日常とは違ったプライベート利用や大切な人と過ごす、温かいひとときの時間と体験を提供する場所として、心置きなく休める「あなたの休息地」として、おもてなし致します。",
    annualUsers: "年間利用者数",
    satisfaction: "満足度評価",
    campsites: "キャンプサイト",
    operatingDays: "営業日数",
    
    // Plans
    plansTitle: "自分に合ったキャンプ体験を",
    plansSubtitle: "初めての方から本格的なアウトドア体験を求める方まで\n様々なニーズに合わせた３つのプランをご用意しています。",
    recommended: "オススメ",
    lightPlan: "ライトプラン",
    lightPlanSub: "気軽に学校キャンプ体験",
    lightFeature1: "区画サイト利用のみ",
    lightFeature2: "トイレ、炊事場が利用可能",
    standardPlan: "スタンダードプラン",
    standardPlanSub: "手ぶらで設営らくらくキャンプ",
    standardFeature1: "基本キャンプギア",
    standardFeature2: "貸し出し付き区画サイト",
    standardFeature3: "トイレ、炊事場、シャワー施設が利用可能",
    premiumPlan: "プレミアムプラン",
    premiumPlanSub: "贅沢廃校グランピング",
    premiumFeature1: "グランピングサイト",
    premiumFeature2: "ベッド、ソファ完備",
    premiumFeature3: "テントサウナが追加料金なしで利用可能",
    bookNow: "今すぐ予約",
    
    // Experience
    experienceTitle: "体験スタイル",
    experienceSubtitle: "あなたにぴったりの過ごし方を見つけよう",
    style01: "STYLE 01",
    firstCamp: "初めてのキャンプ",
    firstCampDesc: "キャンプが初めての方でも安心して楽しめるよう、キャンプ用品の貸し出しも行っています。",
    firstCampTag1: "手ぶらキャンプ",
    firstCampTag2: "キャンプ用品貸出",
    firstCampTag3: "初心者向け設備",
    style02: "STYLE 02",
    familyTime: "家族との時間",
    familyTimeDesc: "家族みんなが笑顔になれる場所。子供向け遊具エリアの利用でアクティビティも充実。",
    familyTimeTag1: "遊具エリア",
    familyTimeTag2: "ファミリーサイト",
    familyTimeTag3: "廃校アクティビティ",
    style03: "STYLE 03",
    petTravel: "愛犬との旅",
    petTravelDesc: "広々としたドッグランで、愛犬が思う存分駆け回れます。",
    petTravelTag1: "ドッグラン",
    petTravelTag2: "ペット同伴OK",
    petTravelTag3: "足洗い場",
    style04: "STYLE 04",
    dayRelax: "日帰りの癒し",
    dayRelaxDesc: "短時間でも自然に囲まれた静かな空間で贅沢な日帰り体験を。テントサウナで身も心も整う。",
    dayRelaxTag1: "テントサウナ",
    dayRelaxTag2: "BBQプラン",
    dayRelaxTag3: "日帰り温泉",
    
    // Facilities
    facilitiesTitle: "施設・設備",
    facilitiesSubtitle: "充実した設備でお客様をお迎えします",
    tentSauna: "テントサウナ",
    tentSaunaDesc: "非日常のサウナ体験",
    playArea: "遊具エリア",
    playAreaDesc: "お子様も安心して遊べる",
    campsite: "キャンプサイト",
    campsiteDesc: "様々なタイプをご用意",
    dogRun: "ドッグラン",
    dogRunDesc: "愛犬と一緒に過ごせる",
    handsFree: "手ぶらプラン",
    handsFreeDesc: "初心者も安心のプラン",
    coworking: "コワーキング",
    coworkingDesc: "急な仕事にも対応可能",
    
    // Access
    accessTitle: "アクセス",
    accessSubtitle: "お気軽にお越しください",
    facilityInfo: "施設情報",
    facilityName: "上瀑キャンプ＆テントサウナ場",
    accessMethod: "アクセス方法",
    byCar: "🚗 お車でお越しの場合",
    byCarDesc: "圏央道「市原鶴舞IC」より約30分",
    byTrain: "🚃 公共交通機関の場合",
    byTrainDesc: "いすみ鉄道「大多喜駅」よりタクシー約10分",
    
    // CTA
    ctaTitle: "大自然の中で非日常を味わいませんか？",
    ctaDesc: "日常を離れ、自然の中で心も体もリフレッシュ。\n上瀑キャンプ＆テントサウナ場で、忘れられない思い出を作りませんか？",
    reserveNow: "今すぐ予約する",
    joinCommunity: "コミュニティに参加する",
    newsDate: "2025/01/20",
    newsContent: "1/20(月)PM12:00〜1/21(火)終日は、当施設お休みとなります。",
    
    // Footer
    footerDesc: "千葉県大多喜町の廃校を活用した自然溢れるキャンプ複合施設。あなたの心の休息地として、特別な体験をお届けします。",
    links: "リンク",
    contact: "お問い合わせ",
    privacyPolicy: "プライバシーポリシー",
    terms: "利用規約"
  },
  en: {
    // Header
    plans: "Plans",
    experience: "Experience",
    facilities: "Facilities",
    access: "Access",
    reserve: "Reserve",
    
    // Hero
    scrollText: "Please scroll to explore",
    
    // About
    aboutTitle: "Extraordinary experiences in nature\nand nostalgic places",
    aboutDesc1: "The former Kamidaki Elementary School has been reborn as a campsite & tent sauna facility. Why don't you enjoy camping freely in the vast lawn schoolyard surrounded by nature?",
    aboutDesc2: "For campsite use, you can choose from 3 plans. You can choose according to your style.",
    aboutDesc3: "As a place that provides warm moments and experiences to spend with loved ones, different from everyday life, we will provide hospitality as 'your resting place' where you can rest without worry.",
    annualUsers: "Annual Users",
    satisfaction: "Satisfaction Rate",
    campsites: "Campsites",
    operatingDays: "Operating Days",
    
    // Plans
    plansTitle: "Find Your Perfect Camping Experience",
    plansSubtitle: "We offer 3 plans to meet various needs from beginners\nto those seeking authentic outdoor experiences.",
    recommended: "Recommended",
    lightPlan: "Light Plan",
    lightPlanSub: "Casual school camping experience",
    lightFeature1: "Site use only",
    lightFeature2: "Toilet and kitchen facilities available",
    standardPlan: "Standard Plan",
    standardPlanSub: "Hands-free easy setup camping",
    standardFeature1: "Basic camping gear",
    standardFeature2: "Site with equipment rental",
    standardFeature3: "Toilet, kitchen, and shower facilities available",
    premiumPlan: "Premium Plan",
    premiumPlanSub: "Luxury abandoned school glamping",
    premiumFeature1: "Glamping site",
    premiumFeature2: "Bed and sofa equipped",
    premiumFeature3: "Tent sauna available at no extra charge",
    bookNow: "Book Now",
    
    // Experience
    experienceTitle: "Experience Styles",
    experienceSubtitle: "Find the perfect way to spend your time",
    style01: "STYLE 01",
    firstCamp: "First-time Camping",
    firstCampDesc: "We also rent out camping equipment so that even first-time campers can enjoy camping with peace of mind.",
    firstCampTag1: "Hands-free Camping",
    firstCampTag2: "Equipment Rental",
    firstCampTag3: "Beginner-friendly",
    style02: "STYLE 02",
    familyTime: "Family Time",
    familyTimeDesc: "A place where the whole family can smile. Activities are also enhanced with the use of playground areas for children.",
    familyTimeTag1: "Playground Area",
    familyTimeTag2: "Family Site",
    familyTimeTag3: "School Activities",
    style03: "STYLE 03",
    petTravel: "Travel with Your Dog",
    petTravelDesc: "Your beloved dog can run around freely in the spacious dog run.",
    petTravelTag1: "Dog Run",
    petTravelTag2: "Pet-friendly",
    petTravelTag3: "Paw Washing Area",
    style04: "STYLE 04",
    dayRelax: "Day Trip Relaxation",
    dayRelaxDesc: "Even in a short time, enjoy a luxurious day trip experience in a quiet space surrounded by nature. Refresh your body and mind with the tent sauna.",
    dayRelaxTag1: "Tent Sauna",
    dayRelaxTag2: "BBQ Plan",
    dayRelaxTag3: "Day Trip Hot Spring",
    
    // Facilities
    facilitiesTitle: "Facilities & Equipment",
    facilitiesSubtitle: "We welcome you with comprehensive facilities",
    tentSauna: "Tent Sauna",
    tentSaunaDesc: "Extraordinary sauna experience",
    playArea: "Playground",
    playAreaDesc: "Safe play area for children",
    campsite: "Campsites",
    campsiteDesc: "Various types available",
    dogRun: "Dog Run",
    dogRunDesc: "Enjoy time with your pet",
    handsFree: "Hands-free Plan",
    handsFreeDesc: "Safe plan for beginners",
    coworking: "Co-working",
    coworkingDesc: "Available for urgent work",
    
    // Access
    accessTitle: "Access",
    accessSubtitle: "Feel free to visit us",
    facilityInfo: "Facility Information",
    facilityName: "Kamidaki Camp & Tent Sauna Site",
    accessMethod: "Access Methods",
    byCar: "🚗 By Car",
    byCarDesc: "About 30 minutes from Ken-O Expressway 'Ichihara Tsurumau IC'",
    byTrain: "🚃 By Public Transportation",
    byTrainDesc: "About 10 minutes by taxi from Isumi Railway 'Otaki Station'",
    
    // CTA
    ctaTitle: "Experience the extraordinary in the great outdoors?",
    ctaDesc: "Leave your daily routine behind and refresh your mind and body in nature.\nWhy not create unforgettable memories at Kamidaki Camp & Tent Sauna Site?",
    reserveNow: "Reserve Now",
    joinCommunity: "Join Community",
    newsDate: "2025/01/20",
    newsContent: "Our facility will be closed from 1/20 (Mon) 12:00 PM to all day 1/21 (Tue).",
    
    // Footer
    footerDesc: "A nature-rich camping complex facility that utilizes an abandoned school in Otaki Town, Chiba Prefecture. We deliver special experiences as your mental resting place.",
    links: "Links",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service"
  },
  zh: {
    // Header
    plans: "套餐",
    experience: "体验",
    facilities: "设施",
    access: "交通",
    reserve: "预约",
    
    // Hero
    scrollText: "请向下滚动浏览",
    
    // About
    aboutTitle: "在大自然和怀旧之地\n体验非凡时光",
    aboutDesc1: "原上瀑小学校重生为露营地和帐篷桑拿设施。在被大自然环绕的广阔芝生校园里自由享受露营时光，如何？",
    aboutDesc2: "露营地使用可从3个套餐中选择。您可以根据自己的风格进行选择。",
    aboutDesc3: "作为提供与日常不同的私人使用和与重要的人共度温馨时光的体验场所，我们将以您可以安心休息的「您的休憩地」身份为您提供贴心服务。",
    annualUsers: "年使用人数",
    satisfaction: "满意度评价",
    campsites: "露营地",
    operatingDays: "营业天数",
    
    // Plans
    plansTitle: "找到适合您的露营体验",
    plansSubtitle: "从初学者到寻求正宗户外体验的人\n我们准备了满足各种需求的3个套餐。",
    recommended: "推荐",
    lightPlan: "轻松套餐",
    lightPlanSub: "轻松的学校露营体验",
    lightFeature1: "仅限区域场地使用",
    lightFeature2: "可使用洗手间、炊事场",
    standardPlan: "标准套餐",
    standardPlanSub: "空手轻松搭建露营",
    standardFeature1: "基本露营装备",
    standardFeature2: "带设备租赁的区域场地",
    standardFeature3: "可使用洗手间、炊事场、淋浴设施",
    premiumPlan: "高级套餐",
    premiumPlanSub: "奢华废校豪华露营",
    premiumFeature1: "豪华露营场地",
    premiumFeature2: "配备床铺、沙发",
    premiumFeature3: "可免费使用帐篷桑拿",
    bookNow: "立即预约",
    
    // Experience
    experienceTitle: "体验风格",
    experienceSubtitle: "找到最适合您的度过方式",
    style01: "风格 01",
    firstCamp: "初次露营",
    firstCampDesc: "为了让初次露营的人也能安心享受，我们也提供露营用品租赁。",
    firstCampTag1: "空手露营",
    firstCampTag2: "露营用品租赁",
    firstCampTag3: "初学者友好设施",
    style02: "风格 02",
    familyTime: "家庭时光",
    familyTimeDesc: "让全家人都能露出笑容的地方。通过使用儿童游乐区，活动也很充实。",
    familyTimeTag1: "游乐区",
    familyTimeTag2: "家庭场地",
    familyTimeTag3: "废校活动",
    style03: "风格 03",
    petTravel: "与爱犬的旅行",
    petTravelDesc: "在宽敞的狗狗乐园里，爱犬可以尽情奔跑。",
    petTravelTag1: "狗狗乐园",
    petTravelTag2: "可携带宠物",
    petTravelTag3: "洗脚区",
    style04: "风格 04",
    dayRelax: "一日放松",
    dayRelaxDesc: "即使是短时间，也能在被自然环绕的安静空间里享受奢华的一日体验。通过帐篷桑拿调整身心。",
    dayRelaxTag1: "帐篷桑拿",
    dayRelaxTag2: "BBQ套餐",
    dayRelaxTag3: "一日温泉",
    
    // Facilities
    facilitiesTitle: "设施·设备",
    facilitiesSubtitle: "我们将以完善的设施迎接您",
    tentSauna: "帐篷桑拿",
    tentSaunaDesc: "非凡的桑拿体验",
    playArea: "游乐区",
    playAreaDesc: "孩子们也能安心游玩",
    campsite: "露营地",
    campsiteDesc: "准备了各种类型",
    dogRun: "狗狗乐园",
    dogRunDesc: "与爱宠一起度过",
    handsFree: "空手套餐",
    handsFreeDesc: "初学者也安心的套餐",
    coworking: "协同办公",
    coworkingDesc: "紧急工作也能应对",
    
    // Access
    accessTitle: "交通",
    accessSubtitle: "请随时光临",
    facilityInfo: "设施信息",
    facilityName: "上瀑露营&帐篷桑拿场",
    accessMethod: "交通方式",
    byCar: "🚗 自驾车",
    byCarDesc: "从圈央道『市原鹤舞IC』约30分钟",
    byTrain: "🚃 公共交通",
    byTrainDesc: "从夷隅铁道『大多喜站』乘出租车约10分钟",
    
    // CTA
    ctaTitle: "在大自然中体验非凡时光如何？",
    ctaDesc: "远离日常，在自然中让身心得到放松。\n在上瀑露营&帐篷桑拿场，创造难忘的回忆如何？",
    reserveNow: "立即预约",
    joinCommunity: "加入社区",
    newsDate: "2025/01/20",
    newsContent: "1/20（周一）下午12:00～1/21（周二）全天，本设施休息。",
    
    // Footer
    footerDesc: "利用千叶县大多喜町废校的充满自然的露营综合设施。作为您心灵的休憩地，为您提供特别的体验。",
    links: "链接",
    contact: "联系方式",
    privacyPolicy: "隐私政策",
    terms: "使用条款"
  }
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showFooter, setShowFooter] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [language, setLanguage] = useState<'ja' | 'en' | 'zh'>('ja')

  const t = (key: keyof typeof translations.ja) => {
    return translations[language][key] || key
  }

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
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">{t('plans')}</a>
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">{t('experience')}</a>
                <a href="#facilities" className="text-white/80 hover:text-white transition-colors">{t('facilities')}</a>
                <a href="#access" className="text-white/80 hover:text-white transition-colors">{t('access')}</a>
                
                {/* Language Toggle */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>{language === 'ja' ? 'JP' : language === 'en' ? 'EN' : 'CN'}</span>
                  </button>
                  <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 min-w-[80px]">
                    <button 
                      onClick={() => setLanguage('ja')}
                      className={`block w-full text-left px-3 py-1 rounded text-sm transition-colors ${language === 'ja' ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'}`}
                    >
                      日本語
                    </button>
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`block w-full text-left px-3 py-1 rounded text-sm transition-colors ${language === 'en' ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setLanguage('zh')}
                      className={`block w-full text-left px-3 py-1 rounded text-sm transition-colors ${language === 'zh' ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'}`}
                    >
                      中文
                    </button>
                  </div>
                </div>
                
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 text-sm font-light">
                  {t('reserve')}
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
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">{t('plans')}</a>
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">{t('experience')}</a>
                <a href="#facilities" className="text-white/80 hover:text-white transition-colors">{t('facilities')}</a>
                <a href="#access" className="text-white/80 hover:text-white transition-colors">{t('access')}</a>
                
                {/* Language Toggle Mobile */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-semibold">Language / 语言</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setLanguage('ja')}
                      className={`px-3 py-2 rounded text-sm transition-colors ${language === 'ja' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/80 hover:text-white'}`}
                    >
                      日本語
                    </button>
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-2 rounded text-sm transition-colors ${language === 'en' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/80 hover:text-white'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setLanguage('zh')}
                      className={`px-3 py-2 rounded text-sm transition-colors ${language === 'zh' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/80 hover:text-white'}`}
                    >
                      中文
                    </button>
                  </div>
                </div>
                
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-2 text-sm font-light w-full">
                  {t('reserve')}
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
            <span className="text-sm mb-2 font-light">{t('scrollText')}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white whitespace-pre-line">
              {t('aboutTitle')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('aboutDesc1')}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('aboutDesc2')}
                </p>
              </div>
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('aboutDesc3')}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "500+", label: t('annualUsers') },
                { icon: Star, number: "4.8", label: t('satisfaction') },
                { icon: TreePine, number: "15", label: t('campsites') },
                { icon: Calendar, number: "365", label: t('operatingDays') }
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('plansTitle')}</h2>
              <p className="text-xl text-gray-300 whitespace-pre-line">{t('plansSubtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: t('lightPlan'),
                  subtitle: t('lightPlanSub'),
                  price: "¥5,000",
                  period: language === 'ja' ? "/泊" : language === 'en' ? "/night" : "/晚",
                  features: [
                    t('lightFeature1'),
                    t('lightFeature2')
                  ],
                  recommended: false
                },
                {
                  name: t('standardPlan'), 
                  subtitle: t('standardPlanSub'),
                  price: "¥8,000",
                  period: language === 'ja' ? "/泊" : language === 'en' ? "/night" : "/晚",
                  features: [
                    t('standardFeature1'),
                    t('standardFeature2'),
                    t('standardFeature3')
                  ],
                  recommended: true
                },
                {
                  name: t('premiumPlan'),
                  subtitle: t('premiumPlanSub'),
                  price: "¥12,000",
                  period: language === 'ja' ? "/泊" : language === 'en' ? "/night" : "/晚",
                  features: [
                    t('premiumFeature1'),
                    t('premiumFeature2'),
                    t('premiumFeature3')
                  ],
                  recommended: false
                }
              ].map((plan, index) => (
                <div key={index} className={`relative group bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                  plan.recommended ? 'border-white/30 ring-2 ring-white/20' : 'border-white/10'
                }`}>
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 text-sm font-semibold rounded-bl-xl">
                      {t('recommended')}
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
                      {t('bookNow')}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('experienceTitle')}</h2>
              <p className="text-xl text-gray-300">{t('experienceSubtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  style: t('style01'),
                  title: t('firstCamp'),
                  desc: t('firstCampDesc'),
                  tags: [t('firstCampTag1'), t('firstCampTag2'), t('firstCampTag3')],
                  emoji: t('firstCamp')
                },
                {
                  style: t('style02'), 
                  title: t('familyTime'),
                  desc: t('familyTimeDesc'),
                  tags: [t('familyTimeTag1'), t('familyTimeTag2'), t('familyTimeTag3')],
                  emoji: t('familyTime')
                },
                {
                  style: t('style03'),
                  title: t('petTravel'), 
                  desc: t('petTravelDesc'),
                  tags: [t('petTravelTag1'), t('petTravelTag2'), t('petTravelTag3')],
                  emoji: t('petTravel')
                },
                {
                  style: t('style04'),
                  title: t('dayRelax'),
                  desc: t('dayRelaxDesc'),
                  tags: [t('dayRelaxTag1'), t('dayRelaxTag2'), t('dayRelaxTag3')],
                  emoji: t('dayRelax')
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('facilitiesTitle')}</h2>
              <p className="text-xl text-gray-300">{t('facilitiesSubtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🧖‍♂️", name: t('tentSauna'), desc: t('tentSaunaDesc') },
                { icon: "🎪", name: t('playArea'), desc: t('playAreaDesc') },
                { icon: "⛺", name: t('campsite'), desc: t('campsiteDesc') },
                { icon: "🐕", name: t('dogRun'), desc: t('dogRunDesc') },
                { icon: "🎒", name: t('handsFree'), desc: t('handsFreeDesc') },
                { icon: "💻", name: t('coworking'), desc: t('coworkingDesc') }
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('accessTitle')}</h2>
              <p className="text-xl text-gray-300">{t('accessSubtitle')}</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('facilityInfo')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">{t('facilityName')}</p>
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
                  <h4 className="text-lg font-semibold text-white mb-4">{t('accessMethod')}</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-semibold mb-2">{t('byCar')}</p>
                      <p className="text-gray-300 text-sm">{t('byCarDesc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('byTrain')}</p>
                      <p className="text-gray-300 text-sm">
                        {t('byTrainDesc')}
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
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed whitespace-pre-line">
              {t('ctaDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                {t('reserveNow')}
              </Button>
              <Button 
                variant="ghost" 
                className="text-white border-2 border-white/50 hover:bg-white/10 px-12 py-4 text-lg font-light rounded-full transition-all duration-300"
              >
                {t('joinCommunity')}
              </Button>
            </div>

            {/* News */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">NEWS</span>
                <span>{t('newsDate')}</span>
                <span>|</span>
                <span>{t('newsContent')}</span>
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
                    {t('footerDesc')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">{t('links')}</h4>
                  <div className="space-y-2">
                    {[t('plans'), t('experienceTitle'), t('facilitiesTitle'), t('accessTitle')].map((link) => (
                      <a key={link} href="#" className="block text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">{t('contact')}</h4>
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
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('privacyPolicy')}</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('terms')}</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
} 