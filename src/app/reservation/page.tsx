'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tent, ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function ReservationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([])

  const plans = [
    {
      id: "light",
      name: "ライト",
      price: 5000,
      description: "気軽に学校キャンプ体験",
      features: ["区画サイト利用", "トイレ・炊事場", "チェックイン 15:00-18:00"],
      popular: false
    },
    {
      id: "standard",
      name: "スタンダード",
      price: 8000,
      description: "手ぶらでらくらくキャンプ",
      features: ["基本ギア貸出付き", "シャワー施設", "チェックイン 15:00-18:00"],
      popular: true
    },
    {
      id: "premium",
      name: "プレミアム",
      price: 12000,
      description: "贅沢廃校グランピング",
      features: ["グランピングサイト", "ベッド・ソファ完備", "特別アクティビティ"],
      popular: false
    }
  ]

  const timeSlots = [
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
  ]

  const equipment = [
    { id: "tent", name: "テント", price: 2000, supporter: "山田太郎" },
    { id: "sleeping-bag", name: "寝袋", price: 1000, supporter: "佐藤花子" },
    { id: "chair", name: "アウトドアチェア", price: 500, supporter: "田中次郎" },
    { id: "table", name: "テーブル", price: 800, supporter: "鈴木美咲" },
    { id: "lantern", name: "ランタン", price: 600, supporter: "高橋健一" },
    { id: "bbq-set", name: "BBQセット", price: 1500, supporter: "伊藤雅子" }
  ]

  const calculateTotal = () => {
    const planPrice = plans.find(p => p.id === selectedPlan)?.price || 0
    const equipmentPrice = selectedEquipment.reduce((total, id) => {
      const item = equipment.find(e => e.id === id)
      return total + (item?.price || 0)
    }, 0)
    return planPrice + equipmentPrice
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Tent className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-light tracking-wide text-gray-900">
                奥房総みらいプロジェクト
              </h1>
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
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-light ${
                    currentStep >= step 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {currentStep > step ? <Check className="w-4 h-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-px ml-4 ${
                      currentStep > step ? 'bg-gray-900' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="text-center">
                <p className="text-sm font-light text-gray-600">
                  {currentStep === 1 && "プラン選択"}
                  {currentStep === 2 && "日程選択"}
                  {currentStep === 3 && "時間選択"}
                  {currentStep === 4 && "レンタル機材"}
                </p>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-16">
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">プランを選択してください</h2>
                  <p className="text-gray-600 font-light">お客様に最適なプランをお選びください</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <Card 
                      key={plan.id} 
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPlan === plan.id 
                          ? 'border-2 border-gray-900 shadow-lg' 
                          : 'border border-gray-200'
                      } ${plan.popular ? 'relative' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gray-900 text-white px-4 py-1 text-xs font-light tracking-wide rounded-full">
                            RECOMMENDED
                          </span>
                        </div>
                      )}
                      <CardContent className="p-8 text-center space-y-6">
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">日程を選択してください</h2>
                  <p className="text-gray-600 font-light">ご希望のチェックイン日をお選びください</p>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>
                
                {selectedDate && (
                  <div className="text-center">
                    <p className="text-gray-600 font-light">
                      選択日: {selectedDate.toLocaleDateString('ja-JP')}
                    </p>
                  </div>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">チェックイン時間を選択してください</h2>
                  <p className="text-gray-600 font-light">ご都合の良い時間をお選びください</p>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-light">{time}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extralight text-gray-900 mb-4">レンタル機材を選択してください</h2>
                  <p className="text-gray-600 font-light">必要な機材をお選びください（オプション）</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {equipment.map((item) => (
                    <Card 
                      key={item.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedEquipment.includes(item.id)
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => {
                        if (selectedEquipment.includes(item.id)) {
                          setSelectedEquipment(selectedEquipment.filter(id => id !== item.id))
                        } else {
                          setSelectedEquipment([...selectedEquipment, item.id])
                        }
                      }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="font-light text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">¥{item.price.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">サポーター: {item.supporter}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedEquipment.includes(item.id)
                              ? 'border-gray-900 bg-gray-900'
                              : 'border-gray-300'
                          }`}>
                            {selectedEquipment.includes(item.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Summary and Navigation */}
          <div className="border-t border-gray-100 pt-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-light text-gray-600">合計金額</p>
                <p className="text-2xl font-extralight text-gray-900">¥{calculateTotal().toLocaleString()}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="px-6 py-2 font-light"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    戻る
                  </Button>
                )}
                
                {currentStep < 4 ? (
                  <Button 
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !selectedPlan) ||
                      (currentStep === 2 && !selectedDate) ||
                      (currentStep === 3 && !selectedTime)
                    }
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 font-light"
                  >
                    次へ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-2 font-light"
                    onClick={() => alert('予約が完了しました！')}
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