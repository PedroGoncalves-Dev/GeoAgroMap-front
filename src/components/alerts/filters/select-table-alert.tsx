import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

const SelectTableAlert = () => {
  return (
    <div>
      <Alert variant="default">
        <CircleAlert />
        <AlertTitle>Selecione uma tabela</AlertTitle>
        <AlertDescription>
          Selecione uma tabela para continuar.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default SelectTableAlert;
