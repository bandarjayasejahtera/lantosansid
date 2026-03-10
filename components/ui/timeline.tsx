import { cn } from "../../lib/utils";
import { CheckCircle2, Circle, Clock, FileText } from "lucide-react";

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent md:before:ml-[8.75rem] md:space-y-12">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={cn(
            "relative flex items-center md:justify-between",
            "group is-active"
          )}
        >
          {/* Icon */}
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm md:left-[8.75rem] md:-translate-x-1/2">
            {event.status === "completed" ? (
              <CheckCircle2 className="h-6 w-6 text-sea-green-500" />
            ) : event.status === "current" ? (
              <Clock className="h-6 w-6 text-bright-amber animate-pulse" />
            ) : (
              <Circle className="h-6 w-6 text-gray-300" />
            )}
          </div>

          {/* Content */}
          <div className="ml-16 flex w-full flex-col md:ml-0 md:w-auto md:flex-row md:items-center md:gap-8">
             {/* Date (Desktop: Left, Mobile: Top) */}
            <div className="mb-2 md:mb-0 md:w-32 md:text-right">
              <span className="text-sm font-medium text-gray-500">
                {event.date}
              </span>
            </div>
            
            {/* Card */}
            <div className="flex-1 rounded-xl border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md md:w-96">
              <h3 className="text-lg font-semibold leading-none tracking-tight mb-2 flex items-center gap-2">
                {event.title}
                {event.status === "current" && (
                  <span className="inline-flex items-center rounded-full border border-bright-amber bg-bright-amber/10 px-2 py-0.5 text-xs font-semibold text-bright-amber">
                    Proses
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
