import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, CircleDollarSign, BarChart3 } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import KeyFeatures from "@/components/key-features"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Secure Digital Wallet & Money Transfer
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wealth Guardian provides a safe and reliable platform to manage your money, transfer funds instantly,
                  and keep track of your transactions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 px-4 py-2 items-center" size="lg">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="inline-flex h-10 px-4 py-2 items-center" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <KeyFeatures />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features That Make Us Stand Out
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Wealth Guardian provides a comprehensive solution for managing your digital finances with ease and
                security.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Secure Wallet"
                description="Keep your money safe with our advanced security features, including two-factor authentication and encryption."
              />
              <FeatureCard
                icon={<CircleDollarSign className="h-10 w-10 text-primary" />}
                title="Instant Transfers"
                description="Send and receive money instantly with zero waiting time. Transfer to any user on our platform within seconds."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="Transaction History"
                description="Keep track of all your transactions with detailed history and analytics to help you manage your funds better."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
