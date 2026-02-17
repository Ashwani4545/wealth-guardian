import { Card, CardContent } from "@/components/ui/card"
import { Mail, CircleDollarSign, ArrowRightLeft } from "lucide-react"

export default function KeyFeatures() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-center mb-4">
          <div className="bg-primary rounded-full p-3">
            <Mail className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-center">Key Features</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <p>Secure digital wallet with instant access</p>
          </div>
          <div className="flex items-start gap-3">
            <CircleDollarSign className="h-5 w-5 text-primary mt-0.5" />
            <p>Easy funds management and deposit</p>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRightLeft className="h-5 w-5 text-primary mt-0.5" />
            <p>Fast and secure money transfers to other users</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
