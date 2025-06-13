'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Tent, ArrowLeft, ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReservationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [guestCount, setGuestCount] = useState(2)
  const [selectedRentals, setSelectedRentals] = useState<string[]>([])

  const plans = [
    {
      id: 'light',
      name: 'ライト',
      price: 5000,
      description: '気軽に学校キャンプ体験',
      features: ['区画サイト利用', 'トイレ・炊事場', 'チェックイン 15:00-18:00'],
      image: '/20250527041256.JPEG',
      popular: false
    },
    {
      id: 'standard',
      name: 'スタンダード',
      price: 8000,
      description: '手ぶらでらくらくキャンプ',
      features: ['基本ギア貸出付き', 'シャワー施設', 'チェックイン 15:00-18:00'],
      image: '/20250527041143.JPEG',
      popular: true
    },
    {
      id: 'premium',
      name: 'プレミアム',
      price: 12000,
      description: '贅沢廃校グランピング',
      features: ['グランピングサイト', 'ベッド・ソファ完備', '特別アクティビティ'],
      image: '/20250527041123.JPEG',
      popular: false
    }
  ]

  const timeSlots = [
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ]

  const rentalItems = [
    {
      id: 'tent-sauna',
      name: 'テントサウナ',
      price: 3000,
      description: '薪ストーブ式テントサウナ（2時間）',
      supporter: '地域サポーター：田中さん',
      image: '/20250527020306.JPEG'
    },
    {
      id: 'bbq-set',
      name: 'BBQセット',
      price: 2000,
      description: 'グリル・炭・着火剤・調理器具一式',
      supporter: '地域サポーター：佐藤さん',
      image: '/20250527020429.JPEG'
    },
    {
      id: 'camping-gear',
      name: 'キャンプギア',
      price: 1500,
      description: 'テント・寝袋・マット・ランタン',
      supporter: '地域サポーター：山田さん',
      image: '/20250430044445.JPEG'
    }
  ]

  const generateCalendar = () => {
    const today = new Date()
    const days = []
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date)
    }
    
    return days
  }

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }

  const formatDisplayDate = (date: Date) => {
    const weekdays = ['日', '月', '火', '水', '木', '金', '土']
    return `${date.getMonth() + 1}/${date.getDate()}(${weekdays[date.getDay()]})`
  }

  const calculateTotal = () => {
    const planPrice = plans.find(p => p.id === selectedPlan)?.price || 0
    const rentalPrice = selectedRentals.reduce((total, rentalId) => {
      const rental = rentalItems.find(r => r.id === rentalId)
      return total + (rental?.price || 0)
    }, 0)
    return planPrice + rentalPrice
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedPlan !== ''
      case 2: return selectedDate !== ''
      case 3: return selectedTime !== ''
      case 4: return true
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <Tent className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-light text-gray-900 tracking-wide">
                  奥房総みらいプロジェクト
                </span>
              </div>
            </Link>
            
            <div className="text-sm font-light text-gray-600">
              ご予約・プラン詳細
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-16">
            <div className="flex items-center justify-center space-x-8">
              {[
                { step: 1, title: 'プラン選択' },
                { step: 2, title: '日程選択' },
                { step: 3, title: '時間選択' },
                { step: 4, title: '確認・予約' }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-light ${
                    currentStep >= item.step 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > item.step ? <Check className="w-5 h-5" /> : item.step}
                  </div>
                  <span className={`ml-3 text-sm font-light ${
                    currentStep >= item.step ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </span>
                  {index < 3 && (
                    <ArrowRight className="w-4 h-4 text-gray-300 mx-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {/* Step 1: Plan Selection */}
            {currentStep === 1 && (
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">プランを選択してください</h2>
                  <p className="text-gray-600 font-light">あなたにぴったりのキャンプ体験をお選びください</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <Card 
                      key={plan.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPlan === plan.id 
                          ? 'border-2 border-gray-900 shadow-lg' 
                          : 'border border-gray-200 hover:border-gray-300'
                      } ${plan.popular ? 'relative' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-light tracking-wide">
                            RECOMMENDED
                          </span>
                        </div>
                      )}
                      
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={plan.image}
                          alt={plan.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <h3 className="text-xl font-light text-gray-900">{plan.name}</h3>
                          <p className="text-sm font-light text-gray-600">{plan.description}</p>
                          <div className="space-y-2">
                            <span className="text-3xl font-extralight text-gray-900">¥{plan.price.toLocaleString()}</span>
                            <p className="text-sm font-light text-gray-500">/泊</p>
                          </div>
                          <ul className="space-y-2 text-sm font-light text-gray-600">
                            {plan.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {currentStep === 2 && (
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">日程を選択してください</h2>
                  <p className="text-gray-600 font-light">ご希望のチェックイン日をお選びください</p>
                </div>
                
                <div className="grid grid-cols-7 gap-4 max-w-2xl mx-auto">
                  {generateCalendar().map((date, index) => {
                    const dateStr = formatDate(date)
                    const isSelected = selectedDate === dateStr
                    const isToday = date.toDateString() === new Date().toDateString()
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`p-4 rounded-lg text-center transition-all duration-200 ${
                          isSelected
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        } ${isToday ? 'ring-2 ring-gray-300' : ''}`}
                      >
                        <div className="text-sm font-light">
                          {formatDisplayDate(date)}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {currentStep === 3 && (
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">チェックイン時間を選択してください</h2>
                  <p className="text-gray-600 font-light">ご都合の良い時間をお選びください</p>
                </div>
                
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-4 rounded-lg text-center transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Clock className="w-5 h-5 mx-auto mb-2" />
                      <span className="text-sm font-light">{time}</span>
                    </button>
                  ))}
                </div>

                {/* Guest Count */}
                <div className="max-w-md mx-auto">
                  <label className="block text-sm font-light text-gray-700 mb-4 text-center">
                    ご利用人数
                  </label>
                  <div className="flex items-center justify-center space-x-6">
                    <button
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-2xl font-light text-gray-900 w-12 text-center">
                      {guestCount}
                    </span>
                    <button
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">ご予約内容の確認</h2>
                  <p className="text-gray-600 font-light">内容をご確認の上、予約を確定してください</p>
                </div>
                
                <div className="space-y-8">
                  {/* Booking Summary */}
                  <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-light text-gray-900 mb-6">予約内容</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-light">プラン</span>
                        <span className="text-gray-900 font-light">
                          {plans.find(p => p.id === selectedPlan)?.name}プラン
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-light">日程</span>
                        <span className="text-gray-900 font-light">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-light">チェックイン時間</span>
                        <span className="text-gray-900 font-light">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-light">人数</span>
                        <span className="text-gray-900 font-light">{guestCount}名</span>
                      </div>
                    </div>
                  </div>

                  {/* Rental Equipment */}
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-6">レンタル機材（オプション）</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {rentalItems.map((item) => (
                        <Card 
                          key={item.id}
                          className={`cursor-pointer transition-all duration-300 ${
                            selectedRentals.includes(item.id)
                              ? 'border-2 border-gray-900 shadow-lg'
                              : 'border border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => {
                            if (selectedRentals.includes(item.id)) {
                              setSelectedRentals(selectedRentals.filter(id => id !== item.id))
                            } else {
                              setSelectedRentals([...selectedRentals, item.id])
                            }
                          }}
                        >
                          <div className="relative h-32 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <h4 className="font-light text-gray-900">{item.name}</h4>
                              <p className="text-sm font-light text-gray-600">{item.description}</p>
                              <p className="text-sm font-light text-gray-500">{item.supporter}</p>
                              <p className="text-lg font-light text-gray-900">¥{item.price.toLocaleString()}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-light text-gray-900 mb-6">料金詳細</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-light">
                          {plans.find(p => p.id === selectedPlan)?.name}プラン
                        </span>
                        <span className="text-gray-900 font-light">
                          ¥{plans.find(p => p.id === selectedPlan)?.price.toLocaleString()}
                        </span>
                      </div>
                      {selectedRentals.map(rentalId => {
                        const rental = rentalItems.find(r => r.id === rentalId)
                        return rental ? (
                          <div key={rentalId} className="flex justify-between items-center">
                            <span className="text-gray-600 font-light">{rental.name}</span>
                            <span className="text-gray-900 font-light">¥{rental.price.toLocaleString()}</span>
                          </div>
                        ) : null
                      })}
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-light text-gray-900">合計</span>
                          <span className="text-2xl font-light text-gray-900">
                            ¥{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="border-t border-gray-100 p-8">
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-8 py-3 font-light tracking-wide"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  戻る
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 font-light tracking-wide"
                  >
                    次へ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-3 font-light tracking-wide"
                    onClick={() => {
                      alert('予約が完了しました！確認メールをお送りいたします。')
                    }}
                  >
                    予約を確定する
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}