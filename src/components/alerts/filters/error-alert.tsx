import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XIcon } from "lucide-react";

interface ErrorAlertProps {
  title: string;
  description: string;
}
const ErrorAlert = ({ title, description }: ErrorAlertProps) => {
  return (
    <div>
      <Alert variant="destructive">
        <XIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default ErrorAlert;
