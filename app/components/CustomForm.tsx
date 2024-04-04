// app/components/CustomForm.tsx
import { Form } from "@remix-run/react";

interface CustomFormProps {
  action: string;
  method?: "get" | "post";
  className?: string;
  children: any;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  action,
  method = "post",
  className = "",
  children,
}) => {
  return (
    <Form action={action} method={method} className={`space-y-4 bg-white p-6 rounded-md shadow ${className}`}>
      {children}
    </Form>
  );
};
