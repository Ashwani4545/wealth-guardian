import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CircleDollarSign, BarChart3, Lock, CreditCard, Bell, Users, Smartphone, Clock } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Features</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Discover all the powerful features that make Wealth Guardian the best choice for managing your digital
          finances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Shield className="h-8 w-8 text-primary" />}
          title="Secure Wallet"
          description="Keep your money safe with our advanced security features, including two-factor authentication and encryption."
        />
        <FeatureCard
          icon={<CircleDollarSign className="h-8 w-8 text-primary" />}
          title="Instant Transfers"
          description="Send and receive money instantly with zero waiting time. Transfer to any user on our platform within seconds."
        />
        <FeatureCard
          icon={<BarChart3 className="h-8 w-8 text-primary" />}
          title="Transaction History"
          description="Keep track of all your transactions with detailed history and analytics to help you manage your funds better."
        />
        <FeatureCard
          icon={<Lock className="h-8 w-8 text-primary" />}
          title="Advanced Security"
          description="Multi-layer security protocols to ensure your financial data and transactions are always protected."
        />
        <FeatureCard
          icon={<CreditCard className="h-8 w-8 text-primary" />}
          title="Multiple Payment Methods"
          description="Connect your bank accounts, credit cards, and other payment methods for seamless transactions."
        />
        <FeatureCard
          icon={<Bell className="h-8 w-8 text-primary" />}
          title="Real-time Notifications"
          description="Get instant alerts for all account activities to stay informed about your finances."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-primary" />}
          title="Group Payments"
          description="Split bills and share expenses easily with friends and family members."
        />
        <FeatureCard
          icon={<Smartphone className="h-8 w-8 text-primary" />}
          title="Mobile Access"
          description="Access your account anytime, anywhere with our mobile-friendly platform."
        />
        <FeatureCard
          icon={<Clock className="h-8 w-8 text-primary" />}
          title="Scheduled Transfers"
          description="Set up recurring payments and scheduled transfers to automate your financial tasks."
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-muted rounded-full p-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
