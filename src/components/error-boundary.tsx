"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "./ui/button"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  private resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Bir Şeyler Yanlış Gitti</h2>
          <p className="text-muted-foreground text-center mb-4 max-w-md">
            Özür dileriz, bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => window.location.reload()}>
              Sayfayı Yenile
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                this.resetError()
                window.location.href = "/"
              }}
            >
              Ana Sayfaya Dön
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
