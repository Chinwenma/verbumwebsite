import Button from "@/app/components/button/Button";
export default function AccessDenied() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Access Denied</h1>
      
      <p className="text-xl text-muted-foreground mb-10 max-w-md">
        You do not have permission to view this page.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button link="/dashboard" label="Back to Dashboard Home" variant="outline" />
        <Button link="/dashboard/settings" variant="primary" label="Go to Settings" />
      </div>
    </div>
  );
}