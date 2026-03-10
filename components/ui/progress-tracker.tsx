import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface ProgressTrackerProps {
  currentStep: number;
  steps: string[];
}

export function ProgressTracker({ currentStep, steps }: ProgressTrackerProps) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-sea-green-500 -z-10 transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step} className="flex flex-col items-center gap-2 bg-white px-2">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300",
                  isCompleted
                    ? "bg-sea-green-500 border-sea-green-500 text-white"
                    : isCurrent
                    ? "border-sea-green-500 text-sea-green-500 bg-white"
                    : "border-gray-300 text-gray-300 bg-white"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-bold">{index + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium absolute top-10 w-24 text-center",
                  isCurrent ? "text-sea-green-600" : "text-gray-500"
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-8" /> {/* Spacer for labels */}
    </div>
  );
}
