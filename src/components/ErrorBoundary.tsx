import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Telemetry Boundary intercepted error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-6 my-4 rounded-xl bg-charcoal border border-charcoal-border text-center text-xs font-mono text-silver">
          <span className="text-racing-red font-bold">SYSTEM TELEMETRY RECALIBRATING: </span>
          <span>Module temporarily paused for safety. Continuing execution.</span>
        </div>
      );
    }

    return this.props.children;
  }
}
