import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Wealth Guardian</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Learn more about our mission to provide secure and accessible financial services to everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Wealth Guardian was founded in 2020 with a simple mission: to make digital financial services secure,
            accessible, and easy to use for everyone. We recognized that traditional banking systems often come with
            limitations, high fees, and complex processes.
          </p>
          <p className="text-muted-foreground mb-4">
            Our team of financial experts and technology innovators came together to create a platform that combines the
            best of both worlds - the security of traditional banking with the convenience and speed of modern
            technology.
          </p>
          <p className="text-muted-foreground">
            Today, Wealth Guardian serves thousands of users worldwide, helping them manage their finances, transfer
            money instantly, and keep track of their transactions with ease and confidence.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Our Growth</h3>
            <div className="grid grid-cols-3 gap-8 mt-6">
              <div>
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">$10M+</p>
                <p className="text-sm text-muted-foreground">Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-muted rounded-full p-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Security</h3>
            <p className="text-muted-foreground">
              We prioritize the security of your financial data and transactions above everything else, implementing the
              most advanced security measures in the industry.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-muted rounded-full p-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              We believe financial services should be accessible to everyone, regardless of their location or
              background, breaking down barriers to financial inclusion.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-muted rounded-full p-3 mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously innovate and improve our platform, embracing new technologies to provide you with the best
              possible financial experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join Us Today</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground mb-6">
          Experience the future of digital finance with Wealth Guardian. Join thousands of satisfied users who trust us
          with their financial needs.
        </p>
        <div className="flex justify-center">
          <a
            href="/signup"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium"
          >
            Create Your Account
          </a>
        </div>
      </div>
    </div>
  )
}
